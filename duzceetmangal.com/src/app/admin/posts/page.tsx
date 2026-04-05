"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCsrf } from "@/lib/useCsrf";

interface Post {
  id: number;
  title: string;
  slug: string;
  is_published: number;
  category_name: string | null;
  published_at: string;
}

export default function AdminPostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const { csrfFetch } = useCsrf();
  const router = useRouter();

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const res = await fetch("/api/blog");
    if (!res.ok) {
      router.push("/admin/login");
      return;
    }
    const data = await res.json();
    setPosts(data);
  }

  async function handleDelete(id: number) {
    if (!confirm("Bu yazıyı silmek istediğinize emin misiniz?")) return;

    const res = await csrfFetch(`/api/blog/${id}`, { method: "DELETE" });
    if (res.ok) {
      setPosts(posts.filter((p) => p.id !== id));
    }
  }

  return (
    <div className="min-h-screen bg-stone-100">
      <header className="bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/admin" className="text-amber-400 hover:text-amber-300">
              ← Dashboard
            </Link>
            <h1 className="text-xl font-bold">Yazılar</h1>
          </div>
          <Link
            href="/admin/posts/new"
            className="bg-amber-500 hover:bg-amber-600 text-stone-900 font-semibold px-4 py-2 rounded-lg text-sm"
          >
            + Yeni Yazı
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-stone-50 border-b">
              <tr>
                <th className="text-left px-6 py-3 text-sm font-medium text-stone-500">Başlık</th>
                <th className="text-left px-6 py-3 text-sm font-medium text-stone-500 hidden md:table-cell">Kategori</th>
                <th className="text-left px-6 py-3 text-sm font-medium text-stone-500 hidden md:table-cell">Durum</th>
                <th className="text-left px-6 py-3 text-sm font-medium text-stone-500 hidden md:table-cell">Tarih</th>
                <th className="text-right px-6 py-3 text-sm font-medium text-stone-500">İşlem</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-stone-50">
                  <td className="px-6 py-4">
                    <div className="font-medium text-stone-800">{post.title}</div>
                    <div className="text-xs text-stone-400 md:hidden">
                      {post.category_name || "—"} · {post.is_published ? "Yayında" : "Taslak"}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-stone-500 hidden md:table-cell">
                    {post.category_name || "—"}
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        post.is_published
                          ? "bg-green-100 text-green-700"
                          : "bg-stone-100 text-stone-500"
                      }`}
                    >
                      {post.is_published ? "Yayında" : "Taslak"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-stone-400 hidden md:table-cell">
                    {new Date(post.published_at).toLocaleDateString("tr-TR")}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/admin/posts/${post.id}/edit`}
                        className="text-sm text-blue-600 hover:text-blue-700"
                      >
                        Düzenle
                      </Link>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="text-sm text-red-600 hover:text-red-700"
                      >
                        Sil
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {posts.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-stone-400">
                    Henüz yazı yok.{" "}
                    <Link href="/admin/posts/new" className="text-orange-600 hover:underline">
                      İlk yazınızı oluşturun.
                    </Link>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
