import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What Camera Should I Buy First? | MediaMurray',
  description: 'A practical guide to starter cameras for content creation — from budget options to the kit professionals actually use. Written by a working videographer.',
}

interface Camera {
  name: string
  price: string
  sensor: string
  video: string
  description: string
  image?: string
  amazonUrl: string
  highlight?: boolean
}

interface Tier {
  label: string
  range: string
  description: string
  cameras: Camera[]
}

const tiers: Tier[] = [
  {
    label: 'Entry Level',
    range: 'Under £500',
    description: 'Solid starting points if budget is the main constraint. All shoot decent 4K and have autofocus capable of tracking a moving subject.',
    cameras: [
      {
        name: 'Sony ZV-E10',
        price: '~£350',
        sensor: 'APS-C',
        video: '4K30 / 8-bit',
        description: 'The simplest route into interchangeable-lens video. Great autofocus, flip-out screen, compact. The 8-bit 4K is a bit soft but fine for social content. Vast lens ecosystem.',
        amazonUrl: 'https://www.amazon.co.uk/s?k=Sony+ZV-E10',
      },
      {
        name: 'Nikon Z30',
        price: '~£450',
        sensor: 'APS-C',
        video: '4K30 / 8-bit',
        description: 'Built specifically for vlogging and content creation. No electronic viewfinder, which keeps it light. Clean HDMI out, decent battery life, good face tracking.',
        amazonUrl: 'https://www.amazon.co.uk/s?k=Nikon+Z30',
      },
      {
        name: 'Sony A6400',
        price: '~£500 used',
        sensor: 'APS-C',
        video: '4K30 / 8-bit',
        description: 'Still one of the best autofocus systems at this price point — real-time eye and subject tracking. Available used for sensible money. A genuine bargain.',
        amazonUrl: 'https://www.amazon.co.uk/s?k=Sony+A6400',
      },
      {
        name: 'Canon EOS M50 Mark II',
        price: '~£400',
        sensor: 'APS-C',
        video: '4K (cropped) / 1080p60',
        description: 'A well-rounded beginner camera with excellent face tracking and a flip-out screen. The 4K is heavily cropped so most people shoot 1080p — but for social content it holds up well.',
        amazonUrl: 'https://www.amazon.co.uk/s?k=Canon+EOS+M50+Mark+II',
      },
      {
        name: 'Panasonic G100',
        price: '~£350',
        sensor: 'Micro Four Thirds',
        video: '4K30 / V-LogL',
        description: 'Tiny, lightweight, with a built-in directional mic system — unusually useful for solo creators. V-LogL support at this price point is rare. Small sensor, but punches above its weight.',
        amazonUrl: 'https://www.amazon.co.uk/s?k=Panasonic+G100',
      },
    ],
  },
  {
    label: 'Budget',
    range: 'Under £800',
    description: 'This is where things start to get genuinely capable. Better codecs, cleaner footage, and features that matter when clients are watching.',
    cameras: [
      {
        name: 'Sony ZV-E10 II',
        price: '~£750',
        sensor: 'APS-C',
        video: '4K30 / 10-bit',
        description: 'The upgrade that actually matters over the original — 10-bit log footage gives real flexibility in post. Same compact form factor, significantly more capable file.',
        amazonUrl: 'https://www.amazon.co.uk/s?k=Sony+ZV-E10+II',
      },
      {
        name: 'Canon EOS R10',
        price: '~£750',
        sensor: 'APS-C',
        video: '4K30 uncropped',
        description: 'Canon\'s entry into RF-mount APS-C. Clean colours straight out of camera, uncropped 4K, and Canon\'s subject detection autofocus is excellent. Good for hybrid shooters.',
        amazonUrl: 'https://www.amazon.co.uk/s?k=Canon+EOS+R10',
      },
      {
        name: 'Fujifilm X-S20',
        price: '~£800',
        sensor: 'APS-C',
        video: '4K60 / 6.2K',
        description: 'The best specs-per-pound in this range. 4K60 and 6.2K open-gate are unusual at this price. Fuji\'s film simulations are genuinely useful — some shooters use them straight to camera with no grading.',
        amazonUrl: 'https://www.amazon.co.uk/s?k=Fujifilm+X-S20',
      },
      {
        name: 'OM System OM-5',
        price: '~£700',
        sensor: 'Micro Four Thirds',
        video: '4K30 / 10-bit',
        description: 'Weather-sealed, compact, and impressively stabilised. The 7.5-stop IBIS is class-leading — useful if you\'re shooting handheld outdoors. 10-bit log internal at this price is a genuine bonus.',
        amazonUrl: 'https://www.amazon.co.uk/s?k=OM+System+OM-5',
      },
      {
        name: 'Nikon Zfc',
        price: '~£650',
        sensor: 'APS-C',
        video: '4K30 / 8-bit',
        description: 'Retro styling with modern internals. Flip-out screen, good subject tracking, and a genuinely nice shooting experience. The 8-bit codec is a limitation, but the image quality in good light is lovely.',
        amazonUrl: 'https://www.amazon.co.uk/s?k=Nikon+Zfc',
      },
    ],
  },
  {
    label: 'Mid-Range',
    range: '£800 – £1,500',
    description: 'Cameras at this price point can handle almost anything. If you\'re planning to take on paid work, start here — these are cameras you won\'t grow out of quickly.',
    cameras: [
      {
        name: 'Sony A6700',
        price: '~£1,200',
        sensor: 'APS-C',
        video: '4K120 / 10-bit',
        description: 'Sony\'s current top-of-range APS-C. AI-based autofocus recognises humans, animals, vehicles, and insects. 4K120 slow motion in 10-bit at this price is a genuinely rare feature.',
        amazonUrl: 'https://www.amazon.co.uk/s?k=Sony+A6700',
      },
      {
        name: 'Canon EOS R8',
        price: '~£1,300',
        sensor: 'Full-frame',
        video: '4K60 / 10-bit',
        description: 'Full-frame at mid-range money. The larger sensor gives you shallow depth of field and low-light performance that APS-C cameras can\'t quite match. No in-body stabilisation — pair with a gimbal.',
        amazonUrl: 'https://www.amazon.co.uk/s?k=Canon+EOS+R8',
      },
      {
        name: 'Fujifilm X-H2S',
        price: '~£1,500',
        sensor: 'APS-C',
        video: '4K120 / 6.2K30',
        description: 'Fuji\'s pro APS-C body. The stacked sensor gives blackout-free shooting and exceptional continuous AF. Built like a tank. F-Log2 gives 13+ stops of dynamic range.',
        amazonUrl: 'https://www.amazon.co.uk/s?k=Fujifilm+X-H2S',
      },
      {
        name: 'Sony ZV-E1',
        price: '~£1,400',
        sensor: 'Full-frame',
        video: '4K60 / 12-bit RAW',
        description: 'A full-frame vlogging camera with Cinema Line internals. AI-powered background defocus is genuinely impressive. Compact for a full-frame body. Aimed squarely at solo creators who want a pro image.',
        amazonUrl: 'https://www.amazon.co.uk/s?k=Sony+ZV-E1',
      },
      {
        name: 'Panasonic G9 II',
        price: '~£1,100',
        sensor: 'Micro Four Thirds',
        video: '4K120 / 5.7K',
        description: 'A genuine sleeper pick. Phase-detect AF finally competitive with Sony and Canon, 4K120 open-gate, and phase detection that actually works. A significant generational step up from the original G9.',
        amazonUrl: 'https://www.amazon.co.uk/s?k=Panasonic+G9+II',
      },
    ],
  },
  {
    label: 'What I Shoot On',
    range: '£1,000 – £2,500',
    description: 'These are the cameras in my own kit. If you\'re asking what I\'d recommend for someone serious about videography — this is the range.',
    cameras: [
      {
        name: 'Sony A7 III',
        price: '~£1,000 used',
        sensor: 'Full-frame',
        video: '4K30 / 8-bit',
        description: 'Still one of the best used-market buys in full-frame. The 8-bit limitation is its only weakness — everything else is excellent. Low light, autofocus, dynamic range. This is what I started with.',
        image: '/gear/gear-sony-a7iii.jpg',
        amazonUrl: 'https://www.amazon.co.uk/s?k=Sony+A7+III',
      },
      {
        name: 'Sony A7 IV',
        price: '~£1,800',
        sensor: 'Full-frame',
        video: '4K60 / 10-bit',
        description: 'My main camera. The jump from the A7III to this was meaningful — 4K60 in 10-bit is a proper working tool. 33MP stills, excellent dual-card slots, and significantly improved IBIS. Built for hybrid work.',
        image: '/gear/gear-sony-a7iv.jpg',
        highlight: true,
        amazonUrl: 'https://www.amazon.co.uk/s?k=Sony+A7+IV',
      },
      {
        name: 'Sony A7C II',
        price: '~£1,700',
        sensor: 'Full-frame',
        video: '4K60 / 10-bit',
        description: 'Essentially A7IV internals in a significantly smaller body. If you\'re run-and-gun, one-person-band, or vlogging — the compact form factor matters. Same sensor and codec, just built differently.',
        amazonUrl: 'https://www.amazon.co.uk/s?k=Sony+A7C+II',
      },
      {
        name: 'Nikon Z6 III',
        price: '~£2,000',
        sensor: 'Full-frame (partial stacked)',
        video: '6K30 / 4K120',
        description: 'Nikon\'s answer to the A7IV and a serious one at that. Partially stacked sensor gives it 4K120 and rapid readout without the full cost of a stacked design. Excellent ergonomics and a genuine all-rounder.',
        amazonUrl: 'https://www.amazon.co.uk/s?k=Nikon+Z6+III',
      },
      {
        name: 'Canon EOS R6 Mark II',
        price: '~£2,000',
        sensor: 'Full-frame',
        video: '4K60 / 6K RAW',
        description: 'Canon\'s hybrid workhorse. Subject tracking is probably the most reliable in the business — anything that moves, it locks onto. 6K RAW internal and a sensor that handles high ISO beautifully.',
        amazonUrl: 'https://www.amazon.co.uk/s?k=Canon+EOS+R6+Mark+II',
      },
    ],
  },
  {
    label: 'Professional',
    range: '£2,500+',
    description: 'Cameras at this level are for people who know exactly what they need and why. The incremental gains are real but the price jump is steep.',
    cameras: [
      {
        name: 'Sony A7 V',
        price: '~£2,500',
        sensor: 'Full-frame',
        video: '4K120 / AI AF',
        description: 'Sony\'s latest A7-series flagship. AI autofocus recognises subjects at a granular level — individual body parts, not just faces. 4K120 opens up slow motion the A7IV cannot do.',
        amazonUrl: 'https://www.amazon.co.uk/s?k=Sony+A7+V',
      },
      {
        name: 'Sony FX3',
        price: '~£3,200',
        sensor: 'Full-frame',
        video: '4K120 / 12-bit RAW',
        description: 'Sony\'s Cinema Line in a compact body. Designed for professional video first — full-time cooling fan, XLR audio, and Cinema Line colour science. The go-to for solo documentary and commercial work.',
        amazonUrl: 'https://www.amazon.co.uk/s?k=Sony+FX3+camera',
      },
      {
        name: 'Canon EOS R5 Mark II',
        price: '~£4,000',
        sensor: 'Full-frame',
        video: '8K / 4K120',
        description: 'Top of the prosumer Canon range. 8K RAW internal, 4K120, 45MP stills, and Canon\'s best autofocus system. If you\'re earning from your camera and need every tool available — this is it.',
        amazonUrl: 'https://www.amazon.co.uk/s?k=Canon+EOS+R5+Mark+II',
      },
      {
        name: 'Nikon Z8',
        price: '~£3,200',
        sensor: 'Full-frame (stacked)',
        video: '8K30 / 4K120',
        description: 'A Z9 in a smaller shell — same stacked sensor, same pro-grade specs, significantly less bulk. 8K internal RAW, no blackout, and a mechanical shutter that doesn\'t wear out. Outstanding value at the pro end.',
        amazonUrl: 'https://www.amazon.co.uk/s?k=Nikon+Z8',
      },
      {
        name: 'Canon EOS R6 Mark III',
        price: '~£2,700',
        sensor: 'Full-frame',
        video: '4K120 / 6K',
        description: 'Canon\'s action and sports body. Subject tracking is class-leading, 6K RAW internally, and a sensor that handles extreme ISO. Built for professionals who need reliability above everything else.',
        amazonUrl: 'https://www.amazon.co.uk/s?k=Canon+EOS+R6+Mark+III',
      },
    ],
  },
]

