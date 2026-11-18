"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/** Desktop only, after 1.5 screens of scroll. Phones have the floating bar. */
export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 1.5);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      type="button"
      onClick={() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
        document.getElementById("main")?.focus({ preventScroll: true });
      }}
      className={`fixed bottom-6 right-6 z-30 hidden h-12 w-12 items-center justify-center rounded-full border border-line bg-paper text-ink shadow-float transition-[opacity,transform] duration-300 hover:bg-ice md:inline-flex ${
        show ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
      aria-label="Back to top"
      tabIndex={show ? 0 : -1}
    >
      <ArrowUp size={20} strokeWidth={1.5} aria-hidden="true" />
    </button>
  );
}
