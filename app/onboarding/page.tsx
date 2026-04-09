import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Client Onboarding',
  description: 'Welcome to MediaMurray. Complete your client onboarding here.',
  robots: { index: false, follow: false },
}

const services = [
  {
    title: 'Promotional Video',
    description: 'Story-led films for businesses, charities and organisations. Brief to finished film, handled end-to-end.',
  },
  {
    title: 'Event Coverage',
    description: 'Conferences, awards, ceremonies and live events filmed and edited to a professional standard.',
  },
  {
    title: 'Photography',
    description: 'Corporate portraits, event photography, product and location shoots across Scotland.',
  },
  {
    title: 'Short-Form Content',
    description: 'Social media video and reels for Instagram, TikTok and LinkedIn — scripted or documentary-style.',
  },
  {
    title: 'Content Days',
    description: 'A full day of filming producing multiple assets — video, reels, photography — in one session.',
  },
  {
    title: 'Editing',
    description: 'Post-production only — bring your footage, I deliver the finished edit.',
  },
]

const process = [
  { step: '01', title: 'Brief', body: 'We align on what you need — the goal, the audience, the deliverables, and the timeline.' },
  { step: '02', title: 'Quote', body: 'You receive a written quote within 24 hours. A 50% deposit secures the date.' },
  { step: '03', title: 'Shoot', body: 'I arrive prepared, handle everything on the day, and make the process straightforward for you and your team.' },
  { step: '04', title: 'Edit & Deliver', body: 'Edited files delivered digitally, typically within 3–4 weeks for video and 1–2 weeks for photography. One round of revisions included.' },
]

