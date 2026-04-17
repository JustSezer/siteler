import { MapPin } from "lucide-react";

const bolgeler = [
  {
    isim: "Bakacak Mevkii",
    ilce: "Kaynaşlı",
    desc: "D100 üzerinde meşe közünde et mangal geleneğinin kalbi. Bakacak köftesi ve kuzu pirzolası ile ünlü.",
    ozellik: "Meşe közü mangal",
    renk: "bg-forest",
  },
  {
    isim: "Düzce Merkez",
    ilce: "Merkez",
    desc: "Şehir içi et lokantaları, kasaplar ve köfteciler. Yamaçlar Et Lokantası gibi köklü mekanlar burada.",
    ozellik: "Et lokantaları",
    renk: "bg-copper",
  },
  {
    isim: "Kaynaşlı",
    ilce: "Kaynaşlı",
    desc: "Bakacak'ın kapısı. D100 ve TEM bağlantısıyla ulaşımı kolay. Yol üstü restoranlar ve kahvaltı mekanları.",
    ozellik: "Yol üstü lezzet",
    renk: "bg-bark",
  },
  {
    isim: "Akçakoca",
    ilce: "Akçakoca",
    desc: "Düzce'nin deniz tarafı. Et mangalın yanı sıra taze Karadeniz balıkları ve muhlama ile farklı bir lezzet dünyası.",
    ozellik: "Deniz ürünleri",
    renk: "bg-charcoal-soft",
  },
];

export default function BolgeKartlari() {
  return (
    <section className="py-14 sm:py-16 lg:py-24">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-6 lg:px-12">
        <div className="max-w-[780px] mb-10 sm:mb-14">
          <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-forest mb-4">
            Durak 06 · Lezzet Haritası
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
            Düzce&apos;nin Lezzet Bölgeleri
          </h2>
          <p className="font-body text-base sm:text-lg text-charcoal-soft leading-relaxed">
            Düzce sadece Bakacak&apos;tan ibaret değil. Her bölgenin kendine
            özgü bir lezzet hikâyesi var.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {bolgeler.map((b, i) => (
            <div
              key={i}
              className="relative rounded-lg bg-smoke-deep border border-bark-soft/30 overflow-hidden group hover:border-forest/30 transition-all"
            >
              {/* Üst renk bandı */}
              <div className={`h-1.5 ${b.renk}`} />

              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin
                    size={16}
                    className="text-forest"
                    aria-hidden="true"
                  />
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-charcoal-muted">
                    {b.ilce}
                  </span>
                </div>

                <h3 className="font-display text-lg font-semibold text-charcoal mb-2 group-hover:text-forest transition-colors">
                  {b.isim}
                </h3>

                <p className="font-body text-sm text-charcoal-muted leading-relaxed mb-4">
                  {b.desc}
                </p>

                <span className="inline-block font-mono text-[9px] uppercase tracking-[0.15em] text-forest bg-highlight px-2.5 py-1 rounded">
                  {b.ozellik}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
