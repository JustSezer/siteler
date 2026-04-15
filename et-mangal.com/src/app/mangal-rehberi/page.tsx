import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import JsonLd from "@/components/seo/json-ld";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mangal Rehberi — Ateşten Kabuğa Tüm Kurallar",
  description:
    "Mangal nasıl yakılır, kömür nasıl seçilir, ateş haritası nasıl kurulur, et çekirdek sıcaklığı tabloları. Köz başından yazılmış eksiksiz rehber.",
  alternates: { canonical: `${site.url}/mangal-rehberi` },
};

const sections = [
  {
    id: "ates",
    num: "01",
    title: "Ateş & Kömür",
    intro:
      "Mangalın öğretmeni ateştir. Hangi odunu yaktığın, hangi kömürü seçtiğin, alevi mi közü mü beklediğin — bütün pişirme buradan başlar.",
    body: [
      {
        h: "Odun mu, kömür mü?",
        p: "Odun aroması yüksek, kontrolü zordur; köz evresine ulaşmak 40–60 dakika alır. Kömür ise standart ısı verir, hızlıdır. İkisini birleştirmek: kömürü yak, közü oluştur, son 3 dakikada meşe çubukları ekleyerek duman aromasını bindirir.",
      },
      {
        h: "Hangi ağaç?",
        p: "Meşe ve gürgen — yüksek ısı, uzun köz. Kayın — orta ısı, temiz duman. Çam, kavak, söğüt asla kullanılmaz: reçine ve kısa köz. Zeytin ve asma çubuğu ise premium kategoride, özellikle kuzu ile eşleşir.",
      },
      {
        h: "Közün hazır olduğu nasıl anlaşılır?",
        p: "Alev söndüğünde, kömürlerin yüzeyinde grimsi kül tabakası belirdiğinde. Ağırlığın en az %70'i közleşmiş olmalı. Elinizi ızgara yüksekliğinden 10 cm yukarıda tutabilmelisiniz — 3 saniye dayanabiliyorsanız orta ateş, 1 saniye dayanabiliyorsanız yüksek ateş.",
      },
    ],
  },
  {
    id: "et",
    num: "02",
    title: "Et Hazırlığı",
    intro:
      "Et ocağa gelmeden önce olan her şey, ocakta olacak her şeyi belirler. Oda sıcaklığı, tuzlama, yüzey kurutma — üç temel.",
    body: [
      {
        h: "Oda sıcaklığına getir",
        p: "Eti pişirmeden 30–45 dakika önce buzdolabından çıkarın. Temperature shock, dışının yanmasına ve içinin çiğ kalmasına neden olur. Kalın bir antrikot için 1 saat ideal.",
      },
      {
        h: "Kuru tuzlama (dry brine)",
        p: "Et ağırlığının %1'i kadar iri deniz tuzunu yüzeye eşit serpin. Telli ızgara üzerinde, kapaksız, buzdolabında 12 saat bekletin. Yüzey kurur, içte hafif bir nem çekimi olur — kabuğun sırrı.",
      },
      {
        h: "Yüzeyi kurula",
        p: "Kağıt havluyla et yüzeyini tamamen kurulayın. Nemli et, ocakta kızarmaz — buharlaşır. Maillard tepkimesi için yüzey kuru olmalı.",
      },
    ],
  },
  {
    id: "sicaklik",
    num: "03",
    title: "Sıcaklık & Süre",
    intro:
      "İki bölgeli ateş haritası — rehberin en önemli kavramı. Bir tarafta yüksek direkt alev, diğer tarafta dolaylı düşük alan. Et ikisi arasında dans eder.",
    body: [
      {
        h: "İki bölgeli ateş nasıl kurulur?",
        p: "Kömürü mangalın yarısına yığın, diğer yarı boş kalsın. Direkt tarafta kabuk oluşturun (reverse sear için tam tersi geçerli — önce dolaylı, sonra direkt). Kalınlığı 2 cm'yi geçen her et bu yöntemi ister.",
      },
      {
        h: "Çekirdek sıcaklık tablosu",
        p: "Rare 50–52°C · Medium-rare 54–58°C · Medium 60–63°C · Medium-well 65–68°C · Well done 70°C+. Kümes hayvanları için güvenlik eşiği 72°C. Termometre olmadan profesyonel pişirme olmaz — bu bir inanç değil, fizik.",
      },
      {
        h: "Çevirme sıklığı",
        p: "Eski okul: bir defa çevir. Yeni okul: 30 saniyede bir çevir. Bilim yeni okulu onaylar — daha düşük iç sıcaklık farkı, daha homojen pişme. Ancak izgara izi isteyenler için klasik tek çevirme.",
      },
    ],
  },
  {
    id: "dinlendirme",
    num: "04",
    title: "Dinlendirme",
    intro:
      "Eti ocaktan indirmek, pişirmeyi bitirmek değildir. Dinlendirme olmadan servis edilen et, plakta kan sızıntısı bırakır ve içinde dağınık sıcaklık dağılımı taşır.",
    body: [
      {
        h: "Kaç dakika?",
        p: "Kalın kesimler (pirzola, antrikot) için 8–10 dakika. İnce kesimler (fileto, bonfile) için 5–6 dakika. Bütün kuzu but için 15 dakika. Kural: kalınlığın her santimetresi için 1 dakika.",
      },
      {
        h: "Nasıl örtülür?",
        p: "Alüminyum folyoyla gevşek şekilde — asla sıkıca değil. Sıkı folyo etin üzerinde buhar hapseder, oluşturduğunuz kabuğu yumuşatır. Bir tahta üzerinde, sıcak bir köşede bekletin.",
      },
      {
        h: "Neden atlanmamalı?",
        p: "Pişme sırasında et liflerinin merkezindeki basınç artar ve sular dışarı doğru hareket eder. Dinlendirme, o basıncı eşitler — kestiğinizde, sular akmak yerine lifin içinde kalır. Lezzet bu yeniden dağılımdadır.",
      },
    ],
  },
];

