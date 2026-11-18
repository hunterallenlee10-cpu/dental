import { PageHero } from "./PageHero";
import { Deferred } from "@/components/ui/Deferred";
import { StepsBand } from "./StepsBand";
import { RelatedTips, ServiceCard } from "./Cards";
import { FaqSection } from "@/components/sections/home/FaqSection";
import { ReviewsPlaceholder } from "@/components/sections/ReviewsPlaceholder";
import { CtaPanel } from "@/components/sections/CtaPanel";
import { categoryExtras, specialistGroups } from "@/content/categories";
import { tips } from "@/content/tips";
import { routes } from "@/lib/routes";
import type { PhotoId } from "@/lib/photos";
import type { Category, CategoryKey } from "@/content/types";
import type { VisitReason } from "@/components/ui/BookButton";

export const categoryPhoto: Record<CategoryKey, { photo: PhotoId; pos?: string }> = {
  "general-dentistry": { photo: "03", pos: "object-[40%_50%]" },
  "cosmetic-dentistry": { photo: "04", pos: "object-[50%_25%]" },
  "implants-and-restorative": { photo: "05" },
  orthodontics: { photo: "06", pos: "object-[50%_30%]" },
  "specialist-care": { photo: "33", pos: "object-[50%_25%]" },
  prosthodontics: { photo: "34" },
};

const categoryReason: Record<CategoryKey, VisitReason> = {
  "general-dentistry": "checkup",
  "cosmetic-dentistry": "cosmetic",
  "implants-and-restorative": "restorative",
  orthodontics: "ortho",
  "specialist-care": "other",
  prosthodontics: "restorative",
};

export function CategoryTemplate({ c }: { c: Category }) {
  const extras = categoryExtras[c.key];
  const tipSlugs = tips.filter((t) => t.relatedServices.some((r) => c.services.includes(r))).map((t) => t.slug);
  const groups = c.key === "specialist-care" ? specialistGroups : [{ heading: "", services: c.services }];
  const ph = categoryPhoto[c.key];
  return (
    <>
      <PageHero
        crumbs={[
          { name: "Services", path: routes.services },
          { name: c.name, path: routes.category(c.key) },
        ]}
        eyebrow="Services in Baltimore, Frederick, Leonardtown and Annapolis, MD"
        h1={
          <>
            {c.h1.plain} <em className="accent">{c.h1.accent}</em>
          </>
        }
        lead={<p>{c.intro}</p>}
        photo={ph.photo}
        photoPos={ph.pos}
        reason={categoryReason[c.key]}
        bookLabel={c.key === "orthodontics" ? "Book a consultation" : undefined}
      />
      <section aria-labelledby="list-title" className="section">
        <div className="wrap">
          <h2 id="list-title" className="text-h2">
            What we <em className="accent">offer</em>
          </h2>
          {groups.map((g) => (
            <div key={g.heading || "all"} className="mt-12">
              {g.heading ? <h3 className="label mb-5 text-mute">{g.heading}</h3> : null}
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {g.services.map((s) => (
                  <li key={s}>
                    <ServiceCard slug={s} headingLevel={g.heading ? "h3" : "h3"} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <Deferred><StepsBand id="how-title" title={<>How it <em className="accent">works</em></>} steps={extras.howItWorks} /></Deferred>
      <Deferred><FaqSection items={extras.faq} /></Deferred>
      <Deferred><RelatedTips slugs={tipSlugs} /></Deferred>
      <Deferred><ReviewsPlaceholder /></Deferred>
      <div className="pt-20 md:pt-32">
        <CtaPanel reason={categoryReason[c.key]} />
      </div>
    </>
  );
}
