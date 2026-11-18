import type { Metadata, Viewport } from "next";
import { Geist, Newsreader } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ViewTransition } from "react";
import "./globals.css";
import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MobileBar } from "@/components/layout/MobileBar";
import { BackToTop } from "@/components/layout/BackToTop";
import { VisitRequestRoot } from "@/components/visit/VisitRequestRoot";
import { business } from "@/lib/business";
import { isDemo, siteUrl } from "@/lib/site";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: "variable",
  axes: ["opsz"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `Dentist in Baltimore and Frederick, MD | ${business.name}`, template: `%s | ${business.name}` },
  description: business.description,
  applicationName: business.name,
  robots: isDemo ? { index: false, follow: false, googleBot: { index: false, follow: false } } : { index: true, follow: true },
  openGraph: { type: "website", siteName: business.name, locale: "en_US" },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0E2A38",
};

// First Light plays once per session. Mark the session before paint so a returning visit shows the final state.
const firstLightScript = `try{if(sessionStorage.getItem('aurelle-fl'))document.documentElement.dataset.fl='done';}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${newsreader.variable} ${geist.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: firstLightScript }} />
      </head>
      <body className="flex min-h-svh flex-col">
        <a href="#main" className="sr-only z-[70] rounded-sm bg-ink px-4 py-3 text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
          Skip to content
        </a>
        <SiteNav />
        <ViewTransition>
          <main id="main" tabIndex={-1} className="flex-1 outline-none">
            {children}
          </main>
        </ViewTransition>
        <SiteFooter />
        <MobileBar />
        <BackToTop />
        <VisitRequestRoot />
        <Analytics />
      </body>
    </html>
  );
}
