"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { mapsEmbedUrl, offices } from "@/lib/business";
import type { LocationSlug } from "@/content/types";

/** A static Ice panel with town tabs. The Google Map loads only after "Show map", so it costs nothing until used. */
export function MapFacade({ initial = "baltimore", single }: { initial?: LocationSlug; single?: boolean }) {
  const [town, setTown] = useState<LocationSlug>(initial);
  const [show, setShow] = useState(false);
  const office = offices.find((o) => o.slug === town)!;
  return (
    <div className="overflow-hidden rounded-sm border border-line bg-ice">
      {!single ? (
        <div className="flex flex-wrap gap-2 border-b border-line p-3" role="group" aria-label="Choose an office for the map">
          {offices.map((o) => (
            <button
              key={o.slug}
              type="button"
              aria-pressed={o.slug === town}
              onClick={() => setTown(o.slug)}
              className={`min-h-11 rounded-full px-4 text-[0.9375rem] transition-colors ${o.slug === town ? "bg-ink text-paper" : "hover:bg-paper"}`}
            >
              {o.town}
            </button>
          ))}
        </div>
      ) : null}
      <div className="relative h-[320px] md:h-[380px]">
        {show ? (
          <iframe
            key={town}
            title={`Map of ${office.town}, Maryland`}
            src={mapsEmbedUrl(office.town)}
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-paper text-azure-deep">
              <MapPin size={22} strokeWidth={1.5} aria-hidden="true" />
            </span>
            <p className="font-display text-[1.75rem] leading-tight">{office.town}, MD</p>
            <button type="button" onClick={() => setShow(true)} className="btn btn-outline">
              Show map
            </button>
            <p className="max-w-[40ch] text-[0.8125rem] text-mute">Loads Google Maps. Shows the town until the street address is confirmed.</p>
          </div>
        )}
      </div>
    </div>
  );
}
