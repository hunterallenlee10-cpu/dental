// The launch switch. Demo is the default and is what the deployed preview runs.
export const siteMode: "demo" | "live" = process.env.NEXT_PUBLIC_SITE_MODE === "live" ? "live" : "demo";
export const isDemo = siteMode === "demo";
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");
export const absoluteUrl = (path: string) => `${siteUrl}${path === "/" ? "" : path}` || siteUrl;
