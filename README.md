# Aurelle Dental (concept site)

A front-end-only concept website for a fictional four-office Maryland dental practice. A sales template by Lee Enterprises Unlimited: every business fact is a labelled DRAFT placeholder.

- Spec: `BUILD-SPEC.md`. Plan and tokens: `implementation_kickstart.md`. Launch: `SEO-LAUNCH.md`.
- Stack: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, motion, lucide-react.

```bash
npm install
npm run dev
```

```bash
npm run check
```

`npm run check` builds and scans every page (one h1, links, DRAFT leaks, Slovenian traces, dashes, image attributes, phone and email). `node scripts/validate-jsonld.mjs` checks structured data. `node scripts/guard.mjs` lists every placeholder a buying practice must replace.

Demo mode is the default (`noindex` everywhere). Live mode: `NEXT_PUBLIC_SITE_MODE=live` and `NEXT_PUBLIC_SITE_URL`, see `SEO-LAUNCH.md`. Deploys to Vercel as its own project with no extra settings.
