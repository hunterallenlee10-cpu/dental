import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Sparkle plus "A" monogram on ink. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#0E2A38", alignItems: "center", justifyContent: "center" }}>
        <svg width="180" height="180" viewBox="0 0 64 64">
          <path d="M32 14 20.5 50h5.2l2.6-8.4h11.4l2.6 8.4h5.2L36 14Zm-2.4 23.1 4.4-14.3 4.4 14.3Z" fill="#FBFCFC" />
          <path d="M47 8c.3 3.3 1.3 5.2 6.4 6.4-5.1 1.2-6.1 3.1-6.4 6.4-.3-3.3-1.3-5.2-6.4-6.4C45.7 13.2 46.7 11.3 47 8Z" fill="#13A9E1" />
        </svg>
      </div>
    ),
    size,
  );
}
