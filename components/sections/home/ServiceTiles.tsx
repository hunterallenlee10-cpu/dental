import Link from "@/components/ui/Link";
import { ArrowRight } from "lucide-react";
import { Photo } from "@/components/ui/Photo";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { routes } from "@/lib/routes";
import type { PhotoId } from "@/lib/photos";
import type { CategoryKey, ServiceSlug } from "@/content/types";

const tiles: { key: CategoryKey; title: string; photo: PhotoId; pos: string }[] = [
  { key: "general-dentistry", title: "General dentistry", photo: "03", pos: "object-[42%_50%]" },
  { key: "cosmetic-dentistry", title: "Cosmetic dentistry", photo: "04", pos: "object-[50%_30%]" },
  { key: "implants-and-restorative", title: "Implants and restorative", photo: "05", pos: "object-[45%_50%]" },
  { key: "orthodontics", title: "Orthodontics", photo: "06", pos: "object-[50%_35%]" },
];

const quiet: { slug: ServiceSlug; label: string }[] = [
  { slug: "oral-surgery", label: "Oral surgery" },
  { slug: "periodontics", label: "Periodontics" },
  { slug: "wisdom-teeth-removal", label: "Wisdom teeth removal" },
  { slug: "dental-x-rays", label: "Dental x-rays and 3D scans" },
];

export function ServiceTiles() {
  return (
    <section aria-labelledby="services-title" className="section pt-4 md:pt-8">
      <div className="wrap">
        <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-end">
          <SplitHeading id="services-title" plain="Everything for your smile." accent="In one place." className="text-h2" breakAccent />
          <p className="max-w-[44ch] text-lead text-mute md:justify-self-end">
            From routine checkups to a complete smile makeover. Explore what we do and find the right fit for you.
          </p>
        </div>
      </div>

      <ul className="rail mt-12 auto-cols-[80%] scroll-px-5 px-5 sm:auto-cols-[46%] md:mx-auto md:mt-16 md:max-w-[1672px] md:grid-flow-row md:grid-cols-4 md:gap-[2px] md:overflow-visible md:px-0">
        {tiles.map((t) => (
          <li key={t.key} className="reveal">
            <Link href={routes.category(t.key)} className="group relative block aspect-[3/4.2] overflow-hidden rounded-sm bg-ink md:rounded-none">
              <Photo
                id={t.photo}
                cover
                sizes="(min-width: 768px) 25vw, 80vw"
                className={`${t.pos} transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]`}
              />
              <span aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(0deg,rgb(14_42_56/0.82)_0%,rgb(14_42_56/0.25)_38%,rgb(14_42_56/0)_60%)]" />
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-paper md:p-7">
                <span className="font-display text-[1.75rem] leading-[1.05] md:text-[clamp(1.6rem,1rem+1.2vw,2.25rem)]">{t.title}</span>
                <span className="mb-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-paper/40 transition-colors group-hover:bg-paper group-hover:text-ink">
                  <ArrowRight size={18} strokeWidth={1.5} aria-hidden="true" />
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="wrap mt-10">
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[1rem]">
          {quiet.map((q) => (
            <li key={q.slug}>
              <Link href={routes.service(q.slug)} className="text-ink underline decoration-line underline-offset-[6px] hover:decoration-ink">
                {q.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href={routes.services} className="link-arrow">
              All services <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
