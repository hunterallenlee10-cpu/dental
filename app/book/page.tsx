import { PageHero } from "@/components/templates/PageHero";
import { StepsBand } from "@/components/templates/StepsBand";
import { OfficeList } from "@/components/templates/OfficeList";
import { CtaPanel } from "@/components/sections/CtaPanel";
import { InlineVisitRequest } from "@/components/visit/InlineVisitRequest";
import { book } from "@/content/pages";
import { business } from "@/lib/business";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const metadata = pageMeta({
  title: "Book a Dental Visit in Maryland | Aurelle Dental",
  description: "Book a visit at Aurelle Dental in Baltimore, Frederick, Leonardtown or Annapolis, MD. Three short steps, a call back during office hours, written estimate first.",
  path: routes.book,
});

export default function BookPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Book a visit", path: routes.book }]}
        h1={<>Book a dental visit <em className="accent">in Maryland</em></>}
        lead={<p>{book.intro}</p>}
        actions="none"
      >
        <a href={business.phoneHref} className="mt-8 inline-block font-display text-[clamp(2rem,1.6rem+1.6vw,3rem)] leading-none text-azure-deep hover:text-navy">
          {business.phoneDisplay}
        </a>
      </PageHero>
      <StepsBand id="book-steps" title={<>How booking <em className="accent">works</em></>} steps={book.steps} />
      <section aria-labelledby="request-title" className="section">
        <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,6fr)] lg:gap-20">
          <div>
            <h2 id="request-title" className="text-h2">Send a <em className="accent">visit request</em></h2>
            <p className="mt-5 max-w-[40ch] text-mute">Three short steps. We call you back during office hours to pick a time together.</p>
            <p className="mt-4 max-w-[40ch] text-mute">{book.formNote}</p>
          </div>
          <div>
            <InlineVisitRequest />
            <noscript>
              <p className="mt-4">Call {business.phoneDisplay} or email {business.email} to book.</p>
            </noscript>
          </div>
        </div>
      </section>
      <OfficeList />
      <CtaPanel />
    </>
  );
}
