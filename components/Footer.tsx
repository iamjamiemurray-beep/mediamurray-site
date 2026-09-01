'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useTheme } from './ThemeProvider'

const socials = [
  {
    label: 'Email',
    href: 'mailto:mail@mediamurray.com',
    path: 'M1.5 5.25A2.25 2.25 0 0 1 3.75 3h16.5a2.25 2.25 0 0 1 2.25 2.25v.383l-10.5 6.16-10.5-6.16V5.25Zm0 2.71v10.79A2.25 2.25 0 0 0 3.75 21h16.5a2.25 2.25 0 0 0 2.25-2.25V7.96l-10.06 5.902a1.5 1.5 0 0 1-1.52 0L1.5 7.96Z',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/447841728249',
    external: true,
    path: 'M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.67-1.61-.92-2.2-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.38-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35ZM12.04 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.42 9.42 0 0 1-1.44-5.02c0-5.2 4.23-9.44 9.44-9.44 2.52 0 4.89.99 6.67 2.77a9.37 9.37 0 0 1 2.76 6.68c0 5.2-4.24 9.43-9.44 9.43ZM20.52 3.45A11.28 11.28 0 0 0 12.04 0C5.79 0 .7 5.09.7 11.34c0 2 .52 3.95 1.52 5.67L.6 24l7.14-1.87a11.3 11.3 0 0 0 5.4 1.38h.01c6.25 0 11.34-5.09 11.34-11.34 0-3.03-1.18-5.88-3.32-8.02Z',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/mediamurrayuk',
    external: true,
    path: 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.81 3.81 0 0 1-1.38-.9 3.81 3.81 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.97 5.97 0 0 0-2.16 1.4A5.97 5.97 0 0 0 .58 4.19c-.3.76-.5 1.63-.56 2.9C-.04 8.38 0 8.79 0 12.05c0 3.26.01 3.67.07 4.95.06 1.27.26 2.14.56 2.9.31.79.72 1.46 1.4 2.13a5.97 5.97 0 0 0 2.16 1.4c.76.3 1.63.5 2.9.56 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.27-.06 2.14-.26 2.9-.56a5.97 5.97 0 0 0 2.16-1.4 5.97 5.97 0 0 0 1.4-2.16c.3-.76.5-1.63.56-2.9.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.14-.56-2.9a5.97 5.97 0 0 0-1.4-2.16A5.97 5.97 0 0 0 19.89.63c-.76-.3-1.63-.5-2.9-.56C15.71.01 15.3 0 12.04 0H12Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@mediamurray',
    external: true,
    path: 'M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.54 12 3.54 12 3.54s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.19C0 8.08 0 12 0 12s0 3.92.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14C24 15.92 24 12 24 12s0-3.92-.5-5.81ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jamieamurray/',
    external: true,
    path: 'M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z',
  },
]

const services = [
  { href: '/services/videography', label: 'Videography & Editing' },
  { href: '/services/promo-video', label: 'Promotional Videos' },
  { href: '/services/photography', label: 'Photography' },
  { href: '/services/events', label: 'Event Coverage' },
  { href: '/services/retainer', label: 'Retainer Packages' },
  { href: '/services/content-day', label: 'Content Day' },
]

export default function Footer() {
  const pathname = usePathname()
  if (pathname.startsWith('/dashboard')) return null
  const { theme } = useTheme()
  return (
    <footer className="border-t border-gray-200 dark:border-white/10 bg-white dark:bg-[#0a0a0a] mt-24 transition-colors duration-200">

      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <div className="flex justify-center mb-4">
          <Image
            src={theme === 'dark' ? '/logo-white.png' : '/logo-black.png'}
            alt="MediaMurray"
            width={240}
            height={135}
            className="h-16 w-auto object-contain"
          />
        </div>
        <p className="text-gray-500 dark:text-white/50 text-sm leading-relaxed max-w-md mx-auto">
          Professional videography, photography and editing.<br />
          Based in Edinburgh — available across Scotland and the United Kingdom.
        </p>
        <p className="mt-1 text-xs text-gray-400 dark:text-white/30">
          Trusted by over 100 clients across Scotland and the UK.
        </p>
        <p className="mt-3 text-sm text-gray-400 dark:text-white/40">
          <a href="mailto:mail@mediamurray.com" className="hover:text-gray-900 dark:hover:text-white transition-colors">
            mail@mediamurray.com
          </a>
        </p>

        <div className="flex flex-wrap justify-center gap-x-16 gap-y-8 mt-12">
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
      </div>

      {/* Social icon row */}
      <div className="border-t border-gray-200 dark:border-white/10 py-8">
        <div className="w-full flex flex-wrap justify-center items-center gap-7 md:gap-9 px-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              title={s.label}
              {...(s.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="text-gray-400 dark:text-white/40 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5">
                <path d={s.path} />
              </svg>
            </a>
          ))}
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
