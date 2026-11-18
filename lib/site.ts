// The launch switch. Demo is the default and is what the deployed preview runs.
export const siteMode: "demo" | "live" = process.env.NEXT_PUBLIC_SITE_MODE === "live" ? "live" : "demo";
export const isDemo = siteMode === "demo";
// Base for every absolute link. On Vercel without NEXT_PUBLIC_SITE_URL, fall back to the project's production URL.
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "";
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || vercelUrl || "http://localhost:3000").replace(/\/$/, "");
export const absoluteUrl = (path: string) => `${siteUrl}${path === "/" ? "" : path}` || siteUrl;
