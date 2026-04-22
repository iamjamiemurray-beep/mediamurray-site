import { NextRequest, NextResponse } from 'next/server'
import { YoutubeTranscript } from 'youtube-transcript'

const IDEA_BANK_DB = 'd75ee24adb8e46cda40e2e38d35d0c3f'
const CLIENT_DB = '90cc60d38cad4df7b621ba4509677559'

const WATCH_CREATORS = [
  'Peter McKinnon',
  'Mark Bone',
  'WhoisMattJohnson',
  'Danny Gevirtz',
  'Matti Haapoja',
]

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

async function runResearcher(): Promise<string> {
  const res = await fetch(`https://api.notion.com/v1/databases/${IDEA_BANK_DB}/query`, {
    method: 'POST',
    headers: notionHeaders(),
    body: JSON.stringify({ page_size: 30, sorts: [{ timestamp: 'created_time', direction: 'descending' }] }),
  })
  const data = await res.json()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ideas = (data.results ?? []).map((page: any) => {
    const p = page.properties
    return {
      title: p['Video Title']?.title?.[0]?.plain_text ?? 'Untitled',
      status: p.Status?.select?.name ?? 'New',
      platform: p.Platform?.select?.name ?? '',
      creator: p.Creator?.rich_text?.[0]?.plain_text ?? '',
      score: p['Verdict Score']?.number ?? null,
      actionPoints: p['Action Points']?.rich_text?.[0]?.plain_text ?? '',
    }
  })

  if (ideas.length === 0) return 'No ideas in the Idea Bank yet.'

  const byStatus: Record<string, typeof ideas> = {}
  for (const idea of ideas) {
    const s = idea.status || 'Unknown'
    if (!byStatus[s]) byStatus[s] = []
    byStatus[s].push(idea)
  }

  const lines: string[] = [`IDEA BANK — ${ideas.length} entries\n`]
  for (const [status, items] of Object.entries(byStatus)) {
    lines.push(`── ${status.toUpperCase()} (${items.length}) ──`)
    for (const i of items) {
      lines.push(`• ${i.title}${i.platform ? ` [${i.platform}]` : ''}${i.score != null ? ` — Score: ${i.score}/10` : ''}`)
      if (i.creator) lines.push(`  Creator: ${i.creator}`)
      if (i.actionPoints) lines.push(`  Notes: ${i.actionPoints}`)
    }
    lines.push('')
  }

  return lines.join('\n')
}

async function runScriptwriter(): Promise<string> {
  const res = await fetch(`https://api.notion.com/v1/databases/${IDEA_BANK_DB}/query`, {
    method: 'POST',
    headers: notionHeaders(),
    body: JSON.stringify({
      page_size: 20,
      sorts: [{ timestamp: 'created_time', direction: 'descending' }],
      filter: {
        or: [
          { property: 'Status', select: { equals: 'New' } },
          { property: 'Status', select: { equals: 'In Progress' } },
        ],
      },
    }),
  })
  const data = await res.json()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ideas = (data.results ?? []).map((page: any) => {
    const p = page.properties
    return {
      title: p['Video Title']?.title?.[0]?.plain_text ?? 'Untitled',
      platform: p.Platform?.select?.name ?? '',
      score: p['Verdict Score']?.number ?? null,
      actionPoints: p['Action Points']?.rich_text?.[0]?.plain_text ?? '',
    }
  }).sort((a: { score: number | null }, b: { score: number | null }) => (b.score ?? 0) - (a.score ?? 0))

  if (ideas.length === 0) return 'No new or in-progress ideas to script. Add some ideas to the Idea Bank first.'

  const lines: string[] = [`UNACTIONED IDEAS — Ready to Script (${ideas.length})\nSorted by Verdict Score\n`]
  ideas.forEach((i: { title: string; platform: string; score: number | null; actionPoints: string }, idx: number) => {
    lines.push(`${idx + 1}. ${i.title}`)
    if (i.platform) lines.push(`   Platform: ${i.platform}`)
    if (i.score != null) lines.push(`   Score: ${i.score}/10`)
    if (i.actionPoints) lines.push(`   Notes: ${i.actionPoints}`)
    lines.push('')
  })

  return lines.join('\n')
}

