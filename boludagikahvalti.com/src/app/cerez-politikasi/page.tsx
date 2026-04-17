import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Çerez Politikası | Bolu Dağı Kahvaltı",
  description: "Bolu Dağı Kahvaltı çerez politikası.",
  alternates: {
    canonical: "https://boludagikahvalti.com/cerez-politikasi",
  },
};

export default function CerezPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-8">
            Çerez Politikası
          </h1>

          <div className="space-y-6 text-foreground-muted leading-relaxed">
            <p>Son güncelleme: Nisan 2026</p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-3">
              Çerez Nedir?
            </h2>
            <p>
              Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınıza kaydedilen
              küçük metin dosyalarıdır. Bu dosyalar sitenin işlevselliğini sağlamak
              ve deneyiminizi iyileştirmek için kullanılır.
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-3">
              Kullanılan Çerez Türleri
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Zorunlu Çerezler:</strong> Sitenin temel işlevleri için gerekli, devre dışı bırakılamaz.</li>
              <li><strong>Analitik Çerezler:</strong> Ziyaretçi istatistikleri toplamak için.</li>
              <li><strong>Pazarlama Çerezleri:</strong> Kişiselleştirilmiş içerik gösterimi için.</li>
              <li><strong>Fonksiyonel Çerezler:</strong> Tercih ve ayarlarınızı hatırlamak için.</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-foreground mt-10 mb-3">
              Çerez Tercihleri
            </h2>
            <p>
              Çerez tercihlerinizi istediğiniz zaman site üzerindeki çerez ayarları
              menüsünden değiştirebilirsiniz. Tarayıcı ayarlarınızdan da çerezleri
              tamamen kapatabilirsiniz; ancak bu durumda sitenin bazı özellikleri
              düzgün çalışmayabilir.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
