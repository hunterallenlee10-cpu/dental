import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";
import { PageHero } from "./PageHero";
import { Deferred } from "@/components/ui/Deferred";
import Link from "@/components/ui/Link";
import { categories } from "@/content/categories";
import { serviceBySlug, serviceMeta } from "@/content/services";
import { FaqSection } from "@/components/sections/home/FaqSection";
import { MapFacade } from "@/components/sections/MapFacade";
import { CtaPanel } from "@/components/sections/CtaPanel";
import { TeamRail } from "@/components/team/TeamRail";
import { DraftTag } from "@/components/ui/DraftTag";
import { JsonLd } from "@/components/seo/JsonLd";
import { locations } from "@/content/pages";
import { addressPlaceholder, business, mapsSearchUrl, type Office } from "@/lib/business";
import { officeSchema } from "@/lib/schema";
import { routes } from "@/lib/routes";
import type { PhotoId } from "@/lib/photos";

export const officePhoto: Record<Office["slug"], PhotoId> = { baltimore: "31", frederick: "35", leonardtown: "36", annapolis: "32" };

export function LocationTemplate({ o }: { o: Office }) {
  const l = locations[o.slug];
  // Group this office's services under their category hubs.
  const groups = categories
    .filter((c) => c.key !== "prosthodontics")
    .map((c) => ({ key: c.key, name: c.name, services: l.services.filter((sv) => serviceMeta[sv].category === c.key) }))
    .filter((g) => g.services.length);
  return (
    <>
      <JsonLd data={officeSchema(o)} />
      <PageHero
        crumbs={[
          { name: "Locations", path: routes.locations },
          { name: o.town, path: routes.location(o.slug) },
        ]}
        eyebrow={o.isNew ? "New office" : o.landmark}
        h1={
          <>
            Dentist in <em className="accent">{o.town}, MD</em>
          </>
        }
        lead={<p>{l.intro}</p>}
        photo={officePhoto[o.slug]}
        photoPos="object-[50%_30%]"
        office={o.slug}
      >
        <p className="mt-6 text-[0.9375rem] text-mute">{l.nearby}</p>
      </PageHero>

      <section aria-labelledby="office-title" className="section">
        <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          <div className="on-ink relative overflow-hidden rounded-sm bg-ink p-8 text-paper md:p-10">
            <h2 id="office-title" className="font-display text-[2.25rem] leading-tight">The {o.town} office</h2>
            <DraftTag className="mt-3">Photo: your {o.town} office</DraftTag>
            <dl className="mt-8 space-y-6">
              <div>
                <dt className="label flex items-center gap-3 text-mist"><MapPin size={18} strokeWidth={1.5} className="text-cyan" aria-hidden="true" /> Address</dt>
                <dd className="mt-1 pl-[30px]">{addressPlaceholder}<br /><span className="text-mist">{o.isNew ? `${o.town}, MD` : `${o.landmark}, ${o.town}, MD`}</span></dd>
              </div>
              <div>
                <dt className="label flex items-center gap-3 text-mist"><Clock size={18} strokeWidth={1.5} className="text-cyan" aria-hidden="true" /> Hours</dt>
                <dd className="mt-1 pl-[30px]">{business.hoursLong}</dd>
              </div>
              <div>
                <dt className="label flex items-center gap-3 text-mist"><Phone size={18} strokeWidth={1.5} className="text-cyan" aria-hidden="true" /> Phone</dt>
                <dd className="mt-1 pl-[30px]"><a href={business.phoneHref} className="underline-offset-4 hover:underline">{business.phoneDisplay}</a> <span className="text-mist">(one number for all offices)</span></dd>
              </div>
            </dl>
            <a href={mapsSearchUrl(o.town)} target="_blank" rel="noopener noreferrer" className="btn btn-paper mt-10">
              Directions <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
              <span className="sr-only">to {o.town} (opens Google Maps in a new tab)</span>
            </a>
          </div>
          <div>
            <h2 className="text-h2">How to <em className="accent">find us</em></h2>
            <ul className="mt-6 space-y-2 text-mute">
              {l.howToFind.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <div className="mt-8">
              <MapFacade initial={o.slug} single />
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="here-title" className="section bg-porcelain">
        <div className="wrap">
          <h2 id="here-title" className="text-h2">Care at our <em className="accent">{o.town}</em> office</h2>
          <p className="mt-5 max-w-[56ch] text-mute">These are the services patients most often come to us for. When you book, ask which services and which dentists are at this office.</p>
          {/* DRAFT: confirm per office */}
          <div className="mt-12 flex flex-wrap gap-px overflow-hidden rounded-sm border border-line bg-line">
            {groups.map((g) => (
              <div key={g.key} className="grow basis-[200px] bg-paper p-6 md:p-7">
                <h3 className="font-display text-[1.4rem] leading-tight">
                  <Link href={routes.category(g.key)} className="hover:text-azure-deep">{g.name}</Link>
                </h3>
                <ul className="mt-4 space-y-2 text-[0.9375rem]">
                  {g.services.map((sv) => (
                    <li key={sv}>
                      <Link href={routes.service(sv)} className="text-mute underline decoration-line underline-offset-4 hover:text-ink hover:decoration-ink">
                        {serviceBySlug(sv).name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Deferred>
      <TeamRail
        headingId="who-title"
        title={<>Who works <em className="accent">here</em></>}
        sub="We tell you when you book. Our dentists and hygienists work as one team across the four offices."
      />
      </Deferred>
      <Deferred><FaqSection items={l.faq} title={<>{o.town} <em className="accent">questions</em></>} /></Deferred>
      <CtaPanel office={o.slug} />
    </>
  );
}
