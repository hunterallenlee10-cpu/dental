import { CreditCard, HeartPulse, CalendarRange } from "lucide-react";
import { PageHero } from "@/components/templates/PageHero";
import { StepsBand } from "@/components/templates/StepsBand";
import { FaqSection } from "@/components/sections/home/FaqSection";
import { CtaPanel } from "@/components/sections/CtaPanel";
import { Photo } from "@/components/ui/Photo";
import { payment } from "@/content/pages";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const metadata = pageMeta({
  title: "Dental Payment Plans and Financing in Maryland | Aurelle Dental",
  description: "Pay for dental care your way at Aurelle Dental in Maryland: cards, HSA and FSA cards or monthly payments, always after a written estimate. Book a visit.",
  path: routes.payment,
});

const icons = [CreditCard, HeartPulse, CalendarRange];

export default function PaymentPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Payment and financing", path: routes.payment }]}
        eyebrow="Baltimore, Frederick, Leonardtown and Annapolis, MD"
        h1={<>Dental payment and financing <em className="accent">in Maryland</em></>}
        lead={<p>{payment.intro}</p>}
        photo="09"
        photoPos="object-[50%_20%]"
      />
      <section aria-labelledby="ways-title" className="section">
        <div className="wrap">
          <h2 id="ways-title" className="text-h2">Ways <em className="accent">to pay</em></h2>
          <ul className="mt-12 grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-3">
            {payment.methods.map((m, i) => {
              const Icon = icons[i] ?? CreditCard;
              return (
                <li key={m.title} className="bg-paper p-7 md:p-9">
                  <Icon size={24} strokeWidth={1.5} className="text-azure-deep" aria-hidden="true" />
                  <h3 className="mt-5 font-display text-[1.6rem]">{m.title}</h3>
                  <p className="mt-2 text-mute">{m.body}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <section aria-labelledby="est-title" className="section bg-porcelain">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="grid grid-cols-3 items-start gap-3">
            <Photo id="12" sizes="(min-width: 1024px) 15vw, 31vw" className="mt-12 aspect-square h-auto w-full rounded-sm object-cover" />
            <Photo id="13" sizes="(min-width: 1024px) 15vw, 31vw" className="aspect-square h-auto w-full rounded-sm object-cover" />
            <Photo id="16" sizes="(min-width: 1024px) 15vw, 31vw" className="mt-6 aspect-square h-auto w-full rounded-sm object-cover" />
          </div>
          <div>
            <h2 id="est-title" className="text-h2">Your estimate <em className="accent">comes first</em></h2>
            <div className="mt-6 space-y-4 text-lead text-mute">
              {payment.howEstimateWorks.map((p) => <p key={p}>{p}</p>)}
            </div>
          </div>
        </div>
      </section>
      <StepsBand id="monthly-title" tone="paper" title={<>How monthly payments <em className="accent">work</em></>} steps={payment.steps} />
      <FaqSection items={payment.faq} title={<>Payment <em className="accent">questions</em></>} />
      <CtaPanel />
    </>
  );
}
