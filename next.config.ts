import type { NextConfig } from "next";

const isDemo = process.env.NEXT_PUBLIC_SITE_MODE !== "live";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [70, 75, 82],
    deviceSizes: [640, 750, 828, 1080, 1200, 1672, 1920],
    imageSizes: [32, 64, 96, 128, 256, 384, 480],
  },
  poweredByHeader: false,
  async headers() {
    const base = [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // Demo mode: every response (pages, images, files) carries noindex.
          ...(isDemo ? [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] : []),
        ],
      },
    ];
    return base;
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
