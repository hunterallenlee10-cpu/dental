import { PageHero } from "@/components/templates/PageHero";
import { TeamCard } from "@/components/team/TeamRail";
import { CtaPanel } from "@/components/sections/CtaPanel";
import { team, teamHubIntro } from "@/content/team";
import type { TeamMember } from "@/content/types";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const metadata = pageMeta({
  title: "Our Dentists in Baltimore and Frederick, MD | Aurelle Dental",
  description: "Meet the Aurelle Dental team: implant dentists, prosthodontists, orthodontists, a periodontist, general dentists and hygienists across four Maryland offices.",
  path: routes.team,
});

const order: TeamMember["group"][] = ["General dentistry", "Implant dentistry", "Prosthodontics", "Orthodontics", "Periodontics", "Dental hygiene"];

export default function TeamHub() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Team", path: routes.team }]}
        eyebrow="Baltimore, Frederick, Leonardtown and Annapolis, MD"
        h1={<>Our dental team <em className="accent">in Maryland</em></>}
        lead={<p>{teamHubIntro} When you book, we tell you who works at your office.</p>}
        photo="31"
        photoPos="object-[50%_30%]"
      />
      {order.map((g, i) => {
        const members = team.filter((m) => m.group === g);
        if (!members.length) return null;
        const id = `g-${g.replace(/\s+/g, "-").toLowerCase()}`;
        return (
          <section key={g} aria-labelledby={id} className={`section ${i % 2 ? "bg-porcelain" : ""}`}>
            <div className="wrap">
              <h2 id={id} className="text-h2">{g}</h2>
              <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
                {members.map((m) => (
                  <li key={m.slug}><TeamCard m={m} /></li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}
      <div className="pt-20 md:pt-32"><CtaPanel /></div>
    </>
  );
}
