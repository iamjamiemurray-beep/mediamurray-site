import { NextRequest, NextResponse } from 'next/server'

export async function GET(_req: NextRequest, { params }: { params: Promise<{ shortcode: string }> }) {
  const { shortcode } = await params
  try {
    const res = await fetch(`https://www.instagram.com/p/${shortcode}/`, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36' },
      next: { revalidate: 86400 },
    })
    const html = await res.text()
    const match = html.match(/og:image" content="([^"]+)"/)
    if (!match) return NextResponse.json({ error: 'not found' }, { status: 404 })
    const url = match[1].replace(/&amp;/g, '&')
    return NextResponse.json({ url })
  } catch {
    return NextResponse.json({ error: 'failed' }, { status: 500 })
  }
}
