"use client";

import { useState } from "react";
import Link from "next/link";

export default function UnsubscribePage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "Aboneliğiniz iptal edildi.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Bir hata oluştu.");
      }
    } catch {
      setStatus("error");
      setMessage("Bağlantı hatası.");
    }
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12 bg-amber-50">
      <div className="bg-white rounded-3xl shadow-sm border border-amber-100 p-8 w-full max-w-md">
        <div className="text-center mb-6">
          <div className="text-4xl mb-3">📭</div>
          <h1 className="text-2xl font-bold text-stone-800 mb-2">Abonelikten Çık</h1>
          <p className="text-stone-400 text-sm">
            E-posta bülteninden çıkmak için adresinizi girin.
          </p>
        </div>

        {status === "success" ? (
          <div className="text-center">
            <div className="bg-green-50 text-green-700 text-sm p-4 rounded-xl mb-5">
              ✓ {message}
            </div>
            <Link href="/" className="text-amber-700 hover:text-amber-600 text-sm font-medium">
              ← Ana Sayfaya Dön
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {status === "error" && (
              <div className="bg-red-50 text-red-600 text-sm p-3 rounded-xl">
                {message}
              </div>
            )}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="E-posta adresiniz"
              className="w-full px-4 py-3 border border-stone-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 outline-none"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-stone-700 hover:bg-stone-800 text-white font-semibold py-3 rounded-xl text-sm transition-colors disabled:opacity-50"
            >
              {status === "loading" ? "İşleniyor..." : "Aboneliği İptal Et"}
            </button>
            <div className="text-center">
              <Link href="/" className="text-stone-400 hover:text-amber-700 text-xs transition-colors">
                Vazgeç, ana sayfaya dön
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
