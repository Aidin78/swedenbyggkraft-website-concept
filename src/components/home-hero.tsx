import Image from "next/image";
import Link from "next/link";

import { buttonClass } from "./button";
import type { Photo } from "@/content/photos";
import { quoteHref } from "@/content/site";

const lines = ["Vi bygger", "med kraft.", "Vi levererar", "med precision."];

/**
 * Full-bleed site photography with the headline set in a block cut into
 * the lower-left corner of the image — like a notch in a slab.
 */
export function HomeHero({ slides }: { slides: Photo[] }) {
  return (
    <section aria-labelledby="hero-title" className="relative">
      <div className="hero-media relative h-[62svh] min-h-[22rem] overflow-hidden bg-ink sm:h-[70svh] lg:h-[calc(100svh-4.75rem)] lg:max-h-[60rem] lg:min-h-[40rem]">
        {slides.map((photo, i) => (
          <div key={photo.alt} className="hero-slide absolute inset-0">
            <Image
              src={photo.src}
              alt={i === 0 ? photo.alt : ""}
              fill
              sizes="100vw"
              loading={i === 0 ? "eager" : undefined}
              fetchPriority={i === 0 ? "high" : undefined}
              placeholder="blur"
              quality={75}
              className="object-cover"
              style={photo.focus ? { objectPosition: photo.focus } : undefined}
            />
          </div>
        ))}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/35 via-transparent to-transparent" />

        {/* Caption follows the slide currently shown. */}
        <div className="absolute right-0 top-0 hidden w-[min(22rem,40vw)] sm:block" aria-hidden="true">
          <div className="relative m-4 h-14 lg:m-6">
            {slides.map((photo) => (
              <p
                key={photo.alt}
                className="hero-caption t-meta absolute inset-x-0 top-0 flex items-center justify-end gap-3 text-paper"
              >
                <span className="h-px w-10 bg-paper/70" />
                <span className="bg-ink/75 px-2 py-1">{photo.caption}</span>
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="wrap relative">
        <div className="relative -mt-16 bg-paper pr-4 pt-7 sm:-mt-40 sm:w-[86%] sm:pr-10 sm:pt-10 lg:-mt-[min(34rem,56svh)] lg:w-[68%] lg:pr-14 lg:pt-12 xl:w-[62%]">
          {/* Extends the paper block to the viewport edge on the left. */}
          <span aria-hidden="true" className="absolute inset-y-0 right-full w-[50vw] bg-paper" />
          <h1 id="hero-title" className="t-hero">
            {lines.map((line, i) => (
              <span key={line} className="hero-line block overflow-hidden pb-[0.06em]">
                <span style={{ animationDelay: `${450 + i * 90}ms` }}>{line}</span>
              </span>
            ))}
          </h1>
          <div className="hero-fade mt-8 grid gap-8 sm:mt-10 md:grid-cols-[1fr_auto] md:items-end" style={{ animationDelay: "950ms" }}>
            <p className="t-lead max-w-[30rem] text-ink/85">
              Från betong och prefabmontage till nybyggnation, renovering och fastighetsservice – i Stockholm med
              omnejd.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href={quoteHref} className={buttonClass("signal")}>
                Begär offert
              </Link>
              <Link href="/projekt" className={buttonClass("outline")}>
                Se våra projekt
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
