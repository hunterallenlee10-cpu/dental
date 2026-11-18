"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Phone } from "lucide-react";
import { BookButton } from "@/components/ui/BookButton";
import { business, membershipPlan, payment } from "@/lib/business";
import {
  disclaimer,
  insuranceOptions,
  needOptions,
  needToReason,
  otherPlanText,
  ppoFineprint,
  ppoTiers,
  type CoverageNeed,
  type InsuranceAnswer,
} from "@/lib/coverage";

type Props = { initialNeed?: CoverageNeed; compact?: boolean; headingLevel?: "h2" | "h3" };

/**
 * Signature motion 2: the Coverage Check result. A plain guide, no form in front of it.
 * Cards are native radio groups (arrow keys work); the result region is aria-live.
 * Motion (lazy) animates only the bar fill and the card entrance. Without it, the static card shows.
 */
export function CoverageCheck({ initialNeed, compact, headingLevel = "h3" }: Props) {
  const [need, setNeed] = useState<CoverageNeed | null>(initialNeed ?? null);
  const [ins, setIns] = useState<InsuranceAnswer | null>(null);
  const uid = useId();
  const cardRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const H = headingLevel;

  // Pre-set from ?need= when arriving from a service page's "Will insurance cover it?" link.
  useEffect(() => {
    if (initialNeed) return;
    const q = new URLSearchParams(window.location.search).get("need") as CoverageNeed | null;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (q && needOptions.some((o) => o.value === q)) setNeed(q);
  }, [initialNeed]);

  const resultKey = need === "pain" ? "pain" : need && ins ? `${need}-${ins}` : null;

  useEffect(() => {
    if (!resultKey) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let off = false;
    import("motion/react").then(({ animate }) => {
      if (off) return;
      if (cardRef.current) animate(cardRef.current, { opacity: [0.001, 1], y: [8, 0] }, { duration: 0.3, ease: [0.22, 1, 0.36, 1] });
      if (barRef.current) {
        const to = Number(barRef.current.dataset.share) / 100;
        animate(barRef.current, { scaleX: [0, to] }, { duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] });
      }
    });
    return () => {
      off = true;
    };
  }, [resultKey]);

  const reason = need ? needToReason[need] : undefined;

  return (
    <div className={compact ? "" : ""}>
      <fieldset>
        <legend className="mb-3 flex items-center gap-3 font-medium">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-ink text-[0.8125rem] text-paper" aria-hidden="true">1</span>
          What do you need?
        </legend>
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-3">
          {needOptions.map((o) => (
            <Card key={o.value} name={`${uid}-need`} checked={need === o.value} onChange={() => setNeed(o.value)} label={o.label} />
          ))}
        </div>
      </fieldset>

      {need !== "pain" ? (
        <fieldset className="mt-6">
          <legend className="mb-3 flex items-center gap-3 font-medium">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-ink text-[0.8125rem] text-paper" aria-hidden="true">2</span>
            Do you have dental insurance?
          </legend>
          <div className="grid grid-cols-2 gap-2">
            {insuranceOptions.map((o) => (
              <Card key={o.value} name={`${uid}-ins`} checked={ins === o.value} onChange={() => setIns(o.value)} label={o.label} />
            ))}
          </div>
        </fieldset>
      ) : null}

      <div aria-live="polite" aria-atomic="true" className="mt-6">
        {resultKey ? (
          <div ref={cardRef} key={resultKey} className="rounded-[12px] border border-line bg-paper p-5 shadow-[0_1px_0_rgb(14_42_56/0.04)] md:p-7">
            <Result need={need!} ins={ins} H={H} barRef={barRef} />
            <p className="mt-5 border-t border-line pt-4 text-[0.875rem] text-mute">{disclaimer}</p>
            {need !== "pain" ? (
              <div className="mt-4">
                <BookButton reason={reason} className="btn btn-primary w-full sm:w-auto" />
              </div>
            ) : null}
          </div>
        ) : (
          <p className="rounded-[12px] border border-dashed border-ink/20 px-5 py-4 text-[0.9375rem] text-mute">
            {need ? "Now choose your insurance to see how plans usually treat it." : "Choose what you need and your insurance. The guide answers straight away."}
          </p>
        )}
      </div>
    </div>
  );
}

