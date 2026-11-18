// Typed content for the Aurelle Dental concept site.
// All copy is US English adapted from content/source/source-content-sl.md.

export type CategoryKey =
  | "general-dentistry"
  | "cosmetic-dentistry"
  | "implants-and-restorative"
  | "orthodontics"
  | "specialist-care"
  | "prosthodontics";

export type ServiceSlug =
  | "oral-surgery"
  | "periodontics"
  | "wisdom-teeth-removal"
  | "dental-x-rays"
  | "cavity-treatment"
  | "root-canal-treatment"
  | "teeth-cleaning"
  | "tartar-removal"
  | "tooth-colored-fillings"
  | "kids-dentistry"
  | "gum-inflammation"
  | "toothache"
  | "tooth-abscess"
  | "teeth-grinding"
  | "porcelain-veneers"
  | "teeth-whitening"
  | "cosmetic-bonding"
  | "dental-implants"
  | "all-on-4"
  | "dental-crowns"
  | "dental-bridges"
  | "dentures"
  | "inlays-and-onlays"
  | "braces"
  | "invisible-braces"
  | "invisalign"
  | "retainers"
  | "apicoectomy"
  | "deep-cleaning"
  | "gum-flap-surgery"
  | "panoramic-x-ray"
  | "3d-cbct-scan";

export type TipSlug =
  | "implant-or-bridge"
  | "how-often-to-see-the-dentist"
  | "whitening-or-veneers"
  | "after-a-tooth-extraction"
  | "toothache-what-to-do"
  | "how-to-brush-and-floss"
  | "how-long-whitening-lasts"
  | "bonding-or-veneers"
  | "when-a-tooth-needs-a-crown"
  | "dentures-or-implant-teeth"
  | "clear-aligners-or-braces"
  | "braces-for-adults"
  | "why-retainers-matter"
  | "should-wisdom-teeth-come-out"
  | "which-dental-x-ray";

export type TipCategory =
  | "Prevention"
  | "Cosmetic"
  | "Implants and restorative"
  | "Orthodontics"
  | "Oral surgery"
  | "Imaging";

export type TeamSlug =
  | "daniel-reyes"
  | "marcus-hale"
  | "elias-moreno"
  | "owen-mercer"
  | "grant-whitaker"
  | "caleb-brooks"
  | "claire-donovan"
  | "priya-shah"
  | "nathan-cole"
  | "hannah-lowell"
  | "sofia-marin"
  | "julia-kessler"
  | "ava-lindqvist"
  | "emma-carver"
  | "rachel-moss"
  | "lauren-pike";

export type LocationSlug = "baltimore" | "frederick" | "leonardtown" | "annapolis";

export type FAQ = { q: string; a: string };
export type Step = { title: string; body: string };

/** Heading split into a plain phrase and one italic azure accent phrase. */
export type SplitHeading = { plain: string; accent: string };

export type Service = {
  slug: ServiceSlug;
  sourceSlug: string;
  /** Plain name, sentence case, e.g. "Dental implants". */
  name: string;
  /** h1 split, e.g. { plain: "Dental", accent: "implants" }. plain + " " + accent must read naturally. */
  h1: SplitHeading;
  /** The source's lead sentence under the h1 (what it is). */
  lead: string;
  /** One-line card summary (from the source's related-service blurb). */
  summary: string;
  inShort: string[];
  whoFor: string[];
  whatToKnow: string[];
  /** Exactly 3 steps from the source's "How treatment works". */
  steps: Step[];
  after: string[];
  gains: string[];
  faq: FAQ[];
  related: ServiceSlug[];
  relatedTips: TipSlug[];
  /** Notes for the buying practice (rendered nowhere, kept for the DRAFT audit). */
  draftNotes?: string[];
};

export type Category = {
  key: CategoryKey;
  name: string;
  h1: SplitHeading;
  intro: string;
  services: ServiceSlug[];
};

export type TipSection = { heading: string; paragraphs: string[]; bullets?: string[] };

export type Tip = {
  slug: TipSlug;
  sourceSlug: string;
  title: string;
  summary: string;
  category: TipCategory;
  readMinutes: number;
  /** The "In short" lead paragraph. */
  lead: string;
  sections: TipSection[];
  /** Closing disclaimer line from the source. */
  disclaimer: string;
  relatedServices: ServiceSlug[];
};

export type TeamMember = {
  slug: TeamSlug;
  name: string;
  credentials: string;
  role: string;
  group: "Implant dentistry" | "Prosthodontics" | "General dentistry" | "Periodontics" | "Orthodontics" | "Dental hygiene";
  /** One neutral line, e.g. "Dr. Daniel Reyes focuses on dental implants and full-arch restorations." */
  bio: string;
  areas: ServiceSlug[];
};
