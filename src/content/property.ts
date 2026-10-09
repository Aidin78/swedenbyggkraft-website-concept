import { photos, type Photo } from "./photos";

export type PropertyService = {
  id: string;
  name: string;
  summary: string;
  href: string;
  image?: Photo;
};

const fs = "/brf-fastighetsagare/fastighetsskotsel";

export const propertyServices: PropertyService[] = [
  {
    id: "fastighetsskotsel",
    name: "Fastighetsskötsel",
    summary:
      "En personlig fastighetsskötare som tar hand om hela fastigheten, med ett avtal anpassat efter era behov.",
    href: fs,
    image: photos.fastighetEntre,
  },
  {
    id: "underhallsplan",
    name: "Underhållsplan",
    summary:
      "Vi tar fram, uppdaterar och administrerar planen för vad som behöver göras, när och till vilken kostnad.",
    href: "/brf-fastighetsagare/underhallsplan",
  },
  {
    id: "kontroll",
    name: "Yttre och inre kontroll",
    summary:
      "Regelbunden tillsyn av utemiljö och installationer, så att fel upptäcks innan de blir dyra.",
    href: `${fs}#kontroll`,
  },
  {
    id: "markarbeten",
    name: "Markarbeten",
    summary: "Platt- och stensättning, kantsten, gångar och uppfarter.",
    href: `${fs}#markarbeten`,
    image: photos.markarbetenGatsten,
  },
  {
    id: "tradgardsservice",
    name: "Trädgårdsservice",
    summary: "Gräs, häckar, beskärning och trädfällning – och löpande skötsel av gårdar.",
    href: `${fs}#tradgardsservice`,
    image: photos.tradgardGang,
  },
  {
    id: "snorojning",
    name: "Snöröjning",
    summary: "Skottning och sandning av gångar och entréer samt snöskottning av tak.",
    href: `${fs}#snorojning`,
  },
  {
    id: "renovering",
    name: "Renovering och reparation",
    summary:
      "Balkonger, tvättstugor, trapphus och andra gemensamma utrymmen – och fasad och tak när det är dags.",
    href: "/tjanster/renovering",
  },
];

/** Examples of tasks from the company's own description of property care. */
export const indoorTasks = [
  "Laga droppande kranar och byta packningar",
  "Besiktning av lägenheter",
  "Trapphusstädning",
  "Posthantering",
  "Byte av belysning",
];

export const outdoorTasks = [
  "Sandning och snöskottning",
  "Snöskottning av tak",
  "Trädfällning och beskärning",
  "Gräsklippning och häckklippning",
  "Rensning av rabatter",
  "Byte av utomhusbelysning",
  "Städning av lekplatser",
];

export const indoorInspection = [
  "Säkerhet i fastigheten",
  "Funktion i tvättstugor",
  "Belysning",
  "Avhärdningsfilter och termometrar",
  "Spjäll, pumpar och kilremmar",
  "Undercentraler: pumpar, filter och vattentemperatur",
];

export const outdoorInspection = [
  "Innergårdar och gångvägar",
  "Grus-, sten- och asfaltsytor",
  "Gemensamma utrymmen utomhus",
  "Lampor och lyktor",
  "Vår- och höststädning",
  "Löpande tillsyn av ordning och renlighet",
];

export const clientTypes = [
  "Bostadsrättsföreningar",
  "Hyresfastigheter",
  "Kommersiella lokaler",
  "Förvaltningsbolag",
  "Enskilda fastighetsägare",
];
