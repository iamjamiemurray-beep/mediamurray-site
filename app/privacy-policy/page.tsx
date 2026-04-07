import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'MediaMurray privacy policy — how we collect, use and protect your personal data in accordance with UK GDPR.',
}

export default function PrivacyPolicy() {
  return (
    <div className="pt-24">
      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Legal</p>
        <h1 className="text-5xl font-black mb-4 text-gray-900 dark:text-white">Privacy Policy</h1>
        <p className="text-gray-500 dark:text-white/50 mb-12">Last updated: 07/04/2026</p>

        <div className="space-y-10 text-gray-600 dark:text-white/60 leading-relaxed">
          <div>
            <h2 className="text-xl font-black text-gray-900 dark:text-white mb-4">1. Who We Are</h2>
            <p>MediaMurray is a trading name of Jamie Murray, a sole trader based in Scotland, United Kingdom. We are the data controller for any personal data collected through this website or in connection with our services.</p>
            <p className="mt-3">Contact: <a href="mailto:mail@mediamurray.com" className="text-[#0052D4] hover:text-[#00C6FF] transition-colors">mail@mediamurray.com</a></p>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 dark:text-white mb-4">2. Data We Collect</h2>
            <p>We may collect the following personal data:</p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Name and contact details (email address, phone number)</li>
              <li>Project or enquiry details submitted via our contact form</li>
              <li>Business name and billing information for contracted clients</li>
              <li>Communications between you and MediaMurray (emails, messages)</li>
            </ul>
            <p className="mt-3">We do not collect sensitive personal data and we do not use automated decision-making or profiling.</p>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 dark:text-white mb-4">3. How We Use Your Data</h2>
            <p>We use your personal data to:</p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Respond to enquiries and provide quotations</li>
              <li>Deliver contracted services and fulfil project obligations</li>
              <li>Issue invoices and process payments</li>
              <li>Maintain accounting and legal records as required by law</li>
              <li>Communicate updates relevant to your project or booking</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 dark:text-white mb-4">4. Legal Basis for Processing</h2>
            <p>We process your personal data on the following legal bases under UK GDPR:</p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li><strong className="text-gray-900 dark:text-white">Contract</strong> — processing is necessary to fulfil a contract with you or to take steps prior to entering into one</li>
              <li><strong className="text-gray-900 dark:text-white">Legitimate interests</strong> — responding to general enquiries and maintaining business records</li>
              <li><strong className="text-gray-900 dark:text-white">Legal obligation</strong> — retaining financial records as required under UK tax and accounting law</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 dark:text-white mb-4">5. Data Retention</h2>
            <p>We retain personal data only for as long as necessary:</p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>General enquiries that do not proceed to contract: up to 12 months</li>
              <li>Client project records and invoicing data: 7 years (as required by HMRC)</li>
              <li>Communications: retained for the duration of the client relationship and up to 12 months thereafter</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 dark:text-white mb-4">6. Sharing Your Data</h2>
            <p>We do not sell, rent or trade your personal data. We may share data with third parties only where strictly necessary — for example, an accountant or bookkeeper acting on our behalf under a data processing agreement. All such parties are bound by confidentiality obligations and UK GDPR requirements.</p>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 dark:text-white mb-4">7. Your Rights</h2>
            <p>Under UK GDPR, you have the following rights in relation to your personal data:</p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li><strong className="text-gray-900 dark:text-white">Right of access</strong> — to request a copy of the data we hold about you</li>
              <li><strong className="text-gray-900 dark:text-white">Right to rectification</strong> — to ask us to correct inaccurate data</li>
              <li><strong className="text-gray-900 dark:text-white">Right to erasure</strong> — to request deletion of your data, subject to legal obligations</li>
              <li><strong className="text-gray-900 dark:text-white">Right to restriction</strong> — to limit how we use your data in certain circumstances</li>
              <li><strong className="text-gray-900 dark:text-white">Right to portability</strong> — to receive your data in a structured, machine-readable format</li>
              <li><strong className="text-gray-900 dark:text-white">Right to object</strong> — to processing based on legitimate interests</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, contact us at <a href="mailto:mail@mediamurray.com" className="text-[#0052D4] hover:text-[#00C6FF] transition-colors">mail@mediamurray.com</a>.</p>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 dark:text-white mb-4">8. Complaints</h2>
            <p>If you have concerns about how we handle your personal data, you have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO), the UK&apos;s data protection supervisory authority: <span className="text-[#0052D4]">ico.org.uk</span></p>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 dark:text-white mb-4">9. Governing Law</h2>
            <p>This Privacy Policy is governed by and construed in accordance with the laws of Scotland and the United Kingdom. Any disputes arising shall be subject to the jurisdiction of the Scottish courts.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
