'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

interface GalleryImage {
  src: string
  alt: string
}

interface Props {
  images: GalleryImage[]
  className?: string
  uniform?: boolean
}

export default function MasonryGallery({ images, className = '', uniform = false }: Props) {
  const [open, setOpen] = useState<number | null>(null)

  const close = useCallback(() => setOpen(null), [])
  const prev = useCallback(() => setOpen(i => (i !== null ? (i - 1 + images.length) % images.length : null)), [images.length])
  const next = useCallback(() => setOpen(i => (i !== null ? (i + 1) % images.length : null)), [images.length])

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
      {uniform ? (
        <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 ${className}`}>
          {images.map((img, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] overflow-hidden rounded-sm group cursor-zoom-in"
              onClick={() => setOpen(i)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className={`columns-2 sm:columns-3 lg:columns-4 gap-3 ${className}`}>
          {images.map((img, i) => (
            <div
              key={i}
              className="break-inside-avoid mb-3 overflow-hidden rounded-sm group cursor-zoom-in"
              onClick={() => setOpen(i)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={900}
                className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {open !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={close}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-2"
            onClick={close}
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

          {/* Prev */}
          {images.length > 1 && (
            <button
              className="absolute left-3 sm:left-6 text-white/70 hover:text-white transition-colors p-2"
              onClick={(e) => { e.stopPropagation(); prev() }}
              aria-label="Previous"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
          )}

          {/* Image */}
          <div
            className="max-w-[90vw] max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[open].src}
              alt={images[open].alt}
              width={1400}
              height={1400}
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-sm"
              priority
            />
            {images.length > 1 && (
              <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-white/40 tabular-nums">
                {open + 1} / {images.length}
              </p>
            )}
          </div>

          {/* Next */}
          {images.length > 1 && (
            <button
              className="absolute right-3 sm:right-6 text-white/70 hover:text-white transition-colors p-2"
              onClick={(e) => { e.stopPropagation(); next() }}
              aria-label="Next"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          )}
        </div>
      )}
    </>
  )
}
