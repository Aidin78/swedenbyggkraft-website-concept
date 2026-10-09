"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export type ServiceIndexItem = {
  code: string;
  name: string;
  short: string;
  href: string;
  image: { src: StaticImageData; alt: string };
};

/**
 * An editorial index of services. On wide screens the photo panel follows
 * the row under the pointer or keyboard focus.
 */
export function ServiceIndex({ items, headingLevel = "h3" }: { items: ServiceIndexItem[]; headingLevel?: "h2" | "h3" }) {
  const [active, setActive] = useState(0);
  const Heading = headingLevel;

  return (
    <div className="grid-12 gap-y-10">
      <div className="relative col-span-5 hidden lg:block">
        <div className="sticky top-28">
          <div className="relative aspect-[4/5] overflow-hidden bg-paper-2">
            {items.map((item, i) => (
              <Image
                key={item.href}
                src={item.image.src}
                alt=""
                fill
                sizes="(min-width: 1536px) 600px, 40vw"
                placeholder="blur"
                className={`object-cover transition-[opacity,transform] duration-700 ease-out-quart ${
                  i === active ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-ink/70 to-transparent p-5 pt-16 text-paper">
              <span className="t-figure text-[4.5rem]" aria-hidden="true">
                {items[active].code}
              </span>
              <span className="t-meta max-w-[16rem] pb-1 text-right text-paper/85">{items[active].short}</span>
            </div>
          </div>
        </div>
      </div>

      <ol className="col-span-12 border-t border-ink lg:col-span-7">
        {items.map((item, i) => (
          <li key={item.href} className="border-b border-line">
            <Link
              href={item.href}
              onPointerEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className="group grid grid-cols-[4rem_1fr_auto] items-center gap-x-4 py-4 sm:grid-cols-[3.5rem_1fr_auto] sm:py-5 lg:grid-cols-[3.5rem_1fr_auto] lg:py-6"
            >
              <span className="relative block size-16 overflow-hidden bg-paper-2 sm:hidden">
                <Image src={item.image.src} alt="" fill sizes="64px" className="object-cover" />
              </span>
              <span
                className={`t-code hidden self-start pt-1.5 text-lg transition-colors sm:block ${
                  i === active ? "lg:text-ink" : "text-muted"
                }`}
              >
                {item.code}
              </span>
              <span className="min-w-0">
                <Heading
                  className={`text-[1.375rem] leading-[1.05] font-[720] tracking-[-0.025em] transition-transform duration-500 ease-out-quart sm:text-[1.75rem] lg:text-[2.125rem] ${
                    i === active ? "lg:translate-x-2" : ""
                  }`}
                  style={{ fontVariationSettings: '"wdth" 112' }}
                >
                  {item.name}
                </Heading>
                <span className="mt-1.5 block text-[0.9375rem] leading-snug text-muted sm:max-w-md">{item.short}</span>
              </span>
              <span
                className={`flex size-11 items-center justify-center rounded-full border transition-colors duration-300 ${
                  i === active
                    ? "lg:border-ink lg:bg-signal border-line-strong"
                    : "border-line-strong group-hover:border-ink"
                }`}
                aria-hidden="true"
              >
                <ArrowUpRight className="size-5" />
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
