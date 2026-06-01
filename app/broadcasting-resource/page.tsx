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
}

interface EmailData {
  emails: Email[]
  featured: Email[]
}

function formatDate(d: string) {
  try {
    const parts = d.split(' ')
    return parts.slice(1, 4).join(' ')
  } catch {
    return d
  }
}

function FeaturedCard({ email }: { email: Email }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      onClick={() => setOpen(!open)}
      className="relative bg-white/[0.03] border border-[#0052D4]/40 rounded-lg p-5 cursor-pointer transition-all hover:border-[#0052D4] hover:bg-white/[0.05] flex flex-col gap-3"
    >
      <span className="absolute top-4 right-4 text-[9px] font-black tracking-[0.15em] uppercase bg-gradient-to-r from-[#0052D4] to-[#00C6FF] text-white px-2 py-1 rounded">
        Featured
      </span>
      <span className="text-[10px] font-black tracking-[0.15em] uppercase bg-gradient-to-r from-[#0052D4] to-[#00C6FF] bg-clip-text text-transparent">
        {email.folder}
      </span>
      <div className="text-[15px] font-bold text-white leading-snug pr-14">{email.subject}</div>
      <div className="text-[11px] text-white/40">
        {formatDate(email.date)}{email.to ? ` · To: ${email.to.substring(0, 50)}` : ''}
      </div>
      {email.body && !open && (
        <p className="text-[12px] text-white/40 leading-relaxed line-clamp-4">{email.body.substring(0, 280)}</p>
      )}
      {email.body && (
        <span className={`text-[10px] font-black tracking-wider uppercase ${open ? 'text-white/30' : 'text-[#0052D4]'}`}>
          {open ? 'Collapse ↑' : 'Read full email ↓'}
        </span>
      )}
      {open && email.body && (
        <pre className="text-[13px] text-white/60 leading-relaxed whitespace-pre-wrap break-words border-t border-white/[0.07] pt-4 font-sans">
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
      className={`bg-[#080b10] p-[22px] cursor-pointer border-b-2 transition-all flex flex-col gap-2 ${open ? 'border-[#0052D4] bg-white/[0.02]' : 'border-transparent hover:bg-white/[0.02] hover:border-[#0052D4]'}`}
    >
      <span className="text-[9px] font-black tracking-[0.15em] uppercase bg-gradient-to-r from-[#0052D4] to-[#00C6FF] bg-clip-text text-transparent">
        {email.folder}
      </span>
      <div className="text-[14px] font-bold text-white leading-snug">{email.subject}</div>
      <div className="flex flex-col gap-0.5">
        <span className="text-[11px] text-white/35 truncate">{formatDate(email.date)}</span>
        {email.to && <span className="text-[11px] text-white/35 truncate">To: {email.to.substring(0, 55)}</span>}
        {email.from && !email.from.toLowerCase().includes('jamiearchibaldmurray') && (
          <span className="text-[11px] text-white/35 truncate">From: {email.from.substring(0, 55)}</span>
        )}
      </div>
      {email.body && !open && (
        <p className="text-[12px] text-white/35 leading-snug line-clamp-3">{email.body.substring(0, 200)}</p>
      )}
      {email.body && (
        <span className={`text-[10px] font-black tracking-wider uppercase mt-1 ${open ? 'text-white/30' : 'text-[#0052D4]'}`}>
          {open ? 'Collapse ↑' : 'Read full email ↓'}
        </span>
      )}
      {open && email.body && (
        <pre className="text-[13px] text-white/60 leading-[1.75] whitespace-pre-wrap break-words border-t border-white/[0.07] pt-4 mt-1 font-sans">
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
      .then(setData)
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
    <div className="min-h-screen bg-[#080b10] text-white">

      {/* Header */}
      <header className="bg-[#0e1117] border-b border-white/[0.07] px-8 pt-12 pb-10">
        <div className="max-w-[1140px] mx-auto">
          <p className="text-[10px] font-black tracking-[0.22em] uppercase bg-gradient-to-r from-[#0052D4] to-[#00C6FF] bg-clip-text text-transparent mb-3">
            MediaMurray — Private Student Resource
          </p>
          <h1 className="text-4xl md:text-5xl font-black leading-tight text-white mb-3">
            Getting Into TV: Real Emails From a Broadcasting Student
          </h1>
          <p className="text-[15px] text-white/40 leading-relaxed max-w-2xl">
            Real emails sent and received by Jamie Murray while studying HNC and BA Honours Television Production at City of Glasgow College (2016–2020). A reference for anyone starting out in TV and film who wants to see how to contact people in the industry, chase work experience, and build connections from scratch.
          </p>
          <div className="flex gap-6 mt-5 flex-wrap">
            {[
              { n: data ? data.emails.length.toString() : '—', l: 'Emails' },
              { n: '11', l: 'Categories' },
              { n: '~4 yrs', l: '2016 - 2020' },
            ].map(s => (
              <div key={s.l} className="flex flex-col gap-0.5">
                <span className="text-2xl font-black bg-gradient-to-r from-[#0052D4] to-[#00C6FF] bg-clip-text text-transparent">{s.n}</span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-white/35">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <div className="max-w-[1140px] mx-auto px-8">

        {/* Tip */}
        <div className="mt-8 bg-gradient-to-br from-[#0052D4]/10 to-[#00C6FF]/5 border border-[#0052D4]/30 rounded-lg p-5 flex gap-4">
          <span className="text-xl flex-shrink-0">💡</span>
          <p className="text-[13px] text-white/65 leading-relaxed">
            <strong className="text-white font-bold">How to use this:</strong> The featured examples below show outreach emails that got real responses from industry professionals. In the full database, use the search bar to find emails by company (BBC, STV, Rangers TV), by topic, or by type of opportunity (work experience, freelance). Click any email to read it in full.
          </p>
        </div>

        {/* YouTube playlists */}
        <div className="mt-10">
          <p className="text-[10px] font-black tracking-[0.2em] uppercase text-white/35 mb-4">Recommended viewing</p>
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
                className="flex items-start gap-3 flex-1 bg-[#0e1117] border border-white/[0.07] rounded-lg p-4 hover:border-[#0052D4] hover:bg-white/[0.02] transition-all no-underline text-white"
              >
                <span className="text-lg bg-gradient-to-r from-[#0052D4] to-[#00C6FF] bg-clip-text text-transparent flex-shrink-0 mt-0.5">▶</span>
                <div className="flex flex-col gap-1 flex-1">
                  <span className="text-[13px] font-bold">{p.title}</span>
                  <span className="text-[11px] text-white/35">{p.sub}</span>
                  <span className="text-[12px] text-white/35 leading-relaxed mt-1">{p.desc}</span>
                </div>
                <span className="text-white/30 flex-shrink-0">↗</span>
              </a>
            ))}
          </div>
        </div>

        {/* Google Drive course materials */}
        <div className="mt-10">
          <p className="text-[10px] font-black tracking-[0.2em] uppercase text-white/35 mb-4">Course materials</p>
          <div
            className="bg-[#0e1117] border border-white/[0.07] rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setDriveOpen(!driveOpen)}
              className="w-full flex items-center gap-4 p-5 text-left hover:bg-white/[0.02] transition-all"
            >
              <span className="text-xl">📁</span>
              <div className="flex flex-col gap-0.5 flex-1">
                <span className="text-[13px] font-bold text-white">HNC & BA Honours TV Production — Course Files</span>
                <span className="text-[11px] text-white/35">City of Glasgow College, 2016–2020 · Google Drive folder</span>
              </div>
              <span className="text-white/30 text-sm">{driveOpen ? '↑ Hide' : '↓ Show'}</span>
            </button>
            {driveOpen && (
              <div className="border-t border-white/[0.07]">
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

        {/* Featured */}
        {data && data.featured.length > 0 && (
          <div className="mt-10">
            <p className="text-[10px] font-black tracking-[0.2em] uppercase text-white/35 mb-4">Featured examples</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {data.featured.map((e, i) => <FeaturedCard key={i} email={e} />)}
            </div>
          </div>
        )}

        {/* Search + filters */}
        {data && (
          <div className="mt-10 flex flex-col gap-4">
            <div className="relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
              </svg>
              <input
                type="text"
                placeholder="Search by subject, company, keyword..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full bg-[#0e1117] border border-white/[0.07] rounded-lg pl-11 pr-4 py-3.5 text-[14px] text-white placeholder-white/25 outline-none focus:border-[#0052D4] transition-colors"
              />
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-[10px] font-black tracking-widest uppercase text-white/30 mr-1">Category</span>
              {['all', ...folders].map(f => (
                <button
                  key={f}
                  onClick={() => setActiveFolder(f)}
                  className={`text-[10px] font-black tracking-wider uppercase px-3 py-1.5 rounded border transition-all whitespace-nowrap ${
                    activeFolder === f
                      ? 'bg-gradient-to-r from-[#0052D4] to-[#00C6FF] border-transparent text-white'
                      : 'bg-[#0e1117] border-white/[0.07] text-white/40 hover:border-[#0052D4]/50 hover:text-white'
                  }`}
                >
                  {f === 'all' ? `All (${data.emails.length})` : `${f} (${data.emails.filter(e => e.folder === f).length})`}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Count */}
        {data && (
          <p className="mt-4 text-[11px] font-bold tracking-widest uppercase text-white/30">
            {results.length} email{results.length !== 1 ? 's' : ''}
          </p>
        )}
      </div>

      {/* Grid */}
      {!data && (
        <div className="max-w-[1140px] mx-auto px-8 mt-4 text-center py-20 text-white/30 text-sm">Loading...</div>
      )}
      {data && (
        <div
          className="max-w-[1140px] mx-auto px-8 mt-3 mb-20"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.06)' }}
        >
          {results.length === 0 && (
            <div className="col-span-full text-center py-16 text-white/25 text-sm bg-[#080b10]">No emails match your search.</div>
          )}
          {results.map((e, i) => <EmailCard key={i} email={e} />)}
        </div>
      )}
    </div>
  )
}
