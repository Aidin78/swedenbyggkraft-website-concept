import type { StaticImageData } from "next/image";

import altanTrall from "@/assets/photos/altan-trall.jpg";
import altanTrappa from "@/assets/photos/altan-trappa.jpg";
import altanPlank from "@/assets/photos/altan-plank.jpg";
import armeringKran from "@/assets/photos/armering-kran.jpg";
import betongForm from "@/assets/photos/betong-form.jpg";
import betongVaggar from "@/assets/photos/betong-vaggar.jpg";
import fasadBalkonger from "@/assets/photos/fasad-balkonger.jpg";
import fasadStallning from "@/assets/photos/fasad-stallning.jpg";
import fastighetEntre from "@/assets/photos/fastighet-entre.jpg";
import fyrenFlygbild from "@/assets/photos/fyren-flygbild.jpg";
import fyrenVisionsbild from "@/assets/photos/fyren-visionsbild.jpg";
import gjutningBjalklag from "@/assets/photos/gjutning-bjalklag.jpg";
import gjutningHav from "@/assets/photos/gjutning-hav.jpg";
import markarbetenGatsten from "@/assets/photos/markarbeten-gatsten.jpg";
import markarbetenSkolgard from "@/assets/photos/markarbeten-skolgard.jpg";
import markarbetenSkolgard2 from "@/assets/photos/markarbeten-skolgard-2.jpg";
import nybyggnationStomme from "@/assets/photos/nybyggnation-stomme.jpg";
import patriamVisionsbild from "@/assets/photos/patriam-visionsbild.jpg";
import prefabBjalklag from "@/assets/photos/prefab-bjalklag.jpg";
import prefabElementLyft from "@/assets/photos/prefab-element-lyft.jpg";
import prefabLyftKran from "@/assets/photos/prefab-lyft-kran.jpg";
import prefabSkylift from "@/assets/photos/prefab-skylift.jpg";
import prefabStomme from "@/assets/photos/prefab-stomme.jpg";
import prefabTrapphus from "@/assets/photos/prefab-trapphus.jpg";
import prefabVaggmontage from "@/assets/photos/prefab-vaggmontage.jpg";
import renoveringHall from "@/assets/photos/renovering-hall.jpg";
import renoveringKok from "@/assets/photos/renovering-kok.jpg";
import renoveringKok2 from "@/assets/photos/renovering-kok-2.jpg";
import renoveringRum from "@/assets/photos/renovering-rum.jpg";
import rivningKorridor from "@/assets/photos/rivning-korridor.jpg";
import rivningTrapphus from "@/assets/photos/rivning-trapphus.jpg";
import saltsjobooPrefabvaggar from "@/assets/photos/saltsjoboo-prefabvaggar.jpg";
import saltsjobooTrappa from "@/assets/photos/saltsjoboo-trappa.jpg";
import saltsjobooTrappa2 from "@/assets/photos/saltsjoboo-trappa-2.jpg";
import snickeriStomme from "@/assets/photos/snickeri-stomme.jpg";
import snickeriTakstol from "@/assets/photos/snickeri-takstol.jpg";
import solnaBetongbalk from "@/assets/photos/solna-betongbalk.jpg";
import tabyFasad from "@/assets/photos/taby-fasad.jpg";
import tabyFasad2 from "@/assets/photos/taby-fasad-2.jpg";
import tabyFasad3 from "@/assets/photos/taby-fasad-3.jpg";
import tabyInnervagg from "@/assets/photos/taby-innervagg.jpg";
import tabyStallning from "@/assets/photos/taby-stallning.jpg";
import takLaktning from "@/assets/photos/tak-laktning.jpg";
import takPlatt from "@/assets/photos/tak-platt.jpg";
import takTakpannor from "@/assets/photos/tak-takpannor.jpg";
import teamArbetsplats from "@/assets/photos/team-arbetsplats.jpg";
import teamGrund from "@/assets/photos/team-grund.jpg";
import teamInomhus from "@/assets/photos/team-inomhus.jpg";
import tillbyggnadBjalklag from "@/assets/photos/tillbyggnad-bjalklag.jpg";
import tillbyggnadFasad from "@/assets/photos/tillbyggnad-fasad.jpg";
import tillbyggnadVilla from "@/assets/photos/tillbyggnad-villa.jpg";
import tradgardEldstad from "@/assets/photos/tradgard-eldstad.jpg";
import tradgardGang from "@/assets/photos/tradgard-gang.jpg";
import tradgardTrappa from "@/assets/photos/tradgard-trappa.jpg";
import trastomme from "@/assets/photos/trastomme.jpg";
import trastomme2 from "@/assets/photos/trastomme-2.jpg";
import varmdoHus from "@/assets/photos/varmdo-hus.jpg";

