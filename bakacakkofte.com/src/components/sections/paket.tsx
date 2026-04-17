import { Truck, BookOpen, GraduationCap, Palette, ShoppingBag, Headphones, Package } from "lucide-react";

const items = [
  {
    icon: Truck,
    title: "Karavan + Ekipman",
    text: "2.4 × 5 m standart karavan, profesyonel köz ızgara, 304 paslanmaz tezgah, soğuk zincir, servis alanı.",
    tag: "Donanım",
    color: "red",
  },
  {
    icon: BookOpen,
    title: "Standart Reçete",
    text: "30+ yıllık Bakacak Köftesi tarifi, baharat oranları, pişirme süreleri, porsiyon tabloları.",
    tag: "Know-how",
    color: "gold",
  },
  {
    icon: GraduationCap,
    title: "2 Hafta Eğitim",
    text: "Açılış öncesi 10 iş günü pişim, servis, hijyen, finansal takip eğitimi.",
    tag: "Eğitim",
    color: "ink",
  },
  {
    icon: Palette,
    title: "Marka Kiti",
    text: "Logo, renk paleti, tabela, üniforma, ambalaj, iletişim broşürü, sosyal medya şablonları.",
    tag: "Kimlik",
    color: "red",
  },
  {
    icon: ShoppingBag,
    title: "Merkezi Tedarik",
    text: "Et, baharat, ambalaj için merkezi zincir. Aynı kalite, aynı fiyatta her karavana.",
    tag: "Operasyon",
    color: "gold",
  },
  {
    icon: Headphones,
    title: "Kesintisiz Destek",
    text: "Operasyon mentorluğu, yönetim yazılımı, pazarlama kampanyaları, bölgesel koordinasyon.",
    tag: "Destek",
    color: "ink",
  },
];

const colorMap = {
  red: { bg: "bg-red", bgSoft: "bg-red/10", text: "text-red", border: "border-red" },
  gold: { bg: "bg-gold", bgSoft: "bg-gold/15", text: "text-gold-deep", border: "border-gold" },
  ink: { bg: "bg-ink", bgSoft: "bg-ink/10", text: "text-ink", border: "border-ink" },
};

export default function Paket() {
  return (
    <section id="paket" className="relative paper-warm py-20 md:py-28 overflow-hidden">
      {/* Big background number */}
      <div
        aria-hidden
        className="absolute -top-16 -right-10 display-font text-[16rem] md:text-[22rem] text-ink/[0.04] leading-none select-none pointer-events-none"
      >
        06
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid md:grid-cols-12 gap-8 mb-14 items-end">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 bg-red text-bone rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5">
              <Package className="w-3.5 h-3.5" /> Paket içeriği
            </div>
            <h2 className="display-font text-ink leading-[1.02] text-[40px] md:text-[64px]">
              Altı kalem,
              <span className="block text-red">tek sözleşme,</span>
              <span className="block">anahtar teslim.</span>
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-ink-soft text-lg leading-[1.7]">
              Bayi sözleşmesi imzalanır, paket altı kalemle birlikte teslim edilir. Ayrı ayrı
              tedarikçi araması, kontrat takibi, uyumlaştırma derdi yok.
            </p>
            <div className="mt-5 flex items-center gap-3 text-sm font-bold text-ink">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-ink text-bone">
                ₺
              </span>
              Fiyatlandırma başvuru sonrası paylaşılır
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => {
            const c = colorMap[it.color as keyof typeof colorMap];
            return (
              <article
                key={it.title}
                className="group relative bg-bone border-2 border-peach rounded-3xl overflow-hidden transition-all hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Top color strip */}
                <div className={`h-1.5 ${c.bg}`} aria-hidden />

                {/* Number overlay */}
                <div
                  aria-hidden
                  className="absolute top-4 right-4 display-font text-7xl text-ink/[0.06] leading-none"
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div className="relative p-7 md:p-8">
                  <div className="flex items-center justify-between mb-5">
                    <span className={`flex items-center justify-center w-14 h-14 rounded-2xl ${c.bg} text-bone shadow-lg`}>
                      <it.icon className="w-6 h-6" />
                    </span>
                    <span className={`text-[10px] uppercase tracking-wider font-bold ${c.text}`}>
                      0{i + 1} · {it.tag}
                    </span>
                  </div>
                  <h3 className="display-font text-xl md:text-2xl text-ink leading-tight mb-3">
                    {it.title}
                  </h3>
                  <p className="text-ink-soft text-sm leading-[1.7]">{it.text}</p>

                  <div className={`mt-5 pt-4 border-t-2 border-dashed border-ink/10 flex items-center gap-2 text-xs font-bold ${c.text}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    Pakete dahil
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bundle summary */}
        <div className="mt-14 grid md:grid-cols-12 gap-8 items-center bg-ink text-bone rounded-3xl p-8 md:p-12 overflow-hidden relative">
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, var(--color-bone) 0 1px, transparent 1px 16px)",
            }}
          />

          <div className="relative md:col-span-8">
            <p className="eyebrow-gold mb-3">Toplam paket</p>
            <h3 className="display-font text-2xl md:text-4xl leading-tight">
              6 kalem · 1 sözleşme · Anahtar teslim kurulum
            </h3>
            <p className="text-bone/70 mt-3 text-base md:text-lg">
              Parça parça tedarik yerine, tam sistem. İlk günden operasyona hazır.
            </p>
          </div>

          <div className="relative md:col-span-4 flex justify-start md:justify-end">
            <a
              href="#basvuru"
              className="inline-flex items-center gap-2 bg-red text-bone font-bold rounded-xl px-7 py-4 hover:bg-red-deep transition-colors shadow-xl"
            >
              Başvuru yap →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
