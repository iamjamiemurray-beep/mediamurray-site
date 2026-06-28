import type { Metadata } from 'next'
import VideoCard from '@/components/VideoCard'
import FacebookEmbed from './FacebookEmbed'

export const metadata: Metadata = {
  title: 'West Lowland Battalion ACF — Media Portfolio',
  description: 'Video portfolio for West Lowland Battalion ACF — produced by Jamie Murray, MediaMurray.',
  robots: { index: false, follow: false },
}

const promoYT = [
  { id: 'JxP550xgQAU', title: 'Army Cadets – Join Today', category: 'Promotional' },
  { id: 'pR7JaGdOXEY', title: 'Stirling Castle Visit', category: 'Promotional' },
  { id: 'X_iEPDmfBwk', title: 'Rachel Howie — Reflecting On Her Cadet Career', category: 'Promotional' },
]

const promoFB = [
  { url: 'https://www.facebook.com/reel/4048052708744795', title: 'VE Day 2025' },
]

const camp2023 = [
  { id: 'smuOQp-3roM', title: 'What Cadets Means To Me', category: 'Annual Camp 2023' },
  { id: 'onQjPFN98ms', title: 'Dechmont Training Area', category: 'Annual Camp 2023' },
  { id: '7me9waacjzo', title: 'Lapwing Lodge', category: 'Annual Camp 2023' },
  { id: '7nq2lN7x0Lk', title: 'Visitor Day', category: 'Annual Camp 2023' },
]

const camp2025FB = [
  { url: 'https://www.facebook.com/reel/1457525332066071', title: 'Col D Film' },
  { url: 'https://www.facebook.com/reel/555305314238547', title: 'Fieldcraft Film' },
  { url: 'https://www.facebook.com/reel/773404095145630', title: 'TIBUA' },
  { url: 'https://www.facebook.com/reel/1802704973982503', title: 'Ranges' },
  { url: 'https://www.facebook.com/reel/3977585842505186', title: 'Opening Parade' },
]

export default function WLBNMedia() {
  return (
    <div className="pt-24">
      <section className="max-w-6xl mx-auto px-6 py-20">

        {/* Header */}
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">West Lowland Battalion ACF</p>
        <h1 className="text-5xl font-black mb-4 text-gray-900 dark:text-white">Media Portfolio</h1>
        <p className="text-gray-500 dark:text-white/50 max-w-2xl mb-12 text-lg leading-relaxed">
          Films and content produced for West Lowland Battalion ACF over the past five years — 18 films accumulating over 127,000 combined views.
        </p>

        <div className="flex gap-10 pb-12 border-b border-gray-200 dark:border-white/10 mb-16">
          <div>
            <span className="text-4xl font-black text-gray-900 dark:text-white">18</span>
            <p className="text-xs text-gray-400 dark:text-white/40 uppercase tracking-wider mt-1">Films produced</p>
          </div>
          <div>
            <span className="text-4xl font-black text-gray-900 dark:text-white">127K+</span>
            <p className="text-xs text-gray-400 dark:text-white/40 uppercase tracking-wider mt-1">Combined views</p>
          </div>
        </div>

        {/* Promotional Films */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-black text-gray-900 dark:text-white">Promotional Films</h2>
            <div className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {promoYT.map((v) => (
              <VideoCard key={v.id} id={v.id} title={v.title} category={v.category} />
            ))}
            {promoFB.map((v) => (
              <FacebookEmbed key={v.url} url={v.url} title={v.title} />
            ))}
          </div>
        </section>

        {/* Annual Camp 2023 */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-black text-gray-900 dark:text-white">Annual Camp 2023</h2>
            <div className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
            <span className="text-xs text-gray-400 dark:text-white/40 uppercase tracking-wider">4 films</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {camp2023.map((v) => (
              <VideoCard key={v.id} id={v.id} title={v.title} category={v.category} />
            ))}
          </div>
        </section>

        {/* Annual Camp 2025 */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-black text-gray-900 dark:text-white">Annual Camp 2025</h2>
            <div className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
            <span className="text-xs text-gray-400 dark:text-white/40 uppercase tracking-wider">5 films</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {camp2025FB.map((v) => (
              <FacebookEmbed key={v.url} url={v.url} title={v.title} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <div className="pt-8 border-t border-gray-200 dark:border-white/10">
          <p className="text-sm text-gray-400 dark:text-white/40">
            Produced by Jamie Murray ·{' '}
            <a href="https://mediamurray.com" className="hover:text-gray-900 dark:hover:text-white transition-colors">mediamurray.com</a>
          </p>
        </div>

      </section>
    </div>
  )
}
