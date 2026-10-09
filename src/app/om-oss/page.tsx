import type { Metadata } from "next";

import { PageIntro } from "@/components/page-intro";
import { Photo } from "@/components/photo";
import { CtaBand } from "@/components/cta-band";
import { PartnerList } from "@/components/partner-list";
import { photos } from "@/content/photos";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Om oss – byggföretag med helhetsåtagande",
  description:
    "Sweden Bygg Kraft AB är ett byggföretag i Stockholm med helhetsåtagande, från idé till färdig byggnad. Byggnads kollektivavtal, F-skatt och ID06 för alla anställda.",
  alternates: { canonical: "/om-oss" },
};

const values = [
  {
    name: "Värde",
    text: "Vi vill skapa värde i det vi levererar. Därför prioriterar vi kundens krav och önskemål, följer upp och tar vara på erfarenheter för att hitta enkla och hållbara lösningar.",
  },
  {
    name: "Tilltro",
    text: "Det ska vara enkelt och givande att göra affärer med oss, och vi håller det vi lovar. Kunden ska känna sig trygg med oss som byggentreprenör.",
  },
  {
    name: "Etik",
    text: "Vi följer de lagar och regler som gäller. Det ger lösningar av hög kvalitet och en trygg och säker arbetsplats.",
  },
  {
    name: "Ansvar",
    text: "Vi lever som vi lär och tar ansvar gentemot samhället och miljön. Jämställdhet är en självklar del av hur vi möter människor.",
  },
  {
    name: "Respekt",
    text: "Vi värdesätter kunskapen och mångfalden hos våra medarbetare och behandlar varandra professionellt och rättvist.",
  },
];