async function runPipeline(): Promise<string> {
  const res = await fetch(`https://api.notion.com/v1/databases/${CLIENT_DB}/query`, {
    method: 'POST',
    headers: notionHeaders(),
    body: JSON.stringify({ page_size: 50 }),
  })
  const data = await res.json()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const projects = (data.results ?? []).map((page: any) => {
    const p = page.properties
    const name = extractText(p['Client Name']) || extractText(p['Project Name']) || extractText(p['Name']) || extractText(p['Client'])
    const stage = extractText(p['Stage']) || extractText(p['Status'])
    const deliverables = extractText(p['Deliverables']) || extractText(p['Service'])
    const date: string = p['Shoot Date']?.date?.start ?? p['Date']?.date?.start ?? ''
    const value = extractText(p['Amount']) || extractText(p['Invoice Amount']) || extractText(p['Value'])
    return { name, stage, deliverables, date, value }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }).filter((p: any) => p.name)

  if (projects.length === 0) return 'No projects found in the pipeline.'

  const stageOrder = ['Enquiry', 'Booked', 'Filming', 'Editing', 'Delivered', 'Complete']
  const byStage: Record<string, typeof projects> = {}
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  for (const proj of projects) {
    const s = proj.stage || 'Unknown'
    if (!byStage[s]) byStage[s] = []
    byStage[s].push(proj)
  }

  const ordered = [...stageOrder, ...Object.keys(byStage).filter(s => !stageOrder.includes(s))]
  const lines: string[] = [`CLIENT PIPELINE — ${projects.length} projects\n`]

  for (const stage of ordered) {
    const items = byStage[stage]
    if (!items?.length) continue
    lines.push(`── ${stage.toUpperCase()} (${items.length}) ──`)
    for (const p of items) {
      lines.push(`• ${p.name}${p.value ? ` — ${p.value}` : ''}`)
      if (p.deliverables) lines.push(`  ${p.deliverables}`)
      if (p.date) lines.push(`  Date: ${p.date}`)
    }
    lines.push('')
  }

  return lines.join('\n')
}

async function runHookScout(): Promise<string> {
  const apiKey = process.env.YOUTUBE_API_KEY
  if (!apiKey) return 'Add YOUTUBE_API_KEY to Vercel env vars to enable Creator Intel.'

  const lines: string[] = [`CREATOR INTEL — Latest videos from watched creators\n`]

  for (const creator of WATCH_CREATORS) {
    try {
      const chRes = await fetch(
        `https://www.googleapis.com/youtube/v3/search?q=${encodeURIComponent(creator)}&type=channel&part=snippet&maxResults=1&key=${apiKey}`
      )
      const chData = await chRes.json()
      const channelId = chData.items?.[0]?.id?.channelId
      if (!channelId) {
        lines.push(`── ${creator.toUpperCase()} ──\n(Channel not found)\n`)
        continue
      }

      const vidRes = await fetch(
        `https://www.googleapis.com/youtube/v3/search?channelId=${channelId}&type=video&part=snippet&order=date&maxResults=3&key=${apiKey}`
      )
      const vidData = await vidRes.json()
      const videos = vidData.items ?? []

      lines.push(`── ${creator.toUpperCase()} (${videos.length} recent videos) ──`)

      for (const item of videos) {
        const title = item.snippet?.title ?? ''
        const videoId = item.id?.videoId ?? ''
        const published = item.snippet?.publishedAt?.split('T')[0] ?? ''
        lines.push(`\n📹 ${title}${published ? ` (${published})` : ''}`)

        if (videoId) {
          try {
            const segments = await YoutubeTranscript.fetchTranscript(videoId)
            const transcript = segments.map((s: { text: string }) => s.text).join(' ').split(' ').slice(0, 150).join(' ')
            if (transcript) lines.push(`   Opening: "${transcript}…"`)
          } catch {
            // no transcript available
          }
        }
      }
      lines.push('')
    } catch {
      lines.push(`── ${creator.toUpperCase()} ──\n(Could not fetch — try again)\n`)
    }
  }

  return lines.join('\n')
}

export async function POST(req: NextRequest) {
  const { agent } = await req.json()

  if (!process.env.NOTION_API_KEY && agent !== 'hooks') {
    return NextResponse.json({ error: 'No Notion key' }, { status: 500 })
  }

  try {
    let result = ''
    if (agent === 'researcher') result = await runResearcher()
    else if (agent === 'scriptwriter') result = await runScriptwriter()
    else if (agent === 'pipeline') result = await runPipeline()
    else if (agent === 'hooks') result = await runHookScout()
    else return NextResponse.json({ error: 'Unknown agent' }, { status: 400 })

    return NextResponse.json({ result })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Agent failed'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
