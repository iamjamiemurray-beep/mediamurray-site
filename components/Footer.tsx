'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from './ThemeProvider'

const services = [
  { href: '/services/videography', label: 'Videography & Editing' },
  { href: '/services/promo-video', label: 'Promotional Videos' },
  { href: '/services/photography', label: 'Photography' },
  { href: '/services/events', label: 'Event Coverage' },
  { href: '/services/short-form', label: 'Short-Form Packages' },
  { href: '/services/content-day', label: 'Content Day' },
]

export default function Footer() {
  const { theme } = useTheme()
  return (
    <footer className="border-t border-gray-200 dark:border-white/10 bg-white dark:bg-[#0a0a0a] mt-24 transition-colors duration-200">

      {/* Bold social links row */}
      <div className="border-b border-gray-100 dark:border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {[
            { label: 'Email', href: 'mailto:mail@mediamurray.com' },
            { label: 'WhatsApp', href: 'https://wa.me/447841728249', external: true },
            { label: 'Instagram', href: 'https://www.instagram.com/mediamurrayuk', external: true },
            { label: 'YouTube', href: 'https://www.youtube.com/@mediamurray', external: true },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jamieamurray/', external: true },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              {...(s.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="text-base font-black uppercase tracking-widest text-gray-400 dark:text-white/40 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <Image
            src={theme === 'dark' ? '/logo-white.png' : '/logo-black.png'}
            alt="MediaMurray"
            width={240}
            height={135}
            className="h-20 w-auto object-contain mb-4"
          />
          <p className="text-gray-500 dark:text-white/50 text-sm leading-relaxed">
            Professional videography, photography and editing.<br />
            Based in Edinburgh — available across Scotland and the United Kingdom.
          </p>
          <p className="mt-2 text-xs text-gray-400 dark:text-white/30">
            Trusted by over 100 clients across Scotland and the UK.
          </p>
          <p className="mt-4 text-sm text-gray-400 dark:text-white/40">
            <a href="mailto:mail@mediamurray.com" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              mail@mediamurray.com
            </a>
          </p>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/40 mb-4">Services</h3>
          <ul className="space-y-2">
            {services.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="text-sm text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/40 mb-4">Company</h3>
          <ul className="space-y-2">
            {[
              { href: '/work', label: 'Work' },
              { href: '/about', label: 'About' },
              { href: '/testimonials', label: 'Testimonials' },
              { href: '/resources', label: 'Resources' },
              { href: '/contact', label: 'Contact' },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-white/10 px-6 py-4 max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-xs text-gray-400 dark:text-white/30">© {new Date().getFullYear()} MediaMurray. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/privacy-policy" className="text-xs text-gray-400 dark:text-white/30 hover:text-gray-600 dark:hover:text-white/60 transition-colors">Privacy Policy</Link>
          <Link href="/terms-and-conditions" className="text-xs text-gray-400 dark:text-white/30 hover:text-gray-600 dark:hover:text-white/60 transition-colors">T&Cs</Link>
          <Link href="/terms" className="text-xs text-gray-400 dark:text-white/30 hover:text-gray-600 dark:hover:text-white/60 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}
