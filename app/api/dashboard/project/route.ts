import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id')
  if (!id) return NextResponse.json({ error: 'No id' }, { status: 400 })

  if (!process.env.NOTION_API_KEY) {
    return NextResponse.json({ error: 'No Notion key' }, { status: 500 })
  }

  const res = await fetch(`https://api.notion.com/v1/pages/${id}`, {
    headers: {
      Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
      'Notion-Version': '2022-06-28',
    },
  })

  if (!res.ok) {
    return NextResponse.json({ error: 'Notion error' }, { status: 500 })
  }

  const page = await res.json()
  const props = page.properties

  // Extract all readable properties
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const extract = (p: any): string => {
    if (!p) return ''
    if (p.type === 'title') return p.title?.map((t: any) => t.plain_text).join('') ?? ''
    if (p.type === 'rich_text') return p.rich_text?.map((t: any) => t.plain_text).join('') ?? ''
    if (p.type === 'select') return p.select?.name ?? ''
    if (p.type === 'multi_select') return p.multi_select?.map((s: any) => s.name).join(', ') ?? ''
    if (p.type === 'email') return p.email ?? ''
    if (p.type === 'phone_number') return p.phone_number ?? ''
    if (p.type === 'number') return p.number != null ? String(p.number) : ''
    if (p.type === 'date') return p.date?.start ?? ''
    if (p.type === 'checkbox') return p.checkbox ? 'Yes' : 'No'
    if (p.type === 'url') return p.url ?? ''
    if (p.type === 'created_time') return p.created_time ?? ''
    if (p.type === 'last_edited_time') return p.last_edited_time ?? ''
    if (p.type === 'formula') return p.formula?.string ?? String(p.formula?.number ?? '') ?? ''
    if (p.type === 'relation') return p.relation?.map((r: any) => r.id).join(', ') ?? ''
    return ''
  }

  const fields: { label: string; value: string }[] = []
  for (const [key, val] of Object.entries(props)) {
    const value = extract(val)
    if (value) fields.push({ label: key, value })
  }

  const notionUrl = page.url ?? ''

  return NextResponse.json({ fields, notionUrl })
}
