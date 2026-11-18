import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { LocationTemplate } from "@/components/templates/LocationTemplate";
import { offices } from "@/lib/business";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const dynamicParams = false;
export function generateStaticParams() {
  return offices.map((o) => ({ town: o.slug }));
}

export async function generateMetadata({ params }: PageProps<"/locations/[town]">): Promise<Metadata> {
  const { town } = await params;
  const o = offices.find((x) => x.slug === town);
  if (!o) return {};
  const where = o.isNew ? `our new ${o.town} office` : `${o.landmark}`;
  return pageMeta({
    title: `Dentist in ${o.town}, MD | Evening Hours | Aurelle Dental`,
    description: `Aurelle Dental in ${o.town}, MD (${where}). Open Mon to Fri, 7 AM to 8 PM, with a written estimate before treatment. Call (410) 555-0142 or book a visit.`,
    path: routes.location(o.slug),
  });
}

export default async function Page({ params }: PageProps<"/locations/[town]">) {
  const { town } = await params;
  const o = offices.find((x) => x.slug === town);
  if (!o) notFound();
  return <LocationTemplate o={o} />;
}
