export const site = {
  name: "Sweden Bygg Kraft AB",
  shortName: "Sweden Bygg Kraft",
  url: "https://swedenbyggkraft.se",
  description:
    "Byggföretag i Stockholm med helhetsåtagande – prefabmontage, betongarbeten, nybyggnation, renovering och fastighetsskötsel för företag, BRF:er och privatpersoner.",
  orgNumber: "556954-9123",
  address: {
    street: "Mellanbergsvägen 43",
    postalCode: "129 30",
    city: "Hägersten",
    country: "SE",
  },
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Mellanbergsv%C3%A4gen+43%2C+129+30+H%C3%A4gersten",
  phone: { display: "070-819 55 51", href: "tel:+46708195551", e164: "+46708195551" },
  email: "info@swedenbyggkraft.se",
  hours: { display: "Mån–fre 08.00–17.00", schema: "Mo-Fr 08:00-17:00" },
  areas: ["Stockholm", "Uppsala", "Eskilstuna"],
  social: [
    { label: "Facebook", href: "https://www.facebook.com/swedenbygg.kraftab/" },
    { label: "Instagram", href: "https://www.instagram.com/swedenbyggkraft_ab/" },
    { label: "YouTube", href: "https://www.youtube.com/channel/UC1--7qE-ilDHZtcGC9VQw4A" },
  ],
  contacts: [
    { name: "Martins Levalds", role: "VD", phone: "073-959 87 57", href: "tel:+46739598757" },
    { name: "Anastasiia Duzhak", role: "Administratör", phone: "070-819 55 51", href: "tel:+46708195551" },
  ],
  /** Qualifications stated on the current website. */
  credentials: [
    { term: "F-skatt", detail: "Godkänd för F-skatt" },
    { term: "Kollektivavtal", detail: "Byggnads kollektivavtal" },
    { term: "Försäkring", detail: "Företagsförsäkringar för verksamheten" },
    { term: "ID06", detail: "Alla anställda bär ID06-kort" },
  ],
  /** Clients and partners shown under "Våra kunder" on the current website. */
  partners: [
    "Serneke",
    "Consto",
    "Montera i Storfors",
    "Familjen Byggare",
    "Arcona",
    "Byggtotalen",
    "Highcon",
    "Nordkust Bygg",
    "Swebel Bygg",
    "WTCS Bygg",
    "W-Tech",
    "SIP Eco",
  ],
} as const;

export type NavLink = { label: string; href: string; description?: string };
export type NavItem = NavLink & { children?: NavLink[] };

export const mainNav: NavItem[] = [
  { label: "Tjänster", href: "/tjanster" },
  { label: "Projekt", href: "/projekt" },
  {
    label: "För BRF & fastighetsägare",
    href: "/brf-fastighetsagare",
    children: [
      {
        label: "Översikt",
        href: "/brf-fastighetsagare",
        description: "Så hjälper vi föreningar och fastighetsägare",
      },
      {
        label: "Fastighetsskötsel",
        href: "/brf-fastighetsagare/fastighetsskotsel",
        description: "Inre och yttre skötsel, mark, trädgård och snö",
      },
      {
        label: "Underhållsplan",
        href: "/brf-fastighetsagare/underhallsplan",
        description: "Plan för vad som ska göras, när och till vilken kostnad",
      },
    ],
  },
  { label: "Om oss", href: "/om-oss" },
  { label: "Kontakt", href: "/kontakt" },
];

export const quoteHref = "/kontakt#offert";
