import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'MediaMurray terms of service — the rules governing use of this website.',
}

export default function TermsOfService() {
  return (
    <div className="pt-24">
      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Legal</p>
        <h1 className="text-5xl font-black mb-4 text-gray-900 dark:text-white">Terms of Service</h1>
        <p className="text-gray-500 dark:text-white/50 mb-12">Last updated: 07/04/2026</p>

        <div className="space-y-10 text-gray-600 dark:text-white/60 leading-relaxed">
          <div>
            <h2 className="text-xl font-black text-gray-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
            <p>By accessing and using the MediaMurray website (mediamurray.com), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use this website.</p>
            <p className="mt-3">These Terms of Service apply to your use of this website only. For the terms governing commissioned services, please refer to our <Link href="/terms-and-conditions" className="text-[#0052D4] hover:text-[#00C6FF] transition-colors">Terms and Conditions</Link>.</p>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 dark:text-white mb-4">2. Use of This Website</h2>
            <p>You may use this website for lawful purposes only. You must not use this website:</p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>In any way that violates applicable Scottish, UK or international laws or regulations</li>
              <li>To transmit unsolicited commercial communications</li>
              <li>To attempt to gain unauthorised access to any part of this website or its related systems</li>
              <li>In any way that could damage, disable or impair the website or interfere with other users</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 dark:text-white mb-4">3. Intellectual Property</h2>
            <p>All content on this website — including text, images, video, graphics, logos and design — is the property of Jamie Murray (trading as MediaMurray) or is used with permission. All rights are reserved.</p>
            <p className="mt-3">You may not reproduce, distribute, modify or republish any content from this website without prior written permission from MediaMurray.</p>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 dark:text-white mb-4">4. Accuracy of Information</h2>
            <p>The information on this website is provided for general informational purposes only. While we endeavour to keep information accurate and up to date, we make no representations or warranties of any kind regarding the completeness, accuracy or suitability of the information for any particular purpose.</p>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 dark:text-white mb-4">5. Third-Party Links</h2>
            <p>This website may contain links to third-party websites. These links are provided for your convenience only. MediaMurray has no control over the content of those websites and accepts no responsibility for them or for any loss or damage that may arise from your use of them.</p>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 dark:text-white mb-4">6. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, MediaMurray excludes all liability for any loss or damage arising from your use of this website, including but not limited to direct, indirect, incidental or consequential loss.</p>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 dark:text-white mb-4">7. Changes to These Terms</h2>
            <p>MediaMurray reserves the right to update these Terms of Service at any time. The date of the most recent revision is shown at the top of this page. Your continued use of the website following any changes constitutes acceptance of the revised terms.</p>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 dark:text-white mb-4">8. Governing Law</h2>
            <p>These Terms of Service are governed by and construed in accordance with Scots law. Any disputes arising from your use of this website shall be subject to the exclusive jurisdiction of the Scottish courts.</p>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 dark:text-white mb-4">9. Contact</h2>
            <p>For any queries relating to these terms, please contact us at <a href="mailto:mail@mediamurray.com" className="text-[#0052D4] hover:text-[#00C6FF] transition-colors">mail@mediamurray.com</a>.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
