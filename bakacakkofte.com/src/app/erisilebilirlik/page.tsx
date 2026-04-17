import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Erişilebilirlik",
  description:
    "Bakacak Köfte erişilebilirlik bildirimi. WCAG 2.1 AA uygunluk, erişilebilirlik özellikleri ve iletişim bilgileri.",
  alternates: { canonical: "https://bakacakkofte.com/erisilebilirlik" },
};

export default function ErisilebilirlikPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-28 pb-20 bg-bone">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <h1 className="display-font text-3xl sm:text-4xl font-bold text-ink mb-8">
            Erişilebilirlik Bildirimi
          </h1>
          <div className="max-w-none text-ink-2 space-y-6 text-base leading-relaxed">
            <p className="text-base text-ink">Son güncelleme: 17 Nisan 2026</p>

            <p>
              Bakacak Köfte olarak web sitemizin engelli bireyler dahil herkes tarafından
              erişilebilir olmasını önemsiyoruz. Sitemiz WCAG 2.1 AA standartlarına uygunluk
              hedefiyle tasarlanmış ve geliştirilmiştir.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-8 display-font">Erişilebilirlik Aracımız</h2>
            <p>
              Sayfanın sol alt köşesinde yer alan erişilebilirlik butonu ile aşağıdaki
              ayarları kişisel tercihlerinize göre yapılandırabilirsiniz. Tercihleriniz
              tarayıcınızda otomatik olarak kaydedilir.
            </p>

            {[
              ["1. Yazı Boyutu", "Metinleri Normal, Büyük, Daha Büyük veya En Büyük olarak ayarlayabilirsiniz. Tüm sayfa metinlerini orantılı şekilde büyütür."],
              ["2. Kontrast", "Varsayılan renk şemasını değiştirebilirsiniz. Yüksek Kontrast modu renk farklarını artırırken, Ters (Koyu) modu tüm renkleri ters çevirir."],
              ["3. Satır Aralığı", "Metin satırları arasındaki boşluğu Geniş veya Daha Geniş olarak ayarlayabilirsiniz."],
              ["4. Yazı Tipi", "Varsayılan fontu, yüksek okunabilirliğe sahip sans-serif sistem fontuna değiştirebilirsiniz."],
              ["5. Link Vurgusu", "Güçlü modu etkinleştirildiğinde tüm bağlantılar kalın ve altı çizili olarak gösterilir."],
              ["6. Animasyonlar", "Tüm sayfa animasyonlarını ve geçiş efektlerini durdurabilirsiniz."],
              ["7. İmleç", "Fare imlecini standart boyutun iki katına büyüterek ekranda daha kolay takip edilmesini sağlayabilirsiniz."],
              ["8. Görseller", "Tüm görselleri gizleyerek sayfayı sadece metin içeriğine indirgeyebilirsiniz."],
            ].map(([title, body]) => (
              <div key={title}>
                <h3 className="text-lg font-semibold text-ink mt-6 display-font">{title}</h3>
                <p>{body}</p>
              </div>
            ))}

            <h2 className="text-xl font-semibold text-ink mt-8 display-font">Klavye Navigasyonu</h2>
            <p>Sitemiz tamamen klavye ile kullanılabilir şekilde tasarlanmıştır:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-ink">Tab</strong> ile tüm interaktif elemanlar arasında gezinebilirsiniz.</li>
              <li><strong className="text-ink">Shift + Tab</strong> ile geri yönde hareket edebilirsiniz.</li>
              <li><strong className="text-ink">Enter / Space</strong> ile buton ve bağlantıları etkinleştirebilirsiniz.</li>
              <li><strong className="text-ink">Escape</strong> ile açık diyalogları ve panelleri kapatabilirsiniz.</li>
            </ul>

            <h2 className="text-xl font-semibold text-ink mt-8 display-font">İçeriğe Atla Bağlantısı</h2>
            <p>
              Her sayfanın başında gizli bir &quot;İçeriğe atla&quot; bağlantısı bulunur.
              Tab tuşuna bastığınızda bu bağlantı görünür hale gelir ve doğrudan ana
              içeriğe atlamanızı sağlar.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-8 display-font">ARIA ve Semantik HTML</h2>
            <p>
              Tüm sayfalar semantik HTML etiketleri ve uygun ARIA etiketleri ile
              yapılandırılmıştır. Ekran okuyucular sayfa içeriğini doğru şekilde
              yorumlayabilir.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-8 display-font">WCAG 2.1 AA Uygunluğu</h2>
            <p>Sitemiz WCAG 2.1 AA seviyesine uygunluk hedeflemektedir:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Yeterli renk kontrast oranları sağlanmıştır.</li>
              <li>Tüm görseller açıklayıcı alt metin içerir.</li>
              <li>Formlar etiketli ve hata mesajları anlaşılırdır.</li>
              <li>Sayfa yapısı tutarlı ve önceden tahmin edilebilirdir.</li>
              <li>Metin yeniden boyutlandırmada içerik kaybı yaşamaz.</li>
            </ul>

            <h2 className="text-xl font-semibold text-ink mt-8 display-font">Geri Bildirim</h2>
            <p>
              Sitemizde erişilebilirlik ile ilgili herhangi bir sorunla karşılaştığınızda
              veya iyileştirme öneriniz olduğunda bizimle iletişime geçmekten çekinmeyin:
            </p>
            <p>
              <a href="mailto:franchise@bakacakkofte.com" className="text-red underline">
                franchise@bakacakkofte.com
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
