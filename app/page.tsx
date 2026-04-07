import Link from 'next/link'
import Image from 'next/image'
import VideoCard from '@/components/VideoCard'

const statItems = [
  { value: '170+', label: 'Client Projects' },
  { value: '6', label: 'Years in Business' },
  { value: '4K', label: 'All Footage Captured' },
  { value: '48hr', label: 'Express Turnaround Available' },
  { value: 'Sony', label: 'a7IV + a7III' },
  { value: 'Promo', label: 'Films & Commercials' },
  { value: 'Events', label: 'Coverage Specialist' },
  { value: 'Scot', label: 'Parliament Client' },
  { value: 'Adobe', label: 'Full Suite Editing' },
  { value: '🎬', label: 'Broadcast Standard' },
  { value: 'Scotland', label: 'Wide Coverage' },
  { value: 'Content', label: 'Day Packages' },
  { value: 'BBC', label: 'Scotland Client' },
]

const services = [
  {
    title: 'Videography & Editing',
    desc: 'Professional 4K coverage with fast turnaround editing. Broadcast-quality cameras, in-house edit, ready to publish.',
    href: '/services/videography',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-2.36A.75.75 0 0121.75 8.84v6.32a.75.75 0 01-1.28.53L15.75 13.5M3.75 18h9a1.5 1.5 0 001.5-1.5V7.5A1.5 1.5 0 0012.75 6h-9A1.5 1.5 0 002.25 7.5v9A1.5 1.5 0 003.75 18z"/>
      </svg>
    ),
  },
  {
    title: 'Promotional Videos',
    desc: 'Bespoke promo films for businesses, brands, and organisations — from concept to delivery.',
    href: '/services/promo-video',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 9.375v1.5m1.5-3.75C19.496 8.25 20 8.754 20 9.375v1.5m0 0v1.5m0-1.5c0 .621-.504 1.125-1.125 1.125m1.125-2.625v1.5c0 .621-.504 1.125-1.125 1.125"/>
      </svg>
    ),
  },
  {
    title: 'Photography',
    desc: 'Events, portraits, product and lifestyle photography packages for any brief.',
    href: '/services/photography',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"/>
      </svg>
    ),
  },
  {
    title: 'Event Coverage',
    desc: 'Full event coverage combining videography, photography and same-day editing.',
    href: '/services/events',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"/>
      </svg>
    ),
  },
  {
    title: 'Short-Form Packages',
    desc: 'Consistent, high-quality Reels and Shorts to grow your social media presence.',
    href: '/services/short-form',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"/>
      </svg>
    ),
  },
  {
    title: 'Content Day',
    desc: 'One full day, maximum output. Video and photo content for weeks of social posting.',
    href: '/services/content-day',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"/>
      </svg>
    ),
  },
]


