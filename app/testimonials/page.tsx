import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Testimonials',
  description: 'What clients say about working with MediaMurray — videography, photography and editing across Scotland.',
}

const testimonials = [
  {
    quote: "From start to finish, Jamie was a pleasure to work with. He made our young people feel at ease and slotted right into our event, really capturing the energy of the day and truly bringing our work to life. He turned around our images in record time. We would thoroughly recommend his services to prospective clients.",
    name: 'Ryan Coelho',
    org: 'Scottish Youth Parliament',
    project: 'Event & Portrait Photography',
    category: 'Public Sector',
    photo: '/Ryan-coelho.png',
  },
  {
    quote: "Professional, highly skilled and friendly. Far exceeded our expectations!",
    name: 'Annie McAllister',
    org: 'AniMac Design',
    project: 'Promotional Films',
    projectUrl: '/work/video/7eQSVwN0oBU',
    category: 'Small Business',
    photo: '/Annie-McAllister.png',
  },
  {
    quote: "Professional, approachable and very likeable. Five out of five all round!",
    name: 'Scott Fleming',
    org: 'The Highways Band',
    project: 'Music Video',
    projectUrl: '/work/video/MuUrZOhwSAQ',
    category: 'Individual',
    photo: '/Scott-Fleming.png',
  },
  {
    quote: "No hesitation in recommending! Surpassed my expectations and significantly eased the process for me.",
    name: 'Jonathan Reid',
    org: 'Reid Financial Planning',
    project: 'Portrait Photography',
    category: 'Small Business',
    photo: '/Jonathan-Reid.png',
  },
  {
    quote: "Really enjoyed the process and working with MediaMurray. Incredibly professional and friendly. The final materials far exceeded expectations! Really appreciated the patience shown with figuring out a schedule and working through the ideas before filming. Definitely recommend MediaMurray.",
    name: 'Eve McArthur',
    org: 'Argyll & Bute Council',
    project: 'Portrait Photography',
    category: 'Public Sector',
    photo: '/Eve-McArthur.png',
  },
  {
    quote: "It's amazing!! We shared it with the team and even had a few people a bit emotional.",
    name: 'Emily Beever',
    org: 'Scottish Youth Parliament',
    project: 'Dear Scotland\'s Future — SYP Manifesto Film',
    projectUrl: '/work/video/kg3wpo3TTL0',
    category: 'Public Sector',
  },
  {
    quote: "This is brilliant, thanks so much.",
    name: 'Louise Davies',
    org: 'Scottish Fair Trade Forum',
    project: 'Youth Collective Film & Social Media Ads',
    projectUrl: '/work/video/b9phaKPVKxY',
    category: 'Charity',
    photo: '/Louise-Davies.png',
  },
  {
    quote: "A pleasure to work with. Clear, understanding and supportive. Exceptional in terms of the final product. The promotional video has helped reach international audiences with our Art & Climate Change message.",
    name: 'Richard Whitcomb',
    org: 'Bute Community Forest',
    project: 'Exhibition Promotional Film',
    projectUrl: '/work/video/v4sbb5wXikU',
    category: 'Charity',
    photo: '/Richard-Whitcomb.png',
  },
  {
    quote: "Working with Jamie was excellent. He was very open to my ideas and we collaborated creatively. He very much put me at ease — I'm not one for being in front of the camera. The service he provides is 10/10 and he got the images back to me very quickly. Highly recommend.",
    name: 'Kevin Lawrence',
    org: 'Kev Lawrence Design',
    project: 'Promotional Film & Portrait Photography',
    category: 'Small Business',
    photo: '/Kevin-Lawrence.png',
  },
  {
    quote: "My team has worked with Jamie on a number of projects over the last five years, and for very good reason. Whether it's events photography or shooting marketing videos, the end product is always first class and delivered in a very timely manner. Jamie is a consummate professional and a delight to work with.",
    name: 'Emma McMullan',
    org: 'LowlandRFCA',
    project: 'Events Photography & Marketing Video',
    category: 'Public Sector',
    photo: '/client19_emma_lowlandrfca.png',
  },
]

const categories = ['All', 'Public Sector', 'Small Business', 'Charity', 'Individual']

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Reviews</p>
        <h1 className="text-5xl font-black mb-4 text-gray-900 dark:text-white">What Clients Say</h1>
        <p className="text-gray-500 dark:text-white/50 text-lg max-w-xl">
          170+ projects delivered. Here&apos;s what some of the people behind them had to say.
        </p>
      </section>

      {/* Stats bar */}
      <section className="border-t border-b border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {[
            { value: '170+', label: 'Projects delivered' },
            { value: '5★', label: 'Average rating' },
            { value: '6+', label: 'Years freelance' },
            { value: '100+', label: 'Happy clients' },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-black gradient-text">{s.value}</p>
              <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-white/40 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 p-8 rounded-sm flex flex-col"
            >
              <Stars />
              <p className="text-gray-600 dark:text-white/70 leading-relaxed text-sm flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-start gap-3">
                {t.photo && (
                  <Image
                    src={t.photo}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  />
                )}
                <div>
                <p className="font-bold text-gray-900 dark:text-white text-sm">{t.name}</p>
                <p className="text-xs text-gray-400 dark:text-white/40 uppercase tracking-wider mt-0.5">{t.org}</p>
                {t.project && (
                  <div className="mt-3">
                    {t.projectUrl ? (
                      <Link
                        href={t.projectUrl}
                        className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest border border-[#0052D4]/30 text-[#0052D4] dark:border-white/20 dark:text-white/50 hover:border-[#0052D4] dark:hover:text-white rounded-full px-3 py-1 transition-colors"
                      >
                        {t.project}
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                      </Link>
                    ) : (
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/30">{t.project}</span>
                    )}
                  </div>
                )}
                <span className="inline-block mt-3 text-[10px] font-bold uppercase tracking-[0.15em] border border-gray-200 dark:border-white/10 text-gray-400 dark:text-white/30 px-2 py-0.5 rounded-full">
                  {t.category}
                </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-200 dark:border-white/10 py-16 bg-gray-50 dark:bg-white/[0.02]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-black mb-4 text-gray-900 dark:text-white">Ready to work together?</h2>
          <p className="text-gray-500 dark:text-white/50 mb-8">Get in touch and I&apos;ll get back to you within 24 hours.</p>
          <Link
            href="/contact"
            className="gradient-bg text-white font-bold px-8 py-4 rounded-sm hover:opacity-90 transition-opacity text-sm uppercase tracking-wider inline-block"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  )
}
