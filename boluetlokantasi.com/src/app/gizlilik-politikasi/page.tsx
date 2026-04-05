import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://boluetlokantasi.com";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | Bolu Et Lokantası",
  description: "Bolu Et Lokantası gizlilik politikası. Kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında bilgi.",
  alternates: {
    canonical: `${SITE_URL}/gizlilik-politikasi`,
  },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs sm:text-sm text-stone-500 mb-6">
        <Link href="/" className="hover:text-amber-800">Ana Sayfa</Link>
        <span className="mx-1.5 sm:mx-2">/</span>
        <span className="text-stone-700">Gizlilik Politikası</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Gizlilik Politikası</h1>
      <p className="text-stone-500 text-sm mb-8">Son güncelleme: 27 Mart 2026</p>

      <div className="prose prose-lg max-w-none text-stone-700 space-y-6">
        <p>
          Bu gizlilik politikası, <strong>boluetlokantasi.com</strong> (&quot;Site&quot;) tarafından toplanan,
          kullanılan ve korunan kişisel verileri açıklamaktadır. Sitemizi kullanarak bu politikayı
          kabul etmiş sayılırsınız.
        </p>

        <h2>1. Toplanan Bilgiler</h2>
        <p>Sitemiz aşağıdaki bilgileri toplayabilir:</p>
        <ul>
          <li><strong>Otomatik bilgiler:</strong> IP adresi, tarayıcı türü, ziyaret edilen sayfalar, ziyaret süresi ve tarih/saat bilgileri</li>
          <li><strong>Çerezler:</strong> Site deneyiminizi iyileştirmek için kullanılan teknik çerezler</li>
          <li><strong>İletişim bilgileri:</strong> İletişim formu aracılığıyla gönüllü olarak paylaştığınız ad, e-posta ve mesaj içeriği</li>
        </ul>

        <h2>2. Bilgilerin Kullanımı</h2>
        <p>Toplanan bilgiler şu amaçlarla kullanılır:</p>
        <ul>
          <li>Site içeriğinin ve kullanıcı deneyiminin iyileştirilmesi</li>
          <li>Ziyaretçi istatistiklerinin analiz edilmesi</li>
          <li>İletişim taleplerine yanıt verilmesi</li>
          <li>Yasal yükümlülüklerin yerine getirilmesi</li>
        </ul>

        <h2>3. Çerezler</h2>
        <p>
          Sitemiz, işlevselliği sağlamak ve analitik veriler toplamak amacıyla çerez kullanmaktadır.
          Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz; ancak bu, bazı site
          özelliklerinin düzgün çalışmamasına neden olabilir.
        </p>

        <h2>4. Üçüncü Taraf Hizmetleri</h2>
        <p>Sitemiz aşağıdaki üçüncü taraf hizmetlerini kullanabilir:</p>
        <ul>
          <li><strong>Google Analytics:</strong> Ziyaretçi istatistikleri için</li>
          <li><strong>Vercel:</strong> Site barındırma ve performans izleme için</li>
        </ul>
        <p>
          Bu hizmetlerin kendi gizlilik politikaları bulunmaktadır ve kişisel verilerinizi kendi
          politikalarına göre işleyebilirler.
        </p>

        <h2>5. Veri Güvenliği</h2>
        <p>
          Kişisel verilerinizin güvenliğini sağlamak için endüstri standardı güvenlik önlemleri
          (SSL şifreleme, güvenli sunucular) kullanmaktayız. Ancak internet üzerinden veri iletiminin
          %100 güvenli olduğu garanti edilemez.
        </p>

        <h2>6. Haklarınız</h2>
        <p>KVKK (6698 Sayılı Kişisel Verilerin Korunması Kanunu) kapsamında aşağıdaki haklara sahipsiniz:</p>
        <ul>
          <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
          <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
          <li>Kişisel verilerinizin düzeltilmesini veya silinmesini isteme</li>
          <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
        </ul>

        <h2>7. Değişiklikler</h2>
        <p>
          Bu gizlilik politikası zaman zaman güncellenebilir. Değişiklikler bu sayfada yayınlandığı
          anda yürürlüğe girer. Politikayı düzenli olarak kontrol etmenizi öneririz.
        </p>

        <h2>8. İletişim</h2>
        <p>
          Gizlilik politikamız hakkında sorularınız için{" "}
          <Link href="/iletisim" className="text-amber-800 hover:text-amber-900">
            iletişim sayfamızdan
          </Link>{" "}
          bize ulaşabilirsiniz.
        </p>
      </div>
    </div>
  );
}
