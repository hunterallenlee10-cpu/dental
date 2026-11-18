import { categories } from "@/content/categories";
import { business, offices } from "@/lib/business";
import { routes } from "@/lib/routes";
import { absoluteUrl, isDemo } from "@/lib/site";

export const dynamic = "force-static";

/** llms.txt, live mode only. A convenience summary, not a ranking lever. */
export function GET() {
  if (isDemo) return new Response("Not found", { status: 404, headers: { "Content-Type": "text/plain; charset=utf-8" } });
  const l = (name: string, path: string, note?: string) => `- [${name}](${absoluteUrl(path)})${note ? `: ${note}` : ""}`;
  const body = [
    `# ${business.name}`,
    "",
    `> ${business.description} ${business.hoursLong} Phone ${business.phoneDisplay}. A written treatment estimate before any treatment, and the same prices at all four offices.`,
    "",
    "## Offices",
    ...offices.map((o) => l(`${o.town}, MD`, routes.location(o.slug), o.isNew ? "new office" : o.landmark)),
    "",
    "## Services",
    l("All services", routes.services),
    ...categories.map((c) => l(c.name, routes.category(c.key))),
    "",
    "## Patients",
    l("New patients", routes.newPatients),
    l("Insurance and pricing", routes.pricing, "how plans usually treat each kind of care, and the written estimate"),
    l("Payment and financing", routes.payment),
    l("Emergency dentist", routes.emergency),
    l("Book a visit", routes.book),
    l("Contact", routes.contact),
    "",
    "## Optional",
    l("Team", routes.team),
    l("About", routes.about),
    l("Dental tips", routes.tips),
    "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
}
