import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/templates/PageHero";
import { ServiceCard } from "@/components/templates/Cards";
import { categoryPhoto } from "@/components/templates/CategoryTemplate";
import { CoverageCheck } from "@/components/sections/CoverageCheck";
import { CtaPanel } from "@/components/sections/CtaPanel";
import { Photo } from "@/components/ui/Photo";
import { categories, servicesHubIntro } from "@/content/categories";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const metadata = pageMeta({
  title: "Dental Services in Baltimore and Frederick, MD | Aurelle Dental",
  description: "Checkups, fillings, implants, braces, veneers and oral surgery at four Maryland offices. Written estimate before treatment. Open until 8 PM. Book a visit.",
  path: routes.services,
});

export default function ServicesHub() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Services", path: routes.services }]}
        eyebrow="Baltimore, Frederick, Leonardtown and Annapolis, MD"
        h1={<>Dental services <em className="accent">in Maryland</em></>}
        lead={<p>{servicesHubIntro}</p>}
        photo="30"
        photoPos="object-[45%_50%]"
      />
      {categories.map((c, i) => (
        <section key={c.key} aria-labelledby={`cat-${c.key}`} className={`section ${i % 2 ? "bg-porcelain" : ""}`}>
          <div className="wrap grid gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
            <div>
              <div className="aspect-[4/3] overflow-hidden rounded-sm bg-porcelain">
                <Photo id={categoryPhoto[c.key].photo} cover sizes="(min-width: 1024px) 30vw, 100vw" className={categoryPhoto[c.key].pos} />
              </div>
              <h2 id={`cat-${c.key}`} className="mt-6 font-display text-[clamp(2rem,1.6rem+1.6vw,3rem)] leading-[1.05]">
                {c.h1.plain} <em className="accent">{c.h1.accent}</em>
              </h2>
              <p className="mt-3 text-mute">{c.intro.split(/(?<=\.)\s/)[0]}</p>
              <Link href={routes.category(c.key)} className="link-arrow mt-4">
                Explore {c.name.toLowerCase()} <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
              </Link>
            </div>
            <ul className="grid content-start gap-3 sm:grid-cols-2">
              {c.services.map((s) => (
                <li key={s}>
                  <ServiceCard slug={s} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
      <section id="coverage" aria-labelledby="coverage-title" className="section bg-ice">
        <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-16">
          <div>
            <h2 id="coverage-title" className="text-h2">Will insurance <em className="accent">cover it?</em></h2>
            <p className="mt-5 max-w-[40ch] text-mute">A quick guide to how dental plans usually treat what you need. Your exact numbers come in writing after your exam.</p>
          </div>
          <CoverageCheck compact />
        </div>
      </section>
      <div className="pt-20 md:pt-32">
        <CtaPanel />
      </div>
    </>
  );
}
