import { photos, type Photo } from "./photos";

export type ProjectFigure = { value: string; unit: string; label: string };

export type Project = {
  slug: string;
  name: string;
  location: string;
  /** Who the work was done for or together with, as stated by the company. */
  partner?: string;
  partnerRole?: "Uppdragsgivare" | "I samarbete med";
  /** Work performed, short labels. */
  scope: string[];
  /** One sentence used on cards. */
  summary: string;
  description: string[];
  figures?: ProjectFigure[];
  image: Photo;
  gallery: Photo[];
  services: string[];
};

/**
 * Projects and facts come from the reference page on swedenbyggkraft.se.
 * Galleries only contain photos that can be tied to the project with
 * confidence; the detail page shows a placeholder for the rest.
 */
export const projects: Project[] = [
  {
    slug: "fyren-nynashamn",
    name: "Fyren",
    location: "Nynäshamn",
    partner: "Consto AB",
    partnerRole: "I samarbete med",
    scope: ["Gjutning", "Betongarbeten"],
    summary: "Omfattande gjutarbeten i kvarteret Fyren vid vattnet i Nynäshamn.",
    description: [
      "Tillsammans med Consto AB har vi utfört omfattande gjutarbeten i projektet Fyren i Nynäshamn – ett nytt bostadskvarter vid vattnet med ett höghus som landmärke."
    ],
    image: photos.fyrenFlygbild,
    gallery: [photos.fyrenVisionsbild],
    services: ["betongarbeten"],
  },
  {
    slug: "solna",
    name: "Betongbalkar i Solna",
    location: "Solna",
    partner: "Montera i Storfors AB",
    partnerRole: "Uppdragsgivare",
    scope: ["Prefabmontage", "Montage av betongbalkar"],
    summary: "Montage av betongbalkar på 35 ton med 28 meters spännvidd.",
    description: [
      "Vi fick uppdraget att hjälpa Montera i Storfors AB med montage av betongbalkar i Solna. Varje balk vägde 35 ton och hade en spännvidd på 28 meter.",
      "Tunga lyft med långa element ställer höga krav på planering, kommunikation med kranföraren och precision i varje moment – från anslagning till slutlig infästning.",
    ],
    figures: [
      { value: "28", unit: "m", label: "spännvidd per balk" },
      { value: "35", unit: "ton", label: "vikt per balk" },
    ],
    image: photos.solnaBetongbalk,
    gallery: [],
    services: ["prefabmontage"],
  },
  {
    slug: "saltsjo-boo",
    name: "Bostäder i Saltsjö-Boo",
    location: "Saltsjö-Boo, Nacka",
    partner: "Montera i Storfors AB",
    partnerRole: "I samarbete med",
    scope: ["Stommontage", "Betongväggar och pelare", "Borrning av dubbar"],
    summary: "Stommontage av skalväggar och pelare i betong på färdig platta.",
    description: [
      "Tillsammans med Montera i Storfors AB bygger vi hus i Saltsjö-Boo. På den färdiga betongplattan har vi monterat skalväggar och pelare i betong, borrat dubbar och utfört stommontaget.",
    ],
    image: photos.saltsjobooPrefabvaggar,
    gallery: [],
    services: ["prefabmontage"],
  },
  {
    slug: "saltsjo-boo-lokaler",
    name: "Nya lokaler och kontor i Saltsjö-Boo",
    location: "Saltsjö-Boo, Nacka",
    partner: "Montera i Storfors AB",
    partnerRole: "I samarbete med",
    scope: ["Betonggjutning", "Trappmontage"],
    summary: "Betonggjutning och montage av trapplöp för nya lokaler och kontor.",
    description: [
      "I ett projekt med nya lokaler och kontor i Saltsjö-Boo utför vi, tillsammans med Montera i Storfors AB, betonggjutning och montage av trappor.",
      "Prefabricerade trapplöp lyfts på plats med kran och ansluts till bjälklagen – ett moment som kräver precision även under vinterförhållanden.",
    ],
    image: photos.saltsjobooTrappa,
    gallery: [photos.saltsjobooTrappa2],
    services: ["prefabmontage", "betongarbeten"],
  },
  {
    slug: "patriam-nacka-strand",
    name: "Patriam",
    location: "Nacka Strand",
    partner: "Serneke",
    partnerRole: "Uppdragsgivare",
    scope: ["Husmontage", "Fasadmontage"],
    summary: "Efter husmontaget fick vi förtroendet att även montera fasaden.",
    description: [
      "I bostadsprojektet Patriam i Nacka Strand utförde vi först husmontage. Därefter fick vi förtroendet att även montera fasaden åt vår kund Serneke.",
      "Att få ett utökat uppdrag i samma projekt är för oss ett kvitto på att samarbetet fungerar – och att vi håller det vi lovar.",
    ],
    image: photos.patriamVisionsbild,
    gallery: [],
    services: ["fasad-och-tak", "nybyggnation"],
  },
  {
    slug: "varmdo-hus",
    name: "Hus på Värmdö",
    location: "Värmdö",
    partner: "Familjen Byggare AB",
    partnerRole: "I samarbete med",
    scope: ["Husbyggnation"],
    summary: "Nybyggda hus nära naturen, tillsammans med Familjen Byggare.",
    description: [
      "Tillsammans med Familjen Byggare AB bygger vi hus nära naturen på Värmdö.",
    ],
    image: photos.varmdoHus,
    gallery: [],
    services: ["nybyggnation", "snickeri"],
  },
  {
    slug: "taby-hus",
    name: "Flerbostadshus i Täby",
    location: "Täby",
    scope: ["Innerväggar", "Fönsterbänkar", "Gipsarbete", "Fasadarbete"],
    summary: "Innerväggar, fönsterbänkar, gipsarbete och fasadarbete.",
    description: [
      "I Täby utför vi både invändiga och utvändiga arbeten i ett flerbostadshus: innerväggar, fönsterbänkar och gipsarbete inne, och fasadarbete från ställningen ute.",
    ],
    image: photos.tabyFasad,
    gallery: [photos.tabyStallning, photos.tabyInnervagg, photos.tabyFasad2, photos.tabyFasad3],
    services: ["snickeri", "fasad-och-tak"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
