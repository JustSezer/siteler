import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { menu } from "@/lib/data/menu";

export default function ImzaTabaklar() {
  const imza = menu.filter((m) => m.signature);

  return (
    <section className="relative py-20 sm:py-28 lg:py-36 border-t border-smoke">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        <div className="mb-14 sm:mb-20 grid gap-6 md:grid-cols-[1fr_auto] items-end">
          <div>
            <p className="eyebrow mb-5">Üç İmza · Bir İsim</p>
            <h2 className="display-font text-[clamp(2.25rem,6vw,4.5rem)] text-bone leading-[1.02] tracking-tight max-w-3xl">
              Hafızada kalan <span className="italic text-ember">üç tabak</span>.
            </h2>
          </div>
          <Link
            href="/menu"
            className="hidden md:inline-flex items-center gap-2 mono-font text-[11px] uppercase tracking-[0.18em] text-ember hover:text-ember-soft"
          >
            Tüm Menü <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {imza.map((item, i) => (
            <article
              key={item.slug}
              className="group relative overflow-hidden border border-smoke hover:border-ember transition-colors duration-300"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-coal-2">
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-coal via-coal/40 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="text-[11px] font-semibold tracking-wider text-ember bg-coal/90 border border-ember/60 px-2.5 py-1">
                    İmza · {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <h3 className="display-font text-2xl sm:text-3xl text-bone leading-tight tracking-tight mb-2">
                    {item.name}
                  </h3>
                  <p className="text-[13.5px] leading-[1.7] text-bone-soft line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 md:hidden">
          <Link
            href="/menu"
            className="btn-ghost w-full justify-center"
          >
            Tüm Menü <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
