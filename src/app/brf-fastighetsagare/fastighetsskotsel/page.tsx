import type { Metadata } from "next";
import Link from "next/link";

import { PageIntro } from "@/components/page-intro";
import { Photo } from "@/components/photo";
import { CtaBand } from "@/components/cta-band";
import { buttonClass } from "@/components/button";
import { photos } from "@/content/photos";
import { indoorInspection, indoorTasks, outdoorInspection, outdoorTasks } from "@/content/property";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Fastighetsskötsel i Stockholm – inre och yttre skötsel",
  description:
    "Personlig fastighetsskötsel för BRF:er, hyresfastigheter och kommersiella lokaler i Stockholms- och Mälarregionen: inre och yttre kontroll, markarbeten, trädgårdsservice och snöröjning.",
  alternates: { canonical: "/brf-fastighetsagare/fastighetsskotsel" },
};

const sections = [
  { id: "skotsel", label: "Löpande skötsel" },
  { id: "kontroll", label: "Yttre och inre kontroll" },
  { id: "markarbeten", label: "Markarbeten" },
  { id: "tradgardsservice", label: "Trädgårdsservice" },
  { id: "snorojning", label: "Snöröjning" },
];

function TaskList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 border-t border-ink">
      {items.map((t) => (
        <li key={t} className="border-b border-line py-2.5">
          {t}
        </li>
      ))}
    </ul>
  );
}

