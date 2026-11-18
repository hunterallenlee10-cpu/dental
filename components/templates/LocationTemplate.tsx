import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";
import { PageHero } from "./PageHero";
import { ServiceCard } from "./Cards";
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
              <div className="flex gap-4">
                <MapPin size={20} strokeWidth={1.5} className="mt-1 shrink-0 text-cyan" aria-hidden="true" />
                <div>
                  <dt className="label text-mist">Address</dt>
                  <dd className="mt-1">{addressPlaceholder}<br /><span className="text-mist">{o.isNew ? `${o.town}, MD` : `${o.landmark}, ${o.town}, MD`}</span></dd>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock size={20} strokeWidth={1.5} className="mt-1 shrink-0 text-cyan" aria-hidden="true" />
                <div>
                  <dt className="label text-mist">Hours</dt>
                  <dd className="mt-1">{business.hoursLong}</dd>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone size={20} strokeWidth={1.5} className="mt-1 shrink-0 text-cyan" aria-hidden="true" />
                <div>
                  <dt className="label text-mist">Phone</dt>
                  <dd className="mt-1"><a href={business.phoneHref} className="underline-offset-4 hover:underline">{business.phoneDisplay}</a> <span className="text-mist">(one number for all offices)</span></dd>
                </div>
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
          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {/* DRAFT: confirm per office */}
            {l.services.map((s) => (
              <li key={s}>
                <ServiceCard slug={s} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <TeamRail
        headingId="who-title"
        title={<>Who works <em className="accent">here</em></>}
        sub="We tell you when you book. Our dentists and hygienists work as one team across the four offices."
      />
      <FaqSection items={l.faq} title={<>{o.town} <em className="accent">questions</em></>} />
      <CtaPanel office={o.slug} />
    </>
  );
}
