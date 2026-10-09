import type { Metadata } from "next";
import Link from "next/link";

import { buttonClass } from "@/components/button";

export const metadata: Metadata = { title: "Sidan finns inte" };

export default function NotFound() {
  return (
    <section className="wrap grid-12 gap-y-8 py-24 sm:py-36">
      <p className="t-figure col-span-12 text-[clamp(8rem,26vw,22rem)] text-concrete lg:col-span-6" aria-hidden="true">
        404
      </p>
      <div className="col-span-12 lg:col-span-5 lg:col-start-8 lg:self-end">
        <h1 className="t-h2">Sidan finns inte</h1>
        <p className="mt-4 text-ink/80">
          Länken kan vara felaktig eller så har sidan flyttats. Gå till startsidan eller hör av dig så hjälper vi dig
          vidare.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className={buttonClass("ink")}>
            Till startsidan
          </Link>
          <Link href="/kontakt" className={buttonClass("outline")}>
            Kontakta oss
          </Link>
        </div>
      </div>
    </section>
  );
}
