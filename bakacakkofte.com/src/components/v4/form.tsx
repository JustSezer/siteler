"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const investmentRanges = [
  "300 – 500 bin TL",
  "500 bin – 1 milyon TL",
  "1 – 2 milyon TL",
  "2 milyon TL ve üzeri",
  "Henüz belirlemedim",
];

const experiences = [
  "Yok / ilk işletmem",
  "Gastronomi deneyimim var",
  "Farklı sektör deneyimim var",
  "Mevcut işletme sahibiyim",
];

export default function FormV4() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch("https://formsubmit.co/ajax/bayilik@bakacakkofte.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error("network");
      setSubmitted(true);
    } catch {
      setError("Gönderim başarısız oldu. Lütfen tekrar dene veya doğrudan bayilik@bakacakkofte.com adresine yaz.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="basvuru" className="v4-section-night py-14 sm:py-20 md:py-28 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-[var(--color-tomato)]/25 blur-[80px]"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-snow) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative mx-auto max-w-[1380px] px-5 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="v4-pill !bg-[var(--color-mustard)] !border-[var(--color-mustard)] !text-[var(--color-night)] mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              Başvuru Formu — 09
            </span>
            <h2 className="v4-display-tight text-[var(--color-snow)] text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-[-0.035em]">
              Sana özel
              <br />
              <span className="italic text-[var(--color-tomato-soft)]">fizibilite raporu.</span>
            </h2>
            <p className="v4-sans text-[var(--color-snow)]/75 mt-5 text-base sm:text-lg leading-relaxed max-w-md">
              Formu 5 dakikada doldur. Ekibimiz 3 iş günü içinde bölge uygunluğunu değerlendirir ve
              sana özel yatırım/geri dönüş raporu hazırlar.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Bölge uygunluk raporu",
                "Kişiye özel yatırım kalemleri",
                "Geri dönüş projeksiyonu",
                "Paket kıyaslaması ve öneri",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 v4-sans text-[var(--color-snow)]/90">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-mustard)] mt-0.5 shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 pt-5 border-t border-[var(--color-snow)]/15 text-xs text-[var(--color-snow)]/55">
              Verileriniz KVKK kapsamında işlenir, üçüncü taraflarla paylaşılmaz.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-[var(--color-snow)] text-[var(--color-night)] rounded-2xl p-6 sm:p-8 border border-[var(--color-night)]">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-tomato)] text-[var(--color-snow)] mb-4">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="v4-display-tight text-2xl sm:text-3xl mb-2">
                    Başvurun alındı.
                  </h3>
                  <p className="v4-sans text-[var(--color-graphite)]">
                    Ekibimiz 3 iş günü içinde iletişime geçecek.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="grid gap-4">
                  <input type="hidden" name="_subject" value="Bakacak Köfte Bayilik Başvurusu" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_captcha" value="false" />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Ad Soyad *" name="name" type="text" placeholder="Adın ve soyadın" required />
                    <Field label="Telefon *" name="phone" type="tel" placeholder="0 5XX XXX XX XX" required />
                  </div>

                  <Field label="E-posta *" name="email" type="email" placeholder="ornek@eposta.com" required />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Hedef şehir *" name="city" type="text" placeholder="Örn. Eskişehir" required />
                    <Select label="Yatırım aralığı *" name="budget" options={investmentRanges} required />
                  </div>

                  <Select label="İşletme deneyimi" name="experience" options={experiences} />

                  <label className="block">
                    <span className="v4-display text-xs uppercase tracking-wider text-[var(--color-graphite)] mb-1.5 block">
                      Mesajın
                    </span>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Beklentilerin, sorularınız veya eklemek istedikleriniz"
                      className="w-full border border-[var(--color-line-4)] rounded-xl px-4 py-3 v4-sans text-base focus:border-[var(--color-night)] outline-none transition-colors resize-none"
                    />
                  </label>

                  <label className="flex items-start gap-3 text-sm text-[var(--color-graphite)]">
                    <input
                      required
                      type="checkbox"
                      className="mt-1 w-4 h-4 accent-[var(--color-tomato)]"
                    />
                    <span>
                      <a href="/gizlilik" className="underline hover:text-[var(--color-tomato)]">
                        Gizlilik politikasını
                      </a>{" "}
                      okudum ve verilerimin değerlendirme amaçlı işlenmesini kabul ediyorum.
                    </span>
                  </label>

                  {error && (
                    <p className="text-sm text-[var(--color-tomato)] bg-[var(--color-tomato)]/10 border border-[var(--color-tomato)]/30 rounded-lg p-3">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="v4-btn-tomato justify-center w-full mt-2 disabled:opacity-60"
                  >
                    {submitting ? "Gönderiliyor..." : "Başvuruyu gönder"}
                    {!submitting && <ArrowRight className="w-4 h-4" />}
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

function Field({
  label,
  name,
  type,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="v4-display text-xs uppercase tracking-wider text-[var(--color-graphite)] mb-1.5 block">
        {label}
      </span>
      <input
        required={required}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full border border-[var(--color-line-4)] rounded-xl px-4 py-3 v4-sans text-base focus:border-[var(--color-night)] outline-none transition-colors"
      />
    </label>
  );
}

function Select({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="v4-display text-xs uppercase tracking-wider text-[var(--color-graphite)] mb-1.5 block">
        {label}
      </span>
      <select
        required={required}
        name={name}
        defaultValue=""
        className="w-full border border-[var(--color-line-4)] rounded-xl px-4 py-3 v4-sans text-base focus:border-[var(--color-night)] outline-none transition-colors bg-[var(--color-snow)]"
      >
        <option value="" disabled>
          {required ? "Seç" : "Seç (opsiyonel)"}
        </option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}
