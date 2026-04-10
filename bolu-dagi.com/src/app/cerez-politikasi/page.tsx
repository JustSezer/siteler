import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Çerez Politikasi | Bolu Dagi Rehberi",
  description: "Bolu Dagi Rehberi çerez politikasi. Hangi cerezlerin kullanildigi ve nasıl yonetildigi hakkında bilgi.",
};

export default function CerezPolitikasiPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Çerez Politikasi
          </h1>
          <div className="prose prose-green max-w-none text-muted-foreground space-y-6 text-base leading-relaxed">
            <p className="text-base text-foreground">
              Son güncelleme: 10 Nisan 2026
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">1. Çerez Nedir?</h2>
            <p>
              Cerezler, web sitelerinin tarayiciniza kaydettigi kucuk metin dosyalaridir.
              Tercihlerinizi hatirlamak, site performansini olcmek ve deneyiminizi
              iyilestirmek için kullanilir.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">2. Kullanilan Çerez Turleri</h2>

            <h3 className="text-lg font-semibold text-foreground mt-6">Zorunlu Cerezler</h3>
            <p>
              Sitenin düzgün calismasi için gereklidir. Devre dışı birakilamaz.
              Çerez onay tercihinizi hatirlamak için kullanilir.
            </p>
            <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-3 font-semibold text-foreground">Çerez</th>
                  <th className="text-left p-3 font-semibold text-foreground">Amac</th>
                  <th className="text-left p-3 font-semibold text-foreground">Sure</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="p-3">cookie_consent</td>
                  <td className="p-3">Çerez tercihlerinizi saklar</td>
                  <td className="p-3">1 yıl</td>
                </tr>
              </tbody>
            </table>

            <h3 className="text-lg font-semibold text-foreground mt-6">Analitik Cerezler</h3>
            <p>
              Ziyaretci istatistiklerini toplamamiza yardimci olur. Kişisel kimlik
              bilgileri icermez. Onayniz olmadan aktiflestirilmez.
            </p>
            <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-3 font-semibold text-foreground">Çerez</th>
                  <th className="text-left p-3 font-semibold text-foreground">Amac</th>
                  <th className="text-left p-3 font-semibold text-foreground">Sure</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="p-3">_ga, _ga_*</td>
                  <td className="p-3">Google Analytics ziyaretci istatistikleri</td>
                  <td className="p-3">2 yıl</td>
                </tr>
              </tbody>
            </table>

            <h3 className="text-lg font-semibold text-foreground mt-6">Pazarlama Cerezleri</h3>
            <p>
              Kisisellestirilmis reklam gosterimi için kullanilir. Onayniz olmadan
              aktiflestirilmez.
            </p>

            <h3 className="text-lg font-semibold text-foreground mt-6">Fonksiyonel Cerezler</h3>
            <p>
              Tema tercihi, dil secimi gibi ayarlarinizi hatirlamamizi saglar.
              Onayniz olmadan aktiflestirilmez.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">3. Çerez Yonetimi</h2>
            <p>
              Çerez tercihlerinizi istediğiniz zaman degistirebilirsiniz:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Site altbilgisindeki &quot;Çerez Tercihleri&quot; linkine tiklayarak</li>
              <li>Tarayicinizin çerez ayarlarindan tum cerezleri silerek</li>
              <li>Tarayici eklentileri ile cerezleri yoneterek</li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground mt-8">4. Google Consent Mode v2</h2>
            <p>
              Sitemiz Google Consent Mode v2 standartlarina uygundur. Çerez tercihinize
              gore analitik ve pazarlama cerezleri otomatik olarak aktiflestirilir veya
              devre dışı birakilir.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">5. İletişim</h2>
            <p>
              Çerez politikamizla ilgili sorulariniz için{" "}
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
