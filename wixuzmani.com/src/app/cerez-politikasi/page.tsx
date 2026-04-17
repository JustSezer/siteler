import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description:
    "Wix Uzmanı web sitesinin çerez kullanım politikası. Hangi çerezleri kullandığımız ve tercihlerinizi nasıl yönetebileceğiniz.",
  alternates: { canonical: `${SITE.url}/cerez-politikasi` },
};

export default function CerezPolitikasiPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 lg:px-6 py-16 prose-content">
      <span className="eyebrow mb-3 block">Yasal</span>
      <h1 className="text-3xl lg:text-4xl font-bold text-[var(--emerald-900)] leading-tight">
        Çerez Politikası
      </h1>
      <p className="mt-3 text-sm text-[var(--ink-mute)]">
        Son güncelleme: 17 Nisan 2026
      </p>

      <div className="mt-8 space-y-6 text-[var(--ink-soft)] leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-[var(--emerald-900)]">1. Çerez nedir?</h2>
          <p className="mt-2">
            Çerezler (cookies), sizi ziyaret ettiğiniz web sitesinin tarayıcınız
            aracılığıyla bilgisayarınıza ya da mobil cihazınıza yerleştirdiği küçük
            metin dosyalarıdır. Çerezler, sitenin sizi tanımasını ve tercihlerinizi
            hatırlamasını sağlar.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--emerald-900)]">2. Hangi çerezleri kullanıyoruz?</h2>
          <p className="mt-2">
            Web sitemizde yalnızca <strong>zorunlu çerezler</strong> ve
            <strong> işlevsel çerezler</strong> kullanıyoruz. Üçüncü taraf reklam
            çerezleri ya da takip çerezleri kullanmıyoruz.
          </p>
          <ul className="mt-3 space-y-2 list-disc pl-5">
            <li>
              <strong>Zorunlu çerezler:</strong> Sitenin çalışması için gereklidir
              (ör. form gönderimi, oturum yönetimi).
            </li>
            <li>
              <strong>İşlevsel çerezler:</strong> Tercihlerinizi (çerez onayı gibi)
              hatırlamak için kullanılır. Sadece sizin tarayıcınızda saklanır.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--emerald-900)]">3. Tercihlerinizi nasıl yönetebilirsiniz?</h2>
          <p className="mt-2">
            Siteyi ilk ziyaret ettiğinizde çerez banner'ımız açılır ve onay almadan
            işlevsel çerezler aktif edilmez. Tarayıcı ayarlarınızdan dilediğiniz
            zaman tüm çerezleri temizleyebilir ya da engelleyebilirsiniz. Ancak bu
            durumda bazı işlevlerin çalışmayabileceğini unutmayın.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--emerald-900)]">4. İletişim</h2>
          <p className="mt-2">
            Çerez politikamıza dair sorularınız için <a href={`mailto:${SITE.email}`} className="text-[var(--bronze)] underline underline-offset-2">{SITE.email}</a> adresinden bize ulaşabilirsiniz.
          </p>
        </section>
      </div>
    </article>
  );
}
