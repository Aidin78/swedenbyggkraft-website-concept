import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { PageIntro } from "@/components/page-intro";
import { Photo } from "@/components/photo";
import { CtaBand } from "@/components/cta-band";
import { buttonClass } from "@/components/button";
import { photos } from "@/content/photos";
import { clientTypes, indoorTasks, outdoorTasks, propertyServices } from "@/content/property";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "För BRF & fastighetsägare – fastighetsskötsel i Stockholm",
  description:
    "Fastighetsskötsel, underhållsplan, yttre och inre kontroll, markarbeten, trädgårdsservice och snöröjning för bostadsrättsföreningar och fastighetsägare i Stockholm.",
  alternates: { canonical: "/brf-fastighetsagare" },
};

const reasons = [
  {
    title: "En personlig fastighetsskötare",
    text: "Ni får en fast kontakt som känner fastigheten och tar hand om helheten – inte ett nytt ansikte vid varje ärende.",
  },
  {
    title: "Avtal efter era behov",
    text: "Vad som ingår beror på fastigheten. Vi anpassar avtalet efter typ av byggnad, storlek och era önskemål.",
  },
  {
    title: "Färre oväntade kostnader",
    text: "Regelbunden tillsyn gör att skador och fel upptäcks tidigt, innan de hinner bli dyra.",
  },
  {
    title: "Byggföretaget finns redan på plats",
    text: "När något behöver repareras eller renoveras gör vi det själva – med samma kontakt och utan ny upphandling för varje litet jobb.",
  },
];

const quote = "/kontakt?kund=brf#offert";

export default function PropertyOwnersPage() {
  return (
    <>
      <PageIntro
        crumbs={[{ name: "För BRF & fastighetsägare", href: "/brf-fastighetsagare" }]}
        title={"Fastighets\u00ADservice för föreningar och fastighets\u00ADägare"}
        lead="Vi sköter drift och underhåll av bostads- och kommersiella fastigheter i Stockholms- och Mälarregionen – från daglig tillsyn och snöröjning till underhållsplaner och renoveringar."
        aside={
          <div className="border-t border-ink pt-4">
            <p className="t-meta text-muted">Vi arbetar för</p>
            <ul className="mt-3 space-y-1.5 font-semibold">
              {clientTypes.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        }
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={quote} className={buttonClass("signal")}>
            Begär offert
          </Link>
          <a href={site.phone.href} className={buttonClass("outline")}>
            Ring {site.phone.display}
          </a>
        </div>
      </PageIntro>

      <div className="wrap">
        <Photo
          photo={photos.markarbetenSkolgard}
          frame="aspect-[4/3] sm:aspect-[21/9]"
          sizes="(min-width: 1536px) 1440px, 100vw"
          preload
          caption
        />
      </div>

      <section aria-labelledby="varfor" className="wrap py-20 sm:py-28">
        <div className="grid-12 gap-y-10">
          <h2 id="varfor" className="t-h2 col-span-12 lg:col-span-4">
            Därför anlitar föreningar oss
          </h2>
          <div className="col-span-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
            {reasons.map((r) => (
              <div key={r.title} className="border-t-2 border-ink pt-5">
                <h3 className="text-[1.3125rem] font-bold leading-tight tracking-[-0.015em]">{r.title}</h3>
                <p className="mt-3 text-ink/75">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="tjanster-brf" className="border-t border-line bg-white/50 py-20 sm:py-28">
        <div className="wrap">
          <div className="grid-12 mb-12 gap-y-6">
            <h2 id="tjanster-brf" className="t-display col-span-12 lg:col-span-7">
              Våra tjänster för fastigheter
            </h2>
          </div>
          <ul className="border-t border-ink">
            {propertyServices.map((s) => (
              <li key={s.id} className="border-b border-line">
                <Link
                  href={s.href}
                  className="group grid items-center gap-x-8 gap-y-2 py-6 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)_auto]"
                >
                  <span
                    className="text-[1.625rem] font-[720] leading-tight tracking-[-0.025em] sm:text-[2rem]"
                    style={{ fontVariationSettings: '"wdth" 110' }}
                  >
                    {s.name}
                  </span>
                  <span className="text-ink/75">{s.summary}</span>
                  <span
                    aria-hidden="true"
                    className="hidden size-11 items-center justify-center rounded-full border border-line-strong transition-colors group-hover:border-ink group-hover:bg-signal md:flex"
                  >
                    <ArrowUpRight className="size-5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="inre-yttre" className="wrap py-20 sm:py-28">
        <div className="grid-12 gap-y-12">
          <div className="col-span-12 lg:col-span-4">
            <h2 id="inre-yttre" className="t-h2">
              Inre och yttre fastighets&shy;skötsel
            </h2>
            <p className="mt-6 text-ink/80">
              Exakt vad som ingår beror på fastigheten – ett hyreshus sköts inte som ett kontor eller en skola. Här är
              exempel på uppgifter vi tar hand om.
            </p>
            <Link href="/brf-fastighetsagare/fastighetsskotsel" className="link-underline mt-6 inline-block font-semibold">
              Mer om fastighetsskötsel
            </Link>
          </div>
          <div className="col-span-12 grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
            {[
              { title: "Inne", items: indoorTasks },
              { title: "Ute", items: outdoorTasks },
            ].map((group) => (
              <div key={group.title}>
                <h3 className="t-figure text-[4rem] text-concrete">{group.title}</h3>
                <ul className="mt-5 border-t border-ink">
                  {group.items.map((t) => (
                    <li key={t} className="border-b border-line py-3">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="plan" className="on-dark bg-ink text-paper">
        <div className="wrap grid-12 gap-y-10 py-20 sm:py-28">
          <div className="col-span-12 lg:col-span-7">
            <p
              aria-hidden="true"
              className="text-[clamp(3.5rem,10vw,9rem)] leading-[0.86] font-[800] tracking-[-0.05em]"
              style={{ fontVariationSettings: '"wdth" 120' }}
            >
              Vad.
              <br />
              När.
              <br />
              Kostnad.
            </p>
          </div>
          <div className="col-span-12 md:col-span-8 lg:col-span-4 lg:col-start-9 lg:self-end">
            <h2 id="plan" className="t-h3">
              Underhållsplanen är fastighetens hälsodeklaration
            </h2>
            <p className="mt-4 text-paper/75">
              Den visar vad som behöver göras, när det ska göras och vad det kommer att kosta – och är ett av styrelsens
              viktigaste verktyg för budget och avgifter. Vi tar fram planen tillsammans med er och hjälper till att
              hålla den uppdaterad.
            </p>
            <Link href="/brf-fastighetsagare/underhallsplan" className={buttonClass("signal", "mt-8")}>
              Om underhållsplan
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        title="Få en offert för er fastighet"
        text="Berätta vilken typ av fastighet det gäller och vad ni behöver hjälp med, så återkommer vi med ett förslag på upplägg."
        href={quote}
      />
    </>
  );
}
