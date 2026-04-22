import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, company, notes, answers } = body

  if (!name || !email) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  const extrasText = answers.extras?.length
    ? answers.extras.join(', ')
    : 'None'

  const projectSummary = [
    answers.type,
    answers.scale,
    answers.location,
    extrasText !== 'None' ? `Extras: ${extrasText}` : null,
  ].filter(Boolean).join(' · ')

  const text = `
New project enquiry from mediamurray.com

─────────────────────
CONTACT
Name:    ${name}
Email:   ${email}
${company ? `Company: ${company}` : ''}

PROJECT DETAILS
Type:      ${answers.type || '—'}
Scale:     ${answers.scale || '—'}
Location:  ${answers.location || '—'}
Extras:    ${extrasText}

${notes ? `ADDITIONAL NOTES\n${notes}` : ''}
─────────────────────
`.trim()

  const { error: sendError } = await resend.emails.send({
    from: 'MediaMurray Website <onboarding@resend.dev>',
    to: ['iamjamiemurray@gmail.com'],
    replyTo: email,
    subject: `New Enquiry — ${name}${company ? ` (${company})` : ''} — ${projectSummary}`,
    text,
  })

  if (sendError) {
    console.error('Resend error:', sendError)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }

  if (process.env.NOTION_API_KEY) {
    try {
      await fetch('https://api.notion.com/v1/pages', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
          'Content-Type': 'application/json',
          'Notion-Version': '2022-06-28',
        },
        body: JSON.stringify({
          parent: { database_id: '90cc60d38cad4df7b621ba4509677559' },
          properties: {
            Name: { title: [{ text: { content: `${name}${company ? ` — ${company}` : ''}` } }] },
            'Contact Email': { email },
            Stage: { select: { name: 'Enquiry' } },
            'Referral Source': { select: { name: 'Website' } },
            Deliverables: { rich_text: [{ text: { content: projectSummary } }] },
            'Enquiry Date': { date: { start: new Date().toISOString().split('T')[0] } },
          },
        }),
      })
    } catch {
      // Notion failure is non-fatal — email already sent
    }
  }

  return NextResponse.json({ success: true })
}
