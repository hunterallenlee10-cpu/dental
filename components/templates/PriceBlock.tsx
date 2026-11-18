import Link from "@/components/ui/Link";
import { ArrowRight, CreditCard, FileCheck, MapPin } from "lucide-react";
import { routes } from "@/lib/routes";
import type { CoverageNeed } from "@/lib/coverage";

/** "Cost and payment" on every service page: the written estimate promise, same prices, payment options. */
export function PriceBlock({ name, need }: { name: string; need: CoverageNeed }) {
  return (
    <section aria-labelledby="cost-title" className="section bg-ice">
      <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <div>
          <h2 id="cost-title" className="text-h2">Cost and <em className="accent">payment</em></h2>
          <p className="mt-5 max-w-[42ch] text-lead text-mute">
            The cost of {name.toLowerCase()} depends on your teeth and the plan you choose, so you get it in writing after your exam.
          </p>
        </div>
        <div>
          <ul className="grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-3">
            {[
              { icon: FileCheck, t: "Written estimate first", b: "You get a written treatment estimate before any treatment starts. We do not start without it." },
              { icon: MapPin, t: "Same prices everywhere", b: "Prices are the same at all four offices: Baltimore, Frederick, Leonardtown and Annapolis." },
              { icon: CreditCard, t: "Ways to pay", b: "Cards, HSA and FSA cards, or monthly payments through our financing partner." }, // DRAFT: lender
            ].map(({ icon: Icon, t, b }) => (
              <li key={t} className="bg-paper p-6">
                <Icon size={22} strokeWidth={1.5} className="text-azure-deep" aria-hidden="true" />
                <h3 className="mt-4 font-display text-[1.3rem] leading-tight">{t}</h3>
                <p className="mt-2 text-[0.9375rem] text-mute">{b}</p>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3">
            <Link href={`${routes.pricing}?need=${need}#coverage`} className="link-arrow">
              Will insurance cover it? <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
            </Link>
            <Link href={routes.pricing} className="link-arrow">
              Read about insurance and pricing <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
