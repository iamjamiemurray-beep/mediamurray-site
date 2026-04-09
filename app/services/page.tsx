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
    desc: 'Professional 4K video production with fast turnaround editing. Half-day and full-day shoots available for corporate, commercial, and documentary work.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-2.36A.75.75 0 0121.75 8.84v6.32a.75.75 0 01-1.28.53L15.75 13.5M3.75 18h9a1.5 1.5 0 001.5-1.5V7.5A1.5 1.5 0 0012.75 6h-9A1.5 1.5 0 002.25 7.5v9A1.5 1.5 0 003.75 18z"/>
      </svg>
    ),
  },
  {
    href: '/services/promo-video',
    title: 'Promotional Videos',
    desc: 'Bespoke promotional and advertisement films to promote your business or organisation. Concept to delivery, entirely bespoke.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 9.375v1.5m1.5-3.75C19.496 8.25 20 8.754 20 9.375v1.5m0 0v1.5m0-1.5c0 .621-.504 1.125-1.125 1.125m1.125-2.625v1.5c0 .621-.504 1.125-1.125 1.125"/>
      </svg>
    ),
  },
  {
    href: '/services/photography',
    title: 'Photography',
    desc: 'Professional photography packages for events, portraits, product and lifestyle shoots. Edited and delivered quickly.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"/><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"/>
      </svg>
    ),
  },
  {
    href: '/services/events',
    title: 'Event Coverage',
    desc: 'Full event coverage combining videography and photography in one package. Conferences, awards, ceremonies, and more.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"/>
      </svg>
    ),
  },
  {
    href: '/services/short-form',
    title: 'Short-Form Packages',
    desc: 'Consistent, high-quality Reels and Shorts for your social media channels. Grow your online presence with regular content.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"/>
      </svg>
    ),
  },
  {
    href: '/services/content-day',
    title: 'Content Day',
    desc: 'One full production day — maximum content output. Walk away with weeks of professional video and photo content.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"/>
      </svg>
    ),
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 dark:bg-white/10">
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="bg-white dark:bg-[#0a0a0a] p-10 hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-colors group"
            >
              <div className="text-[#0052D4] mb-4 group-hover:text-[#00C6FF] transition-colors">
                {s.icon}
              </div>
              <h2 className="text-2xl font-black mb-4 text-gray-900 dark:text-white group-hover:gradient-text">{s.title}</h2>
              <p className="text-gray-500 dark:text-white/50 leading-relaxed mb-6">{s.desc}</p>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0052D4] group-hover:text-[#00C6FF] transition-colors">
                Find out more →
              </span>
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
