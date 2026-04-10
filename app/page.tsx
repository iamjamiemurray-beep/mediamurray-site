import Link from 'next/link'
import Image from 'next/image'
import VideoCard from '@/components/VideoCard'
import ScrollReveal from '@/components/ScrollReveal'
import RotatingServices, { RotatingServicesInline } from '@/components/RotatingServices'

const statItems = [
  { value: '170+', label: 'Client Projects' },
  { value: '6', label: 'Years Freelancing in the Industry' },
  { value: '4K', label: 'Premium Footage, Every Shoot' },
  { value: '48hr', label: 'Express Turnaround Available' },
  { value: 'Sony', label: 'Professional Full-Frame Cameras' },
  { value: '5,000+', label: 'Hours in the Edit Suite' },
  { value: 'Promo', label: 'Promotional Films' },
  { value: 'Events', label: 'Event Coverage' },
  { value: 'Corp.', label: 'Corporate Video' },
  { value: 'SME', label: 'Small Business' },
  { value: 'Public', label: 'Sector & Charities' },
  { value: 'Adobe', label: 'Full Suite Post-Production' },
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


const clientFaces = Array.from({ length: 16 }, (_, i) => `/client${i + 1}.png`)

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
  { src: '/MM_Client_Logo_07_Frame_thewarmup.jpg', alt: 'The Warmup' },
  { src: '/MM_Client_Logo_07_Frame_spotlight.png', alt: 'Spotlight' },
  { src: '/MM_Client_Logo_07_Frame_argyllandbutecouncil.png', alt: 'Argyll & Bute Council' },
  { src: '/MM_Client_Logo_07_Frame_northlanarkshirecouncil.png', alt: 'North Lanarkshire Council' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center overflow-hidden pt-24 pb-12">
        <div className="absolute inset-0 bg-gray-50 dark:bg-[#0a0a0a]" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0052D4]/10 via-transparent to-[#00C6FF]/10" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="hero-animate hero-animate-delay-1 text-xs font-bold uppercase tracking-[0.25em] text-gray-400 dark:text-white/40 mb-6">
              Based in Scotland, United Kingdom
            </p>
            <h1 className="hero-animate hero-animate-delay-2 text-5xl sm:text-6xl font-black leading-none tracking-tight mb-6 text-gray-900 dark:text-white">
              Professional video production &{' '}
              photography in <span className="gradient-text">Scotland</span>
            </h1>
            <p className="hero-animate hero-animate-delay-3 text-lg text-gray-600 dark:text-white/60 max-w-xl mb-10 font-light">
              Videography, photography and editing for businesses, events and organisations across Scotland and the United Kingdom.
            </p>
            <div className="hero-animate hero-animate-delay-4 flex flex-col sm:flex-row gap-4">
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
            <RotatingServicesInline />
          </div>
          <div className="hero-animate hero-animate-delay-3 relative hidden lg:block">
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

      {/* Trusted By — Client Faces */}
      <section className="bg-[#0a0a0a] py-12 border-b border-white/10">
        <ScrollReveal className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6 text-center">
          <p className="text-2xl sm:text-3xl font-light text-white">
            Trusted by over <span className="font-black gradient-text">100</span> clients
          </p>
          <div className="flex -space-x-4 flex-shrink-0">
            {clientFaces.map((src, i) => (
              <div
                key={i}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-[3px] border-[#0a0a0a] flex-shrink-0"
                style={{ zIndex: clientFaces.length - i }}
              >
                <Image src={src} alt="MediaMurray client" width={64} height={64} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {['Public Sector', 'Corporate Events', 'Creative Agencies', 'Charities', 'Small Businesses', 'Individuals'].map((tag) => (
              <span key={tag} className="text-[10px] font-bold uppercase tracking-[0.15em] border border-white/20 text-white/50 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Clients Logo Marquee */}
      <section className="py-14 overflow-hidden border-b border-gray-200 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-6 mb-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Trusted By</p>
          <h2 className="text-2xl font-black text-gray-900 dark:text-white">Clients & Organisations</h2>
        </div>
        <div className="flex animate-marquee-medium whitespace-nowrap">
          {[...clientLogos, ...clientLogos].map((logo, i) => (
            <div key={i} className="inline-flex items-center px-8 flex-shrink-0">
              <div className="h-20 w-48 flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={140}
                  height={56}
                  className="h-full w-full object-contain opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Work */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <ScrollReveal>
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Portfolio</p>
            <h2 className="text-4xl font-black text-gray-900 dark:text-white">Recent Work</h2>
          </div>
          <Link href="/work" className="text-sm font-bold text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white transition-colors uppercase tracking-wider">
            View All →
          </Link>
        </div>
        {/* Featured — RJC */}
        <div className="mb-8 max-w-3xl mx-auto">
          {/* Gradient border wrapper */}
          <div className="p-[2px] rounded-sm bg-gradient-to-r from-[#0052D4] to-[#00C6FF]">
            <div className="rounded-sm overflow-hidden">
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
          </div>
          {/* Stats bar + CTA below featured */}
          <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-1">
            <div className="flex gap-6 flex-wrap">
              {[
                { value: '25K+', label: 'total views' },
                { value: '14K+', label: 'in first 24hrs' },
                { value: '560+', label: 'reactions' },
                { value: '6.5K', label: 'organic reach' },
              ].map((s) => (
                <div key={s.label}>
                  <span className="text-xl font-black gradient-text">{s.value}</span>
                  <span className="text-xs text-gray-400 dark:text-white/40 ml-1 uppercase tracking-wider">{s.label}</span>
                </div>
              ))}
            </div>
            <Link href="/work" className="text-xs font-bold uppercase tracking-widest text-[#0052D4] dark:text-white/60 hover:text-[#00C6FF] dark:hover:text-white transition-colors whitespace-nowrap">
              See All Work →
            </Link>
          </div>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <VideoCard id="VVGPcQIk0cY" title="An Evening with Graeme Souness — BTS" category="Event" />
          <VideoCard id="hDpazT7xfFc" title="The Whisky Journal — Promo Film" category="Commercial" />
          <VideoCard id="B6dOtVrT6Bg" title="International Fair Trade Towns Conference 2025" category="Event" />
          <VideoCard id="T68PCvwUwH0" title="Visit Bute: Your Own Adventure Island" category="Commercial" />
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
        </ScrollReveal>
      </section>

      {/* Stats Ticker */}
      <section className="border-y border-gray-200 dark:border-white/10 py-5 overflow-hidden bg-white dark:bg-[#0a0a0a]">
        <div className="flex animate-marquee-fast whitespace-nowrap">
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
        <ScrollReveal className="max-w-6xl mx-auto px-6">
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
        </ScrollReveal>
      </section>

      {/* Testimonials */}
      <section className="py-24 border-b border-gray-200 dark:border-white/10">
        <ScrollReveal className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Reviews</p>
          <h2 className="text-4xl font-black mb-12 text-gray-900 dark:text-white">What Clients Say</h2>

          {/* Stars helper */}
          {(() => {
            const Stars = () => (
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
            )
            const ProjectTag = ({ label, url, light = false }: { label: string; url?: string; light?: boolean }) => {
              const cls = `inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest border rounded-full px-3 py-1 transition-colors ${light ? 'border-white/20 text-white/50 hover:text-white hover:border-white/50' : 'border-[#0052D4]/30 text-[#0052D4] hover:border-[#0052D4] dark:border-white/20 dark:text-white/50 dark:hover:text-white'}`
              const icon = <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              return (
                <div className="mt-3">
                  {url ? (
                    <Link href={url} className={cls}>
                      {label}{icon}
                    </Link>
                  ) : (
                    <span className={`inline-flex items-center text-xs font-bold uppercase tracking-widest ${light ? 'text-white/30' : 'text-gray-400 dark:text-white/30'}`}>{label}</span>
                  )}
                </div>
              )
            }
            const Attr = ({ name, org, project, projectUrl, photo }: { name: string; org: string; project?: string; projectUrl?: string; photo?: string }) => (
              <div className="mt-auto pt-4 flex items-center gap-3">
                {photo && <Image src={photo} alt={name} width={36} height={36} className="w-9 h-9 rounded-full object-cover flex-shrink-0" />}
                <div>
                  <p className="font-bold text-white text-sm">{name}</p>
                  <p className="text-xs text-white/40 uppercase tracking-wider mt-0.5">{org}</p>
                  {project && <ProjectTag label={project} url={projectUrl} light />}
                </div>
              </div>
            )
            const AttrDark = ({ name, org, project, projectUrl, photo }: { name: string; org: string; project?: string; projectUrl?: string; photo?: string }) => (
              <div className="mt-auto pt-4 flex items-center gap-3">
                {photo && <Image src={photo} alt={name} width={36} height={36} className="w-9 h-9 rounded-full object-cover flex-shrink-0" />}
                <div>
                  <p className="font-bold text-gray-900 dark:text-white text-sm">{name}</p>
                  <p className="text-xs text-gray-400 dark:text-white/40 uppercase tracking-wider mt-0.5">{org}</p>
                  {project && <ProjectTag label={project} url={projectUrl} />}
                </div>
              </div>
            )
            return (
              <div className="space-y-4">
                {/* Row 1: Featured hero testimonial */}
                <div className="gradient-bg p-10 rounded-sm transition-transform duration-300 hover:scale-[1.01] cursor-default">
                  <div className="text-white/20 text-8xl font-black leading-none mb-2 select-none">&ldquo;</div>
                  <Stars />
                  <p className="text-white text-xl leading-relaxed mb-0 font-light max-w-4xl">
                    From start to finish, Jamie was a pleasure to work with. He made our young people feel at ease and slotted right into our event, really capturing the energy of the day and truly bringing our work to life. He turned around our images in record time. We would thoroughly recommend his services to prospective clients.
                  </p>
                  <Attr name="Ryan Coelho" org="Scottish Youth Parliament" project="Event & Portrait Photography" photo="/Ryan-coelho.png" />
                </div>

                {/* Row 2: Three short punchy cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { quote: "Professional, highly skilled and friendly. Far exceeded our expectations!", name: 'Annie McAllister', org: 'AniMac Design', project: 'Promotional Films', url: '/work/video/7eQSVwN0oBU', photo: '/Annie-McAllister.png' },
                    { quote: "Professional, approachable and very likeable. Five out of five all round!", name: 'Scott Fleming', org: 'The Highways Band', project: 'Music Video', url: '/work/video/MuUrZOhwSAQ', photo: '/Scott-Fleming.png' },
                    { quote: "No hesitation in recommending! Surpassed my expectations and significantly eased the process for me.", name: 'Jonathan Reid', org: 'Reid Financial Planning', project: 'Portrait Photography', photo: '/Jonathan-Reid.png' },
                  ].map((t) => (
                    <div key={t.name} className="bg-[#0a0a0a] border border-white/10 p-7 rounded-sm flex flex-col transition-transform duration-300 hover:scale-[1.02] cursor-default">
                      <Stars />
                      <p className="text-white/80 leading-relaxed text-sm flex-1">&ldquo;{t.quote}&rdquo;</p>
                      <Attr name={t.name} org={t.org} project={t.project} projectUrl={t.url} photo={t.photo} />
                    </div>
                  ))}
                </div>

                {/* Row 3: Wide + stacked small */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2 bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 p-8 rounded-sm flex flex-col transition-transform duration-300 hover:scale-[1.01] cursor-default">
                    <Stars />
                    <p className="text-gray-600 dark:text-white/70 leading-relaxed text-base flex-1">&ldquo;Really enjoyed the process and working with MediaMurray. Incredibly professional and friendly. The final materials far exceeded expectations! Really appreciated the patience shown with figuring out a schedule and working through the ideas before filming. Definitely recommend MediaMurray.&rdquo;</p>
                    <AttrDark name="Eve McArthur" org="Argyll & Bute Council" project="Portrait Photography" photo="/Eve-McArthur.png" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex-1 bg-[#0052D4] p-6 rounded-sm flex flex-col transition-transform duration-300 hover:scale-[1.02] cursor-default">
                      <Stars />
                      <p className="text-white leading-relaxed text-sm flex-1">&ldquo;It&rsquo;s amazing!! We shared it with the team and even had a few people a bit emotional.&rdquo;</p>
                      <Attr name="Emily Beever" org="Scottish Youth Parliament" project="Dear Scotland's Future — SYP Manifesto Film" projectUrl="/work/video/kg3wpo3TTL0" />
                    </div>
                    <div className="flex-1 bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 p-6 rounded-sm flex flex-col transition-transform duration-300 hover:scale-[1.02] cursor-default">
                      <Stars />
                      <p className="text-gray-600 dark:text-white/70 leading-relaxed text-sm flex-1">&ldquo;This is brilliant, thanks so much.&rdquo;</p>
                      <AttrDark name="Louise Davies" org="Scottish Fair Trade Forum" project="Youth Collective Film & Social Media Ads" projectUrl="/work/video/b9phaKPVKxY" photo="/Louise-Davies.png" />
                    </div>
                  </div>
                </div>

                {/* Row 4: Two medium cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 p-8 rounded-sm flex flex-col transition-transform duration-300 hover:scale-[1.01] cursor-default">
                    <Stars />
                    <p className="text-gray-600 dark:text-white/70 leading-relaxed text-sm flex-1">&ldquo;A pleasure to work with. Clear, understanding and supportive. Exceptional in terms of the final product. The promotional video has helped reach international audiences with our Art &amp; Climate Change message.&rdquo;</p>
                    <AttrDark name="Richard Whitcomb" org="Bute Community Forest" project="Exhibition Promotional Film" projectUrl="/work/video/v4sbb5wXikU" photo="/Richard-Whitcomb.png" />
                  </div>
                  <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded-sm flex flex-col transition-transform duration-300 hover:scale-[1.01] cursor-default">
                    <Stars />
                    <p className="text-white/80 leading-relaxed text-sm flex-1">&ldquo;Working with Jamie was excellent. He was very open to my ideas and we collaborated creatively. He very much put me at ease — I&rsquo;m not one for being in front of the camera. The service he provides is 10/10 and he got the images back to me very quickly. Highly recommend.&rdquo;</p>
                    <Attr name="Kevin Lawrence" org="Kev Lawrence Design" project="Promotional Film & Portrait Photography" photo="/Kevin-Lawrence.png" />
                  </div>
                </div>
              </div>
            )
          })()}
          <div className="mt-10 text-center">
            <Link href="/testimonials" className="text-sm font-bold text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white transition-colors uppercase tracking-wider">
              See All Reviews →
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section className="gradient-bg py-24 overflow-hidden">
        <ScrollReveal className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <h2 className="text-4xl font-black mb-6 text-white">Ready to start your project?</h2>
              <p className="text-white/90 mb-4 text-lg font-medium">
                170+ projects. Clients across Scotland and the United Kingdom.
              </p>
              <p className="text-white/75 mb-4 text-base leading-relaxed">
                If you&apos;ve been let down by content you&apos;d never want to share, or by suppliers who didn&apos;t deliver — this is the alternative. Trusted results from someone experienced, with countless clients who can testify to that.
              </p>
              <p className="text-white/75 mb-10 text-base leading-relaxed">
                You deserve work that represents you properly, delivered on time, and worth sharing with the world. Let&apos;s get started.
              </p>
              <Link
                href="/contact"
                className="bg-white text-[#0052D4] font-black px-10 py-4 rounded-sm hover:bg-white/90 transition-colors text-sm uppercase tracking-wider inline-block"
              >
                Get a Free Quote
              </Link>
            </div>
            <div className="hidden lg:flex justify-end items-end">
              <Image
                src="/jamiehero6.png"
                alt="Jamie Murray — MediaMurray"
                width={450}
                height={550}
                className="h-[500px] w-auto object-contain"
              />
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
