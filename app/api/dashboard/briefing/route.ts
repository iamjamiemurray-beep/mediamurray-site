import { NextResponse } from 'next/server'

const DAILY_PAGE_ID = '32535c5827ab816d8712cec506cfbbb7'

type RichText = { plain_text: string }
type Block = {
  id: string
  type: string
  has_children: boolean
  [key: string]: unknown
}

function getText(richText: RichText[]): string {
  return (richText ?? []).map(r => r.plain_text).join('')
}

function blockToText(block: Block): string | null {
  const type = block.type
  const content = block[type] as { rich_text?: RichText[]; text?: RichText[]; checked?: boolean } | undefined
  if (!content) return null

  const rt = content.rich_text ?? content.text ?? []
  const text = getText(rt)

  if (type === 'to_do') return `${content.checked ? '[x]' : '[ ]'} ${text}`
  if (type === 'bulleted_list_item') return `• ${text}`
  if (type === 'numbered_list_item') return `${text}`
  if (type === 'paragraph') return text
  if (type === 'heading_1' || type === 'heading_2' || type === 'heading_3') return `## ${text}`
  if (type === 'quote' || type === 'callout') return text
  if (type === 'divider') return '---'
  return text || null
}

async function fetchBlocks(blockId: string, apiKey: string): Promise<Block[]> {
  const all: Block[] = []
  let cursor: string | undefined

  do {
    const url = `https://api.notion.com/v1/blocks/${blockId}/children?page_size=100${cursor ? `&start_cursor=${cursor}` : ''}`
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${apiKey}`, 'Notion-Version': '2022-06-28' },
      next: { revalidate: 300 },
    })
    if (!res.ok) break
    const data = await res.json()
    all.push(...(data.results ?? []))
    cursor = data.next_cursor ?? undefined
  } while (cursor)

  return all
}

async function fetchTableRows(blockId: string, apiKey: string): Promise<string[][]> {
  const blocks = await fetchBlocks(blockId, apiKey)
  return blocks
    .filter(b => b.type === 'table_row')
    .map(b => {
      const cells = (b.table_row as { cells: RichText[][] })?.cells ?? []
      return cells.map(cell => cell.map(r => r.plain_text).join(''))
    })
}

type Section = {
  heading: string
  items: string[]
}

export async function GET() {
  const apiKey = process.env.NOTION_API_KEY
  if (!apiKey) return NextResponse.json({ error: 'No Notion key' }, { status: 500 })

  const blocks = await fetchBlocks(DAILY_PAGE_ID, apiKey)

  const sections: Section[] = []
  let currentSection: Section | null = null
  let lastUpdated = ''

  for (const block of blocks) {
    const type = block.type

    // Extract last updated from first paragraph
    if (type === 'heading_2') {
      const text = getText((block.heading_2 as { rich_text: RichText[] }).rich_text ?? [])
      if (text.startsWith('🕐 Last Updated')) {
        lastUpdated = text.replace('🕐 Last Updated: ', '')
        continue
      }
      if (text === '---' || text.trim() === '') continue
      if (currentSection) sections.push(currentSection)
      currentSection = { heading: text, items: [] }
      continue
    }

    if (type === 'divider') continue

    // Today callout — high priority
    if (type === 'callout' || type === 'quote') {
      const rt = (block[type] as { rich_text?: RichText[] })?.rich_text ?? []
      const text = getText(rt)
      if (text.includes('TODAY') || text.includes('📍')) {
        if (currentSection) sections.push(currentSection)
        currentSection = { heading: '📍 Today', items: [text] }
        sections.push(currentSection)
        currentSection = null
        continue
      }
    }

    // Table — fetch rows
    if (type === 'table') {
      const rows = await fetchTableRows(block.id, apiKey)
      if (rows.length > 0 && currentSection) {
        for (const row of rows) {
          currentSection.items.push(row.join(' | '))
        }
      }
      continue
    }

    // To-do, paragraph, list items
    const text = blockToText(block)
    if (text && currentSection) {
      currentSection.items.push(text)
    }
  }

  if (currentSection) sections.push(currentSection)

  // Pull out key sections by heading keywords
  const find = (keyword: string) =>
    sections.find(s => s.heading.toLowerCase().includes(keyword.toLowerCase()))

  return NextResponse.json({
    lastUpdated,
    today: find('Today')?.items ?? [],
    actionItems: find('Action Items')?.items ?? [],
    activeProjects: find('Active Projects')?.items ?? [],
    invoices: find('Invoices')?.items ?? [],
    calendar: find('21 Days')?.items ?? find('Calendar')?.items ?? [],
    quickLinks: find('Quick Links')?.items ?? [],
    businessSnapshot: find('Business Snapshot')?.items ?? [],
  })
}
