// "From $X" price table. Switched off until the practice supplies its own numbers.
// DRAFT: prices supplied by the practice. Never invent a price.
import type { ServiceSlug } from "@/content/types";

export const pricingTable = {
  enabled: false, // DRAFT
  rows: [] as { service: ServiceSlug; from: string }[], // DRAFT: e.g. { service: "teeth-cleaning", from: "$X" }
};
