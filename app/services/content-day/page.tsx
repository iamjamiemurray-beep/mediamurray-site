import type { Metadata } from 'next'
import Link from 'next/link'
import VideoCard from '@/components/VideoCard'
import MasonryGallery from '@/components/MasonryGallery'

export const metadata: Metadata = {
  title: 'Content Day',
  description: 'One full production day — maximum content output. Video and photography in a single session for weeks of social media content.',
}

const shoots = [
  {
    client: 'Warrior In Training',
    url: 'https://warriorintraining.co.uk',
    desc: 'Pilates & fitness — social content day',
    photos: [
      '/contentdaypilates1.jpg',
      '/contentdaypilates2.jpg',
      '/contentdaypilates3.jpg',
      '/contentdaypilates4.jpg',
      '/contentdaypilates5.jpg',
      '/contentdaypilates6.jpg',
    ],
  },
  {
    client: 'Italian Kitchen',
    url: null,
    desc: 'Restaurant & food — social content day',
    photos: [
      '/contentdayitaliankithcen1.jpg',
      '/contentdayitaliankithcen2.jpg',
      '/contentdayitaliankithcen3.jpg',
      '/contentdayitaliankithcen4.jpg',
      '/contentdayitaliankithcen5.jpg',
      '/contentdayitaliankithcen6.jpg',
      '/contentdayitaliankithcen7.jpg',
      '/contentdayitaliankithcen8.jpg',
      '/contentdayitaliankithcen9.jpg',
      '/contentdayitaliankithcen10.jpg',
    ],
  },
  {
    client: 'All Sewn Up',
    url: null,
    desc: 'Fashion & alterations — social content day',
    photos: [
      '/ContentDayAllSewnUp1.jpg',
      '/ContentDayAllSewnUp2.jpg',
      '/ContentDayAllSewnUp3.jpg',
      '/ContentDayAllSewnUp4.jpg',
      '/ContentDayAllSewnUp5.jpg',
      '/ContentDayAllSewnUp6.jpg',
    ],
  },
  {
    client: "Chanel O'Connor",
    url: null,
    desc: "RuPaul's Drag Race UK - social content day",
    photos: [
      '/cdchanel1.jpg',
      '/cdchanel2.jpg',
      '/cdchanel3.jpg',
      '/cdchanel4.jpg',
    ],
  },
  {
    client: 'Kev Lawrence',
    url: 'https://kevlawrence.design',
    desc: 'Brand & design - social content day',
    photos: [
      '/cdkevin1.jpg',
      '/cdkevin2.jpg',
      '/cdkevin3.jpg',
    ],
  },
  {
    client: 'Isle of Bute Gin',
    url: null,
    desc: 'Spirits brand - social content day',
    photos: [
      '/cd1.jpg',
      '/cd2.jpg',
      '/cd3.jpg',
      '/cd4.jpg',
    ],
  },
]

export default function ContentDay() {
  return (
    <div className="pt-24">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Services</p>
        <h1 className="text-5xl font-black mb-6 text-gray-900 dark:text-white">Content Day</h1>
        <p className="text-gray-500 dark:text-white/50 max-w-2xl text-xl mb-12 leading-relaxed">
          One full production day. Maximum output. Walk away with weeks of professional video and photo content — without multiple bookings.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div className="space-y-5 text-gray-600 dark:text-white/60 leading-relaxed">
            <p>The Content Day is designed for businesses that need a lot of professional content but want to do it efficiently — one day, one booking, everything captured.</p>
            <p>In a single session we&apos;ll produce short-form social videos, photography, testimonial clips, and longer-form content depending on your brief. Everything planned in advance so shoot day runs smoothly.</p>
            <p>Ideal for product businesses, service providers, gyms, restaurants, salons — any business that needs regular visual content.</p>

            <div className="pt-4 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full gradient-bg mt-2 flex-shrink-0" />
                <span>Pre-production planning call included</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full gradient-bg mt-2 flex-shrink-0" />
                <span>Full day of filming (video + photo) — up to 5 hours on location</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full gradient-bg mt-2 flex-shrink-0" />
                <span>Professional editing and colour grade</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full gradient-bg mt-2 flex-shrink-0" />
                <span>Multiple formats — Reels, Stories, feed posts</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full gradient-bg mt-2 flex-shrink-0" />
                <span>Delivered ready to post</span>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-8 rounded-sm mb-6">
              <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-white/40 mb-4">What&apos;s included</p>
              <p className="text-gray-600 dark:text-white/60 text-sm leading-relaxed">A full day of video and photography production — promo film, short-form social content, stills, and a content plan on delivery. Everything in one booking.</p>
            </div>
            <Link href="/contact" className="gradient-bg text-white font-bold px-8 py-4 rounded-sm hover:opacity-90 transition-opacity text-sm uppercase tracking-wider block text-center">
              Book a Content Day
            </Link>
          </div>
        </div>
      </section>

      {/* Content Day Video Examples */}
      <section className="border-t border-gray-200 dark:border-white/10 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Example Work</p>
          <h2 className="text-3xl font-black mb-12 text-gray-900 dark:text-white">Content Day Films</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <VideoCard id="acscOlaQAcA" title="All Sewn Up — Content Day Film" category="Commercial" />
            <VideoCard id="fVm0VBWuyt8" title="Rita Rusk Promo (Socially Creative)" category="Commercial" />
            <VideoCard id="9zONKRiBPm0" title="Warrior In Training — Pilates Promo" category="Commercial" />
          </div>
        </div>
      </section>

      {/* Past Content Days — Grouped by Shoot */}
      <section className="border-t border-gray-200 dark:border-white/10 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Past Content Days</p>
          <h2 className="text-3xl font-black mb-16 text-gray-900 dark:text-white">Recent Sessions</h2>
          <div className="space-y-20">
            {shoots.map((shoot) => (
              <div key={shoot.client}>
                <div className="flex items-baseline gap-4 mb-6 pb-4 border-b border-gray-200 dark:border-white/10">
                  <h3 className="text-xl font-black text-gray-900 dark:text-white">{shoot.client}</h3>
                  {shoot.url && (
                    <a href={shoot.url} target="_blank" rel="noopener noreferrer" className="text-xs text-[#0052D4] dark:text-[#00C6FF] hover:underline">{shoot.url.replace('https://', '')}</a>
                  )}
                  <span className="text-xs text-gray-400 dark:text-white/40 ml-auto">{shoot.desc}</span>
                </div>
                <MasonryGallery uniform images={shoot.photos.map(src => ({ src, alt: `${shoot.client} content day` }))} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
