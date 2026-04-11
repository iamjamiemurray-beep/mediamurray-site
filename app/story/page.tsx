import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Story',
  description: 'From the Isle of Bute to 170+ client projects — the journey behind MediaMurray.',
  robots: { index: false, follow: false },
}

const milestones = [
  {
    year: '2000s',
    label: 'Isle of Bute',
    title: 'Born & Raised on the Island',
    body: "Growing up on the Isle of Bute — a small island off the west coast of Scotland — shaped the way I see and tell stories. A tight-knit community, dramatic landscape, and a slower pace than the mainland. The connection to Bute is a recurring thread throughout everything I do.",
    photo: '/jamieyoung1.jpg',
    accent: '#0052D4',
  },
  {
    year: '2016',
    label: 'Glasgow',
    title: 'HND Television Production — City of Glasgow College',
    body: "Started the HND in TV Production at City of Glasgow College at 18 with no contacts in the industry and no clear route in. Wrote cold emails, received almost no replies. The ones that did reply changed everything. STV2 offered work experience on Live At Five as a runner and autocue operator — the first real foot in the door. Completed 11 weeks of unpaid work experience across multiple companies, and got hands-on with DoP Gavin Hopkins on a 48 Hour Film Project.",
    photo: '/jamieyoung3.jpg',
    accent: '#0052D4',
    quote: '"Asking for opportunities is something people want to be asked."',
  },
  {
    year: '2018',
    label: 'Edinburgh',
    title: 'Degree — Television Production, Edinburgh Napier University',
    body: "Progressed to the full degree programme at Edinburgh Napier University. Four years of developing craft, building a reel, and learning what professional production actually looks like from the inside. Graduated in 2020 with a First Class degree.",
    photo: '/jamieyoung4.jpg',
    accent: '#004AB5',
  },
  {
    year: '2020',
    label: 'Edinburgh',
    title: 'Technical Operator — Scottish Parliament',
    body: "First professional role after graduating — Technical Operator on the broadcast team at the Scottish Parliament. Responsible for operating cameras and broadcast equipment during live parliamentary proceedings and committee sessions. A masterclass in staying calm, being precise, and understanding how high-stakes live production works.",
    photo: null,
    accent: '#0052D4',
  },
  {
    year: '2021',
    label: 'Glasgow',
    title: 'Videographer & Editor — RangersTV',
    body: "Joined RangersTV as Videographer and Editor — producing original content for one of Scotland's largest football clubs. Filmed training sessions, player interviews, matchday content, and feature pieces. Highlights included filming at the UEFA Europa League Final in Seville. Thousands of hours of editing experience compressed into a high-output, high-expectation environment.",
    photo: null,
    accent: '#1A3A6E',
    quote: null,
  },
  {
    year: '2022',
    label: 'Edinburgh',
    title: 'Back to the Scottish Parliament',
    body: "Returned to the Scottish Parliament broadcast team. The breadth of experience now — live production, sports media, interview-led content — made the role broader and more skilled. Also began taking on freelance camera work alongside the role, including as camera operator for Club71 filming Melanie Woods in April 2022.",
    photo: null,
    accent: '#0052D4',
  },
  {
    year: '2020–',
    label: 'Scotland',
    title: 'MediaMurray — Going Freelance',
    body: "Built MediaMurray from scratch — solo operator, no agency, no support structure. 170+ client projects since graduating. Broadcast-quality work for BBC Scotland, the Scottish Parliament, LowlandRFCA, RangersTV, Scottish Fair Trade, Scottish Youth Parliament, and many more. Army Cadet background directly informed early access-led work with RFCA. ERS Bronze Award recipient. Equipment built up gradually to Sony a7IV + a7III, DJI Mini 5 Pro, full Adobe suite.",
    photo: '/jamiebts4.jpeg',
    accent: '#0052D4',
    quote: '"Without the journey, there is no joy."',
  },
]

export default function Story() {
  return (
    <div className="pt-24">

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-4">MediaMurray</p>
        <h1 className="text-6xl font-black mb-6 text-gray-900 dark:text-white leading-tight">
          The Story
        </h1>
        <p className="text-gray-500 dark:text-white/50 max-w-2xl text-xl leading-relaxed">
          From a small island off the west coast of Scotland to 170+ professional projects — this is the journey behind the work.
        </p>
      </section>

      {/* Timeline */}
      <section className="border-t border-gray-200 dark:border-white/10 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[120px] top-0 bottom-0 w-px bg-gray-200 dark:bg-white/10 hidden md:block" />

            <div className="space-y-20">
              {milestones.map((m, i) => (
                <div key={i} className="relative grid grid-cols-1 md:grid-cols-[140px_1fr] gap-8">

                  {/* Year + dot */}
                  <div className="md:text-right relative">
                    <div className="hidden md:block absolute right-[-9px] top-2 w-4 h-4 rounded-full border-2 border-white dark:border-[#0a0a0a] z-10" style={{ backgroundColor: m.accent }} />
                    <p className="text-2xl font-black" style={{ color: m.accent }}>{m.year}</p>
                    <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-white/40 mt-1">{m.label}</p>
                  </div>

                  {/* Content */}
                  <div className="md:pl-12">
                    <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-4">{m.title}</h2>
                    <p className="text-gray-600 dark:text-white/60 leading-relaxed mb-6 max-w-2xl">{m.body}</p>

                    {m.quote && (
                      <blockquote className="border-l-4 pl-5 mb-6 italic text-gray-500 dark:text-white/50" style={{ borderColor: m.accent }}>
                        {m.quote}
                      </blockquote>
                    )}

                    {m.photo && (
                      <div className="overflow-hidden rounded-sm max-w-xs">
                        <Image
                          src={m.photo}
                          alt={m.title}
                          width={400}
                          height={300}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-gray-200 dark:border-white/10 py-20 bg-gray-50 dark:bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '170+', label: 'Client Projects' },
              { value: '6+', label: 'Years Freelance' },
              { value: '2020', label: 'First Class Graduate' },
              { value: '11wk', label: 'Unpaid Work Experience' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-black gradient-text mb-2">{s.value}</p>
                <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-white/40">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-200 dark:border-white/10 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black mb-4 text-gray-900 dark:text-white">Ready to work together?</h2>
          <p className="text-gray-500 dark:text-white/50 mb-8 max-w-xl mx-auto">If you&apos;re looking for experience, reliability, and someone who delivers what&apos;s agreed — get in touch.</p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact" className="gradient-bg text-white font-bold px-8 py-4 rounded-sm hover:opacity-90 transition-opacity text-sm uppercase tracking-wider">
              Get in Touch
            </Link>
            <Link href="/work" className="border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white font-bold px-8 py-4 rounded-sm hover:border-gray-500 dark:hover:border-white/50 transition-colors text-sm uppercase tracking-wider">
              View Work
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
