# Aurelle Dental: Claude Code Build Prompt

Paste everything below the line into Claude Code, opened in an empty folder or a freshly created repo.

---

You are a senior web designer and front-end engineer. Your job is to build an award-level, front-end-only concept website for **Aurelle Dental**, a fictional four-office dental practice in Maryland (Baltimore, Frederick, Leonardtown and Annapolis). It is a sales template for Lee Enterprises Unlimited: Hunter will show it to US dental practices as "this is what your site could be", then swap in their name, people, photos and facts. Every business fact on it is therefore a labelled DRAFT placeholder, and nothing on it may read as a real practice's claim.

The design is a recreation, in English, of a Slovenian dental concept site (the Lux Dental demo). Its art direction is excellent: an editorial serif with italic accent words, a deep ink navy, an azure accent, and a lifestyle photo shoot where every model wears one blue accessory. Its weaknesses are what you fix: online booking literally says "not available yet", the before and after cases are static stacked photos, it never answers "what will this cost me with my insurance", it has no emergency path, and every word is written for a European clinic (euro installment lenders, Slovenian insurance, city photos of Ljubljana). The English version has to feel like it was written in Maryland for American patients, not translated.

The first five seconds decide it. A practice owner will most likely open the link on a phone, so the first phone screen matters more than anything else. It must look like a premium editorial health brand, not a dental template. If you could swap the logo onto a chain dentist's site and nobody would notice, it is not finished.

**Finish the whole build in this session.** Ordinary obstacles (a port in use, a missing browser for screenshots, an image that will not convert, a Lighthouse run that fails) are yours to diagnose and work through. Do not end by listing what is left or offering to continue. The only planned stop is missing photos, as described in section 0.

**First actions, in this order:**
1. Scaffold the Next.js app into the current folder first, before writing any other file, because `create-next-app` refuses a folder that already has files. If the folder already holds anything other than `.git` (a README, LICENSE or `.gitignore` a new GitHub repo adds), scaffold into a temporary subfolder, move everything up into the root without overwriting the existing README or LICENSE, merge the `.gitignore` files, and delete the temporary folder.
2. Save this whole prompt into the project as `BUILD-SPEC.md`.
3. Write a short `CLAUDE.md` (the stack, the commands, the rules that never bend from section 8, and "re-read the matching part of BUILD-SPEC.md at the start of each phase").
4. If the folder is not already a git repo, run `git init`. Commit.
5. Write `implementation_kickstart.md` (the plan, the design tokens and the checklist from section 10) and commit it.

Commit after every phase. If the repo has a remote, push after each phase too, so progress is saved off this machine.

## 0. Get the assets first

All images and the source copy live in Hunter's Google Drive folder **"Aurelle Dental - Website Demo Assets"**:
https://drive.google.com/drive/folders/1pWCfguUAc6iUSmHu42YEhGeT1dRRsH0p

- `photos/` (folder ID `1rQ_aVb6lTRAIbmecjptYhy0bGUdSjSNk`): 83 photos. Files `01` to `16` are loose JPGs. Files `17` to `83` are inside six zips (`photos-17-30.zip`, `photos-31-39.zip`, `photos-40-49.zip`, `photos-50-58.zip`, `photos-59-63.zip`, `photos-64-83-SAMPLE-before-after.zip`). Unzip them all into the same folder. You must end with 83 files numbered `01` to `83`.
- `reference-brand (look and feel only, not site images)/` (folder ID `1t7zxKhGc4PzowiyeVY5L20Xq14iLC7xH`): `reference-brand.zip` with the source demo's Slovenian city photos and its logo. Look only. Never put them on the site and never imitate the logo.
- `source-content-sl.md` (in the root folder): the full copy of all 86 source pages in Slovenian, already scrubbed of the source clinic's reviews, ratings, statistics, staff bios and addresses, with names, towns, phone and email already swapped to the Aurelle facts. Section 4b says how to turn it into English.
- `photo-map.md` and `manifest.json` (root folder): the same table as below, with sizes and hashes.
- `benchmark.md` (root folder): the niche research behind the upgrades in this prompt.

If you have a Google Drive connector, download everything above into `public/images/raw/` (photos) and `content/source/` (the markdown files and `manifest.json`). If you do not, stop and ask Hunter to drop the photos folder into `public/images/raw/` and the markdown files into `content/source/`, then continue. `content/source/` is reference input only: nothing in it is imported by the site, and the Slovenian checks below skip it. Count the photos (83). Look at every image yourself before you design, so you know what is in each one.

Keep the source files at full size in `public/images/` with the numbered names. `next/image` serves the right size per screen (see section 6). Do not hand-convert them to one fixed size.

### Photo map (what each file is and where it goes)

The photos are a mix of a lifestyle brand shoot (models with blue headphones, blue sunglasses, blue tweed), clinical detail shots, and ten before and after pairs. Only `01`, `02`, `30` and `37` to `58` are wide enough to run full-bleed on a desktop, and `01` is 1672px wide, so cap the hero frame at 1672px on very large screens (center it on the ink background) rather than stretching it. Square 1100 to 1254px photos go in tiles, collages and half-width heroes. The tall `09` and `14` are 900x1800 and only work as tall collage tiles. The before and after halves (`64` to `81`) are 600x300 each, so their slider card is never wider than 600px. Never stretch a photo past its native size.

