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
    if (newPw.length < 8) { setMsg({ type: "err", text: "Yeni şifre en az 8 karakter olmalı." }); return; }
    if (newPw !== confirm) { setMsg({ type: "err", text: "Şifreler eşleşmiyor." }); return; }
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
        <div className={`text-sm p-2.5 rounded-lg border ${msg.type === "ok" ? "bg-green-50 text-green-700 border-green-100" : "bg-red-50 text-red-600 border-red-100"}`}>
          {msg.text}
        </div>
      )}
      <input type="password" value={current} onChange={e => setCurrent(e.target.value)} placeholder="Mevcut şifre" required className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-green-500 outline-none" />
      <input type="password" value={newPw} onChange={e => setNewPw(e.target.value)} placeholder="Yeni şifre (min 8 karakter)" required minLength={8} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-green-500 outline-none" />
      <input type="password" value={confirm} onChange={e => setConfirm(e.target.value)} placeholder="Yeni şifre (tekrar)" required className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-green-500 outline-none" />
      <button type="submit" disabled={loading} className="w-full bg-green-900 hover:bg-green-800 text-white font-semibold py-2.5 rounded-lg text-sm transition-colors disabled:opacity-50">
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
        const [postsRes, catsRes] = await Promise.all([fetch("/api/blog"), fetch("/api/categories")]);
        if (!postsRes.ok) { router.push("/admin/login"); return; }
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
    <div className="min-h-screen bg-gray-50">
      <header className="bg-green-950 text-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-green-400/20 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
            </div>
            <h1 className="text-lg font-bold text-green-400">Bolu Dağı — Admin</h1>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm text-green-300 hover:text-white">Siteyi Gör</Link>
            <button onClick={handleLogout} className="text-sm bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded-lg">Çıkış</button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {[
            { label: "Toplam Yazı", value: stats?.totalPosts, color: "text-green-700" },
            { label: "Yayında", value: stats?.publishedPosts, color: "text-emerald-600" },
            { label: "Kategori", value: stats?.categories, color: "text-sky-600" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className={`text-3xl font-bold ${s.color}`}>{s.value ?? "—"}</div>
              <div className="text-gray-500 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { href: "/admin/posts", icon: "📝", label: "Yazıları Yönet" },
            { href: "/admin/posts/new", icon: "✍️", label: "Yeni Yazı" },
            { href: "/admin/categories", icon: "📂", label: "Kategoriler" },
            { href: "https://ibrahiminyeri.com", icon: "🌲", label: "ibrahiminyeri.com", external: true },
          ].map((item) => (
            item.external ? (
              <a key={item.label} href={item.href} target="_blank" className="bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition-shadow text-center border border-gray-100">
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="font-semibold text-gray-700 text-sm">{item.label}</div>
              </a>
            ) : (
              <Link key={item.label} href={item.href} className="bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition-shadow text-center border border-gray-100">
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="font-semibold text-gray-700 text-sm">{item.label}</div>
              </Link>
            )
          ))}
        </div>

        {/* Password */}
        <div className="bg-white rounded-xl shadow-sm p-6 max-w-md border border-gray-100">
          <h2 className="text-base font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            Şifre Değiştir
          </h2>
          <PasswordChangeForm />
        </div>
      </div>
    </div>
  );
}
