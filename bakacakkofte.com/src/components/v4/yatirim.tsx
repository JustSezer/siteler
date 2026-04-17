import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const lines = [
  ["Başlangıç yatırımı", "Coming soon"],
  ["Aylık royalty", "Coming soon"],
  ["Eğitim paketi", "Coming soon"],
  ["Geri dönüş hedefi", "~24 ay"],
  ["Bölge politikası", "81 il"],
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

export default function YatirimV4() {
  return (
    <section className="v4-section py-14 sm:py-20 md:py-24">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-5">
            <p className="v4-eyebrow mb-3">YATIRIM — 06</p>
            <h2 className="v4-display-tight text-[var(--color-night)] text-4xl sm:text-5xl md:text-6xl leading-[0.92] tracking-[-0.035em]">
              Tek paket,
              <br />
              <span className="italic">tek sözleşme.</span>
            </h2>
            <p className="v4-sans text-[var(--color-graphite)] mt-6 text-base sm:text-lg leading-relaxed max-w-md">
              Yatırım kalemlerinin nihai rakamları kişiye özel fizibilite raporunda paylaşılır.
              Paket içeriği her bayilikte sabittir.
            </p>
            <Link href="/franchise" className="v4-btn-night mt-8 sm:mt-10">
              Detaylı paket <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 lg:mt-0">
            <div className="v4-card p-5 sm:p-7 bg-[var(--color-snow)]">
              <p className="v4-eyebrow mb-5">Yatırım Kalemleri</p>
              <dl className="divide-y divide-[var(--color-night)]/10">
                {lines.map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-3 py-3.5 first:pt-0 last:pb-0">
                    <dt className="v4-sans text-sm text-[var(--color-graphite)]">{k}</dt>
                    <dd className="v4-display text-base text-[var(--color-night)]">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="v4-card p-5 sm:p-7 bg-[var(--color-tomato)] text-[var(--color-snow)]">
              <p className="v4-eyebrow !text-[var(--color-mustard)] mb-5">Pakette Neler Var</p>
              <ul className="space-y-3.5">
                {includes.map((i) => (
                  <li key={i} className="flex items-start gap-3 v4-sans text-sm leading-relaxed">
                    <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[var(--color-snow)]/15 flex items-center justify-center">
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </span>
                    <span className="text-[var(--color-snow)]/95">{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
