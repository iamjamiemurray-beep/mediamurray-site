import Link from 'next/link'
import type { Metadata } from 'next'

const videoMeta: Record<string, { title: string; category: string }> = {
  '7eQSVwN0oBU': { title: 'IBAC — Promotional Film', category: 'Community' },
  'MuUrZOhwSAQ': { title: 'The Highways — Stand Up And Be Counted', category: 'Music Video' },
  'kg3wpo3TTL0': { title: '2026–2031 SYP Manifesto: Dear Scotland\'s Future', category: 'Public Sector' },
  'PII_t68w8Jg': { title: 'Scottish Fair Trade — Youth Collective Film', category: 'Public Sector' },
  'b9phaKPVKxY': { title: 'Youth Collective — Scottish Fair Trade Film', category: 'Public Sector' },
  'v4sbb5wXikU': { title: 'Bute Community Forest — Exhibition Promo', category: 'Charity' },
  'APrjtZ7kTGk': { title: 'Working at Rothesay Joint Campus — Full Promo', category: 'Corporate' },
  '5cv1GW6mlm8': { title: 'West Lowland Battalion ACF — The Only Way Is Up', category: 'Corporate' },
  'rUWGAz0s5hw': { title: 'LowlandRFCA Beating Retreat 2025', category: 'Event' },
  'T68PCvwUwH0': { title: 'Visit Bute: Your Own Adventure Island', category: 'Commercial' },
  'lGnpNxBG4xU': { title: 'Scottish Women\'s Wellbeing Summit 2025', category: 'Conference' },
  'VV1P0zK_hP4': { title: 'Ember Clyde Whisky Festival', category: 'Event' },
  'B6dOtVrT6Bg': { title: 'International Fair Trade Towns Conference 2025', category: 'Conference' },
  'hDpazT7xfFc': { title: 'The Whisky Journal — Promo Film', category: 'Commercial' },
  'fVm0VBWuyt8': { title: 'Rita Rusk Promo (Socially Creative)', category: 'Commercial' },
  '9zONKRiBPm0': { title: 'Warrior In Training — Pilates Promo', category: 'Commercial' },
  'VVGPcQIk0cY': { title: 'An Evening with Graeme Souness — BTS', category: 'Event' },
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const meta = videoMeta[id]
  return {
    title: meta?.title ?? 'Video',
    description: `Watch ${meta?.title ?? 'this project'} — produced by MediaMurray, Scotland.`,
  }
}

export default async function VideoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const meta = videoMeta[id] ?? { title: 'Project Film', category: 'Video' }

  return (
    <div className="pt-24 min-h-screen bg-gray-50 dark:bg-[#0a0a0a]">
      <section className="max-w-5xl mx-auto px-6 py-16">
        <Link href="/work" className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/40 hover:text-[#0052D4] dark:hover:text-[#00C6FF] transition-colors mb-8 inline-flex items-center gap-2">
          ← Back to Work
        </Link>

        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0052D4] mb-2 mt-6">{meta.category}</p>
        <h1 className="text-3xl sm:text-4xl font-black mb-8 text-gray-900 dark:text-white">{meta.title}</h1>

        <div className="aspect-video w-full bg-black rounded-sm overflow-hidden mb-12">
          <iframe
            src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`}
            title={meta.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        <div className="border-t border-gray-200 dark:border-white/10 pt-12 text-center">
          <h2 className="text-2xl font-black mb-3 text-gray-900 dark:text-white">Want something like this?</h2>
          <p className="text-gray-500 dark:text-white/50 mb-8 max-w-xl mx-auto">
            Based in Edinburgh, available across Scotland. Let&apos;s talk about your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="gradient-bg text-white font-bold px-8 py-4 rounded-sm hover:opacity-90 transition-opacity text-sm uppercase tracking-wider inline-block">
              Get a Quote
            </Link>
            <Link href="/work" className="border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white font-bold px-8 py-4 rounded-sm hover:border-gray-500 dark:hover:border-white/50 transition-colors text-sm uppercase tracking-wider inline-block">
              View All Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
