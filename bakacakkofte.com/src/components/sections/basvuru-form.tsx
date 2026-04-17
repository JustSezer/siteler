"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const investmentRanges = [
  "500 bin – 1 milyon TL",
  "1 – 2 milyon TL",
  "2 – 3 milyon TL",
  "3 milyon TL ve üzeri",
  "Henüz belirlemedim",
];

export default function BasvuruForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="basvuru" className="relative ink-panel py-20 md:py-28 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, var(--color-bone) 0 1px, transparent 1px 18px)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: pitch */}
          <div className="md:col-span-5">
            <p className="eyebrow-gold mb-3">Bayilik başvurusu</p>
            <h2 className="display-font text-bone leading-[1.02] text-[36px] md:text-[60px]">
              Sana özel
              <span className="block text-red-soft">fizibilite raporu.</span>
            </h2>
            <p className="mt-6 text-bone/75 text-lg leading-[1.7]">
              Aşağıdaki formu 5 dakikada doldur. Ekibimiz 3 iş günü içinde bölge uygunluğunu
              değerlendirir ve sana özel bir yatırım/geri dönüş raporu hazırlar.
            </p>

            <ul className="mt-8 space-y-3.5">
              {[
                "Bölge uygunluk raporu",
                "Kişiye özel yatırım kalemleri",
                "Geri dönüş projeksiyonu",
                "Paket kıyaslaması ve öneri",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-bone">
                  <CheckCircle2 className="w-5 h-5 text-red-soft mt-0.5 shrink-0" />
                  <span className="font-semibold">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-6 border-t border-bone/15 text-sm text-bone/60">
              <p>Verileriniz KVKK kapsamında işlenir, üçüncü taraflarla paylaşılmaz.</p>
            </div>
          </div>

          {/* Right: form */}
          <div className="md:col-span-7">
            <div className="bg-bone text-ink rounded-2xl p-7 md:p-9 shadow-2xl">
              {submitted ? (
                <div className="py-16 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red text-bone mb-5">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="display-font text-2xl md:text-3xl mb-2">
                    Başvurun alındı.
                  </h3>
                  <p className="text-ink-soft">
                    Ekibimiz 3 iş günü içinde iletişime geçecek.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="grid gap-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <label className="block">
                      <span className="block text-[11px] uppercase tracking-wider font-bold text-muted mb-2">
                        Ad Soyad *
                      </span>
                      <input
                        required
                        name="name"
                        type="text"
                        placeholder="Adınız ve soyadınız"
                        className="w-full border-2 border-peach rounded-lg px-4 py-3 font-semibold focus:border-red outline-none transition-colors"
                      />
                    </label>
                    <label className="block">
                      <span className="block text-[11px] uppercase tracking-wider font-bold text-muted mb-2">
                        Telefon *
                      </span>
                      <input
                        required
                        name="phone"
                        type="tel"
                        placeholder="0 5XX XXX XX XX"
                        className="w-full border-2 border-peach rounded-lg px-4 py-3 font-semibold focus:border-red outline-none transition-colors"
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="block text-[11px] uppercase tracking-wider font-bold text-muted mb-2">
                      E-posta *
                    </span>
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="ornek@eposta.com"
                      className="w-full border-2 border-peach rounded-lg px-4 py-3 font-semibold focus:border-red outline-none transition-colors"
                    />
                  </label>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <label className="block">
                      <span className="block text-[11px] uppercase tracking-wider font-bold text-muted mb-2">
                        Hedef Şehir *
                      </span>
                      <input
                        required
                        name="city"
                        type="text"
                        placeholder="Örn. Eskişehir"
                        className="w-full border-2 border-peach rounded-lg px-4 py-3 font-semibold focus:border-red outline-none transition-colors"
                      />
                    </label>
                    <label className="block">
                      <span className="block text-[11px] uppercase tracking-wider font-bold text-muted mb-2">
                        Yatırım aralığı *
                      </span>
                      <select
                        required
                        name="budget"
                        defaultValue=""
                        className="w-full border-2 border-peach rounded-lg px-4 py-3 font-semibold focus:border-red outline-none transition-colors bg-bone"
                      >
                        <option value="" disabled>Seç</option>
                        {investmentRanges.map((r) => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <label className="block">
                    <span className="block text-[11px] uppercase tracking-wider font-bold text-muted mb-2">
                      İşletme deneyimi
                    </span>
                    <select
                      name="experience"
                      defaultValue=""
                      className="w-full border-2 border-peach rounded-lg px-4 py-3 font-semibold focus:border-red outline-none transition-colors bg-bone"
                    >
                      <option value="" disabled>Seç (opsiyonel)</option>
                      <option>Yok / ilk işletmem</option>
                      <option>Gastronomi deneyimim var</option>
                      <option>Farklı sektör deneyimim var</option>
                      <option>Mevcut işletme sahibiyim</option>
                    </select>
                  </label>

                  <label className="block">
                    <span className="block text-[11px] uppercase tracking-wider font-bold text-muted mb-2">
                      Mesajın
                    </span>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Beklentilerin, sorularınız veya eklemek istedikleriniz"
                      className="w-full border-2 border-peach rounded-lg px-4 py-3 font-semibold focus:border-red outline-none transition-colors resize-none"
                    />
                  </label>

                  <label className="flex items-start gap-3 text-sm text-ink-soft">
                    <input
                      required
                      type="checkbox"
                      className="mt-1 w-4 h-4 accent-[var(--color-red)]"
                    />
                    <span>
                      <a href="/gizlilik" className="underline hover:text-red">
                        Gizlilik politikasını
                      </a>{" "}
                      okudum ve verilerimin değerlendirme amaçlı işlenmesini kabul ediyorum.
                    </span>
                  </label>

                  <button type="submit" className="btn-red w-full justify-center mt-2">
                    Başvuruyu gönder <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
