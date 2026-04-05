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
        <div className={`text-sm p-2 rounded-lg ${msg.type === "ok" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-600"}`}>
          {msg.text}
        </div>
      )}
      <input type="password" value={current} onChange={e => setCurrent(e.target.value)} placeholder="Mevcut şifre" required className="w-full px-3 py-2 border border-stone-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 outline-none" />
      <input type="password" value={newPw} onChange={e => setNewPw(e.target.value)} placeholder="Yeni şifre (min 8 karakter)" required minLength={8} className="w-full px-3 py-2 border border-stone-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 outline-none" />
      <input type="password" value={confirm} onChange={e => setConfirm(e.target.value)} placeholder="Yeni şifre (tekrar)" required className="w-full px-3 py-2 border border-stone-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 outline-none" />
      <button type="submit" disabled={loading} className="w-full bg-amber-700 hover:bg-amber-800 text-white font-semibold py-2 rounded-xl text-sm transition-colors disabled:opacity-50">
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
    <div className="min-h-screen bg-amber-50">
      <header className="bg-white border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-amber-700 flex items-center gap-2">
            ☕ Düzce Kahvaltı Yerleri — Admin
          </h1>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm text-stone-500 hover:text-amber-700">
              Siteyi Gör
            </Link>
            <button
              onClick={handleLogout}
              className="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg"
            >
              Çıkış
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-amber-100">
            <div className="text-3xl font-bold text-amber-700">{stats?.totalPosts ?? "—"}</div>
            <div className="text-stone-400 text-sm mt-1">Toplam Yazı</div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-amber-100">
            <div className="text-3xl font-bold text-green-600">{stats?.publishedPosts ?? "—"}</div>
            <div className="text-stone-400 text-sm mt-1">Yayında</div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-amber-100">
            <div className="text-3xl font-bold text-blue-600">{stats?.categories ?? "—"}</div>
            <div className="text-stone-400 text-sm mt-1">Kategori</div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          <Link href="/admin/posts" className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow text-center border border-amber-100">
            <div className="text-2xl mb-2">📝</div>
            <div className="font-semibold text-stone-700">Yazıları Yönet</div>
          </Link>
          <Link href="/admin/posts/new" className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow text-center border border-amber-100">
            <div className="text-2xl mb-2">✍️</div>
            <div className="font-semibold text-stone-700">Yeni Yazı</div>
          </Link>
          <Link href="/admin/categories" className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow text-center border border-amber-100">
            <div className="text-2xl mb-2">📂</div>
            <div className="font-semibold text-stone-700">Kategoriler</div>
          </Link>
          <Link href="/admin/subscribers" className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow text-center border border-amber-100">
            <div className="text-2xl mb-2">📧</div>
            <div className="font-semibold text-stone-700">Aboneler</div>
          </Link>
          <a href="https://ibrahiminyeri.com" target="_blank" className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow text-center border border-amber-100">
            <div className="text-2xl mb-2">🌐</div>
            <div className="font-semibold text-stone-700">ibrahiminyeri.com</div>
          </a>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 max-w-md border border-amber-100">
          <h2 className="text-lg font-semibold text-stone-700 mb-4">🔒 Şifre Değiştir</h2>
          <PasswordChangeForm />
        </div>
      </div>
    </div>
  );
}
