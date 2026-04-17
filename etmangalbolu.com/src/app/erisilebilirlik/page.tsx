import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Erişilebilirlik | Bolu Mangal Rehberi",
  description:
    "Bolu Mangal Rehberi erişilebilirlik bildirimi. WCAG 2.1 AA uyumluluğu, erişilebilirlik widget özellikleri ve klavye navigasyonu hakkında bilgi.",
  alternates: {
    canonical: "https://etmangalbolu.com/erisilebilirlik",
  },
};

export default function ErisilebilirlikPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-28 pb-20 bg-paper">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-8">
            Erişilebilirlik Bildirimi
          </h1>

          <div className="font-body max-w-none text-ink-soft space-y-6 text-base leading-relaxed">
            <p className="text-base text-ink">Son güncelleme: Nisan 2026</p>

            <p>
              Bolu Mangal Rehberi olarak, sitemizin engelli bireyler dahil
              herkes tarafından erişilebilir olmasını sağlamaya kararlıyız. Web
              Content Accessibility Guidelines (WCAG) 2.1 AA seviyesine uyum
              sağlamak için sürekli çalışıyoruz.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-8 font-display">
              Erişilebilirlik Widget&apos;ı
            </h2>
            <p>
              Sayfanın sol alt köşesindeki erişilebilirlik simgesine tıklayarak
              siteyi kendi ihtiyaçlarınıza göre özelleştirebilirsiniz. Widget
              şu 8 ayarı sunar:
            </p>
            <ol className="list-decimal ml-6 space-y-2">
              <li>
                <strong>Yazı Boyutu:</strong> Metinleri Normal, Büyük, Daha
                Büyük veya En Büyük olarak ayarlayabilirsiniz.
              </li>
              <li>
                <strong>Kontrast:</strong> Varsayılan, Yüksek Kontrast veya Ters
                (koyu) mod arasında geçiş yapabilirsiniz.
              </li>
              <li>
                <strong>Satır Aralığı:</strong> Metin satır aralıklarını Normal,
                Geniş veya Daha Geniş olarak değiştirebilirsiniz.
              </li>
              <li>
                <strong>Yazı Tipi:</strong> Varsayılan font yerine daha
                okunabilir bir sans-serif font tercih edebilirsiniz.
              </li>
              <li>
                <strong>Link Vurgusu:</strong> Bağlantıları daha belirgin hale
                getirerek kalın ve altı çizili olarak görüntüleyebilirsiniz.
              </li>
              <li>
                <strong>Animasyonlar:</strong> Sayfa üzerindeki tüm hareketli
                öğeleri ve geçişleri durdurabilirsiniz.
              </li>
              <li>
                <strong>İmleç:</strong> Fare imlecini daha büyük ve görünür hale
                getirebilirsiniz.
              </li>
              <li>
                <strong>Görseller:</strong> Sayfadaki görselleri gizleyerek
                sayfayı sadeleştirebilirsiniz.
              </li>
            </ol>
            <p>
              Tercihleriniz cihazınızda otomatik olarak kaydedilir ve bir
              sonraki ziyaretinizde hatırlanır.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-8 font-display">
              Klavye Navigasyonu
            </h2>
            <p>
              Sitemiz tam klavye erişilebilirliği sunar. Tab tuşu ile tüm
              etkileşimli öğeler arasında gezinebilir, Enter veya Space tuşuyla
              bağlantı ve butonları etkinleştirebilirsiniz. Escape tuşu açık
              menüleri ve diyalogları kapatır.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-8 font-display">
              İçeriğe Atla Bağlantısı
            </h2>
            <p>
              Sayfanın en üstünde, Tab tuşuna bastığınızda görünür olan
              &quot;İçeriğe atla&quot; bağlantısı ile doğrudan ana içeriğe
              geçebilir, tekrarlayan navigasyon öğelerini atlayabilirsiniz.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-8 font-display">
              ARIA Etiketleri ve Semantik HTML
            </h2>
            <p>
              Tüm sayfalarımızda semantik HTML5 etiketleri (header, nav, main,
              article, footer) ve uygun ARIA (Accessible Rich Internet
              Applications) etiketleri kullanılmaktadır. Etkileşimli öğeler
              aria-label, aria-expanded, aria-haspopup ve role gibi
              niteliklerle işaretlenmiştir.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-8 font-display">
              Odak Göstergesi (Focus Ring)
            </h2>
            <p>
              Klavye ile gezinirken, o anda odaklanılan öğe belirgin bir çerçeve
              ile vurgulanır. Bu sayede hangi öğe üzerinde olduğunuzu her zaman
              görebilirsiniz.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-8 font-display">
              WCAG 2.1 AA Uyumluluğu
            </h2>
            <p>
              Sitemiz WCAG 2.1 AA seviyesi kriterlerini karşılamayı
              hedeflemektedir. Bu kapsamda:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Metin ve arka plan arasında yeterli renk kontrastı sağlanmaktadır.</li>
              <li>Tüm görsellerde açıklayıcı alternatif metin (alt text) bulunmaktadır.</li>
              <li>Form alanları uygun etiketlerle işaretlenmiştir.</li>
              <li>Sayfa yapısı mantıksal başlık hiyerarşisi izlemektedir.</li>
              <li>Hareket hassasiyeti olan kullanıcılar için animasyonlar azaltılabilmektedir.</li>
              <li>Tüm içerik %200 yakınlaştırmada düzgün görüntülenmektedir.</li>
            </ul>

            <h2 className="text-xl font-semibold text-ink mt-8 font-display">
              Bilinen Sınırlamalar
            </h2>
            <p>
              Sitemizin erişilebilirliğini sürekli iyileştirmekle birlikte, bazı
              üçüncü taraf içerikler (harici linkler, gömülü haritalar vb.) tam
              erişilebilirlik standartlarını karşılamayabilir.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-8 font-display">
              Geri Bildirim
            </h2>
            <p>
              Erişilebilirlik konusunda herhangi bir sorun yaşarsanız veya
              öneriniz varsa lütfen{" "}
              <a
                href="mailto:editor@etmangalbolu.com"
                className="text-ember underline"
              >
                editor@etmangalbolu.com
              </a>{" "}
              adresinden bizimle iletişime geçin. Deneyiminizi iyileştirmek için
              elimizden geleni yapacağız.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-8 font-display">
              Teknik Bilgiler
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Bu site Next.js, TypeScript ve Tailwind CSS ile oluşturulmuştur.</li>
              <li>WCAG 2.1 AA seviyesi hedeflenmektedir.</li>
              <li>
                Desteklenen tarayıcılar: Chrome, Firefox, Safari, Edge (güncel
                sürümler).
              </li>
              <li>
                Desteklenen ekran okuyucular: NVDA, JAWS, VoiceOver.
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
