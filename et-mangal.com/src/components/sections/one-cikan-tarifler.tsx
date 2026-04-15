import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { tarifler } from "@/lib/data/tarifler";

export default function OneCikanTarifler() {
  const ones = tarifler.slice(0, 3);

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-paper-warm border-y border-rule">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık */}
        <div className="mb-8 sm:mb-10 lg:mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-2.5 sm:mb-3">
              <span className="w-6 sm:w-8 h-px bg-ember" />
              <p className="eyebrow">Tarif Kütüğü</p>
            </div>
            <h2 className="display-font text-[clamp(1.5rem,5vw,2.5rem)] text-ink leading-[1.1] tracking-tight">
              Yanında duran,{" "}
              <span className="italic text-ember font-normal">
                sessiz yıldızlar.
              </span>
            </h2>
          </div>
          <Link
            href="/tarifler"
            className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] text-ember hover:text-amber transition-colors font-sans font-semibold self-start sm:self-auto"
          >
            Tüm Tarifler <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Kartlar — mobil 1, tablet 2, masaüstü 3 */}
        <div className="grid gap-6 sm:gap-7 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 border-t border-ink/60 pt-6 sm:pt-8">
          {ones.map((t, i) => (
            <article
              key={t.slug}
              className={`group ${i === 2 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <Link href="/tarifler" className="block">
                <div className="flex items-baseline gap-3 mb-2.5 sm:mb-3">
                  <span className="numero text-[1.75rem] sm:text-[2rem] leading-none text-ember italic">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="w-6 sm:w-8 h-px bg-ember/60" />
                </div>
                <div className="flex items-center gap-2 eyebrow mb-2 sm:mb-2.5">
                  <span>{t.kind}</span>
                  <span className="w-3 sm:w-4 h-px bg-ember" />
                  <span className="text-ink-mute">{t.time}</span>
                </div>
                <h3 className="display-font text-[20px] sm:text-[22px] lg:text-2xl text-ink leading-[1.15] tracking-tight group-hover:text-ember transition-colors">
                  {t.title}
                </h3>
                <p className="mt-2.5 sm:mt-3 text-[13px] sm:text-[14px] leading-[1.7] text-ink-soft italic font-body line-clamp-3">
                  {t.description}
                </p>
                <span className="mt-3 sm:mt-4 inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.14em] text-ember font-semibold font-sans">
                  Oku
                  <ArrowUpRight className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
