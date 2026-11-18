import { business, offices, type Office } from "./business";
import { routes } from "./routes";
import { absoluteUrl } from "./site";

const hours = {
  "@type": "OpeningHoursSpecification",
  dayOfWeek: business.hoursSpec.days,
  opens: business.hoursSpec.opens,
  closes: business.hoursSpec.closes,
};

/** The practice as a Dentist (LocalBusiness subtype). No ratings or reviews, ever. */
export function practiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${absoluteUrl("/")}#practice`,
    name: business.name,
    description: business.description,
    url: absoluteUrl("/"),
    telephone: business.phoneE164,
    email: business.email,
    logo: absoluteUrl("/icon.svg"),
    image: absoluteUrl("/opengraph-image"),
    openingHoursSpecification: [hours],
    areaServed: offices.map((o) => ({ "@type": "City", name: `${o.town}, ${business.state}` })),
    // DRAFT: street address. Town and state only until the practice supplies addresses.
    address: { "@type": "PostalAddress", addressLocality: offices[0].town, addressRegion: business.state, addressCountry: "US" },
    department: offices.map((o) => ({ "@id": `${absoluteUrl(routes.location(o.slug))}#office` })),
  };
}

export function officeSchema(o: Office) {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${absoluteUrl(routes.location(o.slug))}#office`,
    name: `${business.name} ${o.town}`,
    url: absoluteUrl(routes.location(o.slug)),
    telephone: business.phoneE164,
    logo: absoluteUrl("/icon.svg"),
    image: absoluteUrl("/opengraph-image"),
    openingHoursSpecification: [hours],
    // DRAFT: street address
    address: { "@type": "PostalAddress", addressLocality: o.town, addressRegion: business.state, addressCountry: "US" },
    parentOrganization: { "@id": `${absoluteUrl("/")}#practice` },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: absoluteUrl(it.path) })),
  };
}

export function serviceSchema({ name, description, path }: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: name,
    description,
    url: absoluteUrl(path),
    provider: { "@id": `${absoluteUrl("/")}#practice` },
    areaServed: offices.map((o) => ({ "@type": "City", name: `${o.town}, ${business.state}` })),
  };
}

export function personSchema({ name, jobTitle, path }: { name: string; jobTitle: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    url: absoluteUrl(path),
    worksFor: { "@id": `${absoluteUrl("/")}#practice` },
  };
}

export function articleSchema({ title, description, path, image }: { title: string; description: string; path: string; image: string }) {
  const built = new Date().toISOString().slice(0, 10);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: absoluteUrl(path),
    image: absoluteUrl(image),
    datePublished: built,
    dateModified: built,
    // DRAFT: reviewed by a dentist. No author name until the practice supplies one.
    publisher: { "@type": "Organization", name: business.name, logo: { "@type": "ImageObject", url: absoluteUrl("/icon.svg") } },
  };
}
