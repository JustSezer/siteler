import type { Metadata } from "next";
import ContactForm from "@/components/forms/contact-form";
import JsonLd from "@/components/seo/json-ld";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim — Strateji Görüşmesi Planlayın",
  description:
    "30 dakikalık ücretsiz strateji görüşmesi. Form, randevu takvimi veya WhatsApp üzerinden ulaşın.",
  alternates: { canonical: `${SITE.url}/iletisim` },
};

export default function IletisimPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          url: `${SITE.url}/iletisim`,
          mainEntity: {
            "@type": "Organization",
            name: SITE.fullName,
            email: SITE.email,
            url: SITE.url,
          },
        }}
      />

      <section className="mx-auto max-w-5xl px-5 lg:px-6 py-16">
        <span className="eyebrow mb-3 block">İletişim</span>
        <h1 className="text-4xl lg:text-5xl font-bold text-[var(--emerald-900)] leading-tight tracking-tight">
          Strateji görüşmesi planlayın.
        </h1>
        <p className="mt-4 text-lg text-[var(--ink-soft)] max-w-2xl">
          İş hedefinizi paylaşın, uygun kapsam ve sabit fiyat teklifimizi sunalım.
          Ortalama yanıt süresi iş saatlerinde 4 saattir.
        </p>

        <div className="mt-10 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 card p-6 lg:p-8">
            <h2 className="text-xl font-bold text-[var(--emerald-900)]">Kısa form</h2>
            <p className="mt-1.5 text-sm text-[var(--ink-soft)]">
              Zorunlu alanları doldurun; e-posta ile geri döneceğiz.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div className="lg:col-span-2 space-y-5">
            <div className="card">
              <h2 className="text-base font-bold text-[var(--emerald-900)]">Randevu takvimi</h2>
              <p className="mt-2 text-sm text-[var(--ink-soft)]">
                30 dk ücretsiz strateji görüşmesi için takvimden uygun saati seçin.
              </p>
              <a
                href={SITE.calendly.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full mt-4"
              >
                Takvimden seç
              </a>
              <p className="mt-2 text-xs text-[var(--ink-mute)]">
                (Cal.com bağlantısı yakında aktif olacak — form da çalışıyor.)
              </p>
            </div>

            <div className="card">
              <h2 className="text-base font-bold text-[var(--emerald-900)]">WhatsApp</h2>
              <p className="mt-2 text-sm text-[var(--ink-soft)]">
                Hızlı mesajlar için WhatsApp uygun.
              </p>
              <a
                href={SITE.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full mt-4"
              >
                WhatsApp ile yazın
              </a>
            </div>

            <div className="card">
              <h2 className="text-base font-bold text-[var(--emerald-900)]">E-posta</h2>
              <p className="mt-2 text-sm text-[var(--ink-soft)]">
                Daha detaylı brief paylaşmak için e-posta.
              </p>
              <a
                href={`mailto:${SITE.email}`}
                className="mt-3 inline-block text-[var(--bronze-hover)] font-semibold underline underline-offset-2"
              >
                {SITE.email}
              </a>
            </div>

            <div className="card">
              <h2 className="text-base font-bold text-[var(--emerald-900)]">Çalışma saatleri</h2>
              <p className="mt-2 text-sm text-[var(--ink-soft)]">
                Pazartesi — Cuma<br />
                09:00 — 18:00 (Türkiye saatine göre)
              </p>
              <p className="mt-2 text-xs text-[var(--ink-mute)]">
                Bakım retainer müşterileri için hafta sonu destek de dahil.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
