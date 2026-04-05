"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string | null;
  published: boolean;
  createdAt: string;
  categoryId: number;
  category: { name: string };
}

export default function AdminPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Check auth status by making an authenticated request
    fetchPosts().catch(() => setAuthenticated(false));
  }, []);

  async function fetchPosts() {
    setLoading(true);
    try {
      const res = await fetch("/api/posts");
      if (res.status === 401 || res.status === 403) {
        setAuthenticated(false);
        setLoading(false);
        return;
      }
      const data = await res.json();
      setPosts(Array.isArray(data) ? data : []);
      setAuthenticated(true);
    } catch {
      setMessage("Yazılar yüklenemedi");
      setAuthenticated(false);
    }
    setLoading(false);
  }

  async function login() {
    setError("");
    setLoginLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setAuthenticated(true);
        setPassword("");
        fetchPosts();
      } else {
        setError(data.error || "Giriş başarısız");
      }
    } catch {
      setError("Bağlantı hatası");
    }
    setLoginLoading(false);
  }

  async function deletePost(id: number) {
    if (!confirm("Bu yazıyı silmek istediğinize emin misiniz?")) return;
    try {
      const res = await fetch(`/api/posts/${id}`, { method: "DELETE" });
      if (res.ok) {
        setPosts(posts.filter((p) => p.id !== id));
        setMessage("Yazı silindi");
      } else if (res.status === 401 || res.status === 403) {
        setAuthenticated(false);
      } else {
        const data = await res.json();
        setMessage(data.error || "Silme hatası");
      }
    } catch {
      setMessage("Bağlantı hatası");
    }
  }

  async function togglePublish(id: number, current: boolean) {
    const post = posts.find((p) => p.id === id);
    if (!post) return;
    try {
      const res = await fetch(`/api/posts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt,
          content: post.content,
          coverImage: post.coverImage,
          categoryId: post.categoryId,
          published: !current,
        }),
      });
      if (res.ok) {
        setPosts(posts.map((p) => (p.id === id ? { ...p, published: !current } : p)));
      } else if (res.status === 401 || res.status === 403) {
        setAuthenticated(false);
      }
    } catch {
      setMessage("Güncelleme hatası");
    }
  }

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    setAuthenticated(false);
    setUsername("");
    setPassword("");
    setPosts([]);
    setMessage("");
  }

  // Still loading auth state
  if (authenticated === null) {
    return (
      <div className="max-w-md mx-auto px-4 py-20 text-center text-stone-500">
        Yükleniyor...
      </div>
    );
  }

  if (!authenticated) {
    return (
      <div className="max-w-md mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold mb-8 text-center">Admin Giriş</h1>
        <div className="card p-6 space-y-4">
          {error && (
            <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm">
              {error}
            </div>
          )}
          <div>
            <label className="block text-sm font-medium mb-1">Kullanıcı Adı</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && login()}
              placeholder="Kullanıcı adınız"
              autoComplete="username"
              className="w-full border border-stone-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Şifre</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && login()}
              placeholder="Şifreniz"
              autoComplete="current-password"
              className="w-full border border-stone-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <button
            onClick={login}
            disabled={loginLoading}
            className="btn-primary w-full justify-center disabled:opacity-50"
          >
            {loginLoading ? "Giriş yapılıyor..." : "Giriş Yap"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Admin Panel</h1>
          <p className="text-stone-500 text-sm mt-1">{posts.length} yazı</p>
        </div>
        <div className="flex gap-3">
          <Link href="/admin/yorumlar" className="px-4 py-2 text-sm border border-stone-300 rounded-lg hover:bg-stone-100 transition-colors">
            Yorumlar
          </Link>
          <Link href="/admin/yeni" className="btn-primary text-sm">
            + Yeni Yazı
          </Link>
          <button
            onClick={logout}
            className="px-4 py-2 text-sm border border-stone-300 rounded-lg hover:bg-stone-100 transition-colors"
          >
            Çıkış
          </button>
        </div>
      </div>

      {message && (
        <div className="mb-4 p-3 bg-accent/10 text-accent rounded-lg text-sm">
          {message}
        </div>
      )}

      {loading ? (
        <p className="text-stone-500">Yükleniyor...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-stone-200">
                <th className="py-3 px-2 text-sm font-semibold">Başlık</th>
                <th className="py-3 px-2 text-sm font-semibold hidden sm:table-cell">Kategori</th>
                <th className="py-3 px-2 text-sm font-semibold hidden md:table-cell">Tarih</th>
                <th className="py-3 px-2 text-sm font-semibold">Durum</th>
                <th className="py-3 px-2 text-sm font-semibold text-right">İşlem</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="border-b border-stone-100 hover:bg-stone-50">
                  <td className="py-3 px-2">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm font-medium hover:text-primary transition-colors"
                    >
                      {post.title}
                    </Link>
                  </td>
                  <td className="py-3 px-2 text-sm text-stone-500 hidden sm:table-cell">
                    {post.category.name}
                  </td>
                  <td className="py-3 px-2 text-sm text-stone-500 hidden md:table-cell">
                    {new Date(post.createdAt).toLocaleDateString("tr-TR")}
                  </td>
                  <td className="py-3 px-2">
                    <button
                      onClick={() => togglePublish(post.id, post.published)}
                      className={`text-xs px-2 py-1 rounded-full font-medium ${
                        post.published
                          ? "bg-green-100 text-green-700"
                          : "bg-stone-100 text-stone-500"
                      }`}
                    >
                      {post.published ? "Yayında" : "Taslak"}
                    </button>
                  </td>
                  <td className="py-3 px-2 text-right">
                    <div className="flex gap-2 justify-end">
                      <Link
                        href={`/admin/duzenle/${post.id}`}
                        className="text-xs px-3 py-1.5 border border-stone-300 rounded-lg hover:border-primary hover:text-primary transition-colors"
                      >
                        Düzenle
                      </Link>
                      <button
                        onClick={() => deletePost(post.id)}
                        className="text-xs px-3 py-1.5 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                      >
                        Sil
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
  );
}
