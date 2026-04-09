'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const services = [
  'video production',
  'photography',
  'event coverage',
  'content days',
  'social media ads',
]

export default function RotatingServices() {
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState<'visible' | 'out' | 'in'>('visible')

  useEffect(() => {
    const tick = setInterval(() => {
      setPhase('out')
      setTimeout(() => {
        setIndex(i => (i + 1) % services.length)
        setPhase('in')
        setTimeout(() => setPhase('visible'), 300)
      }, 300)
    }, 2800)
    return () => clearInterval(tick)
  }, [])

  const style =
    phase === 'out'
      ? 'opacity-0 translate-y-2'
      : phase === 'in'
      ? 'opacity-0 -translate-y-2'
      : 'opacity-100 translate-y-0'

  return (
    <section className="bg-[#0a0a0a] border-t border-white/10 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 mb-8">What we do</p>
        <p className="text-4xl sm:text-5xl font-black text-white leading-tight">
          Are you looking for
        </p>
        <div className="h-16 sm:h-20 flex items-center mt-2 mb-8">
          <span
            className={`text-4xl sm:text-5xl font-black gradient-text transition-all duration-300 ${style}`}
          >
            {services[index]}?
          </span>
        </div>
        <Link
          href="/contact"
          className="gradient-bg text-white font-bold px-8 py-4 rounded-sm hover:opacity-90 transition-opacity text-sm uppercase tracking-wider inline-block"
        >
          Get a Free Quote
        </Link>
      </div>
    </section>
  )
}