export default function PropertyCarePage() {
  return (
    <>
      <PageIntro
        crumbs={[
          { name: "För BRF & fastighetsägare", href: "/brf-fastighetsagare" },
          { name: "Fastighetsskötsel", href: "/brf-fastighetsagare/fastighetsskotsel" },
        ]}
        title={"Fastighets\u00ADskötsel"}
        lead="Vi utför drift och underhåll av bostads- och kommersiella hyresfastigheter i Stockholms- och Mälarregionen – på uppdrag av fastighetsbolag, förvaltare, enskilda fastighetsägare och bostadsrättsföreningar."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/kontakt?tjanst=fastighetsskotsel#offert" className={buttonClass("signal")}>
            Begär offert
          </Link>
          <a href={site.phone.href} className={buttonClass("outline")}>
            Ring {site.phone.display}
          </a>
        </div>
      </PageIntro>

      <div className="wrap grid-12 gap-y-10 border-t border-line pb-20 pt-12 sm:pb-28">
        <nav aria-label="På den här sidan" className="col-span-12 lg:col-span-3">
          <ul className="flex gap-2 overflow-x-auto pb-1 lg:sticky lg:top-28 lg:block lg:space-y-1 lg:overflow-visible">
            {sections.map((s) => (
              <li key={s.id} className="shrink-0">
                <a
                  href={`#${s.id}`}
                  className="inline-flex min-h-10 items-center rounded-full border border-line-strong px-4 text-[0.9375rem] font-medium hover:border-ink lg:rounded-none lg:border-0 lg:border-l-2 lg:border-line lg:px-4 lg:hover:border-ink"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="col-span-12 space-y-20 sm:space-y-28 lg:col-span-8 lg:col-start-5">
          <section id="skotsel" aria-labelledby="skotsel-titel">
            <h2 id="skotsel-titel" className="t-h2">
              En personlig fastighetsskötare
            </h2>
            <div className="prose-body mt-6 text-[1.125rem] text-ink/85">
              <p>
                Hos oss får ni en personlig fastighetsskötare som tar hand om hela fastigheten. Innehållet i avtalet
                anpassar vi efter era behov och önskemål.
              </p>
              <p>
                Många mindre och mellanstora fastighetsägare väljer att anlita någon för skötseln – för att tiden inte
                räcker till, för att kompetensen saknas eller för att det helt enkelt blir mer effektivt. Vi har
                kompetensen, erfarenheten och maskinerna för att göra det smidigt.
              </p>
            </div>
            <div className="mt-10 grid gap-10 sm:grid-cols-2">
              <div>
                <h3 className="t-h3">Inre skötsel</h3>
                <TaskList items={indoorTasks} />
              </div>
              <div>
                <h3 className="t-h3">Yttre skötsel</h3>
                <TaskList items={outdoorTasks} />
              </div>
            </div>
          </section>

          <section id="kontroll" aria-labelledby="kontroll-titel">
            <h2 id="kontroll-titel" className="t-h2">
              Yttre och inre kontroll
            </h2>
            <p className="t-lead mt-6 max-w-2xl text-ink/85">
              Regelbundna kontroller hjälper er att följa gällande regler – och lönar sig. En välskött fastighet har ett
              högre värde, och oväntade kostnader kan undvikas när fel upptäcks tidigt.
            </p>
            <div className="mt-10 grid gap-10 sm:grid-cols-2">
              <div>
                <h3 className="t-h3">Yttre kontroll</h3>
                <p className="mt-3 text-ink/75">
                  Kontinuerlig skötsel av innergårdar, gångvägar och gemensamma ytor ökar trivseln. Vi tar gärna
                  helhetsansvar – med större insatser som vår- och höststädning och löpande tillsyn under året.
                </p>
                <TaskList items={outdoorInspection} />
              </div>
              <div>
                <h3 className="t-h3">Inre kontroll</h3>
                <p className="mt-3 text-ink/75">
                  Slipp krångliga felanmälningar och driftstopp. Genom regelbundna kontroller av installationerna kan fel
                  åtgärdas innan de orsakar större problem.
                </p>
                <TaskList items={indoorInspection} />
              </div>
            </div>
          </section>

          <section id="markarbeten" aria-labelledby="mark-titel">
            <h2 id="mark-titel" className="t-h2">
              Markarbeten
            </h2>
            <div className="mt-8 grid gap-8 md:grid-cols-[1fr_1fr] md:items-start">
              <div className="prose-body text-ink/85">
                <p>
                  Platt- och stensättning gör mycket för intrycket av en gård eller trädgård. Vi anlägger och förnyar
                  ytor med plattor, marksten och kantsten – för gångar, entréer och uppfarter.
                </p>
                <p>Vi tar också bort gamla rabatter och förbereder ytor inför ny anläggning.</p>
              </div>
              <Photo photo={photos.markarbetenGatsten} frame="aspect-[4/3]" sizes="(min-width: 768px) 30vw, 100vw" caption />
            </div>
          </section>

          <section id="tradgardsservice" aria-labelledby="tradgard-titel">
            <h2 id="tradgard-titel" className="t-h2">
              Trädgårdsservice
            </h2>
            <p className="t-lead mt-6 max-w-2xl text-ink/85">
              Från gräsläggning och häckklippning till beskärning, trädfällning och löpande skötsel av trädgårdar och
              gårdar.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5">
              <Photo photo={photos.tradgardGang} frame="aspect-[4/3]" className="col-span-2 sm:col-span-1" sizes="(min-width: 640px) 32vw, 100vw" caption />
              <Photo photo={photos.tradgardTrappa} frame="aspect-[4/5]" sizes="(min-width: 640px) 32vw, 50vw" caption />
              <Photo photo={photos.tradgardEldstad} frame="aspect-[4/5]" className="sm:hidden" sizes="50vw" caption />
            </div>
            <ul className="mt-10 grid gap-x-10 border-t border-ink sm:grid-cols-2">
              {[
                "Gräsläggning och gräsklippning",
                "Häckklippning och beskärning",
                "Trädfällning",
                "Trädgårdsanläggning: altan, pergola och trädäck",
                "Stensättning och marksten",
                "Fasadmålning",
              ].map((t) => (
                <li key={t} className="border-b border-line py-2.5">
                  {t}
                </li>
              ))}
            </ul>
          </section>

          <section id="snorojning" aria-labelledby="sno-titel" className="hatch p-6 sm:p-10">
            <h2 id="sno-titel" className="t-h2">
              Snöröjning
            </h2>
            <p className="mt-5 max-w-xl bg-paper-2/80 text-ink/85">
              Skottning och sandning av gångar, entréer och gårdar – och snöskottning av tak – så att fastigheten är
              framkomlig och säker hela vintern. Snöröjning kan ingå i ert skötselavtal.
            </p>
          </section>
        </div>
      </div>

      <CtaBand
        title="Ett skötselavtal som passar er fastighet"
        text="Berätta om fastigheten – typ, storlek och vad ni behöver hjälp med – så tar vi fram ett förslag."
        href="/kontakt?kund=brf#offert"
      />
    </>
  );
}
