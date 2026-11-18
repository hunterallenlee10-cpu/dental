import Image from "next/image";
import { photos, type PhotoId } from "@/lib/photos";

type Props = {
  id: PhotoId;
  sizes: string;
  className?: string;
  /** Cover its box: renders with intrinsic width and height attributes, sized by CSS. */
  cover?: boolean;
  /** The page's LCP image: fetched eagerly at high priority (the Next 16 docs' recommended setting over `preload`). */
  preload?: boolean;
  alt?: string;
  style?: React.CSSProperties;
  quality?: 70 | 75 | 82;
};

/** next/image with width, height and alt text from the photo registry. Width and height are always set. */
export function Photo({ id, sizes, className = "", cover, preload, alt, style, quality = 75 }: Props) {
  const p = photos[id];
  return (
    <Image
      src={p.src}
      alt={alt ?? p.alt}
      width={p.width}
      height={p.height}
      sizes={sizes}
      quality={quality}
      loading={preload ? "eager" : undefined}
      fetchPriority={preload ? "high" : undefined}
      style={style}
      className={cover ? `h-full w-full object-cover ${className}` : className}
    />
  );
}
