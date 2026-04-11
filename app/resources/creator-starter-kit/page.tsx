import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Introduction to Content Creation',
  description: 'A practical, no-nonsense guide to getting started as a content creator. Equipment, filming, editing, and publishing - from personal experience.',
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
}

interface Module {
  number: string
  title: string
  tag: string
  intro?: string
  content: ContentSection[]
}

// ─── Module Data ──────────────────────────────────────────────────────────────

const modules: Module[] = [
  {
    number: '01',
    title: 'Getting Your Head Right',
    tag: 'Foundation',
    content: [
      {
        heading: 'Start with the right question.',
        body: `"What camera should I buy?" is almost never the right first question. The right first question is: what do I actually want to make, and who is it for?

The bar to start has never been lower. A phone with decent light and something worth saying is enough to begin.

Before you spend any money on equipment, be honest with yourself about what you want to make:`,
        list: [
          'Documentary',
          'Social content',
          'Corporate video',
          'Short film',
        ],
        // continues below
      },
      {
        heading: 'Just go and start making things.',
        body: `You have to go and start making things - experimenting, trying, getting it wrong. Things you'll cringe at in two years. That's just how it works. Every creative person I know has a folder of embarrassing early work; it's just par for the course.

The ones who made it are the ones who kept going anyway.

[ *Video placeholder - link to early work* ]`,
      },
    ],
  },
  {
    number: '02',
    title: 'Equipment: What You Actually Need',
    tag: 'Equipment',
    content: [
      {
        heading: 'Start with what you already have.',
        body: `The phone in your pocket shoots better video than professional broadcast cameras did fifteen years ago. Before you buy anything, learn the possibilities and limits of what you already own. Just test the equipment. You'll quickly learn what's actually holding you back - and it's usually not the camera.`,
      },
      {
        heading: 'Audio comes before everything.',
        body: `People will forgive poor video - if the story is strong enough, they'll push through it. But people will not put up with bad audio. That was one of the first lessons I was taught in college, and it stuck with me because it's completely true.

A practical example: if you're filming a documentary interview for the first time, the audio of that person talking is the thing you need to focus on first. Get that right. If the audio breaks down, there's no point going any further with the footage.

**Starter microphone options:**`,
        table: {
          headers: ['Microphone', 'Type', 'Approx. Price', 'Notes'],
          rows: [
            ['Deity V-Mic D3', 'On-camera shotgun', '~£50–60', 'Good starter option. Mounts on hot shoe, solid quality for the price.'],
            ['DJI Mic (original)', 'Wireless clip-on', '~£230', 'What I use. Compact, reliable, excellent for interviews and run-and-gun.'],
            ['Rode Wireless GO II', 'Wireless clip-on', '~£280', 'Industry favourite for talking head and interview work.'],
          ],
          note: 'There are many options at each price point - these are the ones I have personal experience with.',
        },
      },
      {
        heading: 'Camera: starter to professional.',
        body: `The table below gives a broad overview across the main brands. All of these are capable cameras - the differences become more relevant as your work grows in complexity and budget.

For detailed recommendations on what to actually buy first, read the full camera guide:`,
        table: {
          headers: ['Level', 'Sony', 'Canon', 'Fujifilm', 'Nikon', 'Approx. Price'],
          rows: [
            ['Starter', 'ZV-E10 II', 'EOS R50', 'X-T30 II', 'Z30', '£600–800'],
            ['Intermediate', 'a6700', 'EOS R8', 'X-S20', 'Z5 II', '£1,000–1,800'],
            ['Professional', 'a7C II / a7 IV', 'EOS R6 Mark II', 'X-T5', 'Z6 III', '£2,000+'],
          ],
          note: 'Prices are approximate and change regularly. Always check current listings before buying.',
        },
      },
      {
        heading: 'Lenses - start with the kit lens.',
        body: `Most cameras can be bought with a kit lens - usually something in the 18–55mm or 28–70mm range. This is more than enough to start with. I used a Sony A7 III with the kit lens (28–70mm) on professional client projects for well over a year before I bought another lens.

Going from a Canon 700D to a Sony A7 III with even just that kit lens was a significant leap in quality - you don't need to immediately invest in expensive glass.

**How I built my lens kit over time:**
- Kit lens (28–70mm) - where I started. Covers most situations.
- Sony FE 50mm f/1.8 - a natural second purchase. Sharp, affordable, great for portraits and interviews.
- Sony FE 16–35mm - this is the lens I reach for most now, particularly on a gimbal. It gives you a wide range of shots without swapping lenses. The majority of the films on this website were shot on a Sony A7 III or A7 IV with this lens.

You will eventually need a range of focal lengths. That's normal. But build it gradually - buy a lens because you've identified a specific need, not speculatively.`,
      },
      {
        heading: 'Lighting.',
        body: `Windows are always a source of natural light, giving soft, consistent light - particularly north-facing windows which give even, shadow-free coverage. Shoot facing the window rather than with it behind you.

When you're ready to invest in lighting, here are options at different levels:`,
        table: {
          headers: ['Option', 'Type', 'Approx. Price', 'Notes'],
          rows: [
            ['Budget 2-light softbox kit (Amazon)', 'Softbox', '£40–60', 'Perfectly functional for starting out. Search Amazon for "2-light softbox photography kit".'],
            ['Godox SL60W', 'LED panel', '~£100', 'Step up in quality and control. Popular and reliable.'],
            ['Aputure Amaran 60x', 'LED panel', '~£130', 'Excellent output, bi-colour, very well regarded in the industry.'],
            ['Ring light', 'Ring LED', '~£25–50', 'Good for talking head content and solo setups.'],
          ],
          note: 'A reflector (around £15) is one of the best value purchases you can make - bounces natural light back onto your subject.',
        },
      },
      {
        heading: 'Everything else.',
        body: `**Tripod** - A basic travel tripod (£30–50) is fine to start. A fluid head makes panning smoother.

**SD cards** - Most cameras use SD cards, but check your model first. When you do buy one, don't cheap out. A slow or unreliable card can lose footage. I buy faster, more expensive cards and they last years - I'm still using the same cards I bought in 2019. Aim for V30 rated minimum.

**Hard drives** - Back everything up. I use SanDisk portable SSDs as my main backup drives, but I also have G-Drives and Western Digital drives from years of accumulated footage. Two copies minimum. Additionally: always keep a project folder in cloud storage - Apple iCloud, Google Drive, or Amazon Photos (which offers storage for Prime members). This saved me more than once.

**ND filters** - Absolutely vital for outdoor filming. Once you own one, you own it forever. A variable ND (£30–60) covers most situations. A UV filter is also worth having on any lens you use regularly - it protects the front element.

Gimbals, drones, and cinema rigs are the next step - those will be covered in a separate guide.`,
      },
    ],
  },
  {
    number: '03',
    title: 'What to Actually Make',
    tag: 'Content Strategy',
    content: [
      {
        heading: 'Solve a problem or document something real.',
        body: `The strongest content either answers a question someone is already asking, or takes them somewhere they can't otherwise go. What do you know that other people don't? What have you done that other people are curious about? Start there.`,
      },
      {
        heading: 'Pick a lane.',
        body: `The more specifically you can define what your content is about - and who it's for - the faster you'll build an audience that actually cares. You can always expand later. Start narrow.`,
      },
      {
        heading: 'Short-form or long-form - or both.',
        body: `Short-form content (Reels, TikTok, YouTube Shorts) is faster to produce and faster to distribute. Long-form (YouTube, documentary) takes more time but builds deeper trust and stays discoverable for years. You could do one, or both - but be realistic about the work involved in each. Don't try to do everything at once and end up doing nothing well.`,
      },
      {
        heading: 'Pre-production.',
        body: `Turning up to film without a plan is one of the most common and costly mistakes you can make. Even five minutes of preparation before you pick up a camera will make the whole thing go more smoothly. Before any shoot, think through:`,
        list: [
          'A short list of locations or settings you want to use',
          'A written outline of what you need to cover',
          'A rough shot list - wide, medium, close-up, any specific angles',
          'What you need from the person you\'re filming (if applicable)',
        ],
      },
    ],
  },
  {
    number: '04',
    title: 'Filming: The Basics That Actually Matter',
    tag: 'Production',
    content: [
      {
        heading: 'The 180-degree shutter rule.',
        body: `Most people get this wrong early on. Set your shutter speed to double your frame rate. Shooting at 25fps? Shutter speed: 1/50. Shooting at 50fps? Shutter speed: 1/100. This gives motion a natural, film-like look. A high shutter speed makes footage look harsh and stuttery.`,
      },
      {
        heading: 'Expose correctly.',
        body: `Use your camera's histogram or zebra highlights to check exposure. Overexposed highlights are very hard to recover in the edit. Slightly underexposed footage is usually recoverable. When in doubt, protect the highlights.`,
      },
      {
        heading: 'Composition fundamentals.',
        body: `These apply whether you're shooting horizontal (landscape) or vertical (portrait) video:`,
        list: [
          'Rule of thirds - imagine the frame divided into a 3×3 grid. Place your subject on the intersecting lines, not dead centre.',
          'Headroom - don\'t leave too much empty space above your subject\'s head.',
          'Lead room - if someone is looking or moving in a direction, give space in that direction.',
          'Background - always be aware of what\'s behind your subject. A cluttered background distracts from the subject.',
        ],
      },
      {
        heading: 'Get multiple shots.',
        body: `Shoot wide, medium, and close-up versions of the same scene. Film cutaway shots - hands, objects, relevant details. These give you options in the edit and make your work look more considered and professional.`,
      },
    ],
  },
  {
    number: '05',
    title: 'Editing: Get Good, Stay Organised',
    tag: 'Post-Production',
    content: [
      {
        heading: 'Choosing software.',
        body: `**DaVinci Resolve** is the strongest free option available. Professional colour grading tools, full timeline editing, and it's what many working professionals use. There's no reason not to start here.

**Adobe Premiere Pro** is the industry standard for film and TV post-production. It's part of the Adobe Creative Cloud subscription, which is expensive at full price - but there's a widely known tip worth sharing: if you contact Adobe's support chat and explain that the full price isn't affordable for you, many people have been offered the student or introductory rate (around £31/month) simply by asking. It's worth a try.

**CapCut** works well for quick short-form edits and is widely used in social content creation. Fine for learning the basics and getting content out quickly.

There are outstanding tutorials for all three platforms on YouTube - entire industries of education have been built around these tools. Commit time to learning whichever you choose. There is no shortcut. You have to get hands-on with the tools and practise, and that's the only way the skills build. Like anything else, it takes time.`,
      },
      {
        heading: 'Music and sound.',
        body: `Do not use copyrighted music in your content without a licence. On YouTube, this will get your video muted or taken down. On social platforms, it can affect reach.

Royalty-free music options to look into: Epidemic Sound, Artlist, YouTube Audio Library (free), and Pixabay Music (free). Using the right music makes a significant difference to how your content feels - it's worth taking time to find tracks that suit your style.`,
      },
      {
        heading: 'Match your colours.',
        body: `If you're shooting standard footage straight out of camera (not flat or log profiles), the footage won't need heavy grading - but it does need attention. Most editing software now has good automatic colour tools, but you should still go in and make sure the image looks vibrant and balanced. Check that your whites are clean, your blacks aren't crushed, and the overall look is consistent across your clips.

Colour is an enormous topic and one that deserves its own guide. But even basic attention to it at the edit stage will make your work look more considered.`,
      },
      {
        heading: 'Organisation.',
        body: `Create a consistent folder structure for every project: Raw Footage / Audio / Music / Graphics / Exports.

Planning and preparation prevent poor performance. That applies as much to post-production as it does to the shoot itself. Building organised habits early on saves you significant time and frustration down the line.`,
      },
    ],
  },
  {
    number: '06',
    title: 'Publishing and Growing',
    tag: 'Distribution',
    content: [
      {
        heading: 'Consistency is what compounds.',
        body: `Algorithms reward consistency. Audiences trust consistency. Whatever schedule you decide on, the one you can actually maintain is the right one. One piece of content per week, published reliably, will outperform five pieces in one week followed by silence.`,
      },
      {
        heading: 'Titles and thumbnails.',
        body: `On YouTube especially, your thumbnail and title are the most important creative decisions you make - not the footage quality, not the edit. If someone doesn't click, they don't watch. Study what works in your niche. Be specific and honest in what you promise.`,
      },
      {
        heading: 'One last thing.',
        body: `In my experience, the people who make it in this industry are the ones willing to spend time with the tools, learn their equipment, and approach the work with genuine passion and dedication. I wish I could tell you that a creative career like this doesn't ask for your whole energy - but it does. That's exactly what it requires.

What that also means is that it compounds. The skills, the client relationships, the reputation - they all build slowly over time, and then suddenly you're living the kind of life you hoped for when you were younger. That doesn't happen without work, and there's no shortcut to it. But it is completely possible.

Everyone's journey is different. You'll have a whole different set of opportunities to what I had. The reason I've laid out my background and experiences on this website is so that people can come here, see the full picture, and know that it's possible - and what's actually involved in getting there.

Keep making things.`,
      },
    ],
  },
]

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
        if (para.startsWith('**') && !para.startsWith('**Starter') && para.includes(':**\n')) {
          const lines = para.split('\n')
          return (
            <div key={i}>
              {lines.map((line, k) => {
                if (line.startsWith('**') && line.endsWith('**')) {
                  return <p key={k} className="font-bold text-gray-900 dark:text-white mt-4 mb-1">{line.replace(/\*\*/g, '')}</p>
                }
                if (line.startsWith('- ')) {
                  return (
                    <p key={k} className="ml-4 text-gray-600 dark:text-white/60">
                      - <span dangerouslySetInnerHTML={{ __html: line.slice(2).replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900 dark:text-white">$1</strong>') }} />
                    </p>
                  )
                }
                return line ? <p key={k} className="text-gray-600 dark:text-white/60 leading-relaxed" dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900 dark:text-white font-bold">$1</strong>') }} /> : null
              })}
            </div>
          )
        }
        if (para.includes('\n') && para.split('\n').every(l => l.startsWith('- ') || l === '')) {
          return null // handled by list prop
        }
        return (
          <p key={i} className="text-gray-600 dark:text-white/60 leading-relaxed" dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900 dark:text-white font-bold">$1</strong>').replace(/\[ \*(.*?)\* \]/g, '<span class="block mt-2 p-3 border border-dashed border-gray-200 dark:border-white/10 text-xs text-gray-400 dark:text-white/30 rounded-sm italic">$1</span>') }} />
        )
      })}
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CreatorStarterKit() {
  return (
    <div className="pt-24">

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-b border-gray-200 dark:border-white/10">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-4">Free Resource</p>
        <h1 className="text-5xl font-black mb-6 text-gray-900 dark:text-white leading-tight max-w-3xl">
          Introduction to Content Creation
        </h1>
        <p className="text-gray-500 dark:text-white/50 max-w-2xl text-xl leading-relaxed mb-8">
          A practical, no-nonsense guide to getting started as a content creator - from equipment and filming to editing and publishing.
        </p>
        <div className="flex flex-wrap gap-3">
          {modules.map((m) => (
            <a
              key={m.number}
              href={`#module-${m.number}`}
              className="text-xs font-bold uppercase tracking-wider px-4 py-2 border border-gray-200 dark:border-white/20 text-gray-600 dark:text-white/60 hover:border-[#0052D4] hover:text-[#0052D4] transition-colors rounded-sm"
            >
              {m.number} - {m.tag}
            </a>
          ))}
        </div>
      </section>

      {/* Modules */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="space-y-24">
          {modules.map((mod) => (
            <div key={mod.number} id={`module-${mod.number}`} className="scroll-mt-32">
              {/* Module header */}
              <div className="flex items-center gap-6 mb-10 pb-6 border-b border-gray-200 dark:border-white/10">
                <span className="text-5xl font-black gradient-text leading-none flex-shrink-0">{mod.number}</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/40 mb-1">{mod.tag}</p>
                  <h2 className="text-2xl font-black text-gray-900 dark:text-white">{mod.title}</h2>
                </div>
              </div>

              {/* Sections */}
              <div className="space-y-12 max-w-3xl">
                {mod.content.map((section, i) => (
                  <div key={i}>
                    <h3 className="font-black text-lg text-gray-900 dark:text-white mb-4">{section.heading}</h3>

                    {section.body && <BodyText text={section.body} />}

                    {section.list && (
                      <ul className="mt-4 space-y-2">
                        {section.list.map((item, k) => (
                          <li key={k} className="flex gap-3 text-gray-600 dark:text-white/60">
                            <span className="text-[#0052D4] flex-shrink-0 mt-0.5">-</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.table && <TableBlock table={section.table} />}

                    {/* Camera guide link - appears after camera table */}
                    {section.heading === 'Camera: starter to professional.' && (
                      <Link
                        href="/What Camera Should I Buy - MediaMurray.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-4 text-sm font-bold text-[#0052D4] hover:text-[#00C6FF] transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                        Download: What Camera Should I Buy? (Free Guide)
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Author note */}
      <section className="border-t border-gray-200 dark:border-white/10 py-20 bg-gray-50 dark:bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-4">A Note</p>
            <p className="text-gray-600 dark:text-white/60 leading-relaxed mb-4">
              This is just a small sample of the things I wish someone had laid out for me clearly when I was starting out. I hope it&apos;s useful for people who are curious about getting into content creation.
            </p>
            <p className="text-gray-600 dark:text-white/60 leading-relaxed mb-8">
              If it has been helpful - if you&apos;ve learned anything from it or it&apos;s pointed you in the right direction - I&apos;d genuinely love to hear that. Send me an email at <a href="mailto:mail@mediamurray.com" className="text-[#0052D4] hover:underline">mail@mediamurray.com</a> and let me know.
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
            <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-2">Need video or photography for your business?</h2>
            <p className="text-gray-500 dark:text-white/50">If you&apos;re past the learning stage and need a professional - get in touch.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link href="/contact" className="gradient-bg text-white font-bold px-6 py-3 rounded-sm hover:opacity-90 transition-opacity text-sm uppercase tracking-wider whitespace-nowrap">
              Get a Quote
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
