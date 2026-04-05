"use client";

import { useState } from "react";

const SUBJECTS = [
  "Wix Site Kurma",
  "Wix Tasarım Yardımı",
  "Wix E-Ticaret Kurulumu",
  "Wix SEO Danışmanlığı",
  "Wix Domain Bağlama",
  "Wix Teknik Sorun",
  "Wix Premium Plan",
  "Diğer",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const body = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Bir hata oluştu.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg("Bağlantı hatası. Lütfen tekrar deneyin.");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 sm:p-8 text-center">
        <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-slate-900 mb-2">Mesajınız Alındı!</h2>
        <p className="text-slate-600 text-sm mb-4">
          En kısa sürede — genellikle 24 saat içinde — size dönüş yapacağız.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-blue-600 hover:text-blue-700 font-medium text-sm"
        >
          Yeni mesaj gönder
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 sm:p-6">
      <h2 className="text-xl font-bold text-slate-900 mb-1">Destek Talebi Oluşturun</h2>
      <p className="text-slate-500 text-sm mb-5">Formu doldurun, uzmanlarımız size ulaşsın.</p>

      {status === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-3 mb-4">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Honeypot — bot tuzağı; gerçek kullanıcılar tarafından görülmez */}
        <div
          aria-hidden="true"
          style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", overflow: "hidden" }}
        >
          <label htmlFor="_honeypot">Boş bırakın</label>
          <input
            type="text"
            id="_honeypot"
            name="_honeypot"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
              Adınız Soyadınız <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              maxLength={100}
              className="w-full px-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
              placeholder="Ad Soyad"
              disabled={status === "loading"}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
              E-posta <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              maxLength={200}
              className="w-full px-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
              placeholder="ornek@email.com"
              disabled={status === "loading"}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
              Telefon <span className="text-slate-400 font-normal">(opsiyonel)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              maxLength={20}
              className="w-full px-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
              placeholder="0555 555 55 55"
              disabled={status === "loading"}
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
              Konu <span className="text-red-500">*</span>
            </label>
            <select
              id="subject"
              name="subject"
              required
              className="w-full px-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm bg-white"
              disabled={status === "loading"}
            >
              <option value="">Konu seçin...</option>
              {SUBJECTS.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
            Mesajınız <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            maxLength={5000}
            rows={5}
            className="w-full px-3 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm resize-none"
            placeholder="Wix ile ilgili sorununuzu veya projenizi açıklayın..."
            disabled={status === "loading"}
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:bg-blue-400 text-white font-semibold py-3 rounded-lg transition-colors text-sm min-h-[44px] inline-flex items-center justify-center gap-2"
        >
          {status === "loading" ? (
            <>
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Gönderiliyor...
            </>
          ) : (
            "Destek Talebi Gönder"
          )}
        </button>

        <p className="text-center text-xs text-slate-400">
          Bilgileriniz gizli tutulur ve üçüncü taraflarla paylaşılmaz.
        </p>
      </form>
    </div>
  );
}
