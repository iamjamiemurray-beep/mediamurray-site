'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

interface Props {
  shortcode: string
  title?: string
  stats?: { views?: string; likes?: string; comments?: string }
}

export default function ReelCard({ shortcode, title, stats }: Props) {
  const [thumb, setThumb] = useState<string | null>(null)

  useEffect(() => {
    fetch(`/api/instagram-thumb/${shortcode}`)
      .then((r) => r.json())
      .then((d) => { if (d.url) setThumb(d.url) })
      .catch(() => {})
  }, [shortcode])

  return (
    <a
      href={`https://www.instagram.com/p/${shortcode}/`}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-center overflow-hidden rounded-sm bg-gray-900 aspect-[9/16] hover:ring-2 hover:ring-[#0052D4] transition-all duration-300"
    >
      {/* Thumbnail */}
      {thumb && (
        <Image
          src={thumb}
          alt={title || 'Instagram Reel'}
          fill
          className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

      {/* Play button */}
      <div className="relative z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all">
        <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#00C6FF]">Instagram</p>
        {title && <p className="text-xs font-bold text-white/90 leading-tight mt-0.5">{title}</p>}
        {stats && (
          <div className="flex items-center gap-3 mt-1.5">
            {stats.views && (
              <span className="flex items-center gap-1 text-[10px] text-white/70">
                {/* play icon */}
                <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                <span className="font-bold text-white">{stats.views}</span>
              </span>
            )}
            {stats.likes && (
              <span className="flex items-center gap-1 text-[10px] text-white/70">
                {/* heart icon */}
                <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                <span className="font-bold text-white">{stats.likes}</span>
              </span>
            )}
            {stats.comments && (
              <span className="flex items-center gap-1 text-[10px] text-white/70">
                {/* comment icon */}
                <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                <span className="font-bold text-white">{stats.comments}</span>
              </span>
            )}
          </div>
        )}
      </div>
    </a>
  )
}
