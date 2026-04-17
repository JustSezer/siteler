import Link from "next/link";
import { ArrowUpRight, Phone, Mail } from "lucide-react";
import { site } from "@/lib/site";

export default function CtaV2() {
  return (
    <section className="relative v2-section py-20 sm:py-28 md:py-44 border-t v2-rule overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-40 right-0 w-[640px] h-[640px] rounded-full opacity-20 blur-[140px]"
        style={{ background: "var(--color-ember)" }}
      />

      <div className="relative mx-auto max-w-[1480px] px-5 sm:px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 md:gap-10 items-end">
          <div className="col-span-12 md:col-span-8">
            <p className="v2-num">№ 09 — Başvuru</p>
            <h2 className="v2-display text-[var(--color-paper)] text-4xl sm:text-5xl md:text-7xl lg:text-[112px] mt-3 sm:mt-4 leading-[0.92] tracking-[-0.035em] [text-wrap:balance]">
              Bir karavan,
              <br />
              <span className="text-[var(--color-ember)] italic font-normal">bir bölge,</span>
              <br />
              senin adına.
            </h2>
            <p className="text-[var(--color-paper)]/70 mt-6 sm:mt-10 max-w-xl text-base sm:text-lg leading-relaxed">
              Başvurunu 3 iş günü içinde değerlendiriyoruz. Bölge müsaitliği, yatırım profili ve
              lokasyon raporu kişiye özel hazırlanır.
            </p>
          </div>

          <div className="col-span-12 md:col-span-4">
            <div className="border v2-rule">
              <a
                href={`tel:${site.phones[0].value}`}
                className="flex items-center justify-between gap-4 p-6 border-b v2-rule hover:bg-[var(--color-coal-2)] transition-colors"
              >
                <div>
                  <p className="v2-label !text-[var(--color-fog)] mb-1">Bayilik hattı</p>
                  <p className="v2-display text-[var(--color-paper)] text-xl">{site.phones[0].display}</p>
                </div>
                <Phone className="w-5 h-5 text-[var(--color-ember)]" />
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center justify-between gap-4 p-6 border-b v2-rule hover:bg-[var(--color-coal-2)] transition-colors"
              >
                <div>
                  <p className="v2-label !text-[var(--color-fog)] mb-1">E-posta</p>
                  <p className="v2-display text-[var(--color-paper)] text-base break-all">{site.email}</p>
                </div>
                <Mail className="w-5 h-5 text-[var(--color-ember)]" />
              </a>
              <Link
                href="/franchise"
                className="flex items-center justify-between gap-4 p-6 bg-[var(--color-ember)] text-[var(--color-coal)] hover:bg-[var(--color-ember-soft)] transition-colors"
              >
                <span className="v2-display text-lg">Bayilik formu</span>
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
