"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import type { Post } from "@/lib/db";

interface Stats {
  totalPosts: number;
  publishedPosts: number;
  draftPosts: number;
  categories: number;
}

export default function AdminDashboard({
  posts: initialPosts,
  stats,
}: {
  posts: Post[];
  stats: Stats;
}) {
  const router = useRouter();
  const [posts, setPosts] = useState(initialPosts);
  const [deleting, setDeleting] = useState<number | null>(null);

  async function handleLogout() {
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.push("/admin/login");
    router.refresh();
  }

  async function handleDelete(id: number) {
    if (!confirm("Bu yazıyı silmek istediğinize emin misiniz?")) return;
    setDeleting(id);
    const res = await fetch(`/api/admin/posts/${id}`, { method: "DELETE" });
    if (res.ok) {
      setPosts(posts.filter((p) => p.id !== id));
    }
    setDeleting(null);
  }

  async function togglePublish(post: Post) {
    const newStatus = post.is_published === 1 ? 0 : 1;
    const res = await fetch(`/api/admin/posts/${post.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ is_published: newStatus }),
    });
    if (res.ok) {
      setPosts(
        posts.map((p) =>
          p.id === post.id ? { ...p, is_published: newStatus } : p
        )
      );
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-stone-800">
            Admin Panel
          </h1>
          <p className="text-stone-500 text-sm mt-1">Bolu Et Lokantası Yönetim</p>
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          <Link
            href="/admin/posts/new"
            className="bg-amber-800 hover:bg-amber-900 text-white font-medium px-3 sm:px-4 py-2 rounded-lg text-sm transition-colors"
          >
            + Yeni Yazı
          </Link>
          <Link
            href="/admin/settings"
            className="border border-stone-300 text-stone-700 hover:bg-stone-50 font-medium px-3 sm:px-4 py-2 rounded-lg text-sm transition-colors"
          >
            Ayarlar
          </Link>
          <Link
            href="/"
            target="_blank"
            className="border border-stone-300 text-stone-700 hover:bg-stone-50 font-medium px-3 sm:px-4 py-2 rounded-lg text-sm transition-colors hidden sm:inline-flex"
          >
            Siteyi Gör
          </Link>
          <button
            onClick={handleLogout}
            className="border border-stone-300 text-stone-500 hover:text-amber-800 hover:border-amber-300 font-medium px-3 sm:px-4 py-2 rounded-lg text-sm transition-colors"
          >
            Çıkış
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <p className="text-2xl font-bold text-stone-800">{stats.totalPosts}</p>
          <p className="text-xs text-stone-500 mt-1">Toplam Yazı</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <p className="text-2xl font-bold text-green-700">{stats.publishedPosts}</p>
          <p className="text-xs text-stone-500 mt-1">Yayında</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <p className="text-2xl font-bold text-amber-600">{stats.draftPosts}</p>
          <p className="text-xs text-stone-500 mt-1">Taslak</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <p className="text-2xl font-bold text-blue-700">{stats.categories}</p>
          <p className="text-xs text-stone-500 mt-1">Kategori</p>
        </div>
      </div>

      {/* Posts Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="px-4 sm:px-6 py-4 border-b border-stone-100">
          <h2 className="font-semibold text-stone-800">Yazılar</h2>
        </div>

        {posts.length === 0 ? (
          <div className="p-8 text-center text-stone-500">
            Henüz yazı yok.{" "}
            <Link href="/admin/posts/new" className="text-amber-800 hover:text-amber-900 font-medium">
              İlk yazını oluştur
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-stone-50 text-stone-600 text-xs uppercase tracking-wide">
                <tr>
                  <th className="px-4 sm:px-6 py-3 text-left">Başlık</th>
                  <th className="px-4 py-3 text-left hidden sm:table-cell">Kategori</th>
                  <th className="px-4 py-3 text-left hidden md:table-cell">Tarih</th>
                  <th className="px-4 py-3 text-center">Durum</th>
                  <th className="px-4 sm:px-6 py-3 text-right">İşlem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {posts.map((post) => (
                  <tr key={post.id} className="hover:bg-stone-50 transition-colors">
                    <td className="px-4 sm:px-6 py-3">
                      <Link
                        href={`/admin/posts/${post.id}`}
                        className="font-medium text-stone-800 hover:text-amber-800 line-clamp-1"
                      >
                        {post.title}
                      </Link>
                      <p className="text-xs text-stone-400 mt-0.5 sm:hidden">{post.category}</p>
                    </td>
                    <td className="px-4 py-3 text-stone-600 hidden sm:table-cell">
                      {post.category}
                    </td>
                    <td className="px-4 py-3 text-stone-500 hidden md:table-cell whitespace-nowrap">
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
                          className="text-red-600 hover:text-red-800 disabled:text-red-300 text-xs font-medium"
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
    </div>
  );
}
