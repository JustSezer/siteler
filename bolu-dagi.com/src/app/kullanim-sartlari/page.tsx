import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Kullanim Sartlari | Bolu Dagi Rehberi",
  description: "Bolu Dagi Rehberi web sitesinin kullanim sartlari ve kosullari.",
};

export default function KullanimSartlariPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Kullanim Sartlari
          </h1>
          <div className="prose prose-green max-w-none text-muted-foreground space-y-6 text-base leading-relaxed">
            <p className="text-base text-foreground">
              Son güncelleme: 10 Nisan 2026
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">1. Genel Kosullar</h2>
            <p>
              Bu web sitesini kullanarak asagidaki sartlari kabul etmis sayilirsiniz.
              Bolu Dagi Rehberi, bu sartlari önceden haber vermeksizin degistirme hakkini sakli tutar.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">2. İçerik Kullanimi</h2>
            <p>
              Sitemizdeki tum icerikler (metin, görsel, tasarim) telif hakki ile korunmaktadir.
              Ticari amacla kopyalanmasi, cogaltilmasi veya dagitilmasi yasaktir.
              Kişisel ve egitim amacli kullanim için kaynak belirtilerek paylasilabilir.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">3. Bilgi Dogrulugu</h2>
            <p>
              Sitemizde yer alan bilgiler rehber niteligi tasimaktadir. Fiyatlar, çalışma saatleri,
              ulaşım bilgileri ve diger detaylar degiskenlik gosterebilir. Seyahat planlamanizda
              güncel kaynaklardan teyit almanizi oneririz.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">4. Sorumluluk Siniri</h2>
            <p>
              Bolu Dagi Rehberi, sitede yer alan bilgilerin kullanimindan dogan
              dogrudan veya dolayli zaralardan sorumlu tutulamaz. Doğa aktiviteleri
              kişisel sorumluluk altinda yapilmalidir.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">5. Dis Baglantilar</h2>
            <p>
              Sitemiz ucuncu taraf web sitelerine baglantilar icerebilir. Bu sitelerin
              içerik ve gizlilik politikalarindan Bolu Dagi Rehberi sorumlu degildir.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">6. Uygulanacak Hukuk</h2>
            <p>
              Bu kullanim sartlari Türkiye Cumhuriyeti kanunlarina tabidir. Uyusmazliklarda
              Bolu Mahkemeleri ve Icra Daireleri yetkilidir.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">7. İletişim</h2>
            <p>
              Kullanim sartlariyla ilgili sorulariniz için{" "}
              <a href="mailto:info@bolu-dagi.com" className="text-primary underline">info@bolu-dagi.com</a> adresinden
              bize ulasabilirsiniz.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