| File | Size | What it shows | Use it for |
|---|---|---|---|
| `01-hero-patient-smile-checkup-BEST` | 1672x941 (full-bleed OK) | Smiling young woman in the dental chair, gloved hands holding a mirror and probe at her teeth, soft dark left side for text | Home hero, full-bleed behind the h1 (text sits on the darker left third). OG image base Note: 1672x941. Cap the hero frame at 1672px wide on very large screens |
| `02-cloud-soft-on-black` | 1672x941 (full-bleed OK) | Single soft white cloud on pure black | Mission statement band texture behind the 'Every smile has its own story' paragraph (blend: screen, low opacity) Note: Decorative. Empty alt |
| `03-service-general-dentist-explains-brochure` | 1254x1254 (half-width or contained hero) | Dentist in white coat explaining a brochure to a smiling patient in the chair, assistant behind | Home service tile 'General dentistry', General dentistry hub hero |
| `04-service-cosmetic-woman-dark-blazer` | 1254x1254 (half-width or contained hero) | Confident smiling woman with long brown hair in a black blazer, grey studio background | Home service tile 'Cosmetic dentistry', Cosmetic hub hero |
| `05-service-implant-jaw-model-in-hands` | 1254x1254 (half-width or contained hero) | Dentist's hands holding a jaw model with an implant cross-section, pointing with a pen | Home service tile 'Implants and restorative', Implants hub hero |
| `06-service-ortho-woman-clear-aligner` | 1254x1254 (half-width or contained hero) | Smiling young woman holding a clear aligner and its round case | Home service tile 'Orthodontics', Orthodontics hub hero |
| `07-why-woman-blue-tweed-headphones` | 1100x1100 (half-width or contained hero) | Woman in blue tweed jacket with blue headphones, eyes closed, grey studio | Why Aurelle staggered collage tile 1 |
| `08-why-young-man-black-jacket-headphones` | 1100x1100 (half-width or contained hero) | Young man in black jacket adjusting blue headphones | Why Aurelle collage tile 2, Tips hub |
| `09-why-woman-white-suit-tall` | 900x1800 (cards and collages only) | Woman in a white suit, arms crossed, blue headphones and sunglasses, tall portrait | Why Aurelle collage tall center tile, Payment page Note: 900x1800 tall |
| `10-why-woman-tweed-hand-chin` | 1100x1100 (half-width or contained hero) | Smiling woman in white sweater with blue tweed blazer, hand at chin | Why Aurelle collage tile 4, About page |
| `11-why-man-white-tee-sunglasses-up` | 1100x1100 (half-width or contained hero) | Smiling man in white tee with sunglasses pushed up | Why Aurelle collage tile 5, Reviews page |
| `12-pay-two-women-black-tees-sunglasses` | 1100x1100 (half-width or contained hero) | Two women in black tees and sunglasses, studio | Payment and financing collage |
| `13-pay-woman-laughing-blue-headphones` | 1100x1100 (half-width or contained hero) | Laughing woman with blue headphones in black tee | Payment collage, Payment page |
| `14-pay-woman-profile-blue-headphones-tall` | 900x1800 (cards and collages only) | Woman in profile with blue headphones, tall crop | Payment collage tall center tile, inner page side image Note: 900x1800 tall |
| `15-pay-couple-hugging-laughing` | 1100x1100 (half-width or contained hero) | Laughing couple, woman hugging man from behind | Payment collage, Book page |
| `16-pay-four-women-white-tees` | 1100x1100 (half-width or contained hero) | Four smiling women in white tees and jeans | Payment collage, inner page side image |
| `17-clinic-bright-operatory-xray-screen` | 1536x1024 (half-width or contained hero) | Bright, clean operatory: blue chair, instrument tray, wall screen showing a panoramic x-ray | About page, location pages, General dentistry |
| `18-clinic-chair-handpieces-instrument-tray` | 1536x1024 (half-width or contained hero) | Chair handpieces and tray of instruments, blue bib, window light | Service pages, About |
| `19-tech-3d-cbct-scan-on-screen` | 1448x1086 (half-width or contained hero) | 3D CBCT jaw scan on a monitor, dentist pointing with a stylus | Imaging pages, Implants, Why section technology note |
| `20-tech-panoramic-xray-machine-patient` | 1536x1024 (half-width or contained hero) | Woman standing in a panoramic x-ray machine | Panoramic x-ray and imaging pages |
| `21-implant-with-crown-in-gloved-fingers` | 1536x1024 (half-width or contained hero) | Implant with ceramic crown held in black-gloved fingers, black background | Dental implants, All-on-4, Crowns pages |
| `22-veneer-placed-on-front-tooth` | 1536x1024 (half-width or contained hero) | Porcelain veneer being placed on a front tooth, close up | Veneers, Cosmetic bonding pages |
| `23-shade-guide-before-smile` | 1536x1024 (half-width or contained hero) | Tooth shade guide held in front of a woman's smile | Whitening, Tooth-colored fillings pages |
| `24-whitening-blue-light-treatment` | 1536x1024 (half-width or contained hero) | Woman during in-office whitening, blue light, orange protective glasses | Teeth whitening page |
| `25-clear-aligners-in-black-case` | 1536x1024 (half-width or contained hero) | Pair of clear aligners in an open black case | Invisalign, Clear aligners, Retainers pages |
| `26-jaw-model-mirror-probe` | 1536x1024 (half-width or contained hero) | White jaw model with dental mirror and probe | Exams, Dentures, Bridges pages |
| `27-hygiene-flatlay-white-tools` | 1536x1024 (half-width or contained hero) | All-white flat lay: toothbrushes, interdental brushes, tongue scraper, floss pick, tooth model | Hygiene cleaning, Tartar removal, Brushing article |
| `28-rubber-dam-white-fillings-closeup` | 1448x1086 (half-width or contained hero) | Back teeth with white fillings isolated with a blue rubber dam and clamp | Tooth-colored fillings, Root canal pages |
| `29-ultrasonic-scaler-blue-glove` | 1448x1086 (half-width or contained hero) | Ultrasonic scaler tip held in a blue-gloved hand | Tartar removal, Deep cleaning, Gum disease pages |
| `30-lifestyle-woman-robe-mirror-gloss` | 1600x900 (full-bleed OK) | Woman in a white robe at a bright vanity mirror, orchids, laughing | Services hub hero, Locations hub hero |
| `31-smile-freckles-red-lipstick` | 1254x1254 (half-width or contained hero) | Smiling woman with freckles and red lipstick, hand at cheek | Team page hero, Location pages |
| `32-smile-woman-blue-tweed-portrait` | 1254x1254 (half-width or contained hero) | Smiling woman in blue tweed blazer, square portrait | Inner page CTA band (shared) |
| `33-surprised-woman-gold-crown` | 1254x1254 (half-width or contained hero) | Surprised, delighted woman wearing a gold crown | Specialist services hub hero, Crowns page accent |
| `34-smile-closeup-man-white-tee` | 1254x1254 (half-width or contained hero) | Close-up of a man's bright white smile | Implants and restorative hub, Services hub |
| `35-man-blue-sleep-mask-on-forehead` | 1254x1254 (half-width or contained hero) | Smiling man with a blue satin sleep mask pushed up on his forehead | Comfort and anxiety copy, Location pages |
| `36-woman-blue-heart-sunglasses-laughing` | 1254x1254 (half-width or contained hero) | Laughing woman in blue heart-shaped sunglasses | Root canal page, Location pages |
| `37-woman-black-bag-on-head-smiling` | 1600x960 (full-bleed OK) | Smiling woman balancing a black bag on her head, looking up | Oral surgery hub, Apicoectomy page |
| `38-man-beard-sunglasses-on-head` | 1600x1067 (full-bleed OK) | Smiling bearded man with sunglasses on his head | Wisdom teeth page |
| `39-blonde-woman-sunglasses-on-head` | 1600x871 (full-bleed OK) | Blonde woman with sunglasses on her head, big smile | Dental x-rays hub |
| `40-woman-sheer-blue-blouse` | 1600x1067 (full-bleed OK) | Smiling woman with long black hair in a sheer blue blouse | 3D CBCT page |
| `41-boy-lowering-sunglasses` | 1600x960 (full-bleed OK) | Smiling boy lowering sunglasses with blue arms | Kids dentistry page Note: Child. Use only on the kids page, no name or caption about him |
| `42-woman-braces-blue-bands` | 1600x960 (full-bleed OK) | Smiling woman with braces and blue elastics | Braces, Retainers pages |
| `43-woman-in-chair-blue-shades` | 1600x800 (full-bleed OK) | Woman reclining in a dental chair in blue shades, gloved hands at her side | Toothache, Fillings pages |
| `44-woman-blue-straw-black-cup` | 1600x1067 (full-bleed OK) | Smiling woman sipping from a black cup with a blue straw | Abscess (granuloma) page |
| `45-woman-curls-hand-cheek` | 1600x1067 (full-bleed OK) | Smiling woman with curly hair, hand at cheek | Inlays and onlays page |
| `46-man-denim-jacket-sunglasses` | 1600x1067 (full-bleed OK) | Smiling man in denim jacket with sunglasses, full body on white | Dental bridges page Note: Subject is small in frame, crop tighter |
| `47-woman-sunglasses-mirror-wall` | 1600x1067 (full-bleed OK) | Woman in sunglasses laughing in front of a mirrored wall | Invisible braces page |
| `48-woman-hands-in-hair-laughing` | 1600x1067 (full-bleed OK) | Woman with hands in her hair laughing | Gum inflammation page |
| `49-man-blue-headphones-neck` | 1600x961 (full-bleed OK) | Smiling man with blue headphones around his neck, black top | Implants, All-on-4 pages |
| `50-woman-blue-headphones-neck` | 1600x1067 (full-bleed OK) | Smiling woman with blue headphones around her neck | Periodontics hub |
| `51-blonde-laugh-closeup` | 1600x961 (full-bleed OK) | Close-up of a blonde woman laughing | Cosmetic bonding, Crowns pages |
| `52-woman-black-leather-jacket` | 1600x1067 (full-bleed OK) | Smiling woman in a black leather jacket | Deep cleaning, Gum surgery pages |
| `53-two-women-mirror-whitening-gel` | 1600x960 (full-bleed OK) | Two women laughing at a mirror applying whitening gel | Teeth whitening page second image |
| `54-woman-blue-check-blazer-stool` | 1600x1067 (full-bleed OK) | Smiling woman in blue and white check blazer on a bar stool | Dentures page |
| `55-woman-biting-blue-sunglasses` | 1600x1067 (full-bleed OK) | Woman playfully biting the arm of blue sunglasses | Teeth grinding page |
| `56-woman-sunglasses-blue-tinsel` | 1600x1067 (full-bleed OK) | Woman in sunglasses laughing in front of blue tinsel curtain | Invisalign page |
| `57-man-blue-toothbrush-white-tee` | 1600x960 (full-bleed OK) | Smiling man brushing with a blue toothbrush | Hygiene, Tartar removal pages |
| `58-woman-tweed-hand-chin-wide` | 1600x1067 (full-bleed OK) | Smiling woman in blue and white tweed, hand at chin, wide crop | Panoramic x-ray page |
| `59-lifestyle-couple-city-street` | 1100x1100 (half-width or contained hero) | Couple embracing on a sunny old-town street | Veneers page story band (no names, no quotes) Note: Was a named patient story on the source. Use as mood only |
| `60-lifestyle-man-beanie-mountains` | 1100x1100 (half-width or contained hero) | Smiling bearded man in beanie and black jacket, mountains | Veneers page story band (mood only) |
| `61-lifestyle-man-white-shirt-smile` | 1100x1100 (half-width or contained hero) | Smiling man with beard in white shirt | Veneers page story band (mood only) |
| `62-lifestyle-wedding-couple` | 1100x1100 (half-width or contained hero) | Wedding couple walking hand in hand, white flowers | Veneers page story band (mood only) |
| `63-lifestyle-woman-pointing-at-teeth-bw` | 1100x1100 (half-width or contained hero) | Black and white: woman smiling and pointing at her teeth | Veneers page hero accent, Cosmetic hub |
| `64-SAMPLE-case-01-before` | 600x300 (cards and collages only) | Smile before veneers (lips, front teeth) | Before/after slider case 1 (before) Note: SAMPLE CASE from the source demo, not this practice's work. Label it |
| `65-SAMPLE-case-01-after` | 600x300 (cards and collages only) | Same smile after veneers | Before/after slider case 1 (after) Note: SAMPLE CASE |
| `66-SAMPLE-case-02-before` | 600x300 (cards and collages only) | Man's smile before veneers | Slider case 2 (before) Note: SAMPLE CASE |
| `67-SAMPLE-case-02-after` | 600x300 (cards and collages only) | Man's smile after veneers | Slider case 2 (after) Note: SAMPLE CASE |
| `68-SAMPLE-case-03-before` | 600x300 (cards and collages only) | Front teeth before veneers, retracted | Slider case 3 (before) Note: SAMPLE CASE |
| `69-SAMPLE-case-03-after` | 600x300 (cards and collages only) | Front teeth after veneers, retracted | Slider case 3 (after) Note: SAMPLE CASE |
| `70-SAMPLE-case-04-before` | 600x300 (cards and collages only) | Yellowed front teeth before, retracted | Slider case 4 (before) Note: SAMPLE CASE |
| `71-SAMPLE-case-04-after` | 600x300 (cards and collages only) | Even white teeth after, retracted | Slider case 4 (after) Note: SAMPLE CASE |
| `72-SAMPLE-case-05-before` | 600x300 (cards and collages only) | Teeth before, cheek retractors | Slider case 5 (before) Note: SAMPLE CASE |
| `73-SAMPLE-case-05-after` | 600x300 (cards and collages only) | Teeth after, cheek retractors | Slider case 5 (after) Note: SAMPLE CASE |
| `74-SAMPLE-case-06-before` | 600x300 (cards and collages only) | Smile with small gaps before | Slider case 6 (before) Note: SAMPLE CASE |
| `75-SAMPLE-case-06-after` | 600x300 (cards and collages only) | Same smile after, gaps closed | Slider case 6 (after) Note: SAMPLE CASE |
| `76-SAMPLE-case-07-before` | 600x300 (cards and collages only) | Gap between front teeth, discolored tooth | Slider case 7 (before). Strongest case Note: SAMPLE CASE |
| `77-SAMPLE-case-07-after` | 600x300 (cards and collages only) | Gap closed with bright veneers | Slider case 7 (after). Strongest case Note: SAMPLE CASE |
| `78-SAMPLE-case-08-before` | 600x300 (cards and collages only) | Crowded uneven front teeth | Slider case 8 (before) Note: SAMPLE CASE |
| `79-SAMPLE-case-08-after` | 600x300 (cards and collages only) | Even veneers | Slider case 8 (after) Note: SAMPLE CASE |
| `80-SAMPLE-case-09-before` | 600x300 (cards and collages only) | Dark front tooth before | Slider case 9 (before) Note: SAMPLE CASE |
| `81-SAMPLE-case-09-after` | 600x300 (cards and collages only) | Front tooth matched after | Slider case 9 (after) Note: SAMPLE CASE |
| `82-SAMPLE-case-10-before-wide` | 1200x600 (half-width or contained hero) | Wide smile close-up before treatment | Veneers page wide before/after slider (before) Note: SAMPLE CASE. 1200x600 |
| `83-SAMPLE-case-10-after-wide` | 1200x600 (half-width or contained hero) | Same smile after treatment | Veneers page wide before/after slider (after) Note: SAMPLE CASE. 1200x600 |

