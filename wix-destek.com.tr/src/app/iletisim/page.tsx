import type { Metadata } from "next";
import ContactForm from "@/components/forms/contact-form";
import JsonLd from "@/components/seo/json-ld";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim — Wix Destek Ekibine Ulaşın",
  description:
    "Wix ile ilgili sorularınız için iletişim formu veya WhatsApp üzerinden hızlı yanıt. 24 saat içinde dönüş.",
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
        <h1 className="text-4xl lg:text-5xl font-bold text-[var(--navy)] leading-tight tracking-tight">
          Sorununuzu anlatın, çözümü bize bırakın.
        </h1>
        <p className="mt-4 text-lg text-[var(--ink-soft)] max-w-2xl">
          Form göndermek istemiyorsanız WhatsApp ya da e-posta ile doğrudan
          ulaşabilirsiniz. Ortalama yanıt süresi: 24 saat içinde.
        </p>

        <div className="mt-10 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 card p-6 lg:p-8">
            <h2 className="text-xl font-bold text-[var(--navy)]">Form gönderin</h2>
            <p className="mt-1.5 text-sm text-[var(--ink-soft)]">
              Zorunlu alanları doldurun, e-posta ile geri döneriz.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div className="lg:col-span-2 space-y-5">
            <div className="card">
              <h2 className="text-base font-bold text-[var(--navy)]">WhatsApp</h2>
              <p className="mt-2 text-sm text-[var(--ink-soft)]">
                Hızlı yanıt için uygulamadan yazın.
              </p>
              <a
                href={SITE.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full mt-4"
              >
                WhatsApp ile yazın
              </a>
            </div>

            <div className="card">
              <h2 className="text-base font-bold text-[var(--navy)]">E-posta</h2>
              <p className="mt-2 text-sm text-[var(--ink-soft)]">
                Tercih ederseniz doğrudan e-posta atın.
              </p>
              <a
                href={`mailto:${SITE.email}`}
                className="mt-3 inline-block text-[var(--orange)] font-semibold underline underline-offset-2"
              >
                {SITE.email}
              </a>
            </div>

            <div className="card">
              <h2 className="text-base font-bold text-[var(--navy)]">Çalışma saatleri</h2>
              <p className="mt-2 text-sm text-[var(--ink-soft)]">
                Pazartesi — Cumartesi<br />
                09:00 — 20:00 (Türkiye saatine göre)
              </p>
              <p className="mt-2 text-xs text-[var(--ink-mute)]">
                Acil durumlar için Pazar günleri de destek veriyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
