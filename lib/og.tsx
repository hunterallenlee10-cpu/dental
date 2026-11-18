import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { photos } from "./photos";

export const ogSize = { width: 1200, height: 630 };

/** 1200x630: ink panel left with the wordmark and "A smile you love.", photo 01 cropped right. */
export async function renderOg() {
  const [photo, serif, serifItalic, sans] = await Promise.all([
    readFile(join(process.cwd(), "public", photos["01"].src)),
    readFile(join(process.cwd(), "assets/fonts/Newsreader-normal.woff")),
    readFile(join(process.cwd(), "assets/fonts/Newsreader-italic.woff")),
    readFile(join(process.cwd(), "assets/fonts/Geist-normal.woff")),
  ]);
  const src = `data:image/jpeg;base64,${photo.toString("base64")}`;
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#0E2A38" }}>
        <div style={{ display: "flex", position: "absolute", right: 0, top: 0, width: 760, height: 630, overflow: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} width={1119} height={630} style={{ position: "absolute", right: -40, top: 0, width: 1119, height: 630 }} alt="" />
        </div>
        <div style={{ display: "flex", position: "absolute", left: 0, top: 0, width: 760, height: 630, background: "linear-gradient(90deg, #0E2A38 0%, #0E2A38 62%, rgba(14,42,56,0) 100%)" }} />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", position: "absolute", left: 72, top: 64, bottom: 64, width: 520, color: "#FBFCFC" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <div style={{ display: "flex", fontFamily: "Newsreader", fontSize: 46, lineHeight: 1 }}>Aurelle</div>
            <div style={{ display: "flex", fontFamily: "Geist", fontSize: 13, letterSpacing: 4, marginTop: 6, marginLeft: 30 }}>DENTAL</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontFamily: "Newsreader", fontSize: 96, lineHeight: 0.98, letterSpacing: -2 }}>A smile</div>
            <div style={{ display: "flex", fontFamily: "Newsreader", fontSize: 96, lineHeight: 0.98, letterSpacing: -2 }}>
              you&nbsp;<span style={{ fontFamily: "NewsreaderItalic" }}>love</span>.
            </div>
            <div style={{ display: "flex", fontFamily: "Geist", fontSize: 20, color: "#9DB6C2", marginTop: 28 }}>
              Baltimore · Frederick · Leonardtown · Annapolis, MD
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Newsreader", data: serif, weight: 300, style: "normal" },
        { name: "NewsreaderItalic", data: serifItalic, weight: 300, style: "italic" },
        { name: "Geist", data: sans, weight: 500, style: "normal" },
      ],
    },
  );
}
