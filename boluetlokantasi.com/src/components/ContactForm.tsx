"use client";

import { useState } from "react";

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
      <div className="bg-white rounded-xl shadow-md p-5 sm:p-6 text-center">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-xl font-bold mb-2">Mesajınız Gönderildi</h2>
        <p className="text-stone-600 text-sm mb-4">En kısa sürede size dönüş yapacağız.</p>
        <button
          onClick={() => setStatus("idle")}
          className="text-amber-800 hover:text-amber-900 font-medium text-sm"
        >
          Yeni mesaj gönder
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-5 sm:p-6">
      <h2 className="text-xl font-bold mb-4">Mesaj Gönderin</h2>

      {status === "error" && (
        <div className="bg-amber-50 border border-amber-200 text-amber-900 text-sm rounded-lg p-3 mb-4">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 relative">
        {/* Honeypot - hidden from users, bots will fill it */}
        <input
          type="text"
          name="_honeypot"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute opacity-0 top-0 left-0 h-0 w-0 -z-10 pointer-events-none"
        />

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">
            Adınız
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            maxLength={100}
            className="w-full px-3 py-2.5 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none text-sm"
            placeholder="Adınızı girin"
            disabled={status === "loading"}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">
            E-posta
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            maxLength={200}
            className="w-full px-3 py-2.5 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none text-sm"
            placeholder="ornek@email.com"
            disabled={status === "loading"}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">
            Mesajınız
          </label>
          <textarea
            id="message"
            name="message"
            required
            maxLength={5000}
            rows={4}
            className="w-full px-3 py-2.5 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none text-sm resize-none"
            placeholder="Mesajınızı yazın..."
            disabled={status === "loading"}
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-amber-800 hover:bg-amber-900 active:bg-amber-900 disabled:bg-amber-400 text-white font-semibold py-2.5 rounded-lg transition-colors text-sm"
        >
          {status === "loading" ? "Gönderiliyor..." : "Gönder"}
        </button>
      </form>
    </div>
  );
}
