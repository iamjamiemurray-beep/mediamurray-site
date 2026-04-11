'use client'

import { useState, useEffect } from 'react'

const TESTIMONIALS = [
  { quote: 'Professional, highly skilled and friendly. Far exceeded our expectations!', name: 'Annie McAllister', org: 'AniMac Design' },
  { quote: 'He made our young people feel at ease and slotted right into our event, really capturing the energy of the day and truly bringing our work to life. We would thoroughly recommend his services.', name: 'Ryan Coelho', org: 'Scottish Youth Parliament' },
  { quote: 'Professional, approachable and very likeable. Five out of five all round!', name: 'Scott Fleming', org: 'The Highways Band' },
  { quote: 'No hesitation in recommending! Surpassed my expectations and significantly eased the process for me.', name: 'Jonathan Reid', org: 'Reid Financial Planning' },
  { quote: "It's amazing!! We shared it with the team and even had a few people a bit emotional.", name: 'Emily Beever', org: 'Scottish Youth Parliament' },
  { quote: 'A pleasure to work with. Clear, understanding and supportive. Exceptional in terms of the final product. The promotional video has helped reach international audiences with our Art & Climate Change message.', name: 'Richard Whitcomb', org: 'Bute Community Forest' },
  { quote: 'Incredibly professional and friendly. The final materials far exceeded expectations! Really appreciated the patience shown with figuring out a schedule and working through the ideas before filming. Definitely recommend.', name: 'Eve McArthur', org: 'Argyll & Bute Council' },
  { quote: "He very much put me at ease - I'm not one for being in front of the camera. The service he provides is 10/10 and he got the images back to me very quickly. Highly recommend.", name: 'Kevin Lawrence', org: 'Kev Lawrence Design' },
]

const Stars = () => (
  <div className="flex gap-0.5 mb-2">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} className="w-3.5 h-3.5 text-[#0052D4]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </div>
)

export default function RotatingTestimonials() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex(i => (i + 1) % TESTIMONIALS.length)
        setVisible(true)
      }, 350)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const t = TESTIMONIALS[index]

  return (
    <div
      className="mt-8 transition-opacity duration-300"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div className="bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 p-6 rounded-sm">
        <Stars />
        <p className="text-sm text-gray-600 dark:text-white/60 leading-relaxed italic mb-4">&ldquo;{t.quote}&rdquo;</p>
        <div className="flex items-center gap-2">
          <div className="w-px h-6 bg-gray-300 dark:bg-white/20" />
          <div>
            <p className="text-xs font-bold text-gray-900 dark:text-white">{t.name}</p>
            <p className="text-xs text-gray-400 dark:text-white/30">{t.org}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
