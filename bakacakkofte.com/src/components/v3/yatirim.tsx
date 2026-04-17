import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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

export default function YatirimV3() {
  return (
    <section className="v3-section py-20 sm:py-28 md:py-44 border-t v3-rule">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-5">
            <p className="v3-num">№ 06</p>
            <h2 className="v3-serif text-[var(--color-charcoal)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-3 leading-[0.95] tracking-[-0.02em]">
              Tek paket.
              <br />
              <span className="italic text-[var(--color-stone)]">Tek sözleşme.</span>
            </h2>
            <p className="v3-sans text-[var(--color-charcoal-3)] mt-6 sm:mt-8 text-base sm:text-lg font-light leading-relaxed max-w-md">
              Yatırım kalemlerinin nihai rakamları kişiye özel fizibilite raporunda paylaşılır.
              Aşağıdaki içerik her bayilik paketinin sabit çekirdeğini oluşturur.
            </p>
            <Link href="/franchise" className="v3-link mt-8 sm:mt-10">
              Detaylı paket sayfası <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="col-span-12 md:col-span-7 mt-8 md:mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[var(--color-rule-3)] border v3-rule">
              <div className="bg-[var(--color-card-3)] p-7 sm:p-8">
                <p className="v3-eyebrow mb-6">Yatırım kalemleri</p>
                <dl className="border-t v3-rule">
                  {lines.map(([k, v]) => (
                    <div key={k} className="flex items-baseline justify-between gap-3 py-3.5 border-b v3-rule">
                      <dt className="v3-sans text-sm text-[var(--color-stone)]">{k}</dt>
                      <dd className="v3-serif text-base text-[var(--color-charcoal)]">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="bg-[var(--color-charcoal)] text-[var(--color-paper-3)] p-7 sm:p-8">
                <p className="v3-eyebrow !text-[var(--color-terracotta-soft)] mb-6">Pakette neler var</p>
                <ul className="space-y-3.5">
                  {includes.map((i) => (
                    <li key={i} className="flex items-start gap-3 v3-sans text-sm leading-relaxed font-light">
                      <span className="v3-sans text-[var(--color-terracotta-soft)] mt-1 shrink-0">→</span>
                      <span className="text-[var(--color-paper-3)]/85">{i}</span>
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
