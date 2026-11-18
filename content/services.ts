import { servicesA } from "./services-a";
import { servicesB } from "./services-b";
import { servicesC } from "./services-c";
import type { CategoryKey, Service, ServiceSlug } from "./types";
import type { PhotoId } from "@/lib/photos";
import type { CoverageNeed } from "@/lib/coverage";
import type { VisitReason } from "@/components/ui/BookButton";

export const services: Service[] = [...servicesA, ...servicesB, ...servicesC];

export const serviceBySlug = (slug: ServiceSlug) => {
  const s = services.find((x) => x.slug === slug);
  if (!s) throw new Error(`Unknown service ${slug}`);
  return s;
};

type Meta = { photo: PhotoId; photo2?: PhotoId; pos?: string; need: CoverageNeed; reason?: VisitReason; category: CategoryKey };

/** One unique photo per service page (from the photo map), plus coverage tier and Visit Request pre-select. */
export const serviceMeta: Record<ServiceSlug, Meta> = {
  "oral-surgery": { photo: "37", photo2: "18", need: "filling", reason: "other", category: "specialist-care" },
  periodontics: { photo: "50", photo2: "29", need: "filling", reason: "other", category: "specialist-care" },
  "wisdom-teeth-removal": { photo: "38", photo2: "20", need: "filling", reason: "other", category: "specialist-care" },
  "dental-x-rays": { photo: "39", photo2: "20", need: "checkup", category: "specialist-care" },
  "cavity-treatment": { photo: "26", photo2: "28", need: "filling", category: "general-dentistry" },
  "root-canal-treatment": { photo: "36", photo2: "28", need: "filling", category: "general-dentistry" },
  "teeth-cleaning": { photo: "57", photo2: "27", need: "checkup", category: "general-dentistry" },
  "tartar-removal": { photo: "29", photo2: "57", need: "checkup", category: "general-dentistry" },
  "tooth-colored-fillings": { photo: "28", photo2: "23", need: "filling", category: "general-dentistry" },
  "kids-dentistry": { photo: "41", pos: "object-[50%_30%]", need: "checkup", category: "general-dentistry" },
  "gum-inflammation": { photo: "48", photo2: "29", need: "checkup", category: "general-dentistry" },
  toothache: { photo: "43", photo2: "26", need: "pain", reason: "pain", category: "general-dentistry" },
  "tooth-abscess": { photo: "44", photo2: "28", need: "filling", reason: "pain", category: "general-dentistry" },
  "teeth-grinding": { photo: "55", photo2: "25", need: "major", reason: "other", category: "general-dentistry" },
  "porcelain-veneers": { photo: "22", photo2: "63", need: "cosmetic", category: "cosmetic-dentistry" },
  "teeth-whitening": { photo: "24", photo2: "53", need: "cosmetic", category: "cosmetic-dentistry" },
  "cosmetic-bonding": { photo: "51", photo2: "23", need: "cosmetic", category: "cosmetic-dentistry" },
  "dental-implants": { photo: "21", photo2: "19", need: "major", category: "implants-and-restorative" },
  "all-on-4": { photo: "49", photo2: "05", need: "major", category: "implants-and-restorative" },
  "dental-crowns": { photo: "33", photo2: "21", pos: "object-[50%_25%]", need: "major", category: "implants-and-restorative" },
  "dental-bridges": { photo: "46", photo2: "26", pos: "object-[52%_30%]", need: "major", category: "implants-and-restorative" },
  dentures: { photo: "54", photo2: "26", need: "major", category: "implants-and-restorative" },
  "inlays-and-onlays": { photo: "45", photo2: "28", need: "major", category: "implants-and-restorative" },
  braces: { photo: "42", need: "ortho", category: "orthodontics" },
  "invisible-braces": { photo: "47", photo2: "25", need: "ortho", category: "orthodontics" },
  invisalign: { photo: "56", photo2: "25", need: "ortho", category: "orthodontics" },
  retainers: { photo: "25", photo2: "42", need: "ortho", category: "orthodontics" },
  apicoectomy: { photo: "18", photo2: "17", need: "filling", reason: "other", category: "specialist-care" },
  "deep-cleaning": { photo: "52", photo2: "29", need: "filling", reason: "other", category: "specialist-care" },
  "gum-flap-surgery": { photo: "27", photo2: "29", need: "major", reason: "other", category: "specialist-care" },
  "panoramic-x-ray": { photo: "58", photo2: "20", need: "checkup", category: "specialist-care" },
  "3d-cbct-scan": { photo: "40", photo2: "19", need: "checkup", category: "specialist-care" },
};

const needToReason: Record<CoverageNeed, VisitReason> = {
  checkup: "checkup",
  filling: "filling",
  major: "restorative",
  ortho: "ortho",
  cosmetic: "cosmetic",
  pain: "pain",
};
export const visitReasonFor = (slug: ServiceSlug): VisitReason => serviceMeta[slug].reason ?? needToReason[serviceMeta[slug].need];

/** Pick the first title pattern that lands between 50 and 60 characters. */
export function fitTitle(candidates: string[]): string {
  const ok = candidates.find((t) => t.length >= 50 && t.length <= 60);
  if (ok) return ok;
  return [...candidates].sort((a, b) => Math.abs(55 - a.length) - Math.abs(55 - b.length))[0];
}

export const serviceTitle = (s: Service) =>
  fitTitle([
    `${s.name} in Baltimore, MD | Aurelle Dental`,
    `${s.name} in Baltimore and Frederick, MD | Aurelle Dental`,
    `${s.name} in Baltimore, Maryland | Aurelle Dental`,
    `${s.name} in Baltimore, MD | Dentist | Aurelle Dental`,
    `${s.name} | Dentist in Baltimore, MD | Aurelle Dental`,
    `${s.name} in Baltimore, MD | Aurelle`,
    `${s.name} in Baltimore | Aurelle Dental`,
    `${s.name} in Maryland | Aurelle Dental`,
  ]);

/** Meta description from the page's own lead sentence, trimmed to about 155 characters. */
export const describe = (lead: string, tail = " Written estimate first. Book a visit.") => {
  const first = lead.split(/(?<=\.)\s/)[0];
  const base = first.length > 150 - tail.length ? first.slice(0, 150 - tail.length).replace(/\s+\S*$/, "") + "." : first;
  return (base + tail).slice(0, 160);
};