export default function MangalRehberiPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Mangal Rehberi — Ateşten Kabuğa Tüm Kurallar",
    description:
      "Mangal nasıl yakılır, kömür nasıl seçilir, ateş haritası nasıl kurulur, et çekirdek sıcaklığı tabloları.",
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
  };

  return (
    <>
      <Header />
      <main className="pt-24 sm:pt-32 pb-16 sm:pb-20 paper-grain">
        {/* Kapak */}
        <header className="max-w-[1180px] mx-auto px-5 sm:px-8 mb-12 sm:mb-24">
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14 items-end">
            <div>
              <p className="eyebrow mb-4 sm:mb-5">Rehber · Dört Bölüm</p>
              <h1 className="display-font text-[clamp(2.6rem,10vw,5.25rem)] lg:text-[84px] leading-[0.98] sm:leading-[0.95] text-ink tracking-tight">
                Mangal{" "}
                <span className="italic text-ember font-normal">Rehberi</span>
              </h1>
              <p className="mt-6 sm:mt-7 max-w-xl text-[16px] sm:text-[18px] leading-[1.75] sm:leading-[1.8] text-ink-soft font-body italic">
                Ateş, et, sıcaklık ve dinlendirme — dört temel direk. Her biri
                diğeri olmadan eksiktir. Rehberi sırayla okuyun; tabloları
                geriye dönüp kontrol edin.
              </p>
            </div>
            <figure className="relative aspect-[4/5] overflow-hidden lg:mb-0">
              <Image
                src="https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=85"
                alt="Izgara üzerinde pişen et — köz alevleri"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </figure>
          </div>
        </header>

        {sections.map((s, idx) => (
          <section
            key={s.id}
            id={s.id}
            className="max-w-[1180px] mx-auto px-5 sm:px-8 mb-14 sm:mb-28 scroll-mt-32"
          >
            <div className="grid gap-6 sm:gap-10 lg:grid-cols-[280px_1fr]">
              <div>
                <span className="numero block text-4xl sm:text-5xl lg:text-[inherit]">{s.num}</span>
                <h2 className="display-font text-2xl sm:text-3xl lg:text-4xl text-ink mt-2 sm:mt-3 leading-[1.1] sm:leading-[1.02] tracking-tight">
                  {s.title}
                </h2>
                {idx < 3 && (
                  <div
                    aria-hidden
                    className="mt-8 w-16 h-px bg-ember hidden lg:block"
                  />
                )}
              </div>
              <div>
                <p className="text-[17px] sm:text-[19px] leading-[1.72] text-ink italic border-l-2 border-ember pl-4 sm:pl-5 mb-8 sm:mb-10 font-display">
                  {s.intro}
                </p>
                <div className="prose-paper">
                  {s.body.map((b, i) => (
                    <div key={i}>
                      <h3>{b.h}</h3>
                      <p>{b.p}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>
      <Footer />
      <JsonLd data={articleSchema} />
    </>
  );
}
