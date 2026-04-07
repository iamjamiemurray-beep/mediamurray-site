import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

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

export const metadata: Metadata = {
  title: 'About',
  description: 'Jamie Murray — Scotland-based videographer, photographer and editor. 170+ projects, 6 years in business. Broadcast quality without the agency overhead.',
}

const btsImages = [
  { src: '/jamiebts2.png', alt: 'Jamie on location' },
  { src: '/jamiebts3.png', alt: 'Jamie on location' },
  { src: '/jamiebts4.jpeg', alt: 'Jamie on location' },
  { src: '/jamiebts5.jpeg', alt: 'Jamie on location' },
  { src: '/jamiebts6.jpeg', alt: 'Jamie on location' },
  { src: '/jamiebts7.jpeg', alt: 'Jamie on location' },
  { src: '/jamiebts8.jpeg', alt: 'Jamie on location' },
  { src: '/jamiebts9.jpeg', alt: 'Jamie on location' },
  { src: '/jamiebts10.jpeg', alt: 'Jamie on location' },
  { src: '/jamiebts11.jpeg', alt: 'Jamie on location' },
  { src: '/jamiecreative1.jpg', alt: 'Jamie working' },
  { src: '/jamiecreative2.jpg', alt: 'Jamie working' },
  { src: '/jamiewritingatdesk.jpg', alt: 'Jamie at desk' },
]

