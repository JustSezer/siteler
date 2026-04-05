"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "Abonelik başarılı!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Bir hata oluştu.");
      }
    } catch {
      setStatus("error");
      setMessage("Bağlantı hatası.");
    }

    setTimeout(() => setStatus("idle"), 5000);
  }

  return (
    <div className="bg-gradient-to-r from-orange-900 to-stone-900 rounded-2xl p-6 sm:p-8">
      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
        Yeni Tariflerden Haberdar Olun
      </h3>
      <p className="text-stone-300 text-sm mb-4">
        En yeni mangal tarifleri ve et rehberlerini e-posta adresinize gönderelim.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-posta adresiniz"
          required
          disabled={status === "loading"}
          className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-stone-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-sm disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-amber-500 hover:bg-amber-600 text-stone-900 font-semibold px-6 py-3 rounded-full transition-colors text-sm whitespace-nowrap disabled:opacity-50"
        >
          {status === "loading" ? "Gönderiliyor..." : "Abone Ol"}
        </button>
      </form>
      {status === "success" && <p className="text-green-400 text-sm mt-3">{message}</p>}
      {status === "error" && <p className="text-red-400 text-sm mt-3">{message}</p>}
    </div>
  );
}
