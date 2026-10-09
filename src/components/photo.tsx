
import type { Photo as PhotoData } from "@/content/photos";
import { FadeImage } from "./fade-image";

type Props = {
  photo: PhotoData;
  sizes: string;
  /** Tailwind aspect/height classes for the frame. */
  frame?: string;
  className?: string;
  imgClassName?: string;
  caption?: boolean | string;
  /** Above-the-fold image: load eagerly with high priority. */
  preload?: boolean;
};

/** A cropped photo frame. Renderings are always labelled as such. */
export function Photo({
  photo,
  sizes,
  frame = "aspect-[4/3]",
  className = "",
  imgClassName = "",
  caption = false,
  preload = false,
}: Props) {
  const captionText = typeof caption === "string" ? caption : photo.caption;
  const img = (
    <div className={`relative overflow-hidden bg-paper-2 ${frame}`}>
      <FadeImage
        src={photo.src}
        alt={photo.alt}
        sizes={sizes}
        loading={preload ? "eager" : undefined}
        fetchPriority={preload ? "high" : undefined}
        className={imgClassName}
        style={photo.focus ? { objectPosition: photo.focus } : undefined}
      />
      {photo.rendering ? (
        <span className="t-meta absolute bottom-3 left-3 bg-paper/90 px-2 py-1 text-ink">Visionsbild</span>
      ) : null}
    </div>
  );

  return (
    <figure className={className}>
      {img}
      {caption && captionText ? (
        <figcaption className="t-meta mt-2.5 text-muted">{captionText}</figcaption>
      ) : null}
    </figure>
  );
}
