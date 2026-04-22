import { NextResponse } from 'next/server'

const PAYMENTS_DB = 'd38d86da3d1c4167b9b92a6ddaf9d366'
const TARGET = 10000

export async function GET() {
  if (!process.env.NOTION_API_KEY) {
    return NextResponse.json({ error: 'No Notion key' }, { status: 500 })
  }

  const now = new Date()
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().split('T')[0]
  const monthEnd = new Date(now.getFullYear(), now.getMonth() + 1, 0).toISOString().split('T')[0]

  const res = await fetch(`https://api.notion.com/v1/databases/${PAYMENTS_DB}/query`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
      'Content-Type': 'application/json',
      'Notion-Version': '2022-06-28',
    },
    body: JSON.stringify({ page_size: 100 }),
  })

  if (!res.ok) {
    return NextResponse.json({ error: 'Notion error' }, { status: 500 })
  }

  const data = await res.json()

  let total = 0
  const payments: { name: string; amount: number; date: string }[] = []

  for (const page of data.results) {
    const props = page.properties

    // Try common amount property names
    const amount =
      props.Amount?.number ??
      props['Invoice Amount']?.number ??
      props.Value?.number ??
      props.Total?.number ??
      0

    // Try common date property names
    const dateStr =
      props.Date?.date?.start ??
      props['Payment Date']?.date?.start ??
      props['Invoice Date']?.date?.start ??
      props.Created?.created_time?.split('T')[0] ??
      ''

    const name =
      props.Name?.title?.[0]?.plain_text ??
      props.Client?.title?.[0]?.plain_text ??
      'Payment'

    if (dateStr >= monthStart && dateStr <= monthEnd && amount > 0) {
      total += amount
      payments.push({ name, amount, date: dateStr })
    }
  }

  return NextResponse.json({
    total,
    target: TARGET,
    percent: Math.min(Math.round((total / TARGET) * 100), 100),
    payments,
    month: now.toLocaleString('en-GB', { month: 'long', year: 'numeric' }),
  })
}
