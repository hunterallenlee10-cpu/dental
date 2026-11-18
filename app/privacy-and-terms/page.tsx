import { LegalTemplate } from "@/components/templates/LegalTemplate";
import { privacy } from "@/content/pages";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const metadata = pageMeta({
  title: "Privacy and Terms | Aurelle Dental, Baltimore and Frederick, MD",
  description: "How Aurelle Dental in Maryland handles your information and the terms for using this website. Draft policy, to be replaced with the practice's own.",
  path: routes.privacy,
});

export default function PrivacyPage() {
  return <LegalTemplate page={privacy} path={routes.privacy} h1={<>Privacy and terms <em className="accent">for Aurelle Dental, Maryland</em></>} />;
}