export type Photo = {
  src: StaticImageData;
  alt: string;
  /** Short caption describing what the photo shows. */
  caption?: string;
  /** Architect's rendering supplied by the developer, not a site photo. */
  rendering?: boolean;
  /** Preferred focal point for object-position when cropped. */
  focus?: string;
};

/**
 * All photos are the company's own site photos from swedenbyggkraft.se,
 * except entries marked `rendering`, which are developer visualisations.
 */
export const photos = {
  armeringKran: {
    src: armeringKran,
    alt: "Två yrkesarbetare monterar armering mot en betongvägg med en tornkran i bakgrunden",
    caption: "Armeringsarbete",
    focus: "50% 35%",
  },
  gjutningBjalklag: {
    src: gjutningBjalklag,
    alt: "Arbetslag gjuter ett bjälklag med betongpump i vinterväder",
    caption: "Gjutning av bjälklag",
  },
  gjutningHav: {
    src: gjutningHav,
    alt: "Betonggjutning av bjälklag högt upp med utsikt över skärgården",
    caption: "Gjutning av bjälklag",
  },
  prefabLyftKran: {
    src: prefabLyftKran,
    alt: "Tornkran lyfter ett prefabricerat betongelement över en stomme under uppförande",
    caption: "Lyft av prefabelement",
  },
  prefabElementLyft: {
    src: prefabElementLyft,
    alt: "Betongelement hänger i kranen ovanför en flerbostadshusstomme",
    caption: "Prefabmontage",
  },
  prefabStomme: {
    src: prefabStomme,
    alt: "Stomme av prefabricerade betongelement med tornkran mot blå himmel",
    caption: "Stomresning i prefab",
  },
  prefabTrapphus: {
    src: prefabTrapphus,
    alt: "Prefabricerade trapplöp i betong uppställda framför en stomme under montage",
    caption: "Trapplöp klara för montage",
  },
  prefabBjalklag: {
    src: prefabBjalklag,
    alt: "Håldäcksbjälklag lyfts på plats med mobilkran",
    caption: "Montage av håldäck",
  },
  prefabVaggmontage: {
    src: prefabVaggmontage,
    alt: "Montör i fallskyddssele styr ett väggelement i betong på plats",
    caption: "Montage av väggelement",
  },
  prefabSkylift: {
    src: prefabSkylift,
    alt: "Montör i skylift fogar mellan två betongväggselement",
    caption: "Fogning av väggelement",
  },
  saltsjobooPrefabvaggar: {
    src: saltsjobooPrefabvaggar,
    alt: "Tre montörer framför uppställda betongväggar och en mobilkran i Saltsjö-Boo",
    caption: "Saltsjö-Boo",
  },
  saltsjobooTrappa: {
    src: saltsjobooTrappa,
    alt: "Ett trapplöp i betong lyfts med kran på en snötäckt arbetsplats",
    caption: "Trappmontage, Saltsjö-Boo",
  },
  saltsjobooTrappa2: {
    src: saltsjobooTrappa2,
    alt: "Montör tar emot ett betongtrapplöp som sänks ned med kran",
    caption: "Trappmontage, Saltsjö-Boo",
  },
  solnaBetongbalk: {
    src: solnaBetongbalk,
    alt: "En lång betongbalk hänger i kranlinor över arbetsplatsen i Solna",
    caption: "Betongbalk, 28 meter spännvidd",
  },
  fyrenFlygbild: {
    src: fyrenFlygbild,
    alt: "Flygbild över ett svängt flerbostadshus under uppförande med tornkranar",
    caption: "Fyren, Nynäshamn",
  },
  fyrenVisionsbild: {
    src: fyrenVisionsbild,
    alt: "Visionsbild av höghuset Fyren och kvarteret vid vattnet i Nynäshamn i kvällsljus",
    caption: "Visionsbild",
    rendering: true,
  },
  patriamVisionsbild: {
    src: patriamVisionsbild,
    alt: "Visionsbild av bostadshuset Patriam i Nacka Strand med mörk fasad och balkonger",
    caption: "Visionsbild",
    rendering: true,
  },
  varmdoHus: {
    src: varmdoHus,
    alt: "Nytt hus med vindskydd och fönsteröppningar bland tallar vid vattnet på Värmdö",
    caption: "Värmdö",
    focus: "70% 50%",
  },
  tabyFasad: {
    src: tabyFasad,
    alt: "Flerbostadshus med mörk fasad inklätt i byggnadsställning i Täby",
    caption: "Täby",
  },
  tabyFasad2: {
    src: tabyFasad2,
    alt: "Fasadarbete på flerbostadshus i Täby sett nerifrån längs byggnadsställningen",
    caption: "Fasadarbete, Täby",
  },
  tabyFasad3: {
    src: tabyFasad3,
    alt: "Byggnadsställning runt flerbostadshusets hörn i Täby",
    caption: "Täby",
  },
  tabyStallning: {
    src: tabyStallning,
    alt: "Byggnadsställning längs en mörk fasad med fönsteröppningar",
    caption: "Fasadarbete, Täby",
  },
  tabyInnervagg: {
    src: tabyInnervagg,
    alt: "Nyuppsatta gipsväggar och dörröppning i en lägenhet under produktion",
    caption: "Innerväggar, Täby",
  },
  betongForm: {
    src: betongForm,
    alt: "Formsättning och armering för en grund i bergig terräng",
    caption: "Formsättning av grund",
  },
  betongVaggar: {
    src: betongVaggar,
    alt: "Betongväggar i ett källarplan under uppförande mellan befintliga hus",
    caption: "Platsgjutna väggar",
  },
  nybyggnationStomme: {
    src: nybyggnationStomme,
    alt: "Flerbostadshus i betong under uppförande med tornkran",
    caption: "Nybyggnation",
  },
  rivningKorridor: {
    src: rivningKorridor,
    alt: "Lång korridor där innertak och ytskikt har rivits inför ombyggnad",
    caption: "Invändig rivning",
  },
  rivningTrapphus: {
    src: rivningTrapphus,
    alt: "Trapphus med välvt fönster under ombyggnad efter invändig rivning",
    caption: "Ombyggnad efter rivning",
  },
  snickeriTakstol: {
    src: snickeriTakstol,
    alt: "Snickare reser takstolar i trä under väderskydd",
    caption: "Takstolar och stomme i trä",
  },
  snickeriStomme: {
    src: snickeriStomme,
    alt: "Trästomme med öppningar för fönster och dörrar inne i ett väderskydd",
    caption: "Trästomme",
  },
  tillbyggnadBjalklag: {
    src: tillbyggnadBjalklag,
    alt: "Bjälklag i trä byggs på taket till en befintlig byggnad",
    caption: "Påbyggnad i trä",
  },
  tillbyggnadFasad: {
    src: tillbyggnadFasad,
    alt: "Ny fasad med fönster längs en ställning vid en påbyggnad",
    caption: "Påbyggnad",
  },
  tillbyggnadVilla: {
    src: tillbyggnadVilla,
    alt: "Vit villa med byggnadsställning under om- och tillbyggnad",
    caption: "Om- och tillbyggnad av villa",
  },
  trastomme: {
    src: trastomme,
    alt: "Stomme i trä för en lång byggnad i skogsmiljö",
    caption: "Stomme i trä",
  },
  trastomme2: {
    src: trastomme2,
    alt: "Trästomme med stolpar och takbjälkar sedd inifrån",
    caption: "Stomme i trä",
  },
  altanTrappa: {
    src: altanTrappa,
    alt: "Ny altan i tryckimpregnerat trä med bred trappa framför ett rött trähus",
    caption: "Altan med trappa",
  },
  altanTrall: {
    src: altanTrall,
    alt: "Trall läggs på en ny altan intill ett hus",
    caption: "Altanbygge",
  },
  altanPlank: {
    src: altanPlank,
    alt: "Insynsskydd i liggande trä framför en uteplats med plattor",
    caption: "Insynsskydd och uteplats",
  },
  takTakpannor: {
    src: takTakpannor,
    alt: "Nylagt tak med svarta betongpannor och takfönster",
    caption: "Takbyte",
  },
  takPlatt: {
    src: takPlatt,
    alt: "Hantverkare monterar takavvattning och plåt på ett tegeltak",
    caption: "Plåt och takavvattning",
  },
  takLaktning: {
    src: takLaktning,
    alt: "Läkt och underlagspapp på ett tak inför pannläggning",
    caption: "Läktning inför takbyte",
  },
  fasadStallning: {
    src: fasadStallning,
    alt: "Byggnadsställning längs en fasad under renovering",
    caption: "Fasadarbete",
  },
  fasadBalkonger: {
    src: fasadBalkonger,
    alt: "Fasad med träpanel och balkonger där en montör arbetar från balkongen",
    caption: "Fasad- och balkongmontage",
  },
  renoveringKok: {
    src: renoveringKok,
    alt: "Renoverat kök i ljusgrått med öppna hyllor och fiskbensparkett",
    caption: "Köksrenovering",
  },
  renoveringKok2: {
    src: renoveringKok2,
    alt: "Kök med köksö, vedspis i nisch och fiskbensgolv efter renovering",
    caption: "Köksrenovering",
  },
  renoveringRum: {
    src: renoveringRum,
    alt: "Ljust rum med fiskbensparkett efter totalrenovering",
    caption: "Totalrenovering",
  },
  renoveringHall: {
    src: renoveringHall,
    alt: "Hall med nya fyllningsdörrar och trappa i trä",
    caption: "Renovering av hall",
  },
  markarbetenSkolgard: {
    src: markarbetenSkolgard,
    alt: "Grävmaskiner arbetar på en skolgård framför en gul tegelbyggnad",
    caption: "Markarbeten",
  },
  markarbetenSkolgard2: {
    src: markarbetenSkolgard2,
    alt: "Grävmaskin schaktar på en innergård framför en äldre skolbyggnad",
    caption: "Schakt och markarbeten",
  },
  markarbetenGatsten: {
    src: markarbetenGatsten,
    alt: "Nylagd gatsten i solfjädersmönster längs en trappa",
    caption: "Stensättning",
  },
  tradgardGang: {
    src: tradgardGang,
    alt: "Gjuten trädgårdsgång mellan upphöjda odlingsbäddar",
    caption: "Trädgårdsanläggning",
  },
  tradgardEldstad: {
    src: tradgardEldstad,
    alt: "Rund eldstad av natursten med plattsatt yta omkring",
    caption: "Stensättning och eldstad",
  },
  tradgardTrappa: {
    src: tradgardTrappa,
    alt: "Trädgårdstrappa i trä med planteringar längs sidorna",
    caption: "Trädgårdstrappa",
  },
  fastighetEntre: {
    src: fastighetEntre,
    alt: "Entré med trädäck och vitt staket vid ett flerfamiljshus",
    caption: "Utemiljö",
  },
  teamArbetsplats: {
    src: teamArbetsplats,
    alt: "Sex medarbetare i varselkläder framför ett bostadshus under byggnation",
    caption: "Medarbetare på arbetsplatsen",
  },
  teamGrund: {
    src: teamGrund,
    alt: "Arbetslag i varselkläder och hjälmar på en arbetsplats",
    caption: "Arbetslaget",
  },
  teamInomhus: {
    src: teamInomhus,
    alt: "Gruppbild med drygt femton medarbetare i varselkläder",
    caption: "Sweden Bygg Kraft",
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;
