"use client";

import Link from "@/components/ui/Link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import { Wordmark } from "@/components/brand/Wordmark";
import { Sparkle } from "@/components/brand/Sparkle";
import { BookButton } from "@/components/ui/BookButton";
import { business, offices } from "@/lib/business";
import { categoryNav, mainNav } from "@/lib/nav";
import { routes } from "@/lib/routes";

type Panel = null | "services" | "locations";

export function SiteNav() {
  const pathname = usePathname();
  const overHero = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [panel, setPanel] = useState<Panel>(null);
  const [sheet, setSheet] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on navigation.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setPanel(null);
    setSheet(false);
  }

  // Desktop panels: Escape and outside click close them.
  useEffect(() => {
    if (!panel) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPanel(null);
        (document.querySelector(`[data-panel-trigger="${panel}"]`) as HTMLElement | null)?.focus();
      }
    };
    const onDown = (e: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setPanel(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [panel]);

  // Mobile sheet: lock scroll, trap focus, Escape closes, focus returns to the burger.
  const closeSheet = useCallback(() => {
    setSheet(false);
    burgerRef.current?.focus();
  }, []);
  useEffect(() => {
    if (!sheet) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.dataset.sheet = "open";
    const first = sheetRef.current?.querySelector<HTMLElement>("a,button");
    first?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeSheet();
      if (e.key === "Tab" && sheetRef.current) {
        const items = sheetRef.current.querySelectorAll<HTMLElement>("a,button");
        const a = items[0];
        const b = items[items.length - 1];
        if (e.shiftKey && document.activeElement === a) {
          e.preventDefault();
          b.focus();
        } else if (!e.shiftKey && document.activeElement === b) {
          e.preventDefault();
          a.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      delete document.documentElement.dataset.sheet;
      document.removeEventListener("keydown", onKey);
    };
  }, [sheet, closeSheet]);

  const solid = !overHero || scrolled || panel !== null;
  const tone = solid ? "ink" : "paper";

  const toggle = (p: Exclude<Panel, null>) => setPanel((cur) => (cur === p ? null : p));

  return (
    <>
      <header
        ref={headerRef}
        className={`${overHero ? "fixed" : "sticky"} inset-x-0 top-0 z-40 transition-[background-color,border-color,color] duration-300 ${
          solid ? "border-b border-line bg-paper/95 text-ink backdrop-blur-md" : "border-b border-transparent bg-transparent text-paper on-ink"
        }`}
      >
        <div className="wrap flex h-[72px] items-center justify-between gap-6">
          <Link href={routes.home} className="-ml-1 rounded-sm px-1 py-1" aria-label="Aurelle Dental, home">
            <Wordmark tone={tone} />
          </Link>

          <nav aria-label="Main" className="hidden min-[1200px]:block">
            <ul className="flex items-center gap-1 text-[0.9375rem]">
              <li>
                <button
                  type="button"
                  data-panel-trigger="services"
                  aria-expanded={panel === "services"}
                  aria-controls="mega-services"
                  onClick={() => toggle("services")}
                  className="inline-flex min-h-11 items-center gap-1 rounded-sm px-3 hover:text-azure-deep"
                >
                  Services <ChevronDown size={15} strokeWidth={1.5} aria-hidden="true" className={`transition-transform ${panel === "services" ? "rotate-180" : ""}`} />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  data-panel-trigger="locations"
                  aria-expanded={panel === "locations"}
                  aria-controls="mega-locations"
                  onClick={() => toggle("locations")}
                  className="inline-flex min-h-11 items-center gap-1 rounded-sm px-3 hover:text-azure-deep"
                >
                  Locations <ChevronDown size={15} strokeWidth={1.5} aria-hidden="true" className={`transition-transform ${panel === "locations" ? "rotate-180" : ""}`} />
                </button>
              </li>
              {mainNav.slice(1).map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={pathname === l.href ? "page" : undefined}
                    className="inline-flex min-h-11 items-center rounded-sm px-3 hover:text-azure-deep aria-[current=page]:underline aria-[current=page]:underline-offset-8"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <a
              href={business.phoneHref}
              className="hidden min-h-11 items-center gap-2 rounded-sm px-1 text-[0.9375rem] font-medium md:inline-flex"
            >
              <Phone size={16} strokeWidth={1.5} aria-hidden="true" />
              {business.phoneDisplay}
            </a>
            <BookButton className={`btn hidden md:inline-flex ${solid ? "btn-primary" : "btn-paper"}`} />
            <button
              ref={burgerRef}
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-sm min-[1200px]:hidden"
              aria-label="Open menu"
              aria-expanded={sheet}
              aria-controls="mobile-sheet"
              onClick={() => setSheet(true)}
            >
              <Menu size={24} strokeWidth={1.5} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Services mega menu (rendered only when open; the footer carries the same links for crawlers) */}
        {panel === "services" ? (
        <div
          id="mega-services"
          className="absolute inset-x-0 top-full border-b border-line bg-paper text-ink shadow-float"
        >
          <div className="wrap grid grid-cols-6 gap-8 py-10">
            {categoryNav.map((c) => (
              <div key={c.key}>
                <Link href={routes.category(c.key)} className="font-display text-[1.2rem] leading-tight hover:text-azure-deep">
                  {c.label}
                </Link>
                <ul className="mt-4 space-y-2 text-[0.9rem] text-mute">
                  {c.services.map((s) => (
                    <li key={`${c.key}-${s.slug}`}>
                      <Link href={routes.service(s.slug)} className="hover:text-ink hover:underline">
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-line">
            <div className="wrap flex items-center justify-between py-4 text-[0.9rem]">
              <Link href={routes.services} className="link-arrow">
                All services <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
              </Link>
              <Link href={routes.emergency} className="text-mute hover:text-ink">
                Tooth pain? See our emergency dentist page
              </Link>
            </div>
          </div>
        </div>
        ) : null}

        {/* Locations panel */}
        {panel === "locations" ? (
        <div
          id="mega-locations"
          className="absolute inset-x-0 top-full border-b border-line bg-paper text-ink shadow-float"
        >
          <div className="wrap grid grid-cols-5 gap-8 py-10">
            {offices.map((o) => (
              <Link key={o.slug} href={routes.location(o.slug)} className="group block">
                <span className="font-display text-[1.5rem] group-hover:text-azure-deep">{o.town}</span>
                <span className="mt-1 block text-[0.9rem] text-mute">{o.isNew ? "New office" : o.landmark}</span>
              </Link>
            ))}
            <div className="text-[0.9rem] text-mute">
              <p>{business.hoursShort} at all four offices.</p>
              <Link href={routes.locations} className="link-arrow mt-3">
                All locations <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
        ) : null}
      </header>

      {/* Mobile sheet (rendered only when open) */}
      {sheet ? (
      <div
        id="mobile-sheet"
        ref={sheetRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className="on-ink fixed inset-0 z-50 overflow-y-auto bg-ink text-paper"
      >
        <div className="wrap flex h-[72px] items-center justify-between">
          <Link href={routes.home} aria-label="Aurelle Dental, home" onClick={() => setSheet(false)}>
            <Wordmark tone="paper" />
          </Link>
          <button type="button" className="inline-flex h-11 w-11 items-center justify-center" aria-label="Close menu" onClick={closeSheet}>
            <X size={26} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="Mobile" className="wrap pb-10 pt-4">
          <ul className="space-y-1">
            {[{ href: routes.services, label: "Services" }, ...mainNav, { href: routes.newPatients, label: "New patients" }, { href: routes.emergency, label: "Emergency dentist" }].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="block py-1 font-display text-[1.75rem] leading-tight font-light" onClick={() => setSheet(false)}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <BookButton className="btn btn-paper w-full" />
          </div>
          <p className="label mt-10 text-mist">Our offices</p>
          <ul className="mt-3 divide-y divide-paper/10 border-y border-paper/10">
            {offices.map((o) => (
              <li key={o.slug} className="flex items-center justify-between py-3">
                <Link href={routes.location(o.slug)} className="font-display text-[1.35rem]" onClick={() => setSheet(false)}>
                  {o.town}
                </Link>
                <a href={business.phoneHref} className="inline-flex min-h-11 items-center gap-2 text-mist">
                  <Phone size={16} strokeWidth={1.5} aria-hidden="true" /> Call <span className="sr-only">the {o.town} office</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 flex items-center gap-2 text-mist">
            <Sparkle size={10} className="text-cyan" /> {business.hoursShort}, all four offices
          </p>
        </nav>
      </div>
      ) : null}
    </>
  );
}
