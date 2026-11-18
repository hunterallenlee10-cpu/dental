# Translation brief (for content agents)

Source: `content/source/source-content-sl.md` (Slovenian, already scrubbed, names/towns/phone swapped).
Spec: `BUILD-SPEC.md` sections 1, 4b and 8 are binding. Types: `content/types.ts`.

Write natural US English the way a calm, plain-spoken American dentist talks. Not sentence-by-sentence machine translation. Keep each page's structure and every medical fact (durations, healing times, aftercare steps). Add no new medical claims.

Hard rules:
- NO em dashes, NO en dashes used as dashes, NO "--". Use periods and commas.
- No Slovenian characters (č š ž ć đ) and none of: Lux, Ljubljana, Maribor, Krško, Krsko, Portorož, Portoroz, 080, ".si", Leanpay, Diners, ZZZS, Astra Tech, Osstem, Hiossen, or any brand, lender, insurer, school or product maker name (Invisalign is OK only as the service name the site map uses).
- No hype words (revolutionary, cutting-edge, state-of-the-art, seamless, elevate, best, #1), no guarantees, no warranties, no prices, no statistics, no patient counts, no years.
- US spelling, sentence case headings, numerals for numbers ("2 to 6 months").
- Term map: predračun -> written treatment estimate (or "written estimate"); ortopan -> panoramic x-ray; slikica -> small x-ray (bitewing or periapical); CBCT/3D slikanje -> 3D CBCT scan; ustna higiena -> teeth cleaning; ustni higienik -> dental hygienist; zobni kamen -> tartar; parodontitis -> gum disease (periodontitis); protetika -> restorative dentistry; zobna luska -> porcelain veneer; zalivka/plomba -> filling; prevleka -> crown; mostiček -> bridge; koferdam -> rubber dam; apeks lokator -> apex locator; kiretaža -> deep cleaning (scaling and root planing); reženjska operacija -> gum flap surgery; zobni aparat -> braces; retencija -> retainers; ambulanta -> office; "Naročite se" -> "Book a visit".
- Payment lines in the source ("kreditno kartico ali kartico Diners, na obroke pa z Leanpay") become: "You can pay by card, with an HSA or FSA card, or in monthly payments through our financing partner." with `// DRAFT: lender` on that line.
- State/national insurance mentions become "We work with most PPO dental plans." `// DRAFT: carrier list`.
- "Pon-Pet 7.00-20.00" -> "Mon to Fri, 7 AM to 8 PM". Phone (410) 555-0142, email hello@aurelledental.com.
- Any [DRAFT ...] / statistic sentence: rewrite WITHOUT the number, or drop it. Never invent content to fill a marker.
- Any "Preberite več" link text: we write descriptive link text in code, so you only supply data.
- Where a US norm differs in a way that matters to safety, keep the source's cautious wording and add `// DRAFT: dentist to confirm` as a TS comment on that line.
- Warranty/guarantee sentences in the source: drop, with `// DRAFT: the practice confirms its own warranty terms`.
- Drop "Fotografije prikazujejo mesta, ne ambulant." and review blocks.
- Reading time "5 min" -> readMinutes: 5.

Output: a TypeScript file under `content/` that compiles (`npx tsc --noEmit -p .` from repo root must not report errors in your file). Import types from `./types`. Use double quotes; escape apostrophes properly. When done, run:
  grep -nP "[čšžćđČŠŽ—–]|--|Lux|Ljubljana|Maribor|Leanpay|Diners" <yourfile>
and fix every hit. Then run `npx tsc --noEmit -p .` and fix errors in your file only. Do not touch any other file. Do not run git.
