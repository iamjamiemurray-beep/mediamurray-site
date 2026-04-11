import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Retainer Packages',
  description: 'Consistent high-quality video and social content on a retainer basis. Monthly packages for businesses across Scotland.',
}

export default function ShortForm() {
  return (
    <div className="pt-24">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Services</p>
        <h1 className="text-5xl font-black mb-6 text-gray-900 dark:text-white">Retainer Packages</h1>
        <p className="text-gray-500 dark:text-white/50 max-w-2xl text-xl mb-12 leading-relaxed">
          Consistent, high-quality video and social content on a monthly retainer — produced to a broadcast standard, delivered on schedule.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div className="space-y-5 text-gray-600 dark:text-white/60 leading-relaxed">
            <p>Most businesses know they should be posting video but struggle with consistency and quality. A retainer solves both.</p>
            <p>We agree a content plan, I shoot and edit a batch of videos in one session, and you have weeks of ready-to-post content delivered to your phone.</p>
            <p>Optimised for Instagram Reels, TikTok, YouTube Shorts and LinkedIn video. Vertical and square formats included.</p>
            <p>Every retainer is bespoke — volume, frequency and format are agreed based on your business and budget. Get in touch to discuss what works for you.</p>
          </div>
          <div>
            <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-8 rounded-sm mb-6">
              <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-white/40 mb-4">Bespoke to your needs</p>
              <p className="text-gray-600 dark:text-white/60 text-sm leading-relaxed mb-6">Retainer packages are quoted on a monthly basis depending on your requirements. Volume, format and turnaround are all tailored to you — no fixed tiers, no forced bundles.</p>
              <Link href="/contact" className="gradient-bg text-white font-bold px-8 py-4 rounded-sm hover:opacity-90 transition-opacity text-sm uppercase tracking-wider block text-center">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
