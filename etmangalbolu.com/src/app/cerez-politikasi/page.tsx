import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Çerez Politikası | Bolu Mangal Rehberi",
  description: "Bolu Mangal Rehberi çerez politikası. Hangi çerezlerin kullanıldığı ve nasıl yönetildiği hakkında bilgi.",
};

export default function CerezPolitikasiPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20 bg-paper">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-8">
            Çerez Politikası
          </h1>
          <div className="font-body max-w-none text-ink-soft space-y-6 text-base leading-relaxed">
            <p className="text-base text-ink">Son güncelleme: 16 Nisan 2026</p>

            <h2 className="text-xl font-semibold text-ink mt-8 font-display">1. Çerez Nedir?</h2>
            <p>
              Çerezler, web sitelerinin tarayıcınıza kaydettiği küçük metin dosyalarıdır.
              Tercihlerinizi hatırlamak, site performansını ölçmek ve deneyiminizi
              iyileştirmek için kullanılır.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-8 font-display">2. Kullanılan Çerez Türleri</h2>

            <h3 className="text-lg font-semibold text-ink mt-6 font-display">Zorunlu Çerezler</h3>
            <p>
              Sitenin düzgün çalışması için gereklidir. Devre dışı bırakılamaz.
              Çerez onay tercihinizi hatırlamak için kullanılır.
            </p>
            <table className="w-full text-sm border border-ink/10 rounded-lg overflow-hidden">
              <thead className="bg-ink/5">
                <tr>
                  <th className="text-left p-3 font-semibold text-ink">Çerez</th>
                  <th className="text-left p-3 font-semibold text-ink">Amaç</th>
                  <th className="text-left p-3 font-semibold text-ink">Süre</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-ink/10">
                  <td className="p-3">cookie_consent</td>
                  <td className="p-3">Çerez tercihlerinizi saklar</td>
                  <td className="p-3">1 yıl</td>
                </tr>
              </tbody>
            </table>

            <h3 className="text-lg font-semibold text-ink mt-6 font-display">Analitik Çerezler</h3>
            <p>
              Ziyaretçi istatistiklerini toplamamıza yardımcı olur. Kişisel kimlik
              bilgileri içermez. Onayınız olmadan aktifleştirilmez.
            </p>
            <table className="w-full text-sm border border-ink/10 rounded-lg overflow-hidden">
              <thead className="bg-ink/5">
                <tr>
                  <th className="text-left p-3 font-semibold text-ink">Çerez</th>
                  <th className="text-left p-3 font-semibold text-ink">Amaç</th>
                  <th className="text-left p-3 font-semibold text-ink">Süre</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-ink/10">
                  <td className="p-3">_ga, _ga_*</td>
                  <td className="p-3">Google Analytics ziyaretçi istatistikleri</td>
                  <td className="p-3">2 yıl</td>
                </tr>
              </tbody>
            </table>

            <h3 className="text-lg font-semibold text-ink mt-6 font-display">Pazarlama Çerezleri</h3>
            <p>
              Kişiselleştirilmiş reklam gösterimi için kullanılır. Onayınız olmadan
              aktifleştirilmez.
            </p>

            <h3 className="text-lg font-semibold text-ink mt-6 font-display">Fonksiyonel Çerezler</h3>
            <p>
              Tema tercihi, dil seçimi gibi ayarlarınızı hatırlamamızı sağlar.
              Onayınız olmadan aktifleştirilmez.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-8 font-display">3. Çerez Yönetimi</h2>
            <p>Çerez tercihlerinizi istediğiniz zaman değiştirebilirsiniz:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Site altbilgisindeki &quot;Çerez Tercihleri&quot; linkine tıklayarak</li>
              <li>Tarayıcınızın çerez ayarlarından tüm çerezleri silerek</li>
              <li>Tarayıcı eklentileri ile çerezleri yöneterek</li>
            </ul>

            <h2 className="text-xl font-semibold text-ink mt-8 font-display">4. Google Consent Mode v2</h2>
            <p>
              Sitemiz Google Consent Mode v2 standartlarına uygundur. Çerez tercihinize
              göre analitik ve pazarlama çerezleri otomatik olarak aktifleştirilir veya
              devre dışı bırakılır.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-8 font-display">5. İletişim</h2>
            <p>
              Çerez politikamızla ilgili sorularınız için{" "}
              <a href="mailto:editor@etmangalbolu.com" className="text-ember underline">editor@etmangalbolu.com</a> adresinden
              bize ulaşabilirsiniz.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
