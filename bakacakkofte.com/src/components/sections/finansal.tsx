import { TrendingUp, Clock, Users, MapPin, BarChart3 } from "lucide-react";

const stats = [
  { icon: TrendingUp, label: "Başlangıç yatırımı", value: "Coming soon", note: "Paket detayına göre", accent: "red" },
  { icon: Clock, label: "Geri dönüş süresi", value: "~24 ay", note: "Ortalama projeksiyon", accent: "gold" },
  { icon: Users, label: "Personel ihtiyacı", value: "2 kişi", note: "1 usta + 1 yardımcı", accent: "ink" },
  { icon: MapPin, label: "Lokasyon esnekliği", value: "Çoklu", note: "Gün içi değişim mümkün", accent: "red" },
];

const accentMap = {
  red: "bg-red text-bone",
  gold: "bg-gold text-ink",
  ink: "bg-ink-2 text-bone border border-bone/10",
};

export default function Finansal() {
  return (
    <section className="relative ink-panel py-20 md:py-28 overflow-hidden">
      {/* bg pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, var(--color-bone) 0 1px, transparent 1px 18px)",
        }}
      />
      {/* large bg number */}
      <div
        aria-hidden
        className="absolute -top-20 -right-16 display-font text-[24rem] text-bone/[0.03] leading-none pointer-events-none select-none"
      >
        ₺
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid md:grid-cols-12 gap-8 items-end mb-14">
          <div className="md:col-span-7">
            <span className="inline-flex items-center gap-2 bg-red text-bone rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5">
              <BarChart3 className="w-3.5 h-3.5" /> Finansal çerçeve
            </span>
            <h2 className="display-font text-bone leading-[1.02] text-[40px] md:text-[64px]">
              Yatırımın net
              <span className="block text-red-soft">çerçevesi.</span>
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-bone/75 text-lg leading-[1.7]">
              Rakamların temel iskeleti. Lokasyon, paket ve bölge politikasına göre kişiye özel
              rapor başvuru sonrası 3 iş günü içinde paylaşılır.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`relative rounded-2xl p-6 ${accentMap[s.accent as keyof typeof accentMap]}`}
            >
              <div className="flex items-center justify-between mb-5">
                <span className="flex items-center justify-center w-11 h-11 rounded-lg bg-bone/20 backdrop-blur">
                  <s.icon className="w-5 h-5" />
                </span>
                <span className="text-[10px] uppercase tracking-wider font-bold opacity-60">
                  № 0{i + 1}
                </span>
              </div>
              <p className="text-[11px] uppercase tracking-wider font-bold opacity-80 mb-2">
                {s.label}
              </p>
              <p className="display-font text-2xl md:text-3xl leading-tight">{s.value}</p>
              <p className="text-xs opacity-70 mt-2">{s.note}</p>
            </div>
          ))}
        </div>

        {/* Break-even visualization */}
        <div className="mt-10 grid md:grid-cols-12 gap-8 bg-ink-2 border border-bone/10 rounded-2xl p-8 md:p-10">
          <div className="md:col-span-5">
            <p className="eyebrow-gold mb-3">Geri dönüş projeksiyonu</p>
            <h3 className="display-font text-2xl md:text-3xl text-bone leading-tight">
              Yatırım geri dönüşü,
              <span className="block text-red-soft">ortalama 24 ay.</span>
            </h3>
            <p className="mt-4 text-bone/70 text-sm leading-relaxed">
              Lokasyon, günlük trafik, sezon ve operasyon verimliliğine göre 18-30 ay aralığında
              değişebilir. Kişiye özel rapor daha net bir çerçeve sunar.
            </p>
          </div>
          <div className="md:col-span-7">
            {/* Simple bar chart */}
            <div className="space-y-4">
              {[
                { label: "1. yıl", pct: 35, text: "%35 geri dönüş" },
                { label: "2. yıl", pct: 68, text: "%68 geri dönüş" },
                { label: "24. ay", pct: 100, text: "Başa baş noktası" },
                { label: "3. yıl sonu", pct: 140, text: "%40 kâr (ortalama)", over: true },
              ].map((b) => (
                <div key={b.label}>
                  <div className="flex items-baseline justify-between text-sm mb-1.5">
                    <span className="font-bold text-bone">{b.label}</span>
                    <span className="text-bone/70">{b.text}</span>
                  </div>
                  <div className="relative h-3 bg-bone/10 rounded-full overflow-hidden">
                    <div
                      className={`absolute inset-y-0 left-0 rounded-full ${b.over ? "bg-gold" : "bg-red"}`}
                      style={{ width: `${Math.min(b.pct, 100)}%` }}
                    />
                    {b.pct > 100 && (
                      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-bold text-ink">
                        +%{b.pct - 100}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-[11px] text-bone/50 leading-relaxed">
              * Projeksiyondur, bağlayıcı değildir. Gerçek sonuçlar lokasyona göre değişir.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-red rounded-2xl p-7 md:p-9 flex flex-col md:flex-row items-start md:items-center gap-5 justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.14em] text-bone/85 font-bold">
              Sonraki adım
            </p>
            <p className="display-font text-xl md:text-2xl text-bone mt-1.5">
              Sana özel fizibilite raporu 3 iş günü içinde hazır.
            </p>
          </div>
          <a
            href="#basvuru"
            className="inline-flex items-center gap-2 bg-bone text-red font-bold rounded-lg px-7 py-4 hover:bg-ink hover:text-bone transition-colors"
          >
            Başvuru formu →
          </a>
        </div>
      </div>
    </section>
  );
}
