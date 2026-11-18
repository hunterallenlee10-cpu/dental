# Aurelle Dental demo: niche benchmark (checked 18 Nov 2026)

Base design studied in full: the Lux Dental concept demo (lux-dental-demo.vercel.app, Next.js, Slovenian, 87 pages). It is the layout and art direction this demo recreates, in English, for a fictional Maryland practice. Benchmarks below are what the English version is upgraded against.

| Site | Launched | Why it is here | Pages and nav | Best at | Adopt | Avoid |
|---|---|---|---|---|---|---|
| Lux Dental concept (source) | 2026 | The design being recreated | Services (4 hubs + ~30 service pages), Locations (4), Team (16 bios), About, Prices, Tips (15 articles), Contact, Book, Reviews, Payment, legal | Calm editorial art direction: Newsreader serif with italic accent words, deep ink navy, azure, blue-accessory lifestyle shoots | All of it, as the base | Online booking says "not available yet"; before/after stacked statically; a heavy cyan glow on stars; machine-translated feel once translated; location cards show only city photos |
| Tend (hellotend.com) | Ongoing national brand, refreshed recently | Best-funded US dental brand; structure customers now expect | Core Services, Special Services, Locations by market, Patients (Payment and Financing, Insurance, Dental Plans), About | Booking repeated everywhere, judgment-free tone, insurance checker, long feature list (evening hours, financing, PPO) | Insurance coverage check, "no judgment" comfort language, PPO list, Patients menu grouping | No prices anywhere on the home page, so cost anxiety is never answered |
| South Cliff Dental Group | Awwwards Honorable Mention, Jun 2026 | Award-level craft in this exact niche | Not opened (Awwwards blocks fetching) | Recognised for design craft in 2026 | Treat dentistry as a premium editorial brand | n/a |
| LAVA dental | Awwwards Honorable Mention, Jan 2026 | Award-level, one-page studio concept | One page | Restraint, structured motion, clarity over marketing. Palette #031C14 and #AABEAF | Restraint: two motion moments, everything else still | One page is too thin for a 4-office practice |
| Natalie Herzel Dental Clinic (RedSquirrel) | Awwwards inspiration listing | Award-level clinic site | Services, photos, full menu, 404 | Full-screen menu, editorial photography | A designed full-screen mobile menu and a real 404 | n/a |
| Top Baltimore results (Catonsville Dental Care, Inner Harbor Dental Associates) | Older builds | What ranks locally (4.6 to 4.9 stars with 1,000+ reviews) | Team, services, testimonials, emergency, new patients | Review volume, emergency page, team pages | Emergency page, New Patients page, team bios, reviews near the top | Dated agency templates, stock photos, slow sliders |

## Build notes

- **Source (Lux):** colour ink #0E2A38 background for hero overlay and footer, navy #12465F, azure #0B7AB2 for italic accent words and links, cyan #13A9E1 sparkles, ice #E6F0F4 panels, porcelain #F3F5F6, mist #9DB6C2, mute #4A5F6A text. Roughly 70% white, 20% ink and ice, 10% azure. Type: Newsreader (display, light weights 370 to 460, italic accent words) and Geist (body). Hero headline about 96px desktop. Layout: full-bleed photo hero with left ink gradient; centered serif section heads; 4-up photo tiles; staggered masonry collages; pinned horizontal before/after rail; expanding location panels with map tabs; accordion FAQ; rounded ice CTA panel; ink footer. Motion: word-by-word blur reveal on the mission paragraph, pinned horizontal scroll, floating pill CTA bar. Build: Next.js 16 with Turbopack, Tailwind 4 tokens, next/image.
- **Tend:** booking is the primary action; phone in the header; insurance and financing grouped under Patients.

## What the best sites in this niche have in common
1. A clear "Book" action in the header and hero, with the phone beside it.
2. Insurance and payment answered early, not buried.
3. Real people: dentists with bios, patients with first names.
4. A dedicated emergency path for tooth pain.
5. Location pages with hours and directions.

## How the newest ones are built
1. Editorial serif display type with a quiet sans body, lots of white space.
2. Restrained motion: one hero moment, scroll reveals in CSS, no loading screens.
3. Lifestyle photography with a single recurring brand colour accessory.
4. Interactive before/after comparison instead of static pairs.
5. Small tools that answer a worry (insurance check, cost guide) without a form in front.

## Dated patterns to avoid
Auto-rotating hero sliders, stock smiling-family photos, chat widgets that cover the CTA, "Request appointment" forms with 12 fields, review widgets that load slowly.

## Where they are all weak
1. Nobody answers "what will this cost me with my insurance" honestly before the call.
2. Booking forms pretend to book but only send an email.
3. Before/after galleries are static and tiny on phones.
