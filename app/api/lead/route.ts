import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const { name, email, phone, company } = await req.json()

  if (!name || !email) {
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
Someone has started onboarding at mediamurray.com/onboarding.
If a full project brief doesn't follow, they may have dropped out - worth following up.

─────────────────────
Name:    ${name}
Email:   ${email}
Phone:   ${phone || '-'}
Company: ${company || '-'}
─────────────────────
`.trim()

  await transporter.sendMail({
    from: `"MediaMurray Onboarding" <${process.env.GMAIL_USER}>`,
    to: 'mail@mediamurray.com',
    replyTo: email,
    subject: `New Enquiry Started - ${name}${company ? ` (${company})` : ''}`,
    text,
  })

  return NextResponse.json({ success: true })
}
