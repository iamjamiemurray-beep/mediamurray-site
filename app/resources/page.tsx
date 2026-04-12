import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Free guides, tips and resources for businesses and aspiring creatives from MediaMurray.',
}

const resources = [
  {
    title: 'Introduction to Content Creation',
    desc: 'Six sections covering equipment, filming, editing, and publishing. Written from personal experience — practical, no-nonsense, and free.',
    tag: 'Free Guide',
    available: true,
    href: '/resources/creator-starter-kit',
    cta: 'Read the guide →',
    meta: '~10 min read',
  },
  {
    title: 'What Camera Should I Buy First?',
    desc: 'A practical guide to starter cameras for content creation — from budget options to the kit professionals actually use.',
    tag: 'Equipment Guide',
    available: true,
    href: '/What Camera Should I Buy - MediaMurray.pdf',
    cta: 'Download free →',
    meta: 'PDF',
  },
  {
    title: 'Establishing or Re-establishing Your Brand on Social Media',
    desc: 'Formats, aspect ratios and basic principles for getting video content right across Instagram, TikTok and LinkedIn — with script examples and real-world references.',
    tag: 'Social Media',
    available: false,
    href: '#',
  },
  {
    title: 'Content Day Checklist',
    desc: 'Everything you need to prepare before the cameras arrive — shot lists, location prep, wardrobe and what to expect on the day.',
    tag: 'Production',
    available: false,
    href: '#',
  },
  {
    title: 'The Case for Professional Video Production in 2026',
    desc: 'Why businesses that invest in quality video are pulling ahead — and what the data says about video ROI.',
    tag: 'Business',
    available: false,
    href: '#',
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 dark:bg-white/10">
          {resources.map((r) => (
            <div
              key={r.title}
              className={`bg-white dark:bg-[#0a0a0a] p-8 flex flex-col ${r.available ? 'group' : 'opacity-60'}`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0052D4]">{r.tag}</span>
                {!r.available && (
                  <span className="text-xs font-medium text-gray-400 dark:text-white/30 border border-gray-200 dark:border-white/10 px-2 py-0.5 rounded-sm">
                    Coming soon
                  </span>
                )}
              </div>
              <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-white leading-snug">{r.title}</h3>
              <p className="text-sm text-gray-500 dark:text-white/50 leading-relaxed flex-1 mb-4">{r.desc}</p>
              {'meta' in r && r.meta && (
                <p className="text-xs text-gray-400 dark:text-white/30 mb-4">{r.meta}</p>
              )}
              {r.available ? (
                <Link
                  href={r.href}
                  {...(r.href.startsWith('/resources') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                  className="text-xs font-bold uppercase tracking-wider text-[#0052D4] hover:text-[#00C6FF] transition-colors"
                >
                  {'cta' in r && r.cta ? r.cta : 'Download free →'}
                </Link>
              ) : (
                <span className="text-xs font-bold uppercase tracking-wider text-gray-300 dark:text-white/20">
                  Available soon
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-200 dark:border-white/10 py-20 text-center">
        <h2 className="text-3xl font-black mb-4 text-gray-900 dark:text-white">Ready to get started?</h2>
        <p className="text-gray-500 dark:text-white/50 mb-8 max-w-md mx-auto">If you&apos;ve read enough and want to talk about a project, get in touch.</p>
        <Link href="/contact" className="gradient-bg text-white font-bold px-8 py-4 rounded-sm hover:opacity-90 transition-opacity text-sm uppercase tracking-wider inline-block">
          Get a Quote
        </Link>
      </section>
    </div>
  )
}
