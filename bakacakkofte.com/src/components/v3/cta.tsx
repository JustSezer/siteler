import Link from "next/link";
import { ArrowUpRight, Phone, Mail } from "lucide-react";
import { site } from "@/lib/site";

export default function CtaV3() {
  return (
    <section className="v3-section-dark py-20 sm:py-28 md:py-44 border-t v3-rule-dark">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-end">
          <div className="col-span-12 md:col-span-8">
            <p className="v3-num">№ 08</p>
            <h2 className="v3-serif text-[var(--color-paper-3)] text-5xl sm:text-6xl md:text-7xl lg:text-[120px] mt-3 leading-[0.95] tracking-[-0.025em] [text-wrap:balance]">
              Bir karavan,
              <br />
              <span className="italic text-[var(--color-terracotta-soft)]">bir bölge,</span>
              <br />
              senin adına.
            </h2>
            <p className="v3-sans text-[var(--color-paper-3)]/70 mt-7 sm:mt-10 text-base sm:text-lg font-light leading-relaxed max-w-xl">
              Başvurunu 3 iş günü içinde değerlendiriyoruz. Bölge müsaitliği, yatırım profili ve
              lokasyon raporu kişiye özel hazırlanır.
            </p>
          </div>

          <div className="col-span-12 md:col-span-4">
            <div className="border v3-rule-dark rounded-[20px] overflow-hidden">
              <a
                href={`tel:${site.phones[0].value}`}
                className="flex items-center justify-between gap-4 p-6 border-b v3-rule-dark hover:bg-[var(--color-charcoal-2)] transition-colors"
              >
                <div>
                  <p className="v3-eyebrow !text-[var(--color-stone)] mb-1">Bayilik hattı</p>
                  <p className="v3-serif text-[var(--color-paper-3)] text-2xl">{site.phones[0].display}</p>
                </div>
                <Phone className="w-5 h-5 text-[var(--color-terracotta-soft)]" />
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center justify-between gap-4 p-6 border-b v3-rule-dark hover:bg-[var(--color-charcoal-2)] transition-colors"
              >
                <div>
                  <p className="v3-eyebrow !text-[var(--color-stone)] mb-1">E-posta</p>
                  <p className="v3-serif text-[var(--color-paper-3)] text-lg break-all">{site.email}</p>
                </div>
                <Mail className="w-5 h-5 text-[var(--color-terracotta-soft)]" />
              </a>
              <Link
                href="/franchise"
                className="flex items-center justify-between gap-4 p-6 bg-[var(--color-terracotta)] text-[var(--color-paper-3)] hover:bg-[var(--color-terracotta-deep)] transition-colors"
              >
                <span className="v3-serif text-xl">Bayilik formu</span>
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
