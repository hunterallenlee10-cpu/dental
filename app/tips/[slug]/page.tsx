import Link from "@/components/ui/Link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BookButton } from "@/components/ui/BookButton";
import { Photo } from "@/components/ui/Photo";
import { TipCard, tipPhoto } from "@/components/templates/Cards";
import { JsonLd } from "@/components/seo/JsonLd";
import { tips } from "@/content/tips";
import { serviceBySlug, describe, fitTitle } from "@/content/services";
import { business } from "@/lib/business";
import { photos } from "@/lib/photos";
import { articleSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const dynamicParams = false;
export function generateStaticParams() {
  return tips.map((t) => ({ slug: t.slug }));
}

const titleFor = (title: string) =>
  fitTitle([`${title} | Aurelle Dental`, `${title} | Aurelle Dental, MD`, `${title} | Dentist in Baltimore, MD`, `${title} | Aurelle`, title]);

export async function generateMetadata({ params }: PageProps<"/tips/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const t = tips.find((x) => x.slug === slug);
  if (!t) return {};
  return pageMeta({ title: titleFor(t.title), description: describe(t.summary, " From a Maryland dental practice."), path: routes.tip(t.slug), type: "article" });
}

export default async function TipPage({ params }: PageProps<"/tips/[slug]">) {
  const { slug } = await params;
  const t = tips.find((x) => x.slug === slug);
  if (!t) notFound();
  const more = tips.filter((x) => x.slug !== t.slug && x.category === t.category).concat(tips.filter((x) => x.category !== t.category)).slice(0, 3);
  const photo = tipPhoto(t);
  return (
    <>
      <JsonLd data={articleSchema({ title: t.title, description: t.summary, path: routes.tip(t.slug), image: photos[photo].src })} />
      <article>
        <header className="wrap pt-8 md:pt-10">
          <Breadcrumbs items={[{ name: "Tips", path: routes.tips }, { name: t.title, path: routes.tip(t.slug) }]} />
          <div className="mx-auto mt-10 max-w-[820px] md:mt-14">
            <p className="label text-mute">{t.category} · {t.readMinutes} min read</p>
            <h1 className="mt-4 text-[clamp(2.5rem,1.8rem+3vw,4.25rem)] leading-[1.02] font-light tracking-[-0.02em]">{t.title}</h1>
            <p className="mt-6 text-lead text-mute">{t.lead}</p>
            <p className="mt-3 text-[0.9375rem] text-mute">From the dentists at Aurelle Dental in Baltimore, Frederick, Leonardtown and Annapolis, Maryland.</p>
          </div>
          <div className="mx-auto mt-12 aspect-[16/8] max-w-[1100px] overflow-hidden rounded-sm bg-porcelain">
            <Photo id={photo} cover preload sizes="(min-width: 1140px) 1100px, 100vw" />
          </div>
        </header>
        <div className="wrap">
          <div className="mx-auto grid max-w-[1100px] gap-14 py-16 md:py-24 lg:grid-cols-[minmax(0,1fr)_280px]">
            <div className="max-w-[66ch] space-y-12 text-[1.0625rem]">
              {t.sections.map((s) => (
                <section key={s.heading}>
                  <h2 className="font-display text-[clamp(1.75rem,1.5rem+1vw,2.25rem)] leading-tight">{s.heading}</h2>
                  <div className="mt-4 space-y-4">
                    {s.paragraphs.map((p) => <p key={p}>{p}</p>)}
                  </div>
                  {s.bullets?.length ? (
                    <ul className="mt-4 space-y-3">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-azure" aria-hidden="true" />{b}</li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
              <p className="border-t border-line pt-6 text-[0.9375rem] text-mute">{t.disclaimer}</p>
            </div>
            <aside aria-labelledby="rel-services" className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-sm bg-ice p-6">
                <h2 id="rel-services" className="font-display text-[1.5rem]">Related services</h2>
                <ul className="mt-4 space-y-2">
                  {t.relatedServices.map((r) => (
                    <li key={r}><Link href={routes.service(r)} className="text-azure-deep underline-offset-4 hover:underline">{serviceBySlug(r).name}</Link></li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </article>
      <section aria-labelledby="q-title" className="on-ink bg-ink text-paper">
        <div className="wrap flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between md:py-20">
          <div>
            <h2 id="q-title" className="text-h2">Have a <em className="accent">question?</em></h2>
            <p className="mt-3 text-mist">Call us or book a visit, and your dentist will advise you in person.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <BookButton className="btn btn-paper" />
            <a href={business.phoneHref} className="btn btn-ghost-light"><Phone size={16} strokeWidth={1.5} aria-hidden="true" /> Call {business.phoneDisplay}</a>
          </div>
        </div>
      </section>
      <section aria-labelledby="more-title" className="section">
        <div className="wrap">
          <h2 id="more-title" className="text-h2">More <em className="accent">tips</em></h2>
          <ul className="mt-12 grid gap-10 md:grid-cols-3 md:gap-6">
            {more.map((m) => <li key={m.slug}><TipCard tip={m} /></li>)}
          </ul>
        </div>
      </section>
    </>
  );
}
