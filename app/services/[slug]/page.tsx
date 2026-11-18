import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CategoryTemplate } from "@/components/templates/CategoryTemplate";
import { ServiceTemplate } from "@/components/templates/ServiceTemplate";
import { categories } from "@/content/categories";
import { describe, fitTitle, serviceTitle, services } from "@/content/services";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const dynamicParams = false;

export function generateStaticParams() {
  return [...categories.map((c) => ({ slug: c.key })), ...services.map((s) => ({ slug: s.slug }))];
}

function resolve(slug: string) {
  const c = categories.find((x) => x.key === slug);
  if (c) return { kind: "category" as const, c };
  const s = services.find((x) => x.slug === slug);
  if (s) return { kind: "service" as const, s };
  return null;
}

const categoryTitle = (name: string) =>
  fitTitle([
    `${name} in Baltimore, MD | Aurelle Dental`,
    `${name} in Baltimore and Frederick, MD | Aurelle Dental`,
    `${name} in Baltimore, Maryland | Aurelle Dental`,
    `${name} Dentist in Baltimore, MD | Aurelle Dental`,
    `${name} in Maryland | Aurelle Dental`,
  ]);

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const r = resolve(slug);
  if (!r) return {};
  if (r.kind === "category") {
    return pageMeta({ title: categoryTitle(r.c.name), description: describe(r.c.intro, " Four Maryland offices, open until 8 PM. Book a visit."), path: routes.category(r.c.key) });
  }
  return pageMeta({ title: serviceTitle(r.s), description: describe(r.s.lead), path: routes.service(r.s.slug) });
}

export default async function Page({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const r = resolve(slug);
  if (!r) notFound();
  if (r.kind === "category") return <CategoryTemplate c={r.c} />;
  return <ServiceTemplate s={r.s} description={describe(r.s.lead)} />;
}
