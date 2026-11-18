// Every internal link goes through this file, so nothing points at a source slug.
import type { CategoryKey, LocationSlug, ServiceSlug, TeamSlug, TipSlug } from "@/content/types";

export const routes = {
  home: "/",
  services: "/services",
  category: (key: CategoryKey) => `/services/${key}`,
  service: (slug: ServiceSlug) => `/services/${slug}`,
  locations: "/locations",
  location: (slug: LocationSlug) => `/locations/${slug}`,
  team: "/team",
  member: (slug: TeamSlug) => `/team/${slug}`,
  about: "/about",
  pricing: "/insurance-and-pricing",
  payment: "/payment-and-financing",
  tips: "/tips",
  tip: (slug: TipSlug) => `/tips/${slug}`,
  reviews: "/reviews",
  contact: "/contact",
  book: "/book",
  privacy: "/privacy-and-terms",
  cookies: "/cookies",
  newPatients: "/new-patients",
  emergency: "/emergency-dentist",
} as const;

/** Source slug to new route, for the redirect map in SEO-LAUNCH.md and the audit. */
export const sourceRouteMap: Record<string, string> = {
  "/": "/",
  "/storitve/": "/services",
  "/zobozdravstvo/": "/services/general-dentistry",
  "/estetsko-zobozdravstvo/": "/services/cosmetic-dentistry",
  "/storitve/implantologija-in-protetika/": "/services/implants-and-restorative",
  "/ortodontija/": "/services/orthodontics",
  "/specialisticne-storitve/": "/services/specialist-care",
  "/zobna-protetika/": "/services/prosthodontics",
  "/lokacije/": "/locations",
  "/ekipa/": "/team",
  "/o-nas/": "/about",
  "/cenik-zobozdravstvenih-storitev/": "/insurance-and-pricing",
  "/placilo-in-obroki/": "/payment-and-financing",
  "/nasveti/": "/tips",
  "/mnenja/": "/reviews",
  "/kontakt/": "/contact",
  "/naroci-svetovanje/": "/book",
  "/splosni-pogoji/": "/privacy-and-terms",
  "/piskotki/": "/cookies",
};