Reference only (never on the site):

- `ref-01-ref-SLOVENIA-ljubljana-river.jpg`: Ljubljana river and Triple Bridge (Slovenia)
- `ref-02-ref-SLOVENIA-maribor-river.jpg`: Maribor riverside (Slovenia)
- `ref-03-ref-SLOVENIA-krsko-town.jpg`: Krsko old town (Slovenia)
- `ref-04-ref-SLOVENIA-portoroz-bay.jpg`: Portoroz bay from above (Slovenia)
- `ref-05-ref-SLOVENIA-ljubljana-castle-bw.jpg`: Black and white misty panorama of Ljubljana castle hill
- `ref-06-ref-original-demo-logo.png`: Original demo's logo (another brand)

**Rules for the photos:**
- Files `64` to `83` are **sample cases** that came with the design template. They are not this practice's work. Every place they appear carries a small visible label "Sample case. Replace with your own before and after photos." and `// DRAFT: sample case, replace` in code. Live mode refuses to build while they are present (section 7).
- Files `59` to `63` were named patient stories on the source site. Use them as mood photos only: no names, no quotes, no story text next to them.
- `41` shows a child. Use it only on the kids dentistry page, with no name or caption about him.
- `46`: the man is small in a white frame. Crop tighter around him.
- **Team portraits: there are none.** The source site's team photos are real dentists at another clinic, so they were left out on purpose. Every team card and bio page uses a designed placeholder portrait (section 4, Team). Never fetch, generate or use any other photo of a person for a dentist.
- **Location photos: there are none** for the four Maryland towns. Use the designed location placeholder in section 4 (Locations).
- **Never generate, fetch or use stock or AI images.** No photo outside this folder goes on the site.

## 1. Business facts (use only these, invent nothing)

Put every line below in one file, `lib/business.ts`, with `// DRAFT` on each value. The whole practice is a fictional template, so the site must stay internally consistent and never claim anything a real practice would have to prove.

- **Name:** Aurelle Dental. Wordmark "Aurelle" with "DENTAL" set small beneath it. In body copy write "Aurelle Dental", or "Aurelle" on second mention.
- **Tagline:** "Creating carefree smiles." (from the source, "Ustvarjamo brezskrben nasmeh")
- **What it is:** a private dental practice with four offices in Maryland. General dentists, implant dentists, prosthodontists, orthodontists, a periodontist and dental hygienists under one roof, so patients can go from a checkup to implants or braces in the same practice.
- **Offices (all addresses DRAFT, shown as "Street address coming soon" in demo mode):**
  - **Baltimore** (flagship). Landmark line: "Harbor East" `// DRAFT`
  - **Frederick.** Landmark line: "Downtown Frederick" `// DRAFT`
  - **Leonardtown.** Landmark line: "Near the town square" `// DRAFT`
  - **Annapolis.** Badge "New office" (the source marks its fourth location as new)
- **Hours:** Monday to Friday, 7 AM to 8 PM, at all four offices. Closed weekends. (from the source)
- **One phone for all offices:** (410) 555-0142. This is a reserved fictional 555 number. Use `tel:+14105550142` and `sms:+14105550142`.
- **Email:** hello@aurelledental.com `// DRAFT`
- **Main search phrases:** home "dentist in Baltimore, MD" plus the practice name; each location page "dentist in {town}, MD"; each service page its own phrase (section 7).
- **How they work (the differentiators, all from the source, all DRAFT for a real buyer):**
  - A written treatment estimate before any treatment starts. "We do not start without it."
  - The same prices at all four offices, one phone number, the same hours.
  - Open until 8 PM every weekday, so visits fit around work and school.
  - A specialist for each area, working as one team.
  - 3D CBCT imaging to plan every implant.
  - Root canals done under a rubber dam, with canal length measured by an electronic apex locator.
  - Cleanings with ultrasonic scaling and air polishing, then a home-care lesson.
  - "If you are nervous, tell us when you book. We take time for your questions and explain each step before we do it."
- **Payment (US version, DRAFT):** all major cards, HSA and FSA cards, monthly payment plans through a third-party lender (`// DRAFT: name the lender, for example CareCredit, Cherry or Sunbit`), most PPO dental insurance (`// DRAFT: carrier list`). An in-house membership plan for patients without insurance is built but switched off (`membershipPlan.enabled = false`) until the practice supplies its price and inclusions.
- **First visit:** "Bring dental x-rays from the last two years if you have them. If not, we take them here." (adapted from the source)
- **Team (16, all names fictional, all DRAFT):** see the table in section 4, Team.
- **Reviews:** none. Google ratings and review counts are `null`. Review cards are empty labelled placeholders: "Your Google reviews go here." No name, no stars, no quote.
- **Statistics:** none. The source had patient and procedure counts. Do not show any number of patients, implants, years or reviews. Where the source sentence used a number, rewrite it without one.
- **Do not claim:** star ratings, review counts, patient counts, years in business, awards, "best", "#1", guarantees or warranties, board certifications, school names, insurance carriers by name, lender names, prices, or "same-day" anything, unless the line is in this section and marked DRAFT.

## 2. The ONE goal

Every primary button says **"Book a visit"** and opens the Visit Request (section 5). Calling (410) 555-0142 is the always-visible second path, because many dental patients still call, and tooth pain goes straight to the phone. No newsletter, no email capture, no chat widget.

The only exception to the button label is the orthodontics card in the final CTA and on orthodontic pages, which says "Book a consultation" and opens the same Visit Request with Orthodontics pre-selected.

## 3. Design direction: "Harbor Light"

Calm, bright, editorial. It should feel like a premium health magazine that happens to book appointments: generous white space, a light serif with italic accent words, deep ink panels for weight, and one cool blue that runs through both the palette and the photo shoot. It is emphatically not a dental chain template: no tooth icons, no stock smiling families, no gradients, no glow.

Keep the source demo's visual system and refine it.

- **Colour tokens (OKLCH in the `@theme` block, hex shown):**

| Role | Name | Hex | Use |
|---|---|---|---|
| Background | Paper | `#FBFCFC` | Page background (never pure white) |
| Surface | Porcelain | `#F3F5F6` | Cards, alternating sections |
| Panel | Ice | `#E6F0F4` | CTA panel, coverage check, tags |
| Text | Ink | `#0E2A38` | Headlines, body, footer background, hero overlay |
| Muted text | Mute | `#4A5F6A` | Secondary copy |
| Border | Line | `#0E2A38` at 12% | 1px dividers |
| Deep | Navy | `#12465F` | Hover on ink, secondary panels |
| Primary | Azure Deep | `#08679A` | Primary button fill, links |
| Primary hover | Navy | `#12465F` | Button hover |
| Accent | Azure | `#0B7AB2` | Italic accent words in headings (large text only), active tab |
| Spark | Cyan | `#13A9E1` | Decorative only: the small four-point sparkle separators and focus rings on ink. Never text on light backgrounds |
| On ink | Mist | `#9DB6C2` | Muted text on ink |
| Success | | `#1F7A55` | Form success |
| Error | | `#B42318` | Form errors |

  Proportions: about 65% paper and porcelain, 25% ink and ice, 10% azure. The azure belongs to the primary button, the italic accent word in each section heading and the active states. Scarcity is what makes it land.

  Contrast (checked): Ink on Paper 14.5:1. Ink on Ice 12.9:1. Mute on Paper 6.5:1. Mute on Ice 5.8:1. Paper on Azure Deep (button text) 6.0:1. Azure on Paper 4.6:1. Azure on Ice 4.1:1, so azure on ice is for large text only. Mist on Ink 7.0:1. Cyan on Ink 5.5:1. Cyan on Paper 2.6:1, so cyan never carries text on light backgrounds.

- **Fonts (2, through `next/font`, as in the source):**
  - Display: **Newsreader** (variable, light 300 to 460 for headlines, italic for the accent word). Section headings are a plain phrase followed by one italic azure phrase, for example "Everything for your smile. *In one place.*"
  - Body: **Geist** (400, 500, 600), for body and UI. Buttons and small labels in Geist 500, uppercase, letter-spacing 0.06em.
