"use client";

import Link from "next/link";
import { useState } from "react";

type Props = {
  compact?: boolean;
};

type FormState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success" }
  | { status: "error"; message: string };

export default function ContactForm({ compact = false }: Props) {
  const [state, setState] = useState<FormState>({ status: "idle" });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      service: String(formData.get("service") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      website: String(formData.get("website") || "").trim(),
      kvkk: formData.get("kvkk") === "on",
      honeypot: String(formData.get("company") || "").trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setState({
        status: "error",
        message: "Lütfen ad-soyad, e-posta ve mesaj alanlarını doldurun.",
      });
      return;
    }
    if (!payload.kvkk) {
      setState({
        status: "error",
        message: "Devam etmek için KVKK onayını işaretlemeniz gerekiyor.",
      });
      return;
    }

    setState({ status: "submitting" });

    try {
      const res = await fetch("/api/iletisim", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Form gönderilemedi.");
      }

      setState({ status: "success" });
      form.reset();
    } catch (err) {
      setState({
        status: "error",
        message:
          err instanceof Error
            ? err.message
            : "Beklenmeyen bir hata oldu. Lütfen tekrar deneyin.",
      });
    }
  }

  if (state.status === "success") {
    return (
      <div className="card" style={{ borderColor: "var(--success)" }}>
        <div className="flex items-center gap-3">
          <div
            className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: "rgba(22, 163, 74, 0.12)" }}
            aria-hidden="true"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-[var(--navy)]">Teşekkürler, mesajınız alındı.</h3>
            <p className="text-sm text-[var(--ink-soft)] mt-0.5">
              24 saat içinde e-posta ile geri döneriz.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const submitting = state.status === "submitting";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Honeypot — bots fill this, humans never see it */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="company">Company (bırakın boş)</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className={compact ? "grid sm:grid-cols-2 gap-3" : "grid sm:grid-cols-2 gap-4"}>
        <div>
          <label htmlFor="name" className="label">
            Ad-soyad <span className="text-[var(--danger)]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="input"
            placeholder="Adınız Soyadınız"
          />
        </div>
        <div>
          <label htmlFor="email" className="label">
            E-posta <span className="text-[var(--danger)]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="input"
            placeholder="ornek@mail.com"
          />
        </div>
      </div>

      <div className={compact ? "grid sm:grid-cols-2 gap-3" : "grid sm:grid-cols-2 gap-4"}>
        <div>
          <label htmlFor="phone" className="label">
            Telefon <span className="text-[var(--ink-mute)] font-normal">(opsiyonel)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="input"
            placeholder="0555 000 00 00"
          />
        </div>
        <div>
          <label htmlFor="service" className="label">
            İlgili hizmet
          </label>
          <select id="service" name="service" className="select" defaultValue="">
            <option value="">Seçiniz...</option>
            <option value="wix-site-kurulumu">Site kurulumu</option>
            <option value="wix-tasarim-duzenleme">Tasarım düzenleme</option>
            <option value="wix-seo">SEO</option>
            <option value="wix-domain-baglama">Domain bağlama</option>
            <option value="wix-e-ticaret">E-ticaret kurulumu</option>
            <option value="wix-hata-giderme">Hata giderme / acil</option>
            <option value="wix-egitim">Birebir eğitim</option>
            <option value="diger">Diğer / emin değilim</option>
          </select>
        </div>
      </div>

      {!compact && (
        <div>
          <label htmlFor="website" className="label">
            Wix siteniz (varsa)
          </label>
          <input
            id="website"
            name="website"
            type="url"
            className="input"
            placeholder="https://..."
          />
        </div>
      )}

      <div>
        <label htmlFor="message" className="label">
          Sorununuzu / talebinizi anlatın <span className="text-[var(--danger)]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          className="textarea"
          placeholder="Olabildiğince somut yazın: hangi ekranda, ne zaman başladı, ne denediniz..."
        />
      </div>

      <div className="flex items-start gap-2.5">
        <input
          id="kvkk"
          name="kvkk"
          type="checkbox"
          required
          className="mt-1 w-4 h-4 accent-[var(--orange)]"
        />
        <label htmlFor="kvkk" className="text-sm text-[var(--ink-soft)] leading-snug">
          <Link href="/gizlilik" className="underline underline-offset-2 text-[var(--navy)]">
            KVKK ve gizlilik politikasını
          </Link>{" "}
          okudum, iletişim için bilgilerimin işlenmesine izin veriyorum.
        </label>
      </div>

      {state.status === "error" && (
        <p className="text-sm text-[var(--danger)] font-medium" role="alert">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="btn-primary w-full"
      >
        {submitting ? "Gönderiliyor..." : "Mesajı gönder"}
      </button>

      <p className="text-xs text-[var(--ink-mute)] text-center">
        Ortalama yanıt süresi: 24 saat içinde
      </p>
    </form>
  );
}
