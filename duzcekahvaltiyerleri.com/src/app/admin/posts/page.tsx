"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCsrf } from "@/lib/useCsrf";

interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  is_published: number;
  published_at: string | null;
  reading_time: number | null;
  category_name: string | null;
}

export default function AdminPostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const router = useRouter();
  const { csrfFetch } = useCsrf();

  async function loadPosts() {
    try {
      const res = await fetch("/api/blog");
      if (!res.ok) {
        router.push("/admin/login");
        return;
      }
      const data = await res.json();
      setPosts(data);
    } catch {
      router.push("/admin/login");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPosts();
  }, []);

  async function handleDelete(id: number, title: string) {
    if (!confirm(`"${title}" yazısını silmek istediğinizden emin misiniz?`)) return;
    setDeletingId(id);
    try {
      const res = await csrfFetch(`/api/blog/${id}`, { method: "DELETE" });
      if (res.ok) {
        setPosts((prev) => prev.filter((p) => p.id !== id));
      } else {
        alert("Silme işlemi başarısız.");
      }
    } catch {
      alert("Bağlantı hatası.");
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div className="min-h-screen bg-amber-50">
      <header className="bg-white border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/admin" className="text-stone-400 hover:text-amber-700 text-sm">
              ← Dashboard
            </Link>
            <span className="text-stone-300">|</span>
            <h1 className="text-xl font-bold text-amber-700">Yazılar</h1>
          </div>
          <Link
            href="/admin/posts/new"
            className="bg-amber-700 hover:bg-amber-800 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors"
          >
            + Yeni Yazı
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {loading ? (
          <div className="flex justify-center py-16">
            <div className="w-8 h-8 border-4 border-amber-200 border-t-amber-700 rounded-full animate-spin" />
          </div>
        ) : posts.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-amber-100">
            <div className="text-4xl mb-4">📝</div>
            <p className="text-stone-500 mb-4">Henüz yazı yok.</p>
            <Link href="/admin/posts/new" className="text-amber-700 font-semibold hover:underline">
              İlk yazıyı ekle →
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm border border-amber-100 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-amber-100 bg-amber-50">
                  <th className="text-left px-6 py-3 text-xs font-semibold text-stone-500 uppercase tracking-wider">Başlık</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-stone-500 uppercase tracking-wider hidden md:table-cell">Kategori</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-stone-500 uppercase tracking-wider hidden lg:table-cell">Tarih</th>
                  <th className="text-center px-4 py-3 text-xs font-semibold text-stone-500 uppercase tracking-wider">Durum</th>
                  <th className="text-right px-6 py-3 text-xs font-semibold text-stone-500 uppercase tracking-wider">İşlemler</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-50">
                {posts.map((post) => (
                  <tr key={post.id} className="hover:bg-amber-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-stone-800 text-sm line-clamp-1">{post.title}</div>
                      <div className="text-xs text-stone-400 mt-0.5 font-mono">/blog/{post.slug}</div>
                    </td>
                    <td className="px-4 py-4 hidden md:table-cell">
                      <span className="text-sm text-stone-500">{post.category_name || "—"}</span>
                    </td>
                    <td className="px-4 py-4 hidden lg:table-cell">
                      <span className="text-sm text-stone-400">
                        {post.published_at
                          ? new Date(post.published_at).toLocaleDateString("tr-TR")
                          : "—"}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                          post.is_published
                            ? "bg-green-50 text-green-700"
                            : "bg-stone-100 text-stone-500"
                        }`}
                      >
                        {post.is_published ? "Yayında" : "Taslak"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/blog/${post.slug}`}
                          target="_blank"
                          className="text-xs text-stone-400 hover:text-amber-700 px-2 py-1 rounded-lg hover:bg-amber-50 transition-colors"
                        >
                          Gör
                        </Link>
                        <Link
                          href={`/admin/posts/${post.id}/edit`}
                          className="text-xs text-amber-700 hover:text-amber-900 px-2 py-1 rounded-lg hover:bg-amber-50 transition-colors font-medium"
                        >
                          Düzenle
                        </Link>
                        <button
                          onClick={() => handleDelete(post.id, post.title)}
                          disabled={deletingId === post.id}
                          className="text-xs text-red-500 hover:text-red-700 px-2 py-1 rounded-lg hover:bg-red-50 transition-colors disabled:opacity-40"
                        >
                          {deletingId === post.id ? "..." : "Sil"}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="px-6 py-3 border-t border-amber-50 bg-amber-50/50">
              <span className="text-xs text-stone-400">{posts.length} yazı</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
