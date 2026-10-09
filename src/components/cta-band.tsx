import Link from "next/link";

import { buttonClass } from "./button";
import { quoteHref, site } from "@/content/site";

type Props = {
  title?: string;
  text?: string;
  href?: string;
  action?: string;
};

/** Closing call to action used at the end of most pages. */
export function CtaBand({
  title = "Berätta om ert projekt",
  text = "Beskriv kort vad ni planerar. Vi återkommer med frågor, ett förslag på upplägg och en kostnadsfri offert.",
  href = quoteHref,
  action = "Begär offert",
}: Props) {
  return (
    <section className="bg-signal text-ink">
      <div className="wrap grid-12 gap-y-8 py-16 sm:py-20">
        <h2 className="t-h2 col-span-12 lg:col-span-6">{title}</h2>
        <div className="col-span-12 md:col-span-8 lg:col-span-5 lg:col-start-8">
          <p className="t-lead">{text}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link href={href} className={buttonClass("ink")}>
              {action}
            </Link>
            <a href={site.phone.href} className="font-semibold underline decoration-1 underline-offset-4">
              eller ring {site.phone.display}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
