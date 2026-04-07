import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ImageGallery from '@/components/ImageGallery'

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
  { src: '/jamiebts1.jpg', alt: 'Jamie on location' },
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
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="border-t border-gray-200 dark:border-white/10 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Approach</p>
          <h2 className="text-3xl font-black mb-12 text-gray-900 dark:text-white">How I Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
          <h2 className="text-3xl font-black mb-10 text-gray-900 dark:text-white">Since 2020</h2>
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

      {/* Behind the Scenes */}
      <section className="border-t border-gray-200 dark:border-white/10 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Behind the Scenes</p>
          <h2 className="text-3xl font-black mb-12 text-gray-900 dark:text-white">On Location</h2>
          <ImageGallery images={btsImages} />
        </div>
      </section>
    </div>
  )
}
