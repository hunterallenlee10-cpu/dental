import Link from "next/link";
import { Photo } from "@/components/ui/Photo";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { routes } from "@/lib/routes";

export function PaymentSection() {
  return (
    <section aria-labelledby="payment-title" className="section bg-porcelain">
      <div className="wrap grid items-center gap-14 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-20">
        <div className="grid grid-cols-3 items-start gap-3 md:gap-4">
          <div className="parallax-slow mt-16 overflow-hidden rounded-sm md:mt-28">
            <Photo id="12" sizes="(min-width: 1024px) 20vw, 31vw" className="aspect-square h-auto w-full object-cover" />
          </div>
          <div className="parallax-fast overflow-hidden rounded-sm">
            <Photo id="14" sizes="(min-width: 1024px) 20vw, 31vw" className="aspect-[1/2] h-auto w-full object-cover" />
          </div>
          <div className="parallax-slow mt-8 overflow-hidden rounded-sm md:mt-12">
            <Photo id="15" sizes="(min-width: 1024px) 20vw, 31vw" className="aspect-square h-auto w-full object-cover" />
          </div>
        </div>
        <div className="mx-auto max-w-[440px] text-center">
          <SplitHeading id="payment-title" plain="A smile that" accent="says it all." className="text-h2" />
          <p className="mt-6 text-lead">Easy payment, including monthly plans.</p>
          <p className="mt-4 text-mute">
            You get a written estimate before any treatment, and prices are the same at all four offices. Pay by card, with your HSA or FSA, or in monthly payments.
          </p>
          <Link href={routes.payment} className="btn btn-outline mt-8">
            Payment options
          </Link>
        </div>
      </div>
    </section>
  );
}
