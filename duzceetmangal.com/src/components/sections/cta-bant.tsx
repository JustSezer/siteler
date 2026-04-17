import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { partner } from "@/lib/partner";

export default function CtaBant() {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-forest text-smoke">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-6 lg:px-12">
        <div className="max-w-[780px] mx-auto text-center">
          <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-smoke/60 mb-4">
            Yolcunun Tercihi
          </p>

          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-smoke mb-4">
            Düzce&apos;de Mangal Molası mı?
          </h2>

          <p className="font-body text-base sm:text-lg text-smoke/80 leading-relaxed mb-8">
            Bakacak mevkiinde meşe közünde et mangal, yöresel kahvaltı ve Bolu
            Dağı manzarası —{" "}
            <strong className="text-copper-glow">{partner.name}</strong>{" "}
            yolcuların bu sezon tercihi.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href={`tel:${partner.phone}`} className="btn-copper">
              <Phone size={16} />
              Hemen Ara
            </a>
            <a
              href={`https://wa.me/${partner.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-forest"
            >
              <MessageCircle size={16} />
              WhatsApp Yaz
            </a>
            <a
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm text-smoke/70 hover:text-smoke transition-colors underline underline-offset-4 decoration-smoke/30 hover:decoration-smoke/60"
            >
              Detaylı Bilgi
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