export default function About() {
  return (
    <div className="pt-24">

      {/* Hero — About */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">About</p>
            <h1 className="text-5xl font-black mb-8 text-gray-900 dark:text-white">Jamie Murray</h1>

            <div className="space-y-5 text-gray-600 dark:text-white/60 leading-relaxed">
              <p>
                I&apos;m originally from the Isle of Bute, where I was born and grew up, and I now work across Scotland producing professional video and photography for businesses, organisations, creative agencies, charities and individuals.
              </p>
              <p>
                Since graduating with a First Class degree in Television Production from Edinburgh Napier University in 2020, I&apos;ve worked on over 170 client projects, filming and editing a wide range of content — promotional films, event coverage, interviews, organisational and public-sector work, product content, and documentary-style projects in live environments.
              </p>
              <p>
                A lot of my work involves real people who aren&apos;t always used to being on camera. My role is to make the process feel straightforward and well handled, while delivering work that looks professional and represents people and organisations properly.
              </p>
              <p>
                I take a lot of pride in my work as a freelancer. I care about how things are presented, how people come across on screen, and whether the final film or photographs tell a clear, honest story that an audience can engage with.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                { label: 'Based', value: 'Scotland, UK' },
                { label: 'Camera', value: 'Sony a7IV + a7III' },
                { label: 'Aerial', value: 'DJI Mini 5 Pro' },
                { label: 'Post', value: 'Adobe Suite' },
              ].map((d) => (
                <div key={d.label}>
                  <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-white/30 mb-1">{d.label}</p>
                  <p className="font-bold text-gray-900 dark:text-white">{d.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex gap-4">
              <Link href="/contact" className="gradient-bg text-white font-bold px-8 py-4 rounded-sm hover:opacity-90 transition-opacity text-sm uppercase tracking-wider">
                Work Together
              </Link>
              <Link href="/work" className="border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white font-bold px-8 py-4 rounded-sm hover:border-gray-500 dark:hover:border-white/50 transition-colors text-sm uppercase tracking-wider">
                View Work
              </Link>
            </div>
          </div>

          <div>
            <div className="overflow-hidden">
              <Image
                src="/jamie-portrait.png"
                alt="Jamie Murray — MediaMurray"
                width={600}
                height={750}
                className="w-full h-auto object-contain"
              />
            </div>
            {/* Small gallery below portrait */}
            <div className="grid grid-cols-3 gap-2 mt-2">
              {[
                { src: '/jamiebts5.jpeg', alt: 'Jamie filming at Europa League' },
                { src: '/jamiebts6.jpeg', alt: 'Jamie on location' },
                { src: '/jamiebts4.jpeg', alt: 'Jamie filming on location' },
              ].map((img, i) => (
                <div key={i} className="overflow-hidden rounded-sm aspect-square">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
            {/* Isle of Bute origin */}
            <div className="mt-5 flex items-center gap-3">
              <svg viewBox="0 0 80 160" className="w-8 h-auto flex-shrink-0 fill-[#0052D4] opacity-70" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 4 C46 6 56 12 60 22 C65 34 64 46 62 56 C60 66 58 74 60 82 C62 92 66 100 64 112 C62 124 56 136 48 148 C44 154 40 158 38 156 C34 150 28 138 26 126 C24 114 28 104 30 94 C32 84 32 76 28 66 C24 56 20 46 22 34 C24 22 32 10 40 4 Z" />
              </svg>
              <p className="text-xs text-gray-400 dark:text-white/40 leading-tight">
                Originally from the<br />
                <span className="font-bold text-gray-600 dark:text-white/60">Isle of Bute, Scotland</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="border-t border-gray-200 dark:border-white/10 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Approach</p>
          <h2 className="text-3xl font-black mb-12 text-gray-900 dark:text-white">How I Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="border-l-4 border-[#0052D4] pl-6">
              <h3 className="font-black text-xl mb-3 text-gray-900 dark:text-white">Day-Rate Filming & Photography</h3>
              <p className="text-gray-600 dark:text-white/60 leading-relaxed">
                This covers interviews, events, behind-the-scenes and documentation work. The focus is on capturing what&apos;s actually happening and delivering clean, usable content that clients can rely on.
              </p>
            </div>
            <div className="border-l-4 border-[#00C6FF] pl-6">
              <h3 className="font-black text-xl mb-3 text-gray-900 dark:text-white">Bespoke Projects</h3>
              <p className="text-gray-600 dark:text-white/60 leading-relaxed">
                More involved, story-led pieces — promotional films, campaigns and structured content where I help shape the narrative from the start, then handle filming and post-production to deliver a finished piece that holds together properly.
              </p>
            </div>
            <div className="border-l-4 border-gray-300 dark:border-white/20 pl-6">
              <h3 className="font-black text-xl mb-3 text-gray-900 dark:text-white">Agency & Crew Work</h3>
              <p className="text-gray-600 dark:text-white/60 leading-relaxed">
                I regularly work in videographer-only roles for creative agencies — arriving on set with my kit and functioning as an additional camera operator or specialist. This includes podcast shoots, larger event productions, and behind-the-scenes filming where the agency leads creative and I deliver the footage.
              </p>
            </div>
          </div>
          <p className="mt-10 text-gray-600 dark:text-white/60 leading-relaxed max-w-3xl">
            I take a hands-on approach to every project and usually handle the filming and editing myself, depending on scope. Each job is tailored to what&apos;s actually needed, with an emphasis on keeping the process clear, efficient and delivering a strong final result.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="border-t border-gray-200 dark:border-white/10 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Experience</p>
          <h2 className="text-3xl font-black mb-4 text-gray-900 dark:text-white">Since Going Freelance</h2>
          <p className="text-gray-600 dark:text-white/60 leading-relaxed max-w-3xl mb-10">
            Projects have grown in scale consistently year on year. I&apos;ve taken on more work, more varied clients, and more ambitious briefs each year since graduating. The variety is a big part of what I enjoy — I&apos;m often working with new people and on projects that are genuinely different from one another, which keeps the standard high. I collaborate well and I&apos;m happy working on something for a number of months, as long as there&apos;s a clear goal and we both care about the outcome.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
            <div className="space-y-4 text-gray-600 dark:text-white/60 leading-relaxed">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full gradient-bg mt-2 flex-shrink-0" />
                <span>170+ projects delivered</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full gradient-bg mt-2 flex-shrink-0" />
                <span>Regular work across public sector, business, creative and charity projects</span>
              </div>
            </div>
            <div className="text-gray-600 dark:text-white/60 leading-relaxed text-sm">
              <p className="mb-3">Organisations I&apos;ve worked with include:</p>
              <p>BBC Scotland, The Scottish Parliament, RangersTV, Scottish Youth Parliament, North Lanarkshire Council, Argyll &amp; Bute Council, Scottish Fair Trade, Inverclyde Whisky Festival, Scottish Women&apos;s Wellbeing Summit, Visit Bute, Frame Group, Talking Fly Films, Maison Dieu Coffee Roasters, Reid Financial Planning, LowlandRFCA, and others.</p>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 p-6 rounded-sm max-w-2xl">
            <p className="text-gray-600 dark:text-white/60 leading-relaxed text-sm">
              If you&apos;re looking for experience, reliability, and someone who&apos;s easy to work with, takes the work seriously, and delivers what&apos;s agreed — we are likely a good fit.
            </p>
          </div>
        </div>
      </section>

      {/* Clients Logo Marquee */}
      <section className="border-t border-gray-200 dark:border-white/10 py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Clients & Organisations</p>
          <h2 className="text-3xl font-black text-center text-gray-900 dark:text-white">Trusted By</h2>
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

      {/* Contact Directly */}
      <section className="border-t border-gray-200 dark:border-white/10 py-16 bg-gray-50 dark:bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-1">Get in touch</p>
            <h2 className="text-2xl font-black text-gray-900 dark:text-white">Contact me directly</h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center sm:justify-end">
            <a
              href="mailto:mail@mediamurray.com"
              className="flex items-center gap-2 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white font-bold px-6 py-3 rounded-sm hover:border-gray-500 dark:hover:border-white/50 transition-colors text-sm uppercase tracking-wider"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              Email
            </a>
            <a
              href="https://wa.me/447841728249"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3 rounded-sm hover:opacity-90 transition-opacity text-sm uppercase tracking-wider"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/mediamurrayuk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 gradient-bg text-white font-bold px-6 py-3 rounded-sm hover:opacity-90 transition-opacity text-sm uppercase tracking-wider"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="border-t border-gray-200 dark:border-white/10 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Behind the Scenes</p>
          <h2 className="text-3xl font-black mb-12 text-gray-900 dark:text-white">On Location</h2>
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-3">
            {btsImages.map((img, i) => (
              <div key={i} className="break-inside-avoid mb-3 overflow-hidden rounded-sm group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={900}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
