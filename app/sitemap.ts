import type { MetadataRoute } from 'next'

const BASE = 'https://mediamurray.com'

// Public routes only. Dashboard, preview and API routes are deliberately excluded.
const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/services/videography', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/services/photography', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/services/events', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/services/promo-video', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/services/content-day', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/services/retainer', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/videographer-glasgow', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/videographer-edinburgh', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/videographer-scotland', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/work', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/testimonials', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/story', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/contact', priority: 0.8, changeFrequency: 'yearly' },
  { path: '/start', priority: 0.7, changeFrequency: 'yearly' },
  { path: '/resources', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/resources/hiring-guide', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/resources/camera-guide', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/resources/creator-starter-kit', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/resources/brand-social-media', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/broadcasting-resource', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/wlbn-media', priority: 0.4, changeFrequency: 'monthly' },
  { path: '/privacy-policy', priority: 0.2, changeFrequency: 'yearly' },
  { path: '/terms', priority: 0.2, changeFrequency: 'yearly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
