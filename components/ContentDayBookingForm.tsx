'use client'

import { useState } from 'react'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const BUSINESS_TYPES = [
  'Fitness / Health',
  'Food & Drink / Restaurant',
  'Retail / Fashion',
  'Beauty / Hair',
  'Professional Services',
  'Creative / Design',
  'Charity / Not-for-profit',
  'Other',
]

export default function ContentDayBookingForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    businessType: '',
    location: '',
    month: '',
  })

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [k]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          service: 'Content Day',
          location: form.location,
          date: form.month,
          message: `Content Day enquiry.\nBusiness type: ${form.businessType}\nPreferred month: ${form.month}`,
        }),
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
      <div className="py-12 text-center">
        <div className="w-12 h-12 gradient-bg rounded-sm flex items-center justify-center mx-auto mb-6">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2">Enquiry Received</h3>
        <p className="text-gray-500 dark:text-white/50 text-sm">I&apos;ll be in touch within 24 hours to discuss your Content Day.</p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/40 mb-2">Your Name *</label>
          <input type="text" required value={form.name} onChange={set('name')} placeholder="Your name" className={inputClass} />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/40 mb-2">Email *</label>
          <input type="email" required value={form.email} onChange={set('email')} placeholder="your@email.com" className={inputClass} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/40 mb-2">Business Name *</label>
          <input type="text" required value={form.company} onChange={set('company')} placeholder="Your business name" className={inputClass} />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/40 mb-2">Type of Business *</label>
          <select required value={form.businessType} onChange={set('businessType')} className={selectClass}>
            <option value="">Select…</option>
            {BUSINESS_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/40 mb-2">Location *</label>
          <input type="text" required value={form.location} onChange={set('location')} placeholder="e.g. Edinburgh, Glasgow, Perth" className={inputClass} />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/40 mb-2">Preferred Month *</label>
          <input type="text" required value={form.month} onChange={set('month')} placeholder="e.g. August 2026 or Flexible" className={inputClass} />
        </div>
      </div>
      {status === 'error' && (
        <p className="text-red-500 text-sm">Something went wrong — please email <a href="mailto:mail@mediamurray.com" className="underline">mail@mediamurray.com</a> directly.</p>
      )}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="gradient-bg text-white font-bold px-10 py-4 text-sm uppercase tracking-wider hover:opacity-90 transition-opacity disabled:opacity-50 rounded-sm"
      >
        {status === 'sending' ? 'Sending…' : 'Book Your Content Day'}
      </button>
    </form>
  )
}
