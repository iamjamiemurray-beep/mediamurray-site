'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Props {
  id: string
  title: string
  category: string
  featured?: boolean
  stats?: { value: string; label: string }[]
  facebookUrl?: string
  thumbnailOverride?: string
}

export default function VideoCard({ id, title, category, featured, stats, facebookUrl, thumbnailOverride }: Props) {
  const [playing, setPlaying] = useState(false)

  if (facebookUrl) {
    return (
      <a
        href={facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`group block relative overflow-hidden rounded-sm bg-gray-900 ${featured ? 'aspect-video' : 'aspect-video'}`}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#0052D4]/30 to-[#00C6FF]/10">
          <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all">
            <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
          <span className="text-white/70 text-xs font-bold uppercase tracking-wider">Watch on Facebook</span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <p className="text-xs font-bold uppercase tracking-wider text-[#00C6FF] mb-1">{category}</p>
          <p className="text-sm font-bold text-white">{title}</p>
          {stats && (
            <div className="flex gap-4 mt-2">
              {stats.map((s) => (
                <div key={s.label}>
                  <span className="text-sm font-black text-white">{s.value} </span>
                  <span className="text-xs text-white/50">{s.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </a>
    )
  }

  const thumbnail = thumbnailOverride || `https://img.youtube.com/vi/${id}/maxresdefault.jpg`

  if (playing) {
    return (
      <div className={`relative overflow-hidden rounded-sm bg-black ${featured ? 'aspect-video' : 'aspect-video'}`}>
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    )
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      className={`group relative overflow-hidden rounded-sm bg-gray-900 w-full text-left ${featured ? 'aspect-video' : 'aspect-video'}`}
    >
      <Image
        src={thumbnail}
        alt={title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all">
          <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>
      {/* Info overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <p className="text-xs font-bold uppercase tracking-wider text-[#00C6FF] mb-1">{category}</p>
        <p className="text-sm font-bold text-white">{title}</p>
        {stats && (
          <div className="flex gap-4 mt-2">
            {stats.map((s) => (
              <div key={s.label}>
                <span className="text-sm font-black text-white">{s.value} </span>
                <span className="text-xs text-white/50">{s.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </button>
  )
}
