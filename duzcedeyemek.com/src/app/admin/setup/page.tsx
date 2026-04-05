"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SetupPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    fetch("/api/admin/setup")
      .then((res) => res.json())
      .then((data) => {
        if (!data.setupNeeded) {
          router.push("/admin/login");
        }
        setChecking(false);
      })
      .catch(() => setChecking(false));
  }, [router]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Şifreler eşleşmiyor");
      return;
    }

    if (password.length < 8) {
      setError("Şifre en az 8 karakter olmalı");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/admin/setup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, displayName: displayName || username }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Kurulum başarısız");
        setLoading(false);
        return;
      }

      router.push("/admin/login");
    } catch {
      setError("Bağlantı hatası");
      setLoading(false);
    }
  }

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-orange-200 border-t-orange-600 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-stone-100">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
          <div className="text-center mb-6">
            <div className="w-12 h-12 bg-green-900 rounded-xl flex items-center justify-center mx-auto mb-3">
              <span className="text-orange-400 font-bold text-lg">DY</span>
            </div>
            <h1 className="text-xl font-bold text-stone-900">Düzce&apos;de Yemek</h1>
            <p className="text-stone-500 text-sm mt-1">Admin Hesabı Oluştur</p>
            <p className="text-stone-400 text-xs mt-2">İlk yönetici hesabınızı oluşturun</p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-3 mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="displayName" className="block text-sm font-bold text-stone-700 mb-1">
                Ad Soyad
              </label>
              <input
                type="text"
                id="displayName"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                maxLength={100}
                className="w-full px-3 py-2.5 border border-stone-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm"
                placeholder="Ibrahim"
              />
            </div>

            <div>
              <label htmlFor="username" className="block text-sm font-bold text-stone-700 mb-1">
                Kullanıcı Adı *
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                minLength={3}
                maxLength={50}
                pattern="[a-zA-Z0-9_]+"
                autoComplete="username"
                className="w-full px-3 py-2.5 border border-stone-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm"
                placeholder="admin"
                disabled={loading}
              />
              <p className="text-xs text-stone-400 mt-1">Harf, rakam ve _ kullanabilirsiniz</p>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-bold text-stone-700 mb-1">
                Şifre *
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
                autoComplete="new-password"
                className="w-full px-3 py-2.5 border border-stone-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm"
                placeholder="En az 8 karakter"
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-bold text-stone-700 mb-1">
                Şifre Tekrar *
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={8}
                autoComplete="new-password"
                className="w-full px-3 py-2.5 border border-stone-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm"
                placeholder="Şifrenizi tekrar girin"
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-900 hover:bg-green-800 disabled:bg-green-400 text-white font-bold py-2.5 rounded-xl transition-colors text-sm"
            >
              {loading ? "Oluşturuluyor..." : "Hesap Oluştur"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
