"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

import { Logo } from "./logo";
import { buttonClass } from "./button";
import type { NavItem, NavLink } from "@/content/site";

type ServiceLink = NavLink & { code: string };

type Props = {
  nav: NavItem[];
  services: ServiceLink[];
  quoteHref: string;
  phone: { display: string; href: string };
  email: string;
};

export function SiteHeader({ nav, services, quoteHref, phone, email }: Props) {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const hoverTimer = useRef<number | undefined>(undefined);
  const panelId = useId();

  // Close everything when the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpenMenu(null);
    setMobileOpen(false);
  }

  // Solid edge once scrolled; tuck away while scrolling down, return on scroll up.
  useEffect(() => {
    let last = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 8);
        setHidden(y > 240 && y > last + 4);
        if (y < last - 4 || y < 240) setHidden(false);
        last = y;
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape and outside clicks close dropdowns.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (mobileOpen) {
        setMobileOpen(false);
        toggleRef.current?.focus();
      }
      setOpenMenu(null);
    };
    const onPointer = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [mobileOpen]);

  // Lock page scroll behind the mobile menu.
  useEffect(() => {
    const root = document.documentElement;
    if (mobileOpen) root.style.overflow = "hidden";
    return () => {
      root.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  const hoverOpen = (label: string) => {
    window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => setOpenMenu(label), 80);
  };
  const hoverClose = () => {
    window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => setOpenMenu(null), 160);
  };

  return (
    <>
      <header
        ref={headerRef}
        onClick={(e) => {
          if ((e.target as Element).closest("a")) {
            setOpenMenu(null);
            setMobileOpen(false);
          }
        }}
        className={[
          "sticky top-0 z-50 bg-paper transition-[transform,box-shadow] duration-500 ease-out-quart",
          scrolled ? "shadow-[0_1px_0_var(--color-line)]" : "",
          hidden && !mobileOpen && !openMenu ? "-translate-y-full" : "translate-y-0",
        ].join(" ")}
      >
        <div className="wrap flex h-16 items-center justify-between gap-6 lg:h-[4.75rem]">
          <Link href="/" className="relative z-10 -m-1 p-1" aria-label="Sweden Bygg Kraft – till startsidan">
            <Logo />
          </Link>

          <nav aria-label="Huvudmeny" className="hidden lg:block">
            <ul className="flex items-center gap-1 xl:gap-2">
              {nav.map((item) => {
                const hasPanel = item.label === "Tjänster" || item.children;
                const open = openMenu === item.label;
                if (!hasPanel) {
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={isActive(item.href) ? "page" : undefined}
                        className="relative inline-flex h-11 items-center px-3 text-[0.9375rem] font-medium after:absolute after:inset-x-3 after:bottom-2 after:h-[2px] after:origin-left after:scale-x-0 after:bg-ink after:transition-transform after:duration-300 hover:after:scale-x-100 aria-[current=page]:after:scale-x-100"
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                }
                return (
                  <li
                    key={item.href}
                    onPointerEnter={(e) => e.pointerType === "mouse" && hoverOpen(item.label)}
                    onPointerLeave={(e) => e.pointerType === "mouse" && hoverClose()}
                  >
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-controls={`${panelId}-${item.href}`}
                      onClick={() => setOpenMenu(open ? null : item.label)}
                      className={[
                        "relative inline-flex h-11 items-center gap-1 px-3 text-[0.9375rem] font-medium",
                        "after:absolute after:inset-x-3 after:bottom-2 after:h-[2px] after:origin-left after:bg-ink after:transition-transform after:duration-300",
                        open || isActive(item.href) ? "after:scale-x-100" : "after:scale-x-0",
                      ].join(" ")}
                    >
                      {item.label}
                      <ChevronDown
                        aria-hidden="true"
                        className={`size-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                      />
                    </button>
                    <div
                      id={`${panelId}-${item.href}`}
                      hidden={!open}
                      className="absolute inset-x-0 top-full border-t border-line bg-paper shadow-[0_24px_48px_-24px_rgb(32_37_37/0.35)]"
                    >
                      {item.label === "Tjänster" ? (
                        <ServicesPanel services={services} />
                      ) : (
                        <ChildrenPanel item={item} />
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={phone.href}
              className="hidden items-center gap-2 px-3 text-[0.9375rem] font-medium xl:inline-flex"
            >
              <Phone aria-hidden="true" className="size-4" />
              <span className="t-code text-base">{phone.display}</span>
            </a>
            <Link href={quoteHref} className={buttonClass("signal", "min-h-11 px-5 max-sm:hidden")}>
              Begär offert
            </Link>
            <button
              ref={toggleRef}
              type="button"
              className="-mr-2 inline-flex h-11 items-center gap-2 px-2 text-[0.9375rem] font-semibold lg:hidden"
              aria-expanded={mobileOpen}
              aria-controls="mobilmeny"
              onClick={() => setMobileOpen((o) => !o)}
            >
              <span className="max-xs:sr-only">{mobileOpen ? "Stäng" : "Meny"}</span>
              {mobileOpen ? <X aria-hidden="true" className="size-6" /> : <Menu aria-hidden="true" className="size-6" />}
            </button>
          </div>
        </div>

      </header>
      {/* Outside the header: its transform would otherwise trap this fixed panel. */}
      <MobileMenu
        open={mobileOpen}
        nav={nav}
        services={services}
        quoteHref={quoteHref}
        phone={phone}
        email={email}
        isActive={isActive}
        onNavigate={() => setMobileOpen(false)}
      />
    </>
  );
}

function ServicesPanel({ services }: { services: ServiceLink[] }) {
  return (
    <div className="wrap grid-12 py-10">
      <div className="col-span-4 pr-6">
        <p className="t-h3">Tjänster</p>
        <p className="mt-3 max-w-xs text-muted">
          Från betong och prefabmontage till renovering och fastighetsservice.
        </p>
        <Link href="/tjanster" className="link-underline mt-6 inline-block font-semibold">
          Alla tjänster
        </Link>
      </div>
      <ul className="col-span-8 grid grid-cols-2 gap-x-8 border-t border-line">
        {services.map((s) => (
          <li key={s.href} className="border-b border-line">
            <Link href={s.href} className="group flex items-baseline gap-4 py-3.5">
              <span className="t-code w-6 text-sm text-muted">{s.code}</span>
              <span className="font-semibold transition-transform duration-300 group-hover:translate-x-1">
                {s.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ChildrenPanel({ item }: { item: NavItem }) {
  return (
    <div className="wrap grid-12 py-10">
      <div className="col-span-4 pr-6">
        <p className="t-h3">{item.label}</p>
        <p className="mt-3 max-w-xs text-muted">
          Drift, underhåll och planering för föreningar och fastighetsägare.
        </p>
      </div>
      <ul className="col-span-8 grid grid-cols-3 gap-6">
        {item.children?.map((c) => (
          <li key={c.href + c.label}>
            <Link href={c.href} className="group block border-t-2 border-ink pt-4">
              <span className="block font-semibold group-hover:underline">{c.label}</span>
              {c.description ? <span className="mt-1 block text-[0.9375rem] text-muted">{c.description}</span> : null}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

type MobileProps = Omit<Props, "nav"> & {
  nav: NavItem[];
  open: boolean;
  isActive: (href: string) => boolean;
  onNavigate: () => void;
};

function MobileMenu({ open, nav, services, quoteHref, phone, email, isActive, onNavigate }: MobileProps) {
  return (
    <div
      id="mobilmeny"
      hidden={!open}
      onClick={(e) => {
        if ((e.target as Element).closest("a")) onNavigate();
      }}
      className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto overscroll-contain bg-paper lg:hidden"
    >
      <nav aria-label="Mobilmeny" className="wrap flex min-h-full flex-col pb-8 pt-4">
        <ul className="border-t border-line">
          {nav.map((item) => {
            const sub =
              item.label === "Tjänster"
                ? services.map((s) => ({ label: s.label, href: s.href }))
                : item.children?.filter((c) => c.href !== item.href);
            return (
              <li key={item.href} className="border-b border-line">
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="t-h3 block py-4 aria-[current=page]:underline aria-[current=page]:decoration-signal aria-[current=page]:decoration-4 aria-[current=page]:underline-offset-8"
                >
                  {item.label}
                </Link>
                {sub && sub.length ? (
                  <ul className="-mt-1 grid grid-cols-2 gap-x-4 pb-4">
                    {sub.map((s) => (
                      <li key={s.href}>
                        <Link href={s.href} className="block py-1.5 text-[0.9375rem] text-muted">
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            );
          })}
        </ul>
        <div className="mt-auto grid gap-3 pt-8">
          <Link href={quoteHref} className={buttonClass("signal", "w-full")}>
            Begär offert
          </Link>
          <a href={phone.href} className={buttonClass("outline", "w-full")}>
            Ring {phone.display}
          </a>
          <a href={`mailto:${email}`} className="py-2 text-center text-[0.9375rem] font-medium">
            {email}
          </a>
        </div>
      </nav>
    </div>
  );
}
