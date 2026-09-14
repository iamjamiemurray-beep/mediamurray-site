import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/dashboard', '/dashboard/', '/preview', '/api/', '/onboarding'],
      },
    ],
    sitemap: 'https://mediamurray.com/sitemap.xml',
    host: 'https://mediamurray.com',
  }
}