const clientLogos = [
  { src: '/MM_Client_Logo_01_BBC_Scotland.avif', alt: 'BBC Scotland' },
  { src: '/MM_Client_Logo_11_Scottish_Parliament.avif', alt: 'Scottish Parliament' },
  { src: '/MM_Client_Logo_09_RTV.avif', alt: 'RangersTV' },
  { src: '/MM_Client_Logo_08_RFCA.avif', alt: 'LowlandRFCA' },
  { src: '/MM_Client_Logo_07_Frame.avif', alt: 'Frame' },
  { src: '/MM_Client_Logo_04_Bute_Kitchen.avif', alt: 'Bute Kitchen' },
  { src: '/MM_Client_Logo_05_Club71.avif', alt: 'Club71' },
  { src: '/MM_Client_Logo_12_Smarts.avif', alt: 'Smarts' },
  { src: '/MM_Client_Logo_13_Trapdoor.avif', alt: 'Trapdoor' },
  { src: '/MM_Client_Logo_14_Visit_Bute.avif', alt: 'Visit Bute' },
  { src: '/MM_Client_Logo_10_Reid_Financial_Planning.avif', alt: 'Reid Financial Planning' },
  { src: '/MM_Client_Logo_02_BBC_Social.avif', alt: 'BBC Social' },
  { src: '/MM_Client_Logo_03_BBC_Sport.avif', alt: 'BBC Sport' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gray-50 dark:bg-[#0a0a0a]" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0052D4]/10 via-transparent to-[#00C6FF]/10" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-400 dark:text-white/40 mb-6">
              Based in Scotland, United Kingdom
            </p>
            <h1 className="text-5xl sm:text-6xl font-black leading-none tracking-tight mb-6 text-gray-900 dark:text-white">
              Professional video production &{' '}
              photography in <span className="gradient-text">Scotland.</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-white/60 max-w-xl mb-10 font-light">
              Videography, photography and editing for businesses, events and organisations across Scotland and the United Kingdom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/work"
                className="gradient-bg text-white font-bold px-8 py-4 rounded-sm hover:opacity-90 transition-opacity text-sm uppercase tracking-wider"
              >
                View Work
              </Link>
              <Link
                href="/contact"
                className="border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white font-bold px-8 py-4 rounded-sm hover:border-gray-500 dark:hover:border-white/50 transition-colors text-sm uppercase tracking-wider"
              >
                Get a Quote
              </Link>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <Image
              src="/jamie-portrait.png"
              alt="Jamie Murray — MediaMurray videographer"
              width={600}
              height={700}
              className="w-full h-auto object-cover rounded-sm"
              priority
            />
          </div>
        </div>

      </section>

      {/* Clients Logo Marquee */}
      <section className="py-16 overflow-hidden border-b border-gray-200 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-6 mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Trusted By</p>
          <h2 className="text-2xl font-black text-gray-900 dark:text-white">Clients & Organisations</h2>
        </div>
        <div className="flex animate-marquee-slow whitespace-nowrap">
          {[...clientLogos, ...clientLogos].map((logo, i) => (
            <div key={i} className="inline-flex items-center px-6 flex-shrink-0">
              <div className="h-16 w-40 flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={112}
                  height={48}
                  className="h-full w-full object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Work */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Portfolio</p>
            <h2 className="text-4xl font-black text-gray-900 dark:text-white">Recent Work</h2>
          </div>
          <Link href="/work" className="text-sm font-bold text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white transition-colors uppercase tracking-wider">
            View All →
          </Link>
        </div>
        {/* Featured — RJC full width */}
        <div className="mb-4">
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
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <VideoCard id="T68PCvwUwH0" title="Visit Bute: Your Own Adventure Island" category="Commercial" />
          <VideoCard id="hDpazT7xfFc" title="The Whisky Journal — Promo Film" category="Commercial" />
          <VideoCard id="B6dOtVrT6Bg" title="International Fair Trade Towns Conference 2025" category="Event" />
          <VideoCard id="VVGPcQIk0cY" title="An Evening with Graeme Souness — BTS" category="Event" />
          <VideoCard id="9zONKRiBPm0" title="Warrior In Training — Pilates Promo" category="Commercial" />
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
        </div>
      </section>

      {/* Stats Ticker */}
      <section className="border-y border-gray-200 dark:border-white/10 py-5 overflow-hidden bg-white dark:bg-[#0a0a0a]">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...statItems, ...statItems].map((s, i) => (
            <div key={i} className="inline-flex items-center gap-2 px-8">
              <span className="text-2xl font-black gradient-text">{s.value}</span>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/40">{s.label}</span>
              <span className="ml-8 text-[#0052D4] text-lg font-thin select-none">·</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 dark:bg-white/[0.02] border-y border-gray-200 dark:border-white/10 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">What I Do</p>
          <h2 className="text-4xl font-black mb-12 text-gray-900 dark:text-white">Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 dark:bg-white/10">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="bg-white dark:bg-[#0a0a0a] p-8 hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-colors group"
              >
                <div className="text-[#0052D4] mb-4 group-hover:text-[#00C6FF] transition-colors">
                  {s.icon}
                </div>
                <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-white group-hover:gradient-text transition-colors">{s.title}</h3>
                <p className="text-sm text-gray-500 dark:text-white/50 leading-relaxed mb-6">{s.desc}</p>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0052D4] group-hover:text-[#00C6FF] transition-colors">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 border-b border-gray-200 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Reviews</p>
          <h2 className="text-4xl font-black mb-12 text-gray-900 dark:text-white">What Clients Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                quote: "MediaMurray proved to be very professional and managed to get a slot booked in within a week to take my headshots. The pre-planned photography locations worked perfectly on the shoot day, surpassing my expectations and significantly easing the process for me. I was particularly impressed with how quickly MediaMurray was able to produce and return the pictures back to me. I would have no hesitation recommending MediaMurray's services to anyone with photography/videography needs.",
                name: 'Jonathan',
                org: 'Reid Financial Planning',
              },
              {
                quote: "Really enjoyed the process and working with MediaMurray. Incredibly professional and friendly. The overall process and final materials far exceeded expectations! Really appreciated the patience shown with figuring out a schedule and working through the ideas before filming. Definitely recommend MediaMurray.",
                name: 'Eve',
                org: 'Argyll & Bute Council',
              },
              {
                quote: "MediaMurray's work was exceptional in terms of the final product, which really showcased the artists and its location here on the Isle of Bute in a very positive light. More than this, MediaMurray were a pleasure to work with. Professional, clear, understanding and supportive. The promotional video has helped to reach international audiences with our Art & Climate Change message — and we would have no hesitation in working with MediaMurray in the future.",
                name: 'Richard',
                org: 'Bute Community Forest',
              },
              {
                quote: "Working with Jamie was excellent. Not only did he create some fantastic content for me, he was very open to my ideas and we collaborated creatively. He very much put me at ease as I'm not one for being in front of the camera. The service he provides is 10/10 and he got the images back to me very quickly. I would work with Jamie again and would highly recommend him to others!",
                name: 'Kevin',
                org: 'Kev Lawrence Design',
              },
            ].map((t) => (
              <div key={t.name} className="bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 p-8 rounded-sm">
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#0052D4]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-white/60 leading-relaxed mb-6 text-sm">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400 dark:text-white/40 uppercase tracking-wider mt-0.5">{t.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-bg py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-4 text-white">Ready to start your project?</h2>
          <p className="text-white/80 mb-8 text-lg">
            Broadcast quality. Experienced hands. Fast delivery.
          </p>
          <Link
            href="/contact"
            className="bg-white text-[#0052D4] font-black px-10 py-4 rounded-sm hover:bg-white/90 transition-colors text-sm uppercase tracking-wider inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
