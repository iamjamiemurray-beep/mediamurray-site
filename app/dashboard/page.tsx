'use client'

import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { useTheme } from '@/components/ThemeProvider'

// ─── Types ────────────────────────────────────────────────────────────────────
const PIPELINE_STAGES = ['Enquiry', 'Booked', 'Filming', 'Editing', 'Delivered', 'Complete']
const STAGE_COLOURS: Record<string, string> = {
  Enquiry:   'bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 border-yellow-500/30',
  Booked:    'bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-500/30',
  Filming:   'bg-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-500/30',
  Editing:   'bg-orange-500/20 text-orange-700 dark:text-orange-300 border-orange-500/30',
  Delivered: 'bg-green-500/20 text-green-700 dark:text-green-300 border-green-500/30',
  Complete:  'bg-green-500/20 text-green-700 dark:text-green-300 border-green-500/30',
}

type Client = { id: string; name: string; email: string; deliverables: string; date: string }
type PipelineData = { grouped: Record<string, Client[]> }
type RevenueData = { total: number; target: number; percent: number; payments: { name: string; amount: number; date: string }[]; month: string }
type ProjectField = { label: string; value: string }
type ProjectDetail = { fields: ProjectField[]; notionUrl: string }
type Idea = { id: string; title: string; status: string; platform: string; creator: string; actionPoints: string; score: number | null; url: string; created: string }

const STATUS_COLOURS: Record<string, string> = {
  New:           'bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-500/30',
  'In Progress': 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 border-yellow-500/30',
  Done:          'bg-green-500/20 text-green-700 dark:text-green-300 border-green-500/30',
  Actioned:      'bg-green-500/20 text-green-700 dark:text-green-300 border-green-500/30',
}

// ─── Agent definitions ────────────────────────────────────────────────────────
const AGENTS = [
  {
    id: 'researcher',
    name: 'Researcher',
    tags: ['INTEL', 'ANALYSIS'],
    description: 'Pulls your full Idea Bank from Notion — sorted by status and score so you can see everything at a glance.',
    accentColor: 'cyan',
    border: 'border-cyan-500/40',
    glow: 'shadow-cyan-500/10',
    tagColor: 'text-cyan-600 dark:text-cyan-400 border-cyan-500/30',
  },
  {
    id: 'scriptwriter',
    name: 'Scriptwriter',
    tags: ['COPY', 'ASSETS'],
    description: 'Lists all New and In Progress ideas from your Idea Bank, sorted by score — ready to pick one and script it.',
    accentColor: 'purple',
    border: 'border-purple-500/40',
    glow: 'shadow-purple-500/10',
    tagColor: 'text-purple-600 dark:text-purple-400 border-purple-500/30',
  },
  {
    id: 'pipeline',
    name: 'Pipeline Checker',
    tags: ['OPS', 'CRM'],
    description: 'Pulls your full client pipeline from Notion, grouped by stage — see every active project and where it sits.',
    accentColor: 'orange',
    border: 'border-orange-500/40',
    glow: 'shadow-orange-500/10',
    tagColor: 'text-orange-600 dark:text-orange-400 border-orange-500/30',
  },
  {
    id: 'hooks',
    name: 'Hook Scout',
    tags: ['INTEL', 'HOOKS'],
    description: 'Fetches the 3 latest videos from Peter McKinnon, Mark Bone, WhoisMattJohnson, Danny Gevirtz & Matti Haapoja — shows titles and opening transcript lines.',
    accentColor: 'green',
    border: 'border-green-500/40',
    glow: 'shadow-green-500/10',
    tagColor: 'text-green-600 dark:text-green-400 border-green-500/30',
  },
] as const

type AgentId = typeof AGENTS[number]['id']
type AgentState = { status: 'idle' | 'running' | 'done' | 'error'; result: string; ts: string }

type BriefingData = {
  lastUpdated: string
  today: string[]
  actionItems: string[]
  activeProjects: string[]
  invoices: string[]
  calendar: string[]
  quickLinks: string[]
  businessSnapshot: string[]
}

