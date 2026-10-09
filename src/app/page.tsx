import type { Metadata } from "next";
import Link from "next/link";

import { HomeHero } from "@/components/home-hero";
import { Photo } from "@/components/photo";
import { ServiceIndex } from "@/components/service-index";
import { ProjectCard } from "@/components/project-card";
import { ProcessSteps } from "@/components/process-steps";
import { DimensionLine } from "@/components/dimension-figure";
import { CtaBand } from "@/components/cta-band";
import { PartnerList } from "@/components/partner-list";
import { buttonClass } from "@/components/button";
import { photos } from "@/content/photos";
import { getProject } from "@/content/projects";
import { propertyServices } from "@/content/property";
import { serviceIndexItems } from "@/content/services";

export const metadata: Metadata = {
  title: { absolute: "Sweden Bygg Kraft – byggföretag och totalentreprenad i Stockholm" },
  description:
    "Byggföretag i Stockholm med helhetsåtagande: prefabmontage, betongarbeten, nybyggnation, om- och tillbyggnad, renovering och fastighetsskötsel. Begär en kostnadsfri offert.",
  alternates: { canonical: "/" },
};

const featured = ["fyren-nynashamn", "solna", "saltsjo-boo", "taby-hus"].map((slug) => getProject(slug)!);

export default function HomePage() {
  const [fyren, solna, saltsjo, taby] = featured;

  return (
    <>
      <HomeHero slides={[photos.prefabLyftKran, photos.gjutningBjalklag, photos.saltsjobooPrefabvaggar]} />

      {/* Who we are, in one statement and a short spec sheet. */}
      <section aria-labelledby="om" className="wrap py-20 sm:py-28 lg:py-36">
        <div className="grid-12 gap-y-12">
          <div className="col-span-12 lg:col-span-7">
            <h2 id="om" className="t-meta text-muted">
              Om Sweden Bygg Kraft
            </h2>
            <p className="t-h3 mt-6 max-w-[34ch] !text-[clamp(1.5rem,2.6vw,2.5rem)] !leading-[1.12]">
              Vi renoverar, bygger om och bygger nytt – åt bygg­entreprenörer, fastighetsägare, bostadsrätts­föreningar
              och privatpersoner.
            </p>
            <p className="mt-8 max-w-xl text-ink/80">
              Som ett relativt litet bolag har vi en flexibel organisation, korta beslutsvägar och nära relationer till
              våra kunder. Vår specialitet är arbeten under pågående verksamhet och med kvarboende – och vi håller det
              vi lovar.
            </p>
            <dl className="mt-12 grid max-w-2xl grid-cols-1 border-t border-ink sm:grid-cols-2">
              {[
                ["Verksamhet", "Stockholm, Uppsala och Eskilstuna"],
                ["Kollektivavtal", "Byggnads"],
                ["Legitimation", "ID06 för alla anställda"],
                ["Skatt", "Godkänd för F-skatt"],
              ].map(([term, detail]) => (
                <div key={term} className="flex justify-between gap-4 border-b border-line py-3.5 sm:odd:pr-6 sm:even:pl-6">
                  <dt className="t-meta pt-0.5 text-muted">{term}</dt>
                  <dd className="text-right text-[0.9375rem] font-semibold">{detail}</dd>
                </div>
              ))}
            </dl>
            <Link href="/om-oss" className="link-underline mt-8 inline-block font-semibold">
              Mer om företaget
            </Link>
          </div>
          <div className="col-span-12 sm:col-span-8 sm:col-start-5 lg:col-span-4 lg:col-start-9 lg:pt-24">
            <Photo
              photo={photos.teamArbetsplats}
              frame="aspect-[4/5]"
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 60vw, 100vw"
              caption
              reveal
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section aria-labelledby="tjanster" className="border-t border-line bg-white/50 py-20 sm:py-28">
        <div className="wrap">
          <div className="grid-12 mb-12 gap-y-6 sm:mb-16">
            <h2 id="tjanster" className="t-display col-span-12 lg:col-span-6">
              Tjänster
            </h2>
            <div className="col-span-12 md:col-span-8 lg:col-span-5 lg:col-start-8 lg:self-end">
              <p className="t-lead text-ink/85">
                Vi tar hela åtagandet som totalentreprenör – eller kliver in där ni behöver oss.
              </p>
              <Link href="/tjanster" className="link-underline mt-4 inline-block font-semibold">
                Alla tjänster
              </Link>
            </div>
          </div>
          <ServiceIndex items={serviceIndexItems()} />
        </div>
      </section>

      {/* Selected projects */}
      <section aria-labelledby="projekt" className="wrap py-20 sm:py-28 lg:py-36">
        <div className="mb-12 flex flex-col justify-between gap-6 sm:mb-16 md:flex-row md:items-end">
          <h2 id="projekt" className="t-display max-w-[12ch]">
            Utvalda projekt
          </h2>
          <Link href="/projekt" className={buttonClass("outline", "self-start md:self-auto")}>
            Alla projekt
          </Link>
        </div>

        <div className="grid-12 gap-y-14 sm:gap-y-20">
          <div className="col-span-12 lg:col-span-7">
            <ProjectCard project={fyren} frame="aspect-[4/3]" sizes="(min-width: 1024px) 56vw, 100vw" size="lg" />
          </div>
          <div className="col-span-12 sm:col-span-8 lg:col-span-4 lg:col-start-9 lg:mt-48">
            <ProjectCard project={solna} frame="aspect-square" sizes="(min-width: 1024px) 32vw, (min-width: 640px) 66vw, 100vw" />
          </div>
          <div className="col-span-12 sm:col-span-8 sm:col-start-5 lg:col-span-5 lg:col-start-2">
            <ProjectCard project={saltsjo} frame="aspect-[4/5]" sizes="(min-width: 1024px) 40vw, (min-width: 640px) 66vw, 100vw" />
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8 lg:mt-32">
            <ProjectCard project={taby} frame="aspect-[16/11]" sizes="(min-width: 1024px) 40vw, 100vw" />
          </div>
        </div>

        <div className="mt-20 sm:mt-28">
          <PartnerList title="Ett urval av uppdragsgivare och samarbetspartners" />
        </div>
      </section>

      {/* One project, one measurement. */}
      <section aria-labelledby="solna-matt" className="on-dark overflow-hidden bg-ink text-paper">
        <div className="wrap grid-12 gap-y-10 py-20 sm:py-28">
          <div className="col-span-12 lg:col-span-7">
            <p className="t-figure text-[clamp(7rem,24vw,20rem)] text-signal" aria-hidden="true">
              28<span className="ml-[0.06em] text-[0.32em] tracking-normal">m</span>
            </p>
            <DimensionLine label="Spännvidd per balk" className="mt-10 text-paper/70" />
          </div>
          <div className="col-span-12 md:col-span-8 lg:col-span-4 lg:col-start-9 lg:self-end">
            <h2 id="solna-matt" className="t-h3">
              Betongbalkar på 35 ton med 28 meters spännvidd
            </h2>
            <p className="mt-4 text-paper/75">
              I Solna monterade vi tunga betongbalkar åt Montera i Storfors AB. Långa lyft och snäva toleranser kräver
              noggrann planering och ett lag som arbetar tätt ihop.
            </p>
            <Link href="/projekt/solna" className="link-underline mt-6 inline-block font-semibold text-signal">
              Läs om projektet i Solna
            </Link>
          </div>
        </div>
      </section>

      {/* BRF & property owners */}
      <section aria-labelledby="brf" className="py-20 sm:py-28 lg:py-36">
        <div className="wrap grid-12 gap-y-12">
          <div className="col-span-12 lg:col-span-5">
            <h2 id="brf" className="t-display">
              För BRF & fastighets­ägare
            </h2>
            <p className="t-lead mt-8 max-w-md text-ink/85">
              En personlig fastighetsskötare, en genomtänkt underhållsplan och ett byggföretag som kan åtgärda det som
              behöver göras.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/brf-fastighetsagare" className={buttonClass("ink")}>
                Så hjälper vi föreningar
              </Link>
            </div>
            <Photo
              photo={photos.markarbetenSkolgard}
              frame="aspect-[3/2]"
              className="mt-14 hidden lg:block"
              sizes="(min-width: 1024px) 38vw, 100vw"
              caption
              reveal
            />
          </div>
          <ul className="col-span-12 border-t border-ink lg:col-span-6 lg:col-start-7">
            {propertyServices.map((s) => (
              <li key={s.id} className="border-b border-line">
                <Link href={s.href} className="group grid gap-1 py-5 sm:grid-cols-[14rem_1fr] sm:gap-6">
                  <span className="text-[1.1875rem] font-bold tracking-[-0.015em] group-hover:underline">{s.name}</span>
                  <span className="text-[0.9375rem] text-muted">{s.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section aria-labelledby="process" className="border-t border-line bg-paper-2/60 py-20 sm:py-28">
        <div className="wrap">
          <div className="grid-12 mb-14 gap-y-6">
            <h2 id="process" className="t-h2 col-span-12 lg:col-span-6">
              Så går ett uppdrag till
            </h2>
            <p className="col-span-12 text-ink/80 md:col-span-7 lg:col-span-4 lg:col-start-9 lg:self-end">
              Det ska vara enkelt och tryggt att anlita oss. Offerten är alltid kostnadsfri.
            </p>
          </div>
          <ProcessSteps />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
