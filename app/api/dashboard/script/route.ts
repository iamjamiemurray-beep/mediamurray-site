import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

export async function POST(req: NextRequest) {
  const { topic, hook, format } = await req.json()

  if (!topic) return NextResponse.json({ error: 'No topic' }, { status: 400 })

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) return NextResponse.json({ error: 'No API key' }, { status: 500 })

  const client = new Anthropic({ apiKey })

  const prompt = `You are a video script writer for MediaMurray, a Scottish videographer and content creator. Write a short-form video script for social media (TikTok/Instagram Reels).

Topic: ${topic}
${hook ? `Opening hook: ${hook}` : ''}
${format ? `Format: ${format}` : ''}

Write a punchy, engaging script. Structure:
- Hook (first 3 seconds — grab attention immediately)
- Problem/setup (5-10 seconds)
- Value/solution (15-20 seconds)
- CTA (final 5 seconds)

Keep it under 60 seconds total when read aloud at a natural pace. Write the script itself, not instructions. Include [PAUSE], [B-ROLL: description] cues where relevant. Scottish/UK context and tone.`

  const message = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 1024,
    messages: [{ role: 'user', content: prompt }],
  })

  const script = message.content[0].type === 'text' ? message.content[0].text : ''

  return NextResponse.json({ script })
}
