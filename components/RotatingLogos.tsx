'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Logo {
  src: string
  alt: string
}

export default function RotatingLogos({ logos }: { logos: Logo[] }) {
  const pageSize = 4
  const pageCount = Math.ceil(logos.length / pageSize)
  const [page, setPage] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setPage(p => (p + 1) % pageCount)
        setVisible(true)
      }, 400)
    }, 3000)
    return () => clearInterval(interval)
  }, [pageCount])

  const current = logos.slice(page * pageSize, page * pageSize + pageSize)

  return (
    <div className="flex flex-col items-center gap-6">
      <div
        className="grid grid-cols-4 gap-8 w-full transition-all duration-400"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(8px)' }}
      >
        {current.map((logo, i) => (
          <div key={i} className="flex items-center justify-center h-16">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={140}
              height={56}
              className="h-full w-full object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 dark:invert"
            />
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="flex gap-2">
        {Array.from({ length: pageCount }).map((_, i) => (
          <button
            key={i}
            onClick={() => { setVisible(false); setTimeout(() => { setPage(i); setVisible(true) }, 400) }}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === page ? 'bg-[#0052D4] w-4' : 'bg-gray-300 dark:bg-white/20'}`}
            aria-label={`Page ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
