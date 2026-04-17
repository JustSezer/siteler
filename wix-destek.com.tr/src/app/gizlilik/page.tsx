import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gizlilik Politikası ve KVKK Aydınlatma Metni",
  description:
    "Wix Destek TR kişisel verilerinizi nasıl topladığı, işlediği ve koruduğuyla ilgili gizlilik politikası. KVKK aydınlatma metni.",
  alternates: { canonical: `${SITE.url}/gizlilik` },
};

export default function GizlilikPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 lg:px-6 py-16 prose-content">
      <span className="eyebrow mb-3 block">Yasal</span>
      <h1 className="text-3xl lg:text-4xl font-bold text-[var(--navy)] leading-tight">
        Gizlilik Politikası ve KVKK Aydınlatma Metni
      </h1>
      <p className="mt-3 text-sm text-[var(--ink-mute)]">Son güncelleme: 17 Nisan 2026</p>

      <div className="mt-8 space-y-6 text-[var(--ink-soft)] leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-[var(--navy)]">1. Veri sorumlusu</h2>
          <p className="mt-2">
            Kişisel verilerinizin işlenmesi konusunda veri sorumlusu
            <strong> {SITE.fullName}</strong>'dir ({SITE.domain}). İletişim:{" "}
            <a href={`mailto:${SITE.email}`} className="text-[var(--orange)] underline underline-offset-2">{SITE.email}</a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--navy)]">2. Hangi verileri topluyoruz?</h2>
          <p className="mt-2">
            İletişim formu aracılığıyla aşağıdaki verileri topluyoruz:
          </p>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>Ad-soyad</li>
            <li>E-posta adresi</li>
            <li>Telefon numarası (isteğe bağlı)</li>
            <li>İlgilendiğiniz hizmet</li>
            <li>Wix siteniz (varsa)</li>
            <li>Mesaj içeriği</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--navy)]">3. Verilerinizi neden işliyoruz?</h2>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>Sorularınıza yanıt vermek ve teklif hazırlamak</li>
            <li>Sözleşmesel ilişkiyi yürütmek</li>
            <li>Yasal yükümlülükleri yerine getirmek (faturalama, muhasebe)</li>
          </ul>
          <p className="mt-2">
            Verilerinizi reklam, pazarlama ya da üçüncü taraflara satış için
            <strong> asla kullanmıyoruz</strong>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--navy)]">4. Verileriniz kimlerle paylaşılır?</h2>
          <p className="mt-2">
            Verilerinizi sadece hizmeti sunmak için gerekli olduğunda paylaşıyoruz:
            e-posta gönderim altyapımız, ödeme sağlayıcımız ve yasal zorunluluk
            durumunda yetkili kamu kurumları. Hiçbir pazarlama firmasıyla, reklam
            ağıyla ya da veri brokerıyla paylaşmıyoruz.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--navy)]">5. Verileriniz ne kadar saklanır?</h2>
          <p className="mt-2">
            Form üzerinden alınan veriler en fazla 2 yıl saklanır (ticari ilişki
            sonrası muhtemel iletişim için). Bu sürenin sonunda silinir ya da
            anonimleştirilir.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--navy)]">6. KVKK kapsamındaki haklarınız</h2>
          <p className="mt-2">
            6698 sayılı KVKK'nın 11. maddesi uyarınca şunları talep edebilirsiniz:
          </p>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
            <li>İşlenmişse bilgi talep etme</li>
            <li>Yanlış ya da eksik verilerin düzeltilmesi</li>
            <li>Verilerin silinmesi ya da anonimleştirilmesi</li>
            <li>İşleme itiraz etme</li>
          </ul>
          <p className="mt-2">
            Talepleriniz için <a href={`mailto:${SITE.email}`} className="text-[var(--orange)] underline underline-offset-2">{SITE.email}</a> adresine yazın. 30 gün içinde yanıt veriyoruz.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--navy)]">7. Güvenlik</h2>
          <p className="mt-2">
            Tüm formlar HTTPS üzerinden iletilir. Verilerinize erişim, hizmet veren
            uzman sayısıyla sınırlıdır. Güçlü parola, iki faktörlü kimlik doğrulama
            ve güncel güvenlik yamaları uyguluyoruz.
          </p>
        </section>
      </div>
    </article>
  );
}
