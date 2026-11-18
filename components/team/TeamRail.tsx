import Link from "@/components/ui/Link";
import { ArrowRight } from "lucide-react";
import { Rail } from "@/components/ui/Rail";
import { PlaceholderPortrait } from "./PlaceholderPortrait";
import { team } from "@/content/team";
import { routes } from "@/lib/routes";
import type { TeamMember } from "@/content/types";

export function TeamCard({ m, headingLevel = "h3" }: { m: TeamMember; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <Link href={routes.member(m.slug)} className="group block">
      <div className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1">
        <PlaceholderPortrait name={m.name} />
      </div>
      <H className="mt-4 font-display text-[1.375rem] leading-tight group-hover:text-azure-deep">{m.name}</H>
      <p className="mt-1 text-[0.9375rem] text-mute">{m.role}</p>
    </Link>
  );
}

export function TeamRail({ members = team, headingId = "team-title", title, sub, showAllLink = true }: { members?: TeamMember[]; headingId?: string; title?: React.ReactNode; sub?: string; showAllLink?: boolean }) {
  return (
    <section aria-labelledby={headingId} className="section overflow-hidden">
      <div className="wrap grid gap-6 md:grid-cols-[1.1fr_1fr] md:items-end">
        <h2 id={headingId} className="text-h2">
          {title ?? (
            <>
              A dentist for <em className="accent">everything</em> you need.
            </>
          )}
        </h2>
        <div className="md:justify-self-end">
          <p className="max-w-[48ch] text-lead text-mute">
            {sub ??
              "General dentists. Implant dentists. Prosthodontists. Orthodontists. A periodontist. Dental hygienists. A specialist for every area, all working as one team for your smile."}
          </p>
          {showAllLink ? (
            <Link href={routes.team} className="link-arrow mt-4">
              Meet the whole team <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          ) : null}
        </div>
      </div>
      <Rail label="Team members" itemClass="w-[68vw] max-w-[280px] sm:w-[240px] lg:w-[260px]" className="mt-12" dots={false}>
        {members.map((m) => (
          <TeamCard key={m.slug} m={m} />
        ))}
      </Rail>
    </section>
  );
}
