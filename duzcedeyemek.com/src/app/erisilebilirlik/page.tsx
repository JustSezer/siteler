import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Erişilebilirlik | Düzce'de Yemek",
  description:
    "Düzce'de Yemek erişilebilirlik taahhüdü. WCAG 2.1 AA standartlarına uygun, herkes için erişilebilir bir deneyim sunuyoruz.",
  alternates: {
    canonical: "https://duzcedeyemek.com/erisilebilirlik",
  },
};

export default function ErisilebilirlikPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-28 pb-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Erişilebilirlik
          </h1>

          <div className="prose-custom space-y-6 text-muted-foreground leading-relaxed">
            <p>Son güncelleme: Nisan 2026</p>

            <p>
              Düzce&apos;de Yemek olarak, web sitemizin engelli bireyler dahil
              herkes tarafından erişilebilir olmasını sağlamayı taahhüt ediyoruz.
              Sitemiz WCAG 2.1 AA standartlarına uygun olarak tasarlanmıştır.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-3">
              Erişilebilirlik Aracımız
            </h2>
            <p>
              Sayfanın sol alt köşesindeki erişilebilirlik simgesine tıklayarak
              aşağıdaki ayarları kişiselleştirebilirsiniz:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Yazı Boyutu:</strong> Metinleri normal, büyük, daha
                büyük veya en büyük boyuta getirebilirsiniz.
              </li>
              <li>
                <strong>Kontrast:</strong> Yüksek kontrast modu veya ters
                (koyu) renk şeması seçebilirsiniz.
              </li>
              <li>
                <strong>Satır Aralığı:</strong> Metin satır aralıklarını
                geniş veya daha geniş yapabilirsiniz.
              </li>
              <li>
                <strong>Yazı Tipi:</strong> Daha okunabilir bir sans-serif
                yazı tipine geçebilirsiniz.
              </li>
              <li>
                <strong>Link Vurgusu:</strong> Bağlantıları daha belirgin
                hale getirebilirsiniz (kalın, altı çizili).
              </li>
              <li>
                <strong>Animasyonlar:</strong> Sayfa animasyonlarını ve
                geçiş efektlerini durdurabilirsiniz.
              </li>
              <li>
                <strong>Büyük İmleç:</strong> Fare imlecini daha büyük ve
                görünür hale getirebilirsiniz.
              </li>
              <li>
                <strong>Görsel Gizleme:</strong> Görselleri gizleyerek
                sayfayı sadeleştirebilirsiniz.
              </li>
            </ul>
            <p>
              Tercihleriniz cihazınızda otomatik olarak kaydedilir ve bir
              sonraki ziyaretinizde korunur.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-3">
              Teknik Erişilebilirlik Özellikleri
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Klavye Navigasyonu:</strong> Tüm interaktif öğeler
                klavye ile erişilebilirdir. Tab tuşuyla gezinebilirsiniz.
              </li>
              <li>
                <strong>İçeriğe Atla Bağlantısı:</strong> Sayfa yüklendiğinde
                Tab tuşuna basarak doğrudan ana içeriğe atlayabilirsiniz.
              </li>
              <li>
                <strong>ARIA Etiketleri:</strong> Ekran okuyucular için tüm
                interaktif öğeler uygun ARIA etiketleriyle işaretlenmiştir.
              </li>
              <li>
                <strong>Odak Halkası:</strong> Klavye ile gezinirken odaklanan
                öğeler belirgin bir halka ile vurgulanır.
              </li>
              <li>
                <strong>Semantik HTML:</strong> Sayfa yapısı anlamlı HTML
                etiketleri ile oluşturulmuştur (header, nav, main, footer,
                article vb.).
              </li>
              <li>
                <strong>Görsel Alternatif Metinler:</strong> Tüm görseller
                açıklayıcı alt metinleri içerir.
              </li>
              <li>
                <strong>WCAG 2.1 AA Uyumu:</strong> Renk kontrastları, metin
                boyutları ve etkileşim alanları WCAG 2.1 AA kriterlerine
                uygun şekilde tasarlanmıştır.
              </li>
            </ul>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-3">
              Geri Bildirim
            </h2>
            <p>
              Erişilebilirlik konusunda herhangi bir sorun yaşarsanız veya
              önerileriniz varsa lütfen bizimle iletişime geçin:
            </p>
            <p>
              <a
                href="mailto:info@duzcedeyemek.com"
                className="text-primary underline"
              >
                info@duzcedeyemek.com
              </a>
            </p>
            <p>
              Geri bildirimleriniz sitemizi daha erişilebilir hale getirmemize
              yardımcı olur. Bildirilen sorunları en kısa sürede
              değerlendirmeyi taahhüt ediyoruz.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
