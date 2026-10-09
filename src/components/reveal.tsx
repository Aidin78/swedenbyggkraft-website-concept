"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Wipes its content into view once, the first time its top edge comes
 * within the lower part of the viewport (or has already been scrolled past).
 */
export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const check = () => {
      frame = 0;
      if (el.getBoundingClientRect().top < window.innerHeight * 0.88) {
        setVisible(true);
        stop();
      }
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };
    const stop = () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    schedule();
    return () => {
      stop();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} data-visible={visible} className={`reveal-wipe ${className}`}>
      {children}
    </div>
  );
}
