import type { Metadata } from 'next'
import VideoCard from '@/components/VideoCard'
import MasonryGallery from '@/components/MasonryGallery'
import ContentDayBookingForm from '@/components/ContentDayBookingForm'
import ContentDayPhotoStrip from '@/components/ContentDayPhotoStrip'

export const metadata: Metadata = {
  title: 'Content Day Scotland - £999 | Video, Reels & Photography | MediaMurray',
  description: 'One day of filming. Walk away with a promo video, 12 edited reels, and 30 professional photos - a full month of content ready to post. Based in Edinburgh, available across Scotland.',
}

const shoots = [
  {
    client: 'Warrior In Training',
    url: 'https://warriorintraining.co.uk',
    desc: 'Pilates & fitness - social content day',
    photos: [
      '/contentdaypilates1.jpg',
      '/contentdaypilates2.jpg',
      '/contentdaypilates3.jpg',
      '/contentdaypilates4.jpg',
      '/contentdaypilates5.jpg',
      '/contentdaypilates6.jpg',
    ],
  },
  {
    client: 'Italian Kitchen',
    url: null,
    desc: 'Restaurant & food - social content day',
    photos: [
      '/contentdayitaliankithcen1.jpg',
      '/contentdayitaliankithcen2.jpg',
      '/contentdayitaliankithcen3.jpg',
      '/contentdayitaliankithcen4.jpg',
      '/contentdayitaliankithcen5.jpg',
      '/contentdayitaliankithcen6.jpg',
      '/contentdayitaliankithcen7.jpg',
      '/contentdayitaliankithcen8.jpg',
      '/contentdayitaliankithcen9.jpg',
      '/contentdayitaliankithcen10.jpg',
    ],
  },
  {
    client: 'All Sewn Up',
    url: null,
    desc: 'Fashion & alterations - social content day',
    photos: [
      '/ContentDayAllSewnUp1.jpg',
      '/ContentDayAllSewnUp2.jpg',
      '/ContentDayAllSewnUp3.jpg',
      '/ContentDayAllSewnUp4.jpg',
      '/ContentDayAllSewnUp5.jpg',
      '/ContentDayAllSewnUp6.jpg',
    ],
  },
  {
    client: "Chanel O'Connor",
    url: null,
    desc: "RuPaul's Drag Race UK - social content day",
    photos: [
      '/cdchanel1.jpg',
      '/cdchanel2.jpg',
      '/cdchanel3.jpg',
      '/cdchanel4.jpg',
    ],
  },
  {
    client: 'Kev Lawrence',
    url: 'https://kevlawrence.design',
    desc: 'Brand & design - social content day',
    photos: [
      '/cdkevin1.jpg',
      '/cdkevin2.jpg',
      '/cdkevin3.jpg',
    ],
  },
  {
    client: 'Isle of Bute Gin',
    url: null,
    desc: 'Spirits brand - social content day',
    photos: [
      '/cd1.jpg',
      '/cd2.jpg',
      '/cd3.jpg',
      '/cd4.jpg',
    ],
  },
]

const testimonials = [
  {
    quote: 'MediaMurray proved to be very professional and managed to get a slot booked in within a week. The pre-planned photography locations worked perfectly on the shoot day, surpassing my expectations and significantly easing the process for me. I was particularly impressed with how quickly MediaMurray was able to produce and return the pictures. I would have no hesitation recommending MediaMurray to anyone with photography or videography needs.',
    name: 'Jonathan',
    company: 'Reid Financial Planning',
  },
  {
    quote: 'Really enjoyed the process and working with MediaMurray. Incredibly professional and friendly. The overall process and final materials far exceeded expectations. Really appreciated the patience shown with figuring out a schedule and working through the ideas before filming. Definitely recommend MediaMurray.',
    name: 'Eve',
    company: 'Argyll & Bute Council',
  },
  {
    quote: "MediaMurray's work was exceptional in terms of the final product, which really showcased the exhibition, the artists and its location here on the Isle of Bute in a very positive light. Professional, clear, understanding and supportive. The promotional video has helped to reach international audiences and we would have no hesitation in working with MediaMurray in the future.",
    name: 'Richard',
    company: 'Bute Community Forest',
  },
  {
    quote: "Working with Jamie was excellent. Not only did he create some fantastic content for me, he was very open to my ideas and we collaborated creatively. He very much put me at ease as I'm not one for being in front of the camera. The service he provides is 10/10 and he got the images back to me very quickly. I would work with Jamie again and would highly recommend him to others.",
    name: 'Kevin',
    company: 'Kev Lawrence Design',
  },
]

