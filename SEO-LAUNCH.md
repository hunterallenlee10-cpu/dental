# SEO launch checklist (when a practice buys the template)

The deployed preview runs in **demo mode**: every page and file carries `noindex, nofollow` (meta tag and `X-Robots-Tag` header), the sitemap is empty, AI crawlers are disallowed by name in `robots.txt`, `llms.txt` returns 404, and the footer shows the concept lines. Live mode is only run locally until a practice buys it.

## 1. Replace every placeholder (the build guard lists them)

Run this to see everything a buying practice must supply:

```bash
node scripts/guard.mjs
```

A live build (`NEXT_PUBLIC_SITE_MODE=live`) **refuses to build** while any `DRAFT` marker, placeholder review card, sample case, placeholder portrait or `TODO: swap` remains. Replace, at minimum:

- Practice name, logo, tagline, description, phone, email: `lib/business.ts`
- Office street addresses, landmark lines and office photos: `lib/business.ts`, `components/templates/LocationTemplate.tsx`, `components/sections/LocationPanels.tsx`
- Team names, credentials, bios and real portraits (replace `PlaceholderPortrait`): `content/team.ts`, `components/team/`
- City skyline photo for the mission band: `components/sections/home/MissionBand.tsx`
- Accepted insurance carriers, lender name, membership plan (price and inclusions), prices (`lib/pricing.ts`, switched off): `lib/business.ts`, `content/pages.ts`
- Google rating and real reviews (plain attributed text only, never `aggregateRating` or `review` markup about the practice): `components/sections/home/ProofStrip.tsx`, `components/sections/ReviewsPlaceholder.tsx`, `app/reviews/page.tsx`
- Before and after cases: delete `public/images/raw/64` to `83` (all `SAMPLE`) and add the practice's own in `lib/cases.ts`
- Legal pages (privacy and terms, cookies), warranty terms, social links, new patient forms
- Every `// DRAFT: dentist to confirm` medical line, reviewed by the practice's dentist
- Provider status for trademarked names (Invisalign, All-on-4)

`AURELLE_SKIP_GUARD=1` skips the guard for local SEO testing only. Never set it on Vercel.

## 2. Flip the switch on Vercel

1. In the Vercel project settings, set environment variables for Production:
   - `NEXT_PUBLIC_SITE_MODE=live`
   - `NEXT_PUBLIC_SITE_URL=https://www.thepracticedomain.com` (no trailing slash)
2. Redeploy.
3. Confirm:
   - `curl -I https://www.thepracticedomain.com/` shows **no** `X-Robots-Tag` header.
   - The page source has `<meta name="robots" content="index, follow">`.
   - `/sitemap.xml` lists every page with last-modified dates.
   - `/robots.txt` lists the sitemap. `/llms.txt` returns the practice summary.
   - The footer no longer shows the concept lines.

## 3. Redirect the old site, page by page

If the practice has an old site, map every old URL to its closest new equivalent in `next.config.ts` (`redirects()`), permanent (308). Never send everything to the home page. Example shape:

| Old URL | New URL |
|---|---|
| /dental-implants.html | /services/dental-implants |
| /our-team/dr-smith | /team/(new slug) |
| /contact-us | /contact |

`lib/routes.ts` also holds the source-template map (`sourceRouteMap`) for reference.

## 4. Google Business Profile and listings

- Link each office's Google Business Profile to its location page (`/locations/{town}`). The flagship profile links to the home page.
- Use exactly the same name, address and phone on Google Business Profile, Apple Business, Bing Places, Yelp, the BBB and Healthgrades or Zocdoc if used.

## 5. Search engines

- Verify the domain in Google Search Console and Bing Webmaster Tools, submit `/sitemap.xml`, and request indexing for the home page and the four location pages.
- Confirm the host's bot protection (Vercel Firewall or Cloudflare) is not blocking search or AI search crawlers.
- Retire the preview URL (or keep it password protected) so it does not compete with the live domain.

## What to expect

The site is technically complete: titles, descriptions, canonicals, structured data, sitemap and speed are done. Ranking from here depends mostly on the Google Business Profiles, real reviews, links from other sites and consistent listings.
