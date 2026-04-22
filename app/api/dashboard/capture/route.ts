import { NextRequest, NextResponse } from 'next/server'

const IDEA_BANK_DB = 'd75ee24adb8e46cda40e2e38d35d0c3f'

export async function POST(req: NextRequest) {
  const { text } = await req.json()

  if (!text?.trim()) {
    return NextResponse.json({ error: 'No text' }, { status: 400 })
  }

  if (!process.env.NOTION_API_KEY) {
    return NextResponse.json({ error: 'No Notion key' }, { status: 500 })
  }

  const res = await fetch('https://api.notion.com/v1/pages', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
      'Content-Type': 'application/json',
      'Notion-Version': '2022-06-28',
    },
    body: JSON.stringify({
      parent: { database_id: IDEA_BANK_DB },
      properties: {
        'Video Title': { title: [{ text: { content: text.trim() } }] },
        Status: { select: { name: 'New' } },
      },
    }),
  })

  if (!res.ok) {
    return NextResponse.json({ error: 'Notion error' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
