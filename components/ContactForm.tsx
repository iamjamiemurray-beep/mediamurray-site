'use client'

import { useState } from 'react'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const SERVICES = [
  'Videography & Editing',
  'Promotional Video',
  'Photography',
  'Event Coverage',
  'Drone / Aerial',
  'Retainer Package',
  'Content Day',
  'Other / Not Sure',
]

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({
    name: '', email: '', company: '', phone: '',
    service: '', date: '', message: '',
  })

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [k]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const inputClass = "w-full bg-transparent border border-gray-200 dark:border-white/10 px-5 py-4 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/30 focus:outline-none focus:border-[#0052D4] dark:focus:border-[#0052D4] transition-colors rounded-sm"
  const selectClass = `${inputClass} appearance-none`

  if (status === 'sent') {
    return (
      <div className="py-12 text-center max-w-md mx-auto">
        <div className="w-12 h-12 gradient-bg rounded-sm flex items-center justify-center mx-auto mb-6">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2">Message Sent</h3>
        <p className="text-gray-500 dark:text-white/50 text-sm">I&apos;ll be in touch within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="space-y-4 max-w-2xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/40 mb-2">Name *</label>
          <input type="text" required value={form.name} onChange={set('name')} placeholder="Your name" className={inputClass} />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/40 mb-2">Email *</label>
          <input type="email" required value={form.email} onChange={set('email')} placeholder="your@email.com" className={inputClass} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/40 mb-2">Company / Organisation</label>
          <input type="text" value={form.company} onChange={set('company')} placeholder="Optional" className={inputClass} />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/40 mb-2">Phone</label>
          <input type="tel" value={form.phone} onChange={set('phone')} placeholder="Optional" className={inputClass} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/40 mb-2">Service *</label>
          <select required value={form.service} onChange={set('service')} className={selectClass}>
            <option value="">Select a service…</option>
            {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/40 mb-2">Date / When</label>
          <input type="text" value={form.date} onChange={set('date')} placeholder="e.g. June 2026 or TBC" className={inputClass} />
        </div>
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/40 mb-2">Project Details *</label>
        <textarea required value={form.message} onChange={set('message')} placeholder="Tell me about your project — what you need, what you're trying to achieve, any specific requirements…" rows={6} className={`${inputClass} resize-none`} />
      </div>
      {status === 'error' && (
        <p className="text-red-500 text-sm">Something went wrong — please email <a href="mailto:mail@mediamurray.com" className="underline">mail@mediamurray.com</a> directly.</p>
      )}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="gradient-bg text-white font-bold px-10 py-4 text-sm uppercase tracking-wider hover:opacity-90 transition-opacity disabled:opacity-50 rounded-sm"
      >
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
