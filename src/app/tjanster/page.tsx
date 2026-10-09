import type { Metadata } from "next";
import Link from "next/link";

import { PageIntro } from "@/components/page-intro";
import { Photo } from "@/components/photo";
import { CtaBand } from "@/components/cta-band";
import { buttonClass } from "@/components/button";
import { constructionServices } from "@/content/services";
import { photos } from "@/content/photos";

export const metadata: Metadata = {
  title: "Tjänster – byggentreprenad i Stockholm",
  description:
    "Prefabmontage, betongarbeten, nybyggnation, om- och tillbyggnad, fasad och tak, renovering, snickeri och rivning. Totalentreprenad eller delentreprenad i Stockholm.",
  alternates: { canonical: "/tjanster" },
};

const frames = ["aspect-[4/3]", "aspect-[5/4]", "aspect-[16/10]", "aspect-[4/5]"];

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        crumbs={[{ name: "Tjänster", href: "/tjanster" }]}
        title="Från grund till färdig fasad"
        lead="Vi utför hela åtaganden som totalentreprenör – eller delar av bygget, där ni behöver oss. Betong, prefab och snickeri finns i samma organisation, vilket gör planeringen enklare och vägen till beslut kortare."
      />

      <nav aria-label="Tjänster på sidan" className="wrap">
        <ul className="flex flex-wrap gap-2 border-y border-line py-4">
          {constructionServices.map((s) => (
            <li key={s.slug}>
              <a
                href={`#${s.slug}`}
                className="inline-flex min-h-10 items-center gap-2 rounded-full border border-line-strong px-4 text-[0.9375rem] font-medium transition-colors hover:border-ink hover:bg-ink hover:text-paper"
              >
                <span className="t-code text-muted">{s.code}</span>
                {s.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="wrap py-16 sm:py-24">
        {constructionServices.map((s, i) => {
          const flip = i % 2 === 1;
          return (
            <section
              key={s.slug}
              id={s.slug}
              aria-labelledby={`${s.slug}-titel`}
              className="grid-12 gap-y-8 border-t border-ink py-12 first:border-t-0 first:pt-0 sm:py-16 lg:py-20"
            >
              <div
                className={`col-span-12 lg:col-span-7 ${flip ? "lg:order-2 lg:col-start-6" : ""}`}
              >
                <Photo
                  photo={s.image}
                  frame={frames[i % frames.length]}
                  sizes="(min-width: 1024px) 56vw, 100vw"
                  reveal
                />
              </div>
              <div
                className={`col-span-12 flex flex-col lg:col-span-4 ${
                  flip ? "lg:order-1 lg:col-start-1" : "lg:col-start-9"
                }`}
              >
                <span className="t-figure text-[4.5rem] text-concrete sm:text-[6rem]" aria-hidden="true">
                  {s.code}
                </span>
                <h2 id={`${s.slug}-titel`} className="t-h2 mt-4">
                  {s.name}
                </h2>
                <p className="mt-5 text-ink/80">{s.intro}</p>
                <ul className="mt-6 border-t border-line text-[0.9375rem]">
                  {s.includes.slice(0, 4).map((item) => (
                    <li key={item} className="border-b border-line py-2.5">
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href={`/tjanster/${s.slug}`} className={buttonClass("outline", "mt-8 self-start")}>
                  Läs mer<span className="sr-only"> om {s.name}</span>
                </Link>
              </div>
            </section>
          );
        })}
      </div>

      <section aria-labelledby="fastighet" className="on-dark bg-ink text-paper">
        <div className="wrap grid-12 gap-y-10 py-20 sm:py-28">
          <div className="col-span-12 lg:col-span-6">
            <h2 id="fastighet" className="t-display">
              Fastighets&shy;service
            </h2>
            <p className="t-lead mt-8 max-w-lg text-paper/80">
              För bostadsrättsföreningar och fastighetsägare erbjuder vi fastighetsskötsel, underhållsplaner,
              markarbeten, trädgårdsservice och snöröjning.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/brf-fastighetsagare" className={buttonClass("signal")}>
                För BRF & fastighetsägare
              </Link>
              <Link href="/brf-fastighetsagare/fastighetsskotsel" className={buttonClass("outline-inverse")}>
                Fastighetsskötsel
              </Link>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8">
            <Photo
              photo={photos.markarbetenSkolgard2}
              frame="aspect-[4/3]"
              sizes="(min-width: 1024px) 40vw, 100vw"
              caption
            />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