- **Type scale** (clamp with rem bounds, ceiling at most 2.5 times the floor): label 0.75 to 0.8125rem; body 1 to 1.0625rem, line height 1.6; lead 1.125 to 1.3125rem; h3 1.375 to 1.75rem; h2 2.25 to 4rem, line height 1.05; h1 display 2.75 to 6rem, line height 0.98. Text blocks max about 66 characters wide. Check that the longest hero word fits at 375px.
- **Material:** flat. 1px Line borders, radius 4px on photos and buttons, 28px on the large ice CTA panel (as in the source), soft ink-tinted shadows only on floating elements (`0 18px 40px -12px` ink at 35%).
- **Spacing:** 8px grid. Section padding 128px desktop, 80px mobile.
- **Icons:** `lucide-react`, stroke 1.5, interface only. The brand mark is a small four-point sparkle (an original simple shape, drawn as inline SVG) used as separators between town names and above the "Why Aurelle" heading. No tooth icons.
- **Wordmark:** "Aurelle" in Newsreader 400 at the nav size, with "DENTAL" in Geist 500 small caps, tracking 0.24em, under it. A small cyan sparkle sits above the second "l". Also export it as SVG for the favicon (sparkle plus "A" monogram on ink).
- **Motion (2 signature places):** the hero "First Light" and the Coverage Check (section 4). The free polish tier is allowed on top: plain CSS scroll reveals inside `@supports (animation-timeline: view())` and a reduced-motion check, the mission paragraph's word-by-word reveal (CSS scroll-driven, from 25% opacity to full, never from invisible), and View Transitions between pages. No loading intro, no custom cursor, no scroll-jacking, no smooth-scroll library.
- **Layout variety:** full-bleed photo hero; centered mission band; four tall photo tiles; split coverage tool on ice; staggered three-column collage; horizontal rail of before and after sliders; team rail; split collage plus copy; expanding location panels plus map; FAQ list; rounded ice CTA panel; ink footer. Never four identical cards repeated down a page.

**What the best sites in this niche do (from benchmark.md, in our own words):**
1. Book is in the header, the hero and every section end, with the phone beside it. It works because patients decide at different depths.
2. Insurance and payment are answered early. Cost is the main reason people delay dental care, so answering it is the strongest trust move.
3. Real people: dentists with their own pages. People choose a person, not a building.
4. A separate path for tooth pain. Emergencies convert by phone, not forms.
5. The newest ones use editorial serif type, very little motion, lifestyle photography with one recurring brand colour, and an interactive before and after instead of static pairs.
6. Dated patterns to avoid: rotating hero sliders, stock family photos, chat bubbles over the button, 12-field appointment forms.
7. Where they are all weak, and where this demo wins: no one honestly answers "what will my insurance cover" before the call (our Coverage Check does); booking forms pretend to book (ours says exactly what happens); before and after photos are tiny on phones (ours are full-width draggable sliders).

**Things only this practice has (all required):**
- The written estimate promise, repeated in the hero sub, the pricing page, the FAQ and every service page's price block.
- "Same prices at all four offices. One number. Open until 8 PM."
- Its four town names as a sparkle-separated line in the hero.
- The blue-accessory lifestyle shoot used consistently across every page.
- The Coverage Check.
- Ten before and after sliders (labelled samples).
- The specialist team rail with sixteen named roles.

## 4. Site and page structure

**Site shape: full site, about 95 pages, because** the source already has real, distinct content for every page (four category hubs, 31 service pages, 4 offices, 16 team pages, 15 articles), and every top-ranked dental site gives each service and each office its own page. Each page type is one template driven by data, built once and executed well.

### 4a. Site map (source slug to new English route)

| Source slug | New route | Template |
|---|---|---|
| `/` | `/` | Home |
| `/storitve/` | `/services` | Services hub |
| `/zobozdravstvo/` | `/services/general-dentistry` | Category hub |
| `/estetsko-zobozdravstvo/` | `/services/cosmetic-dentistry` | Category hub |
| `/storitve/implantologija-in-protetika/` | `/services/implants-and-restorative` | Category hub |
| `/ortodontija/` | `/services/orthodontics` | Category hub |
| `/specialisticne-storitve/` | `/services/specialist-care` | Category hub |
| `/zobna-protetika/` | `/services/prosthodontics` | Category hub |
| `/oralna-kirurgija/` | `/services/oral-surgery` | Service |
| `/paradontolog-parodontologija/` | `/services/periodontics` | Service |
| `/puljenje-modrostnega-zoba/` | `/services/wisdom-teeth-removal` | Service |
| `/zobni-rentgen-rtg/` | `/services/dental-x-rays` | Service |
| `/zdravljenje-zoba/` | `/services/cavity-treatment` | Service |
| `/endodontija/` | `/services/root-canal-treatment` | Service |
| `/ustna-higiena/` | `/services/teeth-cleaning` | Service |
| `/ciscenje-zobnega-kamna/` | `/services/tartar-removal` | Service |
| `/bela-zalivka-plomba/` | `/services/tooth-colored-fillings` | Service |
| `/otroski-zobozdravnik/` | `/services/kids-dentistry` | Service |
| `/vnetje-dlesni/` | `/services/gum-inflammation` | Service |
| `/bolecina-v-zobu/` | `/services/toothache` | Service |
| `/granulom/` | `/services/tooth-abscess` | Service |
| `/bruksizem/` | `/services/teeth-grinding` | Service |
| `/zobne-luske/` | `/services/porcelain-veneers` | Service (feature version, see below) |
| `/beljenje-zob/` | `/services/teeth-whitening` | Service |
| `/estetske-zalivke/` | `/services/cosmetic-bonding` | Service |
| `/implantati/` | `/services/dental-implants` | Service |
| `/all-on-4/` | `/services/all-on-4` | Service |
| `/zobne-prevleke/` | `/services/dental-crowns` | Service |
| `/zobni-mosticek/` | `/services/dental-bridges` | Service |
| `/zobna-proteza/` | `/services/dentures` | Service |
| `/inlay-onlay/` | `/services/inlays-and-onlays` | Service |
| `/zobni-aparat/` | `/services/braces` | Service |
| `/nevidni-zobni-aparat/` | `/services/invisible-braces` | Service |
| `/invisalign/` | `/services/invisalign` | Service |
| `/retencija/` | `/services/retainers` | Service |
| `/apikotomija/` | `/services/apicoectomy` | Service |
| `/kiretaza/` | `/services/deep-cleaning` | Service |
| `/rezenjska-operacija/` | `/services/gum-flap-surgery` | Service |
| `/ortopan/` | `/services/panoramic-x-ray` | Service |
| `/3d-slikanje/` | `/services/3d-cbct-scan` | Service |
| `/lokacije/` | `/locations` | Locations hub |
| `/lokacije/ljubljana/` | `/locations/baltimore` | Location |
| `/lokacije/maribor/` | `/locations/frederick` | Location |
| `/lokacije/krsko/` | `/locations/leonardtown` | Location |
| `/lokacije/portoroz/` | `/locations/annapolis` | Location |
| `/ekipa/` | `/team` | Team hub |
| 16 team slugs | `/team/{slug}` (table below) | Team member |
| `/o-nas/` | `/about` | About |
| `/cenik-zobozdravstvenih-storitev/` | `/insurance-and-pricing` | Content page |
| `/placilo-in-obroki/` | `/payment-and-financing` | Content page |
| `/nasveti/` | `/tips` | Articles hub |
| 15 `/nasveti/...` slugs | `/tips/{slug}` (list below) | Article |
| `/mnenja/` | `/reviews` | Reviews (placeholders) |
| `/kontakt/` | `/contact` | Contact |
| `/naroci-svetovanje/` | `/book` | Book |
| `/splosni-pogoji/` | `/privacy-and-terms` | Legal |
| `/piskotki/` | `/cookies` | Legal |
| (new) | `/new-patients` | Content page (upgrade) |
| (new) | `/emergency-dentist` | Content page (upgrade) |

Article slugs, in source order: `implant-or-bridge`, `how-often-to-see-the-dentist`, `whitening-or-veneers`, `after-a-tooth-extraction`, `toothache-what-to-do`, `how-to-brush-and-floss`, `how-long-whitening-lasts`, `bonding-or-veneers`, `when-a-tooth-needs-a-crown`, `dentures-or-implant-teeth`, `clear-aligners-or-braces`, `braces-for-adults`, `why-retainers-matter`, `should-wisdom-teeth-come-out`, `which-dental-x-ray`.

Every page in the source file maps to one route above. Put the map in `lib/routes.ts` and use it for every internal link, so no link points at a Slovenian slug.

### 4b. Turning the Slovenian source into English

Translate every page in `content/source/source-content-sl.md` into **natural US English** and store it as typed data in `content/` (outside `content/source/`) (one file per page type). Do not machine-translate sentence by sentence. Read each page, keep its structure and every fact, and write it the way a calm, plain-spoken American dentist would say it. Then adapt anything European:

