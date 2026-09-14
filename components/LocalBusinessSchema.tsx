/**
 * LocalBusiness structured data.
 *
 * This is what tells Google that MediaMurray is a real business, based in
 * Edinburgh, serving the whole of Scotland. It feeds local search results and
 * the map pack. Keep areaServed broad - the work is Central Belt heavy but
 * covers Scotland.
 */
const schema = {
  '@context': 'https://schema.org',
  '@type': 'VideoAndAudioProductionService',
  '@id': 'https://mediamurray.com/#business',
  name: 'MediaMurray',
  alternateName: 'MediaMurray Video & Photography',
  description:
    'Freelance videographer, photographer and editor based in Edinburgh, working across Glasgow, the Central Belt and the whole of Scotland. Promotional and corporate video, event coverage, social media content and photography.',
  url: 'https://mediamurray.com',
  email: 'mail@mediamurray.com',
  telephone: '+447841428249',
  founder: { '@type': 'Person', name: 'Jamie Murray' },
  priceRange: '££',
  currenciesAccepted: 'GBP',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Edinburgh',
    addressRegion: 'Scotland',
    addressCountry: 'GB',
  },
  areaServed: [
    { '@type': 'City', name: 'Edinburgh' },
    { '@type': 'City', name: 'Glasgow' },
    { '@type': 'City', name: 'Stirling' },
    { '@type': 'City', name: 'Falkirk' },
    { '@type': 'City', name: 'Dundee' },
    { '@type': 'City', name: 'Perth' },
    { '@type': 'AdministrativeArea', name: 'Central Belt' },
    { '@type': 'AdministrativeArea', name: 'Scotland' },
  ],
  knowsAbout: [
    'Corporate video production',
    'Event videography',
    'Event photography',
    'Promotional video',
    'Social media content',
    'Video editing',
    'Drone videography',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Video and photography services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Promotional Video', url: 'https://mediamurray.com/services/promo-video' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Event Coverage', url: 'https://mediamurray.com/services/events' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Photography', url: 'https://mediamurray.com/services/photography' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Content Day', url: 'https://mediamurray.com/services/content-day' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Monthly Retainer', url: 'https://mediamurray.com/services/retainer' } },
    ],
  },
  sameAs: [
    'https://www.facebook.com/MediaMurray/',
    'https://x.com/MediaMurrayUK',
    'https://uk.linkedin.com/in/jamieamurray',
  ],
}

export default function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
