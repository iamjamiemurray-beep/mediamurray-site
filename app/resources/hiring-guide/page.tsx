import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '5 Things to Know Before Hiring a Videographer in Scotland | MediaMurray',
  description: 'A practical, honest guide to commissioning video in Scotland. Written by a working videographer with 170+ client projects delivered.',
}

const points = [
  {
    number: '01',
    heading: 'Know the outcome before you know the output',
    body: [
      '"We need a two-minute video" is not a brief. It is an assumption about the solution before you have defined the problem.',
      'The first question any good videographer should ask you is: who is this for and what do you need them to do afterwards? A promotional video for a charity campaign and a promotional video for a product launch are completely different pieces of work, even if they are the same length.',
      'Before you make a single call, write one sentence: who watches this, and what should they feel or do when it ends? That sentence is your brief. Everything else - length, format, style - follows from it.',
    ],
    tip: 'If you struggle to write that sentence, that is normal. But starting with it will save you time, money, and revision rounds.',
  },
  {
    number: '02',
    heading: 'Ask to see work that matches your brief - not just their best reel',
    body: [
      "Every videographer's highlight reel shows their best work under the best conditions. What you want to see is work similar to what you are commissioning.",
      "If you need an event covered, ask to see event coverage. If you need a talking-head corporate interview, ask for that. If you need a charity fundraising film with emotional weight, ask for their charity work.",
      "The reason this matters is consistency. Anyone can produce one excellent piece under ideal conditions. What you are hiring for is someone who can produce solid, professional work to brief, on the day, every time.",
    ],
    tip: 'Ask for three examples that are similar to your project. If they cannot show you three, that does not mean they cannot do the job - but it is worth asking why.',
  },
  {
    number: '03',
    heading: 'Turnaround time matters more than most clients realise',
    body: [
      'Most businesses book a videographer and then discover, too late, that the edit takes four to six weeks. If you have a campaign launch, a grant deadline, or a board presentation, that can be a serious problem.',
      'Ask about turnaround time before you book. A clear answer tells you two things: that they have a real workflow, and that they have delivered enough projects to know how long things take.',
      'Professional video production is not a quick process to get right. A realistic expectation for a finished edit is two to four weeks from shoot day. If you need an express turnaround, that is possible in some cases - but it needs to be agreed before the quote is confirmed, not assumed.',
    ],
    tip: 'Get the delivery date in writing before the shoot. It does not need to be formal - an email confirmation is enough. It sets expectations for both sides.',
  },
  {
    number: '04',
    heading: 'Know your access and constraints before the shoot day',
    body: [
      "Video production depends on access. Access to the venue, access to the people in it, access to the spaces and moments that make the edit work. Gaps in any of those are not usually recoverable on the day.",
      "Before a shoot, it is worth being clear about any access restrictions at the venue, whether any attendees or participants have declined to be filmed, and whether there are sensitivities around what can or cannot be shown.",
      "If the schedule is likely to change or run significantly late, that is also worth flagging in advance. A shoot that runs two hours over can produce a very different edit to the one that was planned.",
      "The more that is known before the cameras arrive, the better the output when they leave.",
    ],
    tip: 'A brief call the day before a shoot is worth more than a detailed email written two weeks earlier. Circumstances change between booking and shoot day - the people working on the project need to know.',
  },
  {
    number: '05',
    heading: 'Understand whether you are hiring a solo operator or an agency',
    body: [
      'These are different things, and the right choice depends on what you need.',
      'An agency typically has multiple people, a larger overhead, and can handle very large productions with multiple cameras, operators, and crew. They are often the right choice for complex, high-budget projects.',
      'A solo operator - one person who handles everything from brief to final edit - offers something different. You deal with the same person throughout. The person who understands your brief is the same person on the day, and the same person in the edit. There is no handover, no account manager, no junior being given your shoot.',
      'For the majority of business video work in Scotland - events, promotional films, social content, corporate interviews - a good solo operator will deliver comparable quality at a significantly lower cost, and often with faster turnaround.',
    ],
    tip: 'If an agency quote seems very high compared to a solo operator quote, ask what the breakdown is. Sometimes the price difference is justified. Often, you are paying for overhead that does not show up on screen.',
  },
]

export default function HiringGuide() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Free Guide</p>
        <h1 className="text-5xl font-black mb-6 text-gray-900 dark:text-white leading-tight">
          5 Things to Know Before Hiring a Videographer in Scotland
        </h1>
        <p className="text-lg text-gray-500 dark:text-white/50 leading-relaxed mb-4">
          Most businesses commission video once every year or two. That is not enough repetition to learn from experience what to ask, what to check, and what to watch out for.
        </p>
        <p className="text-lg text-gray-500 dark:text-white/50 leading-relaxed mb-10">
          This guide is written from the other side of the camera. 170+ client projects, eight years of freelance work across Scotland. Here is what I wish every client knew before we spoke.
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-400 dark:text-white/30 border-t border-gray-200 dark:border-white/10 pt-6">
          <span>Jamie Murray — MediaMurray</span>
          <span>·</span>
          <span>~5 min read</span>
          <span>·</span>
          <span>Free</span>
        </div>
      </section>

      {/* Points */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="space-y-16">
          {points.map((point) => (
            <div key={point.number} className="border-t border-gray-200 dark:border-white/10 pt-12">
              <div className="flex items-start gap-6 mb-6">
                <span className="text-5xl font-black gradient-text leading-none shrink-0 select-none">
                  {point.number}
                </span>
                <h2 className="text-2xl font-black text-gray-900 dark:text-white leading-snug pt-2">
                  {point.heading}
                </h2>
              </div>
              <div className="space-y-4 ml-0">
                {point.body.map((para, i) => (
                  <p key={i} className="text-gray-600 dark:text-white/60 leading-relaxed">
                    {para}
                  </p>
                ))}
                <div className="mt-6 p-5 bg-gray-50 dark:bg-white/[0.03] border-l-2 border-[#0052D4]">
                  <p className="text-sm text-gray-600 dark:text-white/60 leading-relaxed">
                    <span className="font-bold text-gray-900 dark:text-white">Worth knowing: </span>
                    {point.tip}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-200 dark:border-white/10 py-20 text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-3xl font-black mb-4 text-gray-900 dark:text-white">Ready to talk about a project?</h2>
          <p className="text-gray-500 dark:text-white/50 mb-8">
            Edinburgh-based. Available across Scotland and the UK. 170+ projects delivered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="gradient-bg text-white font-bold px-8 py-4 rounded-sm hover:opacity-90 transition-opacity text-sm uppercase tracking-wider"
            >
              Get in Touch
            </Link>
            <Link
              href="/resources"
              className="border border-gray-200 dark:border-white/10 text-gray-700 dark:text-white/70 font-bold px-8 py-4 rounded-sm hover:border-gray-400 dark:hover:border-white/30 transition-colors text-sm uppercase tracking-wider"
            >
              More Guides
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
