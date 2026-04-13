import Link from "next/link";
import { partner } from "@/lib/partner";

const entries = [
  {
    no: "01",
    name: partner.name,
    tag: "Editörün Seçimi",
    location: "Bolu Merkez",
    body: "Bu listenin başında olmasının sebebi alfabetik değil. Eti dinlendirme süresine, közün sıcaklığını dakikaya bölen disiplin ve sade bir menüye sahip. Kuzu pirzolası ve dana antrikotunda sezonun en istikrarlı sonucu burada.",
    link: partner.url,
    isPartner: true,
  },
  {
    no: "02",
    name: "Köroğlu Mangalevi",
    tag: "Klasik Mangal",
    location: "Bolu Dağı yolu",
    body: "Aile işletmesi havasını koruyan, geleneksel ızgara tezgahıyla çalışan bir mekan. Şişlik dana ve kanat tarafı güçlü. Kalabalık akşamlarda servis yavaşlayabilir; öğlenleri tercih edin.",
    link: null,
    isPartner: false,
  },
  {
    no: "03",
    name: "Yayla Köz Evi",
    tag: "Yaylada Mangal",
    location: "Abant yolu",
    body: "Manzaralı bir konum, sade ama doğru bir mutfak. Kuzu pirzola özelliği yok; ama köfte ve şiş tarafında dengeli iş çıkarıyor. Sonbahar akşamlarında masa bulmak güç.",
    link: null,
    isPartner: false,
  },
  {
    no: "04",
    name: "Mengen Ocakbaşı",
    tag: "Ocakbaşı Geleneği",
    location: "Mengen ilçesi",
    body: "Mengen aşçılık geleneğinden gelen, küçük ama derinlikli bir mutfağa sahip. Tezgah üzerinde pişen et, yanında ev usulü mezelerle servis ediliyor. Sürpriz tarifleri olabiliyor.",
    link: null,
    isPartner: false,
  },
  {
    no: "05",
    name: "Bolu Sofrası",
    tag: "Şehir Merkezi",
    location: "Bolu Merkez",
    body: "Şehrin göbeğinde, hızlı servis ve makul fiyat odaklı bir mangal. Hafta içi öğle yemekleri için pratik. Et seçimi sezonluk değişiyor; menüyü güncel takip edin.",
    link: null,
    isPartner: false,
  },
];

export default function GuideList() {
  return (
    <section id="rehber" className="py-16 sm:py-20 lg:py-32 bg-paper">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-6 lg:px-12">
        {/* Bölüm başlığı */}
        <div className="rule-thick pt-3 mb-10 sm:mb-12 lg:mb-16">
          <div className="flex items-baseline justify-between flex-wrap gap-2 sm:gap-4">
            <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-ember">
              Bölüm 03 · Rehber
            </p>
            <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.18em] text-ink-muted">
              Sayfa 03
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-8 md:gap-10 lg:gap-16 mb-12 sm:mb-16">
          <div className="md:col-span-7">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-[64px] leading-[1.02] tracking-tight text-ink font-black">
              Bolu&apos;nun{" "}
              <em className="italic font-light">mangal</em> noktaları.
            </h2>
          </div>
          <div className="md:col-span-5 lg:col-span-4 lg:col-start-9">
            <p className="font-body text-base lg:text-lg text-ink-soft leading-relaxed mb-3">
              Beş mekan, beş farklı yorum. Sıralama editörün kişisel
              tercihidir; alfabetik veya puanlı değildir.
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
              Saha gözlemi · Mart 2026
            </p>
          </div>
        </div>

        {/* Numaralı entry listesi */}
        <div className="space-y-0">
          {entries.map((e) => (
            <article
              key={e.no}
              className={`grid md:grid-cols-12 gap-5 md:gap-6 lg:gap-10 py-8 sm:py-10 lg:py-14 border-t ${
                e.isPartner ? "border-ember" : "border-rule"
              }`}
            >
              <div className="md:col-span-2">
                <p className="entry-number text-6xl sm:text-7xl lg:text-8xl text-ink leading-none">
                  {e.no}
                </p>
              </div>
              <div className="md:col-span-7">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3 font-mono text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.18em]">
                  <span
                    className={
                      e.isPartner ? "text-ember font-semibold" : "text-ink-muted"
                    }
                  >
                    {e.tag}
                  </span>
                  <span className="w-6 h-px bg-rule" />
                  <span className="text-ink-muted">{e.location}</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-ink font-bold mb-3 sm:mb-4 leading-tight">
                  {e.name}
                </h3>
                <p className="font-body text-[15px] sm:text-[16px] lg:text-[17px] leading-relaxed text-ink-soft max-w-[60ch]">
                  {e.body}
                </p>
              </div>
              <div className="md:col-span-3 flex md:items-end md:justify-end">
                {e.link ? (
                  <Link
                    href={e.link}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 border-2 border-ink bg-ink text-paper px-4 sm:px-5 py-2.5 sm:py-3 hover:bg-ember hover:border-ember transition-all font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.14em] sm:tracking-[0.15em]"
                  >
                    Rezervasyon →
                  </Link>
                ) : (
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-muted italic">
                    Sadece kapıdan
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
