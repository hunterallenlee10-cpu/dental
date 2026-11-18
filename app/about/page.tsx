import { PageHero } from "@/components/templates/PageHero";
import { StepsBand } from "@/components/templates/StepsBand";
import { OfficeList } from "@/components/templates/OfficeList";
import { TeamRail } from "@/components/team/TeamRail";
import { CtaPanel } from "@/components/sections/CtaPanel";
import { Photo } from "@/components/ui/Photo";
import { Sparkle } from "@/components/brand/Sparkle";
import { about } from "@/content/pages";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";
import type { PhotoId } from "@/lib/photos";

export const metadata = pageMeta({
  title: "About Aurelle Dental | Dentist in Baltimore and Frederick, MD",
  description: "Aurelle Dental is a private practice with four Maryland offices. Specialists under one roof, a written estimate before treatment, open until 8 PM.",
  path: routes.about,
});

const equipPhotos: PhotoId[] = ["19", "28", "29"];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "About", path: routes.about }]}
        eyebrow="About us"
        h1={<>A dental practice <em className="accent">in four Maryland towns</em></>}
        lead={<p>{about.lead}</p>}
        photo="10"
        photoPos="object-[50%_30%]"
      />
      <section aria-labelledby="story-title" className="section">
        <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          <div>
            <h2 id="story-title" className="text-h2">Our <em className="accent">story</em></h2>
          </div>
          <div className="space-y-5 text-lead">
            {about.story.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <div className="aspect-[3/2] overflow-hidden rounded-sm bg-porcelain">
              <Photo id="17" cover sizes="(min-width: 1024px) 55vw, 100vw" />
            </div>
          </div>
        </div>
      </section>
      <section aria-labelledby="values-title" className="section bg-porcelain">
        <div className="wrap">
          <h2 id="values-title" className="text-h2">What <em className="accent">matters to us</em></h2>
          <ul className="mt-12 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {about.values.map((v) => (
              <li key={v.title} className="bg-paper p-7 md:p-9">
                <Sparkle size={12} className="text-cyan" />
                <h3 className="mt-4 font-display text-[1.6rem] leading-tight">{v.title}</h3>
                <p className="mt-2 text-mute">{v.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section aria-labelledby="equip-title" className="section">
        <div className="wrap">
          <h2 id="equip-title" className="text-h2">Equipment for <em className="accent">precise work</em></h2>
          <ul className="mt-12 grid gap-8 md:grid-cols-3">
            {about.equipment.map((e, i) => (
              <li key={e.title}>
                <div className="aspect-[4/3] overflow-hidden rounded-sm bg-porcelain">
                  <Photo id={equipPhotos[i]} cover sizes="(min-width: 768px) 30vw, 100vw" />
                </div>
                <h3 className="mt-5 font-display text-[1.5rem] leading-tight">{e.title}</h3>
                <p className="mt-2 text-mute">{e.body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[0.875rem] text-mute">{about.equipmentCaption}</p>
        </div>
      </section>
      <StepsBand id="first-title" tone="ink" title={<>What a first visit <em className="accent">looks like</em></>} steps={about.firstVisitSteps} />
      <TeamRail headingId="about-team" title={<>The people behind <em className="accent">your smile</em></>} sub={about.teamNote} />
      <OfficeList title={<>Four <em className="accent">offices</em></>} />
      <CtaPanel />
    </>
  );
}