function Result({ need, ins, H, barRef }: { need: CoverageNeed; ins: InsuranceAnswer | null; H: "h2" | "h3"; barRef: React.RefObject<HTMLDivElement | null> }) {
  if (need === "pain") {
    return (
      <>
        <H className="text-[1.75rem] leading-tight">Call {business.phoneDisplay} <em className="accent">now.</em></H>
        <p className="mt-2 text-mute">Tell us it hurts and we will look for the earliest visit.</p>
        <a href={business.phoneHref} className="btn btn-primary mt-5 w-full text-[0.9375rem] sm:w-auto">
          <Phone size={18} strokeWidth={1.5} aria-hidden="true" /> Call {business.phoneDisplay}
        </a>
      </>
    );
  }
  if (ins === "ppo") {
    const t = ppoTiers[need];
    return (
      <>
        <p className="label text-azure-deep">{t.tierName} on a PPO plan</p>
        <H className="mt-2 text-[clamp(1.75rem,1.4rem+1.4vw,2.5rem)] leading-[1.05]">{t.headline}</H>
        <div className="mt-5" aria-hidden="true">
          <div className="h-2.5 w-full overflow-hidden rounded-full bg-ice">
            <div ref={barRef} data-share={t.share} className="h-full origin-left rounded-full bg-azure-deep" style={{ transform: `scaleX(${t.share / 100})` }} />
          </div>
          <div className="mt-1.5 flex justify-between text-[0.75rem] text-mute">
            <span>0%</span>
            <span>100%</span>
          </div>
        </div>
        <p className="mt-4">{t.explain}</p>
        {t.share > 0 ? <p className="mt-2 text-[0.9375rem] text-mute">{ppoFineprint}</p> : null}
      </>
    );
  }
  if (ins === "none") {
    return (
      <>
        <p className="label text-azure-deep">No insurance</p>
        <H className="mt-2 text-[clamp(1.75rem,1.4rem+1.4vw,2.5rem)] leading-[1.05]">You pay as you go, <em className="accent">your way.</em></H>
        <ul className="mt-4 grid gap-2 sm:grid-cols-3">
          {payment.methods.map((m) => (
            <li key={m} className="rounded-[8px] bg-ice px-4 py-3 text-[0.9375rem]">{m}</li>
          ))}
        </ul>
        {membershipPlan.enabled ? (
          <p className="mt-3">{membershipPlan.name}: {membershipPlan.price}</p>
        ) : null}
        <p className="mt-4 text-mute">Your written estimate shows the cost before anything starts, and prices are the same at all four offices.</p>
      </>
    );
  }
  return (
    <>
      <p className="label text-azure-deep">{ins === "other" ? "Another kind of plan" : "Not sure"}</p>
      <H className="mt-2 text-[clamp(1.75rem,1.4rem+1.4vw,2.5rem)] leading-[1.05]">Plans differ <em className="accent">a lot.</em></H>
      <p className="mt-3">{otherPlanText}</p>
    </>
  );
}

function Card({ name, checked, onChange, label }: { name: string; checked: boolean; onChange: () => void; label: string }) {
  return (
    <label className="block">
      <input type="radio" name={name} checked={checked} onChange={onChange} className="peer sr-only" />
      <span className="flex min-h-[60px] cursor-pointer items-center rounded-[8px] border border-line bg-paper px-4 py-3 text-[0.9375rem] leading-snug transition-colors hover:border-ink/40 peer-checked:border-azure-deep peer-checked:bg-azure-deep peer-checked:text-paper peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-azure-deep">
        {label}
      </span>
    </label>
  );
}