const features = [
  {
    label: '4K video',
    body: '1080p is no longer sufficient for professional work. Make sure the camera shoots at least 4K30.',
  },
  {
    label: 'Good autofocus',
    body: 'Face and eye tracking is not a luxury — it\'s essential for solo shooters. Look for real-time subject tracking.',
  },
  {
    label: 'Flip-out screen',
    body: 'A fully articulating LCD is critical if you\'re filming yourself or working at unusual angles.',
  },
  {
    label: 'Battery life',
    body: 'Anything under 300 shots per charge is going to cause you problems on a full shoot day.',
  },
  {
    label: 'Lens ecosystem',
    body: 'The camera body is a starting point. Make sure you\'re buying into a mount with affordable, quality glass.',
  },
  {
    label: '10-bit colour',
    body: 'More colour information in the file means more latitude in post. Important if you\'re grading your footage.',
  },
]

function CameraCard({ camera }: { camera: Camera }) {
  return (
    <div className={`bg-white dark:bg-[#0a0a0a] border ${camera.highlight ? 'border-[#0052D4]' : 'border-gray-200 dark:border-white/10'} p-6 flex flex-col`}>
      {camera.highlight && (
        <span className="text-xs font-bold uppercase tracking-widest text-[#0052D4] mb-3">My Main Camera</span>
      )}
      {camera.image && (
        <div className="relative w-full h-48 mb-5 overflow-hidden bg-gray-100 dark:bg-white/5">
          <Image
            src={camera.image}
            alt={camera.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="flex items-start justify-between mb-3 gap-2">
        <h3 className="font-bold text-lg text-gray-900 dark:text-white leading-tight">{camera.name}</h3>
        <span className="text-sm font-bold text-gray-900 dark:text-white whitespace-nowrap">{camera.price}</span>
      </div>
      <div className="flex gap-2 mb-4 flex-wrap">
        <span className="text-xs font-medium bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-white/60 px-2 py-1 rounded-sm">{camera.sensor}</span>
        <span className="text-xs font-medium bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-white/60 px-2 py-1 rounded-sm">{camera.video}</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-white/50 leading-relaxed flex-1 mb-5">{camera.description}</p>
      <a
        href={camera.amazonUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs font-bold uppercase tracking-wider text-[#0052D4] hover:text-[#00C6FF] transition-colors"
      >
        View on Amazon UK →
      </a>
    </div>
  )
}

export default function CameraGuide() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Equipment Guide</p>
        <h1 className="text-5xl font-black mb-4 text-gray-900 dark:text-white">What Camera Should<br />I Buy First?</h1>
        <p className="text-gray-500 dark:text-white/50 max-w-2xl mb-4 text-lg">
          A practical guide to starter cameras for content creation — from budget options to the kit professionals actually use. No affiliate links, no sponsored picks. Just honest recommendations from someone who earns their living with this gear.
        </p>
        <p className="text-xs text-gray-400 dark:text-white/30">By Jamie Murray, MediaMurray · Updated 2026</p>
      </section>

      {/* What to look for */}
      <section className="border-t border-gray-200 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Before You Buy</p>
          <h2 className="text-3xl font-black mb-4 text-gray-900 dark:text-white">What to look for</h2>
          <p className="text-gray-500 dark:text-white/50 max-w-xl mb-10 text-base">
            Every camera on this list does these six things. If a camera you&apos;re considering misses more than one, keep looking.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 dark:bg-white/10">
            {features.map((f) => (
              <div key={f.label} className="bg-white dark:bg-[#0a0a0a] p-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0052D4] block mb-2">{f.label}</span>
                <p className="text-sm text-gray-500 dark:text-white/50 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Camera Tiers */}
      {tiers.map((tier, i) => (
        <section key={tier.label} className={`border-t border-gray-200 dark:border-white/10 ${i % 2 === 1 ? 'bg-gray-50 dark:bg-white/[0.02]' : ''}`}>
          <div className="max-w-6xl mx-auto px-6 py-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-1">{tier.range}</p>
            <h2 className="text-3xl font-black mb-3 text-gray-900 dark:text-white">{tier.label}</h2>
            <p className="text-gray-500 dark:text-white/50 max-w-xl mb-10 text-base">{tier.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tier.cameras.map((camera) => (
                <CameraCard key={camera.name} camera={camera} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Honest Answer */}
      <section className="border-t border-gray-200 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">The Bottom Line</p>
          <h2 className="text-3xl font-black mb-6 text-gray-900 dark:text-white">The honest answer</h2>
          <div className="max-w-2xl space-y-4 text-gray-500 dark:text-white/50 text-base leading-relaxed">
            <p>
              The camera matters less than most people think, and more than most people admit. It matters less because a competent shooter with a ZV-E10 will produce better work than an inexperienced one with an A7 V. It matters more because at some point, your gear becomes the ceiling.
            </p>
            <p>
              If you&apos;re starting out: buy the cheapest thing on this list you can afford and learn it completely. Shoot everything. Get obsessed with light, not gear. The upgrade will make more sense when you know exactly what you&apos;re missing.
            </p>
            <p>
              If you&apos;re planning to take on paid work: start at the mid-range or buy used from the &ldquo;What I Shoot On&rdquo; tier. Clients notice the difference between a polished, graded full-frame image and a flat, 8-bit APS-C file — even if they can&apos;t name it.
            </p>
            <p>
              And if you&apos;re genuinely unsure which one to choose: the Sony A7 IV is the camera I&apos;d buy again today. I&apos;ve shot over 170 paid client projects on it. It hasn&apos;t been the limiting factor in any of them.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-200 dark:border-white/10 py-20 text-center">
        <h2 className="text-3xl font-black mb-4 text-gray-900 dark:text-white">Need a hand choosing?</h2>
        <p className="text-gray-500 dark:text-white/50 mb-8 max-w-md mx-auto">If you&apos;re still not sure, get in touch. Happy to point you in the right direction based on what you actually want to shoot.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/contact"
            className="gradient-bg text-white font-bold px-8 py-4 rounded-sm hover:opacity-90 transition-opacity text-sm uppercase tracking-wider inline-block"
          >
            Get in Touch
          </Link>
          <Link
            href="/resources"
            className="border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-bold px-8 py-4 rounded-sm hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-sm uppercase tracking-wider inline-block"
          >
            More Resources
          </Link>
        </div>
      </section>
    </div>
  )
}
