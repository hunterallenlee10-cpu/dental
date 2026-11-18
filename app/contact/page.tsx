import { CalendarCheck, Mail, MessageSquare, Phone } from "lucide-react";
import { PageHero } from "@/components/templates/PageHero";
import { OfficeList } from "@/components/templates/OfficeList";
import { CtaPanel } from "@/components/sections/CtaPanel";
import { MapFacade } from "@/components/sections/MapFacade";
import { InlineVisitRequest } from "@/components/visit/InlineVisitRequest";
import { BookButton } from "@/components/ui/BookButton";
import { contact } from "@/content/pages";
import { business } from "@/lib/business";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const metadata = pageMeta({
  title: "Contact Aurelle Dental | Dentist in Baltimore and Frederick, MD",
  description: "Call (410) 555-0142, text or email Aurelle Dental. Four Maryland offices in Baltimore, Frederick, Leonardtown and Annapolis, open Mon to Fri, 7 AM to 8 PM.",
  path: routes.contact,
});

const tileBase = "group flex h-full flex-col justify-between gap-8 rounded-sm border p-6 transition-colors md:p-8";
const tileCls = `${tileBase} border-line bg-paper hover:border-ink`;

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Contact", path: routes.contact }]}
        h1={<>Contact our <em className="accent">Maryland</em> dental offices</>}
        lead={<p>{contact.intro} Baltimore, Frederick, Leonardtown and Annapolis.</p>}
        actions="none"
      />
      <section aria-labelledby="ways-title" className="section pb-0">
        <div className="wrap">
          <h2 id="ways-title" className="sr-only">Ways to reach us</h2>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <li>
              <a href={business.phoneHref} className={tileCls}>
                <Phone size={24} strokeWidth={1.5} className="text-azure-deep" aria-hidden="true" />
                <span><span className="label block text-mute">Call</span><span className="mt-1 block font-display text-[1.75rem]">{business.phoneDisplay}</span></span>
              </a>
            </li>
            <li>
              <a href={business.smsHref} className={tileCls}>
                <MessageSquare size={24} strokeWidth={1.5} className="text-azure-deep" aria-hidden="true" />
                <span><span className="label block text-mute">Text</span><span className="mt-1 block font-display text-[1.75rem]">{business.phoneDisplay}</span></span>
              </a>
            </li>
            <li>
              <a href={business.emailHref} className={tileCls}>
                <Mail size={24} strokeWidth={1.5} className="text-azure-deep" aria-hidden="true" />
                <span><span className="label block text-mute">Email</span><span className="mt-1 block font-display text-[1.375rem] leading-tight">{business.email.split("@")[0]}<wbr />@{business.email.split("@")[1]}</span></span>
              </a>
            </li>
            <li>
              <BookButton className={`${tileBase} border-azure-deep bg-azure-deep text-paper hover:border-navy hover:bg-navy`}>
                <CalendarCheck size={24} strokeWidth={1.5} aria-hidden="true" />
                <span><span className="label block text-paper/80">Online</span><span className="mt-1 block font-display text-[1.75rem]">Book a visit</span></span>
              </BookButton>
            </li>
          </ul>
          <p className="mt-6 text-mute">{business.hoursLong}</p>
        </div>
      </section>
      <OfficeList />
      <section aria-labelledby="map-title" className="pb-20 md:pb-28">
        <div className="wrap">
          <h2 id="map-title" className="sr-only">Map</h2>
          <MapFacade />
        </div>
      </section>
      <section aria-labelledby="request-title" className="section bg-porcelain">
        <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,6fr)] lg:gap-20">
          <div>
            <h2 id="request-title" className="text-h2">Send a <em className="accent">visit request</em></h2>
            <p className="mt-5 max-w-[40ch] text-mute">{contact.questionNote}</p>
            <p className="mt-4 max-w-[40ch] text-mute">Nothing is sent until you tap Text or Email.</p>
          </div>
          <InlineVisitRequest />
        </div>
      </section>
      <div className="pt-20 md:pt-32">
        <CtaPanel />
      </div>
    </>
  );
}
