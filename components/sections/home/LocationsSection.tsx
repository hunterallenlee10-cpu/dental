import { LocationPanels } from "@/components/sections/LocationPanels";
import { MapFacade } from "@/components/sections/MapFacade";
import { business } from "@/lib/business";

export function LocationsSection() {
  return (
    <section aria-labelledby="locations-title" className="section">
      <div className="wrap">
        <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-end">
          <h2 id="locations-title" className="text-h2">
            Four offices, <em className="accent">same quality.</em>
          </h2>
          <p className="max-w-[44ch] text-lead text-mute md:justify-self-end">
            Open Monday to Friday, 7 AM to 8 PM. One number for every office: {business.phoneDisplay}.
          </p>
        </div>
        <div className="mt-12">
          <LocationPanels />
        </div>
        <div className="mt-6">
          <MapFacade />
        </div>
      </div>
    </section>
  );
}
