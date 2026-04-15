import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { kategoriler } from "@/lib/data/kategoriler";

export default function KategoriGrid() {
  return (
    <section id="rehber" className="relative py-16 sm:py-24 lg:py-32 border-t border-rule">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
        <header className="mb-10 sm:mb-16 grid gap-5 sm:gap-6 md:grid-cols-[1fr_1.2fr] items-end">
          <p className="eyebrow">İçindekiler — Altı Bölüm</p>
          <div>
            <h2 className="display-font text-[clamp(2rem,5.5vw,3rem)] sm:text-5xl text-ink leading-[1.08] sm:leading-[1.05] tracking-tight">
              Ateşten tabağa,
              <br />
              <span className="italic text-ember font-normal">
                her adımın kuralı vardır.
              </span>
            </h2>
            <p className="mt-5 text-[16px] leading-[1.75] text-ink-soft max-w-lg">
              Rehberi köz başından yazan ustaların notlarından derledik. Her
              bölüm bağımsız okunur; hangi et, hangi ateş, hangi zaman — cevabı
              tabloda da bulursunuz.
            </p>
          </div>
        </header>

        <ol className="divide-y divide-rule border-t border-b border-ink">
          {kategoriler.map((k, i) => {
            const Icon = k.icon;
            return (
              <li key={k.slug}>
                <Link
                  href={k.href}
                  className="group grid gap-4 sm:gap-5 grid-cols-[64px_1fr] md:grid-cols-[96px_1fr_auto] items-center py-6 sm:py-8 lg:py-10 px-2 sm:px-3 transition-colors hover:bg-paper-warm/60"
                >
                  <span className="numero text-3xl sm:text-4xl md:text-[inherit]">{k.kicker}</span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2">
                      <Icon
                        className="w-4 h-4 text-ember shrink-0"
                        strokeWidth={1.8}
                        aria-hidden
                      />
                      <p className="eyebrow">{k.title}</p>
                    </div>
                    <p className="display-font text-xl sm:text-2xl lg:text-[28px] text-ink leading-tight group-hover:text-ember transition-colors">
                      {k.description.split(".")[0]}.
                    </p>
                  </div>
                  <span className="hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-ink-mute font-sans group-hover:text-ember transition-colors">
                    Oku
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
