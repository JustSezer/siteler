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

  useEffect(() => { fetchPosts(); }, []);

  async function fetchPosts() {
    const res = await fetch("/api/blog");
    if (!res.ok) { router.push("/admin/login"); return; }
    setPosts(await res.json());
  }

  async function handleDelete(id: number) {
    if (!confirm("Bu yazıyı silmek istediğinize emin misiniz?")) return;
    const res = await csrfFetch(`/api/blog/${id}`, { method: "DELETE" });
    if (res.ok) setPosts(posts.filter((p) => p.id !== id));
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-green-950 text-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/admin" className="text-green-400 hover:text-green-300 text-sm">← Dashboard</Link>
            <h1 className="text-lg font-bold">Yazılar</h1>
          </div>
          <Link href="/admin/posts/new" className="bg-green-400 hover:bg-green-300 text-green-950 font-semibold px-4 py-2 rounded-lg text-sm">
            + Yeni Yazı
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Başlık</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide hidden md:table-cell">Kategori</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide hidden md:table-cell">Durum</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide hidden md:table-cell">Tarih</th>
                <th className="text-right px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">İşlem</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-800 text-sm">{post.title}</div>
                    <div className="text-xs text-gray-400 md:hidden mt-0.5">
                      {post.category_name || "—"} · {post.is_published ? "Yayında" : "Taslak"}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 hidden md:table-cell">{post.category_name || "—"}</td>
                  <td className="px-6 py-4 hidden md:table-cell">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${post.is_published ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                      {post.is_published ? "Yayında" : "Taslak"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-400 hidden md:table-cell">
                    {new Date(post.published_at).toLocaleDateString("tr-TR")}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <Link href={`/admin/posts/${post.id}/edit`} className="text-sm text-blue-600 hover:text-blue-700 font-medium">Düzenle</Link>
                      <button onClick={() => handleDelete(post.id)} className="text-sm text-red-500 hover:text-red-600 font-medium">Sil</button>
                    </div>
                  </td>
                </tr>
              ))}
              {posts.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-gray-400 text-sm">
                    Henüz yazı yok.{" "}
                    <Link href="/admin/posts/new" className="text-green-600 hover:underline">İlk yazınızı oluşturun.</Link>
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
