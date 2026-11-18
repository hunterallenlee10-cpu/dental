"use client";

import { useEffect, useRef } from "react";

/**
 * Signature motion 1, "First Light". The headline and buttons are visible from the first frame.
 * Over 1.6s the photo settles from scale 1.04 to 1, one soft band of light sweeps left to right,
 * and the italic "love" warms from Mist to Paper. Once per session; reduced motion shows the final state.
 * Transform, opacity and colour only, so nothing shifts layout. Motion's mini animate (WAAPI, a few KB)
 * loads lazily after the page's load event, so it never competes with the hero photo.
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
    const run = () =>
      import("motion/mini").then(async ({ animate }) => {
        if (cancelled) return;
        const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
        const photo = photoRef.current;
        const sweep = sweepRef.current;
        const love = document.querySelector<HTMLElement>(".fl-love");
        const anims = [
          photo && animate(photo, { transform: ["scale(1.04)", "scale(1)"] }, { duration: 1.6, ease }),
          sweep && animate(sweep, { transform: ["translateX(-60%)", "translateX(260%)"] }, { duration: 1.6, ease: "easeInOut" }),
          sweep && animate(sweep, { opacity: [0, 1, 1, 0] }, { duration: 1.6, times: [0, 0.15, 0.8, 1] }),
          love && animate(love, { color: ["#9DB6C2", "#FBFCFC"] }, { duration: 1.6, ease }),
        ].filter(Boolean);
        finish();
        await Promise.all(anims.map((x) => x!.finished)).catch(() => {});
        // Commit the final state so nothing snaps back when the animations end.
        if (photo) photo.style.transform = "none";
        if (sweep) sweep.style.opacity = "0";
        if (love) love.style.color = "#FBFCFC";
      });
    if (document.readyState === "complete") run();
    else window.addEventListener("load", run, { once: true });
    return () => {
      cancelled = true;
      window.removeEventListener("load", run);
    };
  }, []);

  return (
    <>
      <div ref={photoRef} className="fl-photo absolute inset-0 origin-[70%_45%]" style={{ transform: "scale(1.04)" }}>
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
