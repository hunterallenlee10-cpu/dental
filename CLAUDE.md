@AGENTS.md

# Aurelle Dental (concept site)

Front-end-only concept site for a fictional four-office Maryland dental practice. Sales template for Lee Enterprises Unlimited. Full spec: `BUILD-SPEC.md`. **Re-read the matching part of BUILD-SPEC.md at the start of each phase.**

## Stack
Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind CSS 4 (tokens in the `@theme` block of `app/globals.css`), `motion` (only First Light and the Coverage Check result), `lucide-react`, `@vercel/analytics`. No backend.

## Commands
- `npm run dev` / `npm run build` / `npm start`
- `npm run lint` (ESLint directly; `next lint` no longer exists)
- `npm run check` (builds, then scans every rendered page: one h1, links, DRAFT leaks, Slovenian, em dashes, image attrs, phone/email; live mode also blocks placeholders)
- `npm run shots` (Playwright screenshots at 1440 and 375 into `screenshots/`)
- Live mode locally: `NEXT_PUBLIC_SITE_MODE=live NEXT_PUBLIC_SITE_URL=http://localhost:3000 npm run build`

## Where things live
- Facts: `lib/business.ts` (every value `// DRAFT`). Routes: `lib/routes.ts` (use for every internal link). Coverage tiers: `lib/coverage.ts`. Pricing (off): `lib/pricing.ts`.
- Content (typed, English): `content/*.ts`. `content/source/` is reference input only, never imported.
- Sections: `components/sections/`, templates: `components/templates/`. No file over 500 lines.
- Photos: `public/images/raw/NN-*.jpg` (numbered, full size). Served through `next/image`.

## Rules that never bend
- No em dashes or "--" anywhere. Periods and commas.
- Invent nothing: no reviews, ratings, counts, years, awards, prices, carrier or lender names, schools, credentials beyond section 1 of the spec.
- No real people's photos for team members; no photo from outside the Drive folder; no stock, no AI images.
- No trace of the source clinic: no Slovenian words, source names, towns, phone, email, logo.
- Samples (`64` to `83`), placeholder portraits, review placeholders and DRAFT values are visibly labelled in demo mode and fail the build in live mode.
- Medical content stays as cautious as the source; `// DRAFT: dentist to confirm` where needed.
- Primary button always "Book a visit" (orthodontics card: "Book a consultation"). No newsletter, no chat widget.
- Two fonts (Newsreader, Geist), token palette only, signature motion in exactly two places.
