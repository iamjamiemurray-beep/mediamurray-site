import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Content Day - MediaMurray',
  description: 'One focused filming session. Professional short-form video and photography delivered within 5 working days. Based in Scotland, available UK-wide.',
}

const faqs = [
  {
    q: "What if I don't know what content I need?",
    a: "I'll send you a short brief form 48 hours before. You tell me what you do, who you're trying to reach, and what you want to show. I plan the shot list from that - you don't need to come prepared with a creative brief.",
  },
  {
    q: "Is one day actually enough?",
    a: "Yes. A well-planned Content Day produces 6-8 weeks of posting material. The difference is having someone who knows what to capture and how to cut it, rather than filming randomly and hoping something works.",
  },
  {
    q: "Is editing included?",
    a: "Fully included. Edited clips with music, captions, and colour grade. Delivered within 5 working days of the shoot. You get files ready to post, not raw footage to deal with yourself.",
  },
  {
    q: "What if I'm camera shy or not used to being filmed?",
    a: "This comes up constantly. Most of what we capture is you doing your job, not delivering a speech to camera. The goal is natural, authentic content - not a corporate ad. You'll forget the camera is there.",
  },
  {
    q: "What's the difference between this and hiring a social media manager?",
    a: "A social media manager needs content from you to post. A Content Day gives them 6-8 weeks of material in one go. They're not the same thing - they work best together.",
  },
]

const included = [
  { label: '5-8 edited short-form video clips', detail: 'Reels and TikTok-ready, with music and captions' },
  { label: '20+ professional still images', detail: 'Product, team, behind the scenes, environment' },
  { label: 'Raw footage', detail: 'Full unedited files for your own use' },
  { label: 'Posting plan', detail: 'Suggestions for how to distribute content over 6-8 weeks' },
  { label: 'Pre-shoot brief', detail: 'Shot list planned in advance based on your business and goals' },
]

const pastWork = [
  {
    client: 'The Italian Kitchen',
    location: 'Glasgow',
    type: 'Food & Hospitality',
    detail: 'Menu hero shots, kitchen atmosphere, front-of-house and staff content for social.',
  },
  {
    client: 'Warrior In Training Pilates Studio',
    location: 'Paisley',
    type: 'Fitness & Wellness',
    detail: 'Studio environment, class content, trainer profiles and lifestyle shots.',
  },
  {
    client: 'Old Course Hotel',
    location: 'St Andrews',
    type: 'Hotel & Hospitality',
    detail: 'Rooms, facilities, food and guest experience content for Instagram and website.',
  },
]

