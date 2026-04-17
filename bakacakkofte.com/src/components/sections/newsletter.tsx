"use client";

import { Mail, ArrowRight } from "lucide-react";
import { WaxSeal, CaravanSilhouette } from "@/components/decor/caravan";

export default function Newsletter() {
  return (
    <section className="relative bg-red py-20 md:py-24 text-bone overflow-hidden">
      <CaravanSilhouette className="absolute -right-10 -bottom-6 w-[360px] text-bone/15 pointer-events-none" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, var(--color-ink) 0 1px, transparent 1px 14px)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-5 md:px-12 lg:px-20">
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="col-span-12 md:col-span-7">
            <div className="flex items-center gap-4 mb-5">
              <WaxSeal className="w-14 h-14 text-ink" text="Bülten · Aylık" />
              <span className="mono-font text-[11px] uppercase tracking-[0.3em] text-bone/80 font-bold">
                Section 10 · Bülten
              </span>
            </div>
            <h2 className="display-font text-bone leading-[0.95] text-4xl md:text-5xl lg:text-[64px] font-semibold tracking-[-0.02em]">
              Yeni karavanlardan,
              <span className="italic font-[450] block">ilk sen haberdar ol.</span>
            </h2>
            <p className="mt-5 text-bone/85 leading-[1.7] max-w-xl">
              Ayda bir e-posta: yeni açılan karavanlar, franchise fırsatları, açılan bölgeler ve
              yatırımcı rehber yazıları.
            </p>
          </div>

          <form
            className="col-span-12 md:col-span-5 bg-bone text-ink rounded-[24px] p-6 md:p-7 shadow-2xl"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="mono-font text-[10px] uppercase tracking-[0.24em] text-muted font-bold block mb-3">
              E-posta adresin
            </label>
            <div className="flex items-center gap-2 border-b-2 border-ink pb-3">
              <Mail className="w-5 h-5 text-red shrink-0" />
              <input
                type="email"
                required
                placeholder="sen@ornek.com"
                className="flex-1 bg-transparent outline-none text-ink placeholder:text-muted-soft display-font text-lg"
              />
            </div>
            <button
              type="submit"
              className="mt-5 btn-red w-full justify-center"
            >
              Kayıt ol <ArrowRight className="w-4 h-4" />
            </button>
            <p className="mt-4 text-xs text-muted leading-relaxed">
              Kayıt olarak{" "}
              <a href="/gizlilik" className="underline hover:text-red">
                gizlilik politikasını
              </a>{" "}
              kabul etmiş olursun. İstediğin zaman tek tıkla çıkabilirsin.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
