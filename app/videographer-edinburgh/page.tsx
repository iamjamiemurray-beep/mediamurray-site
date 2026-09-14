import type { Metadata } from 'next'
import LocationPage from '@/components/LocationPage'
import { locations } from '@/lib/locations'

const location = locations.edinburgh

export const metadata: Metadata = {
  title: location.title,
  description: location.description,
  alternates: { canonical: '/videographer-edinburgh' },
}

export default function VideographerEdinburgh() {
  return <LocationPage location={location} />
}
