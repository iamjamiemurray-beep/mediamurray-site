import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, company, message, phone } = body

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  const text = `
New enquiry from mediamurray.com/contact

Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ''}
${phone ? `Phone: ${phone}` : ''}

Message:
${message}
`.trim()

  await resend.emails.send({
    from: 'MediaMurray Website <onboarding@resend.dev>',
    to: 'mail@mediamurray.com',
    replyTo: email,
    subject: `New Enquiry — ${name}`,
    text,
  })

  return NextResponse.json({ success: true })
}
