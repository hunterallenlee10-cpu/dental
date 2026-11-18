import Link from "@/components/ui/Link";
import { Wordmark } from "@/components/brand/Wordmark";
import { Sparkle } from "@/components/brand/Sparkle";
import { BookButton } from "@/components/ui/BookButton";
import { addressPlaceholder, business, offices, payment } from "@/lib/business";
import { categoryNav } from "@/lib/nav";
import { routes } from "@/lib/routes";
import { isDemo } from "@/lib/site";

const practiceLinks = [
  { href: routes.locations, label: "Locations" },
  { href: routes.team, label: "Team" },
  { href: routes.about, label: "About" },
  { href: routes.pricing, label: "Insurance and pricing" },
  { href: routes.payment, label: "Payment and financing" },
  { href: routes.tips, label: "Tips" },
  { href: routes.reviews, label: "Reviews" },
  { href: routes.newPatients, label: "New patients" },
  { href: routes.emergency, label: "Emergency dentist" },
  { href: routes.contact, label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="on-ink bg-ink text-paper">
      <div className="wrap pt-20 pb-10 md:pt-28">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <p className="font-display text-[clamp(2.5rem,1.6rem+3.6vw,5rem)] leading-[1] font-light tracking-[-0.02em]">
            We create <em className="accent">a carefree</em> smile
          </p>
          <div className="lg:justify-self-end lg:text-right">
            <a href={business.phoneHref} className="font-display text-[clamp(2rem,1.6rem+1.6vw,3rem)] leading-none hover:text-mist">
              {business.phoneDisplay}
            </a>
            <p className="mt-3">
              <a href={business.emailHref} className="text-mist underline-offset-4 hover:text-paper hover:underline">
                {business.email}
              </a>
            </p>
            <p className="mt-2 text-mist">{business.hoursLong}</p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-paper/12 pt-12 md:grid-cols-4">
          {offices.map((o) => (
            <div key={o.slug}>
              <h2 className="flex flex-wrap items-center gap-2 font-display text-[1.5rem]">
                <Link href={routes.location(o.slug)} className="hover:text-mist">{o.town}</Link>
                {o.isNew ? <span className="whitespace-nowrap rounded-full border border-cyan/60 px-2 py-0.5 font-sans text-[0.6875rem] font-medium uppercase tracking-[0.06em] text-cyan">New office</span> : null}
              </h2>
              <p className="mt-2 text-[0.9375rem] text-mist">
                {addressPlaceholder}
                <br />
                {o.isNew ? `${o.town}, MD` : o.landmark}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 border-t border-paper/12 pt-12 md:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="label text-mist">Services</h2>
            <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 text-[0.9375rem] sm:grid-cols-2 lg:grid-cols-3">
              {categoryNav.map((c) => (
                <li key={c.key}>
                  <Link href={routes.category(c.key)} className="hover:text-mist hover:underline">{c.label}</Link>
                </li>
              ))}
              <li><Link href={routes.service("dental-implants")} className="hover:text-mist hover:underline">Dental implants</Link></li>
              <li><Link href={routes.service("porcelain-veneers")} className="hover:text-mist hover:underline">Porcelain veneers</Link></li>
              {/* DRAFT: confirm provider status for the Invisalign name */}
              <li><Link href={routes.service("invisalign")} className="hover:text-mist hover:underline">Invisalign</Link></li>
              <li><Link href={routes.service("teeth-cleaning")} className="hover:text-mist hover:underline">Teeth cleaning</Link></li>
              <li><Link href={routes.service("wisdom-teeth-removal")} className="hover:text-mist hover:underline">Wisdom teeth removal</Link></li>
              <li><Link href={routes.services} className="hover:text-mist hover:underline">All services</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="label text-mist">Practice</h2>
            <ul className="mt-4 space-y-2 text-[0.9375rem]">
              {practiceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-mist hover:underline">{l.label}</Link>
                </li>
              ))}
              <li>
                <BookButton className="hover:text-mist hover:underline" />
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-paper/12 pt-8 text-[0.875rem] text-mist md:flex-row md:items-center md:justify-between">
          <Wordmark tone="paper" />
          <p className="flex items-center gap-2"><Sparkle size={9} className="text-cyan" /> {payment.summary}</p>
          <p className="flex flex-wrap gap-x-5 gap-y-2">
            <span>© 2026 {business.name}</span>
            <Link href={routes.privacy} className="hover:text-paper hover:underline">Privacy and terms</Link>
            <Link href={routes.cookies} className="hover:text-paper hover:underline">Cookies</Link>
          </p>
        </div>
        {isDemo ? (
          <div className="mt-8 space-y-1 text-[0.8125rem] text-mist" data-concept>
            <p>Concept preview by Lee Enterprises Unlimited.</p>
            <p>{business.name} is a fictional practice used for a design concept.</p>
          </div>
        ) : null}
        <div className="h-20 md:hidden" aria-hidden="true" />
      </div>
    </footer>
  );
}
