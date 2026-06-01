'use client'

import { useEffect, useState, useCallback } from 'react'

interface Email {
  folder: string
  date: string
  from: string
  to: string
  subject: string
  body: string
  year: number
  featured: boolean
  displayTitle?: string
  displayMeta?: string
}

interface EmailData {
  emails: Email[]
  featured: Email[]
}

function formatDate(d: string) {
  try {
    return d.split(' ').slice(1, 4).join(' ')
  } catch {
    return d
  }
}

function FeaturedCard({ email, variant = 'student' }: { email: Email; variant?: 'student' | 'pro' }) {
  const [open, setOpen] = useState(false)
  const title = email.displayTitle || email.subject
  const meta = email.displayMeta
  const isPro = variant === 'pro'

  const accent = isPro
    ? 'from-[#B45309] to-[#F59E0B]'
    : 'from-[#0052D4] to-[#00C6FF]'
  const border = isPro
    ? 'border-[#B45309]/30 dark:border-[#F59E0B]/25 hover:border-[#B45309]'
    : 'border-[#0052D4]/30 dark:border-[#0052D4]/40 hover:border-[#0052D4]'
  const toggleColor = isPro ? 'text-[#B45309] dark:text-[#F59E0B]' : 'text-[#0052D4]'

  return (
    <div
      onClick={() => setOpen(!open)}
      className={`relative bg-gray-50 dark:bg-white/[0.03] border ${border} rounded-lg p-5 cursor-pointer transition-all hover:bg-gray-100 dark:hover:bg-white/[0.05] flex flex-col gap-3`}
    >
      <span className={`absolute top-4 right-4 text-[9px] font-black tracking-[0.15em] uppercase bg-gradient-to-r ${accent} text-white px-2 py-1 rounded`}>
        {isPro ? 'Client Work' : 'Featured'}
      </span>
      <span className={`text-[10px] font-black tracking-[0.15em] uppercase bg-gradient-to-r ${accent} bg-clip-text text-transparent`}>
        {email.folder}
      </span>
      <div className="text-[15px] font-bold text-gray-900 dark:text-white leading-snug pr-14">{title}</div>
      {meta && (
        <p className="text-[12px] text-gray-500 dark:text-white/40 leading-relaxed -mt-1">{meta}</p>
      )}
      <div className="text-[11px] text-gray-400 dark:text-white/35">
        {formatDate(email.date)}{email.to ? ` · To: ${email.to.substring(0, 50)}` : ''}
      </div>
      {email.body && !open && (
        <p className="text-[12px] text-gray-500 dark:text-white/40 leading-relaxed line-clamp-4">{email.body.substring(0, 280)}</p>
      )}
      {email.body && (
        <span className={`text-[10px] font-black tracking-wider uppercase ${open ? 'text-gray-400 dark:text-white/30' : toggleColor}`}>
          {open ? 'Collapse ↑' : 'Read full email ↓'}
        </span>
      )}
      {open && email.body && (
        <pre className="text-[13px] text-gray-700 dark:text-white/60 leading-relaxed whitespace-pre-wrap break-words border-t border-gray-200 dark:border-white/[0.07] pt-4 font-sans">
          {email.body}
        </pre>
      )}
    </div>
  )
}

function EmailCard({ email }: { email: Email }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      onClick={() => setOpen(!open)}
      className={`bg-white dark:bg-[#080b10] p-[22px] cursor-pointer border-b-2 transition-all flex flex-col gap-2 ${open ? 'border-[#0052D4] bg-gray-50 dark:bg-white/[0.02]' : 'border-transparent hover:bg-gray-50 dark:hover:bg-white/[0.02] hover:border-[#0052D4]'}`}
    >
      <span className="text-[9px] font-black tracking-[0.15em] uppercase bg-gradient-to-r from-[#0052D4] to-[#00C6FF] bg-clip-text text-transparent">
        {email.folder}
      </span>
      <div className="text-[14px] font-bold text-gray-900 dark:text-white leading-snug">{email.subject}</div>
      <div className="flex flex-col gap-0.5">
        <span className="text-[11px] text-gray-400 dark:text-white/35 truncate">{formatDate(email.date)}</span>
        {email.to && <span className="text-[11px] text-gray-400 dark:text-white/35 truncate">To: {email.to.substring(0, 55)}</span>}
        {email.from && !email.from.toLowerCase().includes('jamiearchibaldmurray') && (
          <span className="text-[11px] text-gray-400 dark:text-white/35 truncate">From: {email.from.substring(0, 55)}</span>
        )}
      </div>
      {email.body && !open && (
        <p className="text-[12px] text-gray-400 dark:text-white/35 leading-snug line-clamp-3">{email.body.substring(0, 200)}</p>
      )}
      {email.body && (
        <span className={`text-[10px] font-black tracking-wider uppercase mt-1 ${open ? 'text-gray-400 dark:text-white/30' : 'text-[#0052D4]'}`}>
          {open ? 'Collapse ↑' : 'Read full email ↓'}
        </span>
      )}
      {open && email.body && (
        <pre className="text-[13px] text-gray-600 dark:text-white/60 leading-[1.75] whitespace-pre-wrap break-words border-t border-gray-200 dark:border-white/[0.07] pt-4 mt-1 font-sans">
          {email.body}
        </pre>
      )}
    </div>
  )
}

