import Link from "@/components/ui/Link";
import { ArrowRight } from "lucide-react";
import { Photo } from "@/components/ui/Photo";
import { routes } from "@/lib/routes";
import { serviceBySlug, serviceMeta } from "@/content/services";
import { tips } from "@/content/tips";
import type { ServiceSlug, Tip, TipSlug } from "@/content/types";
import type { PhotoId } from "@/lib/photos";

/** Text-led service card: title, one-line summary, arrow. */
export function ServiceCard({ slug, headingLevel = "h3" }: { slug: ServiceSlug; headingLevel?: "h2" | "h3" }) {
  const s = serviceBySlug(slug);
  const H = headingLevel;
  return (
    <Link href={routes.service(slug)} className="group flex h-full flex-col justify-between gap-6 rounded-sm border border-line bg-paper p-6 transition-colors hover:border-ink md:p-7">
      <span>
        <H className="font-display text-[1.5rem] leading-tight group-hover:text-azure-deep">{s.name}</H>
        <span className="mt-2 block text-[0.9375rem] text-mute">{s.summary}</span>
      </span>
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-paper" aria-hidden="true">
        <ArrowRight size={16} strokeWidth={1.5} />
      </span>
    </Link>
  );
}

/** One photo per article, each drawn from the article's related service. */
const tipPhotos: Record<TipSlug, PhotoId> = {
  "implant-or-bridge": "05",
  "how-often-to-see-the-dentist": "17",
  "whitening-or-veneers": "53",
  "after-a-tooth-extraction": "38",
  "toothache-what-to-do": "43",
  "how-to-brush-and-floss": "27",
  "how-long-whitening-lasts": "24",
  "bonding-or-veneers": "51",
  "when-a-tooth-needs-a-crown": "33",
  "dentures-or-implant-teeth": "54",
  "clear-aligners-or-braces": "25",
  "braces-for-adults": "42",
  "why-retainers-matter": "06",
  "should-wisdom-teeth-come-out": "20",
  "which-dental-x-ray": "19",
};
export const tipPhoto = (t: Tip): PhotoId => tipPhotos[t.slug] ?? serviceMeta[t.relatedServices[0] ?? "teeth-cleaning"].photo;

export function TipCard({ tip, headingLevel = "h3" }: { tip: Tip; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <Link href={routes.tip(tip.slug)} className="group block">
      <div className="aspect-[4/3] overflow-hidden rounded-sm bg-porcelain">
        <Photo id={tipPhoto(tip)} cover sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw" className="transition-transform duration-700 group-hover:scale-[1.03]" />
      </div>
      <p className="mt-4 text-[0.8125rem] text-mute">
        {tip.category} · {tip.readMinutes} min read
      </p>
      <H className="mt-1 font-display text-[1.5rem] leading-tight group-hover:text-azure-deep">{tip.title}</H>
      <p className="mt-2 text-[0.9375rem] text-mute">{tip.summary}</p>
    </Link>
  );
}

export function RelatedTips({ slugs, id = "tips-title" }: { slugs: TipSlug[]; id?: string }) {
  const list = slugs.map((s) => tips.find((t) => t.slug === s)!).filter(Boolean).slice(0, 3);
  if (!list.length) return null;
  return (
    <section aria-labelledby={id} className="section">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id={id} className="text-h2">Related <em className="accent">tips</em></h2>
          <Link href={routes.tips} className="link-arrow">
            All dental tips <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
          </Link>
        </div>
        <ul className="mt-12 grid gap-10 md:grid-cols-3 md:gap-6">
          {list.map((t) => (
            <li key={t.slug}>
              <TipCard tip={t} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
