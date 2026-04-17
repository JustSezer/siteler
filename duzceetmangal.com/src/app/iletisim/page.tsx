import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { partner } from "@/lib/partner";
import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "İletişim | Düzce Et Mangal Rehberi",
  description:
    "Düzce et mangal rehberi ile iletişime geçin. Soru, öneri ve mekan bildirimleri için formu doldurun veya doğrudan arayın.",
  alternates: { canonical: "https://duzceetmangal.com/iletisim" },
};

export default function Iletisim() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-24 sm:pt-28 lg:pt-36 pb-14 sm:pb-16 lg:pb-20">
          <div className="max-w-[780px] mx-auto px-5 sm:px-6 lg:px-12">
            <div className="rule-dashed pt-3 mb-8 sm:mb-10">
              <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-charcoal-soft">
                <span className="font-semibold">İletişim</span>
                <span>Duman Defteri</span>
              </div>
            </div>

            <h1 className="font-display text-[32px] sm:text-[44px] lg:text-[56px] leading-[0.95] tracking-[-0.02em] font-bold text-charcoal mb-6">
              İletişim
            </h1>

            <p className="font-body text-base sm:text-lg text-charcoal-soft leading-relaxed mb-12">
              Düzce&apos;de keşfettiğimiz bir mekanı öner, hakkımızda geri
              bildirim ver ya da sadece merhaba de.
            </p>

            {/* İletişim kartları */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-12">
              <a
                href={`tel:${partner.phone}`}
                className="flex items-center gap-4 p-5 rounded-lg bg-smoke-deep border border-bark-soft/30 hover:border-forest/30 transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-highlight flex items-center justify-center">
                  <Phone size={18} className="text-forest" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-charcoal-muted mb-1">
                    Telefon
                  </p>
                  <p className="font-body text-base text-charcoal font-medium">
                    {partner.phoneDisplay}
                  </p>
                </div>
              </a>

              <a
                href={`https://wa.me/${partner.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-lg bg-smoke-deep border border-bark-soft/30 hover:border-forest/30 transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-highlight flex items-center justify-center">
                  <MessageCircle size={18} className="text-forest" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-charcoal-muted mb-1">
                    WhatsApp
                  </p>
                  <p className="font-body text-base text-charcoal font-medium">
                    {partner.whatsappDisplay}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 rounded-lg bg-smoke-deep border border-bark-soft/30">
                <div className="w-10 h-10 rounded-full bg-highlight flex items-center justify-center">
                  <MapPin size={18} className="text-forest" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-charcoal-muted mb-1">
                    Adres
                  </p>
                  <p className="font-body text-base text-charcoal font-medium">
                    {partner.address}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-lg bg-smoke-deep border border-bark-soft/30">
                <div className="w-10 h-10 rounded-full bg-highlight flex items-center justify-center">
                  <Mail size={18} className="text-forest" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-charcoal-muted mb-1">
                    E-posta
                  </p>
                  <p className="font-body text-base text-charcoal font-medium">
                    info@duzceetmangal.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
