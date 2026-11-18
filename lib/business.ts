// Every business fact on the site. The whole practice is a fictional template.
// Every value below is a DRAFT placeholder for the buying practice to replace.
// The live-mode build guard (scripts/guard.mjs) refuses to build while DRAFT markers remain.

import type { LocationSlug } from "@/content/types";

export const business = {
  name: "Aurelle Dental", // DRAFT
  shortName: "Aurelle", // DRAFT
  tagline: "Creating carefree smiles.", // DRAFT
  description:
    "A private dental practice with four offices in Maryland. General dentists, implant dentists, prosthodontists, orthodontists, a periodontist and dental hygienists under one roof.", // DRAFT
  phoneDisplay: "(410) 555-0142", // DRAFT: reserved fictional 555 number
  phoneE164: "+14105550142", // DRAFT
  phoneHref: "tel:+14105550142", // DRAFT
  smsHref: "sms:+14105550142", // DRAFT
  email: "hello@aurelledental.com", // DRAFT
  emailHref: "mailto:hello@aurelledental.com", // DRAFT
  hoursShort: "Mon to Fri, 7 AM to 8 PM", // DRAFT
  hoursLong: "Monday to Friday, 7 AM to 8 PM. Closed weekends.", // DRAFT
  hoursSpec: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "20:00" }, // DRAFT
  state: "MD", // DRAFT
  stateName: "Maryland", // DRAFT
  googleRating: null as number | null, // DRAFT: no ratings until real reviews exist
  googleReviewCount: null as number | null, // DRAFT
  socials: [] as { name: string; href: string }[], // DRAFT: social links
  logoPath: "/icon.svg", // DRAFT: practice logo
} as const;

export type Office = {
  slug: LocationSlug;
  town: string;
  landmark: string;
  address: string | null;
  isNew?: boolean;
  flagship?: boolean;
};

export const offices: Office[] = [
  { slug: "baltimore", town: "Baltimore", landmark: "Harbor East", address: null, flagship: true }, // DRAFT
  { slug: "frederick", town: "Frederick", landmark: "Downtown Frederick", address: null }, // DRAFT
  { slug: "leonardtown", town: "Leonardtown", landmark: "Near the town square", address: null }, // DRAFT
  { slug: "annapolis", town: "Annapolis", landmark: "New office", address: null, isNew: true }, // DRAFT
];

/** Shown wherever a street address would go, until the practice supplies them. */
export const addressPlaceholder = "Street address coming soon"; // DRAFT: street address

export const officeBySlug = (slug: LocationSlug) => offices.find((o) => o.slug === slug)!;

export const differentiators = {
  estimate: "A written treatment estimate before any treatment starts. We do not start without it.", // DRAFT
  samePrices: "Same prices at all four offices. One number. Open until 8 PM.", // DRAFT
  evenings: "Open until 8 PM every weekday, so visits fit around work and school.", // DRAFT
  specialists: "A specialist for each area, working as one team.", // DRAFT
  cbct: "3D CBCT imaging to plan every implant.", // DRAFT
  rootCanal: "Root canals done under a rubber dam, with canal length measured by an electronic apex locator.", // DRAFT
  cleaning: "Cleanings with ultrasonic scaling and air polishing, then a home-care lesson.", // DRAFT
  nervous:
    "If you are nervous, tell us when you book. We take time for your questions and explain each step before we do it.", // DRAFT
  firstVisit: "Bring dental x-rays from the last two years if you have them. If not, we take them here.", // DRAFT
};

export const payment = {
  summary: "Payment: cards, HSA and FSA, monthly plans", // DRAFT
  methods: ["All major cards", "HSA and FSA cards", "Monthly payment plans"], // DRAFT
  lender: null as string | null, // DRAFT: name the lender, for example CareCredit, Cherry or Sunbit
  insuranceLine: "We work with most PPO dental plans.", // DRAFT: carrier list
  acceptedPlans: [] as string[], // DRAFT: carrier list
};

export const membershipPlan = {
  enabled: false, // DRAFT: switched on when the practice supplies its price and inclusions
  name: "Aurelle membership plan", // DRAFT
  price: null as string | null, // DRAFT
  inclusions: [] as string[], // DRAFT
};

export const mapsSearchUrl = (town: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${town}, MD`)}`;
export const mapsEmbedUrl = (town: string) =>
  `https://www.google.com/maps?q=${encodeURIComponent(`${town}, MD`)}&output=embed`;
