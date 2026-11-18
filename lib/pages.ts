// Every page on the site with the source file it is built from (for the sitemap's last-modified dates).
import { execSync } from "node:child_process";
import { categories } from "@/content/categories";
import { services } from "@/content/services";
import { team } from "@/content/team";
import { tips } from "@/content/tips";
import { offices } from "./business";
import { routes } from "./routes";

type Entry = { path: string; files: string[]; priority: number };

export function allPages(): Entry[] {
  const p = (path: string, files: string[], priority = 0.6): Entry => ({ path, files, priority });
  return [
    p(routes.home, ["app/page.tsx", "content/home.ts"], 1),
    p(routes.services, ["app/services/page.tsx", "content/categories.ts"], 0.9),
    ...categories.map((c) => p(routes.category(c.key), ["components/templates/CategoryTemplate.tsx", "content/categories.ts"], 0.8)),
    ...services.map((s) => p(routes.service(s.slug), ["components/templates/ServiceTemplate.tsx", "content/services-a.ts", "content/services-b.ts", "content/services-c.ts"], 0.8)),
    p(routes.locations, ["app/locations/page.tsx"], 0.8),
    ...offices.map((o) => p(routes.location(o.slug), ["components/templates/LocationTemplate.tsx", "content/pages.ts"], 0.9)),
    p(routes.team, ["app/team/page.tsx", "content/team.ts"], 0.6),
    ...team.map((m) => p(routes.member(m.slug), ["app/team/[member]/page.tsx", "content/team.ts"], 0.5)),
    p(routes.about, ["app/about/page.tsx", "content/pages.ts"], 0.6),
    p(routes.pricing, ["app/insurance-and-pricing/page.tsx", "content/pages.ts", "lib/coverage.ts"], 0.8),
    p(routes.payment, ["app/payment-and-financing/page.tsx", "content/pages.ts"], 0.6),
    p(routes.newPatients, ["app/new-patients/page.tsx"], 0.7),
    p(routes.emergency, ["app/emergency-dentist/page.tsx"], 0.8),
    p(routes.tips, ["app/tips/page.tsx", "content/tips.ts"], 0.6),
    ...tips.map((t) => p(routes.tip(t.slug), ["app/tips/[slug]/page.tsx", "content/tips.ts"], 0.5)),
    p(routes.reviews, ["app/reviews/page.tsx"], 0.4),
    p(routes.contact, ["app/contact/page.tsx"], 0.7),
    p(routes.book, ["app/book/page.tsx"], 0.7),
    p(routes.privacy, ["app/privacy-and-terms/page.tsx"], 0.2),
    p(routes.cookies, ["app/cookies/page.tsx"], 0.2),
  ];
}

/** Last commit date of any of the files, from git; falls back to the build time. */
export function lastModified(files: string[]): Date {
  try {
    const out = execSync(`git log -1 --format=%cI -- ${files.map((f) => `"${f}"`).join(" ")}`, { stdio: ["ignore", "pipe", "ignore"] }).toString().trim();
    if (out) return new Date(out);
  } catch {}
  return new Date();
}
