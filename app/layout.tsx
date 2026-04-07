import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: {
    default: 'MediaMurray — Video, Photo & Editing | Scotland',
    template: '%s | MediaMurray',
  },
  description:
    "I'm a Scottish-based videographer, photographer and editor specialising in promotional and corporate video, event coverage, social media content and photography. 170+ projects delivered. Based in Edinburgh, available across Scotland.",
  keywords: ['videographer Edinburgh', 'video production Scotland', 'photographer Edinburgh', 'corporate video Scotland', 'drone videographer Edinburgh'],
  metadataBase: new URL('https://mediamurray.com'),
  openGraph: {
    siteName: 'MediaMurray',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <body className="antialiased bg-white dark:bg-[#0a0a0a] transition-colors duration-200">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