export default function Onboarding() {
  return (
    <div className="pt-24">

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Client Onboarding</p>
        <h1 className="text-5xl font-black mb-6 text-gray-900 dark:text-white">Welcome to MediaMurray</h1>
        <p className="text-gray-500 dark:text-white/50 text-lg leading-relaxed mb-4">
          This page is your starting point as a new client. It covers who we are, what we offer, how the process works, and what you agree to when commissioning work.
        </p>
        <p className="text-gray-500 dark:text-white/50 leading-relaxed">
          Once you&apos;ve read through, complete the onboarding form at the bottom — this gives us everything we need to get your project moving.
        </p>
      </section>

      {/* Who We Are */}
      <section className="border-t border-gray-200 dark:border-white/10 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">About</p>
              <h2 className="text-3xl font-black mb-8 text-gray-900 dark:text-white">Jamie Murray — MediaMurray</h2>
              <div className="space-y-4 text-gray-600 dark:text-white/60 leading-relaxed">
                <p>
                  I&apos;m a Scottish-based videographer, photographer and editor working with businesses, organisations, creative agencies, charities and individuals across Scotland and the UK.
                </p>
                <p>
                  Since graduating with a First Class degree in Television Production from Edinburgh Napier University in 2020, I&apos;ve delivered over 170 client projects. My work spans promotional films, event coverage, social media content, photography and post-production.
                </p>
                <p>
                  I handle filming and editing myself on most projects, which means you have a single, consistent point of accountability from brief through to delivery. The process is direct, the communication is clear, and the standard is broadcast-level.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-6">
                {[
                  { label: 'Based', value: 'Edinburgh, Scotland' },
                  { label: 'Camera', value: 'Sony a7IV + a7III' },
                  { label: 'Aerial', value: 'DJI Mini 5 Pro' },
                  { label: 'Post', value: 'Adobe Suite' },
                ].map((d) => (
                  <div key={d.label}>
                    <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-white/30 mb-1">{d.label}</p>
                    <p className="font-bold text-gray-900 dark:text-white">{d.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 p-6 rounded-sm">
                  <p className="text-4xl font-black gradient-text">170+</p>
                  <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-white/40 mt-2">Projects delivered</p>
                </div>
                <div className="bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 p-6 rounded-sm">
                  <p className="text-4xl font-black gradient-text">6+</p>
                  <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-white/40 mt-2">Years professional freelance</p>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 p-6 rounded-sm">
                <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-white/30 mb-3">Clients &amp; organisations</p>
                <p className="text-gray-600 dark:text-white/60 text-sm leading-relaxed">
                  BBC Scotland, BBC Sport, BBC Social, LowlandRFCA, Scottish Parliament, RangersTV, Scottish Fair Trade, Frame, Visit Bute, Rothesay Joint Campus, Scottish Women&apos;s Wellbeing Summit, and 160+ others.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 p-6 rounded-sm">
                <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-white/30 mb-3">Contact</p>
                <p className="font-medium text-gray-600 dark:text-white/70">mail@mediamurray.com</p>
                <p className="font-medium text-gray-600 dark:text-white/70 mt-1">Edinburgh, Scotland</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-gray-200 dark:border-white/10 py-20 bg-gray-50 dark:bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Services</p>
          <h2 className="text-3xl font-black mb-12 text-gray-900 dark:text-white">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="border-l-4 border-[#0052D4] pl-6">
                <h3 className="font-black text-lg mb-2 text-gray-900 dark:text-white">{s.title}</h3>
                <p className="text-gray-600 dark:text-white/60 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 border border-gray-200 dark:border-white/10 p-6 rounded-sm max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-white/30 mb-3">Day rates</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-bold text-gray-900 dark:text-white">Half day</p>
                <p className="text-gray-500 dark:text-white/50">£375</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 dark:text-white">Full day</p>
                <p className="text-gray-500 dark:text-white/50">£500</p>
              </div>
            </div>
            <p className="text-xs text-gray-400 dark:text-white/30 mt-3">Bespoke project rates quoted individually. All rates subject to scope — discussed at brief stage.</p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-gray-200 dark:border-white/10 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Process</p>
          <h2 className="text-3xl font-black mb-12 text-gray-900 dark:text-white">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p) => (
              <div key={p.step}>
                <p className="text-4xl font-black gradient-text mb-4">{p.step}</p>
                <h3 className="font-black text-lg mb-2 text-gray-900 dark:text-white">{p.title}</h3>
                <p className="text-gray-600 dark:text-white/60 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="border-t border-gray-200 dark:border-white/10 py-20 bg-gray-50 dark:bg-white/[0.02]">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Legal</p>
          <h2 className="text-3xl font-black mb-4 text-gray-900 dark:text-white">Terms &amp; Conditions</h2>
          <p className="text-gray-500 dark:text-white/50 mb-10 leading-relaxed">
            By completing the onboarding form below, you confirm that you have read and agree to MediaMurray&apos;s Terms &amp; Conditions. A summary of the key terms is below.{' '}
            <Link href="/terms-and-conditions" target="_blank" className="text-[#0052D4] hover:text-[#00C6FF] transition-colors font-medium">
              Read the full Terms &amp; Conditions →
            </Link>
          </p>
          <div className="space-y-6 text-sm text-gray-600 dark:text-white/60 leading-relaxed">
            {[
              { title: 'Quotations', body: 'All quotations are valid for 30 days and issued in writing. A contract is formed on written acceptance or payment of a deposit.' },
              { title: 'Deposits', body: 'A non-refundable 50% deposit may be required to secure a date. Payment of the deposit confirms acceptance of these terms.' },
              { title: 'Payment', body: 'Remaining balance is invoiced on delivery. Payment due within 14 days of invoice unless otherwise agreed.' },
              { title: 'Cancellations', body: '14+ days notice: deposit retained, no further charge. 7–14 days: 75% of fee payable. Under 7 days: 100% of fee payable.' },
              { title: 'Delivery', body: 'Standard turnaround: 3–4 weeks for video, 1–2 weeks for photography. One round of revisions included. Additional revisions charged at hourly rate.' },
              { title: 'Intellectual Property', body: 'MediaMurray retains copyright in all work produced. A non-exclusive licence is granted to the client for agreed usage. MediaMurray may use work for portfolio and promotional purposes.' },
              { title: 'Client Responsibilities', body: 'The client is responsible for obtaining any necessary permissions or permits for filming locations.' },
              { title: 'Governing Law', body: 'These terms are governed by Scots law and subject to the exclusive jurisdiction of the Scottish courts.' },
            ].map((t) => (
              <div key={t.title} className="flex gap-4">
                <div className="w-1 flex-shrink-0 bg-[#0052D4] rounded-full" />
                <div>
                  <p className="font-black text-gray-900 dark:text-white mb-1">{t.title}</p>
                  <p>{t.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding Form */}
      <section className="border-t border-gray-200 dark:border-white/10 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Get Started</p>
          <h2 className="text-3xl font-black mb-4 text-gray-900 dark:text-white">Client Onboarding Form</h2>
          <p className="text-gray-500 dark:text-white/50 mb-12 leading-relaxed">
            Fill in the form below to complete your onboarding. This gives us the project details, contact information, and your agreement to the terms above. We&apos;ll be in touch within 24 hours to confirm and discuss next steps.
          </p>

          {/* Tally form embed — replace TALLY_FORM_ID with the onboarding form ID */}
          <iframe
            src="https://tally.so/embed/TALLY_FORM_ID?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            width="100%"
            height="800"
            frameBorder={0}
            title="MediaMurray Client Onboarding Form"
            className="w-full"
          />

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10">
            <p className="text-xs text-gray-400 dark:text-white/30 leading-relaxed">
              Prefer to get in touch directly? Email{' '}
              <a href="mailto:mail@mediamurray.com" className="text-[#0052D4] hover:text-[#00C6FF] transition-colors">
                mail@mediamurray.com
              </a>{' '}
              or visit the{' '}
              <Link href="/contact" className="text-[#0052D4] hover:text-[#00C6FF] transition-colors">
                contact page
              </Link>.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
