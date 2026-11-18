import { PageHero } from "@/components/templates/PageHero";
import { ReviewCards } from "@/components/sections/ReviewsPlaceholder";
import { CtaPanel } from "@/components/sections/CtaPanel";
import { DraftTag } from "@/components/ui/DraftTag";
import { reviewsPage } from "@/content/pages";
import { offices } from "@/lib/business";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const metadata = pageMeta({
  title: "Patient Reviews | Dentist in Baltimore and Frederick, MD | Aurelle",
  description: "Patient reviews of Aurelle Dental in Baltimore, Frederick, Leonardtown and Annapolis, MD, with a link to each office's Google profile. Book a visit.",
  path: routes.reviews,
});

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Reviews", path: routes.reviews }]}
        eyebrow="Baltimore, Frederick, Leonardtown and Annapolis, MD"
        h1={<>Patient <em className="accent">reviews</em></>}
        lead={<p>{reviewsPage.intro} Real reviews appear with the reviewer&apos;s first name, month and year.</p>}
        photo="11"
        photoPos="object-[50%_30%]"
      />
      <section aria-labelledby="ratings-title" className="section">
        <div className="wrap">
          <h2 id="ratings-title" className="text-h2">Our offices <em className="accent">on Google</em></h2>
          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {offices.map((o) => (
              <li key={o.slug} className="rounded-sm border border-dashed border-ink/25 p-6" data-placeholder>
                <h3 className="font-display text-[1.5rem]">{o.town}</h3>
                <DraftTag className="mt-4">Your {o.town} Google rating goes here</DraftTag>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section aria-labelledby="list-title" className="section bg-porcelain">
        <div className="wrap">
          <h2 id="list-title" className="text-h2">What patients <em className="accent">say</em></h2>
          <div className="mt-12 space-y-4">
            <ReviewCards />
            <ReviewCards />
          </div>
        </div>
      </section>
      <div className="pt-20 md:pt-32"><CtaPanel /></div>
    </>
  );
}
