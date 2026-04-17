"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-background-alt">
      <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center">
        <p className="text-secondary font-bold text-sm mb-4">Her Tabakta Bir Hikaye</p>
        <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-black text-foreground leading-[1.05] mb-6">
          Düzce sofrası
          <br />
          <span className="text-primary">kuruldu</span><span className="text-secondary">.</span>
        </h2>
        <p className="text-foreground-muted text-lg max-w-lg mx-auto leading-relaxed mb-10">
          Mamursa&apos;dan isli balığa, Boşnak böreğinden Melengücceği
          tatlısına — keşif seni bekliyor.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
          <Link
            href="/duzce-yoresel-yemekleri"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary-light transition-colors shadow-lg shadow-primary/20"
          >
            Lezzetleri Keşfet &rarr;
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-card text-foreground px-8 py-4 rounded-2xl font-bold border border-border hover:border-primary transition-colors"
          >
            Blog Yazıları
          </Link>
        </div>
      </div>
    </section>
  );
}
