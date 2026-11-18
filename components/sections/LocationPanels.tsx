"use client";

import { useRef, useState } from "react";
import Link from "@/components/ui/Link";
import { ArrowUpRight, Phone } from "lucide-react";
import { addressPlaceholder, business, mapsSearchUrl, offices } from "@/lib/business";
import { routes } from "@/lib/routes";
import { isDemo } from "@/lib/site";

/** Simple original map-pin outline, drawn large and faint on each placeholder card. */
function PinOutline({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 160" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M60 156C60 156 112 96 112 58A52 52 0 0 0 8 58c0 38 52 98 52 98Z" />
      <circle cx="60" cy="58" r="18" />
    </svg>
  );
}

/**
 * The source's expanding panels: one wide active card and three slim cards with the town rotated.
 * A tablist: click, focus or arrow keys expand a card. Designed location placeholders, no photos.
 */
export function LocationPanels() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: React.KeyboardEvent, i: number) => {
    let n = i;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") n = (i + 1) % offices.length;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") n = (i - 1 + offices.length) % offices.length;
    else if (e.key === "Home") n = 0;
    else if (e.key === "End") n = offices.length - 1;
    else return;
    e.preventDefault();
    setActive(n);
    tabs.current[n]?.focus();
  };

  const cols = offices.map((_, i) => (i === active ? "minmax(0,4.2fr)" : "minmax(0,1fr)")).join(" ");

  return (
    <div className="relative">
      {/* One tablist: chips on phones, an overlay of the slim cards from md up. */}
      <div
        role="tablist"
        aria-label="Our offices"
        className="flex gap-2 overflow-x-auto pb-1 md:pointer-events-none md:absolute md:inset-0 md:z-10 md:grid md:gap-2 md:overflow-visible md:pb-0 md:transition-[grid-template-columns] md:duration-500 md:ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ gridTemplateColumns: cols }}
      >
        {offices.map((o, i) => {
          const on = i === active;
          return (
            <button
              key={o.slug}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`loc-tab-${o.slug}`}
              aria-selected={on}
              aria-controls={`loc-panel-${o.slug}`}
              aria-label={o.isNew ? `${o.town}, new office` : o.town}
              tabIndex={on ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKey(e, i)}
              className={`relative min-h-11 shrink-0 rounded-full border px-4 text-[0.9375rem] md:rounded-sm md:border-0 md:px-0 md:text-paper ${
                on ? "border-ink bg-ink text-paper md:bg-transparent" : "border-line md:pointer-events-auto md:bg-transparent"
              }`}
            >
              <span className="md:hidden">{o.town}</span>
              <span className={`absolute bottom-8 left-1/2 hidden -translate-x-1/2 rotate-180 whitespace-nowrap font-display text-[2rem] transition-opacity duration-300 [writing-mode:vertical-rl] md:block ${on ? "opacity-0" : "opacity-100"}`} aria-hidden="true">
                {o.town}
              </span>
              {o.isNew && !on ? <span className="absolute left-1/2 top-6 hidden -translate-x-1/2 whitespace-nowrap rounded-full border border-cyan/60 px-2 py-0.5 text-[0.625rem] font-medium uppercase tracking-[0.06em] text-cyan md:block">New</span> : null}
            </button>
          );
        })}
      </div>

      <div className="mt-4 grid h-[460px] gap-2 transition-[grid-template-columns] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] max-md:!grid-cols-1 md:mt-0 md:h-[520px]" style={{ gridTemplateColumns: cols }}>
        {offices.map((o, i) => {
          const on = i === active;
          return (
            <div key={o.slug} className={`on-ink relative overflow-hidden rounded-sm bg-ink text-paper ${on ? "" : "max-md:hidden"}`}>
              <PinOutline className={`pointer-events-none absolute text-paper/10 transition-all duration-500 ${on ? "-right-10 -top-6 h-[520px] w-[390px]" : "left-1/2 top-1/2 h-[300px] w-[225px] -translate-x-1/2 -translate-y-1/2"}`} />
              <div
                role="tabpanel"
                id={`loc-panel-${o.slug}`}
                aria-labelledby={`loc-tab-${o.slug}`}
                hidden={!on}
                className="relative z-20 flex h-full flex-col justify-between p-6 md:p-10"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-[clamp(2.5rem,1.8rem+2.4vw,4rem)] leading-none font-light">{o.town}</h3>
                    {o.isNew ? <span className="rounded-full border border-cyan/60 px-2.5 py-1 text-[0.6875rem] font-medium uppercase tracking-[0.06em] text-cyan">New office</span> : null}
                  </div>
                  {isDemo ? <p className="mt-3 text-[0.8125rem] text-mist" data-placeholder>Photo: your {o.town} office</p> : null}
                </div>
                <div className="grid gap-6 xl:grid-cols-[1fr_auto] xl:items-end">
                  <dl className="grid grid-cols-2 gap-x-8 gap-y-3 text-[0.9375rem] sm:max-w-[520px]">
                    <div>
                      <dt className="label text-mist">Address</dt>
                      <dd className="mt-1">
                        {addressPlaceholder}
                        <br />
                        <span className="text-mist">{o.isNew ? `${o.town}, MD` : `${o.landmark}, ${o.town}, MD`}</span>
                      </dd>
                    </div>
                    <div>
                      <dt className="label text-mist">Hours</dt>
                      <dd className="mt-1">
                        {business.hoursShort}
                        <br />
                        <span className="text-mist">Closed weekends</span>
                      </dd>
                    </div>
                  </dl>
                  <div className="flex flex-wrap gap-2">
                    <a href={mapsSearchUrl(o.town)} target="_blank" rel="noopener noreferrer" className="btn btn-paper">
                      Directions <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
                      <span className="sr-only">to {o.town} (opens Google Maps in a new tab)</span>
                    </a>
                    <a href={business.phoneHref} className="btn btn-ghost-light">
                      <Phone size={16} strokeWidth={1.5} aria-hidden="true" /> {business.phoneDisplay}
                    </a>
                  </div>
                </div>
                <Link href={routes.location(o.slug)} className="absolute right-6 top-6 text-[0.875rem] text-mist underline-offset-4 hover:text-paper hover:underline md:right-10 md:top-10">
                  {o.town} office page
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
