import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "signal" | "ink" | "outline" | "outline-inverse";

const variants: Record<Variant, string> = {
  signal: "bg-signal text-ink hover:bg-ink hover:text-paper",
  ink: "bg-ink text-paper hover:bg-signal hover:text-ink",
  outline: "border border-ink/80 text-ink hover:bg-ink hover:text-paper",
  "outline-inverse": "border border-paper/60 text-paper hover:bg-paper hover:text-ink",
};

export function buttonClass(variant: Variant = "signal", extra = "") {
  return [
    "inline-flex min-h-12 items-center justify-center gap-3 rounded-[2px] px-6 py-3",
    "text-[0.9375rem] font-semibold tracking-[-0.005em] transition-colors duration-300",
    variants[variant],
    extra,
  ].join(" ");
}

type ButtonLinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

export function ButtonLink({ variant = "signal", className = "", children, ...props }: ButtonLinkProps) {
  return (
    <Link className={buttonClass(variant, className)} {...props}>
      {children}
    </Link>
  );
}
