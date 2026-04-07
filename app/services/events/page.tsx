import type { Metadata } from 'next'
import Link from 'next/link'
import ImageGallery from '@/components/ImageGallery'
import VideoCard from '@/components/VideoCard'

export const metadata: Metadata = {
  title: 'Event Coverage',
  description: 'Professional event coverage combining videography, photography and editing. Conferences, awards, ceremonies across Scotland.',
}

const gallery = [
  { src: '/event1.jpg', alt: 'Event coverage' },
  { src: '/event2.jpg', alt: 'Event coverage' },
  { src: '/event3.jpg', alt: 'Event coverage' },
  { src: '/conference1.jpg', alt: 'Conference coverage' },
  { src: '/conference2.jpg', alt: 'Conference coverage' },
  { src: '/conference3.jpg', alt: 'Conference coverage' },
  { src: '/conference4.jpg', alt: 'Conference coverage' },
  { src: '/piperevent1.jpg', alt: 'Pipe event coverage' },
  { src: '/piperevent2.jpg', alt: 'Pipe event coverage' },
  { src: '/piperevent3.jpg', alt: 'Pipe event coverage' },
  { src: '/piperevent4.jpg', alt: 'Pipe event coverage' },
  { src: '/awards1.jpg', alt: 'Awards evening coverage' },
  { src: '/awards2.jpg', alt: 'Awards evening coverage' },
  { src: '/awards3.jpg', alt: 'Awards evening coverage' },
  { src: '/awards4.jpg', alt: 'Awards evening coverage' },
  { src: '/awardspaisley1.jpg', alt: 'Awards coverage' },
  { src: '/awardspaisley2.jpg', alt: 'Awards coverage' },
  { src: '/awardspaisley3.jpg', alt: 'Awards coverage' },
  { src: '/awardspaisley4.jpg', alt: 'Awards coverage' },
]

export default function Events() {
  return (
    <div className="pt-24">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Services</p>
        <h1 className="text-5xl font-black mb-6 text-gray-900 dark:text-white">Event Coverage</h1>
        <p className="text-gray-500 dark:text-white/50 max-w-2xl text-xl mb-12 leading-relaxed">
          Full event coverage — video and photography in one package, from a single operator who knows what they&apos;re doing.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-12">
          <div className="space-y-5 text-gray-600 dark:text-white/60 leading-relaxed">
            <p>Awards evenings, conferences, ceremonies, community events — if it&apos;s happening, it&apos;s worth capturing professionally.</p>
            <p>I cover events solo with dual camera rigs and a run-and-gun approach, meaning you get broad coverage without needing a full crew. Photos and video highlights in one booking.</p>
            <p>Clients include LowlandRFCA, Scottish Parliament, Scottish Fair Trade Forum, and more. I understand how these events run and how to work unobtrusively within them.</p>
            <Link href="/contact" className="gradient-bg text-white font-bold px-8 py-4 rounded-sm hover:opacity-90 transition-opacity text-sm uppercase tracking-wider inline-block mt-4">
              Enquire About Your Event
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <VideoCard id="lGnpNxBG4xU" title="Scottish Women's Wellbeing Summit 2025" category="Conference" />
            <VideoCard id="B6dOtVrT6Bg" title="International Fair Trade Towns Conference 2025" category="Conference" />
            <VideoCard id="VV1P0zK_hP4" title="Ember Clyde Whisky Festival" category="Event" />
            <VideoCard id="rUWGAz0s5hw" title="LowlandRFCA Beating Retreat 2025" category="Event" />
          </div>
        </div>

        {/* Full Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-white/10">
          <VideoCard id="lGnpNxBG4xU" title="Scottish Women's Wellbeing Summit 2025" category="Conference" />
          <VideoCard id="B6dOtVrT6Bg" title="International Fair Trade Towns Conference 2025" category="Conference" />
          <VideoCard id="VV1P0zK_hP4" title="Ember Clyde Whisky Festival" category="Event" />
          <VideoCard id="rUWGAz0s5hw" title="LowlandRFCA Beating Retreat 2025" category="Event" />
          <VideoCard id="VVGPcQIk0cY" title="An Evening with Graeme Souness — BTS" category="Event" />
        </div>
      </section>

      {/* Event Gallery */}
      <section className="border-t border-gray-200 dark:border-white/10 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Gallery</p>
          <h2 className="text-3xl font-black mb-12 text-gray-900 dark:text-white">Events Covered</h2>
          <ImageGallery images={gallery} />
        </div>
      </section>
    </div>
  )
}
