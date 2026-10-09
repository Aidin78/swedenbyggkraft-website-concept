"use client";

import Image, { type ImageProps, type StaticImageData } from "next/image";
import { useState } from "react";

type Props = Omit<ImageProps, "src" | "placeholder" | "fill"> & { src: StaticImageData };

/**
 * A fill image that sits on its own blurred preview and fades in once the
 * full image has decoded, instead of swapping abruptly from blur to sharp.
 * Must be placed in a positioned container.
 */
export function FadeImage({ src, className = "", style, alt, ...props }: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {src.blurDataURL ? (
        <span
          aria-hidden="true"
          className={`absolute inset-0 scale-105 bg-cover bg-center transition-opacity duration-700 ${loaded ? "opacity-0" : "opacity-100"}`}
          style={{ backgroundImage: `url("${src.blurDataURL}")`, backgroundPosition: style?.objectPosition as string }}
        />
      ) : null}
      <Image
        {...props}
        src={src}
        alt={alt}
        fill
        // Catches images that finished loading before hydration.
        ref={(img) => {
          if (img?.complete && img.naturalWidth > 0) setLoaded(true);
        }}
        onLoad={() => setLoaded(true)}
        data-fade=""
        className={`fade-image object-cover ${loaded ? "opacity-100" : "opacity-0"} ${className}`}
        style={style}
      />
    </>
  );
}
