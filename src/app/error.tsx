"use client";

import Link from "next/link";

import { buttonClass } from "@/components/button";

export default function Error({ retry }: { error: Error & { digest?: string }; retry: () => void }) {
  return (
    <section className="wrap py-24 sm:py-36">
      <h1 className="t-h2 max-w-[18ch]">Sidan kunde inte visas</h1>
      <p className="mt-4 max-w-lg text-ink/80">
        Något gick fel när sidan laddades. Försök igen – eller ring oss på 070-819 55 51 om problemet kvarstår.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <button type="button" onClick={retry} className={buttonClass("ink", "cursor-pointer")}>
          Försök igen
        </button>
        <Link href="/" className={buttonClass("outline")}>
          Till startsidan
        </Link>
      </div>
    </section>
  );
}
