import Link from "next/link";
import type { Metadata } from "next";
import { BookButton } from "@/components/ui/BookButton";
import { routes } from "@/lib/routes";

export const metadata: Metadata = { title: { absolute: "Page not found | Aurelle Dental" }, robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <section className="wrap flex min-h-[60vh] flex-col justify-center py-24">
      <p className="label text-mute">404</p>
      <h1 className="mt-4 text-[clamp(2.75rem,1.9rem+3.6vw,5rem)] leading-[1] font-light tracking-[-0.02em]">
        This page is <em className="accent">missing a tooth.</em>
      </h1>
      <p className="mt-6 max-w-[48ch] text-lead text-mute">The page you are looking for is not here. Try one of these instead.</p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link href={routes.services} className="btn btn-outline">Services</Link>
        <Link href={routes.locations} className="btn btn-outline">Locations</Link>
        <BookButton />
      </div>
    </section>
  );
}
