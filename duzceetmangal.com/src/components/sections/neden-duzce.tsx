import { TreePine, Route, Beef, Mountain } from "lucide-react";

const sebepler = [
  {
    icon: TreePine,
    title: "Kayın ve Meşe Ormanları",
    desc: "Düzce ili %65'i ormanlarla kaplıdır. Kayın, gürgen ve meşe ağaçlarından elde edilen kömür, mangal kültürünün temelini oluşturur. Özellikle meşe közü, ete derin ve tütsümsü bir aroma katar.",
  },
  {
    icon: Route,
    title: "D100'ün Lezzet Durağı",
    desc: "İstanbul-Ankara arasındaki D100 karayolu, Kaynaşlı'nın Bakacak mevkiinden geçer. Yol üzerindeki mangal restoranları, nesiller boyu devam eden bir mola geleneği oluşturmuştur.",
  },
  {
    icon: Beef,
    title: "Bakacak Köfte Geleneği",
    desc: "Dana ve kuzu kıymasının özel oranlarda harmanlanıp meşe közünde yavaş pişirilmesiyle hazırlanan Bakacak köftesi, bölgenin tescilli imza lezzetidir.",
  },
  {
    icon: Mountain,
    title: "Bolu Dağı Geçidi",
    desc: "Düzce, Bolu Dağı geçidinin batı yakasında yer alır. Bölgenin yaylalarında yetişen küçükbaş hayvanlar ve zengin su kaynakları, et kalitesini doğrudan etkiler.",
  },
];

export default function NedenDuzce() {
  return (
    <section className="py-14 sm:py-16 lg:py-20">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-6 lg:px-12">
        <div className="max-w-[780px] mb-10 sm:mb-14">
          <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-forest mb-4">
            Durak 03 · Neden Düzce?
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
            Düzce&apos;de Et Mangal Neden Farklı?
          </h2>
          <p className="font-body text-base sm:text-lg text-charcoal-soft leading-relaxed">
            Düzce, sadece bir geçiş noktası değil — meşe kömürü, taze et ve
            nesiller boyu aktarılan pişirme bilgisiyle Türkiye&apos;nin en
            köklü mangal geleneklerinden birine ev sahipliği yapıyor.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {sebepler.map((s, i) => (
            <div
              key={i}
              className="flex gap-4 sm:gap-5 p-5 sm:p-6 rounded-lg bg-smoke-deep/60"
            >
              <div className="shrink-0 w-10 h-10 rounded-full bg-highlight flex items-center justify-center">
                <s.icon size={20} className="text-forest" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display text-base sm:text-lg font-semibold text-charcoal mb-2">
                  {s.title}
                </h3>
                <p className="font-body text-sm text-charcoal-muted leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
