import { Phone } from "lucide-react";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { BookButton, type VisitReason } from "@/components/ui/BookButton";
import { Photo } from "@/components/ui/Photo";
import { business } from "@/lib/business";
import type { PhotoId } from "@/lib/photos";
import type { LocationSlug } from "@/content/types";

type Props = {
  crumbs: Crumb[];
  h1: React.ReactNode;
  eyebrow?: string;
  lead?: React.ReactNode;
  photo?: PhotoId;
  photoPos?: string;
  photoAlt?: string;
  reason?: VisitReason;
  office?: LocationSlug;
  actions?: "book" | "call-first" | "none";
  bookLabel?: string;
  children?: React.ReactNode;
};

/** Split hero for inner pages: Newsreader h1 on the left, the page's own photo on the right. */
export function PageHero({ crumbs, h1, eyebrow, lead, photo, photoPos = "", photoAlt, reason, office, actions = "book", bookLabel, children }: Props) {
  return (
    <section className="border-b border-line">
      <div className={`wrap grid gap-10 pt-8 pb-14 md:pt-10 md:pb-20 ${photo ? "lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:items-center lg:gap-16" : ""}`}>
        <div>
          <Breadcrumbs items={crumbs} />
          {eyebrow ? <p className="label mt-10 text-mute md:mt-14">{eyebrow}</p> : null}
          <h1 className={`${eyebrow ? "mt-3" : "mt-10 md:mt-14"} text-[clamp(2.75rem,1.9rem+3.6vw,5rem)] leading-[1] font-light tracking-[-0.02em]`}>{h1}</h1>
          {lead ? <div className="mt-6 max-w-[56ch] text-lead text-mute">{lead}</div> : null}
          {actions !== "none" ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {actions === "call-first" ? (
                <>
                  <a href={business.phoneHref} className="btn btn-primary">
                    <Phone size={16} strokeWidth={1.5} aria-hidden="true" /> Call {business.phoneDisplay}
                  </a>
                  <BookButton reason={reason} office={office} className="btn btn-outline" label={bookLabel} />
                </>
              ) : (
                <>
                  <BookButton reason={reason} office={office} label={bookLabel} />
                  <a href={business.phoneHref} className="btn btn-outline">
                    <Phone size={16} strokeWidth={1.5} aria-hidden="true" /> Call {business.phoneDisplay}
                  </a>
                </>
              )}
            </div>
          ) : null}
          {children}
        </div>
        {photo ? (
          <div className="aspect-[4/3] overflow-hidden rounded-sm bg-porcelain lg:aspect-[5/5.4]">
            <Photo id={photo} cover preload sizes="(min-width: 1024px) 45vw, 100vw" alt={photoAlt} className={photoPos} />
          </div>
        ) : null}
      </div>
    </section>
  );
}
