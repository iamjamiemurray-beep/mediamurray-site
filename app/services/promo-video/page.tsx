import type { Metadata } from 'next'
import Link from 'next/link'
import VideoCard from '@/components/VideoCard'

export const metadata: Metadata = {
  title: 'Promotional Videos',
  description: 'Bespoke promotional and advertisement videos for businesses and organisations across Scotland. From concept to delivery.',
}

export default function PromoVideo() {
  return (
    <div className="pt-24">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Services</p>
        <h1 className="text-5xl font-black mb-6 text-gray-900 dark:text-white">Promotional Videos</h1>
        <p className="text-gray-500 dark:text-white/50 max-w-2xl text-xl mb-12 leading-relaxed">
          From 60-second brand films to full-length promos — bespoke video production that does the work of a sales pitch.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-12">
          <div className="space-y-5 text-gray-600 dark:text-white/60 leading-relaxed">
            <p>A promotional film is often the most powerful thing on your website or social channels. It communicates who you are, what you do, and why someone should choose you — in under two minutes.</p>
            <p>Each project is bespoke: no templates, no off-the-shelf packages. We&apos;ll discuss your brief, agree a treatment, and I&apos;ll handle everything from shoot day to final delivery.</p>
            <p>Suitable for product launches, service promotion, recruitment, social media campaigns, and website hero content.</p>
            <Link href="/contact" className="gradient-bg text-white font-bold px-8 py-4 rounded-sm hover:opacity-90 transition-opacity text-sm uppercase tracking-wider inline-block mt-4">
              Get a Free Quote
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <VideoCard id="APrjtZ7kTGk" title="Working at Rothesay Joint Campus" category="Corporate" stats={[{ value: '25K+', label: 'views' }]} />
            <VideoCard id="T68PCvwUwH0" title="Visit Bute: Your Own Adventure Island" category="Commercial" />
            <VideoCard id="fVm0VBWuyt8" title="Rita Rusk Promo (Socially Creative)" category="Commercial" />
            <VideoCard id="9zONKRiBPm0" title="Warrior In Training — Pilates Promo" category="Commercial" />
          </div>
        </div>

        {/* Full Promo Films Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-white/10">
          <VideoCard id="APrjtZ7kTGk" title="Working at Rothesay Joint Campus" category="Corporate" stats={[{ value: '25K+', label: 'views' }, { value: '14K+', label: 'in 24hrs' }]} />
          <VideoCard id="rUWGAz0s5hw" title="LowlandRFCA Beating Retreat 2025" category="Event" />
          <VideoCard id="T68PCvwUwH0" title="Visit Bute: Your Own Adventure Island" category="Commercial" />
          <VideoCard id="kg3wpo3TTL0" title="2026–2031 SYP Manifesto: Dear Scotland's Future" category="Public Sector" />
          <VideoCard id="fVm0VBWuyt8" title="Rita Rusk Promo (Socially Creative)" category="Commercial" />
          <VideoCard id="9zONKRiBPm0" title="Warrior In Training — Pilates Promo" category="Commercial" />
          <VideoCard id="5cv1GW6mlm8" title="West Lowland Battalion ACF — The Only Way Is Up" category="Corporate" stats={[{ value: '23K', label: 'organic views' }, { value: '42', label: 'shares' }]} />
          <VideoCard id="hDpazT7xfFc" title="The Whisky Journal — Promo Film" category="Commercial" />
          <VideoCard id="v4sbb5wXikU" title="Bute Community Forest — Exhibition Promo" category="Charity" />
        </div>
      </section>
    </div>
  )
}
