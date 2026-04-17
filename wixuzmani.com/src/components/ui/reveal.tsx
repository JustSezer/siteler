"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "header" | "h2" | "h3";
};

export default function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style = delay ? { transitionDelay: `${delay}ms` } : undefined;
  const classes = `reveal ${visible ? "is-visible" : ""} ${className}`.trim();

  const refCallback = (el: HTMLElement | null) => {
    ref.current = el;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag = as as any;

  return (
    <Tag ref={refCallback} className={classes} style={style}>
      {children}
    </Tag>
  );
}