| Source term | US version |
|---|---|
| predračun (pisni) | written treatment estimate |
| ortopan | panoramic x-ray |
| slikica | small x-ray (bitewing or periapical) |
| CBCT / 3D slikanje | 3D CBCT scan |
| ustna higiena, ustni higienik | teeth cleaning, dental hygienist |
| zobni kamen | tartar |
| parodontologija, parodontitis | periodontics, gum disease (periodontitis) |
| protetika, protetik | restorative dentistry, prosthodontist |
| zobna luska | porcelain veneer |
| zalivka, plomba | filling |
| prevleka | crown |
| mostiček | bridge |
| koferdam | rubber dam |
| apeks lokator | apex locator |
| kiretaža | deep cleaning (scaling and root planing) |
| reženjska operacija | gum flap surgery |
| zobni aparat, retencija | braces, retainers |
| ambulanta | office |
| Naročite se (na pregled) | Book a visit |
| dr. dent. med. | DDS or DMD (as in the team table) |
| Leanpay, Diners, kreditne kartice | cards, HSA and FSA, monthly payment plans (DRAFT lender) |
| any mention of state insurance or national health insurance | "We work with most PPO dental plans" (DRAFT) |
| Pon-Pet 7.00-20.00 | Mon to Fri, 7 AM to 8 PM |
| "Fotografije prikazujejo mesta, ne ambulant." | drop it |
| reading time "5 min" | "5 min read" |

Rules for the copy:
- Keep the medical content as the source states it (durations like "30 to 60 minutes", "2 to 6 months of healing", aftercare steps). Do not add new medical claims. Where a US norm differs from the source in a way that matters to safety, keep the source's cautious wording and add `// DRAFT: dentist to confirm`.
- Every `[DRAFT ...]`, `[REVIEW CARD ...]` and `[REVIEWS BLOCK ...]` marker in the source becomes the matching placeholder from section 1. Never fill them with invented content.
- Team bios: one neutral line per person, for example "Dr. Daniel Reyes focuses on dental implants and full-arch restorations." plus a visibly labelled "Education and credentials: supplied by the practice" row. Keep each person's areas of work from the source.
- US spelling, sentence case for headings, numerals for numbers, no em dashes.
- After translating, grep the content for Slovenian characters (č, š, ž) and source words (`Lux`, `Ljubljana`, `Maribor`, `Krško`, `Portorož`, `080`, `.si`). The result must be empty everywhere except `content/source/` and `BUILD-SPEC.md` (which quotes the source terms on purpose).

### 4c. Global elements

**Nav (sticky, slim, white with a 1px Line bottom border once scrolled; transparent over the home hero):** wordmark left. Links: Services (mega menu with the six category hubs and their service pages in columns), Locations (four offices), Team, About, Insurance and pricing, Tips, Contact. Right: phone "(410) 555-0142" with a phone icon as a `tel:` link, then the "Book a visit" button. No language switch (the source had one; this site is English only).
**Mobile:** burger opens a full-screen ink sheet with large Newsreader links, the four offices with "Call" links, and the hours. A floating pill bar at the bottom, as in the source, with three equal parts: [Call] [Text] [Book a visit]. It never covers focused elements (add scroll padding) and hides while the Visit Request is open.
**Footer (ink):** "We create *a carefree* smile" in large Newsreader on the left, phone (large) and email on the right, hours under them. Four office columns (town, "Street address coming soon", landmark line). Services column, practice column (Locations, Team, About, Insurance and pricing, Payment and financing, Tips, Reviews, New patients, Emergency dentist, Contact, Book a visit). Bottom row: wordmark, "Payment: cards, HSA and FSA, monthly plans", "© 2026 Aurelle Dental", Privacy and terms, Cookies. On a separate small line: **"Concept preview by Lee Enterprises Unlimited."** (demo mode only, section 7). In demo mode add a second line: "Aurelle Dental is a fictional practice used for a design concept."

### 4d. Home page

**1. Hero (the best section on the site).**
- Full-bleed photo `01` (cover, focal point on her smile, right side), capped at 1672px wide. An ink gradient from the left: ink at 85% on the left third fading to 0% at 60%, plus a soft ink fade at the bottom so the town line reads.
- **Signature motion, "First Light":** the headline and buttons are visible from the first frame. Over 1.6 seconds the photo settles from scale 1.04 to 1, and one soft band of light (a wide radial gradient of Paper at 10% opacity, blend mode soft-light) sweeps once from left to right across the photo, while the italic word "love" warms from Mist to Paper. It plays once per session. Under `prefers-reduced-motion` the final state shows immediately. Transform and opacity only, so there is no layout shift.
- The single `<h1>` holds two spans: the eyebrow "Dentist in Baltimore, Frederick, Leonardtown and Annapolis, MD" (Geist 500, small, uppercase, Mist) and the headline "A smile / you *love*." (Newsreader 300, display size, Paper, "love" in italic). This is the source's "Nasmeh, ki ga imate radi".
- Sub (Paper at 85%): "Four Maryland offices, one team of specialists. You get a written estimate before any treatment starts."
- Buttons: "Book a visit" (Paper fill, Ink text, as in the source) and "Call (410) 555-0142" (ghost, 1px Paper at 40% border).
- Under the buttons, the four towns in Newsreader with cyan sparkle separators: Baltimore ✦ Frederick ✦ Leonardtown ✦ Annapolis, then "Mon to Fri, 7 AM to 8 PM at all four offices" in small Mist.
- On a 375px screen: wordmark and menu, eyebrow, headline, sub, both buttons, all visible without scrolling. The photo crops to her smile on the right, the gradient becomes bottom-up, and the floating bar appears after 1 screen of scroll.

**2. Proof strip (new, within the first two phone screens):** three short items on Porcelain directly under the hero, because there are no real reviews yet and proof has to come early: "Written estimate before every treatment", "Open until 8 PM every weekday", "Specialists for every area, one team". Each with a thin lucide icon. Under them, a small labelled placeholder: "Your Google rating goes here" (a dashed outline pill, demo mode only).

**3. Mission band:** photo `02` (the cloud on black) as a texture under an Ink to Paper vertical fade, as the source did with its misty city panorama. Centered Newsreader: "Every smile *has its own story.*" then the paragraph, revealed word by word on scroll (polish tier, CSS only): "We listen to it, understand what you need, and use deep clinical experience to build solutions that look good and last. Because your smile deserves more than treatment." Under it, a labelled placeholder strip "Photo: your city skyline" (a soft grey gradient block, 1440x420, with the label bottom right), standing in for the source's misty city panorama. `// DRAFT: replace with a real Baltimore harbor photo`.

**4. Services: "Everything for your smile. *In one place.*"** Sub: "From routine checkups to a complete smile makeover. Explore what we do and find the right fit for you." Four tall edge-to-edge photo tiles with the title set in Newsreader at the bottom over a dark fade (exactly like the source): General dentistry (`03`), Cosmetic dentistry (`04`), Implants and restorative (`05`), Orthodontics (`06`). Each tile links to its hub. Under them, a row of quiet text links: Oral surgery, Periodontics, Wisdom teeth removal, Dental x-rays and 3D scans, then "All services" with an arrow in azure. On mobile, the tiles become a horizontal snap rail at 80% width.

