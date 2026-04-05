"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCsrf } from "@/lib/useCsrf";

interface Stats {
  totalPosts: number;
  publishedPosts: number;
  categories: number;
}

function PasswordChangeForm() {
  const [current, setCurrent] = useState("");
  const [newPw, setNewPw] = useState("");
  const [confirm, setConfirm] = useState("");
  const [msg, setMsg] = useState<{ type: "ok" | "err"; text: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const { csrfFetch } = useCsrf();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMsg(null);

    if (newPw.length < 8) {
      setMsg({ type: "err", text: "Yeni şifre en az 8 karakter olmalı." });
      return;
    }
    if (newPw !== confirm) {
      setMsg({ type: "err", text: "Şifreler eşleşmiyor." });
      return;
    }

    setLoading(true);
    try {
      const res = await csrfFetch("/api/admin/password", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentPassword: current, newPassword: newPw }),
      });
      const data = await res.json();
      if (!res.ok) {
        setMsg({ type: "err", text: data.error || "Hata oluştu." });
      } else {
        setMsg({ type: "ok", text: "Şifre başarıyla değiştirildi." });
        setCurrent(""); setNewPw(""); setConfirm("");
      }
    } catch {
      setMsg({ type: "err", text: "Bağlantı hatası." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {msg && (
        <div className={`text-sm p-2 rounded ${msg.type === "ok" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-600"}`}>
          {msg.text}
        </div>
      )}
      <input type="password" value={current} onChange={e => setCurrent(e.target.value)} placeholder="Mevcut şifre" required className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 outline-none" />
      <input type="password" value={newPw} onChange={e => setNewPw(e.target.value)} placeholder="Yeni şifre (min 8 karakter)" required minLength={8} className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 outline-none" />
      <input type="password" value={confirm} onChange={e => setConfirm(e.target.value)} placeholder="Yeni şifre (tekrar)" required className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 outline-none" />
      <button type="submit" disabled={loading} className="w-full bg-orange-800 hover:bg-orange-900 text-white font-semibold py-2 rounded-lg text-sm transition-colors disabled:opacity-50">
        {loading ? "Değiştiriliyor..." : "Şifreyi Değiştir"}
      </button>
    </form>
  );
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function loadStats() {
      try {
        const [postsRes, catsRes] = await Promise.all([
          fetch("/api/blog"),
          fetch("/api/categories"),
        ]);

        if (!postsRes.ok) {
          router.push("/admin/login");
          return;
        }

        const posts = await postsRes.json();
        const cats = await catsRes.json();

        setStats({
          totalPosts: posts.length,
          publishedPosts: posts.filter((p: { is_published: number }) => p.is_published).length,
          categories: cats.length,
        });
      } catch {
        router.push("/admin/login");
      }
    }
    loadStats();
  }, [router]);

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
  }

  return (
    <div className="min-h-screen bg-stone-100">
      {/* Admin Header */}
      <header className="bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-amber-400">
            🔥 Düzce Et Mangal - Admin
          </h1>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm hover:text-amber-400">
              Siteyi Gör
            </Link>
            <button
              onClick={handleLogout}
              className="text-sm bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
            >
              Çıkış
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="text-3xl font-bold text-orange-800">
              {stats?.totalPosts ?? "—"}
            </div>
            <div className="text-stone-500 text-sm mt-1">Toplam Yazı</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="text-3xl font-bold text-green-700">
              {stats?.publishedPosts ?? "—"}
            </div>
            <div className="text-stone-500 text-sm mt-1">Yayında</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="text-3xl font-bold text-blue-700">
              {stats?.categories ?? "—"}
            </div>
            <div className="text-stone-500 text-sm mt-1">Kategori</div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            href="/admin/posts"
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow text-center"
          >
            <div className="text-2xl mb-2">📝</div>
            <div className="font-semibold text-stone-800">Yazıları Yönet</div>
          </Link>
          <Link
            href="/admin/posts/new"
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow text-center"
          >
            <div className="text-2xl mb-2">✍️</div>
            <div className="font-semibold text-stone-800">Yeni Yazı</div>
          </Link>
          <Link
            href="/admin/categories"
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow text-center"
          >
            <div className="text-2xl mb-2">📂</div>
            <div className="font-semibold text-stone-800">Kategoriler</div>
          </Link>
          <a
            href="https://ibrahiminyeri.com"
            target="_blank"
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow text-center"
          >
            <div className="text-2xl mb-2">🌐</div>
            <div className="font-semibold text-stone-800">ibrahiminyeri.com</div>
          </a>
        </div>

        {/* Password Change */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6 max-w-md">
          <h2 className="text-lg font-semibold text-stone-800 mb-4">🔒 Şifre Değiştir</h2>
          <PasswordChangeForm />
        </div>
      </div>
    </div>
  );
}
