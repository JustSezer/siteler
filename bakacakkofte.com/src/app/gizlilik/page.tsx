import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description:
    "Bakacak Köfte gizlilik politikası. KVKK kapsamında kişisel verilerin işlenmesi, saklanması ve kullanıcı hakları.",
  alternates: { canonical: "https://bakacakkofte.com/gizlilik" },
};

export default function GizlilikPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-28 pb-20 bg-bone">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <h1 className="display-font text-3xl sm:text-4xl font-bold text-ink mb-8">
            Gizlilik Politikası
          </h1>
          <div className="max-w-none text-ink-2 space-y-6 text-base leading-relaxed">
            <p className="text-base text-ink">Son güncelleme: 17 Nisan 2026</p>

            <p>
              Bakacak Köfte olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK)
              kapsamında veri sorumlusu sıfatıyla, kişisel verilerinizin korunmasına önem veriyoruz.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-8 display-font">1. Toplanan Veriler</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>İletişim formu aracılığıyla: ad, soyad, e-posta, telefon, mesaj içeriği</li>
              <li>Franchise başvurusu için: yatırım kapasitesi, hedef bölge, iş deneyimi</li>
              <li>Web sitesi kullanımından: IP adresi, tarayıcı bilgisi, çerez verileri</li>
            </ul>

            <h2 className="text-xl font-semibold text-ink mt-8 display-font">2. Verilerin İşlenme Amaçları</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Franchise başvuru taleplerini değerlendirmek</li>
              <li>Bilgi taleplerine cevap vermek</li>
              <li>Yasal yükümlülükleri yerine getirmek</li>
              <li>Web sitesi deneyimini iyileştirmek</li>
            </ul>

            <h2 className="text-xl font-semibold text-ink mt-8 display-font">3. Kullanıcı Hakları (KVKK md. 11)</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>İşlenen kişisel verileriniz hakkında bilgi talep etme</li>
              <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
              <li>Eksik veya yanlış işlenmiş verilerinizin düzeltilmesini isteme</li>
              <li>KVKK&apos;nın 7. maddesi çerçevesinde verilerinizin silinmesini veya yok edilmesini isteme</li>
              <li>İşlemlerin üçüncü kişilere bildirilmesini isteme</li>
              <li>Verilerinizin otomatik sistemlerle analiz edilmesine itiraz etme</li>
              <li>Kanuna aykırı işleme nedeniyle uğradığınız zararın giderilmesini talep etme</li>
            </ul>

            <h2 className="text-xl font-semibold text-ink mt-8 display-font">4. Veri Güvenliği</h2>
            <p>
              Kişisel verileriniz; endüstri standardı şifreleme, güvenli veri merkezleri ve
              erişim kontrolleri ile korunur. Verileriniz; ticari amaçla üçüncü kişilerle
              paylaşılmaz.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-8 display-font">5. Saklama Süresi</h2>
            <p>
              Franchise başvuru verileri, başvuru kapanışından itibaren 2 yıl; iletişim formu
              verileri 1 yıl saklanır. Yasal süreler dolmadan silinme talebi halinde değerlendirilir.
            </p>

            <h2 className="text-xl font-semibold text-ink mt-8 display-font">6. İletişim</h2>
            <p>
              Haklarınızı kullanmak için{" "}
              <a href="mailto:franchise@bakacakkofte.com" className="text-red underline">
                franchise@bakacakkofte.com
              </a>{" "}
              adresine yazılı başvuru yapabilirsiniz.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
