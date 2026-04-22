'use client'

import { useState } from 'react'

type ProjectType = 'video' | 'photography' | 'event' | 'content-day'
type Scale = 'half-day' | 'full-day' | 'multi-day'
type Location = 'central-belt' | 'scotland' | 'uk'
type Extra = 'drone' | 'rush-edit' | 'social-cuts'

interface Answers {
  type: ProjectType | null
  scale: Scale | null
  location: Location | null
  extras: Extra[]
}

const questions = [
  {
    id: 'type',
    label: 'What kind of project is this?',
    multi: false,
    options: [
      { value: 'video', label: 'Video & Editing', desc: 'Corporate, promotional and brand films' },
      { value: 'photography', label: 'Photography', desc: 'Events, portraits, product and lifestyle' },
      { value: 'event', label: 'Event Coverage', desc: 'Full event — video and photo combined' },
      { value: 'content-day', label: 'Content Day', desc: 'Maximum output for weeks of social content' },
    ],
  },
  {
    id: 'scale',
    label: 'How long is the shoot?',
    multi: false,
    options: [
      { value: 'half-day', label: 'Half Day', desc: '3 hours on location' },
      { value: 'full-day', label: 'Full Day', desc: 'Up to 5 hours on location' },
      { value: 'multi-day', label: 'Multi Day', desc: '2 or more shoot days' },
    ],
  },
  {
    id: 'location',
    label: 'Where is the project?',
    multi: false,
    options: [
      { value: 'central-belt', label: 'Central Belt', desc: 'Glasgow or Edinburgh — no travel costs' },
      { value: 'scotland', label: 'Wider Scotland', desc: 'Highlands, Islands, or remote locations' },
      { value: 'uk', label: 'Rest of UK', desc: 'England, Wales, Northern Ireland' },
    ],
  },
  {
    id: 'extras',
    label: 'Anything else needed?',
    multi: true,
    options: [
      { value: 'drone', label: 'Drone Footage', desc: 'Licensed aerial shots (A2 CofC)' },
      { value: 'rush-edit', label: 'Rush Turnaround', desc: '48-hour edit delivery' },
      { value: 'social-cuts', label: 'Additional Social Media Cuts', desc: 'Reels/Shorts edits from the main footage' },
    ],
  },
]

const typeLabels: Record<ProjectType, string> = {
  video: 'Video & Editing',
  photography: 'Photography',
  event: 'Event Coverage',
  'content-day': 'Content Day',
}

const scaleLabels: Record<Scale, string> = {
  'half-day': 'Half Day (3 hrs)',
  'full-day': 'Full Day (up to 5 hrs)',
  'multi-day': 'Multi Day (2+ days)',
}

const locationLabels: Record<Location, string> = {
  'central-belt': 'Central Belt (Glasgow / Edinburgh)',
  scotland: 'Wider Scotland',
  uk: 'Rest of UK',
}

const extraLabels: Record<Extra, string> = {
  drone: 'Drone Footage',
  'rush-edit': 'Rush Turnaround (48-hr)',
  'social-cuts': 'Additional Social Media Cuts',
}

function getEstimate(answers: Answers): { low: number; high: number } {
  const matrix: Record<ProjectType, Record<Scale, [number, number]>> = {
    video: {
      'half-day': [375, 550],
      'full-day': [550, 800],
      'multi-day': [950, 1600],
    },
    photography: {
      'half-day': [375, 500],
      'full-day': [500, 750],
      'multi-day': [850, 1400],
    },
    event: {
      'half-day': [400, 650],
      'full-day': [650, 950],
      'multi-day': [1100, 2000],
    },
    'content-day': {
      'half-day': [500, 700],
      'full-day': [800, 1100],
      'multi-day': [1500, 2500],
    },
  }

  let [low, high] = answers.type && answers.scale
    ? matrix[answers.type][answers.scale]
    : [375, 500]

  if (answers.location === 'scotland') { low += 75; high += 150 }
  if (answers.location === 'uk') { low += 150; high += 300 }

  if (answers.extras.includes('drone')) { low += 100; high += 200 }
  if (answers.extras.includes('rush-edit')) { low += 100; high += 200 }
  if (answers.extras.includes('social-cuts')) { low += 100; high += 200 }

  return { low, high }
}

