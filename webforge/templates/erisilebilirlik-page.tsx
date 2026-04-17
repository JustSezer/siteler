import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Erişilebilirlik",
  description: "SITE_NAME erişilebilirlik politikası ve site ayarlama seçenekleri.",
};

export default function ErisilebilirlikPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Erişilebilirlik
          </h1>
          <p className="text-lg leading-relaxed opacity-80 mb-10">
            SITE_NAME olarak, web sitemizin mümkün olan en geniş kitleye
            erişilebilir olmasını sağlamayı taahhüt ediyoruz.
          </p>

          <div className="space-y-10 text-base leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold mb-3">Uyumluluk Standardı</h2>
              <p className="opacity-80">
                Web Content Accessibility Guidelines (WCAG) 2.1, AA seviyesini
                hedefliyoruz. Bu standart, içeriğin görme, işitme, motor ve bilişsel
                engelli bireyler dahil herkes tarafından kullanılabilir olmasını sağlar.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Ayarlanabilir Görüntüleme</h2>
              <p className="opacity-80 mb-4">
                Sol alttaki erişilebilirlik butonunu kullanarak aşağıdaki ayarları
                değiştirebilirsiniz:
              </p>
              <ul className="space-y-2 opacity-80">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-current shrink-0" />
                  <span><strong>Yazı boyutu</strong> — 4 farklı boyut seçeneği</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-current shrink-0" />
                  <span><strong>Kontrast</strong> — Yüksek kontrast ve ters renk modu</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-current shrink-0" />
                  <span><strong>Satır aralığı</strong> — Metin okunabilirliğini artırma</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-current shrink-0" />
                  <span><strong>Yazı tipi</strong> — Okunabilir sans-serif alternatifi</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Navigasyon ve Görme</h2>
              <ul className="space-y-2 opacity-80">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-current shrink-0" />
                  <span><strong>Klavye navigasyonu</strong> — Tüm işlevler Tab, Enter ve Esc ile kullanılabilir</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-current shrink-0" />
                  <span><strong>Belirgin odak halkası</strong> — Aktif eleman her zaman görünür</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-current shrink-0" />
                  <span><strong>&quot;İçeriğe atla&quot; bağlantısı</strong> — Tab tuşu ile hızlı içerik erişimi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-current shrink-0" />
                  <span><strong>Alternatif görsel metni</strong> — Tüm görsellerde açıklayıcı alt metni</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-current shrink-0" />
                  <span><strong>Kontrast oranı</strong> — WCAG AA standardında minimum 4.5:1</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Ek Yardımcı Araçlar</h2>
              <ul className="space-y-2 opacity-80">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-current shrink-0" />
                  <span><strong>Link vurgusu</strong> — Tüm bağlantılar belirgin hale getirilebilir</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-current shrink-0" />
                  <span><strong>Animasyon kontrolü</strong> — Tüm hareketler durdurulabilir</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-current shrink-0" />
                  <span><strong>Büyük imleç</strong> — Fare imleci büyütülebilir</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-current shrink-0" />
                  <span><strong>Görselleri gizleme</strong> — Sayfa sadeleştirilebilir</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Teknik Altyapı</h2>
              <ul className="space-y-2 opacity-80">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-current shrink-0" />
                  <span>Semantik HTML ve ARIA etiketleri</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-current shrink-0" />
                  <span>%200 yakınlaştırma desteği</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-current shrink-0" />
                  <span>Duyarlı (responsive) tasarım</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-current shrink-0" />
                  <span>Türkçe dil tanımı (lang=&quot;tr&quot;)</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Geri Bildirim</h2>
              <p className="opacity-80">
                Erişilebilirlik konusunda bir sorunla karşılaşırsanız veya
                önerileriniz varsa lütfen{" "}
                <a href="mailto:SITE_EMAIL" className="underline">
                  SITE_EMAIL
                </a>{" "}
                adresinden bize ulaşın. Geri bildirimleriniz sitemizi herkes
                için daha erişilebilir hale getirmemize yardımcı olur.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">Sürekli İyileştirme</h2>
              <p className="opacity-80">
                Erişilebilirlik çalışmalarımız devam eden bir süreçtir. Sitemizi
                düzenli olarak test ediyor ve WCAG standartlarına uyumluluğumuzu
                artırmak için iyileştirmeler yapıyoruz.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
