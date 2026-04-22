'use client'

import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'

// ─── Types ────────────────────────────────────────────────────────────────────
const PIPELINE_STAGES = ['Enquiry', 'Booked', 'Filming', 'Editing', 'Delivered', 'Complete']
const STAGE_COLOURS: Record<string, string> = {
  Enquiry:   'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  Booked:    'bg-blue-500/20 text-blue-300 border-blue-500/30',
  Filming:   'bg-purple-500/20 text-purple-300 border-purple-500/30',
  Editing:   'bg-orange-500/20 text-orange-300 border-orange-500/30',
  Delivered: 'bg-green-500/20 text-green-300 border-green-500/30',
  Complete:  'bg-green-500/20 text-green-300 border-green-500/30',
}

type Client = { id: string; name: string; email: string; deliverables: string; date: string }
type PipelineData = { grouped: Record<string, Client[]> }
type RevenueData = { total: number; target: number; percent: number; payments: { name: string; amount: number; date: string }[]; month: string }
type ProjectField = { label: string; value: string }
type ProjectDetail = { fields: ProjectField[]; notionUrl: string }
type Idea = { id: string; title: string; status: string; platform: string; creator: string; actionPoints: string; score: number | null; url: string; created: string }

const STATUS_COLOURS: Record<string, string> = {
  New:           'bg-blue-500/20 text-blue-300 border-blue-500/30',
  'In Progress': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  Done:          'bg-green-500/20 text-green-300 border-green-500/30',
  Actioned:      'bg-green-500/20 text-green-300 border-green-500/30',
}

// ─── Agent definitions ────────────────────────────────────────────────────────
const AGENTS = [
  {
    id: 'researcher',
    name: 'Researcher',
    tags: ['INTEL', 'ANALYSIS'],
    description: 'Scans your Idea Bank for content trends, gaps, and the best idea to act on this week.',
    accentColor: 'cyan',
    border: 'border-cyan-500/40',
    glow: 'shadow-cyan-500/10',
    tagColor: 'text-cyan-400 border-cyan-500/30',
  },
  {
    id: 'scriptwriter',
    name: 'Scriptwriter',
    tags: ['COPY', 'ASSETS'],
    description: 'Takes your top unactioned idea and writes a ready-to-shoot short-form script.',
    accentColor: 'purple',
    border: 'border-purple-500/40',
    glow: 'shadow-purple-500/10',
    tagColor: 'text-purple-400 border-purple-500/30',
  },
  {
    id: 'pipeline',
    name: 'Pipeline Checker',
    tags: ['OPS', 'CRM'],
    description: 'Reviews active projects and tells you what needs to move this week.',
    accentColor: 'orange',
    border: 'border-orange-500/40',
    glow: 'shadow-orange-500/10',
    tagColor: 'text-orange-400 border-orange-500/30',
  },
  {
    id: 'hooks',
    name: 'Hook Scout',
    tags: ['INTEL', 'HOOKS'],
    description: 'Pulls latest videos from Peter McKinnon, Mark Bone, WhoisMattJohnson, Danny Gevirtz & Matti Haapoja — finds what hooks are working right now.',
    accentColor: 'green',
    border: 'border-green-500/40',
    glow: 'shadow-green-500/10',
    tagColor: 'text-green-400 border-green-500/30',
  },
] as const

