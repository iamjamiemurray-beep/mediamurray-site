import { NextResponse } from 'next/server'

const NOTION_DB = '90cc60d38cad4df7b621ba4509677559'

const STAGES = ['Enquiry', 'Booked', 'Filming', 'Editing', 'Delivered', 'Complete', 'Idea']

export async function GET() {
  if (!process.env.NOTION_API_KEY) {
    return NextResponse.json({ error: 'No Notion key' }, { status: 500 })
  }

  const res = await fetch(`https://api.notion.com/v1/databases/${NOTION_DB}/query`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
      'Content-Type': 'application/json',
      'Notion-Version': '2022-06-28',
    },
    body: JSON.stringify({ page_size: 100 }),
  })

  if (!res.ok) {
    const errBody = await res.json().catch(() => ({}))
    return NextResponse.json({ error: 'Notion error', detail: errBody, status: res.status }, { status: 500 })
  }

  const data = await res.json()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const grouped: Record<string, any[]> = {}
  for (const stage of STAGES) grouped[stage] = []

  for (const page of data.results) {
    const props = page.properties
    const name = props.Name?.title?.[0]?.plain_text ?? 'Untitled'
    const stage = props.Stage?.select?.name ?? 'Other'
    const email = props['Contact Email']?.email ?? ''
    const deliverables = props.Deliverables?.rich_text?.[0]?.plain_text ?? ''
    const date = props['Enquiry Date']?.date?.start ?? ''

    const entry = { id: page.id, name, email, deliverables, date }

    if (grouped[stage]) {
      grouped[stage].push(entry)
    }
  }

  return NextResponse.json({ stages: STAGES, grouped })
}
