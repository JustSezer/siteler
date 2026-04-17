import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const specs = [
  ["Boyut", "2.4 × 5 m"],
  ["Tezgah", "304 paslanmaz"],
  ["Ocak", "Köz ızgara · meşe kömürü"],
  ["Soğutma", "Çift kompartıman"],
  ["Enerji", "Şebeke + jeneratör"],
  ["Su", "Temiz + gri ayrı"],
  ["Servis", "1 pencere · 2 personel"],
  ["Brand", "Standart vinyl + ışık"],
];

export default function KaravanV2() {
  return (
    <section className="v2-section border-t v2-rule">
      <div className="grid grid-cols-12">
        {/* Photo column */}
        <div className="col-span-12 md:col-span-7 relative min-h-[320px] sm:min-h-[420px] md:min-h-[760px] order-2">
          <div
            aria-hidden
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/images/bakacak-kofte-hero.jpg)" }}
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(110deg, rgba(11,11,12,0.7) 0%, rgba(11,11,12,0.25) 60%, rgba(11,11,12,0.85) 100%)",
            }}
          />
          <div className="absolute inset-0 p-6 sm:p-8 md:p-12 flex flex-col justify-between">
            <div className="v2-mono text-[10px] tracking-[0.22em] sm:tracking-[0.24em] uppercase text-[var(--color-paper)]/80 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[var(--color-ember)]" />
              Karavan № 01 · Bakacak Mevki
            </div>
            <div className="v2-display text-[var(--color-paper)] text-xl sm:text-2xl md:text-4xl max-w-md leading-snug">
              Mutfak değil — <span className="text-[var(--color-ember)]">hareketli bir istasyon.</span>
            </div>
          </div>
        </div>

        {/* Specs column */}
        <div className="col-span-12 md:col-span-5 p-6 sm:p-8 md:p-12 lg:p-16 md:border-l v2-rule order-1">
          <p className="v2-num">№ 05 — Karavan</p>
          <h2 className="v2-display text-[var(--color-paper)] text-3xl sm:text-4xl md:text-5xl mt-3 sm:mt-4 leading-[0.95] tracking-[-0.025em]">
            Aynı ekipman.
            <br />
            <span className="text-[var(--color-fog-2)]">Aynı akış.</span>
          </h2>
          <p className="text-[var(--color-paper)]/70 mt-5 sm:mt-6 text-sm sm:text-base leading-relaxed max-w-md">
            Her karavan birebir aynı iç düzenle teslim edilir. Bölgeler arası kalite farkı
            standardın güvencesiyle ortadan kalkar.
          </p>

          <dl className="mt-10 border-t v2-rule">
            {specs.map(([k, v]) => (
              <div
                key={k}
                className="flex items-baseline justify-between gap-4 py-3.5 border-b v2-rule"
              >
                <dt className="v2-mono text-[11px] tracking-[0.18em] uppercase text-[var(--color-fog-2)]">
                  {k}
                </dt>
                <dd className="v2-display text-[var(--color-paper)] text-sm md:text-base text-right">
                  {v}
                </dd>
              </div>
            ))}
          </dl>

          <Link
            href="/karavan"
            className="mt-10 inline-flex items-center gap-2 v2-display text-base text-[var(--color-paper)] border-b-2 border-[var(--color-paper)] hover:text-[var(--color-ember)] hover:border-[var(--color-ember)] pb-1 transition-colors"
          >
            Karavan detayları <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
