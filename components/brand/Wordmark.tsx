import { Sparkle } from "./Sparkle";

/** "Aurelle" in Newsreader with DENTAL in small Geist caps, and a cyan sparkle over the second l. */
export function Wordmark({ tone = "ink", className = "" }: { tone?: "ink" | "paper"; className?: string }) {
  return (
    <span
      className={`relative inline-flex flex-col items-center leading-none ${tone === "paper" ? "text-paper" : "text-ink"} ${className}`}
    >
      <span className="relative font-display text-[1.7rem] font-normal tracking-[-0.01em]">
        Aurelle
        <Sparkle size={9} className="absolute -top-[3px] right-[0.36em] text-cyan" />
      </span>
      <span className="mt-[3px] font-sans text-[0.56rem] font-medium tracking-[0.24em] uppercase pl-[0.24em]">Dental</span>
    </span>
  );
}