export default function BroadcastingResource() {
  const [data, setData] = useState<EmailData | null>(null)
  const [search, setSearch] = useState('')
  const [activeFolder, setActiveFolder] = useState('all')
  const [driveOpen, setDriveOpen] = useState(false)

  useEffect(() => {
    fetch('/student-emails.json')
      .then(r => r.json())
      .then((d: EmailData) => {
        // Attach display metadata to featured emails
        const featured = d.featured.map((e: Email) => {
          if (e.subject === 'Student in search of advice!') {
            return {
              ...e,
              displayTitle: 'Cold outreach to award-winning documentary director',
              displayMeta: 'Jamie contacted director Matt Pinder after watching his BAFTA-winning documentary on the Margaret Fleming case — referencing a personal connection to the Isle of Bute. Pinder responded the same day and they met in person the following week.',
            }
          }
          if (e.subject === 'Work experience request — Scottish documentary filmmaker' || (e.subject.includes('Stephen Bennett') && !e.subject.includes('favour'))) {
            return {
              ...e,
              displayTitle: 'Work experience request — Scottish documentary filmmaker',
              displayMeta: 'Cold email to Stephen Bennett, Scottish Producer/Director known for Dunblane: Our Story (BAFTA winner) and The Country Council. Jamie researched his work in depth before writing. Bennett replied within the hour calling it "one of the best letters I have received."',
            }
          }
          if (e.subject === 'SSSA Film Director Application 2020') {
            return {
              ...e,
              displayTitle: 'Repeat application — Film Director, Scottish Social Services Awards',
              displayMeta: 'A strong application that references previous work with the same organisation and lists specific named projects: Scottish Parliament, Rangers Charity Foundation, BBC The Social. Response came within 30 minutes.',
            }
          }
          if (e.subject === 'A professional asking a student for camera advice') {
            return {
              ...e,
              displayTitle: 'What networking can lead to — a professional asking a student for advice',
              displayMeta: 'After building a genuine relationship, award-winning documentary filmmaker Stephen Bennett came back to Jamie (a student at the time) to ask for Sony A7III autofocus settings. Shows what happens when you make yourself useful.',
            }
          }
          return e
        })
        setData({ ...d, featured })
      })
  }, [])

  const filtered = useCallback(() => {
    if (!data) return []
    const q = search.toLowerCase()
    return data.emails.filter(e => {
      const folderMatch = activeFolder === 'all' || e.folder === activeFolder
      const textMatch = !q || [e.subject, e.from, e.to, e.body].some(s => (s || '').toLowerCase().includes(q))
      return folderMatch && textMatch
    })
  }, [data, search, activeFolder])

  const folders = data ? [...new Set(data.emails.map(e => e.folder))].sort() : []
  const results = filtered()

  return (
    <div className="pt-24 min-h-screen bg-white dark:bg-[#080b10] text-gray-900 dark:text-white">

      {/* Header */}
      <header className="bg-gray-50 dark:bg-[#0e1117] border-b border-gray-200 dark:border-white/[0.07] px-6 md:px-8 pt-12 pb-10">
        <div className="max-w-[1140px] mx-auto">
          <p className="text-[10px] font-black tracking-[0.22em] uppercase bg-gradient-to-r from-[#0052D4] to-[#00C6FF] bg-clip-text text-transparent mb-3">
            MediaMurray — Private Student Resource
          </p>
          <h1 className="text-4xl md:text-5xl font-black leading-tight text-gray-900 dark:text-white mb-3">
            Getting Into TV: Real Emails From a Broadcasting Student
          </h1>
          <p className="text-[15px] text-gray-500 dark:text-white/40 leading-relaxed max-w-2xl">
            Real emails sent and received by Jamie Murray while studying HNC and BA Honours Television Production at City of Glasgow College (2016–2020). A reference for anyone starting out in TV and film who wants to see how to contact people in the industry, chase work experience, and build connections from scratch.
          </p>
          <div className="flex gap-6 mt-5 flex-wrap">
            {[
              { n: data ? data.emails.length.toString() : '—', l: 'Emails' },
              { n: '11', l: 'Categories' },
              { n: '~4 yrs', l: '2016 – 2020' },
            ].map(s => (
              <div key={s.l} className="flex flex-col gap-0.5">
                <span className="text-2xl font-black bg-gradient-to-r from-[#0052D4] to-[#00C6FF] bg-clip-text text-transparent">{s.n}</span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400 dark:text-white/35">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <div className="max-w-[1140px] mx-auto px-6 md:px-8">

        {/* Tip */}
        <div className="mt-8 bg-blue-50 dark:bg-[rgba(0,82,212,0.10)] border border-blue-200 dark:border-[#0052D4]/30 rounded-lg p-5 flex gap-4">
          <span className="text-xl flex-shrink-0">💡</span>
          <p className="text-[13px] text-gray-600 dark:text-white/65 leading-relaxed">
            <strong className="text-gray-900 dark:text-white font-bold">How to use this:</strong> The featured examples below show outreach emails that got real responses from industry professionals. In the full database, use the search bar to find emails by company (BBC, STV, Rangers TV), by topic, or by type of opportunity (work experience, freelance). Click any email to read it in full.
          </p>
        </div>

        {/* YouTube playlists */}
        <div className="mt-10">
          <p className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400 dark:text-white/35 mb-4">Recommended viewing</p>
          <div className="flex flex-col sm:flex-row gap-3">
            {[
              {
                title: 'Filmmaking Videos',
                sub: 'Curated YouTube Playlist — 200+ videos',
                desc: '200+ videos built up over many years - things I found useful, things that inspired me, and things I was trying to emulate in my own work. Techniques, storytelling, masterclasses, drone videos, business, and writing.',
                href: 'https://youtube.com/playlist?list=PLjliiZNFyGtPHBj0kRZdyUeNPtw7VLps7&si=jfQcC-zrhCPzPNoz',
              },
              {
                title: 'Editing Tutorials (Photo & Video)',
                sub: 'Curated YouTube Playlist — 100+ videos',
                desc: 'A wide range of editing tutorials built up over many years - photo and video editing across different tools, techniques, and styles.',
                href: 'https://youtube.com/playlist?list=PLjliiZNFyGtN3HGx_XN2kjO02sMuxBAJL&si=HV_GKCS28ggIH-Bq',
              },
            ].map(p => (
              <a
                key={p.title}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 flex-1 bg-white dark:bg-[#0e1117] border border-gray-200 dark:border-white/[0.07] rounded-lg p-4 hover:border-[#0052D4] hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-all no-underline"
              >
                <span className="text-lg bg-gradient-to-r from-[#0052D4] to-[#00C6FF] bg-clip-text text-transparent flex-shrink-0 mt-0.5">▶</span>
                <div className="flex flex-col gap-1 flex-1">
                  <span className="text-[13px] font-bold text-gray-900 dark:text-white">{p.title}</span>
                  <span className="text-[11px] text-gray-400 dark:text-white/35">{p.sub}</span>
                  <span className="text-[12px] text-gray-500 dark:text-white/35 leading-relaxed mt-1">{p.desc}</span>
                </div>
                <span className="text-gray-300 dark:text-white/30 flex-shrink-0">↗</span>
              </a>
            ))}
          </div>
        </div>

        {/* Google Drive course materials */}
        <div className="mt-10">
          <p className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400 dark:text-white/35 mb-4">Course materials</p>
          <div className="bg-white dark:bg-[#0e1117] border border-gray-200 dark:border-white/[0.07] rounded-lg overflow-hidden">
            <button
              onClick={() => setDriveOpen(!driveOpen)}
              className="w-full flex items-center gap-4 p-5 text-left hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-all"
            >
              <span className="text-xl">📁</span>
              <div className="flex flex-col gap-0.5 flex-1">
                <span className="text-[13px] font-bold text-gray-900 dark:text-white">HNC & BA Honours TV Production — Course Files</span>
                <span className="text-[11px] text-gray-400 dark:text-white/35">City of Glasgow College, 2016–2020 · Google Drive folder</span>
              </div>
              <span className="text-gray-400 dark:text-white/30 text-sm font-semibold">{driveOpen ? '↑ Hide' : '↓ Show'}</span>
            </button>
            {driveOpen && (
              <div className="border-t border-gray-200 dark:border-white/[0.07]">
                <iframe
                  src="https://drive.google.com/embeddedfolderview?id=1dxCgJ3o25aquuPwGq0bV_6uTUePwohLn#list"
                  className="w-full"
                  style={{ height: '480px', border: 'none', background: '#fff' }}
                  title="Course Materials — Google Drive"
                />
              </div>
            )}
          </div>
        </div>

        {/* Featured - student outreach */}
        {data && data.featured.filter(e => e.folder !== 'Client Communications').length > 0 && (
          <div className="mt-10">
            <p className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400 dark:text-white/35 mb-1">Featured examples</p>
            <p className="text-[12px] text-gray-400 dark:text-white/30 mb-4">Student outreach emails that got real responses from industry professionals</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {data.featured.filter(e => e.folder !== 'Client Communications').map((e, i) => <FeaturedCard key={i} email={e} variant="student" />)}
            </div>
          </div>
        )}

        {/* Featured - professional work */}
        {data && data.featured.filter(e => e.folder === 'Client Communications').length > 0 && (
          <div className="mt-10">
            <p className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400 dark:text-white/35 mb-1">Professional examples</p>
            <p className="text-[12px] text-gray-400 dark:text-white/30 mb-4">Real client communications from MediaMurray — quotes, proposals, and project scoping</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {data.featured.filter(e => e.folder === 'Client Communications').map((e, i) => <FeaturedCard key={i} email={e} variant="pro" />)}
            </div>
          </div>
        )}

        {/* Search + filters */}
        {data && (
          <div className="mt-10 flex flex-col gap-4">
            <div className="relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-white/30 pointer-events-none" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
              </svg>
              <input
                type="text"
                placeholder="Search by subject, company, keyword..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full bg-white dark:bg-[#0e1117] border border-gray-200 dark:border-white/[0.07] rounded-lg pl-11 pr-4 py-3.5 text-[14px] text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/25 outline-none focus:border-[#0052D4] transition-colors"
              />
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-[10px] font-black tracking-widest uppercase text-gray-400 dark:text-white/30 mr-1">Category</span>
              {['all', ...folders].map(f => (
                <button
                  key={f}
                  onClick={() => setActiveFolder(f)}
                  className={`text-[10px] font-black tracking-wider uppercase px-3 py-1.5 rounded border transition-all whitespace-nowrap ${
                    activeFolder === f
                      ? 'bg-gradient-to-r from-[#0052D4] to-[#00C6FF] border-transparent text-white'
                      : 'bg-white dark:bg-[#0e1117] border-gray-200 dark:border-white/[0.07] text-gray-500 dark:text-white/40 hover:border-[#0052D4]/50 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {f === 'all' ? `All (${data.emails.length})` : `${f} (${data.emails.filter(e => e.folder === f).length})`}
                </button>
              ))}
            </div>
          </div>
        )}

        {data && (
          <p className="mt-4 text-[11px] font-bold tracking-widest uppercase text-gray-400 dark:text-white/30">
            {results.length} email{results.length !== 1 ? 's' : ''}
          </p>
        )}
      </div>

      {/* Grid */}
      {!data && (
        <div className="max-w-[1140px] mx-auto px-8 mt-4 text-center py-20 text-gray-400 dark:text-white/30 text-sm">Loading...</div>
      )}
      {data && (
        <div
          className="max-w-[1140px] mx-auto px-6 md:px-8 mt-3 mb-20"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1px', background: 'rgba(0,0,0,0.08)' }}
        >
          {results.length === 0 && (
            <div className="col-span-full text-center py-16 text-gray-400 dark:text-white/25 text-sm bg-white dark:bg-[#080b10]">No emails match your search.</div>
          )}
          {results.map((e, i) => <EmailCard key={i} email={e} />)}
        </div>
      )}
    </div>
  )
}
