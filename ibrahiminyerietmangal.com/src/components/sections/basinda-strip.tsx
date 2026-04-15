import Link from "next/link";
import { ArrowUpRight, PlaySquare, Newspaper } from "lucide-react";
import { basinda } from "@/lib/data/basinda";

export default function BasindaStrip() {
  return (
    <section className="relative py-20 sm:py-28 border-t border-smoke bg-coal-2">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        <div className="mb-12 sm:mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow-gold mb-4">Bizden Söz Edenler</p>
            <h2 className="display-font text-[clamp(1.75rem,4.5vw,3rem)] text-bone leading-[1.1] tracking-tight max-w-xl">
              Ulusal basında, <span className="italic text-gold">otuz yıldır</span>.
            </h2>
          </div>
          <Link
            href="/basinda"
            className="inline-flex items-center gap-2 mono-font text-[11px] uppercase tracking-[0.18em] text-gold hover:text-gold-soft"
          >
            Tümü <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid gap-px bg-smoke sm:grid-cols-2 lg:grid-cols-3 border border-smoke">
          {basinda.slice(0, 6).map((b, i) => {
            const Icon = b.kind === "video" ? PlaySquare : Newspaper;
            return (
              <a
                key={i}
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-coal-2 p-6 sm:p-8 hover:bg-coal-3 transition-colors"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2.5">
                    <Icon
                      className="w-4 h-4 text-gold/70 group-hover:text-gold transition-colors"
                      strokeWidth={1.6}
                    />
                    <p className="display-font text-xl sm:text-2xl text-gold italic leading-none">
                      {b.outlet}
                    </p>
                  </div>
                  <span className="text-[11px] text-bone-mute tracking-wider font-medium">
                    {b.year}
                  </span>
                </div>
                <h3 className="display-font text-lg sm:text-xl text-bone leading-snug mb-3 group-hover:text-gold-soft transition-colors">
                  &ldquo;{b.title}&rdquo;
                </h3>
                <p className="text-[13px] leading-[1.7] text-bone-soft italic">
                  {b.note}
                </p>
                <div className="mt-5 flex items-center gap-1.5 text-gold/70 group-hover:text-gold transition-colors text-[11px] font-semibold uppercase tracking-wider">
                  {b.kind === "video" ? "İzle" : "Oku"}
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
