import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { routes } from "@/lib/routes";
import { isDemo } from "@/lib/site";

/** No reviews exist. Empty labelled placeholders: no name, no stars, no quote. Hidden entirely in live mode until real ones are added. */
export function ReviewCards({ count = 3 }: { count?: number }) {
  return (
    <ul className="grid gap-4 md:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <li key={i} className="flex min-h-[120px] items-center md:min-h-[200px] justify-center rounded-sm border border-dashed border-ink/25 bg-paper p-8 text-center" data-placeholder>
          <p className="font-display text-[1.375rem] leading-snug text-mute">{isDemo ? "Your Google reviews go here" : ""}</p>
        </li>
      ))}
    </ul>
  );
}

export function ReviewsPlaceholder({ headingId = "reviews-title", showLink = true, tone = "porcelain" }: { headingId?: string; showLink?: boolean; tone?: "porcelain" | "paper" }) {
  return (
    <section aria-labelledby={headingId} className={`section ${tone === "porcelain" ? "bg-porcelain" : ""}`}>
      <div className="wrap">
        <div className="grid gap-6 md:grid-cols-2 md:items-end">
          <h2 id={headingId} className="text-h2">
            What patients <em className="accent">say.</em>
          </h2>
          {showLink ? (
            <Link href={routes.reviews} className="link-arrow md:justify-self-end">
              All reviews <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          ) : null}
        </div>
        <div className="mt-10">
          <ReviewCards />
        </div>
        <p className="mt-5 text-[0.875rem] text-mute">Real reviews appear with the reviewer&apos;s first name, month and year, and a link to Google.</p>
      </div>
    </section>
  );
}
