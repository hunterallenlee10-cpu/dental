import { PageHero } from "@/components/templates/PageHero";
import { OfficeList } from "@/components/templates/OfficeList";
import { LocationPanels } from "@/components/sections/LocationPanels";
import { MapFacade } from "@/components/sections/MapFacade";
import { FaqSection } from "@/components/sections/home/FaqSection";
import { CtaPanel } from "@/components/sections/CtaPanel";
import { locationsHub } from "@/content/pages";
import { business } from "@/lib/business";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const metadata = pageMeta({
  title: "Dental Offices in Baltimore and Frederick, MD | Aurelle Dental",
  description: "Four Aurelle Dental offices in Baltimore, Frederick, Leonardtown and Annapolis, MD. Same prices, one number, open Mon to Fri until 8 PM. Book a visit.",
  path: routes.locations,
});

export default function LocationsHub() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Locations", path: routes.locations }]}
        eyebrow="Baltimore, Frederick, Leonardtown and Annapolis"
        h1={<>Our dental offices <em className="accent">in Maryland</em></>}
        lead={<p>{locationsHub.intro} {business.samePricesLine}</p>}
        photo="30"
        photoPos="object-[45%_50%]"
      />
      <section aria-labelledby="panels-title" className="section">
        <div className="wrap">
          <h2 id="panels-title" className="text-h2">Four offices, <em className="accent">same quality.</em></h2>
          <div className="mt-12"><LocationPanels /></div>
          <div className="mt-6"><MapFacade /></div>
        </div>
      </section>
      <OfficeList title={<>Hours and <em className="accent">directions</em></>} />
      <FaqSection
        items={[
          { q: "Are prices the same at every office?", a: "Yes. Baltimore, Frederick, Leonardtown and Annapolis share the same prices, one phone number and the same hours. You get a written estimate before any treatment." },
          { q: "What are your hours?", a: "All four offices are open Monday to Friday, 7 AM to 8 PM, and closed on weekends." },
          { q: "Which office should I choose?", a: "Whichever suits you best. When you book, we tell you which dentists work at each office and find a time that fits." },
        ]}
      />
      <CtaPanel />
    </>
  );
}
