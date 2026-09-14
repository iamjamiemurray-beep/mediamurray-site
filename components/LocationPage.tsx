import Link from 'next/link'
import VideoCard from '@/components/VideoCard'
import type { Location } from '@/lib/locations'

export default function LocationPage({ location }: { location: Location }) {
  return (
    <div className="pt-24">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">
          {location.city}
        </p>
        <h1 className="text-5xl font-black mb-6 text-gray-900 dark:text-white">{location.heading}</h1>
        <p className="text-gray-500 dark:text-white/50 max-w-2xl text-xl mb-12 leading-relaxed">
          {location.intro}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-12">
          <div className="space-y-5 text-gray-600 dark:text-white/60 leading-relaxed">
            {location.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
            <Link
              href="/contact"
              className="gradient-bg text-white font-bold px-8 py-4 rounded-sm hover:opacity-90 transition-opacity text-sm uppercase tracking-wider inline-block mt-4"
            >
              Get a Quote
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {location.videoIds.map((v) => (
              <VideoCard key={v.id} id={v.id} title={v.title} category={v.category} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 dark:border-white/10 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">
            Coverage
          </p>
          <h2 className="text-3xl font-black mb-10 text-gray-900 dark:text-white">Areas Covered</h2>
          <div className="flex flex-wrap gap-3 mb-16">
            {location.areas.map((area) => (
              <span
                key={area}
                className="text-sm text-gray-600 dark:text-white/60 border border-gray-200 dark:border-white/10 px-4 py-2 rounded-sm"
              >
                {area}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 border-t border-gray-200 dark:border-white/10">
            <Link href="/services/promo-video" className="group">
              <h3 className="font-black text-gray-900 dark:text-white mb-2 group-hover:opacity-60 transition-opacity">Promotional Video</h3>
              <p className="text-sm text-gray-500 dark:text-white/50">Brand films, case studies and promos.</p>
            </Link>
            <Link href="/services/events" className="group">
              <h3 className="font-black text-gray-900 dark:text-white mb-2 group-hover:opacity-60 transition-opacity">Event Coverage</h3>
              <p className="text-sm text-gray-500 dark:text-white/50">Conferences, awards and ceremonies.</p>
            </Link>
            <Link href="/services/photography" className="group">
              <h3 className="font-black text-gray-900 dark:text-white mb-2 group-hover:opacity-60 transition-opacity">Photography</h3>
              <p className="text-sm text-gray-500 dark:text-white/50">Stills alongside the video, one booking.</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
