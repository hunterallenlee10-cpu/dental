"use client";

import { useEffect, useRef } from "react";

/**
 * Signature motion 1, "First Light". The headline and buttons are visible from the first frame.
 * Over 1.6s the photo settles from scale 1.04 to 1, one soft band of light sweeps left to right,
 * and the italic "love" warms from Mist to Paper. Once per session; reduced motion shows the final state.
 * Transform, opacity and colour only, so nothing shifts layout. `motion` loads lazily, after first paint.
 */
export function FirstLight({ children }: { children: React.ReactNode }) {
  const photoRef = useRef<HTMLDivElement>(null);
  const sweepRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const html = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (html.dataset.fl === "done" || reduce) {
      html.dataset.fl = "done";
      return;
    }
    let cancelled = false;
    const finish = () => {
      try {
        sessionStorage.setItem("aurelle-fl", "1");
      } catch {}
    };
    import("motion/react").then(({ animate }) => {
      if (cancelled) return;
      const ease = [0.22, 1, 0.36, 1] as const;
      const love = document.querySelector<HTMLElement>(".fl-love");
      if (photoRef.current) animate(photoRef.current, { scale: [1.04, 1] }, { duration: 1.6, ease });
      if (sweepRef.current)
        animate(sweepRef.current, { x: ["-60%", "260%"], opacity: [0, 1, 1, 0] }, { duration: 1.6, ease: "easeInOut", times: [0, 0.15, 0.8, 1] });
      if (love) animate(love, { color: ["#9DB6C2", "#FBFCFC"] }, { duration: 1.6, ease });
      finish();
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <div ref={photoRef} className="fl-photo absolute inset-0 origin-[70%_45%] will-change-transform" style={{ transform: "scale(1.04)" }}>
        {children}
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          ref={sweepRef}
          className="fl-sweep absolute inset-y-[-20%] left-0 w-[55%] mix-blend-soft-light"
          style={{
            opacity: 0,
            background: "radial-gradient(closest-side, rgb(251 252 252 / 0.10), rgb(251 252 252 / 0.10) 35%, transparent)",
            transform: "translateX(-60%)",
          }}
        />
      </div>
    </>
  );
}