export default function StartPage() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Answers>({ type: null, scale: null, location: null, extras: [] })
  const [done, setDone] = useState(false)

  // Enquiry form state
  const [formName, setFormName] = useState('')
  const [formEmail, setFormEmail] = useState('')
  const [formCompany, setFormCompany] = useState('')
  const [formNotes, setFormNotes] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const current = questions[step]

  function select(value: string) {
    if (step === 0) setAnswers(a => ({ ...a, type: value as ProjectType }))
    if (step === 1) setAnswers(a => ({ ...a, scale: value as Scale }))
    if (step === 2) setAnswers(a => ({ ...a, location: value as Location }))
    if (step === 3) {
      setAnswers(a => {
        const extras = a.extras.includes(value as Extra)
          ? a.extras.filter(e => e !== value)
          : [...a.extras, value as Extra]
        return { ...a, extras }
      })
    }
  }

  function isSelected(value: string) {
    if (step === 0) return answers.type === value
    if (step === 1) return answers.scale === value
    if (step === 2) return answers.location === value
    if (step === 3) return answers.extras.includes(value as Extra)
    return false
  }

  function canAdvance() {
    if (step === 0) return answers.type !== null
    if (step === 1) return answers.scale !== null
    if (step === 2) return answers.location !== null
    return true
  }

  function advance() {
    if (step < questions.length - 1) {
      setStep(s => s + 1)
    } else {
      setDone(true)
    }
  }

  function reset() {
    setDone(false)
    setSubmitted(false)
    setSubmitError('')
    setFormName(''); setFormEmail(''); setFormCompany(''); setFormNotes('')
    setStep(0)
    setAnswers({ type: null, scale: null, location: null, extras: [] })
  }

  async function submitEnquiry(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setSubmitError('')
    try {
      const res = await fetch('/api/planner-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formName,
          email: formEmail,
          company: formCompany,
          notes: formNotes,
          answers: {
            type: answers.type,
            scale: answers.scale,
            location: answers.location,
            extras: answers.extras,
          },
        }),
      })
      if (!res.ok) throw new Error('Send failed')
      setSubmitted(true)
    } catch {
      setSubmitError('Something went wrong — please email mail@mediamurray.com directly.')
    } finally {
      setSubmitting(false)
    }
  }

  if (done) {
    if (submitted) {
      return (
        <div className="pt-24 min-h-screen bg-gray-50 dark:bg-[#0a0a0a]">
          <div className="max-w-2xl mx-auto px-6 py-20 text-center">
            <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Sent</p>
            <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-4">Brief received.</h1>
            <p className="text-gray-500 dark:text-white/50 text-lg mb-10">
              Jamie will be in touch within 24 hours to discuss your project and confirm a proper quote.
            </p>
            <button
              onClick={reset}
              className="text-sm text-gray-400 dark:text-white/30 hover:text-gray-600 dark:hover:text-white/60 transition-colors uppercase tracking-wider font-bold"
            >
              ← Start over
            </button>
          </div>
        </div>
      )
    }

    return (
      <div className="pt-24 min-h-screen bg-gray-50 dark:bg-[#0a0a0a]">
        <div className="max-w-2xl mx-auto px-6 py-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-1">Almost done</p>
              <h2 className="text-3xl font-black text-gray-900 dark:text-white">Tell me about your project</h2>
            </div>
            <button
              onClick={reset}
              className="text-xs text-gray-400 dark:text-white/30 hover:text-gray-600 dark:hover:text-white/60 transition-colors uppercase tracking-wider font-bold"
            >
              ← Start over
            </button>
          </div>

          <p className="text-sm text-gray-400 dark:text-white/40 mb-8">
            Fill this in and Jamie will get back to you within 24 hours to discuss and confirm a proper quote.
          </p>

          <form onSubmit={submitEnquiry} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/40 mb-2">
                  Name <span className="text-[#0052D4]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formName}
                  onChange={e => setFormName(e.target.value)}
                  placeholder="Your name"
                  className="w-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.04] text-gray-900 dark:text-white px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-[#0052D4] dark:focus:border-[#00C6FF] transition-colors placeholder:text-gray-400 dark:placeholder:text-white/20"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/40 mb-2">
                  Email <span className="text-[#0052D4]">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formEmail}
                  onChange={e => setFormEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.04] text-gray-900 dark:text-white px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-[#0052D4] dark:focus:border-[#00C6FF] transition-colors placeholder:text-gray-400 dark:placeholder:text-white/20"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/40 mb-2">
                Company / Organisation <span className="text-gray-300 dark:text-white/20 font-normal normal-case tracking-normal">(optional)</span>
              </label>
              <input
                type="text"
                value={formCompany}
                onChange={e => setFormCompany(e.target.value)}
                placeholder="Company name"
                className="w-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.04] text-gray-900 dark:text-white px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-[#0052D4] dark:focus:border-[#00C6FF] transition-colors placeholder:text-gray-400 dark:placeholder:text-white/20"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/40 mb-2">
                Anything else to add? <span className="text-gray-300 dark:text-white/20 font-normal normal-case tracking-normal">(optional)</span>
              </label>
              <textarea
                value={formNotes}
                onChange={e => setFormNotes(e.target.value)}
                rows={4}
                placeholder="Dates, specific requirements, location details, or anything else that would help..."
                className="w-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.04] text-gray-900 dark:text-white px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-[#0052D4] dark:focus:border-[#00C6FF] transition-colors placeholder:text-gray-400 dark:placeholder:text-white/20 resize-none"
              />
            </div>

            {submitError && (
              <p className="text-sm text-red-500">{submitError}</p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className={`w-full gradient-bg text-white font-bold py-4 rounded-sm text-sm uppercase tracking-wider transition-opacity ${submitting ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'}`}
            >
              {submitting ? 'Sending…' : 'Send Brief to Jamie →'}
            </button>

            <p className="text-xs text-gray-400 dark:text-white/30 text-center">
              No commitment. Jamie will be in touch within 24 hours.
            </p>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 min-h-screen bg-gray-50 dark:bg-[#0a0a0a]">
      <div className="max-w-2xl mx-auto px-6 py-20">

        {/* Progress bar */}
        <div className="flex gap-2 mb-12">
          {questions.map((_, i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                i < step
                  ? 'gradient-bg'
                  : i === step
                  ? 'gradient-bg opacity-60'
                  : 'bg-gray-200 dark:bg-white/10'
              }`}
            />
          ))}
        </div>

        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">
          Step {step + 1} of {questions.length}
        </p>
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-3">
          {current.label}
        </h2>
        <p className="text-sm text-gray-400 dark:text-white/40 mb-8">
          {current.multi ? 'Select all that apply — or skip if none apply.' : 'Select one option.'}
        </p>

        <div className="grid grid-cols-1 gap-3 mb-10">
          {current.options.map(opt => {
            const selected = isSelected(opt.value)
            return (
              <button
                key={opt.value}
                onClick={() => select(opt.value)}
                className={`text-left p-5 border rounded-sm transition-all duration-200 ${
                  selected
                    ? 'border-[#0052D4] bg-[#0052D4]/5 dark:bg-[#0052D4]/10'
                    : 'border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.02] hover:border-gray-400 dark:hover:border-white/30'
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-black text-gray-900 dark:text-white text-sm uppercase tracking-wide">
                      {opt.label}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-white/40 mt-1">{opt.desc}</p>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                    selected ? 'gradient-bg border-transparent' : 'border-gray-300 dark:border-white/20'
                  }`}>
                    {selected && (
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        <div className="flex items-center justify-between">
          {step > 0 ? (
            <button
              onClick={() => setStep(s => s - 1)}
              className="text-sm text-gray-400 dark:text-white/30 hover:text-gray-600 dark:hover:text-white/60 transition-colors uppercase tracking-wider font-bold"
            >
              ← Back
            </button>
          ) : (
            <div />
          )}
          <button
            onClick={advance}
            disabled={!canAdvance()}
            className={`gradient-bg text-white font-bold px-8 py-3 rounded-sm text-sm uppercase tracking-wider transition-opacity ${
              canAdvance() ? 'hover:opacity-90 cursor-pointer' : 'opacity-30 cursor-not-allowed'
            }`}
          >
            {step === questions.length - 1 ? 'Continue →' : 'Next →'}
          </button>
        </div>
      </div>
    </div>
  )
}
