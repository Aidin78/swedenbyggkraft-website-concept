import { site } from "@/content/site";

type Schema = Record<string, unknown>;

export function JsonLd({ data }: { data: Schema | Schema[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

/** Only facts published by the company itself. */
export function localBusinessSchema(): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${site.url}/#foretag`,
    name: site.name,
    url: site.url,
    logo: `${site.url}/icon.svg`,
    description: site.description,
    email: site.email,
    telephone: site.phone.e164,
    taxID: site.orgNumber,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressCountry: site.address.country,
    },
    openingHours: site.hours.schema,
    areaServed: site.areas.map((name) => ({ "@type": "City", name })),
    sameAs: site.social.map((s) => s.href),
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.href}`,
    })),
  };
}
