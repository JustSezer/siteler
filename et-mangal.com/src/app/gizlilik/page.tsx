import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description:
    "et-mangal.com kişisel veri politikası, çerez kullanımı ve kullanıcı haklarına ilişkin bilgilendirme.",
  alternates: { canonical: `${site.url}/gizlilik` },
};

export default function GizlilikPage() {
  return (
    <>
      <Header />
      <main className="pt-24 sm:pt-32 pb-16 sm:pb-20">
        <article className="max-w-[780px] mx-auto px-5 sm:px-8 prose-paper">
          <p className="eyebrow mb-4">Son Güncelleme · 2026</p>
          <h1 className="display-font text-[clamp(2.25rem,8vw,3.75rem)] leading-[1] sm:leading-[0.95] text-ink mb-8 sm:mb-10 tracking-tight">
            Gizlilik{" "}
            <span className="italic text-ember font-normal">Politikası</span>
          </h1>

          <p>
            et-mangal.com (“site”) ziyaretçilerin gizliliğine saygı duyar ve
            Türkiye Cumhuriyeti 6698 sayılı Kişisel Verilerin Korunması Kanunu
            (KVKK) başta olmak üzere ilgili mevzuata tam uyum gözetir.
          </p>

          <h2>Toplanan Veriler</h2>
          <p>
            Site üzerinde temel ziyaret istatistikleri (anonim sayfa görüntüleme,
            tarayıcı türü, ziyaret süresi) toplanır. Yorum veya iletişim
            formlarında gönüllü olarak paylaştığınız ad, e-posta ve mesaj
            içeriği yalnızca size geri dönüş amacıyla saklanır.
          </p>

          <h2>Çerezler</h2>
          <p>
            Site, kullanıcı deneyimini iyileştirmek için zorunlu çerezler ve
            isteğe bağlı analitik çerezler kullanabilir. Tarayıcı ayarlarınızdan
            çerezleri istediğiniz zaman reddedebilirsiniz.
          </p>

          <h2>Üçüncü Taraflar</h2>
          <p>
            Harici bağlantılar (önerilen mekan bağlantıları dahil) üçüncü
            tarafların kendi gizlilik politikalarına tabidir. Site bu harici
            kaynakların içeriğinden sorumlu değildir.
          </p>

          <h2>Haklarınız</h2>
          <p>
            KVKK kapsamında verilerinize erişme, düzeltme, silme ve işlenmesine
            itiraz etme haklarına sahipsiniz. Bu talepleriniz için{" "}
            <a href="mailto:merhaba@et-mangal.com">merhaba@et-mangal.com</a>{" "}
            adresinden bize ulaşabilirsiniz.
          </p>

          <h2>Değişiklikler</h2>
          <p>
            Bu politika gerektiğinde güncellenebilir. Güncel sürüm her zaman bu
            sayfada yayınlanır.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
