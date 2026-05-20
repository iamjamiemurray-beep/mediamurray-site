import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const CLIENT_DB = '90cc60d38cad4df7b621ba4509677559'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, company, message, phone, service, date } = body

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  const text = `
New enquiry from mediamurray.com/contact

Name:    ${name}
Email:   ${email}
${company ? `Company: ${company}` : ''}
${phone ? `Phone:   ${phone}` : ''}
${service ? `Service: ${service}` : ''}
${date ? `Date:    ${date}` : ''}

Project Details:
${message}
`.trim()

  const { error: emailError } = await resend.emails.send({
    from: 'MediaMurray Website <mail@mediamurray.com>',
    to: ['mail@mediamurray.com'],
    replyTo: email,
    subject: `New Enquiry — ${name}`,
    text,
  })

  if (emailError) {
    console.error('Resend error:', emailError)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }

  // Add to Notion Client & Project Database
  if (process.env.NOTION_API_KEY) {
    const today = new Date().toISOString().split('T')[0]

    const notesText = [
      phone ? `Phone: ${phone}` : null,
      date ? `Preferred date: ${date}` : null,
      `Project details: ${message}`,
    ].filter(Boolean).join('\n')

    const notionPayload = {
      parent: { database_id: CLIENT_DB },
      properties: {
        Name: {
          title: [{ text: { content: name } }],
        },
        Stage: {
          select: { name: 'Enquiry' },
        },
        'Contact Email': {
          email: email,
        },
        Organisation: {
          rich_text: [{ text: { content: company ?? '' } }],
        },
        Deliverables: {
          rich_text: [{ text: { content: service ?? '' } }],
        },
        Notes: {
          rich_text: [{ text: { content: notesText } }],
        },
        'Enquiry Date': {
          date: { start: today },
        },
        'Referral Source': {
          select: { name: 'Website' },
        },
      },
    }

    const notionRes = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
      },
      body: JSON.stringify(notionPayload),
    })

    if (!notionRes.ok) {
      const errBody = await notionRes.text()
      console.error('Notion create failed:', notionRes.status, errBody)
    }
  }

  return NextResponse.json({ success: true })
}
