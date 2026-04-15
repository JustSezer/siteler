import type { Metadata } from "next";
import { Phone, Mail, Clock, Navigation, ExternalLink } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import StickyCta from "@/components/layout/sticky-cta";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim & Rezervasyon",
  description: `${site.name} iletişim — Bolu Dağı D100 Karayolu Bakacak Mevki Kaynaşlı/Düzce. 7/24 açık. Rezervasyon: 0850 888 81 14.`,
  alternates: { canonical: `${site.url}/iletisim` },
};

export default function IletisimPage() {
  return (
    <>
      <Header />
      <main className="pt-28 sm:pt-32 pb-24">
        <header className="max-w-[1320px] mx-auto px-5 sm:px-8 mb-14 sm:mb-20">
          <p className="eyebrow mb-5">İletişim</p>
          <h1 className="display-font text-[clamp(2.5rem,9vw,5.5rem)] text-bone leading-[0.98] tracking-tight">
            Arayın, yazın, <br />
            <span className="italic text-ember">yolunuza düşelim</span>.
          </h1>
          <p className="mt-7 max-w-xl text-[16px] sm:text-[17px] leading-[1.78] text-bone-soft">
            Rezervasyon, grup organizasyonu, özel menü talepleri için 7/24
            ulaşılabiliriz. Ocak hiç kapanmaz, telefon da öyle.
          </p>
        </header>

        <section className="max-w-[1320px] mx-auto px-5 sm:px-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 border-t border-smoke pt-12 sm:pt-14">
          <a
            href={`tel:${site.phones[0].value}`}
            className="group flex flex-col items-start p-6 sm:p-8 border border-smoke hover:border-ember transition-colors"
          >
            <Phone className="w-7 h-7 text-ember mb-5" strokeWidth={1.5} />
            <p className="eyebrow-mute mb-2">Sabit Hat</p>
            <p className="display-font text-xl sm:text-2xl text-bone group-hover:text-ember transition-colors leading-tight">
              {site.phones[0].display}
            </p>
          </a>

          <a
            href={`tel:${site.phones[1].value}`}
            className="group flex flex-col items-start p-6 sm:p-8 border border-smoke hover:border-ember transition-colors"
          >
            <Phone className="w-7 h-7 text-ember mb-5" strokeWidth={1.5} />
            <p className="eyebrow-mute mb-2">Cep / WhatsApp</p>
            <p className="display-font text-xl sm:text-2xl text-bone group-hover:text-ember transition-colors leading-tight">
              {site.phones[1].display}
            </p>
          </a>

          <a
            href={`mailto:${site.email}`}
            className="group flex flex-col items-start p-6 sm:p-8 border border-smoke hover:border-ember transition-colors"
          >
            <Mail className="w-7 h-7 text-ember mb-5" strokeWidth={1.5} />
            <p className="eyebrow-mute mb-2">E-Posta</p>
            <p className="display-font text-lg sm:text-xl text-bone group-hover:text-ember transition-colors leading-tight break-all">
              {site.email}
            </p>
          </a>

          <div className="flex flex-col items-start p-6 sm:p-8 border border-smoke">
            <Clock className="w-7 h-7 text-ember mb-5" strokeWidth={1.5} />
            <p className="eyebrow-mute mb-2">Çalışma Saatleri</p>
            <p className="display-font text-xl sm:text-2xl text-bone leading-tight">
              7 gün · 24 saat
            </p>
            <p className="mt-1 text-[13px] text-bone-mute italic">
              Yılbaşı, bayramlar dahil
            </p>
          </div>
        </section>

        <section className="max-w-[1320px] mx-auto px-5 sm:px-8 mt-16 sm:mt-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] items-start">
            <div>
              <p className="eyebrow mb-5">Adres</p>
              <h2 className="display-font text-[clamp(1.75rem,5vw,3rem)] text-bone leading-[1.05] tracking-tight mb-6">
                Bolu Dağı&apos;nın
                <br />
                <span className="italic text-ember">tam kıyısında</span>.
              </h2>
              <address className="not-italic text-[16px] leading-[1.85] text-bone-soft mb-8">
                {site.address.line}
                <br />
                {site.address.district} / {site.address.city}
                <br />
                {site.address.postalCode}, {site.address.country}
              </address>

              <div className="flex flex-wrap gap-3 mb-10">
                <a
                  href={site.maps.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ember"
                >
                  <Navigation className="w-4 h-4" />
                  Yol Tarifi
                </a>
                <a href={`tel:${site.phones[0].value}`} className="btn-ghost">
                  <Phone className="w-4 h-4" />
                  Rezervasyon
                </a>
              </div>

              <div>
                <p className="eyebrow-mute mb-4">Sosyal Medya</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={site.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 border border-smoke hover:border-ember hover:text-ember text-bone-soft mono-font text-[11px] uppercase tracking-[0.14em] transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Instagram
                  </a>
                  <a
                    href={site.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 border border-smoke hover:border-ember hover:text-ember text-bone-soft mono-font text-[11px] uppercase tracking-[0.14em] transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    YouTube
                  </a>
                  <a
                    href={site.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 border border-smoke hover:border-ember hover:text-ember text-bone-soft mono-font text-[11px] uppercase tracking-[0.14em] transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[520px] border border-smoke overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=Bolu+Dağı+İbrahimin+Yeri+Bakacak+Mevki+Kaynaşlı+Düzce&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="İbrahim'in Yeri Konum Haritası"
              />
              <div className="absolute inset-0 ring-1 ring-smoke pointer-events-none" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
