import { photos, type Photo } from "./photos";

export type Service = {
  slug: string;
  /** Index code shown in service listings. */
  code: string;
  name: string;
  /** One line used in listings and navigation. */
  short: string;
  /** Opening paragraph on the detail page. */
  intro: string;
  body: string[];
  includes: string[];
  image: Photo;
  gallery: Photo[];
  relatedProjects: string[];
  /** Detail page lives outside /tjanster (property services). */
  href?: string;
  seo: { title: string; description: string };
};

export const services: Service[] = [
  {
    slug: "prefabmontage",
    code: "01",
    name: "Prefabmontage",
    short: "Montage av väggar, håldäck, balkar, pelare och trapplöp i betong.",
    intro:
      "Vi monterar prefabricerade betongelement för bostäder, kontor och lokaler – från de första väggarna på en färdig platta till komplett stomme.",
    body: [
      "Prefabmontage kräver noggrann planering, rätt lyftteknik och ett samspelt lag. Våra montörer arbetar med väggar, håldäck, pelare, balkar och trapplöp och ser till att varje element hamnar rätt, fogas och förankras enligt handlingarna.",
      "Vi arbetar ofta som underentreprenör åt total- och generalentreprenörer i Stockholmsområdet, men tar också hand om mindre stommar och kompletteringar.",
    ],
    includes: [
      "Montage av betongväggar och skalväggar",
      "Håldäcksbjälklag",
      "Pelare och balkar, även tunga och långa spännvidder",
      "Trapplöp och vilplan",
      "Borrning av dubbar och stomkomplettering",
    ],
    image: photos.prefabElementLyft,
    gallery: [photos.prefabVaggmontage, photos.prefabTrapphus, photos.prefabSkylift, photos.prefabBjalklag],
    relatedProjects: ["solna", "saltsjo-boo", "saltsjo-boo-lokaler"],
    seo: {
      title: "Prefabmontage i Stockholm",
      description:
        "Montage av prefabricerade betongelement – väggar, håldäck, balkar, pelare och trappor. Erfarna montörer för bostäder, kontor och lokaler i Stockholm.",
    },
  },
  {
    slug: "betongarbeten",
    code: "02",
    name: "Betongarbeten",
    short: "Gjutning och renovering av grunder, bjälklag, väggar och trappor.",
    intro:
      "Vi gjuter nya betongkonstruktioner och renoverar befintliga – grunder, bjälklag, väggar och trappor, med armering och isolering.",
    body: [
      "Betongarbeten är ofta det som avgör tidplanen för resten av bygget. Vi tar hand om formsättning, armering, gjutning och efterbehandling och samordnar med övriga entreprenörer på arbetsplatsen.",
      "Vi utför allt från stora gjutningar av bjälklag i flerbostadshus till grunder för villor och tillbyggnader.",
    ],
    includes: [
      "Formsättning och armering",
      "Gjutning av grunder, plattor och bjälklag",
      "Platsgjutna väggar och trappor",
      "Isolering av grund och platta",
      "Reparation och renovering av betong",
    ],
    image: photos.armeringKran,
    gallery: [photos.gjutningHav, photos.gjutningBjalklag, photos.betongForm, photos.betongVaggar],
    relatedProjects: ["fyren-nynashamn", "saltsjo-boo-lokaler"],
    seo: {
      title: "Betongarbeten i Stockholm",
      description:
        "Formsättning, armering och gjutning av grunder, bjälklag, väggar och trappor. Betongentreprenad för byggföretag, fastighetsägare och privatpersoner.",
    },
  },
  {
    slug: "nybyggnation",
    code: "03",
    name: "Nybyggnation",
    short: "Nyckelfärdiga hus, villor och flerbostadshus.",
    intro:
      "Vi bygger nytt – från nyckelfärdiga, arkitektritade villor till lägenheter och flerbostadshus, som totalentreprenör eller i samarbete med andra byggföretag.",
    body: [
      "Vi har lång erfarenhet av nybyggnation och tar ansvar för helheten: grund, stomresning, tak, fönster- och dörrmontage och färdigställande. Med en organisation som täcker både betong, prefab och snickeri kan vi hålla ihop stora delar av bygget själva.",
      "Vi åtar oss både små och stora nybyggnationer i Stockholm, Uppsala och Nynäshamn med omnejd.",
    ],
    includes: [
      "Nyckelfärdiga hus och villor",
      "Lägenheter och flerbostadshus",
      "Stomresning med tak, fönster- och dörrmontage",
      "Grund och betongarbeten",
    ],
    image: photos.nybyggnationStomme,
    gallery: [photos.prefabStomme, photos.varmdoHus, photos.trastomme],
    relatedProjects: ["varmdo-hus", "patriam-nacka-strand"],
    seo: {
      title: "Nybyggnation – byggentreprenad i Stockholm",
      description:
        "Nybyggnation av villor, nyckelfärdiga hus, lägenheter och flerbostadshus. Totalentreprenad med betong, stomme, tak och färdigställande.",
    },
  },
  {
    slug: "om-och-tillbyggnad",
    code: "04",
    name: "Om- och tillbyggnad",
    short: "Mer yta, nya funktioner och komplexa ROT-projekt.",
    intro:
      "Har ni vuxit ur huset eller lokalen? Vi bygger till, bygger på och bygger om – och hjälper gärna till med planeringen från början.",
    body: [
      "En tillbyggnad är ett bra sätt att få mer yta och öka fastighetens värde utan att behöva flytta. Vi tar hand om allt från grund och stomme till tak, väggar och invändiga ytskikt – oavsett om det gäller ett nytt rum, en påbyggnad eller ett garage.",
      "Vi är vana vid att arbeta i miljöer där verksamheten pågår eller där de boende bor kvar, och planerar arbetet så att störningarna blir så små som möjligt.",
    ],
    includes: [
      "Tillbyggnad och påbyggnad",
      "Ombyggnad av bostäder och lokaler",
      "Garage och komplementbyggnader",
      "Komplexa ROT-projekt",
      "Arbete under pågående verksamhet och med kvarboende",
    ],
    image: photos.tillbyggnadVilla,
    gallery: [photos.tillbyggnadBjalklag, photos.tillbyggnadFasad, photos.snickeriStomme],
    relatedProjects: ["taby-hus"],
    seo: {
      title: "Om- och tillbyggnad i Stockholm",
      description:
        "Tillbyggnad, påbyggnad och ombyggnad av hus och lokaler. Vi planerar och bygger – även under pågående verksamhet och med kvarboende.",
    },
  },
  {
    slug: "fasad-och-tak",
    code: "05",
    name: "Fasad\u00ADrenovering & tak\u00ADarbeten",
    short: "Fasadrenovering, takbyte, takfönster och plåtarbeten.",
    intro:
      "Fasaden och taket skyddar huset mot regn, vind och snö. Vi renoverar och bygger nytt – med tät konstruktion, torr insida och lång livslängd.",
    body: [
      "En fasad ska vara tät och samtidigt kunna andas för att ge ett bra inomhusklimat. Regelbundet underhåll är en förutsättning för att den ska hålla länge, och en välisolerad fasad håller nere uppvärmningskostnaderna. Vi utför alla typer av fasadrenoveringar och monterar fasader i nyproduktion.",
      "Vi lägger om tak av både plåt och tegel och ser till att fuktspärr och underlag är i gott skick. Vi monterar också takfönster – ett takfönster släpper in betydligt mer dagsljus än en takkupa av samma storlek – och utför plåtarbeten av alla slag.",
    ],
    includes: [
      "Fasadrenovering och fasadmontage",
      "Takbyte och takrenovering, plåt och tegel",
      "Montage av takfönster och fönster",
      "Plåtarbeten och takavvattning",
      "Montering av solceller",
    ],
    image: photos.takTakpannor,
    gallery: [photos.takPlatt, photos.fasadBalkonger, photos.takLaktning, photos.fasadStallning],
    relatedProjects: ["patriam-nacka-strand", "taby-hus"],
    seo: {
      title: "Fasadrenovering och takbyte i Stockholm",
      description:
        "Fasadrenovering, fasadmontage, takbyte, takfönster och plåtarbeten för villor, BRF:er och fastighetsägare i Stockholm.",
    },
  },
  {
    slug: "renovering",
    code: "06",
    name: "Renovering",
    short: "Totalrenovering av bostäder, kontor och lokaler.",
    intro:
      "Istället för att anlita hantverkare från flera olika firmor får ni hela kompetensen för en totalrenovering hos oss – av bostaden, kontoret eller lokalen.",
    body: [
      "Våra hantverkare tar sig an allt från mindre reparationer till totalrenoveringar som omfattar snickeri, måleri, el- och VVS-installationer och montering av kök och vitvaror. Vi tar oss an allt från fritidshus och uthus till större kommersiella lokaler.",
      "Ett kök eller badrum ska fungera i vardagen i många år. Därför planerar vi noga tillsammans med er innan vi börjar, och vi tar inga genvägar i utförandet.",
    ],
    includes: [
      "Köksrenovering",
      "Badrum och tvättstuga",
      "Balkonger och gemensamma utrymmen i BRF",
      "Målning och tapetsering",
      "Totalrenovering av lägenheter, hus och lokaler",
    ],
    image: photos.renoveringKok,
    gallery: [photos.renoveringKok2, photos.renoveringRum, photos.renoveringHall],
    relatedProjects: ["taby-hus"],
    seo: {
      title: "Renovering i Stockholm – kök, badrum och totalrenovering",
      description:
        "Totalrenovering av bostäder, kontor och lokaler. Kök, badrum, tvättstuga, balkonger, målning och snickeri – samlat hos ett byggföretag.",
    },
  },
  {
    slug: "snickeri",
    code: "07",
    name: "Snickeri & träarbete",
    short: "Stommar, takstolar, altaner, uterum och inredningssnickeri.",
    intro:
      "Våra snickare har många års erfarenhet, först som anställda och sedan som egna företagare. Vi bygger stommar och takstolar, men också altaner, trädäck, uterum och växthus.",
    body: [
      "En altan eller ett trädäck skapar ett extra rum i trädgården. Vi tar hand om mätning, planering och bygge – och kompletterar gärna med pergola, insynsskydd eller ett inglasat uterum. Ett isolerat och delvis uppvärmt uterum, en vinterträdgård, ger ännu fler månader av användning.",
      "I nyproduktion och vid tillbyggnader utför vi trästommar, bjälklag, takstolar, innerväggar och fönsterbänkar.",
    ],
    includes: [
      "Trästommar, bjälklag och takstolar",
      "Altaner, trädäck och trappor",
      "Uterum, växthus och vinterträdgårdar",
      "Pergolor och insynsskydd",
      "Innerväggar, gips och fönsterbänkar",
    ],
    image: photos.altanTrappa,
    gallery: [photos.snickeriTakstol, photos.altanTrall, photos.altanPlank, photos.trastomme2],
    relatedProjects: ["varmdo-hus", "taby-hus"],
    seo: {
      title: "Snickare i Stockholm – snickeri, altan och uterum",
      description:
        "Snickeri och träarbeten: trästommar, takstolar, altaner, trädäck, uterum och växthus. Erfarna snickare i Stockholm med omnejd.",
    },
  },
  {
    slug: "rivning",
    code: "08",
    name: "Rivning",
    short: "Från lättrivning till tung rivning inför om- och nybyggnad.",
    intro:
      "Med lång erfarenhet och bred kunskap utför vi all sorts rivning – från den minsta lättrivningen till den tyngsta tungrivningen.",
    body: [
      "Rivning är första steget i många om- och tillbyggnader. Vi river kontrollerat och lämnar en arbetsplats som är redo för nästa skede.",
      "Eftersom vi även bygger upp igen kan vi planera rivningen utifrån det som ska byggas – och ta ansvar för hela kedjan.",
    ],
    includes: [
      "Invändig rivning",
      "Lättrivning av väggar, tak och ytskikt",
      "Tung rivning",
      "Rivning inför om- och tillbyggnad",
    ],
    image: photos.rivningKorridor,
    gallery: [photos.rivningTrapphus],
    relatedProjects: [],
    seo: {
      title: "Rivning i Stockholm – lättrivning och tung rivning",
      description:
        "Invändig rivning, lättrivning och tung rivning inför om- och nybyggnad – utförd av ett byggföretag som även bygger upp igen.",
    },
  },
  {
    slug: "fastighetsskotsel",
    code: "09",
    name: "Fastighets\u00ADskötsel",
    short: "Drift och underhåll för BRF:er och fastighetsägare.",
    intro:
      "Personlig fastighetsskötsel för bostadsrättsföreningar, hyresfastigheter och kommersiella lokaler i Stockholms- och Mälarregionen.",
    body: [],
    includes: [],
    image: photos.markarbetenSkolgard,
    gallery: [],
    relatedProjects: [],
    href: "/brf-fastighetsagare/fastighetsskotsel",
    seo: {
      title: "Fastighetsskötsel i Stockholm",
      description: "Fastighetsskötsel för BRF:er och fastighetsägare.",
    },
  },
];

export const constructionServices = services.filter((s) => !s.href);

export function serviceHref(service: Service) {
  return service.href ?? `/tjanster/${service.slug}`;
}

export function getService(slug: string) {
  return constructionServices.find((s) => s.slug === slug);
}

export function serviceIndexItems(list: Service[] = services) {
  return list.map((s) => ({
    code: s.code,
    name: s.name,
    short: s.short,
    href: serviceHref(s),
    image: { src: s.image.src, alt: s.image.alt },
  }));
}
