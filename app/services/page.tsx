import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Videography, photography, editing, event coverage, short-form content and content days. Professional media services across Scotland.',
}

const services = [
  {
    href: '/services/videography',
    title: 'Videography & Editing',
    desc: 'Professional 4K video production with broadcast-quality editing. Half-day and full-day shoots available for corporate, commercial, and documentary work.',
    img: '/Videographyandeditingservicepicture.jpg',
  },
  {
    href: '/services/promo-video',
    title: 'Promotional Videos',
    desc: 'Bespoke promotional and advertisement films to promote your business or organisation. Concept to delivery, entirely bespoke.',
    img: '/PromoVideoServicePicture.jpg',
  },
  {
    href: '/services/photography',
    title: 'Photography',
    desc: 'Professional photography packages for events, portraits, product and lifestyle shoots. Edited and delivered quickly.',
    img: '/PhotographyServicePicture.jpg',
  },
  {
    href: '/services/events',
    title: 'Event Coverage',
    desc: 'Full event coverage combining videography and photography in one package. Conferences, awards, ceremonies, and more.',
    img: '/eventcoverageservicepicture.jpg',
  },
  {
    href: '/services/retainer',
    title: 'Retainer Packages',
    desc: 'Consistent, high-quality video and social content on a monthly retainer. Predictable output, broadcast standard, delivered on schedule.',
    img: '/retainerpackagesservicepicture.png',
  },
  {
    href: '/services/content-day',
    title: 'Content Day',
    desc: 'One full production day — maximum content output. Walk away with weeks of professional video and photo content.',
    img: '/contentpackagesservicespicture.png',
  },
]

export default function Services() {
  return (
    <div className="pt-24">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">What I Offer</p>
            <h1 className="text-5xl font-black mb-4 text-gray-900 dark:text-white">Services</h1>
            <p className="text-gray-500 dark:text-white/50 max-w-xl text-lg">
              Video, photography and editing for businesses, events and organisations across Scotland. Every project is scoped to what you actually need and handled properly from start to finish.
            </p>
          </div>
          <div className="hidden lg:flex justify-end">
            <Image
              src="/jamiehero5.png"
              alt="Jamie Murray — MediaMurray videographer"
              width={400}
              height={500}
              className="h-64 w-auto object-contain"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 dark:bg-white/10">
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="bg-white dark:bg-[#0a0a0a] hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-colors group flex flex-col"
            >
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-xl font-black text-gray-900 dark:text-white group-hover:gradient-text transition-colors">{s.title}</h2>
                  <svg className="w-4 h-4 text-[#0052D4] group-hover:text-[#00C6FF] transition-colors flex-shrink-0 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                  </svg>
                </div>
                <p className="text-gray-500 dark:text-white/50 leading-relaxed text-sm flex-1">{s.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-gray-200 dark:border-white/10 py-20 text-center">
        <p className="text-gray-500 dark:text-white/50 mb-4">Not sure which service fits? Get in touch and we&apos;ll figure it out.</p>
        <Link href="/contact" className="gradient-bg text-white font-bold px-8 py-4 rounded-sm hover:opacity-90 transition-opacity text-sm uppercase tracking-wider inline-block">
          Get a Quote
        </Link>
      </section>
    </div>
  )
}
