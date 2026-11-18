import { Phone } from "lucide-react";
import { BookButton, type VisitReason } from "@/components/ui/BookButton";
import { business } from "@/lib/business";

/** The rounded Ice CTA panel at the end of every page. */
export function CtaPanel({ reason, office }: { reason?: VisitReason; office?: import("@/content/types").LocationSlug }) {
  return (
    <section aria-labelledby="cta-title" className="pb-20 md:pb-32">
      <div className="wrap">
        <div className="rounded-[var(--radius-panel)] bg-ice px-6 py-14 md:px-16 md:py-20">
          <div className="text-center">
            <h2 id="cta-title" className="text-h2">
              Ready for a <em className="accent">carefree</em> smile?
            </h2>
            <p className="mx-auto mt-5 max-w-[44ch] text-lead text-mute">Choose what you need. We can call you, or you can call us.</p>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-0 md:divide-x md:divide-line">
            <div className="flex flex-col items-center text-center md:px-10">
              <h3 className="font-display text-[1.75rem]">Dentistry</h3>
              <p className="mt-2 text-mute">Exams, treatment, crowns and implants.</p>
              <div className="mt-auto flex flex-wrap justify-center gap-2 pt-6">
                <BookButton reason={reason} office={office} />
                <a href={business.phoneHref} className="btn btn-outline">
                  <Phone size={16} strokeWidth={1.5} aria-hidden="true" /> {business.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center border-t border-line pt-10 text-center md:border-t-0 md:px-10 md:pt-0">
              <h3 className="font-display text-[1.75rem]">Orthodontics and clear aligners</h3>
              <p className="mt-2 text-mute">A straight smile at any age, with braces almost no one notices.</p>
              <div className="mt-auto flex flex-wrap justify-center gap-2 pt-6">
                <BookButton reason="ortho" office={office} label="Book a consultation" />
                <a href={business.phoneHref} className="btn btn-outline">
                  <Phone size={16} strokeWidth={1.5} aria-hidden="true" /> {business.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
          <p className="mt-12 text-center text-mute">{business.hoursShort}</p>
        </div>
      </div>
    </section>
  );
}
