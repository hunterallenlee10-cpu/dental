import { Check } from "lucide-react";
import { PageHero } from "@/components/templates/PageHero";
import { StepsBand } from "@/components/templates/StepsBand";
import { CoverageCheck } from "@/components/sections/CoverageCheck";
import { PriceTable } from "@/components/sections/PriceTable";
import { FaqSection } from "@/components/sections/home/FaqSection";
import { CtaPanel } from "@/components/sections/CtaPanel";
import { DraftTag } from "@/components/ui/DraftTag";
import { pricing } from "@/content/pages";
import { membershipPlan, payment } from "@/lib/business";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const metadata = pageMeta({
  title: "Dental Insurance and Pricing in Maryland | Aurelle Dental",
  description: "How Aurelle Dental prices treatment: a written estimate after your exam, the same prices at four Maryland offices, PPO plans, HSA and FSA and monthly payments.",
  path: routes.pricing,
});

export default function PricingPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Insurance and pricing", path: routes.pricing }]}
        eyebrow="Baltimore, Frederick, Leonardtown and Annapolis, MD"
        h1={<>Dental insurance and pricing <em className="accent">in Maryland</em></>}
        lead={<p>{pricing.intro}</p>}
        photo="16"
        photoPos="object-[50%_30%]"
      />
      <section aria-labelledby="first-title" className="section">
        <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          <h2 id="first-title" className="text-h2">What to expect at <em className="accent">your first visit</em></h2>
          <ul className="divide-y divide-line border-y border-line">
            {pricing.firstVisitList.map((f) => (
              <li key={f.text} className="grid gap-1 py-5 sm:grid-cols-[160px_1fr] sm:gap-6">
                <span className="label pt-1 text-mute">{f.label}</span>
                <span className="flex gap-3 text-lead"><Check size={20} strokeWidth={1.5} className="mt-1.5 shrink-0 text-azure-deep" aria-hidden="true" />{f.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <StepsBand id="estimate-title" title={<>How we prepare <em className="accent">your estimate</em></>} steps={pricing.estimateSteps} />
      <section id="coverage" aria-labelledby="coverage-title" className="section bg-ice">
        <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-16">
          <div>
            <p className="label text-mute">Coverage Check</p>
            <h2 id="coverage-title" className="mt-3 text-h2">Will insurance <em className="accent">cover it?</em></h2>
            <p className="mt-5 max-w-[40ch] text-mute">A quick guide to how dental plans usually treat what you need. Your exact numbers come in writing after your exam.</p>
          </div>
          <CoverageCheck />
        </div>
      </section>
      <section aria-labelledby="ins-title" className="section">
        <div className="wrap grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 id="ins-title" className="text-h2"><em className="accent">{pricing.insuranceHeading}</em></h2>
            <p className="mt-5 text-lead">{pricing.insuranceBody}</p>
            <div className="mt-6 rounded-sm border border-dashed border-ink/25 p-6" data-placeholder>
              {payment.acceptedPlans.length ? (
                <ul>{payment.acceptedPlans.map((p) => <li key={p}>{p}</li>)}</ul>
              ) : (
                <DraftTag>{pricing.insurancePlaceholder}</DraftTag>
              )}
            </div>
          </div>
          <div>
            <h2 className="font-display text-h3">{pricing.paymentHeading}</h2>
            <p className="mt-4 text-mute">{pricing.paymentBody}</p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-3">
              {payment.methods.map((m) => (
                <li key={m} className="rounded-sm bg-porcelain px-4 py-4">{m}</li>
              ))}
            </ul>
            {membershipPlan.enabled ? (
              <div className="mt-8 rounded-sm border border-line p-6">
                <h3 className="font-display text-[1.5rem]">{membershipPlan.name}</h3>
                <p className="mt-2">{membershipPlan.price}</p>
                <ul className="mt-3 list-disc pl-5">{membershipPlan.inclusions.map((i) => <li key={i}>{i}</li>)}</ul>
              </div>
            ) : null}
            <div className="mt-8"><PriceTable /></div>
          </div>
        </div>
      </section>
      <FaqSection items={pricing.faq} title={<>Pricing <em className="accent">questions</em></>} />
      <CtaPanel />
    </>
  );
}
