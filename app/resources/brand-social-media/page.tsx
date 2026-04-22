import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Establishing Your Brand on Social Media',
  description: 'A practical guide for business owners and sole traders who want to build or rebuild a credible presence on social media. No prior experience needed.',
}

// ─── Types ────────────────────────────────────────────────────────────────────

interface TableData {
  headers: string[]
  rows: string[][]
  note?: string
}

interface ContentSection {
  heading: string
  body?: string
  table?: TableData
  list?: string[]
  checklist?: string[]
}

interface Part {
  number: string
  title: string
  tag: string
  intro?: string
  content: ContentSection[]
}

// ─── Content ──────────────────────────────────────────────────────────────────

const parts: Part[] = [
  {
    number: '01',
    title: 'Before You Post a Single Thing',
    tag: 'Strategy',
    intro: 'Most people start in the wrong place. They think about what to post before they know what they\'re trying to say. Fix that first.',
    content: [
      {
        heading: 'Define Your One-Line Positioning',
        body: `Finish this sentence before you open Instagram:

*"I help [who] to [achieve what] by [how]."*

Example: *"I help Edinburgh-based businesses get professional video content without a big-agency budget."*

If you can't write that sentence, your content will feel vague — because it is. Come back to it. Get it right.`,
      },
      {
        heading: 'Know Exactly Who You\'re Talking To',
        body: `Pick one person. Not "businesses" or "people aged 25–45." One actual person.`,
        list: [
          'What do they do for a living?',
          'What problem are they trying to solve?',
          'What do they scroll past, and what makes them stop?',
          'What do they already know? What do they need explained?',
        ],
      },
      {
        heading: 'Define Your Brand Voice',
        body: `Your voice is how you sound — and it should be consistent. Choose three words that describe how you want to come across.

Examples: *Professional but approachable. Direct and honest. Warm and expert.*

Write those words down. Read every caption and script against them before posting.`,
      },
    ],
  },
  {
    number: '02',
    title: 'Pick Your Platform',
    tag: 'Platforms',
    intro: 'Start with one. Master it before adding more. Spreading yourself across five platforms at once guarantees mediocrity on all five. Pick the one where your audience actually is.',
    content: [
      {
        heading: 'Instagram Reels',
        body: `**Best for:** Visual businesses, services, local businesses, creative work, B2C.

**What works:**
- Short (7–30 seconds) beats long almost every time
- The first 1–2 seconds decide everything — your hook must land instantly
- Trending audio increases reach, but original audio builds brand
- Consistent visual style matters — people recognise you before they read your name

**What to post:** Behind the scenes, results, how-to clips, talking to camera, client transformations.

**Posting frequency:** 3–5 Reels per week to grow, 1–2 to maintain.`,
      },
      {
        heading: 'TikTok',
        body: `**Best for:** Reach and discoverability. Especially good if you're starting from zero.

**What works:**
- Native, unpolished content often outperforms heavily produced content
- Authenticity is rewarded algorithmically — be yourself, not a brand
- Longer videos (1–3 min) are performing well if the content holds attention
- Comment section engagement matters — reply to comments with videos

**What to post:** Stories, opinions, tutorials, day-in-the-life, reactions, niche expertise.

**Posting frequency:** 1 per day if you're growing actively. 3–5 per week minimum.`,
      },
      {
        heading: 'LinkedIn',
        body: `**Best for:** B2B, professional services, corporate clients, thought leadership.

**What works:**
- Long-form text posts (500–1,000 words, no links) consistently outperform
- Video performs well but the bar is lower — you don't need cinematic quality
- Share your perspective, not just updates. Opinions earn engagement; announcements don't
- Your personal profile outperforms a company page — people connect with people

**What to post:** Industry observations, lessons from projects, your process, client outcomes (with permission), honest career reflection.

**Posting frequency:** 3–5 times per week.`,
      },
    ],
  },
  {
    number: '03',
    title: 'The Content Framework',
    tag: 'Content Strategy',
    intro: 'Every piece of content you make falls into one of three buckets. You need all three.',
    content: [
      {
        heading: 'Bucket 1 — Authority Content',
        body: `*This positions you as the expert.*

Shows what you know. Teaches something. Demonstrates your process. Makes people think "this person knows what they're talking about."

**Examples:**
- "Three things I check before every shoot"
- "Why most business videos fail in the first 3 seconds"
- "What nobody tells you about hiring a videographer"`,
      },
      {
        heading: 'Bucket 2 — Personality Content',
        body: `*This makes people like you and remember you.*

Shows who you are. Behind the scenes. How you work. What you care about. The human behind the brand.

**Examples:**
- A day on a shoot
- How you set up your kit
- Something that went wrong and how you fixed it
- Why you started doing this`,
      },
      {
        heading: 'Bucket 3 — Proof Content',
        body: `*This gives people a reason to trust you.*

Results. Testimonials. Case studies. Before and after. Real work, real outcomes.

**Examples:**
- Client testimonial video
- Before/after transformation
- Project reveal with real numbers
- Screenshot of a client reaction`,
      },
      {
        heading: 'The Ratio',
        body: `Aim for: **40% Authority / 40% Personality / 20% Proof.**

Most people over-index on proof (constantly showing finished work) and under-invest in authority and personality. The ratio above builds trust faster.`,
      },
    ],
  },
  {
    number: '04',
    title: 'The Hook Formula',
    tag: 'Scripting',
    intro: 'The first 1–3 seconds of any video decide whether it gets watched or scrolled past. Most people waste their hook.',
    content: [
      {
        heading: 'Three types of hook that work',
        body: `**1. Call out the exact person**
"If you're a small business owner who's tried making content and given up..."

**2. Make a bold claim**
"Most business videos are a waste of money. Here's why."

**3. Ask the question they're already asking**
"What does professional video content actually cost?"

Avoid starting with: your name, your company, "so today I wanted to share," or any kind of preamble. Start mid-sentence if you have to.`,
      },
      {
        heading: 'The Script Structure That Works Every Time',
        list: [
          'Hook — grab them in the first 2 seconds',
          'Problem — name the pain they recognise',
          'Solution — what you do / what they should do',
          'Proof — one example, one result, one testimonial',
          'CTA — one clear action ("DM me," "link in bio," "save this post")',
        ],
      },
    ],
  },
  {
    number: '05',
    title: 'Formats and Production Basics',
    tag: 'Production',
    content: [
      {
        heading: 'Aspect Ratios',
        table: {
          headers: ['Format', 'Ratio', 'Where to use'],
          rows: [
            ['Short-form vertical', '9:16', 'Reels, TikTok, Shorts'],
            ['Square', '1:1', 'Instagram feed, LinkedIn'],
            ['Landscape', '16:9', 'YouTube, LinkedIn video, website'],
          ],
          note: 'Shoot vertical if you\'re primarily posting to Instagram and TikTok. Shoot landscape for YouTube or your website. If you need both, shoot landscape and crop for vertical — but vertical-native footage always looks better on mobile.',
        },
      },
      {
        heading: 'What You Actually Need to Start',
        body: `You don't need a professional camera to start. You need:`,
        list: [
          'A smartphone with a decent camera (iPhone 12+ or Android equivalent)',
          'Natural light — face a window, don\'t stand with it behind you',
          'Any lapel mic or EarPod microphone — audio matters more than video quality',
          'A consistent background — your desk, your logo on a wall, outside — somewhere clean',
        ],
      },
      {
        heading: 'Batch Filming',
        body: `Don't film once a week. Film once a month.

Set aside one morning. Script 8–12 pieces of content. Film them all in one session — change your top between batches if you want visual variety. Edit across the week. Schedule them out.

This is how solo operators and small teams actually keep up with posting consistently. It's not volume of sessions — it's efficiency per session.`,
      },
    ],
  },
  {
    number: '06',
    title: 'The 30-Day Launch Plan',
    tag: 'Action Plan',
    content: [
      {
        heading: 'Week 1 — Foundation',
        checklist: [
          'Write your one-line positioning statement',
          'Define your one target audience person',
          'Choose your primary platform',
          'Set up or refresh your profile: photo, bio, link',
          'Write 10 post ideas across the three content buckets',
        ],
      },
      {
        heading: 'Week 2 — First 5 Posts',
        checklist: [
          'Post 1: Introduce yourself — who you are, what you do, why you do it',
          'Post 2: Authority — teach one thing you know',
          'Post 3: Personality — behind the scenes or your process',
          'Post 4: Proof — a result, testimonial or project outcome',
          'Post 5: Authority — answer the question you get asked most',
        ],
      },
      {
        heading: 'Week 3 — Build the Habit',
        checklist: [
          'Film a batch of 6–8 videos in one session',
          'Post 3–5 times this week',
          'Reply to every comment, even just to say thanks',
          'Engage with 10 accounts in your niche per day (comment meaningfully, not just emoji)',
        ],
      },
      {
        heading: 'Week 4 — Review and Adjust',
        checklist: [
          'Check your analytics: which posts got the most reach, saves, and profile visits?',
          'Do more of what worked. Drop what didn\'t.',
          'Refine your hook style based on what actually stopped people scrolling',
          'Plan next month\'s batch filming session',
        ],
      },
    ],
  },
  {
    number: '07',
    title: 'The Most Common Mistakes',
    tag: 'Watch Out',
    content: [
      {
        heading: 'Posting without a strategy',
        body: `If you don't know why you're posting something, your audience won't either. Every post should serve a purpose — authority, personality, or proof. If it doesn't fit any of those, it probably shouldn't go out.`,
      },
      {
        heading: 'Giving up after 30 days',
        body: `Social media compounds. The accounts you admire have 12–18 months of consistent posting behind them. It looks like overnight success from the outside. Give it a proper run before you judge whether it's working.`,
      },
      {
        heading: 'Chasing trends instead of building a brand',
        body: `Trending audio and formats can boost reach. But if your content is entirely trend-dependent, you build an audience for the trend — not for you. Use trends as vehicles for your message, not as the message itself.`,
      },
      {
        heading: 'Making it all about you',
        body: `Every piece of content should answer "what does this give my audience?" before it answers "what does this say about me?" The brands that grow fastest are obsessively focused on the person they're trying to help.`,
      },
      {
        heading: "Waiting until it's perfect",
        body: `Done is better than perfect. Publish the imperfect video. Improve the next one. Nobody's watching as closely as you think. The people who win at content are the ones who publish consistently and get better in public — not the ones who spend three weeks on a single post.`,
      },
    ],
  },
]

