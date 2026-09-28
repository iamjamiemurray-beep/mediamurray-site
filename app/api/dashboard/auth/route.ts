import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { password } = await req.json()
  // Trim both sides: a stray newline pasted into the Vercel env value otherwise breaks login
  const expected = process.env.DASHBOARD_PASSWORD?.trim()

  if (!expected || password?.trim() !== expected) {
    return NextResponse.json({ error: 'Incorrect password' }, { status: 401 })
  }

  const res = NextResponse.json({ success: true })
  res.cookies.set('mm_dashboard_auth', expected, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    // session cookie — no maxAge, clears when browser closes
    path: '/',
  })
  return res
}
