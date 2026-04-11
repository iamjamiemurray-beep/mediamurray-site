import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, company, message, phone } = body

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })

  const text = `
New enquiry from mediamurray.com/contact

Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ''}
${phone ? `Phone: ${phone}` : ''}

Message:
${message}
`.trim()

  await transporter.sendMail({
    from: `"MediaMurray Website" <${process.env.GMAIL_USER}>`,
    to: 'mail@mediamurray.com',
    replyTo: email,
    subject: `New Enquiry — ${name}`,
    text,
  })

  return NextResponse.json({ success: true })
}
