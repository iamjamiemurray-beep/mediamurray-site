import type { Metadata } from 'next'
import Link from 'next/link'
import MasonryGallery from '@/components/MasonryGallery'

export const metadata: Metadata = {
  title: 'Photography',
  description: 'Professional photography packages for events, portraits, product and lifestyle shoots. Based in Scotland, available UK-wide.',
}

const gallery = [
  { src: '/eventphoto1.jpg', alt: 'Event photography' },
  { src: '/eventphoto2.jpg', alt: 'Event photography' },
  { src: '/eventphoto3.jpg', alt: 'Event photography' },
  { src: '/eventphoto4.jpg', alt: 'Event photography' },
  { src: '/eventphoto5.jpg', alt: 'Event photography' },
  { src: '/awards1.jpg', alt: 'Awards evening photography' },
  { src: '/awards2.jpg', alt: 'Awards evening photography' },
  { src: '/awards3.jpg', alt: 'Awards evening photography' },
  { src: '/awards4.jpg', alt: 'Awards evening photography' },
  { src: '/awardspaisley1.jpg', alt: 'Awards Paisley photography' },
  { src: '/awardspaisley2.jpg', alt: 'Awards Paisley photography' },
  { src: '/awardspaisley3.jpg', alt: 'Awards Paisley photography' },
  { src: '/awardspaisley4.jpg', alt: 'Awards Paisley photography' },
  { src: '/goodpics1.jpg', alt: 'MediaMurray photography' },
  { src: '/goodpics2.jpg', alt: 'MediaMurray photography' },
  { src: '/goodpics3.jpg', alt: 'MediaMurray photography' },
]

export default function Photography() {
  return (
    <div className="pt-24">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Services</p>
        <h1 className="text-5xl font-black mb-6 text-gray-900 dark:text-white">Photography</h1>
        <p className="text-gray-500 dark:text-white/50 max-w-2xl text-xl mb-12 leading-relaxed">
          Professional photography for events, portraits, products and lifestyle — edited and delivered quickly.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div className="space-y-5 text-gray-600 dark:text-white/60 leading-relaxed">
            <p>Shot on Sony a7IV — a full-frame mirrorless camera with exceptional low-light performance, making it ideal for indoor events, dim venues and natural-light portraits.</p>
            <p>All images are delivered fully edited in a consistent style. Turnaround is typically 1–2 weeks, with express delivery available if needed.</p>
            <p>Half-day bookings cover up to 3 hours on location. Full-day bookings cover up to 5 hours on location. Suitable for corporate events, awards evenings, headshots, brand content, and product shoots.</p>
          </div>
          <div className="space-y-6">
            <div className="border-l-4 border-[#0052D4] pl-6">
              <h3 className="font-black text-lg mb-1 text-gray-900 dark:text-white">Half Day</h3>
              <p className="text-gray-500 dark:text-white/50 text-sm">Up to 3 hours on location + full edit delivered</p>
            </div>
            <div className="border-l-4 border-[#00C6FF] pl-6">
              <h3 className="font-black text-lg mb-1 text-gray-900 dark:text-white">Full Day</h3>
              <p className="text-gray-500 dark:text-white/50 text-sm">Up to 5 hours on location + full edit delivered</p>
            </div>
            <div className="border-l-4 border-gray-200 dark:border-white/10 pl-6">
              <h3 className="font-black text-lg mb-1 text-gray-900 dark:text-white">Event Add-On</h3>
              <p className="text-gray-500 dark:text-white/50 text-sm">Photography alongside video coverage — quoted together</p>
            </div>
            <Link href="/contact" className="gradient-bg text-white font-bold px-8 py-4 rounded-sm hover:opacity-90 transition-opacity text-sm uppercase tracking-wider block text-center mt-8">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="border-t border-gray-200 dark:border-white/10 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Gallery</p>
          <h2 className="text-3xl font-black mb-12 text-gray-900 dark:text-white">Recent Work</h2>
          <MasonryGallery images={gallery} />
        </div>
      </section>

      {/* Favourite Photos */}
      <section className="border-t border-gray-200 dark:border-white/10 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Personal</p>
          <h2 className="text-3xl font-black mb-4 text-gray-900 dark:text-white">Favourite Shots</h2>
          <p className="text-gray-500 dark:text-white/50 mb-12 max-w-xl">A personal selection — photos taken for no brief in particular, just because they were worth taking.</p>
          <MasonryGallery images={[
            { src: '/nyc1.jpg', alt: 'New York City' },
            { src: '/nyc2.jpg', alt: 'New York City' },
            { src: '/nyc3.jpg', alt: 'New York City' },
            { src: '/nyc4.jpg', alt: 'New York City' },
            { src: '/goodpics1.jpg', alt: 'Photography by Jamie Murray' },
            { src: '/goodpics2.jpg', alt: 'Photography by Jamie Murray' },
            { src: '/goodpics5.jpg', alt: 'Photography by Jamie Murray' },
            { src: '/goodpics6.jpg', alt: 'Photography by Jamie Murray' },
          ]} />
        </div>
      </section>
    </div>
  )
}