const teamValues = ["Glädje", "Ödmjukhet", "Stolthet", "Respekt", "Ansvar", "Kamratskap"];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        crumbs={[{ name: "Om oss", href: "/om-oss" }]}
        title={"Ett byggföretag med helhets\u00ADåtagande"}
        lead="Vår affärsidé är att bedriva entreprenad inom bygg – från idé till färdig byggnad. Tjänsterna sträcker sig från byggservice till ny-, om- och tillbyggnad."
      />

      <div className="wrap">
        <Photo
          photo={photos.teamInomhus}
          frame="aspect-[4/3] sm:aspect-[21/9]"
          sizes="(min-width: 1536px) 1440px, 100vw"
          imgClassName="object-[50%_40%]"
          preload
          caption
        />
      </div>

      <section aria-labelledby="affarside" className="wrap py-20 sm:py-28">
        <div className="grid-12 gap-y-10">
          <h2 id="affarside" className="t-h2 col-span-12 lg:col-span-4">
            Så arbetar vi
          </h2>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <p className="t-lead text-ink/90">
              Vi är ett relativt litet bolag – och det är en fördel. En flexibel organisation, korta beslutsvägar och
              nära relationer gör att vi kan ta snabba beslut och anpassa oss efter kundens behov.
            </p>
            <div className="prose-body mt-8 text-ink/80">
              <p>
                Vi riktar oss framför allt till total- och generalentreprenörer i Stockholm, men arbetar även direkt åt
                fastighetsägare, bostadsrättsföreningar och privatpersoner. Vår specialitet är arbeten under pågående
                verksamhet och med kvarboende.
              </p>
              <p>
                Allt arbete utförs med ledorden miljö, kvalitet, tid och ekonomi. Det ger ett högt värde för
                beställaren och ett gott och långsiktigt samarbete. Våra kunders krav på flexibilitet, anpassning,
                miljö och servicenivå är viktiga för oss.
              </p>
              <p>
                Vi är huvudsakligen verksamma i Stockholm, men utför också uppdrag i Uppsala och Eskilstuna. Vårt
                kontor ligger i Hägersten.
              </p>
            </div>

            <dl className="mt-12 grid grid-cols-2 border-t border-ink sm:grid-cols-4">
              {["Miljö", "Kvalitet", "Tid", "Ekonomi"].map((w, i) => (
                <div key={w} className={`border-b border-line py-4 ${i % 2 ? "pl-4" : "pr-4"} sm:px-0 sm:pr-4`}>
                  <dt className="sr-only">Ledord {i + 1}</dt>
                  <dd
                    className="text-[1.625rem] font-[760] tracking-[-0.03em]"
                    style={{ fontVariationSettings: '"wdth" 112' }}
                  >
                    {w}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section aria-labelledby="varderingar" className="on-dark bg-ink text-paper">
        <div className="wrap py-20 sm:py-28">
          <h2 id="varderingar" className="t-display max-w-[12ch]">
            Det vi står för
          </h2>
          <dl className="mt-14 border-t border-line-inverse">
            {values.map((v) => (
              <div
                key={v.name}
                className="grid gap-x-10 gap-y-2 border-b border-line-inverse py-7 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:items-baseline"
              >
                <dt
                  className="text-[clamp(2rem,4.4vw,4rem)] leading-none font-[780] tracking-[-0.04em]"
                  style={{ fontVariationSettings: '"wdth" 118' }}
                >
                  {v.name}
                </dt>
                <dd className="max-w-xl text-paper/75">{v.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section aria-labelledby="laget" className="wrap py-20 sm:py-28">
        <div className="grid-12 gap-y-10">
          <div className="col-span-12 lg:col-span-5">
            <h2 id="laget" className="t-h2">
              Laget
            </h2>
            <p className="mt-6 max-w-md text-ink/80">
              Våra medarbetare är yrkesarbetare och projektledare inom betong, prefab, snickeri och fastighetsservice.
              Laget har en gemensam värdegrund som vi tar med oss ut på varje arbetsplats:
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {teamValues.map((v) => (
                <li key={v} className="rounded-full border border-ink px-4 py-1.5 text-[0.9375rem] font-semibold">
                  {v}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 grid grid-cols-2 gap-3 sm:gap-5 lg:col-span-6 lg:col-start-7">
            <Photo photo={photos.teamArbetsplats} frame="aspect-[4/5]" sizes="(min-width: 1024px) 24vw, 50vw" caption />
            <Photo photo={photos.teamGrund} frame="aspect-[4/5]" className="mt-16" sizes="(min-width: 1024px) 24vw, 50vw" caption />
          </div>
        </div>
      </section>

      <section aria-labelledby="trygghet" className="border-t border-line bg-white/50 py-20 sm:py-28">
        <div className="wrap grid-12 gap-y-10">
          <div className="col-span-12 lg:col-span-4">
            <h2 id="trygghet" className="t-h2">
              Ordning och reda
            </h2>
            <p className="mt-6 text-ink/80">
              Det ska vara tryggt att anlita oss. Därför har vi ordning på avtal, försäkringar och legitimation.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <dl className="grid border-t border-ink sm:grid-cols-2">
              {site.credentials.map((c) => (
                <div key={c.term} className="border-b border-line py-5 sm:odd:pr-6 sm:even:pl-6">
                  <dt className="t-meta text-muted">{c.term}</dt>
                  <dd className="mt-1 text-[1.1875rem] font-semibold">{c.detail}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10 border-l-2 border-signal pl-6">
              <h3 className="t-h3">ID06 på arbetsplatsen</h3>
              <p className="mt-3 max-w-xl text-ink/80">
                Alla som vistas på någon av våra arbetsplatser ska bära sitt ID06-kort synligt. ID06 är byggbranschens
                gemensamma system för legitimation och närvaroredovisning, med syftet att försvåra svartarbete och
                ekonomisk brottslighet och stärka sund konkurrens.
              </p>
              <a
                href="https://id06.se"
                className="link-underline mt-4 inline-block font-semibold"
                rel="noopener noreferrer"
                target="_blank"
              >
                Läs mer om ID06 på id06.se
              </a>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="miljo" className="wrap py-20 sm:py-28">
        <div className="grid-12 gap-y-8">
          <h2 id="miljo" className="t-h2 col-span-12 lg:col-span-4">
            Ansvarsfullt byggande
          </h2>
          <p className="t-lead col-span-12 text-ink/85 lg:col-span-7 lg:col-start-6">
            Vi anser att ett ansvarsfullt byggarbete är rätt väg mot de miljömål som leder till minskad miljöpåverkan
            och en bättre framtid. Vi ställer höga krav på oss själva, våra leverantörer och våra samarbetspartners för
            att utveckla miljöarbetet.
          </p>
        </div>
        <div className="mt-16">
          <PartnerList title="Vi har arbetat med bland andra" />
        </div>
      </section>

      <CtaBand title="Vill ni samarbeta med oss?" text="Vi söker gärna fler långsiktiga samarbetspartners. Hör av er om ett projekt eller för att boka ett möte på kontoret." />
    </>
  );
}
