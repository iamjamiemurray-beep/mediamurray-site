import { NextResponse } from 'next/server'

const IDEA_BANK_DB = 'd75ee24adb8e46cda40e2e38d35d0c3f'

export async function GET() {
  if (!process.env.NOTION_API_KEY) {
    return NextResponse.json({ error: 'No Notion key' }, { status: 500 })
  }

  const res = await fetch(`https://api.notion.com/v1/databases/${IDEA_BANK_DB}/query`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
      'Content-Type': 'application/json',
      'Notion-Version': '2022-06-28',
    },
    body: JSON.stringify({
      page_size: 50,
      sorts: [{ timestamp: 'created_time', direction: 'descending' }],
    }),
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    return NextResponse.json({ error: 'Notion error', detail: err }, { status: 500 })
  }

  const data = await res.json()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ideas = data.results.map((page: any) => {
    const props = page.properties
    const title = props['Video Title']?.title?.[0]?.plain_text ?? 'Untitled'
    const status = props.Status?.select?.name ?? 'New'
    const platform = props.Platform?.select?.name ?? ''
    const creator = props.Creator?.rich_text?.[0]?.plain_text ?? ''
    const actionPoints = props['Action Points']?.rich_text?.[0]?.plain_text ?? ''
    const score = props['Verdict Score']?.number ?? null
    const url = props['Source URL']?.url ?? ''
    const created = page.created_time?.split('T')[0] ?? ''

    return { id: page.id, title, status, platform, creator, actionPoints, score, url, created }
  })

  return NextResponse.json({ ideas })
}
