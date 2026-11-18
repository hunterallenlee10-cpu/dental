import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import type { LegalPage } from "@/content/pages";

export function LegalTemplate({ page, path, h1 }: { page: LegalPage; path: string; h1: React.ReactNode }) {
  return (
    <article className="wrap pt-8 pb-24 md:pt-10">
      <Breadcrumbs items={[{ name: page.title, path }]} />
      <h1 className="mt-10 text-[clamp(2.5rem,1.9rem+2.6vw,4rem)] leading-[1.02] font-light tracking-[-0.02em] md:mt-14">{h1}</h1>
      <p className="mt-6 inline-block rounded-sm bg-ice px-4 py-2 font-medium" data-placeholder>{page.draftNotice}</p>
      <p className="measure mt-6 text-lead text-mute">{page.intro}</p>
      <div className="measure mt-12 space-y-10">
        {page.sections.map((s) => (
          <section key={s.heading}>
            <h2 className="font-display text-h3">{s.heading}</h2>
            <div className="mt-3 space-y-3 text-mute">
              {s.paragraphs.map((p) => <p key={p}>{p}</p>)}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
