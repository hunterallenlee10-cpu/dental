import type { CategoryKey, ServiceSlug } from "@/content/types";
import { routes } from "./routes";

export const categoryNav: { key: CategoryKey; label: string; services: { slug: ServiceSlug; label: string }[] }[] = [
  {
    key: "general-dentistry",
    label: "General dentistry",
    services: [
      { slug: "cavity-treatment", label: "Cavity treatment" },
      { slug: "root-canal-treatment", label: "Root canal treatment" },
      { slug: "teeth-cleaning", label: "Teeth cleaning" },
      { slug: "tartar-removal", label: "Tartar removal" },
      { slug: "tooth-colored-fillings", label: "Tooth-colored fillings" },
      { slug: "kids-dentistry", label: "Kids' dentistry" },
      { slug: "gum-inflammation", label: "Gum inflammation" },
      { slug: "toothache", label: "Toothache" },
      { slug: "tooth-abscess", label: "Tooth abscess" },
      { slug: "teeth-grinding", label: "Teeth grinding" },
    ],
  },
  {
    key: "cosmetic-dentistry",
    label: "Cosmetic dentistry",
    services: [
      { slug: "porcelain-veneers", label: "Porcelain veneers" },
      { slug: "teeth-whitening", label: "Teeth whitening" },
      { slug: "cosmetic-bonding", label: "Cosmetic bonding" },
    ],
  },
  {
    key: "implants-and-restorative",
    label: "Implants and restorative",
    services: [
      { slug: "dental-implants", label: "Dental implants" },
      { slug: "all-on-4", label: "All-on-4" },
      { slug: "dental-crowns", label: "Dental crowns" },
      { slug: "dental-bridges", label: "Dental bridges" },
      { slug: "dentures", label: "Dentures" },
      { slug: "inlays-and-onlays", label: "Inlays and onlays" },
    ],
  },
  {
    key: "orthodontics",
    label: "Orthodontics",
    services: [
      { slug: "braces", label: "Braces" },
      { slug: "invisible-braces", label: "Invisible braces" },
      { slug: "invisalign", label: "Invisalign" },
      { slug: "retainers", label: "Retainers" },
    ],
  },
  {
    key: "specialist-care",
    label: "Specialist care",
    services: [
      { slug: "oral-surgery", label: "Oral surgery" },
      { slug: "wisdom-teeth-removal", label: "Wisdom teeth removal" },
      { slug: "apicoectomy", label: "Apicoectomy" },
      { slug: "periodontics", label: "Periodontics" },
      { slug: "deep-cleaning", label: "Deep cleaning" },
      { slug: "gum-flap-surgery", label: "Gum flap surgery" },
      { slug: "dental-x-rays", label: "Dental x-rays" },
      { slug: "panoramic-x-ray", label: "Panoramic x-ray" },
      { slug: "3d-cbct-scan", label: "3D CBCT scan" },
    ],
  },
  {
    key: "prosthodontics",
    label: "Prosthodontics",
    services: [
      { slug: "dental-crowns", label: "Crowns" },
      { slug: "dental-bridges", label: "Bridges" },
      { slug: "dentures", label: "Dentures" },
      { slug: "inlays-and-onlays", label: "Inlays and onlays" },
    ],
  },
];

export const mainNav = [
  { href: routes.locations, label: "Locations" },
  { href: routes.team, label: "Team" },
  { href: routes.about, label: "About" },
  { href: routes.pricing, label: "Insurance and pricing" },
  { href: routes.tips, label: "Tips" },
  { href: routes.contact, label: "Contact" },
];