export default function ContentDay() {
  return (
    <div className="pt-24">

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Services</p>
        <h1 className="text-6xl font-black mb-6 text-gray-900 dark:text-white leading-none">Content Day</h1>
        <p className="text-gray-500 dark:text-white/50 max-w-2xl text-xl mb-10 leading-relaxed">
          One day of filming. A full month of professional content - video, reels, and photos - planned, shot, and edited. Ready to post in two weeks.
        </p>

        <div className="flex items-center gap-5 mb-16">
          <p className="text-5xl font-black text-gray-900 dark:text-white leading-none">£999</p>
          <div className="text-sm text-gray-500 dark:text-white/50 leading-relaxed">
            <p>Full day · all editing included · delivered in 2 weeks</p>
            <p>50% deposit to secure your date · 50% on delivery</p>
          </div>
          <a href="#book" className="ml-auto gradient-bg text-white font-bold px-7 py-3 rounded-sm hover:opacity-90 transition-opacity text-sm uppercase tracking-wider whitespace-nowrap flex-shrink-0">Book Now</a>
        </div>

        {/* Deliverable number cards */}
        <div className="grid grid-cols-3 gap-4 mb-16">
          {[
            { num: '1',  title: 'Promo Video',   desc: '30-45 seconds, scripted and edited' },
            { num: '12', title: 'Edited Reels',  desc: '3 per week - one full month of content' },
            { num: '30', title: 'Photos',         desc: 'Professional brand and product imagery' },
          ].map((card) => (
            <div key={card.num} className="animated-gradient-border">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-sm h-full">
                <p className="text-6xl font-black leading-none mb-3 gradient-text">{card.num}</p>
                <p className="font-black text-lg mb-1 text-gray-900 dark:text-white">{card.title}</p>
                <p className="text-gray-500 dark:text-white/60 text-sm">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Photo preview strip */}
        <ContentDayPhotoStrip />

      </section>

      {/* Sticky section nav */}
      <div className="sticky top-[72px] z-30 bg-white/90 dark:bg-gray-950/90 backdrop-blur border-b border-gray-200 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-6 flex items-center gap-6 overflow-x-auto scrollbar-hide py-3">
          <a href="#deliverables" className="text-sm font-medium text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors whitespace-nowrap">Deliverables</a>
          <a href="#pricing" className="text-sm font-medium text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors whitespace-nowrap">Pricing</a>
          <a href="#process" className="text-sm font-medium text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors whitespace-nowrap">How It Works</a>
          <a href="#reviews" className="text-sm font-medium text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors whitespace-nowrap">Reviews</a>
          <a href="#book" className="ml-auto gradient-bg text-white text-sm font-bold px-5 py-2 rounded-sm hover:opacity-90 transition-opacity whitespace-nowrap flex-shrink-0">Book Now</a>
        </div>
      </div>

      {/* What Is It */}
      <section className="bg-gray-50 dark:bg-white/[0.02] border-y border-gray-200 dark:border-white/10 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-5 text-gray-600 dark:text-white/60 leading-relaxed">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40">What Is It</p>
              <p className="text-gray-900 dark:text-white font-black text-2xl leading-tight">Create a professional bank of content in a single day.</p>
              <p>A Content Day allows your organisation to capture professional video and photography in one focused shoot, giving you a consistent library of visuals for your website, social media, and marketing.</p>
              <p>Instead of organising multiple shoots across different days, this approach creates a complete set of high-quality content in one efficient session. Everything is planned in detail in advance - scripts agreed, shot list built, day scheduled - so nothing is left to chance.</p>
              <p>A teleprompter is provided for all pieces to camera, so you can deliver your message confidently without memorising a script.</p>
            </div>
            <div className="bg-gray-900 dark:bg-white/5 border border-gray-800 dark:border-white/10 p-8 rounded-sm">
              <p className="text-xs font-bold uppercase tracking-[0.2em] gradient-text mb-6">In a single day you can create</p>
              <div className="space-y-3">
                {[
                  'Promotional video for your website or social media',
                  'Short reels and social media clips',
                  'Professional team and brand photography',
                  'Product or service imagery',
                  'Marketing visuals for campaigns and communications',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-gray-300 dark:text-white/70">
                    <span className="gradient-text font-bold mt-0.5 flex-shrink-0">-&gt;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section id="deliverables" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">What You Walk Away With</p>
          <h2 className="text-4xl font-black mb-4 text-gray-900 dark:text-white">Your Content Library</h2>
          <p className="text-gray-500 dark:text-white/50 max-w-2xl mb-12">A Content Day is designed to give you a versatile content library - not just one or two pieces of media.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Video Content */}
            <div className="bg-gray-50 dark:bg-[#0d1a33]/60 border border-gray-200 dark:border-[#0052D4]/25 p-8 rounded-sm hover:border-[#0052D4]/60 dark:hover:border-[#0052D4]/60 transition-colors">
              <div className="mb-6">
                <svg width="40" height="40" viewBox="0 0 48 48" fill="none" className="text-[#0052D4]">
                  <rect x="4" y="10" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="2.5"/>
                  <path d="M36 18l8-5v18l-8-5V18z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3">Video Content</h3>
              <p className="text-sm text-gray-500 dark:text-white/50 mb-6 leading-relaxed">Professionally edited video material ready to use across your platforms and channels.</p>
              <div className="space-y-2">
                {['Promo video (30-45 seconds)', 'Short clips for social media', 'Interviews or testimonial footage', 'Reels optimised for Instagram and TikTok', 'Widescreen and portrait formats included'].map(item => (
                  <div key={item} className="flex items-start gap-2 text-sm text-gray-600 dark:text-white/60">
                    <span className="text-[#0052D4] font-bold flex-shrink-0 mt-0.5">&#8594;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Photography */}
            <div className="bg-gray-50 dark:bg-[#0d1a33]/60 border border-gray-200 dark:border-[#0052D4]/25 p-8 rounded-sm hover:border-[#0052D4]/60 dark:hover:border-[#0052D4]/60 transition-colors">
              <div className="mb-6">
                <svg width="40" height="40" viewBox="0 0 48 48" fill="none" className="text-[#0052D4]">
                  <circle cx="24" cy="26" r="8" stroke="currentColor" strokeWidth="2.5"/>
                  <path d="M6 16h4l3-5h22l3 5h4a2 2 0 012 2v20a2 2 0 01-2 2H6a2 2 0 01-2-2V18a2 2 0 012-2z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3">Photography</h3>
              <p className="text-sm text-gray-500 dark:text-white/50 mb-6 leading-relaxed">A curated gallery of professionally edited images covering your team, workplace, and brand.</p>
              <div className="space-y-2">
                {['Team portraits and staff photography', 'Workplace and environmental imagery', 'Product or service photography', 'Brand and lifestyle visuals', 'High resolution files for web, social, and print'].map(item => (
                  <div key={item} className="flex items-start gap-2 text-sm text-gray-600 dark:text-white/60">
                    <span className="text-[#0052D4] font-bold flex-shrink-0 mt-0.5">&#8594;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Website & Marketing */}
            <div className="bg-gray-50 dark:bg-[#0d1a33]/60 border border-gray-200 dark:border-[#0052D4]/25 p-8 rounded-sm hover:border-[#0052D4]/60 dark:hover:border-[#0052D4]/60 transition-colors">
              <div className="mb-6">
                <svg width="40" height="40" viewBox="0 0 48 48" fill="none" className="text-[#0052D4]">
                  <rect x="6" y="8" width="36" height="28" rx="3" stroke="currentColor" strokeWidth="2.5"/>
                  <path d="M16 40h16M24 36v4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M14 22h20M14 28h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3">Website & Marketing</h3>
              <p className="text-sm text-gray-500 dark:text-white/50 mb-6 leading-relaxed">Visual assets ready to deploy across your website, campaigns, and ongoing communications.</p>
              <div className="space-y-2">
                {['Homepage and banner visuals', 'Marketing images for campaigns', 'Visuals for press and communications', 'Content for ongoing social media use'].map(item => (
                  <div key={item} className="flex items-start gap-2 text-sm text-gray-600 dark:text-white/60">
                    <span className="text-[#0052D4] font-bold flex-shrink-0 mt-0.5">&#8594;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>


          </div>
          <p className="text-sm text-gray-400 dark:text-white/30 italic mt-8 text-center">All material is created in the same shoot, ensuring consistent quality and visual style across everything you receive.</p>
        </div>
      </section>

      {/* How It Works */}
      <section id="process" className="bg-gray-50 dark:bg-white/[0.02] border-y border-gray-200 dark:border-white/10 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">How It Works</p>
          <h2 className="text-4xl font-black mb-12 text-gray-900 dark:text-white">A Straightforward Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { step: '01', title: 'Initial Discussion', desc: 'We discuss your organisation, your goals, and the type of content that would be most useful for you.' },
              { step: '02', title: 'Pre-production Planning', desc: 'Scripts written and agreed, shot list built, day scheduled - everything customised to your business before a camera comes out.' },
              { step: '03', title: 'Shoot Day', desc: 'Up to a full day on location. Teleprompter provided for pieces to camera. Everything filmed to plan.' },
              { step: '04', title: 'Editing & Delivery', desc: '1 round of revisions on everything. Professionally edited video and photography delivered within 2 weeks, ready to post.' },
            ].map((s) => (
              <div key={s.step} className="bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 p-8 rounded-sm hover:border-[#0052D4]/40 transition-colors">
                <p className="text-5xl font-black gradient-text leading-none mb-5">{s.step}</p>
                <p className="font-black text-gray-900 dark:text-white mb-2">{s.title}</p>
                <p className="text-sm text-gray-500 dark:text-white/50 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-5 text-gray-600 dark:text-white/60 leading-relaxed">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40">What to Expect</p>
              <p className="text-gray-900 dark:text-white font-black text-2xl leading-tight">What a typical shoot might include.</p>
              <p>Every project is different, but Content Days commonly capture a range of material to leave you with a complete and versatile content library.</p>
              <p>The aim is always to make the most of the time available and deliver content that genuinely works across your platforms.</p>
            </div>
            <div className="bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 p-8 rounded-sm">
              <div className="space-y-4">
                {[
                  'Workplace activity and atmosphere',
                  'Team interactions and staff portraits',
                  'Interviews or testimonials',
                  'Product or service demonstrations',
                  'Environmental shots of your location',
                  'Supporting imagery for social media and marketing',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-gray-600 dark:text-white/70">
                    <span className="text-[#0052D4] font-bold mt-0.5 flex-shrink-0">-&gt;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-gray-50 dark:bg-white/[0.02] border-y border-gray-200 dark:border-white/10 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Why This Approach</p>
          <h2 className="text-4xl font-black mb-4 text-gray-900 dark:text-white">Why Clients Choose a Content Day</h2>
          <p className="text-gray-500 dark:text-white/50 max-w-2xl mb-12">Many businesses need both video and photography, but organising multiple shoots can quickly become complicated and expensive.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: 'Consistency', desc: 'All visuals are created together in the same session, ensuring the same style, quality, and look across everything you receive.' },
              { title: 'Efficiency', desc: 'A single structured shoot day rather than organising multiple separate productions across different weeks or months.' },
              { title: 'Value', desc: 'Booking video and photography separately often costs significantly more. A Content Day brings both together at a single rate.' },
              { title: 'Versatility', desc: 'Content you can use across websites, marketing campaigns, and social media for months to come - not just one or two pieces.' },
            ].map((b) => (
              <div key={b.title} className="bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 p-8 rounded-sm hover:border-[#0052D4]/40 transition-colors">
                <div className="w-8 h-8 gradient-bg rounded-sm mb-5" />
                <h3 className="text-xl font-black text-gray-900 dark:text-white mb-3">{b.title}</h3>
                <p className="text-sm text-gray-500 dark:text-white/50 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section id="pricing" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2 text-center">Pricing</p>
          <h2 className="text-4xl font-black mb-4 text-gray-900 dark:text-white text-center">Everything Included</h2>
          <p className="text-gray-500 dark:text-white/50 text-center max-w-xl mx-auto mb-12">Professional video, photography, and editing combined into one focused production session.</p>

          {/* Pricing card */}
          <div className="relative bg-gray-50 dark:bg-gradient-to-br dark:from-[#0d1a33] dark:to-[#0a0f1e] border border-[#0052D4]/40 dark:border-[#0052D4]/50 rounded-sm p-10 max-w-3xl mx-auto shadow-[0_0_60px_rgba(0,82,212,0.08)] dark:shadow-[0_0_60px_rgba(0,82,212,0.2)]">

            {/* Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="gradient-bg text-white text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">Best Value</span>
            </div>

            {/* Price */}
            <div className="text-center mb-8 pb-8 border-b border-gray-200 dark:border-white/10">
              <p className="text-7xl font-black text-gray-900 dark:text-white leading-none mb-3">£999</p>
              <p className="text-sm text-gray-500 dark:text-white/50 mb-6">Complete Content Day - video, photography, and editing included</p>
              <a href="#book" className="gradient-bg text-white font-bold px-10 py-4 rounded-sm hover:opacity-90 transition-opacity text-sm uppercase tracking-wider inline-block">
                Book Now
              </a>
            </div>

            {/* Feature groups */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-6">
              {[
                {
                  label: 'Coverage',
                  items: ['Up to 8 hours filming and photography', 'Professional 4K video capture', 'Professional photography coverage', 'Multiple setups or locations where required'],
                },
                {
                  label: 'Video Deliverables',
                  items: ['1 promotional video (30-45 seconds)', '12 edited reels (3 per week)', 'Widescreen and portrait formats', 'Suitable for web and social media'],
                },
                {
                  label: 'Photography Deliverables',
                  items: ['30 professionally edited images', 'High resolution files for web, social, and print'],
                },
                {
                  label: 'Post Production',
                  items: ['Full editing and colour grading', 'Teleprompter and pre-production planning', '1 round of revisions included', '2-week turnaround'],
                },
              ].map((group) => (
                <div key={group.label}>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0052D4] mb-3">{group.label}</p>
                  <div className="space-y-2">
                    {group.items.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-sm text-gray-600 dark:text-white/60">
                        <span className="text-[#0052D4] font-bold flex-shrink-0 mt-0.5">&#10003;</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-gray-400 dark:text-white/30 italic">This format offers significant value compared to booking video and photography separately.</p>

            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-white/10 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0052D4] mb-2">Payment</p>
              <p className="text-sm text-gray-500 dark:text-white/50">50% deposit to secure your date · 50% on delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="bg-gray-50 dark:bg-white/[0.02] border-y border-gray-200 dark:border-white/10 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Client Reviews</p>
          <h2 className="text-4xl font-black mb-12 text-gray-900 dark:text-white">What Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 p-8 rounded-sm">
                <p className="text-[#0052D4] font-bold mb-4">★★★★★</p>
                <blockquote className="text-sm text-gray-600 dark:text-white/60 leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</blockquote>
                <p className="text-sm font-black text-gray-900 dark:text-white">{t.name} <span className="font-normal text-gray-400 dark:text-white/40">- {t.company}</span></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Day Video Examples */}
      <section className="border-t border-gray-200 dark:border-white/10 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Example Work</p>
          <h2 className="text-3xl font-black mb-12 text-gray-900 dark:text-white">Content Day Films</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <VideoCard id="acscOlaQAcA" title="All Sewn Up - Content Day Film" category="Commercial" />
            <VideoCard id="fVm0VBWuyt8" title="Rita Rusk Promo (Socially Creative)" category="Commercial" />
            <VideoCard id="9zONKRiBPm0" title="Warrior In Training - Pilates Promo" category="Commercial" />
          </div>
        </div>
      </section>

      {/* Past Content Days */}
      <section className="border-t border-gray-200 dark:border-white/10 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Past Content Days</p>
          <h2 className="text-3xl font-black mb-16 text-gray-900 dark:text-white">Recent Sessions</h2>
          <div className="space-y-20">
            {shoots.map((shoot) => (
              <div key={shoot.client}>
                <div className="flex items-baseline gap-4 mb-6 pb-4 border-b border-gray-200 dark:border-white/10">
                  <h3 className="text-xl font-black text-gray-900 dark:text-white">{shoot.client}</h3>
                  {shoot.url && (
                    <a href={shoot.url} target="_blank" rel="noopener noreferrer" className="text-xs text-[#0052D4] dark:text-[#00C6FF] hover:underline">{shoot.url.replace('https://', '')}</a>
                  )}
                  <span className="text-xs text-gray-400 dark:text-white/40 ml-auto">{shoot.desc}</span>
                </div>
                <MasonryGallery images={shoot.photos.map(src => ({ src, alt: `${shoot.client} content day` }))} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="book" className="border-t border-gray-200 dark:border-white/10 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/40 mb-2">Book a Content Day</p>
          <h2 className="text-4xl font-black mb-4 text-gray-900 dark:text-white">Let&apos;s Get Started</h2>
          <p className="text-gray-500 dark:text-white/50 max-w-xl mb-12">Fill in the short form below and I&apos;ll be in touch within 24 hours to discuss your Content Day. 50% deposit secures your date — the balance is due on delivery.</p>
          <ContentDayBookingForm />
        </div>
      </section>

    </div>
  )
}
