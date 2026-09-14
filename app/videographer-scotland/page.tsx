import type { Metadata } from 'next'
import LocationPage from '@/components/LocationPage'
import { locations } from '@/lib/locations'

const location = locations.scotland

export const metadata: Metadata = {
  title: location.title,
  description: location.description,
  alternates: { canonical: '/videographer-scotland' },
}

export default function VideographerScotland() {
  return <LocationPage location={location} />
}
