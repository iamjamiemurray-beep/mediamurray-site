import type { Metadata } from 'next'
import OnboardingWizard from '@/components/OnboardingWizard'

export const metadata: Metadata = {
  title: 'Client Onboarding — MediaMurray',
  description: 'Welcome to MediaMurray. Complete your client onboarding here.',
  robots: { index: false, follow: false },
}

export default function Onboarding() {
  return (
    <div className="pt-32 pb-32">
      <OnboardingWizard />
    </div>
  )
}
