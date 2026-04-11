'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const ALL_FACES = [7, 8, 9, 11, 12, 13, 14, 15, 16].map(n => `/client${n}.png`)
const VISIBLE = 7 // how many to show at once

function getInitialSet() {
  return ALL_FACES.slice(0, VISIBLE)
}

export default function ClientFaces() {
  const [faces, setFaces] = useState<string[]>(getInitialSet)
  const [fadingIndex, setFadingIndex] = useState<number | null>(null)
  const [nextFaceIndex, setNextFaceIndex] = useState(VISIBLE)

  useEffect(() => {
    const interval = setInterval(() => {
      const slotToReplace = Math.floor(Math.random() * VISIBLE)
      const nextFace = ALL_FACES[nextFaceIndex % ALL_FACES.length]

      setFadingIndex(slotToReplace)
      setTimeout(() => {
        setFaces(prev => {
          const updated = [...prev]
          updated[slotToReplace] = nextFace
          return updated
        })
        setNextFaceIndex(i => (i + 1) % ALL_FACES.length)
        setFadingIndex(null)
      }, 400)
    }, 1800)

    return () => clearInterval(interval)
  }, [nextFaceIndex])

  return (
    <div className="flex -space-x-4 flex-shrink-0">
      {faces.map((src, i) => (
        <div
          key={i}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-[3px] border-[#0a0a0a] flex-shrink-0 transition-opacity duration-400"
          style={{
            zIndex: VISIBLE - i,
            opacity: fadingIndex === i ? 0 : 1,
          }}
        >
          <Image src={src} alt="MediaMurray client" width={64} height={64} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  )
}
