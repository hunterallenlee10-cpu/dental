import type { Step } from "@/content/types";

/** A numbered 3-step band. */
export function StepsBand({ title, steps, tone = "porcelain", id }: { title: React.ReactNode; steps: Step[]; tone?: "porcelain" | "paper" | "ink"; id: string }) {
  const ink = tone === "ink";
  return (
    <section aria-labelledby={id} className={`section ${tone === "porcelain" ? "bg-porcelain" : ink ? "on-ink bg-ink text-paper" : ""}`}>
      <div className="wrap">
        <h2 id={id} className="max-w-[18ch] text-h2">{title}</h2>
        <ol className="mt-12 grid gap-8 md:grid-cols-3 md:gap-10">
          {steps.map((s, i) => (
            <li key={s.title} className={`border-t pt-6 ${ink ? "border-paper/20" : "border-ink/15"}`}>
              <span className={`font-display text-[2.5rem] leading-none ${ink ? "text-cyan" : "text-azure"}`}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 font-display text-[1.5rem] leading-tight">{s.title}</h3>
              <p className={`mt-2 ${ink ? "text-mist" : "text-mute"}`}>{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
