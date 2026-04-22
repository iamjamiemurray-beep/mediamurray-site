import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const IDEA_BANK_DB = 'd75ee24adb8e46cda40e2e38d35d0c3f'
const CLIENT_DB = '90cc60d38cad4df7b621ba4509677559'

function notionHeaders() {
  return {
    Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
    'Content-Type': 'application/json',
    'Notion-Version': '2022-06-28',
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractText(p: any): string {
  if (!p) return ''
  if (p.type === 'title') return p.title?.map((t: any) => t.plain_text).join('') ?? ''
  if (p.type === 'rich_text') return p.rich_text?.map((t: any) => t.plain_text).join('') ?? ''
  if (p.type === 'select') return p.select?.name ?? ''
  if (p.type === 'number') return p.number != null ? String(p.number) : ''
  return ''
}

async function fetchIdeas() {
  const res = await fetch(`https://api.notion.com/v1/databases/${IDEA_BANK_DB}/query`, {
    method: 'POST',
    headers: notionHeaders(),
    body: JSON.stringify({ page_size: 30, sorts: [{ timestamp: 'created_time', direction: 'descending' }] }),
  })
  const data = await res.json()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (data.results ?? []).map((page: any) => {
    const p = page.properties
    return {
      title: p['Video Title']?.title?.[0]?.plain_text ?? 'Untitled',
      status: p.Status?.select?.name ?? 'New',
      platform: p.Platform?.select?.name ?? '',
      creator: p.Creator?.rich_text?.[0]?.plain_text ?? '',
      actionPoints: p['Action Points']?.rich_text?.[0]?.plain_text ?? '',
      score: p['Verdict Score']?.number ?? null,
    }
  })
}

async function fetchPipeline() {
  const res = await fetch(`https://api.notion.com/v1/databases/${CLIENT_DB}/query`, {
    method: 'POST',
    headers: notionHeaders(),
    body: JSON.stringify({ page_size: 50 }),
  })
  const data = await res.json()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (data.results ?? []).map((page: any) => {
    const p = page.properties
    const name =
      extractText(p['Client Name']) ||
      extractText(p['Project Name']) ||
      extractText(p['Name']) ||
      extractText(p['Client'])
    const stage = extractText(p['Stage']) || extractText(p['Status'])
    const deliverables = extractText(p['Deliverables']) || extractText(p['Service'])
    const date: string = p['Shoot Date']?.date?.start ?? p['Date']?.date?.start ?? ''
    return { name, stage, deliverables, date }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }).filter((p: any) => p.name)
}

async function runResearcher(client: Anthropic): Promise<string> {
  const ideas = await fetchIdeas()
  const list = ideas
    .map((i: { title: string; platform: string; score: number | null; status: string }) => `- "${i.title}" [${i.platform || 'Unknown'}]${i.score != null ? ` Score: ${i.score}/10` : ''}${i.status ? ` Status: ${i.status}` : ''}`)
    .join('\n')

  const msg = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 1024,
    messages: [{
      role: 'user',
      content: `You are a content research analyst for MediaMurray — a solo Edinburgh-based videographer targeting £10k/month revenue.

Here are the ${ideas.length} most recent ideas in the Idea Bank:
${list}

Analyse and provide:
1. **Top 3 content themes** appearing across these ideas
2. **Content gaps** — topics missing but relevant to a Scottish videographer
3. **Best idea to act on this week** — pick one, say exactly why
4. **Platform distribution** — what to post where

Be direct, no waffle. Use UK English.`,
    }],
  })
  return msg.content[0].type === 'text' ? msg.content[0].text : ''
}

async function runScriptwriter(client: Anthropic): Promise<string> {
  const ideas = await fetchIdeas()
  const candidates = ideas.filter((i: { status: string }) => i.status === 'New' || i.status === 'In Progress')
  const best = candidates.sort((a: { score: number | null }, b: { score: number | null }) => (b.score ?? 0) - (a.score ?? 0))[0]
  if (!best) return 'No new ideas in the Idea Bank to script. Add some ideas first.'

  const msg = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 1024,
    messages: [{
      role: 'user',
      content: `You are a video script writer for MediaMurray, a Scottish videographer based in Edinburgh.

Write a punchy short-form script (TikTok/Reels, under 60 seconds when read aloud) for this idea:
"${best.title}"
${best.actionPoints ? `\nContext: ${best.actionPoints}` : ''}

Structure:
- Hook (first 3 seconds — grab attention)
- Problem/Setup (5-10 seconds)
- Value/Solution (15-20 seconds)
- CTA (final 5 seconds)

Include [PAUSE] and [B-ROLL: description] cues. Scottish/UK tone. Write the script itself, not instructions.`,
    }],
  })

  const script = msg.content[0].type === 'text' ? msg.content[0].text : ''
  return `**Scripting idea: "${best.title}"**\n\n${script}`
}

async function runPipeline(client: Anthropic): Promise<string> {
  const projects = await fetchPipeline()
  const active = projects.filter((p: { stage: string }) => !['Complete', 'Delivered', 'Paid'].includes(p.stage))

  if (active.length === 0) {
    return 'No active projects found in the pipeline. All clear — or worth checking your Notion database is shared with the integration.'
  }

  const list = active
    .map((p: { name: string; stage: string; deliverables: string; date: string }) => `- ${p.name}: ${p.stage || 'No stage'}${p.deliverables ? ` (${p.deliverables})` : ''}${p.date ? ` — ${p.date}` : ''}`)
    .join('\n')

  const msg = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 512,
    messages: [{
      role: 'user',
      content: `You are a business assistant for MediaMurray, a solo Scottish videographer.

Active pipeline (${active.length} projects):
${list}

Give a concise action list for this week — 3-5 specific bullet points. What needs to move? Who needs chasing? What's at risk of slipping? Be direct, UK English.`,
    }],
  })
  return msg.content[0].type === 'text' ? msg.content[0].text : ''
}

export async function POST(req: NextRequest) {
  const { agent } = await req.json()

  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ error: 'No API key — add ANTHROPIC_API_KEY to Vercel env vars.' }, { status: 500 })
  }
  if (!process.env.NOTION_API_KEY) {
    return NextResponse.json({ error: 'No Notion key' }, { status: 500 })
  }

  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

  try {
    let result = ''
    if (agent === 'researcher') result = await runResearcher(client)
    else if (agent === 'scriptwriter') result = await runScriptwriter(client)
    else if (agent === 'pipeline') result = await runPipeline(client)
    else return NextResponse.json({ error: 'Unknown agent' }, { status: 400 })

    return NextResponse.json({ result })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Agent failed'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
