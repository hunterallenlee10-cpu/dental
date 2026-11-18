"use client";

import { useEffect, useState } from "react";
import { MessageSquare, Phone } from "lucide-react";
import { business } from "@/lib/business";
import { BookButton } from "@/components/ui/BookButton";

/** Floating pill bar on phones: [Call] [Text] [Book a visit]. Appears after one screen of scroll. */
export function MobileBar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={`mobile-bar fixed inset-x-3 bottom-3 z-30 md:hidden transition-[transform,opacity] duration-300 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-[140%] opacity-0"
      }`}
      aria-hidden={!show}
      inert={!show}
    >
      <nav aria-label="Quick actions" className="grid grid-cols-3 gap-1 rounded-full bg-ink p-1.5 text-paper shadow-float on-ink">
        <a href={business.phoneHref} className="flex min-h-12 items-center justify-center gap-1.5 rounded-full text-[0.8125rem] font-medium uppercase tracking-[0.06em]">
          <Phone size={16} strokeWidth={1.5} aria-hidden="true" /> Call
        </a>
        <a href={business.smsHref} className="flex min-h-12 items-center justify-center gap-1.5 rounded-full text-[0.8125rem] font-medium uppercase tracking-[0.06em]">
          <MessageSquare size={16} strokeWidth={1.5} aria-hidden="true" /> Text
        </a>
        <BookButton className="flex min-h-12 items-center justify-center rounded-full bg-paper px-2 text-center text-[0.75rem] font-medium uppercase leading-tight tracking-[0.04em] text-ink" />
      </nav>
    </div>
  );
}
