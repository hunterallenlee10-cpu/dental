import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BookButton } from "@/components/ui/BookButton";
import { DraftTag } from "@/components/ui/DraftTag";
import { PlaceholderPortrait } from "@/components/team/PlaceholderPortrait";
import { TeamCard } from "@/components/team/TeamRail";
import { CtaPanel } from "@/components/sections/CtaPanel";
import { JsonLd } from "@/components/seo/JsonLd";
import { team } from "@/content/team";
import { serviceBySlug } from "@/content/services";
import { fitTitle } from "@/content/services";
import { business } from "@/lib/business";
import { personSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const dynamicParams = false;
export function generateStaticParams() {
  return team.map((m) => ({ member: m.slug }));
}

export async function generateMetadata({ params }: PageProps<"/team/[member]">): Promise<Metadata> {
  const { member } = await params;
  const m = team.find((x) => x.slug === member);
  if (!m) return {};
  return pageMeta({
    title: fitTitle([
      `${m.name}, ${m.role} in Maryland | Aurelle Dental`,
      `${m.name}, ${m.role} | Aurelle Dental, MD`,
      `${m.name}, ${m.credentials} | Dentist in Baltimore, MD | Aurelle`,
      `${m.name} | ${m.role} | Aurelle Dental`,
      `${m.name} | Aurelle Dental in Maryland`,
    ]),
    description: `${m.bio} Book a visit with the Aurelle Dental team in Baltimore, Frederick, Leonardtown or Annapolis, MD.`.slice(0, 160),
    path: routes.member(m.slug),
  });
}

export default async function MemberPage({ params }: PageProps<"/team/[member]">) {
  const { member } = await params;
  const m = team.find((x) => x.slug === member);
  if (!m) notFound();
  const idx = team.indexOf(m);
  const others = [1, 2, 3].map((k) => team[(idx + k) % team.length]);
  const reason = m.group === "Orthodontics" ? "ortho" : undefined;
  return (
    <>
      <JsonLd data={personSchema({ name: m.name, jobTitle: m.role, path: routes.member(m.slug) })} />
      <section className="border-b border-line">
        <div className="wrap pt-8 pb-16 md:pt-10 md:pb-24">
          <Breadcrumbs items={[{ name: "Team", path: routes.team }, { name: m.name, path: routes.member(m.slug) }]} />
          <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16">
            <div className="max-w-[460px]">
              <PlaceholderPortrait name={m.name} size="large" />
            </div>
            <div>
              <p className="label text-mute">{m.group} at Aurelle Dental, Maryland</p>
              <h1 className="mt-3 text-[clamp(2.75rem,1.9rem+3.6vw,5rem)] leading-[1] font-light tracking-[-0.02em]">
                {m.name}<span className="text-mute">, </span><em className="accent">{m.credentials}</em>
              </h1>
              <p className="mt-3 text-lead">{m.role}</p>
              <p className="mt-6 max-w-[56ch] text-lead text-mute">{m.bio} {m.name.startsWith("Dr.") ? `Dr. ${m.name.split(" ").at(-1)}` : m.name.split(" ")[0]} is part of the Aurelle Dental team serving Baltimore, Frederick, Leonardtown and Annapolis, MD.</p>
              <dl className="mt-8 divide-y divide-line border-y border-line">
                <div className="flex flex-wrap items-center justify-between gap-3 py-4">
                  <dt className="font-medium">Education and credentials</dt>
                  <dd><DraftTag>Supplied by the practice</DraftTag></dd>
                </div>
                <div className="py-4">
                  <dt className="font-medium">Areas of work</dt>
                  <dd className="mt-3 flex flex-wrap gap-2">
                    {m.areas.map((a) => (
                      <Link key={a} href={routes.service(a)} className="inline-flex min-h-10 items-center rounded-full border border-line px-4 text-[0.9375rem] hover:border-ink hover:bg-ice">
                        {serviceBySlug(a).name}
                      </Link>
                    ))}
                  </dd>
                </div>
              </dl>
              <p className="mt-6 text-mute">When you book, we tell you who works at your office.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <BookButton reason={reason} label={reason ? "Book a consultation" : undefined} />
                <a href={business.phoneHref} className="btn btn-outline"><Phone size={16} strokeWidth={1.5} aria-hidden="true" /> Call {business.phoneDisplay}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section aria-labelledby="rest-title" className="section">
        <div className="wrap">
          <h2 id="rest-title" className="text-h2">Meet the rest of <em className="accent">the team</em></h2>
          <ul className="mt-12 grid gap-8 sm:grid-cols-3">
            {others.map((o) => (
              <li key={o.slug}><TeamCard m={o} /></li>
            ))}
          </ul>
        </div>
      </section>
      <CtaPanel reason={reason} />
    </>
  );
}
