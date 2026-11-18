import { PageHero } from "@/components/templates/PageHero";
import { TipsFilter } from "@/components/sections/TipsFilter";
import { tipPhoto } from "@/components/templates/Cards";
import { CtaPanel } from "@/components/sections/CtaPanel";
import { Photo } from "@/components/ui/Photo";
import { tips, tipsHubIntro } from "@/content/tips";
import type { TipCategory } from "@/content/types";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const metadata = pageMeta({
  title: "Dental Tips from a Dentist in Baltimore, MD | Aurelle Dental",
  description: "Plain-spoken dental tips from Aurelle Dental in Maryland: implants or bridges, whitening or veneers, toothache, braces for adults, wisdom teeth and x-rays.",
  path: routes.tips,
});

const cats: TipCategory[] = ["Prevention", "Cosmetic", "Implants and restorative", "Orthodontics", "Oral surgery", "Imaging"];

export default function TipsHub() {
  const photos = Object.fromEntries(
    tips.map((t) => [t.slug, <Photo key={t.slug} id={tipPhoto(t)} cover sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw" className="transition-transform duration-700 group-hover:scale-[1.03]" />]),
  );
  return (
    <>
      <PageHero
        crumbs={[{ name: "Tips", path: routes.tips }]}
        eyebrow="From our dentists in Baltimore, Frederick, Leonardtown and Annapolis"
        h1={<>Dental tips <em className="accent">for healthy teeth</em></>}
        lead={<p>{tipsHubIntro}</p>}
        photo="08"
        photoPos="object-[50%_30%]"
      />
      <section aria-label="Articles" className="section">
        <div className="wrap">
          <TipsFilter tips={tips} cats={cats} photos={photos} />
        </div>
      </section>
      <CtaPanel />
    </>
  );
}
