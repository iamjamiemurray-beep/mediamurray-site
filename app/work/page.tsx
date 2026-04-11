import type { Metadata } from 'next'
import Link from 'next/link'
import ImageGallery from '@/components/ImageGallery'
import VideoCard from '@/components/VideoCard'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Portfolio of video production, photography and editing work across Scotland. 170+ projects for BBC Scotland, Scottish Parliament, RangersTV and more.',
}

const photos = [
  { src: '/awards1.jpg', alt: 'Awards evening coverage' },
  { src: '/awards2.jpg', alt: 'Awards evening coverage' },
  { src: '/awards3.jpg', alt: 'Awards evening coverage' },
  { src: '/awards4.jpg', alt: 'Awards evening coverage' },
  { src: '/awardspaisley1.jpg', alt: 'Awards Paisley coverage' },
  { src: '/awardspaisley2.jpg', alt: 'Awards Paisley coverage' },
  { src: '/conference1.jpg', alt: 'Conference photography' },
  { src: '/conference2.jpg', alt: 'Conference photography' },
  { src: '/conference3.jpg', alt: 'Conference photography' },
  { src: '/conference4.jpg', alt: 'Conference photography' },
  { src: '/eventphoto1.jpg', alt: 'Event photography' },
  { src: '/eventphoto2.jpg', alt: 'Event photography' },
  { src: '/eventphoto3.jpg', alt: 'Event photography' },
  { src: '/eventphoto4.jpg', alt: 'Event photography' },
  { src: '/eventphoto5.jpg', alt: 'Event photography' },
  { src: '/piperevent1.jpg', alt: 'Pipe event coverage' },
  { src: '/piperevent2.jpg', alt: 'Pipe event coverage' },
  { src: '/piperevent3.jpg', alt: 'Pipe event coverage' },
  { src: '/goodpics1.jpg', alt: 'MediaMurray photography' },
  { src: '/goodpics2.jpg', alt: 'MediaMurray photography' },
  { src: '/goodpics3.jpg', alt: 'MediaMurray photography' },
  { src: '/goodpics4.jpg', alt: 'MediaMurray photography' },
]

export default function Work() {
  return (
    <div className="pt-24">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Portfolio</p>
        <h1 className="text-5xl font-black mb-4 text-gray-900 dark:text-white">Work</h1>
        <p className="text-gray-500 dark:text-white/50 max-w-xl mb-16 text-lg">
          170+ projects across commercial, event, documentary, sport and charity sectors.
        </p>

        {/* RJC — Featured full width */}
        <div className="mb-6">
          <VideoCard
            id="APrjtZ7kTGk"
            title="Working at Rothesay Joint Campus — Full Promo"
            category="Corporate"
            featured
            stats={[
              { value: '25K+', label: 'total views' },
              { value: '14K+', label: 'in first 24hrs' },
              { value: '560+', label: 'reactions' },
              { value: '6.5K', label: 'organic reach' },
            ]}
          />
          <p className="text-xs text-gray-400 dark:text-white/30 italic mt-2">on Facebook</p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <VideoCard id="kg3wpo3TTL0" title="2026–2031 SYP Manifesto: Dear Scotland's Future" category="Public Sector" />
          <VideoCard id="rUWGAz0s5hw" title="LowlandRFCA Beating Retreat 2025" category="Event" />
          <VideoCard id="T68PCvwUwH0" title="Visit Bute: Your Own Adventure Island" category="Commercial" />
          <VideoCard
            id="5cv1GW6mlm8"
            title="West Lowland Battalion ACF — The Only Way Is Up"
            category="Corporate"
            stats={[
              { value: '23K', label: 'organic views' },
              { value: '390', label: 'reactions' },
              { value: '42', label: 'shares' },
              { value: 'on Facebook', label: '' },
            ]}
          />
          <VideoCard id="lGnpNxBG4xU" title="Scottish Women's Wellbeing Summit 2025" category="Conference" />
          <VideoCard id="VV1P0zK_hP4" title="Inverclyde Whisky Festival 2025" category="Event" />
          <VideoCard id="B6dOtVrT6Bg" title="International Fair Trade Towns Conference 2025" category="Conference" />
          <VideoCard id="hDpazT7xfFc" title="The Whisky Journal — Promo Film" category="Commercial" />
          <VideoCard id="fVm0VBWuyt8" title="Rita Rusk Promo (Socially Creative)" category="Commercial" />
          <VideoCard id="9zONKRiBPm0" title="Warrior In Training — Pilates Promo" category="Commercial" />
          <VideoCard id="VVGPcQIk0cY" title="An Evening with Graeme Souness — BTS" category="Event" />
          <VideoCard id="MuUrZOhwSAQ" title="The Highways — Stand Up And Be Counted" category="Music Video" />
          <VideoCard id="v4sbb5wXikU" title="Bute Community Forest — Exhibition Promo" category="Charity" />
          <VideoCard id="b9phaKPVKxY" title="Youth Collective — Scottish Fair Trade Film" category="Public Sector" />
          <VideoCard id="7eQSVwN0oBU" title="IBAC — Promotional Film" category="Community" />
        </div>
      </section>

      {/* Photography Section */}
      <section className="border-t border-gray-200 dark:border-white/10 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Photography</p>
          <h2 className="text-3xl font-black mb-12 text-gray-900 dark:text-white">Event & Corporate Photography</h2>
          <ImageGallery images={photos} />
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-200 dark:border-white/10 py-20 text-center">
        <h2 className="text-3xl font-black mb-4 text-gray-900 dark:text-white">Like what you see?</h2>
        <p className="text-gray-500 dark:text-white/50 mb-8">Let&apos;s talk about your project.</p>
        <Link href="/contact" className="gradient-bg text-white font-bold px-8 py-4 rounded-sm hover:opacity-90 transition-opacity text-sm uppercase tracking-wider inline-block">
          Get a Quote
        </Link>
      </section>
    </div>
  )
}
