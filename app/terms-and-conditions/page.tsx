import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'MediaMurray terms and conditions for video production, photography and editing services.',
}

export default function TermsAndConditions() {
  return (
    <div className="pt-24">
      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Legal</p>
        <h1 className="text-5xl font-black mb-4 text-gray-900 dark:text-white">Terms & Conditions</h1>
        <p className="text-gray-500 dark:text-white/50 mb-12">Last updated: 07/04/2026</p>

        <div className="space-y-10 text-gray-600 dark:text-white/60 leading-relaxed">
          <div>
            <h2 className="text-xl font-black text-gray-900 dark:text-white mb-4">1. Introduction</h2>
            <p>These Terms and Conditions govern the provision of videography, photography, editing and related services by Jamie Murray, trading as MediaMurray (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;), to any individual or organisation (&ldquo;the Client&rdquo;) who engages our services.</p>
            <p className="mt-3">By accepting a quotation or commissioning work from MediaMurray, you agree to be bound by these Terms and Conditions.</p>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 dark:text-white mb-4">2. Quotations and Acceptance</h2>
            <p>All quotations are provided in writing (email or written document) and are valid for 30 days from the date of issue unless otherwise stated. A contract is formed when a quotation is accepted in writing by the Client or when a deposit is paid, whichever occurs first.</p>
            <p className="mt-3">MediaMurray reserves the right to decline any commission at its discretion.</p>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 dark:text-white mb-4">3. Booking Deposits</h2>
            <p>A non-refundable deposit of 50% of the agreed fee may be required to secure a booking date. This deposit is deducted from the final invoice. Payment of the deposit confirms the Client&apos;s acceptance of these Terms and Conditions.</p>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 dark:text-white mb-4">4. Payment Terms</h2>
            <p>The remaining balance is invoiced on delivery of the final files or completion of services. Payment is due within 14 days of the invoice date unless otherwise agreed in writing.</p>
            <p className="mt-3">Late payments may incur interest.</p>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 dark:text-white mb-4">5. Cancellations and Postponements</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Cancellation with more than 14 days&apos; notice: deposit retained; no further charge</li>
              <li>Cancellation with 7–14 days&apos; notice: 75% of the agreed fee is payable</li>
              <li>Cancellation with less than 7 days&apos; notice: 100% of the agreed fee is payable</li>
            </ul>
            <p className="mt-3">Where a postponement is agreed in writing, MediaMurray will endeavour to accommodate the new date subject to availability. The deposit may be transferred to the rescheduled booking at our discretion.</p>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 dark:text-white mb-4">6. Delivery of Work</h2>
            <p>Estimated delivery timescales are provided as a guide and are not guaranteed unless agreed in writing as a fixed deadline. Standard turnaround is 3–4 weeks for video edits and 1–2 weeks for photography. 48-hour express delivery is available at an additional charge.</p>
            <p className="mt-3">Deliverables are provided digitally via a download link unless otherwise agreed. MediaMurray is not responsible for files after they have been delivered to the agreed method.</p>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 dark:text-white mb-4">7. Revisions</h2>
            <p>Standard packages include one round of revisions unless otherwise stated in the quotation. Additional revisions are charged at an agreed hourly rate. Revision requests must be submitted in writing within 7 days of delivery.</p>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 dark:text-white mb-4">8. Intellectual Property</h2>
            <p>MediaMurray retains copyright in all work produced unless a specific written agreement to assign copyright is made. The Client is granted a non-exclusive, non-transferable licence to use the delivered content for the agreed purposes.</p>
            <p className="mt-3">MediaMurray reserves the right to use work produced for portfolio, marketing and promotional purposes unless the Client requests otherwise in writing prior to commencement.</p>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 dark:text-white mb-4">9. Client Responsibilities</h2>
            <p>The Client is responsible for obtaining any necessary permissions, permits or consents for filming or photography at the agreed location. MediaMurray accepts no liability for delays or cancellations caused by the Client&apos;s failure to secure appropriate access.</p>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 dark:text-white mb-4">10. Limitation of Liability</h2>
            <p>MediaMurray&apos;s total liability to the Client in respect of any claim shall not exceed the total fees paid by the Client for the relevant services. MediaMurray is not liable for indirect, consequential or incidental losses.</p>
            <p className="mt-3">In the event of equipment failure, adverse conditions or other circumstances beyond our reasonable control (force majeure), MediaMurray will take all reasonable steps to deliver the agreed services. Where this is not possible, liability is limited to a refund of fees paid.</p>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 dark:text-white mb-4">11. Governing Law</h2>
            <p>These Terms and Conditions are governed by and construed in accordance with Scots law. Any dispute arising from these terms shall be subject to the exclusive jurisdiction of the Scottish courts.</p>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 dark:text-white mb-4">12. Contact</h2>
            <p>For any queries regarding these Terms and Conditions, contact us at <a href="mailto:mail@mediamurray.com" className="text-[#0052D4] hover:text-[#00C6FF] transition-colors">mail@mediamurray.com</a>.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
