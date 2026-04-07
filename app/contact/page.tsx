import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with MediaMurray. Based in Edinburgh, available across Scotland. Get a free quote today.',
}

export default function Contact() {
  return (
    <div className="pt-24">
      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Get In Touch</p>
        <h1 className="text-5xl font-black mb-4 text-gray-900 dark:text-white">Let&apos;s Work Together</h1>
        <p className="text-gray-500 dark:text-white/50 mb-12 text-lg">
          Tell me about your project and I&apos;ll get back to you within 24 hours.
        </p>

        <iframe
          src="https://tally.so/embed/WOYkPN?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          width="100%"
          height="700"
          frameBorder={0}
          title="MediaMurray Enquiry Form"
          className="w-full"
        />

        <div className="mt-16 pt-12 border-t border-gray-200 dark:border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-white/30 mb-2">Email</p>
            <a href="mailto:mail@mediamurray.com" className="font-medium text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors">
              mail@mediamurray.com
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-white/30 mb-2">Based</p>
            <p className="font-medium text-gray-600 dark:text-white/70">Edinburgh, Scotland</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-white/30 mb-2">Available</p>
            <p className="font-medium text-gray-600 dark:text-white/70">Across Scotland & UK</p>
          </div>
        </div>
      </section>
    </div>
  )
}
