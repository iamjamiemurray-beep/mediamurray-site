'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface GalleryImage {
  src: string
  alt: string
}

interface Props {
  images: GalleryImage[]
  aspectRatio?: 'square' | 'video'
}

export default function ImageGallery({ images, aspectRatio = 'square' }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  useEffect(() => {
    if (lightboxIndex === null) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowRight') setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length))
      if (e.key === 'ArrowLeft') setLightboxIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length))
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightboxIndex, images.length])

  const aspectClass = aspectRatio === 'video' ? 'aspect-video' : 'aspect-square'

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {images.map((p, i) => (
          <button
            key={i}
            onClick={() => setLightboxIndex(i)}
            className={`${aspectClass} overflow-hidden rounded-sm bg-gray-100 dark:bg-white/5 block w-full focus:outline-none focus:ring-2 focus:ring-[#0052D4]`}
          >
            <Image
              src={p.src}
              alt={p.alt}
              width={400}
              height={400}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl leading-none font-light"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close"
          >
            ×
          </button>

          {/* Prev */}
          {images.length > 1 && (
            <button
              className="absolute left-4 text-white/70 hover:text-white text-4xl leading-none font-light px-2"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + images.length) % images.length) }}
              aria-label="Previous"
            >
              ‹
            </button>
          )}

          <div
            className="relative max-w-5xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              width={1200}
              height={900}
              className="object-contain max-h-[90vh] w-full rounded-sm"
            />
            <p className="text-white/40 text-xs text-center mt-3">
              {lightboxIndex + 1} / {images.length}
            </p>
          </div>

          {/* Next */}
          {images.length > 1 && (
            <button
              className="absolute right-4 text-white/70 hover:text-white text-4xl leading-none font-light px-2"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % images.length) }}
              aria-label="Next"
            >
              ›
            </button>
          )}
        </div>
      )}
    </>
  )
}
