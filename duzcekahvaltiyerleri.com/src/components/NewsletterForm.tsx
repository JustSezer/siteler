"use client";

import { useState } from "react";
import Link from "next/link";

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
    <div className="bg-amber-50 border border-amber-200 rounded-3xl p-6 sm:p-8">
      <div className="text-center mb-5">
        <span className="text-3xl">🍵</span>
        <h3 className="text-lg sm:text-xl font-bold text-amber-900 mt-2 mb-1">
          Yeni Yazılardan Haberdar Olun
        </h3>
        <p className="text-stone-500 text-sm">
          Kahvaltı tarifleri, yöresel ürünler ve Düzce&apos;nin güzellikleri posta kutunuza gelsin.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-posta adresiniz"
          required
          disabled={status === "loading"}
          className="flex-1 px-4 py-3 rounded-xl bg-white border border-amber-200 text-stone-800 placeholder-stone-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-sm disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-amber-700 hover:bg-amber-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm whitespace-nowrap disabled:opacity-50"
        >
          {status === "loading" ? "Gönderiliyor..." : "Abone Ol"}
        </button>
      </form>
      {status === "success" && <p className="text-green-600 text-sm mt-3 text-center">{message}</p>}
      {status === "error" && <p className="text-red-500 text-sm mt-3 text-center">{message}</p>}
      <p className="text-center mt-3">
        <Link href="/unsubscribe" className="text-xs text-stone-300 hover:text-stone-400 transition-colors">
          Abonelikten çık
        </Link>
      </p>
    </div>
  );
}
