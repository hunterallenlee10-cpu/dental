import { BeforeAfter } from "@/components/ui/BeforeAfter";
import { SampleLabel } from "@/components/ui/SampleLabel";
import { Photo } from "@/components/ui/Photo";
import { BeforeAfterRail } from "@/components/sections/BeforeAfterRail";
import { wideCase } from "@/lib/cases";

/** Porcelain veneers feature version: mood photos (no names, no quotes), the wide slider and the nine-case rail. */
export function VeneersFeature() {
  return (
    <>
      {/* Photos 59 to 63 were named patient stories on the source. Mood images only: no names, no quotes, no story text. */}
      <section aria-labelledby="mood-title" className="section on-ink overflow-hidden bg-ink text-paper">
        <div className="wrap">
          <h2 id="mood-title" className="text-h2">
            A smile for <em className="accent">every moment.</em>
          </h2>
        </div>
        <ul className="mt-12 grid grid-cols-2 gap-2 px-5 md:grid-cols-5 md:px-0" aria-label="Mood photos">
          {(["59", "60", "61", "62", "63"] as const).map((id, i) => (
            <li key={id} className={`overflow-hidden rounded-sm md:rounded-none ${i === 4 ? "col-span-2 md:col-span-1" : ""} ${i % 2 ? "md:mt-16" : ""}`}>
              <Photo id={id} sizes="(min-width: 768px) 20vw, 50vw" className="aspect-[4/5] h-auto w-full object-cover" />
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="wide-title" className="section">
        <div className="wrap">
          <h2 id="wide-title" className="text-h2">
            Drag to <em className="accent">compare</em>
          </h2>
          <p className="mt-4 max-w-[52ch] text-lead text-mute">Move the handle to see the smile before and after porcelain veneers.</p>
          <figure className="mt-10 max-w-[1200px]">
            <BeforeAfter before={wideCase.before} after={wideCase.after} caseLabel={`Sample case ${wideCase.n}`} sizes="(min-width: 1240px) 1200px, 100vw" wide />
            <figcaption className="mt-4 flex items-baseline gap-4">
              <span className="font-display text-[2rem] leading-none text-azure">{wideCase.n}</span>
              <span>
                <span className="block text-[1.0625rem]">{wideCase.treatment}</span>
                <SampleLabel className="mt-0.5" />
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      <BeforeAfterRail headingId="ba-rail-title" tone="porcelain" />
    </>
  );
}
