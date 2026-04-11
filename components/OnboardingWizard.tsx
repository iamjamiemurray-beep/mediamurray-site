'use client'

import { useState } from 'react'
import Link from 'next/link'

/* ────────────────────────────────────────────────────────── */
/* Data                                                        */
/* ────────────────────────────────────────────────────────── */

const SERVICE_TYPES = [
  { id: 'video', label: 'Video Production', sub: 'Promo film, event coverage, retainer content' },
  { id: 'photo', label: 'Photography', sub: 'Corporate, event, location, product' },
  { id: 'hybrid', label: 'Video + Photography', sub: 'Both on the same day' },
  { id: 'editing', label: 'Editing Only', sub: "Post-production on your own footage" },
  { id: 'unsure', label: "I'm not sure yet", sub: 'Happy to be guided' },
]

const BUDGET_OPTIONS = [
  { id: 'under300', label: 'Under £300' },
  { id: '300_600', label: '£300 – £600' },
  { id: '600_1200', label: '£600 – £1,200' },
  { id: '1200plus', label: '£1,200+' },
  { id: 'unsure', label: "I don't know yet" },
]

const TIMELINE_OPTIONS = [
  { id: 'urgent', label: 'Within 2 weeks' },
  { id: 'month', label: '2–4 weeks' },
  { id: 'quarter', label: '1–3 months' },
  { id: 'flexible', label: 'Flexible / planning ahead' },
]

const RATES = [
  { type: 'Video', half: '£500', full: '£800' },
  { type: 'Photography', half: '£400', full: '£700' },
  { type: 'Video + Photo', half: '£600', full: '£900' },
]

const PROCESS_STEPS = [
  { n: '01', title: 'Brief', body: 'We align on what you need — goal, audience, deliverables, and timeline. Usually a 20-min call or email exchange.' },
  { n: '02', title: 'Quote', body: 'You receive a written quote within 24 hours. A 50% deposit secures your date.' },
  { n: '03', title: 'Shoot', body: 'I arrive prepared, handle everything on the day, and make the process smooth for you and your team.' },
  { n: '04', title: 'Deliver', body: 'Edited files delivered digitally — typically 3–4 weeks for video, 1–2 weeks for photography. One revision round included.' },
]

const TERMS_SUMMARY = [
  { title: 'Deposit', body: 'A non-refundable 50% deposit may be required to secure your date. This confirms acceptance of these terms.' },
  { title: 'Payment', body: 'Remaining balance invoiced on delivery. Due within 14 days unless otherwise agreed.' },
  { title: 'Cancellations', body: '14+ days notice: deposit retained, no further charge. 7–14 days: 75% of fee payable. Under 7 days: 100% payable.' },
  { title: 'Intellectual Property', body: 'MediaMurray retains copyright. A non-exclusive licence is granted for agreed usage. MediaMurray may use work for portfolio and promotional purposes.' },
  { title: 'Revisions', body: 'One revision round included. Additional revisions are charged at £75/hr.' },
  { title: 'Location Permits', body: "Most projects are filmed at the client's own premises. Where other locations are involved, we'll work through this together during the planning stage to identify what's needed. Any permissions or permits required for those locations are the client's responsibility." },
  { title: 'Governing Law', body: 'Governed by Scots law and subject to the exclusive jurisdiction of the Scottish courts.' },
]

const AGREEMENTS = [
  { id: 'terms', label: 'I have read and agree to the MediaMurray Terms & Conditions' },
  { id: 'privacy', label: 'I have read and agree to the Privacy Policy' },
  { id: 'footage', label: 'I understand MediaMurray may use footage from the project for portfolio and promotional purposes unless otherwise agreed in writing' },
  { id: 'deposit', label: 'I understand that a 50% deposit is required to confirm the booking and is non-refundable' },
  { id: 'cancellation', label: 'I understand the cancellation policy outlined above' },
]

/* ────────────────────────────────────────────────────────── */
/* Step definitions                                            */
/* ────────────────────────────────────────────────────────── */

const STEPS = [
  'Welcome',
  'Your Project',
  'About Us',
  'Services',
  'Process',
  'Policies',
  'Agreements',
  'Your Brief',
  'Complete',
]

/* ────────────────────────────────────────────────────────── */
/* Helpers                                                     */
/* ────────────────────────────────────────────────────────── */

