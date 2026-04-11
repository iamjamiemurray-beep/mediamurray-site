import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const {
    name, email, company, service,
    description, deliverables, dates,
    location, budget, extras,
  } = body

  if (!name || !email || !service || !description) {
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
New project brief from mediamurray.com/onboarding

─────────────────────
CONTACT
Name:    ${name}
Email:   ${email}
Company: ${company || '—'}

PROJECT
Service:     ${service}
Description: ${description}
Deliverables: ${deliverables || '—'}
Preferred dates: ${dates || '—'}
Location / venue: ${location || '—'}
Budget indication: ${budget || '—'}

Additional info:
${extras || '—'}
─────────────────────
`.trim()

  await transporter.sendMail({
    from: `"MediaMurray Onboarding" <${process.env.GMAIL_USER}>`,
    to: 'mail@mediamurray.com',
    replyTo: email,
    subject: `New Project Brief — ${name}${company ? ` (${company})` : ''}`,
    text,
  })

  return NextResponse.json({ success: true })
}
