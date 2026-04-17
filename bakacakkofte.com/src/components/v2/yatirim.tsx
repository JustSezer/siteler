import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const lines = [
  ["Başlangıç yatırımı", "Coming soon"],
  ["Aylık royalty", "Coming soon"],
  ["Eğitim paketi", "Coming soon"],
  ["Geri dönüş hedefi", "~24 ay"],
  ["Bölge politikası", "Türkiye geneli · 81 il"],
  ["Açılış destek paketi", "İlk 30 gün"],
];

const includes = [
  "Karavan + köz ızgara sistemi (anahtar teslim)",
  "Standardize reçete + merkezi tedarik",
  "Operasyon kılavuzu + 2 hafta eğitim",
  "Marka görsel kimlik + sosyal medya şablonları",
  "Bölge değerlendirmesi + lokasyon önerisi",
  "Açılış mentorluğu + ilk ay desteği",
];

export default function YatirimV2() {
  return (
    <section className="v2-section-light py-20 sm:py-28 md:py-44 border-t border-[var(--color-coal)]/15">
      <div className="mx-auto max-w-[1480px] px-5 sm:px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-5">
            <p className="v2-num">№ 07 — Yatırım</p>
            <h2 className="v2-display text-[var(--color-coal)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-3 sm:mt-4 leading-[0.92] tracking-[-0.03em]">
              Tek paket.
              <br />
              <span className="text-[var(--color-coal)]/40">Tek sözleşme.</span>
            </h2>
            <p className="text-[var(--color-coal)]/70 mt-6 sm:mt-8 text-sm sm:text-base leading-relaxed max-w-md">
              Yatırım kalemlerinin nihai rakamları kişiye özel fizibilite raporunda paylaşılır.
              Aşağıdaki içerik her bayilik paketinin sabit çekirdeğini oluşturur.
            </p>

            <Link
              href="/franchise"
              className="mt-10 inline-flex items-center gap-2 v2-display text-base text-[var(--color-coal)] border-b-2 border-[var(--color-coal)] hover:text-[var(--color-ember)] hover:border-[var(--color-ember)] pb-1 transition-colors"
            >
              Detaylı paket sayfası <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="col-span-12 md:col-span-7 mt-8 md:mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[var(--color-coal)]/15 border border-[var(--color-coal)]/15">
              <div className="bg-[var(--color-paper)] p-6 sm:p-8">
                <p className="v2-label !text-[var(--color-coal)]/60 mb-6">Yatırım kalemleri</p>
                <dl className="border-t border-[var(--color-coal)]/15">
                  {lines.map(([k, v]) => (
                    <div key={k} className="flex items-baseline justify-between gap-3 py-3 border-b border-[var(--color-coal)]/15">
                      <dt className="v2-mono text-[11px] tracking-[0.18em] uppercase text-[var(--color-coal)]/55">{k}</dt>
                      <dd className="v2-display text-sm text-[var(--color-coal)]">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="bg-[var(--color-coal)] text-[var(--color-paper)] p-6 sm:p-8">
                <p className="v2-label v2-label-ember mb-6">Pakette neler var</p>
                <ul className="space-y-3.5">
                  {includes.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                      <span className="v2-mono text-[10px] tracking-[0.22em] text-[var(--color-ember)] mt-1 shrink-0">→</span>
                      <span className="text-[var(--color-paper)]/85">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