function ProgressBar({ step, total }: { step: number; total: number }) {
  const pct = Math.round((step / (total - 1)) * 100)
  return (
    <div className="w-full mb-10">
      <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/30 mb-3">
        <span>Step {step + 1} of {total}</span>
        <span>{STEPS[step]}</span>
      </div>
      <div className="h-1 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full gradient-bg rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

function Btn({ onClick, children, variant = 'primary', disabled = false }: {
  onClick: () => void
  children: React.ReactNode
  variant?: 'primary' | 'ghost'
  disabled?: boolean
}) {
  if (variant === 'ghost') {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className="text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-white/40 hover:text-gray-700 dark:hover:text-white transition-colors disabled:opacity-30"
      >
        {children}
      </button>
    )
  }
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="gradient-bg text-white font-bold px-8 py-4 text-sm uppercase tracking-wider hover:opacity-90 transition-opacity disabled:opacity-40 rounded-sm"
    >
      {children}
    </button>
  )
}

function OptionCard({ selected, onClick, label, sub }: {
  selected: boolean
  onClick: () => void
  label: string
  sub?: string
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-5 border rounded-sm transition-all ${
        selected
          ? 'border-[#0052D4] bg-[#0052D4]/5 dark:bg-[#0052D4]/10'
          : 'border-gray-200 dark:border-white/10 hover:border-gray-400 dark:hover:border-white/30'
      }`}
    >
      <div className="flex items-start gap-3">
        <div className={`mt-0.5 w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${
          selected ? 'border-[#0052D4]' : 'border-gray-300 dark:border-white/30'
        }`}>
          {selected && <div className="w-2 h-2 rounded-full bg-[#0052D4]" />}
        </div>
        <div>
          <p className="font-bold text-gray-900 dark:text-white text-sm">{label}</p>
          {sub && <p className="text-xs text-gray-500 dark:text-white/40 mt-0.5">{sub}</p>}
        </div>
      </div>
    </button>
  )
}

/* ────────────────────────────────────────────────────────── */
/* Disqualified screen                                         */
/* ────────────────────────────────────────────────────────── */

function Disqualified({ onBack }: { onBack: () => void }) {
  return (
    <div className="text-center max-w-lg mx-auto py-8">
      <p className="text-4xl mb-6">👋</p>
      <h2 className="text-2xl font-black mb-4 text-gray-900 dark:text-white">Thanks for Getting in Touch</h2>
      <p className="text-gray-500 dark:text-white/50 leading-relaxed mb-6">
        Based on your budget, this project may be below the minimum day rate of £300. MediaMurray focuses on professional, brief-to-delivery projects — not volume work at low rates.
      </p>
      <p className="text-gray-500 dark:text-white/50 leading-relaxed mb-10">
        If your budget is flexible or you're planning a larger project, get in touch directly and we can discuss what's possible.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="mailto:mail@mediamurray.com"
          className="gradient-bg text-white font-bold px-8 py-4 text-sm uppercase tracking-wider hover:opacity-90 transition-opacity rounded-sm text-center"
        >
          Email Directly
        </a>
        <button
          onClick={onBack}
          className="text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-white/40 hover:text-gray-700 dark:hover:text-white transition-colors"
        >
          Go Back
        </button>
      </div>
    </div>
  )
}

/* ────────────────────────────────────────────────────────── */
/* Main wizard                                                 */
/* ────────────────────────────────────────────────────────── */

export default function OnboardingWizard() {
  const [step, setStep] = useState(0)
  const [disqualified, setDisqualified] = useState(false)
  const [service, setService] = useState('')
  const [budget, setBudget] = useState('')
  const [timeline, setTimeline] = useState('')
  const [agreements, setAgreements] = useState<Record<string, boolean>>({})
  const [brief, setBrief] = useState({ name: '', email: '', company: '', description: '', deliverables: '', dates: '', location: '', extras: '' })
  const [briefStatus, setBriefStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const allAgreed = AGREEMENTS.every((a) => agreements[a.id])
  const briefValid = brief.name && brief.email && brief.description

  const setB = (k: keyof typeof brief) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setBrief(prev => ({ ...prev, [k]: e.target.value }))

  const submitBrief = async () => {
    setBriefStatus('sending')
    try {
      const res = await fetch('/api/brief', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...brief, service }),
      })
      if (res.ok) { setBriefStatus('sent'); next() }
      else setBriefStatus('error')
    } catch {
      setBriefStatus('error')
    }
  }

  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1))
  const back = () => setStep((s) => Math.max(s - 1, 0))

  const handleBudget = (id: string) => {
    setBudget(id)
    if (id === 'under300') {
      setDisqualified(true)
    }
  }

  if (disqualified) {
    return (
      <div className="max-w-2xl mx-auto px-6">
        <Disqualified onBack={() => { setDisqualified(false); setBudget('') }} />
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-6">
      <ProgressBar step={step} total={STEPS.length} />

      {/* Step 0 — Welcome */}
      {step === 0 && (
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-3">Client Onboarding</p>
          <h1 className="text-4xl sm:text-5xl font-black mb-6 text-gray-900 dark:text-white">
            Welcome to<br /><span className="gradient-text">MediaMurray</span>
          </h1>
          <p className="text-gray-500 dark:text-white/50 text-lg leading-relaxed mb-4">
            This is where you start your project with me. It takes around 3 minutes.
          </p>
          <p className="text-gray-500 dark:text-white/50 leading-relaxed mb-10">
            You'll cover: what you need, how MediaMurray works, services and pricing, and the key policies. At the end, you'll confirm your agreements before we move forward.
          </p>
          <div className="flex gap-4 items-center flex-wrap">
            <Btn onClick={next}>Start Onboarding</Btn>
            <Link href="/contact" className="text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-white/40 hover:text-gray-700 dark:hover:text-white transition-colors">
              Skip — just contact me
            </Link>
          </div>
        </div>
      )}

      {/* Step 1 — Your Project */}
      {step === 1 && (
        <div>
          <h2 className="text-3xl font-black mb-2 text-gray-900 dark:text-white">Your Project</h2>
          <p className="text-gray-500 dark:text-white/50 mb-8">A few quick questions so I understand what you're after.</p>

          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-white/40 mb-4">What type of work do you need?</p>
            <div className="space-y-3">
              {SERVICE_TYPES.map((s) => (
                <OptionCard key={s.id} selected={service === s.id} onClick={() => setService(s.id)} label={s.label} sub={s.sub} />
              ))}
            </div>
          </div>

          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-white/40 mb-4">Timeline?</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {TIMELINE_OPTIONS.map((t) => (
                <OptionCard key={t.id} selected={timeline === t.id} onClick={() => setTimeline(t.id)} label={t.label} />
              ))}
            </div>
          </div>

          <div className="flex gap-6 items-center">
            <Btn onClick={next} disabled={!service || !timeline}>Continue</Btn>
            <Btn onClick={back} variant="ghost">Back</Btn>
          </div>
        </div>
      )}

      {/* Step 2 — About Us */}
      {step === 2 && (
        <div>
          <h2 className="text-3xl font-black mb-2 text-gray-900 dark:text-white">About MediaMurray</h2>
          <p className="text-gray-500 dark:text-white/50 mb-8">Who you're working with.</p>

          <div className="space-y-5 text-gray-600 dark:text-white/60 leading-relaxed mb-8">
            <p>
              I'm Jamie Murray — a Scottish-based videographer, photographer and editor working with businesses, organisations, agencies, charities and individuals across Scotland and the UK.
            </p>
            <p>
              Since graduating with a First Class degree in Television Production from Edinburgh Napier University in 2020, I've delivered over 170 client projects. Work spans promotional films, event coverage, social media content, photography and post-production.
            </p>
            <p>
              On most projects I handle filming and editing myself — one point of accountability, brief through to delivery.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { label: 'Projects', value: '170+' },
              { label: 'Years active', value: '6+' },
              { label: 'Camera', value: 'Sony a7IV + a7III' },
              { label: 'Aerial', value: 'DJI Mini 5 Pro' },
            ].map((d) => (
              <div key={d.label} className="bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 p-4 rounded-sm">
                <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-white/30 mb-1">{d.label}</p>
                <p className="font-black text-gray-900 dark:text-white">{d.value}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 p-5 rounded-sm mb-10">
            <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-white/30 mb-2">Past clients include</p>
            <p className="text-sm text-gray-600 dark:text-white/60 leading-relaxed">
              BBC Scotland, BBC Sport, BBC Social, LowlandRFCA, Scottish Parliament, RangersTV, Scottish Fair Trade, Frame, Visit Bute, Rothesay Joint Campus, and 160+ others.
            </p>
          </div>

          <div className="flex gap-6 items-center">
            <Btn onClick={next}>Continue</Btn>
            <Btn onClick={back} variant="ghost">Back</Btn>
          </div>
        </div>
      )}

      {/* Step 3 — Services */}
      {step === 3 && (
        <div>
          <h2 className="text-3xl font-black mb-2 text-gray-900 dark:text-white">Services & Pricing</h2>
          <p className="text-gray-500 dark:text-white/50 mb-8">What's available and what it costs.</p>

          <div className="space-y-4 mb-10">
            {[
              { title: 'Promotional Video', desc: 'Story-led films for businesses, charities and organisations. Brief to finished film, end-to-end.' },
              { title: 'Event Coverage', desc: 'Conferences, awards, ceremonies and live events filmed and edited professionally.' },
              { title: 'Photography', desc: 'Corporate portraits, event photography, product and location shoots across Scotland.' },
              { title: 'Retainer Package', desc: 'Monthly video and social content on a retainer — consistent output, agreed in advance.' },
              { title: 'Content Days', desc: 'A full day producing multiple assets — video, reels, photography — in one session.' },
              { title: 'Editing Only', desc: "Post-production on your own footage — you provide the raw files, I deliver the edit." },
            ].map((s) => (
              <div key={s.title} className="flex gap-4 items-start">
                <div className="w-1 flex-shrink-0 bg-[#0052D4] self-stretch rounded-full mt-1" />
                <div>
                  <p className="font-black text-gray-900 dark:text-white text-sm">{s.title}</p>
                  <p className="text-sm text-gray-500 dark:text-white/50 mt-0.5">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border border-gray-200 dark:border-white/10 rounded-sm overflow-hidden mb-10">
            <div className="bg-gray-50 dark:bg-white/[0.03] px-5 py-3 border-b border-gray-200 dark:border-white/10">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/40">Standard Day Rates</p>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 dark:border-white/5">
                  <th className="text-left px-5 py-3 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/30">Service</th>
                  <th className="text-right px-5 py-3 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/30">Half Day</th>
                  <th className="text-right px-5 py-3 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/30">Full Day</th>
                </tr>
              </thead>
              <tbody>
                {RATES.map((r, i) => (
                  <tr key={r.type} className={i < RATES.length - 1 ? 'border-b border-gray-100 dark:border-white/5' : ''}>
                    <td className="px-5 py-4 font-medium text-gray-900 dark:text-white">{r.type}</td>
                    <td className="px-5 py-4 text-right font-black gradient-text">{r.half}</td>
                    <td className="px-5 py-4 text-right font-black gradient-text">{r.full}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="px-5 py-3 bg-gray-50 dark:bg-white/[0.02] border-t border-gray-100 dark:border-white/5">
              <p className="text-xs text-gray-400 dark:text-white/30">Bespoke project rates quoted individually. All rates subject to scope — discussed at brief stage.</p>
            </div>
          </div>

          <div className="flex gap-6 items-center">
            <Btn onClick={next}>Continue</Btn>
            <Btn onClick={back} variant="ghost">Back</Btn>
          </div>
        </div>
      )}

      {/* Step 4 — Process */}
      {step === 4 && (
        <div>
          <h2 className="text-3xl font-black mb-2 text-gray-900 dark:text-white">How It Works</h2>
          <p className="text-gray-500 dark:text-white/50 mb-10">From first contact to final delivery.</p>

          <div className="space-y-8 mb-10">
            {PROCESS_STEPS.map((p, i) => (
              <div key={p.n} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <span className="text-3xl font-black gradient-text">{p.n}</span>
                </div>
                <div className="pt-1.5">
                  <p className="font-black text-gray-900 dark:text-white mb-1">{p.title}</p>
                  <p className="text-sm text-gray-500 dark:text-white/50 leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 p-5 rounded-sm mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/40 mb-2">What to expect</p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-white/60">
              <li className="flex gap-2"><span className="text-[#0052D4] font-bold flex-shrink-0">—</span> Response within 24 hours of initial enquiry</li>
              <li className="flex gap-2"><span className="text-[#0052D4] font-bold flex-shrink-0">—</span> Written quote with clear scope before any work begins</li>
              <li className="flex gap-2"><span className="text-[#0052D4] font-bold flex-shrink-0">—</span> Single point of contact throughout</li>
              <li className="flex gap-2"><span className="text-[#0052D4] font-bold flex-shrink-0">—</span> Files delivered via download link, ready to use</li>
            </ul>
          </div>

          <div className="flex gap-6 items-center">
            <Btn onClick={next}>Continue</Btn>
            <Btn onClick={back} variant="ghost">Back</Btn>
          </div>
        </div>
      )}

      {/* Step 5 — Policies */}
      {step === 5 && (
        <div>
          <h2 className="text-3xl font-black mb-2 text-gray-900 dark:text-white">Policies & Terms</h2>
          <p className="text-gray-500 dark:text-white/50 mb-8">
            Key points from the{' '}
            <Link href="/terms-and-conditions" target="_blank" className="text-[#0052D4] hover:text-[#00C6FF] transition-colors font-medium">
              full Terms & Conditions
            </Link>
            ,{' '}
            <Link href="/privacy-policy" target="_blank" className="text-[#0052D4] hover:text-[#00C6FF] transition-colors font-medium">
              Privacy Policy
            </Link>
            {' '}and footage usage rights. Please read these before proceeding.
          </p>

          <div className="space-y-5 mb-10">
            {TERMS_SUMMARY.map((t) => (
              <div key={t.title} className="flex gap-4 items-start">
                <div className="w-1 h-auto self-stretch flex-shrink-0 bg-[#0052D4] rounded-full" />
                <div>
                  <p className="font-black text-sm text-gray-900 dark:text-white">{t.title}</p>
                  <p className="text-sm text-gray-500 dark:text-white/50 mt-0.5 leading-relaxed">{t.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 dark:bg-amber-500/5 border border-amber-200 dark:border-amber-500/20 p-4 rounded-sm mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-1">Footage usage</p>
            <p className="text-sm text-amber-800 dark:text-amber-300/80 leading-relaxed">
              By default, MediaMurray may use footage, photos and edits from your project for portfolio, website and social media. If you require full exclusivity, this must be agreed in writing and may affect pricing.
            </p>
          </div>

          <div className="flex gap-6 items-center">
            <Btn onClick={next}>Continue to Agreements</Btn>
            <Btn onClick={back} variant="ghost">Back</Btn>
          </div>
        </div>
      )}

      {/* Step 6 — Agreements */}
      {step === 6 && (
        <div>
          <h2 className="text-3xl font-black mb-2 text-gray-900 dark:text-white">Your Agreements</h2>
          <p className="text-gray-500 dark:text-white/50 mb-8">Please confirm each of the following before completing your onboarding.</p>

          <div className="space-y-4 mb-10">
            {AGREEMENTS.map((a) => (
              <label
                key={a.id}
                className={`flex gap-4 items-start p-5 border rounded-sm cursor-pointer transition-all ${
                  agreements[a.id]
                    ? 'border-[#0052D4] bg-[#0052D4]/5 dark:bg-[#0052D4]/10'
                    : 'border-gray-200 dark:border-white/10 hover:border-gray-400 dark:hover:border-white/30'
                }`}
              >
                <div className={`mt-0.5 w-5 h-5 flex-shrink-0 border-2 rounded-sm flex items-center justify-center transition-colors ${
                  agreements[a.id] ? 'border-[#0052D4] bg-[#0052D4]' : 'border-gray-300 dark:border-white/30'
                }`}>
                  {agreements[a.id] && (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={!!agreements[a.id]}
                  onChange={(e) => setAgreements((prev) => ({ ...prev, [a.id]: e.target.checked }))}
                />
                <span className="text-sm text-gray-700 dark:text-white/70 leading-relaxed">{a.label}</span>
              </label>
            ))}
          </div>

          {!allAgreed && (
            <p className="text-xs text-gray-400 dark:text-white/30 mb-6">Please confirm all agreements to continue.</p>
          )}

          <div className="flex gap-6 items-center">
            <Btn onClick={next} disabled={!allAgreed}>Complete Onboarding</Btn>
            <Btn onClick={back} variant="ghost">Back</Btn>
          </div>
        </div>
      )}

      {/* Step 7 — Your Brief */}
      {step === 7 && (
        <div>
          <h2 className="text-3xl font-black mb-2 text-gray-900 dark:text-white">Your Project Brief</h2>
          <p className="text-gray-500 dark:text-white/50 mb-8">Fill this in and I'll come back with a tailored quote within 24 hours.</p>

          {(() => {
            const inputClass = "w-full bg-transparent border border-gray-200 dark:border-white/10 px-5 py-4 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/30 focus:outline-none focus:border-[#0052D4] transition-colors rounded-sm"
            return (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/40 mb-2">Full Name *</label>
                    <input type="text" required value={brief.name} onChange={setB('name')} placeholder="Your name" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/40 mb-2">Email *</label>
                    <input type="email" required value={brief.email} onChange={setB('email')} placeholder="your@email.com" className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/40 mb-2">Company / Organisation</label>
                  <input type="text" value={brief.company} onChange={setB('company')} placeholder="Optional" className={inputClass} />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/40 mb-2">Project Description *</label>
                  <textarea required value={brief.description} onChange={setB('description')} placeholder="What do you need? What's the goal?" rows={4} className={`${inputClass} resize-none`} />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/40 mb-2">Key Deliverables</label>
                  <input type="text" value={brief.deliverables} onChange={setB('deliverables')} placeholder="e.g. 2-min promo film + 3 social clips" className={inputClass} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/40 mb-2">Preferred Date(s)</label>
                    <input type="text" value={brief.dates} onChange={setB('dates')} placeholder="e.g. mid-May, flexible" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/40 mb-2">Location / Venue</label>
                    <input type="text" value={brief.location} onChange={setB('location')} placeholder="Where will filming take place?" className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/40 mb-2">Anything else?</label>
                  <textarea value={brief.extras} onChange={setB('extras')} placeholder="Budget, special requirements, questions…" rows={3} className={`${inputClass} resize-none`} />
                </div>
                {briefStatus === 'error' && (
                  <p className="text-red-500 text-sm">Something went wrong. Please email <a href="mailto:mail@mediamurray.com" className="underline">mail@mediamurray.com</a> directly.</p>
                )}
                <div className="flex gap-6 items-center pt-2">
                  <Btn onClick={submitBrief} disabled={!briefValid || briefStatus === 'sending'}>
                    {briefStatus === 'sending' ? 'Sending…' : 'Submit Brief'}
                  </Btn>
                  <Btn onClick={back} variant="ghost">Back</Btn>
                </div>
              </div>
            )
          })()}
        </div>
      )}

      {/* Step 8 — Complete */}
      {step === 8 && (
        <div className="text-center py-8">
          <div className="w-16 h-16 gradient-bg rounded-sm flex items-center justify-center mx-auto mb-8">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-black mb-4 text-gray-900 dark:text-white">You're All Set</h2>
          <p className="text-gray-500 dark:text-white/50 leading-relaxed mb-3 max-w-md mx-auto">
            Onboarding complete. Your agreements are confirmed. The next step is to get in touch with your project details so I can send a written quote.
          </p>
          <p className="text-gray-500 dark:text-white/50 text-sm mb-10">I aim to respond within 24 hours.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:mail@mediamurray.com?subject=New Project Enquiry"
              className="gradient-bg text-white font-bold px-8 py-4 text-sm uppercase tracking-wider hover:opacity-90 transition-opacity rounded-sm"
            >
              Email Your Brief
            </a>
            <Link
              href="/contact"
              className="border border-gray-200 dark:border-white/10 text-gray-700 dark:text-white/70 font-bold px-8 py-4 text-sm uppercase tracking-wider hover:border-gray-400 dark:hover:border-white/30 transition-colors rounded-sm"
            >
              Use Contact Form
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10">
            <p className="text-xs text-gray-400 dark:text-white/30 mb-4">Quick links</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/work" className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/30 hover:text-gray-700 dark:hover:text-white transition-colors">View Work</Link>
              <Link href="/testimonials" className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/30 hover:text-gray-700 dark:hover:text-white transition-colors">Testimonials</Link>
              <Link href="/terms-and-conditions" target="_blank" className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/30 hover:text-gray-700 dark:hover:text-white transition-colors">Full T&Cs</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
