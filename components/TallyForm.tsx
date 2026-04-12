'use client'

import { useEffect } from 'react'

export default function TallyForm() {
  useEffect(() => {
    const existing = document.getElementById('tally-js')
    if (existing) {
      // @ts-expect-error Tally global
      if (typeof window.Tally !== 'undefined') window.Tally.loadEmbeds()
      return
    }
    const s = document.createElement('script')
    s.src = 'https://tally.so/widgets/embed.js'
    s.id = 'tally-js'
    s.async = true
    s.onload = () => {
      // @ts-expect-error Tally global
      if (typeof window.Tally !== 'undefined') window.Tally.loadEmbeds()
    }
    document.body.appendChild(s)
  }, [])

  return (
    <iframe
      data-tally-src="https://tally.so/embed/WOYkPN?hideTitle=1&transparentBackground=1&dynamicHeight=1"
      loading="lazy"
      width="100%"
      height="500"
      frameBorder={0}
      title="MediaMurray Enquiry Form"
      className="w-full"
    />
  )
}
