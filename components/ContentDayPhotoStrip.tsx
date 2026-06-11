'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

const photos = [
  '/contentdaypilates1.jpg',
  '/cdchanel2.jpg',
  '/cdkevin2.jpg',
  '/ContentDayAllSewnUp1.jpg',
  '/goodpics2.jpg',
]

export default function ContentDayPhotoStrip() {
  const [open, setOpen] = useState<number | null>(null)

  const close = useCallback(() => setOpen(null), [])
  const prev = useCallback(() => setOpen(i => (i !== null ? (i - 1 + photos.length) % photos.length : null)), [])
  const next = useCallback(() => setOpen(i => (i !== null ? (i + 1) % photos.length : null)), [])

  useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, close, prev, next])

  useEffect(() => {
    document.body.style.overflow = open !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <div className="grid grid-cols-5 gap-3 mb-4">
        {photos.map((src, i) => (
          <div
            key={src}
            className="rounded-sm overflow-hidden cursor-zoom-in"
            onClick={() => setOpen(i)}
          >
            <img
              src={src}
              alt="Content Day example"
              className="w-full h-auto block hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-400 dark:text-white/30 mb-16">Example photos from past Content Days</p>

      {open !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={close}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-2"
            onClick={close}
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

          <button
            className="absolute left-3 sm:left-6 text-white/70 hover:text-white transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); prev() }}
            aria-label="Previous"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>

          <div
            className="max-w-[90vw] max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[open]}
              alt="Content Day example"
              width={1400}
              height={1400}
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-sm"
              priority
            />
            <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-white/40 tabular-nums">
              {open + 1} / {photos.length}
            </p>
          </div>

          <button
            className="absolute right-3 sm:right-6 text-white/70 hover:text-white transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label="Next"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      )}
    </>
  )
}
