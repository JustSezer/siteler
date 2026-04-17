import { MapPin } from "lucide-react";

const locations = [
  { city: "Düzce", area: "Kaynaşlı · D100", status: "Aktif", code: "K01" },
  { city: "Bolu", area: "Bakacak Mevki", status: "Aktif", code: "K02" },
  { city: "Ankara", area: "Kızılay bölgesi", status: "Planlı", code: "K03" },
  { city: "İstanbul", area: "Anadolu Yakası pilot", status: "Planlı", code: "K04" },
  { city: "Antalya", area: "Sahil bandı", status: "Başvuruya açık", code: "K05" },
  { city: "İzmir", area: "Üniversite hattı", status: "Başvuruya açık", code: "K06" },
  { city: "Bursa", area: "Merkez + Mudanya", status: "Başvuruya açık", code: "K07" },
  { city: "Gaziantep", area: "Şehir çıkışı", status: "Başvuruya açık", code: "K08" },
];

const statusColor = {
  "Aktif": "bg-red text-bone",
  "Planlı": "bg-gold text-ink",
  "Başvuruya açık": "bg-ink text-bone",
};

export default function Konumlar() {
  return (
    <section className="relative paper-warm py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid md:grid-cols-12 gap-8 items-end mb-12">
          <div className="md:col-span-7">
            <p className="eyebrow mb-3">Bölge Politikası</p>
            <h2 className="display-font text-ink leading-[1.05] text-[36px] md:text-[56px]">
              Türkiye geneli
              <span className="block text-red">81 il başvuruya açık.</span>
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-ink-soft text-lg leading-[1.7]">
              Aşağıda aktif ve plan aşamasındaki karavan konumlarını, ayrıca başvuruya açık
              öncelikli bölgeleri görebilirsin. Listede olmayan şehirler de değerlendirilir.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          {(["Aktif", "Planlı", "Başvuruya açık"] as const).map((s) => (
            <span
              key={s}
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider ${statusColor[s]}`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current" /> {s}
            </span>
          ))}
        </div>

        <div className="bg-bone border border-peach rounded-2xl overflow-hidden">
          <div className="grid grid-cols-12 bg-ink text-bone px-6 py-4 text-[11px] uppercase tracking-wider font-bold">
            <div className="col-span-2">Kod</div>
            <div className="col-span-4">Şehir</div>
            <div className="col-span-4">Bölge</div>
            <div className="col-span-2 text-right">Durum</div>
          </div>
          {locations.map((l, i) => (
            <div
              key={l.code}
              className={`grid grid-cols-12 px-6 py-5 items-center text-sm ${i % 2 === 0 ? "bg-bone" : "bg-cream"} border-t border-peach`}
            >
              <div className="col-span-2 mono-font text-xs font-bold text-red">{l.code}</div>
              <div className="col-span-4 flex items-center gap-2 font-bold text-ink">
                <MapPin className="w-4 h-4 text-muted shrink-0" />
                {l.city}
              </div>
              <div className="col-span-4 text-ink-soft">{l.area}</div>
              <div className="col-span-2 text-right">
                <span
                  className={`inline-block px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${statusColor[l.status as keyof typeof statusColor]}`}
                >
                  {l.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-ink text-bone rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-5 justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-red-soft font-bold">
              Listede yok mu?
            </p>
            <p className="display-font text-xl md:text-2xl mt-1.5">
              Listede olmayan şehirler de değerlendirmeye alınır.
            </p>
          </div>
          <a href="#basvuru" className="btn-red shrink-0">
            Şehrini bildir
          </a>
        </div>
      </div>
    </section>
  );
}
