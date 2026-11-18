"use client";

import { Children, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

/** Horizontal snap rail with arrow buttons and pagination dots. Children are the cards. */
export function Rail({ children, label, itemClass, dots = true, className = "" }: { children: React.ReactNode; label: string; itemClass: string; dots?: boolean; className?: string }) {
  const ref = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const [edges, setEdges] = useState({ start: true, end: false });
  const items = Children.toArray(children);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const kids = Array.from(el.children) as HTMLElement[];
      const left = el.scrollLeft;
      let idx = 0;
      let best = Infinity;
      kids.forEach((k, i) => {
        const d = Math.abs(k.offsetLeft - el.offsetLeft - left - parseFloat(getComputedStyle(el).paddingLeft));
        if (d < best) {
          best = d;
          idx = i;
        }
      });
      setActive(idx);
      setEdges({ start: left < 8, end: left + el.clientWidth >= el.scrollWidth - 8 });
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const go = (i: number) => {
    const el = ref.current;
    const kid = el?.children[i] as HTMLElement | undefined;
    if (!el || !kid) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({ left: kid.offsetLeft - el.offsetLeft - parseFloat(getComputedStyle(el).paddingLeft), behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <div className={className}>
      <ul ref={ref} aria-label={label} className="rail rail-pad">
        {items.map((c, i) => (
          <li key={i} className={itemClass}>
            {c}
          </li>
        ))}
      </ul>
      <div className="wrap mt-6 flex items-center justify-between gap-6">
        {dots ? (
          <div className="flex flex-wrap items-center gap-1" role="group" aria-label={`${label}: choose a slide`}>
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => go(i)}
                aria-label={`Go to item ${i + 1} of ${items.length}`}
                aria-current={i === active ? "true" : undefined}
                className="group inline-flex h-6 w-6 items-center justify-center"
              >
                <span className={`block h-1.5 rounded-full transition-all ${i === active ? "w-5 bg-ink" : "w-1.5 bg-ink/25 group-hover:bg-ink/50"}`} />
              </button>
            ))}
          </div>
        ) : (
          <span />
        )}
        <div className={`gap-2 ${dots ? "hidden sm:flex" : "flex"}`}>
          <button type="button" onClick={() => go(Math.max(0, active - 1))} disabled={edges.start} aria-label="Previous" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line transition-colors hover:border-ink disabled:opacity-35">
            <ArrowLeft size={18} strokeWidth={1.5} aria-hidden="true" />
          </button>
          <button type="button" onClick={() => go(Math.min(items.length - 1, active + 1))} disabled={edges.end} aria-label="Next" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line transition-colors hover:border-ink disabled:opacity-35">
            <ArrowRight size={18} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
