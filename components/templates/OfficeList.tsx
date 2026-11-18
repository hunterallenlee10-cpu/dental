import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Sparkle } from "@/components/brand/Sparkle";
import { addressPlaceholder, business, mapsSearchUrl, offices } from "@/lib/business";
import { routes } from "@/lib/routes";

/** The four offices as text: name, address placeholder, landmark, hours, phone, directions. */
export function OfficeList({ id = "offices-title", title }: { id?: string; title?: React.ReactNode }) {
  return (
    <section aria-labelledby={id} className="section">
      <div className="wrap">
        <h2 id={id} className="text-h2">{title ?? <>Our <em className="accent">offices</em></>}</h2>
        <ul className="mt-12 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {offices.map((o) => (
            <li key={o.slug} className="flex flex-col bg-paper p-6 md:p-8">
              <h3 className="flex flex-wrap items-center gap-2 font-display text-[1.75rem]">
                <Link href={routes.location(o.slug)} className="hover:text-azure-deep">{o.town}</Link>
                {o.isNew ? <span className="whitespace-nowrap rounded-full border border-azure/50 px-2 py-0.5 font-sans text-[0.6875rem] font-medium uppercase tracking-[0.06em] text-azure-deep">New office</span> : null}
              </h3>
              <p className="mt-3 text-[0.9375rem] text-mute">
                {addressPlaceholder}
                <br />
                {o.isNew ? `${o.town}, MD` : `${o.landmark}, ${o.town}, MD`}
              </p>
              <p className="mt-3 flex items-center gap-2 text-[0.9375rem]"><Sparkle size={9} className="text-cyan" /> {business.hoursShort}</p>
              <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-6 text-[0.9375rem]">
                <a href={business.phoneHref} className="font-medium text-azure-deep underline-offset-4 hover:underline">{business.phoneDisplay}</a>
                <a href={mapsSearchUrl(o.town)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-azure-deep underline-offset-4 hover:underline">
                  Directions <ArrowUpRight size={14} strokeWidth={1.5} aria-hidden="true" />
                  <span className="sr-only">to {o.town} (opens in a new tab)</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
