import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Free guides and practical resources for businesses and aspiring creatives from MediaMurray.',
}

const resources = [
  {
    title: 'Introduction to Content Creation',
    desc: 'Six sections covering equipment, filming, editing, and publishing. Written from personal experience — practical, no-nonsense, and free.',
    tag: 'Free Guide',
    href: '/resources/creator-starter-kit',
    meta: '~10 min read',
  },
  {
    title: 'What Camera Should I Buy First?',
    desc: 'A practical guide to starter cameras for content creation — from budget options to the kit professionals actually use.',
    tag: 'Equipment Guide',
    href: '/resources/camera-guide',
    meta: '~8 min read',
  },
  {
    title: 'Establishing or Re-establishing Your Brand on Social Media',
    desc: 'Formats, aspect ratios and basic principles for getting video content right across Instagram, TikTok and LinkedIn — with script examples and real-world references.',
    tag: 'Social Media',
    href: '/resources/brand-social-media',
    meta: '~12 min read',
  },
  {
    title: '5 Things to Know Before Hiring a Videographer in Scotland',
    desc: 'What to ask, what to check, and what to watch out for — written from 170+ client projects and eight years of freelance work across Scotland.',
    tag: 'Client Guide',
    href: '/resources/hiring-guide',
    meta: '~5 min read',
  },
]

export default function Resources() {
  return (
    <div className="pt-24">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Learning</p>
        <h1 className="text-5xl font-black mb-4 text-gray-900 dark:text-white">Resources</h1>
        <p className="text-gray-500 dark:text-white/50 max-w-xl mb-16 text-lg">
          Free guides and practical resources for businesses and aspiring creatives. More added regularly.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {resources.map((r) => (
            <Link
              key={r.title}
              href={r.href}
              className="group relative flex flex-col bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 hover:border-[#0052D4] dark:hover:border-[#0052D4] transition-all duration-300 hover:shadow-[0_0_0_1px_#0052D4] p-8 rounded-sm"
            >
              {/* Tag */}
              <span className="text-xs font-bold uppercase tracking-widest text-[#0052D4] mb-4 block">
                {r.tag}
              </span>

              {/* Title */}
              <h3 className="font-black text-xl mb-3 text-gray-900 dark:text-white leading-snug group-hover:gradient-text transition-all">
                {r.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 dark:text-white/50 leading-relaxed flex-1 mb-6">
                {r.desc}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400 dark:text-white/30">{r.meta}</span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0052D4] flex items-center gap-1.5 group-hover:gap-3 transition-all duration-200">
                  Read
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>

              {/* Gradient bar on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 gradient-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-sm" />
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-200 dark:border-white/10 py-20 text-center">
        <h2 className="text-3xl font-black mb-4 text-gray-900 dark:text-white">Ready to get started?</h2>
        <p className="text-gray-500 dark:text-white/50 mb-8 max-w-md mx-auto">
          If you&apos;ve read enough and want to talk about a project, get in touch.
        </p>
        <Link
          href="/contact"
          className="gradient-bg text-white font-bold px-8 py-4 rounded-sm hover:opacity-90 transition-opacity text-sm uppercase tracking-wider inline-block"
        >
          Get a Quote
        </Link>
      </section>
    </div>
  )
}
