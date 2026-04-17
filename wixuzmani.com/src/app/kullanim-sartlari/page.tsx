import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kullanım Şartları",
  description:
    "Wix Uzmanı web sitesi ve hizmet kullanım şartları. Sitenin ve hizmetlerin kullanımını düzenleyen genel koşullar.",
  alternates: { canonical: `${SITE.url}/kullanim-sartlari` },
};

export default function KullanimSartlariPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 lg:px-6 py-16 prose-content">
      <span className="eyebrow mb-3 block">Yasal</span>
      <h1 className="text-3xl lg:text-4xl font-bold text-[var(--emerald-900)] leading-tight">
        Kullanım Şartları
      </h1>
      <p className="mt-3 text-sm text-[var(--ink-mute)]">Son güncelleme: 17 Nisan 2026</p>

      <div className="mt-8 space-y-6 text-[var(--ink-soft)] leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-[var(--emerald-900)]">1. Taraflar</h2>
          <p className="mt-2">
            Bu kullanım şartları, {SITE.domain} ("site") ile siteyi ziyaret eden
            ya da hizmet alan kişiler ("kullanıcı") arasındaki ilişkiyi düzenler.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--emerald-900)]">2. Hizmet kapsamı</h2>
          <p className="mt-2">
            {SITE.fullName}, Wix platformu üzerinde site kurulumu, tasarım
            düzenleme, SEO, domain bağlama, e-ticaret kurulumu, hata giderme ve
            kişisel eğitim hizmetleri sunar. Hizmet kapsamı sözleşme aşamasında
            yazılı olarak onaylanır.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--emerald-900)]">3. Wix ile ilişkimiz</h2>
          <p className="mt-2">
            {SITE.fullName}, Wix.com Ltd. ile <strong>resmî bir bağlı kuruluş, iştirak,
            distribütör ya da temsilci değildir</strong>. Bağımsız bir danışmanlık
            hizmetiyiz. "Wix" markası, hizmet verdiğimiz platformun adını
            belirtmek için kullanılmaktadır; Wix'in ticari markası sahibine aittir.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--emerald-900)]">4. Ödeme ve iade</h2>
          <p className="mt-2">
            Hizmet başlamadan önce teklif onaylanır ve ödeme koşulları yazılı
            olarak belirlenir. Ön ödeme alınan işlerde, iş başlatılmadıysa iade
            mümkündür. İş başladıysa tamamlanan kısım üzerinden hesaplama yapılır.
            Kapsam dışı değişiklik talepleri ek ücrete tabidir.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--emerald-900)]">5. Garanti ve sorumluluk</h2>
          <p className="mt-2">
            Teslim edilen işler; belirtilen kapsama uygun, çalışır durumda ve
            teslim tarihinden itibaren 30 gün (ücretsiz paket) veya aktif abonelik
            süresince (Pro Destek) hata-giderme garantisi altındadır. Wix'in kendi
            altyapısından, ödeme sağlayıcısından veya üçüncü taraf eklentilerden
            kaynaklanan kesinti ve hatalardan {SITE.fullName} sorumlu değildir.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--emerald-900)]">6. Fikri mülkiyet</h2>
          <p className="mt-2">
            Site içeriği, logo ve görseller {SITE.fullName} ya da ilgili hak
            sahiplerinin mülkiyetindedir. Yazılı izin olmadan çoğaltılamaz veya
            başka mecrada yayınlanamaz.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--emerald-900)]">7. Uygulanacak hukuk</h2>
          <p className="mt-2">
            Taraflar arasındaki her türlü uyuşmazlıkta Türkiye Cumhuriyeti
            hukuku uygulanır. Uyuşmazlık hâlinde İstanbul mahkemeleri ve icra
            daireleri yetkilidir.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--emerald-900)]">8. İletişim</h2>
          <p className="mt-2">
            Bu şartlarla ilgili sorularınız için{" "}
            <a href={`mailto:${SITE.email}`} className="text-[var(--bronze)] underline underline-offset-2">{SITE.email}</a> adresinden bize ulaşabilirsiniz.
          </p>
        </section>
      </div>
    </article>
  );
}
