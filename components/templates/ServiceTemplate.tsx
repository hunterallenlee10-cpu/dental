import { Check, Info } from "lucide-react";
import { PageHero } from "./PageHero";
import { StepsBand } from "./StepsBand";
import { PriceBlock } from "./PriceBlock";
import { RelatedTips, ServiceCard } from "./Cards";
import { VeneersFeature } from "./VeneersFeature";
import { FaqSection } from "@/components/sections/home/FaqSection";
import { ReviewsPlaceholder } from "@/components/sections/ReviewsPlaceholder";
import { CtaPanel } from "@/components/sections/CtaPanel";
import { Photo } from "@/components/ui/Photo";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/schema";
import { routes } from "@/lib/routes";
import { categories } from "@/content/categories";
import { serviceMeta, visitReasonFor } from "@/content/services";
import type { Service } from "@/content/types";

export function ServiceTemplate({ s, description }: { s: Service; description: string }) {
  const meta = serviceMeta[s.slug];
  const cat = categories.find((c) => c.key === meta.category)!;
  const reason = visitReasonFor(s.slug);
  const lower = s.name.charAt(0).toLowerCase() + s.name.slice(1);
  const nameForWhere = /^[A-Z0-9]{2}|^Invisalign|^All-on/.test(s.name) ? s.name : lower;

  return (
    <>
      <JsonLd data={serviceSchema({ name: s.name, description, path: routes.service(s.slug) })} />
      <PageHero
        crumbs={[
          { name: "Services", path: routes.services },
          { name: cat.name, path: routes.category(cat.key) },
          { name: s.name, path: routes.service(s.slug) },
        ]}
        eyebrow={cat.name}
        h1={
          <>
            {s.h1.plain} <em className="accent">{s.h1.accent}</em>
          </>
        }
        lead={
          <p>
            {s.lead} <span className="text-ink">We offer {nameForWhere} at our four Maryland offices in Baltimore, Frederick, Leonardtown and Annapolis.</span>
          </p>
        }
        photo={meta.photo}
        photoPos={meta.pos}
        reason={reason}
        bookLabel={meta.category === "orthodontics" ? "Book a consultation" : undefined}
      />

      <section aria-labelledby="short-title" className="section">
        <div className="wrap grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 id="short-title" className="text-h2">In <em className="accent">short</em></h2>
            <div className="mt-8 space-y-4 text-lead">
              {s.inShort.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          {s.whoFor.length ? (
            <div>
              <h2 className="font-display text-h3">Who it is for</h2>
              <ul className="mt-6 divide-y divide-line border-y border-line">
                {s.whoFor.map((w) => (
                  <li key={w} className="flex gap-4 py-4">
                    <Check size={20} strokeWidth={1.5} className="mt-1 shrink-0 text-azure-deep" aria-hidden="true" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
              {s.whatToKnow.length ? (
                <aside aria-labelledby="know-title" className="mt-10 rounded-sm bg-ice p-6 md:p-8">
                  <h3 id="know-title" className="flex items-center gap-3 font-display text-[1.5rem]">
                    <Info size={20} strokeWidth={1.5} className="text-azure-deep" aria-hidden="true" /> What to know
                  </h3>
                  <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-azure-deep">
                    {s.whatToKnow.map((w) => (
                      <li key={w}>{w}</li>
                    ))}
                  </ul>
                </aside>
              ) : null}
            </div>
          ) : null}
        </div>
      </section>

      <StepsBand id="how-title" title={<>How treatment <em className="accent">works</em></>} steps={s.steps} />

      {s.after.length || s.gains.length ? (
        <section aria-labelledby={s.after.length ? "after-title" : "gain-title"} className="section">
          <div className="wrap grid gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:items-center lg:gap-20">
            {meta.photo2 ? (
              <div className="order-last aspect-[4/3] overflow-hidden rounded-sm bg-porcelain lg:order-first">
                <Photo id={meta.photo2} cover sizes="(min-width: 1024px) 40vw, 100vw" />
              </div>
            ) : (
              <div className="hidden lg:block" />
            )}
            <div className="space-y-12">
              {s.after.length ? (
                <div>
                  <h2 id="after-title" className="text-h2">After <em className="accent">treatment</em></h2>
                  <ul className="mt-6 space-y-3">
                    {s.after.map((a) => (
                      <li key={a} className="flex gap-4">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-azure" aria-hidden="true" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {s.gains.length ? (
                <div>
                  <h2 id="gain-title" className={s.after.length ? "font-display text-h3" : "text-h2"}>
                    What you can <em className="accent">gain</em>
                  </h2>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {s.gains.map((g) => (
                      <li key={g} className="rounded-sm border border-line p-5">{g}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      {s.slug === "porcelain-veneers" ? <VeneersFeature /> : null}

      <PriceBlock name={s.name} need={meta.need} />

      {s.faq.length ? <FaqSection items={s.faq} title={<>Questions about <em className="accent">{nameForWhere}</em></>} /> : null}

      {s.related.length ? (
        <section aria-labelledby="related-title" className="section bg-porcelain">
          <div className="wrap">
            <h2 id="related-title" className="text-h2">Related <em className="accent">services</em></h2>
            <ul className="mt-12 grid gap-3 md:grid-cols-3">
              {s.related.slice(0, 3).map((r) => (
                <li key={r}>
                  <ServiceCard slug={r} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <RelatedTips slugs={s.relatedTips} />
      <ReviewsPlaceholder tone="porcelain" />
      <div className="pt-20 md:pt-32">
        <CtaPanel reason={reason} />
      </div>
    </>
  );
}