type AgentId = typeof AGENTS[number]['id']
type AgentState = { status: 'idle' | 'running' | 'done' | 'error'; result: string; ts: string }

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
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div className="w-full max-w-md h-full bg-[#0e0e0e] border-l border-white/10 overflow-y-auto p-8 flex flex-col" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/30">Project Details</p>
          <button onClick={onClose} className="text-white/30 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
        {loading && <p className="text-white/30 text-sm animate-pulse">Loading…</p>}
        {data && (
          <>
            <div className="space-y-4 flex-1">
              {data.fields.map((f, i) => (
                <div key={i} className="border-b border-white/5 pb-4">
                  <p className="text-xs uppercase tracking-wider text-white/30 mb-1">{f.label}</p>
                  <p className="text-sm text-white break-words">{f.value}</p>
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
    <div className="bg-white/[0.03] border border-white/10 rounded-sm p-6">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 mb-4">Revenue — {data?.month ?? '…'}</p>
      {error && <p className="text-white/30 text-sm">Could not load.</p>}
      {!data && !error && <p className="text-white/20 text-sm animate-pulse">Loading…</p>}
      {data && (
        <>
          <div className="flex items-end gap-3 mb-4">
            <span className="text-4xl font-black text-white">£{data.total.toLocaleString('en-GB')}</span>
            <span className="text-white/30 text-sm mb-1">/ £{data.target.toLocaleString('en-GB')} target</span>
          </div>
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-2">
            <div className="h-full rounded-full transition-all duration-700" style={{ width: `${Math.min(data.percent, 100)}%`, background: data.percent >= 100 ? '#22c55e' : 'linear-gradient(90deg,#0052D4,#00C6FF)' }} />
          </div>
          <p className="text-xs text-white/30 mb-4">{data.percent}% of target</p>
          {data.payments.length > 0 && (
            <div className="space-y-1 border-t border-white/5 pt-4">
              {data.payments.map((p, i) => (
                <div key={i} className="flex justify-between text-sm">
                  <span className="text-white/60 truncate">{p.name}</span>
                  <span className="text-white font-bold ml-4">£{p.amount.toLocaleString('en-GB')}</span>
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
    <div className="bg-white/[0.03] border border-white/10 rounded-sm p-6">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 mb-4">Upcoming Shoots</p>
      {!pipeline && <p className="text-white/20 text-sm animate-pulse">Loading…</p>}
      {pipeline && booked.length === 0 && <p className="text-white/20 text-sm">No shoots booked yet.</p>}
      {booked.map(c => (
        <div key={c.id} className="flex items-start gap-3 py-2 border-b border-white/5 last:border-0">
          <div className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0 mt-1.5" />
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-bold truncate">{c.name}</p>
            {c.deliverables && <p className="text-white/40 text-xs truncate">{c.deliverables}</p>}
          </div>
          {c.date && <span className="text-white/30 text-xs flex-shrink-0">{c.date}</span>}
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
    <div className="bg-white/[0.03] border border-white/10 rounded-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/30">Client Pipeline</p>
        <button onClick={load} className="text-xs text-white/20 hover:text-white/50 transition-colors">Refresh</button>
      </div>
      {error && <p className="text-white/30 text-sm">Could not load.</p>}
      {!data && !error && <p className="text-white/20 text-sm animate-pulse">Loading…</p>}
      {data && (
        <div className="overflow-x-auto">
          <div className="flex gap-4 min-w-max">
            {PIPELINE_STAGES.map(stage => {
              const clients = data.grouped[stage] ?? []
              return (
                <div key={stage} className="w-52 flex-shrink-0">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-white/50">{stage}</span>
                    <span className="text-xs bg-white/10 text-white/40 rounded-full px-2 py-0.5">{clients.length}</span>
                  </div>
                  <div className="space-y-2">
                    {clients.length === 0 && <div className="border border-dashed border-white/10 rounded-sm p-3 text-xs text-white/20">Empty</div>}
                    {clients.map(c => (
                      <button key={c.id} onClick={() => onSelectProject(c.id)} className={`w-full text-left border rounded-sm p-3 text-xs hover:brightness-125 transition-all ${STAGE_COLOURS[stage] ?? 'bg-white/5 text-white/50 border-white/10'}`}>
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
    <div className="bg-white/[0.03] border border-white/10 rounded-sm p-6">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 mb-4">Quick Capture → Idea Bank</p>
      <form onSubmit={save} className="flex gap-3">
        <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Drop an idea — saves straight to Notion Idea Bank" className="flex-1 bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#0052D4] transition-colors rounded-sm" />
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
    <div className="bg-white/[0.03] border border-white/10 rounded-sm p-6">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/30">Idea Bank</p>
        <div className="flex gap-2 flex-wrap">
          {statuses.map(s => (
            <button key={s} onClick={() => setFilter(s)} className={`text-xs px-3 py-1 rounded-full border transition-colors ${filter === s ? 'bg-white/20 text-white border-white/30' : 'text-white/30 border-white/10 hover:border-white/30'}`}>{s}</button>
          ))}
        </div>
      </div>
      {error && <p className="text-white/30 text-sm">Could not load — make sure Idea Bank is shared with MMCommandCentre.</p>}
      {loading && !error && <p className="text-white/20 text-sm animate-pulse">Loading…</p>}
      {!loading && !error && (
        <div className="space-y-3 max-h-[500px] overflow-y-auto">
          {filtered.length === 0 && <p className="text-white/20 text-sm">No ideas with this status.</p>}
          {filtered.map(idea => (
            <div key={idea.id} className="border border-white/10 rounded-sm p-4 hover:border-white/20 transition-colors">
              <div className="flex items-start justify-between gap-3 mb-2">
                <p className="text-sm font-bold text-white leading-snug">{idea.title}</p>
                <span className={`text-xs px-2 py-0.5 rounded-full border flex-shrink-0 ${STATUS_COLOURS[idea.status] ?? 'bg-white/5 text-white/40 border-white/10'}`}>{idea.status}</span>
              </div>
              {idea.actionPoints && <p className="text-xs text-white/50 mb-2 line-clamp-2">{idea.actionPoints}</p>}
              <div className="flex items-center gap-3 text-xs text-white/30">
                {idea.platform && <span>{idea.platform}</span>}
                {idea.creator && <span>by {idea.creator}</span>}
                {idea.score != null && <span>Score: {idea.score}/10</span>}
                {idea.url && <a href={idea.url} target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">↗ Source</a>}
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

  const inputClass = "w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#0052D4] transition-colors rounded-sm"

  return (
    <div className="bg-white/[0.03] border border-white/10 rounded-sm p-6">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 mb-4">AI Script Generator</p>
      <form onSubmit={generate} className="space-y-3 mb-6">
        <input type="text" value={topic} onChange={e => setTopic(e.target.value)} placeholder="Topic (e.g. why hire a videographer for your event)" className={inputClass} />
        <input type="text" value={hook} onChange={e => setHook(e.target.value)} placeholder="Opening hook (optional)" className={inputClass} />
        <button type="submit" disabled={loading || !topic.trim()} className="gradient-bg text-white font-bold px-8 py-3 text-sm rounded-sm disabled:opacity-40 uppercase tracking-wider w-full">
          {loading ? 'Writing…' : 'Generate Script'}
        </button>
      </form>
      {error && <p className="text-red-400 text-sm mb-4">{error === 'No API key' ? 'Add ANTHROPIC_API_KEY to Vercel env vars to enable this.' : error}</p>}
      {script && (
        <div className="bg-black/40 border border-white/10 rounded-sm p-5">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white/30">Generated Script</p>
            <button onClick={() => navigator.clipboard.writeText(script)} className="text-xs text-white/30 hover:text-white/60 transition-colors">Copy</button>
          </div>
          <pre className="text-sm text-white/80 whitespace-pre-wrap font-mono leading-relaxed">{script}</pre>
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
    <div className={`bg-[#0a0a0a] border ${agent.border} rounded-sm p-5 shadow-lg ${agent.glow} flex flex-col gap-4`}>
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-2">
            {agent.tags.map(tag => (
              <span key={tag} className={`text-[10px] font-bold uppercase tracking-widest border px-2 py-0.5 rounded-full ${agent.tagColor}`}>{tag}</span>
            ))}
          </div>
          <h3 className="text-base font-black text-white">{agent.name}</h3>
          <p className="text-xs text-white/40 mt-1 leading-relaxed">{agent.description}</p>
        </div>
        <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 mt-1 ${isRunning ? 'bg-green-400 animate-pulse' : isDone ? 'bg-green-500' : isError ? 'bg-red-500' : 'bg-white/20'}`} />
      </div>

      {/* Progress bar */}
      {isRunning && (
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full rounded-full animate-[slide_1.5s_ease-in-out_infinite]" style={{ width: '40%', background: 'linear-gradient(90deg,transparent,#00C6FF,transparent)', backgroundSize: '200% 100%', animation: 'shimmer 1.5s infinite' }} />
        </div>
      )}

      {/* Status row */}
      <div className="flex items-center justify-between">
        <span className={`text-xs font-bold uppercase tracking-wider ${isRunning ? 'text-green-400' : isDone ? 'text-green-400' : isError ? 'text-red-400' : 'text-white/20'}`}>
          {isRunning ? '● Running' : isDone ? '✓ Complete' : isError ? '✕ Error' : '○ Idle'}
          {state.ts && !isRunning && <span className="ml-2 font-normal text-white/20">{state.ts}</span>}
        </span>
        <button
          onClick={() => onRun(agent.id)}
          disabled={isRunning}
          className={`text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-sm border transition-all disabled:opacity-40 disabled:cursor-not-allowed ${agent.border} ${agent.tagColor} hover:bg-white/5`}
        >
          {isRunning ? 'Running…' : 'Run Agent'}
        </button>
      </div>

      {/* Results */}
      {(isDone || isError) && state.result && (
        <div className="border-t border-white/10 pt-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">Output</p>
            {isDone && (
              <button onClick={() => navigator.clipboard.writeText(state.result)} className="text-[10px] text-white/20 hover:text-white/50 transition-colors uppercase tracking-wider">Copy</button>
            )}
          </div>
          <div className="max-h-64 overflow-y-auto">
            <p className={`text-xs leading-relaxed whitespace-pre-wrap ${isError ? 'text-red-400' : 'text-white/70'}`}>{state.result}</p>
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
        <p className="text-2xl font-black text-white/80">AI Team</p>
        <span className="text-xs font-bold uppercase tracking-widest border border-cyan-500/40 text-cyan-400 px-3 py-1 rounded-full">
          {AGENTS.length} Agents{activeCount > 0 ? ` · ${activeCount} Running` : ''}
        </span>
      </div>

      <div className="bg-white/[0.02] border border-white/5 rounded-sm px-5 py-3 text-xs text-white/30 leading-relaxed">
        Each agent connects to your live Notion data and uses Claude AI to generate insights, scripts, and action plans. Results appear directly in the card — you can copy and act on them straight away.
        {' '}<span className="text-white/20">Requires ANTHROPIC_API_KEY in Vercel.</span>
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

// ─── Main Dashboard ───────────────────────────────────────────────────────────
export default function Dashboard() {
  const router = useRouter()
  const [tab, setTab] = useState<'overview'|'content'|'agents'>('overview')
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
    { id: 'overview' as const, label: 'Overview' },
    { id: 'content' as const, label: 'Content Hub' },
    { id: 'agents' as const, label: 'AI Team' },
  ]

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>

      {selectedProject && <ProjectModal id={selectedProject} onClose={() => setSelectedProject(null)} />}

      <header className="border-b border-white/10 px-8 py-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/30">MediaMurray</p>
          <h1 className="text-lg font-black">Command Centre</h1>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-sm text-white/40 hidden sm:block">
            {now.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })}
          </span>
          <button onClick={logout} className="text-xs text-white/20 hover:text-white/50 transition-colors uppercase tracking-wider">Sign out</button>
        </div>
      </header>

      <nav className="border-b border-white/10 px-8 flex gap-1">
        {TABS.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} className={`px-4 py-3 text-sm font-bold uppercase tracking-wider border-b-2 transition-colors -mb-px ${tab === t.id ? 'border-[#0052D4] text-white' : 'border-transparent text-white/30 hover:text-white/60'}`}>
            {t.label}
          </button>
        ))}
      </nav>

      <main className="max-w-7xl mx-auto px-8 py-8">
        {tab === 'overview' && (
          <div className="space-y-6">
            <p className="text-2xl font-black text-white/80">{greeting}, Jamie.</p>
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
            <p className="text-2xl font-black text-white/80">Content Hub</p>
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
