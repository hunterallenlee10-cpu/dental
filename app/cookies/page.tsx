import { LegalTemplate } from "@/components/templates/LegalTemplate";
import { cookies } from "@/content/pages";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const metadata = pageMeta({
  title: "Cookie Policy | Aurelle Dental, Baltimore and Frederick, MD",
  description: "Which cookies the Aurelle Dental website uses and how to control them. Draft policy, to be replaced with the Maryland practice's own.",
  path: routes.cookies,
});

export default function CookiesPage() {
  return <LegalTemplate page={cookies} path={routes.cookies} h1={<>Cookies <em className="accent">on the Aurelle Dental website</em></>} />;
}
