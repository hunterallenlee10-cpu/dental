# Implementation kickstart: Aurelle Dental

## Versions (installed)
Next.js 16.4.6 (App Router, Turbopack), React 19.3.0, TypeScript 5.9.3, Tailwind CSS 4.3.3, motion 14.14.0, lucide-react 1.75.0, @vercel/analytics 2.0.1, ESLint 9. Node 22.

Notes from the Next 16 docs in `node_modules/next/dist/docs/`: `params` and `searchParams` are Promises; `middleware` is now `proxy`; `next lint` is gone; `next/image` uses `preload` (the `priority` prop is deprecated); `images.qualities` defaults to `[75]`; React 19.3 ships `<ViewTransition>`. The scaffold enabled `cacheComponents` and `partialPrefetching`; this is a fully static site so they are turned off to keep plain static generation.

## Plan
1. Assets from Drive into `public/images/raw/` (83 photos) and `content/source/`. Done.
2. Content translated into typed data in `content/` in parallel with the home page build (agents), then reviewed by hand.
3. Home page first, phase by phase, polished at 375 and 1440 before inner pages.
4. Templates driven by data: category hub, service, location, team member, article, content pages.
5. SEO layer and launch switch (`NEXT_PUBLIC_SITE_MODE`), build guard, OG image, icons.
6. `npm run check` after every phase, screenshots, three fixes, commit, push.
7. Lighthouse (live then demo), keyboard and 200% zoom passes, two independent reviews.

## Design tokens ("Harbor Light")
| Token | Hex | OKLCH |
|---|---|---|
| paper | #FBFCFC | oklch(99.03% 0.0011 197.14) |
| porcelain | #F3F5F6 | oklch(96.89% 0.0025 228.78) |
| ice | #E6F0F4 | oklch(94.88% 0.0120 223.53) |
| ink | #0E2A38 | oklch(27.08% 0.0424 233.15) |
| mute | #4A5F6A | oklch(47.24% 0.0311 231.05) |
| line | ink at 12% | oklch(27.08% 0.0424 233.15 / 0.12) |
| navy | #12465F | oklch(37.32% 0.0680 234.12) |
| azure-deep | #08679A | oklch(49.14% 0.1122 241.19) |
| azure | #0B7AB2 | oklch(55.23% 0.1229 239.67) |
| cyan | #13A9E1 | oklch(69.04% 0.1372 231.71) |
| mist | #9DB6C2 | oklch(76.12% 0.0324 228.35) |
| success | #1F7A55 | oklch(51.73% 0.1026 161.42) |
| error | #B42318 | oklch(50.03% 0.1821 29.51) |

Fonts: Newsreader (display, 300 to 460, italic accent), Geist (400, 500, 600). Type scale: label 0.75 to 0.8125rem; body 1 to 1.0625rem / 1.6; lead 1.125 to 1.3125rem; h3 1.375 to 1.75rem; h2 2.25 to 4rem / 1.05; display 2.75 to 6rem / 0.98. Radius 4px (photos, buttons), 28px (ice CTA panel). Shadow `0 18px 40px -12px` ink 35%. 8px grid. Sections 128px desktop, 80px mobile.

Motion: First Light (hero) and Coverage Check result only, plus the CSS polish tier (scroll reveals in `@supports (animation-timeline: view())`, mission word reveal, view transitions).

## Checklist (section 10 of BUILD-SPEC)
- [ ] Hero sells the template; First Light plays once, never hides the headline, no layout shift; 375px headline and Book visible.
- [ ] Coverage Check instant for every combination, sources in code, "General guide, not a quote", keyboard and screen reader.
- [ ] Ten before and after sliders: mouse, touch, arrow keys, "Sample case" label.
- [ ] Every Book a visit opens the Visit Request with the right pre-selects; honest last step; phone, text, directions links work.
- [ ] All routes exist, nav and footer resolve, no thin pages.
- [ ] Zero Slovenian, source names, em dashes, stock or AI images, real team photos.
- [ ] Every DRAFT, sample and placeholder labelled in demo; live build fails while any remain.
- [ ] Two fonts, token palette, motion in two places, no loading intro or cursor effects.
- [ ] 375px: no overflow, menu and floating bar work, bar never covers focus.
- [ ] Demo: noindex meta and X-Robots-Tag on pages and images, concept lines. Live: index, sitemap, llms.txt, no concept lines.
- [ ] Lighthouse live SEO 100 on every tested page; others 90+. Demo: only indexing audit fails.
- [ ] One h1 per page with what and where; unique titles and descriptions; JSON-LD valid and truthful.
- [ ] Keyboard-only and 200% zoom passes.
