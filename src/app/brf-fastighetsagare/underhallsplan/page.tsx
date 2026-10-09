import type { Metadata } from "next";
import Link from "next/link";

import { PageIntro } from "@/components/page-intro";
import { CtaBand } from "@/components/cta-band";
import { buttonClass } from "@/components/button";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Underhållsplan för BRF i Stockholm",
  description:
    "Vi hjälper bostadsrättsföreningar och fastighetsägare i Stockholm att ta fram, uppdatera och administrera en underhållsplan – vad som ska göras, när och till vilken kostnad.",
  alternates: { canonical: "/brf-fastighetsagare/underhallsplan" },
};

const contents = [
  { word: "Vad", text: "Vilka åtgärder fastigheten behöver – från tak och fasad till stammar och installationer." },
  { word: "När", text: "När åtgärderna bör genomföras, så att underhållet kan planeras i god tid." },
  { word: "Kostnad", text: "Vad åtgärderna beräknas kosta, som underlag för budget och avgifter." },
];

const help = [
  {
    title: "Framtagning",
    text: "Vi går igenom fastigheten och tar fram planen tillsammans med styrelsen eller förvaltaren.",
  },
  {
    title: "Uppdatering",
    text: "Planen ska leva. Vi uppdaterar den när åtgärder genomförs eller förutsättningarna ändras.",
  },
  {
    title: "Administration",
    text: "Vi hjälper till att hålla ordning på planen så att den är användbar i styrelsearbetet.",
  },
];

export default function MaintenancePlanPage() {
  return (
    <>
      <PageIntro
        crumbs={[
          { name: "För BRF & fastighetsägare", href: "/brf-fastighetsagare" },
          { name: "Underhållsplan", href: "/brf-fastighetsagare/underhallsplan" },
        ]}
        title={"Underhålls\u00ADplan"}
        lead="En underhållsplan fungerar som fastighetens hälsodeklaration. Med den kan ni minska kostnaderna och undvika plötsliga driftstörningar och akuta reparationer."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/kontakt?tjanst=underhallsplan&kund=brf#offert" className={buttonClass("signal")}>
            Begär offert på underhållsplan
          </Link>
        </div>
      </PageIntro>

      <section aria-labelledby="innehall-plan" className="on-dark bg-ink text-paper">
        <div className="wrap py-20 sm:py-28">
          <h2 id="innehall-plan" className="t-h3 max-w-xl">
            Kort sagt innehåller en underhållsplan tre saker
          </h2>
          <ol className="mt-14 grid gap-y-12 md:grid-cols-3 md:gap-x-8">
            {contents.map((c) => (
              <li key={c.word} className="border-t border-line-inverse pt-6">
                <p
                  className="text-[clamp(3rem,6.5vw,6rem)] leading-[0.9] font-[800] tracking-[-0.045em]"
                  style={{ fontVariationSettings: '"wdth" 120' }}
                >
                  {c.word}
                </p>
                <p className="mt-5 max-w-xs text-paper/75">{c.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="vad-ar" className="wrap py-20 sm:py-28">
        <div className="grid-12 gap-y-10">
          <h2 id="vad-ar" className="t-h2 col-span-12 lg:col-span-4">
            Vad är en underhållsplan?
          </h2>
          <div className="prose-body col-span-12 text-[1.125rem] text-ink/85 lg:col-span-6 lg:col-start-6">
            <p>
              Underhållsplanen är en del av den tekniska förvaltningen och ett av styrelsens viktigaste
              arbetsredskap. Den ser till att det schemalagda underhållet av fastigheten planeras på bästa sätt.
            </p>
            <p>
              Planen beskriver fastighetens framtida behov av underhåll. Alla fastigheter behöver underhållas för att
              behålla sin standard och sitt värde – därför är det viktigt med en underhållsplan även för nyare
              byggnader.
            </p>
            <p>
              En genomtänkt plan är inte bara bra för fastigheten. Den är också ett hjälpsamt verktyg när styrelsen
              gör budget och sätter avgifter.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="hjalp" className="border-t border-line bg-white/50 py-20 sm:py-28">
        <div className="wrap grid-12 gap-y-10">
          <div className="col-span-12 lg:col-span-4">
            <h2 id="hjalp" className="t-h2">
              Så hjälper vi er
            </h2>
            <p className="mt-6 text-ink/80">
              Vi kan både det praktiska arbetet och den ekonomiska förvaltningen. Det gör att vi tillsammans med er kan
              ta fram en plan som håller – och sedan utföra åtgärderna när det är dags.
            </p>
          </div>
          <ol className="col-span-12 lg:col-span-7 lg:col-start-6">
            {help.map((h, i) => (
              <li key={h.title} className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-ink py-6">
                <span className="t-figure text-[3rem]">{i + 1}</span>
                <div>
                  <h3 className="t-h3">{h.title}</h3>
                  <p className="mt-2 text-ink/75">{h.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        title="Behöver er förening en underhållsplan?"
        text={`Kontakta oss så berättar vi hur vi kan hjälpa er – via formuläret, på ${site.email} eller på telefon.`}
        href="/kontakt?tjanst=underhallsplan&kund=brf#offert"
      />
    </>
  );
}