**5. Coverage Check (the show-stopper): "Will insurance *cover it?*"** On Ice, split layout: photo `13` on the left (laughing woman, blue headphones), the tool on the right.
- Copy: "A quick guide to how dental plans usually treat what you need. Your exact numbers come in writing after your exam."
- Step 1, "What do you need?" (large tap cards, one choice): Checkup and cleaning; Filling or root canal; Crown, bridge or implant; Braces or aligners; Whitening or veneers; Something hurts.
- Step 2, "Do you have dental insurance?": Yes, a PPO plan; Yes, another kind of plan; No insurance; Not sure.
- Result card (animates in, 300ms): for PPO plans, the typical tier, explained in one plain sentence each. Preventive care is commonly covered at or near 100%, basic care such as fillings and root canals often around 80%, major care such as crowns, bridges and implants often around 50%, orthodontics often has its own lifetime maximum or age limit, and cosmetic work such as whitening and veneers is usually not covered. Show the matching tier for their choice as a large figure ("Often about 80% covered") with a horizontal bar that fills to that share, plus "after your deductible, up to your yearly maximum". For "another kind of plan" or "not sure": "Plans differ a lot. Bring your card and we will check your benefits before treatment." For "no insurance": the payment options (cards, HSA and FSA, monthly plans) and, only when `membershipPlan.enabled`, the membership plan. For "Something hurts": skip the coverage talk and show "Call (410) 555-0142 now. Tell us it hurts and we will look for the earliest visit." with a big Call button.
- Under every result: "General guide, not a quote. Plans differ. You get a written estimate before any treatment." and a "Book a visit" button that opens the Visit Request with the treatment pre-selected.
- **Before writing the percentages, look up the common 100, 80 and 50 coinsurance structure, deductibles, annual maximums and orthodontic lifetime maximums from reputable US sources (for example the National Association of Dental Plans, the American Dental Association, or major insurers' plan guides). Put the source URLs in a comment in `lib/coverage.ts`. If sources disagree, use "often" language and the most conservative figure.**
- It gives its result straight away with no form in front of it. Keyboard: cards are radio groups with arrow-key support; the result region is `aria-live="polite"`. Motion: the bar fill and the card entrance, nothing else.
- **Fallback:** if the animated result causes any layout shift or accessibility problem, render the result as a static card with the tier text and no bar animation.

**6. Why Aurelle:** Left column, centered text: five cyan sparkles, "Why *Aurelle?*", a thin divider, "SMILES THAT SPEAK FOR THEMSELVES." (Geist label), then: "We bring together experienced specialists, 3D imaging and a gentle approach, so every visit is as easy and carefree as it can be." and "At all four offices, in Baltimore, Frederick, Leonardtown and Annapolis, you get the same quality of care and the same prices." Right: the staggered masonry collage from the source, photos `07`, `09` (tall, center), `10`, `08`, `11`, offset vertically, with a slow CSS parallax of a few pixels on desktop only (polish tier).

**7. Before and after: "Before *and after*"** with the side line "The best way to see what treatment changes is to see the smile before and after." A horizontal snap rail of nine slider cards (cases 01 to 09, files `64` to `81`), each 600x300 photos stacked as before over after in the source but now a **draggable comparison slider**: the before image under, the after image clipped on top, a thin Paper divider with a round handle. Works with mouse, touch, and keyboard (the handle is a `role="slider"` with arrow keys moving 5% and Home and End). Default position 50%. Under each card: the number in azure Newsreader ("07") and "Porcelain veneers", plus the small "Sample case" label. Pagination dots and arrow buttons below the rail. Case 07 goes first, because it is the most dramatic.

**8. Team: "A dentist for *everything* you need."** Sub: "General dentists. Implant dentists. Prosthodontists. Orthodontists. A periodontist. Dental hygienists. A specialist for every area, all working as one team for your smile." Link "Meet the whole team" with arrow. A horizontal rail of 16 portrait cards (4:5). Each card is the designed placeholder portrait: an Ice background, a soft Porcelain silhouette shape (a simple original head-and-shoulders outline, not an avatar icon), the person's initials in large Newsreader italic, and a small label "Portrait coming soon". Name in Newsreader under the card, role in Mute. Cards link to `/team/{slug}`.

| # | Name (fictional) | Credentials | Role line | Slug | Source page |
|---|---|---|---|---|---|
| 1 | Dr. Daniel Reyes | DDS, MS | Implant dentistry | `daniel-reyes` | `/zvonimir-katic/` |
| 2 | Dr. Marcus Hale | DMD | Restorative, gum and implant care | `marcus-hale` | `/nikola-dzakula/` |
| 3 | Dr. Elias Moreno | DDS, MS | Implant dentistry | `elias-moreno` | `/damir-noveski/` |
| 4 | Dr. Owen Mercer | DDS | Prosthodontist | `owen-mercer` | `/zoran-kralj/` |
| 5 | Dr. Grant Whitaker | DMD | Prosthodontist | `grant-whitaker` | `/martin-zepic/` |
| 6 | Dr. Caleb Brooks | DDS | General dentistry, comfort care | `caleb-brooks` | `/leon-buhanec/` |
| 7 | Dr. Claire Donovan | DDS, MS | Periodontist | `claire-donovan` | `/tina-struc-cvitan/` |
| 8 | Dr. Priya Shah | DMD | General dentistry | `priya-shah` | `/maja-iljaz/` |
| 9 | Dr. Nathan Cole | DDS | General dentistry | `nathan-cole` | `/dejan-noveski/` |
| 10 | Dr. Hannah Lowell | DMD | General dentistry | `hannah-lowell` | `/tadeja-dolinsek/` |
| 11 | Dr. Sofia Marin | DDS, MS | Orthodontist | `sofia-marin` | `/natasa-medancic/` |
| 12 | Dr. Julia Kessler | DMD, PhD | Orthodontics and dentofacial orthopedics | `julia-kessler` | `/bojana-krneta-dokic/` |
| 13 | Dr. Ava Lindqvist | DDS | General dentistry | `ava-lindqvist` | `/stefania-leber/` |
| 14 | Dr. Emma Carver | DMD | General and restorative dentistry | `emma-carver` | `/hana-klaut/` |
| 15 | Rachel Moss | RDH | Dental hygienist | `rachel-moss` | `/spela-raj/` |
| 16 | Lauren Pike | RDH | Dental hygienist | `lauren-pike` | `/tina-kunej/` |

  `// DRAFT: all names and credentials are placeholders for the buying practice's real team.`

**9. Payment: "A smile that *says it all.*"** Left: the staggered collage of `12`, `14` (tall), `15`. Right, centered: "Easy payment, including monthly plans." then "You get a written estimate before any treatment, and prices are the same at all four offices. Pay by card, with your HSA or FSA, or in monthly payments." and a "Payment options" button (secondary, ink outline) to `/payment-and-financing`.

**10. Locations: "Four offices, *same quality.*"** Side line: "Open Monday to Friday, 7 AM to 8 PM. One number for every office: (410) 555-0142." The source's expanding panels: one wide active card and three slim vertical cards with the town name rotated. Click or focus expands a card (CSS grid transition, keyboard accessible as a tablist). Each card is the **designed location placeholder**: an Ink background with a large faint outline of a simple original map pin and the town name in Newsreader, the label "Photo: your {town} office" in small Mist, and on the active card the details: town, "Street address coming soon", landmark line, hours, a "Directions" button (opens Google Maps search for "{town}, MD" in a new tab) and the phone. The Annapolis card shows the "New office" badge. Under the panels, a map area with town tabs: a lightweight facade (static Ice panel with the tabs) that loads an embedded Google Map of the selected town only after a click on "Show map", so it costs nothing until used.

**11. Reviews: "What patients *say.*"** Three empty placeholder cards with a dashed Line border and the text "Your Google reviews go here", plus a small note "Real reviews appear with the reviewer's first name, month and year, and a link to Google." No stars, no names, no quotes. A link "All reviews" to `/reviews`.

**12. FAQ: "Common *questions*"** with "Here are the answers to the questions we hear most. If yours is not here, call (410) 555-0142 or email hello@aurelledental.com." Accordion (native `details` and `summary`, styled), 8 questions, answers translated from the source and adapted:
1. How much will my treatment cost? "It depends on your teeth and the treatment you choose, so you get a written estimate after your exam. We do not start without it. Prices are the same at all four offices."
2. What should I bring to my first visit? "Your insurance card if you have one, and any dental x-rays from the last two years. If you do not have recent x-rays, we take them here."
3. Will it hurt? "Comfort comes first. If you are nervous, tell us when you book. We take time for your questions and explain each step before we do it."
4. Can I pay in monthly installments? "Yes. You can pay by card, with an HSA or FSA card, or in monthly payments through our financing partner." `// DRAFT: lender`
5. Who will treat me? "We have a specialist for each area: implants, restorative dentistry, orthodontics, gum care and dental hygiene. When you book, we tell you which dentist works at your office."
6. How long does treatment take? "It depends on the treatment. Placing an implant takes 30 to 60 minutes and healing takes 2 to 6 months. For braces and other treatment, you get a time frame at your exam."
7. Do you offer a guarantee? "Talk to your dentist at your exam about what applies to your treatment and materials." `// DRAFT: the source said some services and materials carry a warranty; the buying practice confirms its own terms`
8. How soon can I get an appointment? "All offices are open every weekday from 7 AM to 8 PM. Call (410) 555-0142, or send a visit request and we will call you back."

**13. Final CTA panel (rounded Ice panel, 28px radius):** "Ready for a *carefree* smile?" then "Choose what you need. We can call you, or you can call us." Two columns divided by a 1px Line: **Dentistry** "Exams, treatment, crowns and implants." with "Book a visit" and a phone button; **Orthodontics and clear aligners** "A straight smile at any age, with braces almost no one notices." with "Book a consultation" (opens the Visit Request with Orthodontics pre-selected) and a phone button. "Mon to Fri, 7 AM to 8 PM" centered below.

**14. Footer** (section 4c).

### 4e. Page templates

Build each template once, driven by the data in `content/`.

- **Services hub (`/services`):** hero split with `30`; the six categories as sections, each a header line plus its service pages as text-led cards (title, one-line summary, arrow), photo per category from the photo map; the Coverage Check embedded compactly; final CTA panel.
- **Category hub:** hero (category photo from the map), "In short" paragraph, a grid of its service pages, a "How it works" 3-step band, FAQ from the source, related tips, CTA panel.
- **Service page (31 of them):** this is the source's richest template; keep its order. Breadcrumbs. Hero: Newsreader h1 with the service name and an italic accent ("Dental *implants*"), the source's lead sentence, "Book a visit" and "Call", the photo from the map on the right. Then "In short", "Who it is for" (bulleted), "What to know" (callout on Ice), the 3-step "How treatment works" timeline, "After treatment", "What you can gain", a **price block** ("Cost and payment": the written estimate promise, same prices at all four offices, payment options, a link to `/insurance-and-pricing`, and a compact "Will insurance cover it?" link that opens the Coverage Check pre-set to this service's category), the FAQ, "Related services" (3 cards) and "Related tips" (up to 3 articles), then the reviews placeholder and the CTA panel. Every service page needs at least three things no other page has (its own photo, its own steps and its own FAQ), which the source already provides.
- **Porcelain veneers (feature version):** the source page has a patient story gallery. Keep the layout with photos `59` to `63` as mood images only, plus the wide before and after slider (`82` over `83`, labelled sample case) and the nine-case rail from the home page.
- **Locations hub and location pages:** hero split with photo `30` on the hub; on the offices, Baltimore `31`, Frederick `35`, Leonardtown `36`, Annapolis `32`; h1 "Dentist in {Town}, MD" with the landmark line; the office card (placeholder address, hours, phone, directions); services available at this office (from the source, `// DRAFT: confirm per office`); "How to find us" from the source, rewritten as placeholders ("Parking and transit details coming soon"); the team rail filtered to "Who works here: we tell you when you book"; the map facade; FAQ; CTA panel. Each location page must say something specific to its town (its landmark line, its neighbourhood placeholder, nearby towns served as `// DRAFT` text). Never build town-by-service pages.
- **Team hub and member pages:** hub with the full grid of 16 placeholder portraits grouped by role. Member page: placeholder portrait large on the left, name as h1 with credentials, role, the one-line bio, "Education and credentials: supplied by the practice" (labelled), "Areas of work" as linked chips to the right service pages (from the source), "Book a visit" and "Call", then "Meet the rest of the team" (3 cards) and the CTA panel. Each member page includes the line from the source: "When you book, we tell you who works at your office."
- **About:** "Our story" from the source, the values grid (Comfort first, Written estimate before treatment, A team of specialists, Same prices at all four offices, Open until 8 PM, From checkup to treatment), the source's "Equipment for precise work" trio with `19`, `28`, `29` and the caption "Illustrative equipment photos". Replace the source's statistics band with a "What a first visit looks like" 3-step band. Team rail, office list, CTA.
- **Insurance and pricing (`/insurance-and-pricing`):** the source's "What to expect at your first visit" list (x-rays if you have none from the last two years, the exam and conversation, the written estimate, monthly payments if you want them), "How we prepare your estimate" (3 steps), the full Coverage Check, an "Insurance" section ("We work with most PPO dental plans. Bring your card and we check your benefits before treatment." and a placeholder list "Your accepted plans go here" `// DRAFT`), the membership plan block (hidden unless enabled), pricing FAQ, CTA. A "from $X" price table component exists, driven by `lib/pricing.ts`, switched off until the practice supplies numbers.
- **Payment and financing:** from the source, adapted: payment methods, monthly payments, HSA and FSA, how the estimate works, FAQ, collage `12`, `13`, `16`.
- **New patients (new):** "Your first visit, step by step" (book, what to bring, the exam and conversation, the written estimate, your decision), forms placeholder ("Your new patient forms go here" `// DRAFT`), comfort note, insurance note, CTA. Photo `15`.
- **Emergency dentist (new):** h1 "Emergency dentist in Maryland". Huge "Call (410) 555-0142" button first. "What counts as an emergency", "What to do until you get here" (translated from the toothache article in the source), "When to go to the ER instead" (swelling that affects breathing or swallowing, high fever, a facial injury; write this from reputable US sources and cite them in a code comment), hours, all four offices. Primary action here is Call, not the Visit Request.
- **Tips hub and articles:** hub with category filter chips and article cards (title, summary, category, read time, photo from the related service). Article template: breadcrumbs, h1, read time, lead, body with h2 sections from the source, a "Related services" box, "Book a visit" band, more articles. `Article` structured data with `dateModified` set to the build date and no author name (`// DRAFT: reviewed by a dentist`).
- **Reviews:** h1 "Patient reviews", the per-office rating cards as placeholders ("Your {town} Google rating goes here"), six empty review placeholder cards, CTA.
- **Contact:** short hero, four tiles (Call, Text, Email, Book a visit), the four offices with hours, the map facade, the Visit Request embedded inline, CTA, footer. The footer "Contact" link lands at the top of this page.
- **Book (`/book`):** the source's three steps (1 Book a time: "Call us during office hours and we will pick an office and a time together." 2 Your exam: "Your dentist examines your teeth, explains your options and answers your questions." 3 Written estimate: "Before treatment starts, you get a written estimate for the plan you choose.") then the Visit Request embedded inline (replacing the source's "Online booking is not available yet" form), the office list and the CTA. The source's form note becomes honest: "Nothing is sent until you tap Text or Email."
- **Legal (`/privacy-and-terms`, `/cookies`):** short US-style placeholder pages translated and adapted from the source, each headed "Draft. To be replaced with the practice's own policy." The source's Slovenian legal references are dropped.
- **404:** "This page is *missing a tooth.*" with links to Services, Locations and Book a visit. Returns a 404 status.

## 5. The Visit Request (the conversion engine)

A modal on desktop (and a full-height sheet on phones) with a progress bar, step counter, Back and Next, and quick transitions. Three short steps, tap-only until the last, because a visit request should take under 30 seconds. Every step has a "Rather talk? Call (410) 555-0142" row.

1. **Which office?** Baltimore, Frederick, Leonardtown, Annapolis, "Whichever is soonest". Pre-filled when opened from a location page.
2. **What is it for?** Checkup and cleaning; Tooth pain or something broke; Fillings or root canal; Crowns, bridges or implants; Braces or aligners; Whitening or veneers; Something else. Pre-filled from the service page, the Coverage Check or the orthodontics card. Choosing "Tooth pain" shows a highlighted line: "For pain, calling is fastest: (410) 555-0142" with a Call button, and still lets them continue.
3. **When suits you, and how do we reach you?** Time chips (Early morning, Midday, After work, Any time), then name (required), phone (required, US format with friendly validation), "New patient?" yes or no, insurance yes, no or not sure, optional note. Never ask for anything already chosen.

**Last screen (honest):** a summary of their choices and one button that names the real action: on phones **"Text my request to Aurelle Dental"**, which opens `sms:+14105550142` with a prefilled body built from their answers. On desktop, where a text link does nothing, the buttons are **"Copy my request"** (copies the summary) and **"Email my request"** (`mailto:` with the same body). The success message ("Thanks. We will call you back during office hours." `// DRAFT: confirm reply timing`) appears only after one of those taps. A small line under the button: "Nothing is sent until you tap the button." Close with Esc, trap focus, return focus to the opening button, lock body scroll. Load the modal's code only when first opened.

## 6. Tech and file rules

- **Stack:** install the current stable releases, print the installed versions, and read the upgrade notes for those major versions before writing code, because your habits may be older than the tools. At this date that means Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS 4. Known changes: route `params` and `searchParams` are Promises and must be awaited; the `middleware` file is now `proxy`; `next lint` is gone, so lint with ESLint directly; Tailwind 4 keeps design tokens in a CSS `@theme` block, not a JavaScript config.
- Design tokens (colours in OKLCH with the hex beside each, the two fonts, the type scale, spacing, radius) live in the `@theme` block, so the palette and the two-font limit are enforced by the token list.
- Motion library: `motion` (imported from `motion/react`), loaded lazily and only for First Light and the Coverage Check result. Everything else is CSS.
- Icons: `lucide-react`. Social icons, if any, are inline SVGs from Simple Icons (`// DRAFT: social links`).
- Images: `next/image` everywhere with a `sizes` value on every image, AVIF and WebP on, width and height always set, the hero image preloaded with the framework's current setting (the old `priority` prop is deprecated). Lazy below the fold.
- Server-rendered by default. Only the interactive pieces are client components: First Light, the Coverage Check, the before and after slider, the location panels, the team and case rails, the map facade, the nav menu and the Visit Request.
- Content as typed data in `content/` (services, categories, locations, team, tips, FAQ), facts in `lib/business.ts`, routes in `lib/routes.ts`, coverage tiers in `lib/coverage.ts` with source URLs, pricing in `lib/pricing.ts` (off). Static generation with `generateStaticParams` for every dynamic route.
- One component per section in `components/sections/`, templates in `components/templates/`. No file over 500 lines.
- Responsive at 375, 768, 1024 and 1440px with no horizontal scroll.
- **Accessibility (WCAG 2.2 AA):** semantic landmarks, a skip link, alt text from the photo map (decorative `02` gets empty alt), visible focus rings (Azure Deep on light, Cyan on ink), AA contrast as in section 3, body text at least 16px, tap targets 44px (never under 24px), the floating bar never covers a focused element, the before and after slider and the location panels fully work with the keyboard, the Visit Request never asks for the same thing twice, zoom is never blocked.
- **Speed budgets** (production build, phone profile): largest paint within 2.5 seconds, layout shift under 0.1, interaction response within 200ms. The headline and buttons are visible from the first instant and never fade in from invisible.
- Link preview: Open Graph and Twitter `summary_large_image`, a generated 1200x630 `og-image.png` (photo `01` cropped right, ink panel left with the wordmark and "A smile you love."), built with `next/og`. Favicon and Apple touch icon from the sparkle and "A" monogram on ink.
- A "Back to top" button after 1.5 screens of scroll (desktop only; phones have the floating bar).
- No backend, no database, no API keys, no analytics beyond `@vercel/analytics`.

## 7. SEO: built to score 100 at launch

This is a demo, but its SEO is finished, not postponed. When a practice buys it, Hunter swaps the facts and flips one switch. Target: **Lighthouse SEO 100 in live mode**, and 90 or higher on Performance, Accessibility and Best Practices (aim for 95+). Use Lighthouse 13 and print its version. Agentic Browsing is reported for information only.

**The launch switch.** `NEXT_PUBLIC_SITE_MODE` is `demo` (default) or `live`. `NEXT_PUBLIC_SITE_URL` is the base for every absolute link.
- **Demo mode:** robots meta `noindex, nofollow` on every page, and an `X-Robots-Tag: noindex, nofollow` header on every response (pages, images, files), set in the framework's headers config. `app/robots.ts` allows search crawlers (so they can read the noindex), lists no sitemap, and disallows AI crawlers by name (GPTBot, ClaudeBot, Google-Extended, PerplexityBot, CCBot). `app/sitemap.ts` returns nothing. No `llms.txt`. The concept footer lines show.
- **Live mode:** `index, follow`, no X-Robots-Tag, sitemap listing every page with real last-modified dates, `llms.txt` served, no concept lines. **Live mode build guard:** the build fails if any DRAFT value, placeholder review card, sample case, placeholder portrait or `// TODO: swap` remains.
- The deployed demo stays in demo mode. Live mode is only run locally until a practice buys it.
- Expected scores: live mode SEO 100. Demo mode about 69, with "Page is blocked from indexing" the only failing SEO audit. The 69 comes from the published weights; your real numbers confirm or correct it.
- Never show crawlers anything different from what visitors see.

**Words in the right places (title and h1 are what plus where):**
- Title: `Dentist in Baltimore and Frederick, MD | Aurelle Dental` (home, 55 characters). Meta description: "Aurelle Dental has four Maryland offices in Baltimore, Frederick, Leonardtown and Annapolis. Written estimate before treatment. Open until 8 PM. Book a visit." h1 as in the hero.
- Location pages: "Dentist in {Town}, MD | Evening Hours | Aurelle Dental" (57 to 59), h1 "Dentist in {Town}, MD", unique meta descriptions naming the town, hours and the action.
- Service pages: "{Service} in Baltimore, MD | Aurelle Dental" or the closest variant that stays between 50 and 60 characters; h1 the service name; unique description built from that page's lead sentence. Category hubs and articles likewise.
- Contact: "Contact Aurelle Dental | Dentist in Baltimore and Frederick, MD". Book: "Book a Dental Visit in Maryland | Aurelle Dental".
- A self-referencing canonical on every page, built from `NEXT_PUBLIC_SITE_URL`. `<html lang="en">` and a viewport tag.
- One h1 per page, server-rendered. Headings step down in order. The first paragraph under each h1 says what and where.
- Name, phone and each office's town and hours appear as text in the footer, on `/contact` and on each location page, exactly as in section 1.
- The Google Business Profile for each office links to its location page; the flagship links to the home page (`SEO-LAUNCH.md`).
- Internal links: hubs link to every child page, every service page links to its hub, related services and related tips; breadcrumbs on every inner page. Every link says where it goes; no bare "learn more" or "read more" (the source used "Preberite več": write "Read about dental crowns" instead).
- No hreflang (one language).

**Structured data (JSON-LD, server-rendered):**
- `Dentist` (the LocalBusiness subtype) for the practice on the home page, and one `Dentist` per office on its location page with name, phone, url, logo, image, `openingHoursSpecification` and `address` (town and state only in demo mode, `// DRAFT: street address`).
- `Service` on each service page, `BreadcrumbList` on every inner page, `Article` on articles, `Person` on team pages (name and jobTitle only, no credentials claims).
- `FAQPage` markup is optional (Google retired FAQ rich results in May 2026). Keep the visible FAQs regardless, because patients and AI answers read them.
- Never add `aggregateRating` or `review` markup about the practice on its own site, even when real reviews arrive. Reviews appear as plain attributed text.
- Validate every block. Use a schema.org validator if one is reachable; otherwise parse every block and check required properties by hand, and say which you did.

**`llms.txt`** (live mode only): Markdown with a top heading and proper links, summarising the practice, offices, hours and main pages. It is a convenience, not a ranking lever.

**`SEO-LAUNCH.md`** in the repo root: set `NEXT_PUBLIC_SITE_MODE=live` and `NEXT_PUBLIC_SITE_URL` in Vercel, redeploy, confirm the robots meta, header and sitemap; replace every DRAFT, placeholder portrait, sample case and review placeholder (the build guard lists them); if the practice has an old site, a page-by-page redirect map from every old URL to its new equivalent (never everything to the home page); link each Google Business Profile to its location page; update the same name, address and phone on Google Business Profile, Apple Business, Bing Places, Yelp, the BBB and Healthgrades or Zocdoc if used; request indexing in Search Console and Bing Webmaster Tools; confirm the host's bot protection is not blocking search or AI search crawlers; retire the preview URL. End with one honest line for the owner: the site is technically complete, and ranking from here depends mostly on the Google profiles, reviews, links and listings.

## 8. Copy rules and rules that never bend

- **No em dashes or double hyphens anywhere.** Use periods and commas.
- Short, plain, warm and calm. Sound like a careful dentist who explains things, not a marketing agency. Cut every sentence that does not earn its place.
- No hype words ("revolutionary", "cutting-edge", "state-of-the-art", "seamless", "elevate"), no "best", no "#1", no guarantees.
- **Invent nothing.** No reviews, ratings, review counts, patient counts, years, awards, prices, insurance carrier names, lender names, schools or credentials beyond section 1. Placeholders are visibly labelled in demo mode and blocked in live mode.
- **No real people's photos for team members**, no photos from outside the Drive folder, no stock, no AI images.
- **No trace of the source clinic.** No Slovenian words, no source names, towns, phone, email, logo or reviews on the built site.
- Medical content stays as cautious as the source. Anything that a dentist should confirm gets `// DRAFT: dentist to confirm`.

## 9. Build order (tick the boxes)

Keep the home page first and polished before any inner page is started. At the end of every phase run `npm run check` and print its result, take Playwright screenshots at 1440px and 375px, look at them yourself, fix the three weakest things, then commit. (If Playwright's browser will not install, use any headless Chromium available and say which. If none runs, say so and describe what you checked by hand.)

`npm run check` is one script that tests what a script can test: exactly one h1 per page; no broken internal links across the whole sitemap; no leftover `[DRAFT` markers rendered as raw text, no double curly braces, no Slovenian characters or source words (scan the built pages, not `content/source/` or `BUILD-SPEC.md`); no em dashes or "--" in rendered text; alt text and width and height on every image; every phone number and email on the pages matches `lib/business.ts`; in live mode, no DRAFT values, placeholders or sample cases.

- [ ] Phase 1: scaffold, tokens, fonts, wordmark, nav and mobile menu, floating bar, footer, **hero with First Light** (polish it until it is the best thing on the page, phone first), proof strip, mission band. Then the **first independent review** (below).
- [ ] Phase 2: services tiles, **Coverage Check** with sourced tiers, Why Aurelle collage.
- [ ] Phase 3: before and after slider rail, team rail with placeholder portraits, payment section.
- [ ] Phase 4: locations panels and map facade, reviews placeholders, FAQ, final CTA panel. Home page complete.
- [ ] Phase 5: translate and adapt all content (section 4b) into typed data; the grep for Slovenian traces returns nothing.
- [ ] Phase 6: **Visit Request**, wired to every Book button with the right pre-selects; `/book` and `/contact`.
- [ ] Phase 7: services hub, category hubs, service template (all 31 pages), porcelain veneers feature version.
- [ ] Phase 8: locations hub and 4 offices, team hub and 16 members, about.
- [ ] Phase 9: insurance and pricing, payment and financing, new patients, emergency dentist, reviews, legal, 404.
- [ ] Phase 10: tips hub and 15 articles.
- [ ] Phase 11: everything in section 7: the launch switch, header, robots, sitemap, titles and descriptions per page, JSON-LD validated, OG image, favicon, `llms.txt`, `SEO-LAUNCH.md`, the live mode build guard.
- [ ] Phase 12: Lighthouse on a production build (`next build` then `next start`), mobile and desktop, for the home page and one page of each type (category hub, service, location, team member, article, contact). First live mode locally (`NEXT_PUBLIC_SITE_MODE=live NEXT_PUBLIC_SITE_URL=http://localhost:3000`), then demo mode. Use `npx lighthouse` (point `CHROME_PATH` at Playwright's Chromium if needed). Fix and re-run until live SEO is 100 and the others are 90 or higher. Report real numbers only. Never estimate a score.
- [ ] Phase 13: keyboard-only pass and 200% zoom pass on the home page, a service page and the Visit Request; the **second independent review** with fact audit; final checklist; commit; push to the repo's remote if it has one; ready for a Vercel import as its own project.

**Independent reviews.** Twice (after Phase 1, and before hand-back), start a fresh reviewer subagent that has not seen the build. Give it the 1440 and 375 screenshots and BUILD-SPEC.md. It scores like an award juror (design 40, usability 30, creativity 20, content 10) and names the three weakest things. Fix those in one round, no more. The second review also audits facts: every number, name, claim and price on the built pages checked against section 1, and a scan for anything that reads as a real practice's claim.

## 10. Final review checklist

- [ ] The hero alone would sell the template. First Light plays once, never hides the headline, and causes no layout shift. At 375px the headline and "Book a visit" are visible without scrolling.
- [ ] The Coverage Check gives a result instantly for every combination, cites its sources in code, carries the "General guide, not a quote" line, and works with keyboard and screen reader.
- [ ] All ten before and after sliders drag with mouse and touch, move with arrow keys, and carry the "Sample case" label.
- [ ] Every "Book a visit" opens the Visit Request with the right pre-selects. The last step names the real action, and success shows only after it is tapped. Phone, text and directions links work.
- [ ] All routes in the site map exist, every nav and footer link resolves, and no page is thin or built on guesses.
- [ ] Zero Slovenian text, zero source names, towns, phone, email or logo. Zero em dashes or "--". Zero stock or AI images. Zero real people's photos on team cards.
- [ ] Every DRAFT, sample and placeholder is visibly labelled in demo mode, and the live mode build fails while any remain.
- [ ] Two fonts, the token palette only, signature motion in two places, no loading intro or cursor effects.
- [ ] 375px: no overflow, the menu and floating bar work, the bar never covers focus.
- [ ] Demo mode serves `noindex, nofollow` as a meta tag and as an `X-Robots-Tag` header on pages and images, with the concept lines. Live mode serves `index, follow`, the sitemap and `llms.txt`, and no concept lines.
- [ ] Lighthouse live mode: SEO 100 on every tested page, mobile and desktop; Performance, Accessibility and Best Practices 90 or higher. Demo mode: only the indexing audit fails.
- [ ] One h1 per page with the what and the where. Titles and descriptions unique. JSON-LD validates and claims nothing untrue.
- [ ] Keyboard-only and 200% zoom passes done.

## 11. When you finish

Print, in the conversation: the installed versions; the local URL; the last `npm run check` output; the Lighthouse scores (all four categories, both modes, mobile and desktop) for each tested page; the headers of the home page and of one image in demo mode (`curl -I`), showing `X-Robots-Tag`; the structured-data validation result and how you validated; the title, description and h1 of the home page and one page of each type; the paths of the 1440 and 375 screenshots of the hero, the Coverage Check, the before and after rail, a service page and the Visit Request; the two review scores and what you fixed; and the full list of DRAFT, sample and placeholder items a buying practice must supply (name and logo, team names, credentials and portraits, office addresses and photos, city skyline photo, insurance carriers, lender, membership plan, prices, reviews, before and after cases, legal pages, warranty terms, social links).
