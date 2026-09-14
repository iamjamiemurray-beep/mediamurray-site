import type { Metadata } from 'next'
import LocationPage from '@/components/LocationPage'
import { locations } from '@/lib/locations'

const location = locations.glasgow

export const metadata: Metadata = {
  title: location.title,
  description: location.description,
  alternates: { canonical: '/videographer-glasgow' },
}

export default function VideographerGlasgow() {
  return <LocationPage location={location} />
}
