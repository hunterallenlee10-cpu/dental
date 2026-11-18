import { ogSize, renderOg } from "@/lib/og";

export const alt = "Aurelle Dental. A smile you love. Dentist in Baltimore, Frederick, Leonardtown and Annapolis, MD.";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOg();
}
