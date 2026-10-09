import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";

import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd, localBusinessSchema } from "@/components/json-ld";
import { constructionServices, serviceHref } from "@/content/services";
import { mainNav, quoteHref, site } from "@/content/site";

const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Sweden Bygg Kraft – byggföretag i Stockholm",
    template: "%s | Sweden Bygg Kraft",
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    locale: "sv_SE",
    siteName: site.name,
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#efefeb",
};

const serviceLinks = constructionServices.map((s) => ({
  label: s.name,
  href: serviceHref(s),
  code: s.code,
}));

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="sv" className={archivo.variable}>
      <head>
        {/* Without JavaScript, show photos straight away instead of waiting to fade in. */}
        <noscript>
          <style>{"img[data-fade]{opacity:1!important}"}</style>
        </noscript>
      </head>
      <body className="flex min-h-svh flex-col antialiased">
        <a
          href="#innehall"
          className="sr-only z-[60] bg-signal px-4 py-3 font-semibold text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Hoppa till innehållet
        </a>
        <SiteHeader
          nav={mainNav}
          services={serviceLinks}
          quoteHref={quoteHref}
          phone={site.phone}
          email={site.email}
        />
        <main id="innehall" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <JsonLd data={localBusinessSchema()} />
      </body>
    </html>
  );
}
