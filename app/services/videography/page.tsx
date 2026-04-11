import type { Metadata } from 'next'
import Link from 'next/link'
import ImageGallery from '@/components/ImageGallery'

export const metadata: Metadata = {
  title: 'Videography & Editing',
  description: 'Professional freelance 4K videography and editing. Half-day and full-day rates available. Based in Scotland, available UK-wide.',
}

const frames = [
  { src: '/whiskyjournalframes1.png', alt: 'The Whisky Journal — project frame' },
  { src: '/whiskyjournalframes2.png', alt: 'The Whisky Journal — project frame' },
  { src: '/whiskyjournalframes3.png', alt: 'The Whisky Journal — project frame' },
  { src: '/whiskyjournalframes4.png', alt: 'The Whisky Journal — project frame' },
  { src: '/whiskyjournalframes5.png', alt: 'The Whisky Journal — project frame' },
  { src: '/whiskyjournalframes6.png', alt: 'The Whisky Journal — project frame' },
  { src: '/rjcprojectframe1.png', alt: 'Rothesay Joint Campus — project frame' },
  { src: '/rjcprojectframe3.png', alt: 'Rothesay Joint Campus — project frame' },
  { src: '/rjcprojectframe4.png', alt: 'Rothesay Joint Campus — project frame' },
  { src: '/rjcprojectframe5.png', alt: 'Rothesay Joint Campus — project frame' },
  { src: '/rjcprojectframe6.png', alt: 'Rothesay Joint Campus — project frame' },
  { src: '/kateframe1.png', alt: 'Project frame' },
]

export default function Videography() {
  return (
    <div className="pt-24">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Services</p>
        <h1 className="text-5xl font-black mb-6 text-gray-900 dark:text-white">Videography & Editing</h1>
        <p className="text-gray-500 dark:text-white/50 max-w-2xl text-xl mb-12 leading-relaxed">
          Professional 4K videography and editing for businesses, organisations and events across Scotland.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div className="space-y-5 text-gray-600 dark:text-white/60 leading-relaxed">
            <p>Every shoot is covered on a Sony a7IV or a7III — broadcast-quality sensors with cinematic colour profiles. Drone footage available via DJI Mini 5 Pro where required.</p>
            <p>I edit using Adobe Premiere Pro and After Effects, with colour grading and audio mixing included as standard. You get polished, ready-to-publish deliverables.</p>
            <p>Half-day bookings cover up to 3 hours on location. Full-day bookings cover up to 5 hours on location. Turnaround is typically 2–4 weeks. Express delivery is available and agreed per project.</p>
          </div>
          <div className="space-y-6">
            <div className="border-l-4 border-[#0052D4] pl-6">
              <h3 className="font-black text-lg mb-1 text-gray-900 dark:text-white">Half Day</h3>
              <p className="text-gray-500 dark:text-white/50 text-sm">Up to 3 hours on location + editing + 1 round of revisions</p>
            </div>
            <div className="border-l-4 border-[#00C6FF] pl-6">
              <h3 className="font-black text-lg mb-1 text-gray-900 dark:text-white">Full Day</h3>
              <p className="text-gray-500 dark:text-white/50 text-sm">Up to 5 hours on location + editing + 1 round of revisions</p>
            </div>
            <div className="border-l-4 border-gray-200 dark:border-white/10 pl-6">
              <h3 className="font-black text-lg mb-1 text-gray-900 dark:text-white">Editing Only</h3>
              <p className="text-gray-500 dark:text-white/50 text-sm">Standalone edit services available — quoted per project</p>
            </div>
            <Link href="/contact" className="gradient-bg text-white font-bold px-8 py-4 rounded-sm hover:opacity-90 transition-opacity text-sm uppercase tracking-wider block text-center mt-6">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Project Frames */}
      <section className="border-t border-gray-200 dark:border-white/10 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Recent Projects</p>
          <h2 className="text-3xl font-black mb-12 text-gray-900 dark:text-white">From the Edit</h2>
          <ImageGallery images={frames} aspectRatio="video" />
        </div>
      </section>

      {/* Video Examples */}
      <section className="border-t border-gray-200 dark:border-white/10 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Watch</p>
          <h2 className="text-3xl font-black mb-12 text-gray-900 dark:text-white">Video Examples</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { id: 'APrjtZ7kTGk', title: 'Working at Rothesay Joint Campus — Full Promo' },
              { id: '5cv1GW6mlm8', title: 'West Lowland Battalion ACF — The Only Way Is Up' },
              { id: 'hDpazT7xfFc', title: 'The Whisky Journal — Promo Film' },
              { id: 'VVGPcQIk0cY', title: 'An Evening with Graeme Souness — BTS' },
            ].map((v) => (
              <div key={v.id}>
                <div className="aspect-video rounded-sm overflow-hidden bg-gray-100 dark:bg-white/5">
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <p className="text-xs text-gray-500 dark:text-white/40 mt-2">{v.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