// ─── Project Detail Modal ─────────────────────────────────────────────────────
function ProjectModal({ id, onClose }: { id: string; onClose: () => void }) {
  const [data, setData] = useState<ProjectDetail | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/dashboard/project?id=${id}`)
      .then(r => r.json())
      .then(d => { setData(d); setLoading(false) })
      .catch(() => setLoading(false))
  }, [id])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/30 dark:bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div className="w-full max-w-md h-full bg-white dark:bg-[#0e0e0e] border-l border-gray-200 dark:border-white/10 overflow-y-auto p-8 flex flex-col" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/30">Project Details</p>
          <button onClick={onClose} className="text-gray-400 dark:text-white/30 hover:text-gray-900 dark:hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
        {loading && <p className="text-gray-400 dark:text-white/30 text-sm animate-pulse">Loading…</p>}
        {data && (
          <>
            <div className="space-y-4 flex-1">
              {data.fields.map((f, i) => (
                <div key={i} className="border-b border-gray-100 dark:border-white/5 pb-4">
                  <p className="text-xs uppercase tracking-wider text-gray-400 dark:text-white/30 mb-1">{f.label}</p>
                  <p className="text-sm text-gray-900 dark:text-white break-words">{f.value}</p>
                </div>
              ))}
            </div>
            {data.notionUrl && (
              <a href={data.notionUrl} target="_blank" rel="noopener noreferrer" className="mt-8 block text-center gradient-bg text-white font-bold py-3 text-sm uppercase tracking-wider rounded-sm">
                Open in Notion
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

// ─── Overview Widgets ─────────────────────────────────────────────────────────
function RevenueWidget() {
  const [data, setData] = useState<RevenueData | null>(null)
  const [error, setError] = useState(false)
  useEffect(() => {
    fetch('/api/dashboard/revenue').then(r => r.json()).then(d => d.error ? setError(true) : setData(d)).catch(() => setError(true))
  }, [])
  return (
    <div className="bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-sm p-6">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/30 mb-4">Revenue — {data?.month ?? '…'}</p>
      {error && <p className="text-gray-400 dark:text-white/30 text-sm">Could not load.</p>}
      {!data && !error && <p className="text-gray-300 dark:text-white/20 text-sm animate-pulse">Loading…</p>}
      {data && (
        <>
          <div className="flex items-end gap-3 mb-4">
            <span className="text-4xl font-black text-gray-900 dark:text-white">£{data.total.toLocaleString('en-GB')}</span>
            <span className="text-gray-400 dark:text-white/30 text-sm mb-1">/ £{data.target.toLocaleString('en-GB')} target</span>
          </div>
          <div className="w-full h-2 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden mb-2">
            <div className="h-full rounded-full transition-all duration-700" style={{ width: `${Math.min(data.percent, 100)}%`, background: data.percent >= 100 ? '#22c55e' : 'linear-gradient(90deg,#0052D4,#00C6FF)' }} />
          </div>
          <p className="text-xs text-gray-400 dark:text-white/30 mb-4">{data.percent}% of target</p>
          {data.payments.length > 0 && (
            <div className="space-y-1 border-t border-gray-100 dark:border-white/5 pt-4">
              {data.payments.map((p, i) => (
                <div key={i} className="flex justify-between text-sm">
                  <span className="text-gray-500 dark:text-white/60 truncate">{p.name}</span>
                  <span className="text-gray-900 dark:text-white font-bold ml-4">£{p.amount.toLocaleString('en-GB')}</span>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}

function UpcomingWidget({ pipeline }: { pipeline: PipelineData | null }) {
  const booked = pipeline?.grouped['Booked'] ?? []
  return (
    <div className="bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-sm p-6">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/30 mb-4">Upcoming Shoots</p>
      {!pipeline && <p className="text-gray-300 dark:text-white/20 text-sm animate-pulse">Loading…</p>}
      {pipeline && booked.length === 0 && <p className="text-gray-300 dark:text-white/20 text-sm">No shoots booked yet.</p>}
      {booked.map(c => (
        <div key={c.id} className="flex items-start gap-3 py-2 border-b border-gray-100 dark:border-white/5 last:border-0">
          <div className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0 mt-1.5" />
          <div className="flex-1 min-w-0">
            <p className="text-gray-900 dark:text-white text-sm font-bold truncate">{c.name}</p>
            {c.deliverables && <p className="text-gray-400 dark:text-white/40 text-xs truncate">{c.deliverables}</p>}
          </div>
          {c.date && <span className="text-gray-400 dark:text-white/30 text-xs flex-shrink-0">{c.date}</span>}
        </div>
      ))}
    </div>
  )
}

function PipelineWidget({ onSelectProject }: { onSelectProject: (id: string) => void }) {
  const [data, setData] = useState<PipelineData | null>(null)
  const [error, setError] = useState(false)
  const load = useCallback(() => {
    fetch('/api/dashboard/pipeline').then(r => r.json()).then(d => d.error ? setError(true) : setData(d)).catch(() => setError(true))
  }, [])
  useEffect(() => { load() }, [load])
  return (
    <div className="bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/30">Client Pipeline</p>
        <button onClick={load} className="text-xs text-gray-300 dark:text-white/20 hover:text-gray-600 dark:hover:text-white/50 transition-colors">Refresh</button>
      </div>
      {error && <p className="text-gray-400 dark:text-white/30 text-sm">Could not load.</p>}
      {!data && !error && <p className="text-gray-300 dark:text-white/20 text-sm animate-pulse">Loading…</p>}
      {data && (
        <div className="overflow-x-auto">
          <div className="flex gap-4 min-w-max">
            {PIPELINE_STAGES.map(stage => {
              const clients = data.grouped[stage] ?? []
              return (
                <div key={stage} className="w-52 flex-shrink-0">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-white/50">{stage}</span>
                    <span className="text-xs bg-gray-200 dark:bg-white/10 text-gray-500 dark:text-white/40 rounded-full px-2 py-0.5">{clients.length}</span>
                  </div>
                  <div className="space-y-2">
                    {clients.length === 0 && <div className="border border-dashed border-gray-200 dark:border-white/10 rounded-sm p-3 text-xs text-gray-300 dark:text-white/20">Empty</div>}
                    {clients.map(c => (
                      <button key={c.id} onClick={() => onSelectProject(c.id)} className={`w-full text-left border rounded-sm p-3 text-xs hover:brightness-95 dark:hover:brightness-125 transition-all ${STAGE_COLOURS[stage] ?? 'bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-white/50 border-gray-200 dark:border-white/10'}`}>
                        <p className="font-bold text-sm truncate">{c.name}</p>
                        {c.deliverables && <p className="mt-1 opacity-70 truncate">{c.deliverables}</p>}
                        {c.date && <p className="mt-1 opacity-50">{c.date}</p>}
                      </button>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

function CaptureWidget() {
  const [text, setText] = useState('')
  const [status, setStatus] = useState<'idle'|'saving'|'saved'|'error'>('idle')
  const save = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!text.trim()) return
    setStatus('saving')
    const res = await fetch('/api/dashboard/capture', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ text }) })
    if (res.ok) { setStatus('saved'); setText(''); setTimeout(() => setStatus('idle'), 2000) }
    else { setStatus('error'); setTimeout(() => setStatus('idle'), 3000) }
  }
  return (
    <div className="bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-sm p-6">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/30 mb-4">Quick Capture → Idea Bank</p>
      <form onSubmit={save} className="flex gap-3">
        <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Drop an idea — saves straight to Notion Idea Bank" className="flex-1 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-300 dark:placeholder-white/20 focus:outline-none focus:border-[#0052D4] transition-colors rounded-sm" />
        <button type="submit" disabled={status === 'saving' || !text.trim()} className="gradient-bg text-white font-bold px-6 py-3 text-sm rounded-sm disabled:opacity-40 whitespace-nowrap">
          {status === 'saving' ? '…' : status === 'saved' ? '✓ Saved' : status === 'error' ? 'Error' : 'Save'}
        </button>
      </form>
    </div>
  )
}

// ─── Content Tab ──────────────────────────────────────────────────────────────
function IdeasWidget() {
  const [ideas, setIdeas] = useState<Idea[]>([])
  const [filter, setFilter] = useState('All')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/dashboard/ideas').then(r => r.json()).then(d => { if (d.error) setError(true); else setIdeas(d.ideas); setLoading(false) }).catch(() => { setError(true); setLoading(false) })
  }, [])

  const statuses = ['All', ...Array.from(new Set(ideas.map(i => i.status)))]
  const filtered = filter === 'All' ? ideas : ideas.filter(i => i.status === filter)

  return (
    <div className="bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-sm p-6">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/30">Idea Bank</p>
        <div className="flex gap-2 flex-wrap">
          {statuses.map(s => (
            <button key={s} onClick={() => setFilter(s)} className={`text-xs px-3 py-1 rounded-full border transition-colors ${filter === s ? 'bg-gray-200 dark:bg-white/20 text-gray-900 dark:text-white border-gray-300 dark:border-white/30' : 'text-gray-400 dark:text-white/30 border-gray-200 dark:border-white/10 hover:border-gray-400 dark:hover:border-white/30'}`}>{s}</button>
          ))}
        </div>
      </div>
      {error && <p className="text-gray-400 dark:text-white/30 text-sm">Could not load — make sure Idea Bank is shared with MMCommandCentre.</p>}
      {loading && !error && <p className="text-gray-300 dark:text-white/20 text-sm animate-pulse">Loading…</p>}
      {!loading && !error && (
        <div className="space-y-3 max-h-[500px] overflow-y-auto">
          {filtered.length === 0 && <p className="text-gray-300 dark:text-white/20 text-sm">No ideas with this status.</p>}
          {filtered.map(idea => (
            <div key={idea.id} className="border border-gray-200 dark:border-white/10 rounded-sm p-4 hover:border-gray-300 dark:hover:border-white/20 transition-colors">
              <div className="flex items-start justify-between gap-3 mb-2">
                <p className="text-sm font-bold text-gray-900 dark:text-white leading-snug">{idea.title}</p>
                <span className={`text-xs px-2 py-0.5 rounded-full border flex-shrink-0 ${STATUS_COLOURS[idea.status] ?? 'bg-gray-100 dark:bg-white/5 text-gray-400 dark:text-white/40 border-gray-200 dark:border-white/10'}`}>{idea.status}</span>
              </div>
              {idea.actionPoints && <p className="text-xs text-gray-500 dark:text-white/50 mb-2 line-clamp-2">{idea.actionPoints}</p>}
              <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-white/30">
                {idea.platform && <span>{idea.platform}</span>}
                {idea.creator && <span>by {idea.creator}</span>}
                {idea.score != null && <span>Score: {idea.score}/10</span>}
                {idea.url && <a href={idea.url} target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 dark:hover:text-white/60 transition-colors">↗ Source</a>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function ScriptGenerator() {
  const [topic, setTopic] = useState('')
  const [hook, setHook] = useState('')
  const [script, setScript] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const generate = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!topic.trim()) return
    setLoading(true); setScript(''); setError('')
    try {
      const res = await fetch('/api/dashboard/script', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ topic, hook }) })
      const data = await res.json()
      if (data.error) setError(data.error)
      else setScript(data.script)
    } catch { setError('Failed to generate') }
    setLoading(false)
  }

  const inputClass = "w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-300 dark:placeholder-white/20 focus:outline-none focus:border-[#0052D4] transition-colors rounded-sm"

  return (
    <div className="bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-sm p-6">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/30 mb-4">AI Script Generator</p>
      <form onSubmit={generate} className="space-y-3 mb-6">
        <input type="text" value={topic} onChange={e => setTopic(e.target.value)} placeholder="Topic (e.g. why hire a videographer for your event)" className={inputClass} />
        <input type="text" value={hook} onChange={e => setHook(e.target.value)} placeholder="Opening hook (optional)" className={inputClass} />
        <button type="submit" disabled={loading || !topic.trim()} className="gradient-bg text-white font-bold px-8 py-3 text-sm rounded-sm disabled:opacity-40 uppercase tracking-wider w-full">
          {loading ? 'Writing…' : 'Generate Script'}
        </button>
      </form>
      {error && <p className="text-red-500 dark:text-red-400 text-sm mb-4">{error === 'No API key' ? 'Add ANTHROPIC_API_KEY to Vercel env vars to enable this.' : error}</p>}
      {script && (
        <div className="bg-gray-100 dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-sm p-5">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-white/30">Generated Script</p>
            <button onClick={() => navigator.clipboard.writeText(script)} className="text-xs text-gray-400 dark:text-white/30 hover:text-gray-600 dark:hover:text-white/60 transition-colors">Copy</button>
          </div>
          <pre className="text-sm text-gray-700 dark:text-white/80 whitespace-pre-wrap font-mono leading-relaxed">{script}</pre>
        </div>
      )}
    </div>
  )
}

// ─── Agents Tab ───────────────────────────────────────────────────────────────
function AgentCard({
  agent,
  state,
  onRun,
}: {
  agent: typeof AGENTS[number]
  state: AgentState
  onRun: (id: AgentId) => void
}) {
  const isRunning = state.status === 'running'
  const isDone = state.status === 'done'
  const isError = state.status === 'error'

  return (
    <div className={`bg-white dark:bg-[#0a0a0a] border ${agent.border} rounded-sm p-5 shadow-lg ${agent.glow} flex flex-col gap-4`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-2">
            {agent.tags.map(tag => (
              <span key={tag} className={`text-[10px] font-bold uppercase tracking-widest border px-2 py-0.5 rounded-full ${agent.tagColor}`}>{tag}</span>
            ))}
          </div>
          <h3 className="text-base font-black text-gray-900 dark:text-white">{agent.name}</h3>
          <p className="text-xs text-gray-400 dark:text-white/40 mt-1 leading-relaxed">{agent.description}</p>
        </div>
        <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 mt-1 ${isRunning ? 'bg-green-400 animate-pulse' : isDone ? 'bg-green-500' : isError ? 'bg-red-500' : 'bg-gray-300 dark:bg-white/20'}`} />
      </div>

      {isRunning && (
        <div className="w-full h-1 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
          <div className="h-full rounded-full animate-[slide_1.5s_ease-in-out_infinite]" style={{ width: '40%', background: 'linear-gradient(90deg,transparent,#00C6FF,transparent)', backgroundSize: '200% 100%', animation: 'shimmer 1.5s infinite' }} />
        </div>
      )}

      <div className="flex items-center justify-between">
        <span className={`text-xs font-bold uppercase tracking-wider ${isRunning ? 'text-green-500 dark:text-green-400' : isDone ? 'text-green-500 dark:text-green-400' : isError ? 'text-red-500 dark:text-red-400' : 'text-gray-300 dark:text-white/20'}`}>
          {isRunning ? '● Running' : isDone ? '✓ Complete' : isError ? '✕ Error' : '○ Idle'}
          {state.ts && !isRunning && <span className="ml-2 font-normal text-gray-300 dark:text-white/20">{state.ts}</span>}
        </span>
        <button
          onClick={() => onRun(agent.id)}
          disabled={isRunning}
          className={`text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-sm border transition-all disabled:opacity-40 disabled:cursor-not-allowed ${agent.border} ${agent.tagColor} hover:bg-gray-50 dark:hover:bg-white/5`}
        >
          {isRunning ? 'Running…' : 'Run Agent'}
        </button>
      </div>

      {(isDone || isError) && state.result && (
        <div className="border-t border-gray-100 dark:border-white/10 pt-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-white/30">Output</p>
            {isDone && (
              <button onClick={() => navigator.clipboard.writeText(state.result)} className="text-[10px] text-gray-300 dark:text-white/20 hover:text-gray-500 dark:hover:text-white/50 transition-colors uppercase tracking-wider">Copy</button>
            )}
          </div>
          <div className="max-h-64 overflow-y-auto">
            <p className={`text-xs leading-relaxed whitespace-pre-wrap ${isError ? 'text-red-500 dark:text-red-400' : 'text-gray-600 dark:text-white/70'}`}>{state.result}</p>
          </div>
        </div>
      )}
    </div>
  )
}

function AgentsPanel() {
  const [states, setStates] = useState<Record<string, AgentState>>({
    researcher:   { status: 'idle', result: '', ts: '' },
    scriptwriter: { status: 'idle', result: '', ts: '' },
    pipeline:     { status: 'idle', result: '', ts: '' },
    hooks:        { status: 'idle', result: '', ts: '' },
  })

  const runAgent = async (agentId: AgentId) => {
    setStates(prev => ({ ...prev, [agentId]: { status: 'running', result: '', ts: '' } }))
    try {
      const res = await fetch('/api/dashboard/agents', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ agent: agentId }),
      })
      const data = await res.json()
      const ts = new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
      if (data.error) {
        setStates(prev => ({ ...prev, [agentId]: { status: 'error', result: data.error, ts } }))
      } else {
        setStates(prev => ({ ...prev, [agentId]: { status: 'done', result: data.result, ts } }))
      }
    } catch {
      setStates(prev => ({ ...prev, [agentId]: { status: 'error', result: 'Network error — try again.', ts: '' } }))
    }
  }

  const activeCount = Object.values(states).filter(s => s.status === 'running').length

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <p className="text-2xl font-black text-gray-700 dark:text-white/80">AI Team</p>
        <span className="text-xs font-bold uppercase tracking-widest border border-cyan-500/40 text-cyan-600 dark:text-cyan-400 px-3 py-1 rounded-full">
          {AGENTS.length} Agents{activeCount > 0 ? ` · ${activeCount} Running` : ''}
        </span>
      </div>

      <div className="bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 rounded-sm px-5 py-3 text-xs text-gray-400 dark:text-white/30 leading-relaxed">
        Each agent connects to your live Notion data and uses Claude AI to generate insights, scripts, and action plans. Results appear directly in the card — you can copy and act on them straight away.
        {' '}<span className="text-gray-300 dark:text-white/20">Requires ANTHROPIC_API_KEY in Vercel.</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {AGENTS.map(agent => (
          <AgentCard
            key={agent.id}
            agent={agent}
            state={states[agent.id]}
            onRun={runAgent}
          />
        ))}
      </div>
    </div>
  )
}

// ─── Today Tab ───────────────────────────────────────────────────────────────
function TodayTab() {
  const [data, setData] = useState<BriefingData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('/api/dashboard/briefing')
      .then(r => r.json())
      .then(d => { if (d.error) setError(true); else setData(d); setLoading(false) })
      .catch(() => { setError(true); setLoading(false) })
  }, [])

  const refresh = () => {
    setLoading(true); setError(false)
    fetch('/api/dashboard/briefing')
      .then(r => r.json())
      .then(d => { if (d.error) setError(true); else setData(d); setLoading(false) })
      .catch(() => { setError(true); setLoading(false) })
  }

  if (loading) return <div className="text-gray-300 dark:text-white/20 text-sm animate-pulse py-8">Loading Notion dashboard…</div>
  if (error) return <div className="text-red-500 dark:text-red-400 text-sm py-8">Could not load Notion page. Check NOTION_API_KEY and page sharing.</div>

  const Section = ({ title, items }: { title: string; items: string[] }) => {
    if (!items || items.length === 0) return null
    return (
      <div className="bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-sm p-5">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/30 mb-3">{title}</p>
        <div className="space-y-1.5">
          {items.filter(Boolean).map((item, i) => {
            const isTodo = item.startsWith('[ ]') || item.startsWith('[x]')
            const isDone = item.startsWith('[x]')
            const isHeading = item.startsWith('## ')
            const isDivider = item === '---'
            if (isDivider) return <hr key={i} className="border-gray-100 dark:border-white/5 my-2" />
            if (isHeading) return <p key={i} className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-white/40 mt-3 mb-1">{item.replace('## ', '')}</p>
            if (isTodo) return (
              <div key={i} className={`flex items-start gap-2 text-sm ${isDone ? 'opacity-40 line-through' : ''}`}>
                <span className="mt-0.5 flex-shrink-0 text-xs">{isDone ? '☑' : '☐'}</span>
                <span className={isDone ? 'text-gray-400 dark:text-white/30' : 'text-gray-700 dark:text-white/80'}>{item.replace('[x] ', '').replace('[ ] ', '')}</span>
              </div>
            )
            if (item.startsWith('•')) return <p key={i} className="text-sm text-gray-600 dark:text-white/60 pl-2">{item}</p>
            return <p key={i} className="text-sm text-gray-700 dark:text-white/70 leading-relaxed">{item}</p>
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-black text-gray-700 dark:text-white/80">Today</p>
        <div className="flex items-center gap-4">
          {data?.lastUpdated && <span className="text-xs text-gray-400 dark:text-white/30">Last updated: {data.lastUpdated}</span>}
          <button onClick={refresh} className="text-xs text-gray-300 dark:text-white/20 hover:text-gray-600 dark:hover:text-white/50 transition-colors uppercase tracking-wider">Refresh</button>
        </div>
      </div>

      {data?.today && data.today.length > 0 && (
        <div className="bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 rounded-sm p-5">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 dark:text-blue-400 mb-3">📍 Today&apos;s Briefing</p>
          <div className="space-y-1.5">
            {data.today.filter(Boolean).map((item, i) => (
              <p key={i} className="text-sm text-gray-700 dark:text-white/80 leading-relaxed">{item}</p>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Section title="✅ Action Items" items={data?.actionItems ?? []} />
        <Section title="🗓️ Next 21 Days" items={data?.calendar ?? []} />
      </div>
      <Section title="🎬 Active Projects" items={data?.activeProjects ?? []} />
      <Section title="💷 Invoices & Payments" items={data?.invoices ?? []} />
      <Section title="📊 Business Snapshot" items={data?.businessSnapshot ?? []} />

      {data?.quickLinks && data.quickLinks.length > 0 && (
        <div className="bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-sm p-5">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/30 mb-3">🔗 Quick Links</p>
          <div className="flex flex-wrap gap-3">
            {data.quickLinks.filter(Boolean).map((link, i) => (
              <span key={i} className="text-sm text-gray-600 dark:text-white/60">{link}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Main Dashboard ───────────────────────────────────────────────────────────
export default function Dashboard() {
  const router = useRouter()
  const { theme, toggle } = useTheme()
  const [tab, setTab] = useState<'today'|'overview'|'content'|'agents'>('today')
  const [pipeline, setPipeline] = useState<PipelineData | null>(null)
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const now = new Date()
  const greeting = now.getHours() < 12 ? 'Good morning' : now.getHours() < 18 ? 'Good afternoon' : 'Good evening'

  useEffect(() => {
    fetch('/api/dashboard/pipeline').then(r => r.json()).then(d => !d.error && setPipeline(d)).catch(() => {})
  }, [])

  const logout = () => {
    document.cookie = 'mm_dashboard_auth=; Max-Age=0; path=/'
    router.push('/dashboard/login')
  }

  const TABS = [
    { id: 'today' as const, label: 'Today' },
    { id: 'overview' as const, label: 'Overview' },
    { id: 'content' as const, label: 'Content Hub' },
    { id: 'agents' as const, label: 'AI Team' },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-[#080808] text-gray-900 dark:text-white">
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>

      {selectedProject && <ProjectModal id={selectedProject} onClose={() => setSelectedProject(null)} />}

      <header className="border-b border-gray-200 dark:border-white/10 px-8 py-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 dark:text-white/30">MediaMurray</p>
          <h1 className="text-lg font-black">Command Centre</h1>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-sm text-gray-400 dark:text-white/40 hidden sm:block">
            {now.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })}
          </span>
          <button
            onClick={toggle}
            className="text-gray-400 dark:text-white/40 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"/></svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
            )}
          </button>
          <button onClick={logout} className="text-xs text-gray-300 dark:text-white/20 hover:text-gray-600 dark:hover:text-white/50 transition-colors uppercase tracking-wider">Sign out</button>
        </div>
      </header>

      <nav className="border-b border-gray-200 dark:border-white/10 px-8 flex gap-1">
        {TABS.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} className={`px-4 py-3 text-sm font-bold uppercase tracking-wider border-b-2 transition-colors -mb-px ${tab === t.id ? 'border-[#0052D4] text-gray-900 dark:text-white' : 'border-transparent text-gray-400 dark:text-white/30 hover:text-gray-600 dark:hover:text-white/60'}`}>
            {t.label}
          </button>
        ))}
      </nav>

      <main className="max-w-7xl mx-auto px-8 py-8">
        {tab === 'today' && <TodayTab />}

        {tab === 'overview' && (
          <div className="space-y-6">
            <p className="text-2xl font-black text-gray-700 dark:text-white/80">{greeting}, Jamie.</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2"><RevenueWidget /></div>
              <UpcomingWidget pipeline={pipeline} />
            </div>
            <PipelineWidget onSelectProject={setSelectedProject} />
            <CaptureWidget />
          </div>
        )}

        {tab === 'content' && (
          <div className="space-y-6">
            <p className="text-2xl font-black text-gray-700 dark:text-white/80">Content Hub</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <IdeasWidget />
              <ScriptGenerator />
            </div>
          </div>
        )}

        {tab === 'agents' && <AgentsPanel />}
      </main>
    </div>
  )
}