export default function ContentDayPage() {
  return (
    <div className="pt-24">

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-4">MediaMurray Content Days</p>
        <h1 className="text-5xl sm:text-6xl font-black mb-6 text-gray-900 dark:text-white leading-tight">
          One Day.<br />Months of Content.
        </h1>
        <p className="text-xl text-gray-500 dark:text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
          You know you need more video content. You just never have the time, the setup, or someone who knows what to capture. A Content Day fixes all three in a single session.
        </p>
        <Link
          href="/contact?service=content-day"
          className="gradient-bg text-white font-bold px-10 py-5 rounded-sm hover:opacity-90 transition-opacity text-sm uppercase tracking-wider inline-block"
        >
          Book Your Content Day
        </Link>
        <p className="text-xs text-gray-400 dark:text-white/30 mt-4">From £500 - includes filming and full editing</p>
      </section>

      {/* Problem */}
      <section className="border-t border-gray-200 dark:border-white/10 py-20 bg-gray-50 dark:bg-white/[0.02]">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">The Real Problem</p>
          <h2 className="text-3xl font-black mb-8 text-gray-900 dark:text-white">The content gap is costing you clients</h2>
          <div className="space-y-4">
            {[
              "You post sporadically because creating decent content takes too much time.",
              "What you film on your phone looks exactly like what you film on your phone.",
              "You've tried hiring a photographer once - and got static images that don't perform on social.",
              "Your competitors are showing up consistently online. You're not.",
              "Every week without content is another week a potential client picks someone else.",
            ].map((point, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0052D4] mt-2.5 flex-shrink-0" />
                <p className="text-gray-600 dark:text-white/60 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why alternatives fail */}
      <section className="border-t border-gray-200 dark:border-white/10 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Why Other Approaches Don't Work</p>
          <h2 className="text-3xl font-black mb-10 text-gray-900 dark:text-white">You've probably already tried some of these</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: 'Annual photoshoot',
                reason: "Gets you headshots. Doesn't get you 52 weeks of scroll-stopping video.",
              },
              {
                label: 'Filming it yourself',
                reason: 'Inconsistent quality, inconsistent output. You're running a business - it's not your job.',
              },
              {
                label: 'Social media manager',
                reason: "They need content from you to post. They don't create it - they distribute it.",
              },
            ].map((item, i) => (
              <div key={i} className="border border-gray-200 dark:border-white/10 p-6 rounded-sm">
                <p className="font-black text-gray-900 dark:text-white mb-2">{item.label}</p>
                <p className="text-sm text-gray-500 dark:text-white/50 leading-relaxed">{item.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What it is */}
      <section className="border-t border-gray-200 dark:border-white/10 py-20 bg-gray-50 dark:bg-white/[0.02]">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">The Solution</p>
          <h2 className="text-3xl font-black mb-4 text-gray-900 dark:text-white">What a Content Day actually is</h2>
          <p className="text-gray-500 dark:text-white/50 mb-10 leading-relaxed max-w-2xl">
            One focused session at your premises or chosen location. I come to you with professional kit, a planned shot list, and everything needed to capture 6-8 weeks of content in a single day.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {included.map((item, i) => (
              <div key={i} className="flex gap-4 items-start p-5 border border-gray-200 dark:border-white/10 rounded-sm bg-white dark:bg-white/[0.02]">
                <div className="gradient-bg w-8 h-8 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white text-sm">{item.label}</p>
                  <p className="text-xs text-gray-400 dark:text-white/40 mt-0.5">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past work */}
      <section className="border-t border-gray-200 dark:border-white/10 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Past Content Days</p>
          <h2 className="text-3xl font-black mb-10 text-gray-900 dark:text-white">Recent clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastWork.map((item, i) => (
              <div key={i} className="border-l-4 border-[#0052D4] pl-5 py-1">
                <p className="text-xs font-bold uppercase tracking-widest text-[#0052D4] mb-1">{item.type}</p>
                <p className="font-black text-gray-900 dark:text-white">{item.client}</p>
                <p className="text-sm text-gray-400 dark:text-white/40 mb-2">{item.location}</p>
                <p className="text-sm text-gray-500 dark:text-white/50 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="border-t border-gray-200 dark:border-white/10 py-20 bg-gray-50 dark:bg-white/[0.02]">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Pricing</p>
          <h2 className="text-3xl font-black mb-10 text-gray-900 dark:text-white">Clear, no surprises</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="gradient-bg p-8 rounded-sm text-white">
              <p className="text-xs font-bold uppercase tracking-widest opacity-70 mb-2">Full Content Day</p>
              <p className="text-5xl font-black mb-1">£500</p>
              <p className="text-sm opacity-70 mb-6">Up to 8 hours on location</p>
              <ul className="space-y-2 text-sm">
                {['Pre-shoot planning and brief', 'Full day of filming', 'All editing included', '5-8 video clips + 20+ stills', 'Delivered within 5 working days', 'Raw footage included'].map((item, i) => (
                  <li key={i} className="flex gap-2 items-center">
                    <svg className="w-4 h-4 opacity-70 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-gray-200 dark:border-white/10 p-8 rounded-sm bg-white dark:bg-white/[0.02]">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/40 mb-2">Half Day</p>
              <p className="text-5xl font-black text-gray-900 dark:text-white mb-1">£375</p>
              <p className="text-sm text-gray-400 dark:text-white/40 mb-6">Up to 4 hours on location</p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-white/60">
                {['Pre-shoot planning and brief', '4 hours of filming', 'All editing included', '3-4 video clips + 10+ stills', 'Delivered within 5 working days'].map((item, i) => (
                  <li key={i} className="flex gap-2 items-center">
                    <svg className="w-4 h-4 text-gray-300 dark:text-white/30 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-400 dark:text-white/40 mt-6">Travel within central Scotland included. Additional travel costs discussed in advance for further locations.</p>
        </div>
      </section>

      {/* FAQ / Objection handling */}
      <section className="border-t border-gray-200 dark:border-white/10 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Common Questions</p>
          <h2 className="text-3xl font-black mb-10 text-gray-900 dark:text-white">Answered</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-100 dark:border-white/5 pb-6">
                <p className="font-black text-gray-900 dark:text-white mb-2">{faq.q}</p>
                <p className="text-gray-500 dark:text-white/50 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-gray-200 dark:border-white/10 py-24 bg-gray-50 dark:bg-white/[0.02]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-4 text-gray-900 dark:text-white">Ready to fill your content calendar?</h2>
          <p className="text-gray-500 dark:text-white/50 mb-10 text-lg leading-relaxed">
            Get in touch and tell me a bit about your business. I'll come back with availability and confirm what we'll cover on the day.
          </p>
          <Link
            href="/contact?service=content-day"
            className="gradient-bg text-white font-bold px-10 py-5 rounded-sm hover:opacity-90 transition-opacity text-sm uppercase tracking-wider inline-block"
          >
            Book Your Content Day
          </Link>
          <p className="text-xs text-gray-400 dark:text-white/30 mt-4">
            Or email directly: <a href="mailto:mail@mediamurray.com" className="hover:text-gray-600 dark:hover:text-white/60 transition-colors">mail@mediamurray.com</a>
          </p>
        </div>
      </section>

    </div>
  )
}
