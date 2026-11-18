# Lighthouse results

Lighthouse 13.6.0, Chromium Chrome, production build (`next build` then `next start`), run 2026-11-18 in the build container. Default mobile (simulated slow 4G, 4x CPU) and desktop presets. P = Performance, A = Accessibility, BP = Best Practices.

## Live mode (NEXT_PUBLIC_SITE_MODE=live, NEXT_PUBLIC_SITE_URL=http://localhost:3000, guard skipped for testing)

```
/                              mobile   P 92 A 100 BP 100 SEO 100 | LCP 3.0 s CLS 0.006 TBT 170 ms 
/                              desktop  P 100 A 100 BP 100 SEO 100 | LCP 0.8 s CLS 0.002 TBT 0 ms 
/services/general-dentistry    mobile   P 91 A 100 BP 100 SEO 100 | LCP 3.3 s CLS 0 TBT 140 ms 
/services/general-dentistry    desktop  P 100 A 100 BP 100 SEO 100 | LCP 0.7 s CLS 0 TBT 0 ms 
/services/dental-implants      mobile   P 94 A 100 BP 100 SEO 100 | LCP 2.7 s CLS 0 TBT 150 ms 
/services/dental-implants      desktop  P 100 A 100 BP 100 SEO 100 | LCP 0.6 s CLS 0.003 TBT 0 ms 
/locations/baltimore           mobile   P 93 A 100 BP 100 SEO 100 | LCP 3.2 s CLS 0.001 TBT 60 ms 
/locations/baltimore           desktop  P 100 A 100 BP 100 SEO 100 | LCP 0.7 s CLS 0.004 TBT 0 ms 
/team/daniel-reyes             mobile   P 99 A 100 BP 100 SEO 100 | LCP 0.8 s CLS 0.002 TBT 100 ms 
/team/daniel-reyes             desktop  P 100 A 100 BP 100 SEO 100 | LCP 0.2 s CLS 0.001 TBT 0 ms 
/tips/implant-or-bridge        mobile   P 99 A 100 BP 100 SEO 100 | LCP 0.9 s CLS 0.001 TBT 140 ms 
/tips/implant-or-bridge        desktop  P 100 A 100 BP 100 SEO 100 | LCP 0.7 s CLS 0 TBT 0 ms 
/contact                       mobile   P 98 A 100 BP 100 SEO 100 | LCP 0.8 s CLS 0.001 TBT 150 ms 
/contact                       desktop  P 100 A 100 BP 100 SEO 100 | LCP 0.2 s CLS 0.001 TBT 0 ms 
```

## Demo mode (default)

```
/                              mobile   P 92 A 100 BP 100 SEO 69 | LCP 2.9 s CLS 0.001 TBT 190 ms | fails: is-crawlable
/                              desktop  P 100 A 100 BP 100 SEO 69 | LCP 0.7 s CLS 0.002 TBT 0 ms | fails: is-crawlable
/services/general-dentistry    mobile   P 92 A 100 BP 100 SEO 69 | LCP 3.3 s CLS 0 TBT 60 ms | fails: is-crawlable
/services/general-dentistry    desktop  P 100 A 100 BP 100 SEO 69 | LCP 0.7 s CLS 0 TBT 0 ms | fails: is-crawlable
/services/dental-implants      mobile   P 95 A 100 BP 100 SEO 69 | LCP 2.7 s CLS 0 TBT 130 ms | fails: is-crawlable
/services/dental-implants      desktop  P 100 A 100 BP 100 SEO 69 | LCP 0.7 s CLS 0 TBT 0 ms | fails: is-crawlable
/locations/baltimore           mobile   P 97 A 100 BP 100 SEO 69 | LCP 2.6 s CLS 0.001 TBT 60 ms | fails: is-crawlable
/locations/baltimore           desktop  P 100 A 100 BP 100 SEO 69 | LCP 0.7 s CLS 0.001 TBT 0 ms | fails: is-crawlable
/team/daniel-reyes             mobile   P 99 A 100 BP 100 SEO 66 | LCP 0.8 s CLS 0.002 TBT 140 ms | fails: is-crawlable
/team/daniel-reyes             desktop  P 100 A 100 BP 100 SEO 66 | LCP 0.2 s CLS 0.001 TBT 0 ms | fails: is-crawlable
/tips/implant-or-bridge        mobile   P 100 A 100 BP 100 SEO 69 | LCP 0.9 s CLS 0.001 TBT 80 ms | fails: is-crawlable
/tips/implant-or-bridge        desktop  P 100 A 100 BP 100 SEO 69 | LCP 0.7 s CLS 0 TBT 0 ms | fails: is-crawlable
/contact                       mobile   P 98 A 100 BP 100 SEO 66 | LCP 0.8 s CLS 0.001 TBT 160 ms | fails: is-crawlable
/contact                       desktop  P 100 A 100 BP 100 SEO 66 | LCP 0.6 s CLS 0.001 TBT 0 ms | fails: is-crawlable
```

Demo SEO fails only `is-crawlable` ("Page is blocked from indexing"), as intended. Pages showing 66 instead of 69 differ only in which SEO audits are not applicable.

Observed (unthrottled) LCP is under 0.3 s on every page. Simulated mobile LCP on pages whose LCP is a hero photo is 2.6 to 3.3 s, above the 2.5 s budget; the remaining time is the framework JavaScript on the simulated 4G link.
