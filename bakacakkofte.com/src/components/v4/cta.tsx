import Link from "next/link";
import { ArrowRight, Phone, Mail, Sparkles } from "lucide-react";
import { site } from "@/lib/site";

export default function CtaV4() {
  return (
    <section className="v4-section-tomato py-14 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Big mustard sun */}
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-[var(--color-mustard)]/35 blur-[10px]"
      />
      {/* dotted */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-snow) 1.5px, transparent 1.5px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative mx-auto max-w-[1380px] px-5 sm:px-6 md:px-10">
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-14">
          <span className="v4-pill !bg-[var(--color-mustard)] !border-[var(--color-night)] !text-[var(--color-night)] mb-7">
            <Sparkles className="w-3.5 h-3.5" />
            Şu an başvuru süresi: 3 iş günü
          </span>
          <h2 className="v4-display-tight text-[var(--color-snow)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[108px] leading-[0.95] sm:leading-[0.92] tracking-[-0.04em] [text-wrap:balance]">
            Bir karavan,
            <br />
            <span className="italic text-[var(--color-mustard)]">bir bölge,</span>
            <br />
            senin adına.
          </h2>
          <p className="v4-sans text-[var(--color-snow)]/85 mt-7 sm:mt-9 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Başvurunu 3 iş günü içinde değerlendiriyoruz. Bölge müsaitliği, yatırım profili ve
            lokasyon raporu kişiye özel hazırlanır.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <Link
            href="/franchise"
            className="v4-card bg-[var(--color-snow)] text-[var(--color-night)] p-6 flex flex-col gap-3 group"
          >
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-tomato)] text-[var(--color-snow)]">
              <ArrowRight className="w-5 h-5" />
            </span>
            <p className="v4-eyebrow">FORM</p>
            <p className="v4-display-tight text-2xl">Başvuru formu</p>
            <p className="v4-sans text-sm text-[var(--color-graphite)]">
              5 dakikalık ön değerlendirme
            </p>
          </Link>

          <a
            href={`tel:${site.phones[0].value}`}
            className="v4-card bg-[var(--color-mustard)] text-[var(--color-night)] p-6 flex flex-col gap-3 group"
          >
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-night)] text-[var(--color-mustard)]">
              <Phone className="w-5 h-5" />
            </span>
            <p className="v4-eyebrow !text-[var(--color-night)]/70">TELEFON</p>
            <p className="v4-display-tight text-2xl">{site.phones[0].display}</p>
            <p className="v4-sans text-sm text-[var(--color-night)]/75">{site.phones[0].label}</p>
          </a>

          <a
            href={`mailto:${site.email}`}
            className="v4-card bg-[var(--color-night)] text-[var(--color-snow)] p-6 flex flex-col gap-3 group"
          >
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-mustard)] text-[var(--color-night)]">
              <Mail className="w-5 h-5" />
            </span>
            <p className="v4-eyebrow !text-[var(--color-mustard)]">E-POSTA</p>
            <p className="v4-display-tight text-base sm:text-lg break-all">{site.email}</p>
            <p className="v4-sans text-sm text-[var(--color-snow)]/75">Bayilik & bilgi</p>
          </a>
        </div>
      </div>
    </section>
  );
}
