import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import StickyCta from "@/components/layout/sticky-cta";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: `${site.name} — 1990'dan beri Bolu Dağı D100 karayolunun üzerinde, 7/24 açık; Bakacak Köftesi ile tanınan aile işletmesi. Hikayemiz, mutfağımız, ustamız.`,
  alternates: { canonical: `${site.url}/hakkimizda` },
};

const zamanCizgisi = [
  {
    yil: "1990",
    baslik: "İlk Köz Yakıldı",
    metin:
      "İbrahim Usta, D100 karayolu kenarında küçük bir sac ve bir köz ocağıyla açtı ilk mekanı. İlk yılın müşterileri: uzun yol sürücüleri ve gece yolcuları.",
  },
  {
    yil: "1997",
    baslik: "Bakacak Köftesi Doğdu",
    metin:
      "Yörenin adıyla anılan imza köfte, dana ve kuzu karışımına eklenen özel baharat harmanıyla menüye girdi. Kısa sürede bölgenin simgesi haline geldi.",
  },
  {
    yil: "2003",
    baslik: "Serpme Kahvaltı",
    metin:
      "40 çeşit yöresel ürünle hazırlanan serpme kahvaltı, lokantayı 24 saat açık bir durağa dönüştürdü. Sabah 05:00'te dolu masalar hâlâ standarttır.",
  },
  {
    yil: "2014",
    baslik: "İkinci Nesil",
    metin:
      "İbrahim Usta'nın oğulları mutfağın kontrolünü devraldı. Baba tarifleri harfiyen korundu; mekan büyüdü, çocuk bahçesi ve TIR konaklama alanı eklendi.",
  },
  {
    yil: "2023",
    baslik: "Köklü Yenileme",
    metin:
      "Salon ve bahçe yenilendi, ancak ocak aynı konumda aynı tuğlalarla kaldı — değişmemesi gereken tek şey o.",
  },
];

export default function HakkimizdaPage() {
  return (
    <>
      <Header />
      <main className="pb-24">
        <section className="relative min-h-[80vh] sm:min-h-[85vh] flex items-end overflow-hidden pt-32 pb-16 sm:pb-24">
          <div className="absolute inset-0">
            <Image
              src="/images/mekan-hero.jpg"
              alt="İbrahim'in Yeri mekanından bir an"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coal via-coal/75 to-coal/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-coal/85 via-coal/30 to-transparent" />
          </div>
          <div className="relative max-w-[1320px] mx-auto px-5 sm:px-8 w-full">
            <div className="max-w-3xl">
              <p className="eyebrow mb-5">Hakkımızda</p>
              <h1 className="display-font text-[clamp(2.5rem,8vw,5.5rem)] text-bone leading-[0.98] tracking-tight text-glow">
                Otuz dört yıldır
                <br />
                <span className="italic text-ember">aynı ateş</span>.
              </h1>
              <p className="mt-8 text-[16px] sm:text-[18px] leading-[1.85] text-bone-soft max-w-xl">
                Bolu Dağı&apos;nın D100 karayolu üzerinde, İstanbul ile Ankara&apos;nın
                ortasında açılan küçük bir ocak; bugün iki neslin, yüzlerce tır
                sürücüsünün ve binlerce ailenin durağı. Bakacak Köftesi&apos;nin
                hikayesi; bir usta, bir baharat karışımı ve hiç sönmeyen bir köz
                etrafında döner.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-[1320px] mx-auto px-5 sm:px-8 mt-20 sm:mt-32">
          <div className="flex items-end justify-between gap-4 mb-12 sm:mb-16 pb-4 border-b border-smoke">
            <h2 className="display-font text-[clamp(1.75rem,5vw,3rem)] text-bone leading-none tracking-tight">
              Zaman Çizgisi
            </h2>
            <span className="mono-font text-[10px] uppercase tracking-[0.2em] text-bone-mute">
              1990 — Bugün
            </span>
          </div>

          <ol className="space-y-12 sm:space-y-16">
            {zamanCizgisi.map((z, i) => (
              <li
                key={z.yil}
                className="grid gap-5 md:grid-cols-[120px_1fr] md:gap-10 items-start"
              >
                <div className="flex items-baseline gap-3 md:block">
                  <p className="display-font text-4xl sm:text-5xl text-ember leading-none italic">
                    {z.yil}
                  </p>
                  {i < zamanCizgisi.length - 1 && (
                    <span className="hidden md:block w-12 h-px bg-ember/50 mt-4" />
                  )}
                </div>
                <div className="border-l-0 md:border-l border-smoke md:pl-8">
                  <h3 className="display-font text-2xl sm:text-3xl text-bone leading-tight mb-3">
                    {z.baslik}
                  </h3>
                  <p className="text-[15px] leading-[1.85] text-bone-soft max-w-2xl italic font-light">
                    {z.metin}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="max-w-[1320px] mx-auto px-5 sm:px-8 mt-20 sm:mt-32 pt-16 sm:pt-20 border-t border-smoke">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] items-start">
            <div>
              <p className="eyebrow-gold mb-4">Felsefemiz</p>
              <h2 className="display-font text-[clamp(1.75rem,5vw,3rem)] text-bone leading-[1.05] tracking-tight">
                Ateş yalan <span className="italic text-gold">söylemez</span>.
              </h2>
            </div>
            <div className="space-y-6 text-[15.5px] leading-[1.85] text-bone-soft">
              <p>
                Mangal bir teknik değil; sabır, dikkat ve saygıdır. Bir kuzu
                pirzolayı beş saniye fazla tutmak eti mahveder; bir köftenin
                baharat oranını yarım gram değiştirmek kimliğini bozar. Bu
                mutfakta her şey ölçülür — ama asıl ölçü elde kalır.
              </p>
              <p>
                Malzemelerimizin çoğu Bolu ve Düzce&apos;nin yöresel
                üreticilerinden gelir. Kuzu Bolu yaylasından, bal Göynük&apos;ten,
                tereyağı Kaynaşlı&apos;dan; sebzeler haftalık pazardan, mevsim
                dışı tek bir domates asla menüye girmez.
              </p>
              <p>
                7/24 açık olmak ticari bir karar değil, bir söz. Saat beşte
                buraya gelip serpme kahvaltısını yiyen bir tır sürücüsü ile saat
                on ikide kuzu pirzola sipariş eden bir aile aynı özeni görmeli —
                bu yüzden ocak hiç sönmez.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
