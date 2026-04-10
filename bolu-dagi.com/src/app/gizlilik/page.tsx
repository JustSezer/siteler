import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Gizlilik Politikasi | Bolu Dagi Rehberi",
  description: "Bolu Dagi Rehberi gizlilik politikasi. Kişisel verilerinizin nasıl toplandigi, işlendiği ve korundugu hakkında bilgi.",
};

export default function GizlilikPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Gizlilik Politikasi
          </h1>
          <div className="prose prose-green max-w-none text-muted-foreground space-y-6 text-base leading-relaxed">
            <p className="text-base text-foreground">
              Son güncelleme: 10 Nisan 2026
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">1. Toplanan Veriler</h2>
            <p>
              Bolu Dagi Rehberi olarak, sitemizi ziyaret ettiginizde asagidaki verileri toplayabiliriz:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP adresi ve tarayici bilgileri (analitik amacli)</li>
              <li>Çerez tercihleri</li>
              <li>İletişim formu uzerinden gonderdiginiz bilgiler (ad, e-posta, mesaj)</li>
              <li>Sayfa goruntulenme verileri ve site ici etkilesimler</li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground mt-8">2. Verilerin Kullanim Amaci</h2>
            <p>Toplanan veriler asagidaki amaclarla kullanilir:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Site performansinin izlenmesi ve iyilestirilmesi</li>
              <li>Kullanici deneyiminin kisisellestirilmesi</li>
              <li>İletişim taleplerine yanit verilmesi</li>
              <li>Yasal yukumluluklerin yerine getirilmesi</li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground mt-8">3. Cerezler</h2>
            <p>
              Sitemiz zorunlu, analitik, pazarlama ve fonksiyonel cerezler kullanmaktadir.
              Çerez tercihlerinizi site altbilgisindeki &quot;Çerez Tercihleri&quot; linkinden
              istediğiniz zaman degistirebilirsiniz. Detayli bilgi için{" "}
              <a href="/cerez-politikasi" className="text-primary underline">Çerez Politikamizi</a> inceleyiniz.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">4. Veri Paylasimi</h2>
            <p>
              Kişisel verileriniz, yasal zorunluluklar dışında ucuncu taraflarla paylasilmaz.
              Analitik hizmetleri (Google Analytics gibi) anonimlestirilmis veriler kullanir.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">5. Veri Guvenligi</h2>
            <p>
              Verilerinizin guvenligini saglamak için SSL sertifikasi, güvenli sunucu altyapisi
              ve erisim kontrolleri gibi teknik onlemler alinmaktadir.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">6. Haklariniz (KVKK)</h2>
            <p>6698 sayili Kişisel Verilerin Korunmasi Kanunu kapsaminda asagidaki haklara sahipsiniz:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Kişisel verilerinizin islenip islenmedigini ogrenme</li>
              <li>Islenmisse buna iliskin bilgi talep etme</li>
              <li>Verilerin işlenme amacini ogrenme</li>
              <li>Eksik veya yanlis işlenmiş verilerin duzeltilmesini isteme</li>
              <li>Verilerin silinmesini veya yok edilmesini isteme</li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground mt-8">7. İletişim</h2>
            <p>
              Gizlilik politikamizla ilgili sorulariniz için{" "}
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
