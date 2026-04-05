"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import type { Post, Lead } from "@/lib/db";
import { useCsrf } from "@/lib/useCsrf";

interface Stats {
  totalPosts: number;
  publishedPosts: number;
  draftPosts: number;
  categories: number;
  totalLeads: number;
  unreadLeads: number;
}

export default function AdminDashboard({
  posts: initialPosts,
  stats,
  leads: initialLeads,
}: {
  posts: Post[];
  stats: Stats;
  leads: Lead[];
}) {
  const router = useRouter();
  const [posts, setPosts] = useState(initialPosts);
  const [leads, setLeads] = useState(initialLeads);
  const [deleting, setDeleting] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"posts" | "leads">("posts");
  const { csrfFetch } = useCsrf();

  async function handleLogout() {
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.push("/admin/login");
    router.refresh();
  }

  async function handleDelete(id: number) {
    if (!confirm("Bu yazıyı silmek istediğinize emin misiniz?")) return;
    setDeleting(id);
    const res = await csrfFetch(`/api/admin/posts/${id}`, { method: "DELETE" });
    if (res.ok) {
      setPosts(posts.filter((p) => p.id !== id));
    }
    setDeleting(null);
  }

  async function togglePublish(post: Post) {
    const newStatus = post.is_published === 1 ? 0 : 1;
    const res = await csrfFetch(`/api/admin/posts/${post.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ is_published: newStatus }),
    });
    if (res.ok) {
      setPosts(posts.map((p) => p.id === post.id ? { ...p, is_published: newStatus } : p));
    }
  }

  async function markLeadRead(id: number) {
    const res = await csrfFetch(`/api/admin/leads/${id}`, { method: "PUT" });
    if (res.ok) {
      setLeads(leads.map((l) => l.id === id ? { ...l, is_read: 1 } : l));
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Admin Panel</h1>
          <p className="text-slate-500 text-sm mt-1">Wix Destek Yönetimi</p>
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          <Link
            href="/admin/posts/new"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg text-sm transition-colors"
          >
            + Yeni Yazı
          </Link>
          <Link
            href="/admin/settings"
            className="border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium px-4 py-2 rounded-lg text-sm transition-colors"
          >
            Ayarlar
          </Link>
          <Link
            href="/"
            target="_blank"
            className="border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium px-4 py-2 rounded-lg text-sm transition-colors"
          >
            Siteyi Gör
          </Link>
          <button
            onClick={handleLogout}
            className="border border-slate-300 text-slate-500 hover:text-red-600 hover:border-red-300 font-medium px-4 py-2 rounded-lg text-sm transition-colors"
          >
            Çıkış
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {[
          { label: "Toplam Yazı", value: stats.totalPosts, color: "text-slate-800" },
          { label: "Yayında", value: stats.publishedPosts, color: "text-green-700" },
          { label: "Taslak", value: stats.draftPosts, color: "text-amber-600" },
          { label: "Kategori", value: stats.categories, color: "text-blue-700" },
          { label: "Toplam Talep", value: stats.totalLeads, color: "text-indigo-700" },
          { label: "Okunmamış", value: stats.unreadLeads, color: "text-red-600" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
            <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-xs text-slate-500 mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 bg-slate-100 p-1 rounded-lg w-fit">
        <button
          onClick={() => setActiveTab("posts")}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeTab === "posts"
              ? "bg-white text-slate-900 shadow-sm"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          Blog Yazıları
        </button>
        <button
          onClick={() => setActiveTab("leads")}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors relative ${
            activeTab === "leads"
              ? "bg-white text-slate-900 shadow-sm"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          Destek Talepleri
          {stats.unreadLeads > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">
              {stats.unreadLeads}
            </span>
          )}
        </button>
      </div>

      {/* Posts Tab */}
      {activeTab === "posts" && (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-200">
          <div className="px-4 sm:px-6 py-4 border-b border-slate-100">
            <h2 className="font-semibold text-slate-800">Blog Yazıları</h2>
          </div>

          {posts.length === 0 ? (
            <div className="p-8 text-center text-slate-500">
              Henüz yazı yok.{" "}
              <Link href="/admin/posts/new" className="text-blue-600 hover:text-blue-700 font-medium">
                İlk yazını oluştur
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wide">
                  <tr>
                    <th className="px-4 sm:px-6 py-3 text-left">Başlık</th>
                    <th className="px-4 py-3 text-left hidden sm:table-cell">Kategori</th>
                    <th className="px-4 py-3 text-left hidden md:table-cell">Tarih</th>
                    <th className="px-4 py-3 text-center">Durum</th>
                    <th className="px-4 sm:px-6 py-3 text-right">İşlem</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {posts.map((post) => (
                    <tr key={post.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-4 sm:px-6 py-3">
                        <Link
                          href={`/admin/posts/${post.id}`}
                          className="font-medium text-slate-800 hover:text-blue-600 line-clamp-1"
                        >
                          {post.title}
                        </Link>
                        <p className="text-xs text-slate-400 mt-0.5 sm:hidden">{post.category}</p>
                      </td>
                      <td className="px-4 py-3 text-slate-600 hidden sm:table-cell">{post.category}</td>
                      <td className="px-4 py-3 text-slate-500 hidden md:table-cell whitespace-nowrap">
                        {new Date(post.published_at).toLocaleDateString("tr-TR")}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <button
                          onClick={() => togglePublish(post)}
                          className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium cursor-pointer transition-colors ${
                            post.is_published === 1
                              ? "bg-green-100 text-green-700 hover:bg-green-200"
                              : "bg-amber-100 text-amber-700 hover:bg-amber-200"
                          }`}
                        >
                          {post.is_published === 1 ? "Yayında" : "Taslak"}
                        </button>
                      </td>
                      <td className="px-4 sm:px-6 py-3 text-right">
                        <div className="flex gap-2 justify-end">
                          <Link
                            href={`/admin/posts/${post.id}`}
                            className="text-blue-600 hover:text-blue-800 text-xs font-medium"
                          >
                            Düzenle
                          </Link>
                          <button
                            onClick={() => handleDelete(post.id)}
                            disabled={deleting === post.id}
                            className="text-red-500 hover:text-red-700 disabled:text-red-300 text-xs font-medium"
                          >
                            {deleting === post.id ? "..." : "Sil"}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* Leads Tab */}
      {activeTab === "leads" && (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-200">
          <div className="px-4 sm:px-6 py-4 border-b border-slate-100">
            <h2 className="font-semibold text-slate-800">Destek Talepleri</h2>
          </div>

          {leads.length === 0 ? (
            <div className="p-8 text-center text-slate-500">
              Henüz destek talebi yok.
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {leads.map((lead) => (
                <div
                  key={lead.id}
                  className={`p-4 sm:p-5 ${lead.is_read === 0 ? "bg-blue-50/50" : ""}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      {lead.is_read === 0 && (
                        <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0 mt-1" />
                      )}
                      <div>
                        <span className="font-semibold text-slate-900">{lead.name}</span>
                        <span className="text-slate-500 text-sm ml-2">{lead.email}</span>
                        {lead.phone && (
                          <span className="text-slate-400 text-sm ml-2">{lead.phone}</span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="bg-blue-100 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full">
                        {lead.subject}
                      </span>
                      <span className="text-xs text-slate-400">
                        {new Date(lead.created_at).toLocaleDateString("tr-TR")}
                      </span>
                      {lead.is_read === 0 && (
                        <button
                          onClick={() => markLeadRead(lead.id)}
                          className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                        >
                          Okundu
                        </button>
                      )}
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed ml-4 sm:ml-4 pl-0 sm:pl-0">
                    {lead.message}
                  </p>
                  <div className="mt-2 ml-4">
                    <a
                      href={`mailto:${lead.email}?subject=Re: ${lead.subject}`}
                      className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                    >
                      E-posta ile yanıtla &rarr;
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
