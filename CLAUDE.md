# mediamurray.com

Jamie Murray's business site (MediaMurray - solo Edinburgh videographer/photographer). Next.js 16 App Router, React 18, TypeScript, Tailwind 3. Deployed on Vercel. Not Wix.

## Commands
- `npm run dev` - local dev server
- `npm run build` - production build (run before saying a change is done)
- `npm run lint` - ESLint 9 flat config (`eslint.config.mjs`)
- `npx tsc --noEmit` - type check

## Structure
- `app/` - pages; `app/api/` - form handlers (brief, contact, planner-enquiry) and the private dashboard API
- `app/dashboard` + `app/api/dashboard/*` - private Notion-backed dashboard, protected by `middleware.ts` (cookie `mm_dashboard_auth`). Any new dashboard route must stay behind that middleware.
- `components/` - shared UI; `lib/locations.ts` - location page data
- `_drafts/` - pages pulled from the live site; not built
- `.claude/skills` - design skills (impeccable etc.); impeccable hook runs on UI edits

## Copy rules (all user-facing text)
- UK English, DD/MM/YYYY dates
- Never use em dashes. Use a plain hyphen.
- Scottish audience: direct and factual, no soppy personal branding, no "one person, one point of contact, no agency markup" lines
- Project count is 170+
- Business is listed as "Media Murray" on Google Business Profile
- Never mention cadets/ACF in business copy (the /wlbn-media portfolio page is the exception)
- No political clients in marketing (e.g. David Green/Lib Dems, Martin Rhodes, Eunis Jassemi)
- Pricing only from the Notion "MediaMurray Pricing Structure 2026" page; don't publish day rates on onboarding

## Working rules
- Surgical changes; match existing style
- Don't deploy or push without Jamie's go-ahead
- Secrets live in Vercel env vars (RESEND_API_KEY, GMAIL_*, NOTION_API_KEY, DASHBOARD_PASSWORD); never commit `.env*`