// ─── Quick Reference Table ────────────────────────────────────────────────────

const quickRef = {
  platforms: {
    headers: ['Platform', 'Best For', 'Format'],
    rows: [
      ['Instagram', 'Visual, local, B2C', 'Reels 9:16, carousel'],
      ['TikTok', 'Reach, discovery, authentic', 'Vertical, native feel'],
      ['LinkedIn', 'B2B, professional services', 'Text posts + video'],
      ['YouTube', 'Long-form, evergreen', '16:9 landscape'],
    ],
  },
  buckets: {
    headers: ['Content Bucket', '% of Posts', 'Purpose'],
    rows: [
      ['Authority', '40%', 'Expertise, trust, positioning'],
      ['Personality', '40%', 'Likability, relatability, connection'],
      ['Proof', '20%', 'Credibility, results, social proof'],
    ],
  },
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function TableBlock({ table }: { table: TableData }) {
  return (
    <div className="my-6 overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b-2 border-gray-200 dark:border-white/20">
            {table.headers.map((h) => (
              <th key={h} className="text-left text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/40 py-3 pr-6 whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, i) => (
            <tr key={i} className="border-b border-gray-100 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors">
              {row.map((cell, j) => (
                <td key={j} className={`py-3 pr-6 text-gray-600 dark:text-white/60 leading-relaxed align-top ${j === 0 ? 'font-bold text-gray-900 dark:text-white whitespace-nowrap' : ''}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {table.note && (
        <p className="text-xs text-gray-400 dark:text-white/30 mt-3 italic">{table.note}</p>
      )}
    </div>
  )
}

function BodyText({ text }: { text: string }) {
  return (
    <div className="space-y-4">
      {text.split('\n\n').map((para, i) => {
        const lines = para.split('\n')
        const hasBullets = lines.some(l => l.startsWith('- ') || l.startsWith('* '))
        const hasBold = para.includes('**')

        if (hasBold || hasBullets) {
          return (
            <div key={i} className="space-y-1">
              {lines.map((line, k) => {
                if (!line.trim()) return null
                if (line.startsWith('- ') || line.startsWith('* ')) {
                  return (
                    <p key={k} className="ml-4 text-gray-600 dark:text-white/60 flex gap-2">
                      <span className="text-[#0052D4] flex-shrink-0">–</span>
                      <span dangerouslySetInnerHTML={{ __html: line.slice(2).replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900 dark:text-white">$1</strong>') }} />
                    </p>
                  )
                }
                if (line.startsWith('**') && line.endsWith('**')) {
                  return <p key={k} className="font-bold text-gray-900 dark:text-white mt-3 mb-1">{line.replace(/\*\*/g, '')}</p>
                }
                return (
                  <p key={k} className="text-gray-600 dark:text-white/60 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900 dark:text-white font-bold">$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>') }}
                  />
                )
              })}
            </div>
          )
        }

        return (
          <p key={i} className="text-gray-600 dark:text-white/60 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900 dark:text-white font-bold">$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>') }}
          />
        )
      })}
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BrandSocialMedia() {
  return (
    <div className="pt-24">

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-b border-gray-200 dark:border-white/10">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-4">Free Guide</p>
        <h1 className="text-5xl font-black mb-6 text-gray-900 dark:text-white leading-tight max-w-3xl">
          Establishing or Re-establishing Your Brand on Social Media
        </h1>
        <p className="text-gray-500 dark:text-white/50 max-w-2xl text-xl leading-relaxed mb-3">
          For business owners, founders, and sole traders who want to build a credible social media presence. Practical, no-nonsense, written in plain English.
        </p>
        <p className="text-sm text-gray-400 dark:text-white/30 mb-10">~12 min read · 7 parts</p>
        <div className="flex flex-wrap gap-3">
          {parts.map((p) => (
            <a
              key={p.number}
              href={`#part-${p.number}`}
              className="text-xs font-bold uppercase tracking-wider px-4 py-2 border border-gray-200 dark:border-white/20 text-gray-600 dark:text-white/60 hover:border-[#0052D4] hover:text-[#0052D4] transition-colors rounded-sm"
            >
              {p.number} — {p.tag}
            </a>
          ))}
        </div>
      </section>

      {/* Intro callout */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-0">
        <div className="max-w-3xl border-l-4 border-[#0052D4] pl-6 py-2">
          <p className="text-gray-600 dark:text-white/60 leading-relaxed">
            <strong className="text-gray-900 dark:text-white">Who this is for:</strong> Business owners, founders, sole traders and individuals who want to build or rebuild a credible presence on social media. No prior experience needed.
          </p>
        </div>
      </section>

      {/* Parts */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="space-y-24">
          {parts.map((part) => (
            <div key={part.number} id={`part-${part.number}`} className="scroll-mt-32">
              {/* Part header */}
              <div className="flex items-center gap-6 mb-10 pb-6 border-b border-gray-200 dark:border-white/10">
                <span className="text-5xl font-black gradient-text leading-none flex-shrink-0">{part.number}</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/40 mb-1">{part.tag}</p>
                  <h2 className="text-2xl font-black text-gray-900 dark:text-white">{part.title}</h2>
                </div>
              </div>

              {part.intro && (
                <p className="text-gray-500 dark:text-white/50 text-lg leading-relaxed max-w-3xl mb-10">{part.intro}</p>
              )}

              {/* Sections */}
              <div className="space-y-12 max-w-3xl">
                {part.content.map((section, i) => (
                  <div key={i}>
                    <h3 className="font-black text-lg text-gray-900 dark:text-white mb-4">{section.heading}</h3>

                    {section.body && <BodyText text={section.body} />}

                    {section.list && (
                      <ul className="mt-4 space-y-2">
                        {section.list.map((item, k) => (
                          <li key={k} className="flex gap-3 text-gray-600 dark:text-white/60">
                            <span className="text-[#0052D4] flex-shrink-0 mt-0.5">–</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.checklist && (
                      <ul className="mt-4 space-y-3">
                        {section.checklist.map((item, k) => (
                          <li key={k} className="flex gap-3 text-gray-600 dark:text-white/60">
                            <span className="w-4 h-4 border border-gray-300 dark:border-white/20 rounded-sm flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.table && <TableBlock table={section.table} />}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Reference */}
      <section className="border-t border-gray-200 dark:border-white/10 py-20 bg-gray-50 dark:bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Quick Reference</p>
          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-12">At a Glance</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl">
            <div>
              <h3 className="font-black text-gray-900 dark:text-white mb-4 uppercase tracking-wide text-sm">Platforms</h3>
              <TableBlock table={quickRef.platforms} />
            </div>
            <div>
              <h3 className="font-black text-gray-900 dark:text-white mb-4 uppercase tracking-wide text-sm">Content Mix</h3>
              <TableBlock table={quickRef.buckets} />
            </div>
          </div>
        </div>
      </section>

      {/* Author note */}
      <section className="border-t border-gray-200 dark:border-white/10 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-4">A Note</p>
            <p className="text-gray-600 dark:text-white/60 leading-relaxed mb-4">
              Social media is one of the most powerful tools a small business has — and one of the most consistently misused. The principles in this guide aren&apos;t complicated, but they do require consistency and patience to work. If you apply them properly over 90 days, you will see results.
            </p>
            <p className="text-gray-600 dark:text-white/60 leading-relaxed mb-8">
              If you want to take it further — professional video content that gives you months of material from a single day — that&apos;s exactly what a <Link href="/services/content-day" className="text-[#0052D4] hover:underline">Content Day</Link> is designed for. Get in touch and we can talk through what that would look like for your business.
            </p>
            <p className="font-black text-gray-900 dark:text-white">Jamie Murray</p>
            <p className="text-sm text-gray-400 dark:text-white/40">MediaMurray</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-200 dark:border-white/10 py-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-2">Need professional content to put this into practice?</h2>
            <p className="text-gray-500 dark:text-white/50">One shoot day can give you weeks of social content, done properly.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link href="/services/content-day" className="gradient-bg text-white font-bold px-6 py-3 rounded-sm hover:opacity-90 transition-opacity text-sm uppercase tracking-wider whitespace-nowrap">
              Content Day →
            </Link>
            <Link href="/resources" className="border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white font-bold px-6 py-3 rounded-sm hover:border-gray-500 dark:hover:border-white/50 transition-colors text-sm uppercase tracking-wider whitespace-nowrap">
              More Guides
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
