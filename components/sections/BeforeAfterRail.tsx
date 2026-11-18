import { BeforeAfter } from "@/components/ui/BeforeAfter";
import { Rail } from "@/components/ui/Rail";
import { SampleLabel } from "@/components/ui/SampleLabel";
import { sampleCases } from "@/lib/cases";

export function BeforeAfterRail({ headingId = "ba-title", tone = "paper" }: { headingId?: string; tone?: "paper" | "porcelain" }) {
  return (
    <section aria-labelledby={headingId} className={`section ${tone === "porcelain" ? "bg-porcelain" : ""}`}>
      <div className="wrap grid gap-6 md:grid-cols-[1fr_1fr] md:items-end">
        <h2 id={headingId} className="text-h2">
          Before <em className="accent">and after</em>
        </h2>
        <p className="max-w-[40ch] text-lead text-mute md:justify-self-end">
          The best way to see what treatment changes is to see the smile before and after.
        </p>
      </div>
      <Rail label="Sample before and after cases" itemClass="w-[calc(100vw-40px)] max-w-[460px] sm:w-[440px]" className="mt-12">
        {sampleCases.map((c) => (
          <figure key={c.n}>
            <div className="rounded-sm border border-line bg-porcelain p-2.5">
              <BeforeAfter before={c.before} after={c.after} caseLabel={`Sample case ${c.n}`} sizes="(min-width: 640px) 420px, 100vw" />
            </div>
            <figcaption className="mt-4 flex items-baseline gap-4">
              <span className="font-display text-[2rem] leading-none text-azure">{c.n}</span>
              <span>
                <span className="block text-[1.0625rem]">{c.treatment}</span>
                <SampleLabel className="mt-0.5" />
              </span>
            </figcaption>
          </figure>
        ))}
      </Rail>
    </section>
  );
}
