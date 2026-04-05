"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { useCsrf } from "@/lib/useCsrf";

interface Category {
  id: number;
  name: string;
}

interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image: string | null;
  category_id: number | null;
  tags: string | null;
  reading_time: number | null;
  is_published: number;
}

export default function EditPostPage() {
  const router = useRouter();
  const params = useParams();
  const postId = params.id as string;
  const { csrfFetch } = useCsrf();

  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [tags, setTags] = useState("");
  const [readingTime, setReadingTime] = useState("5");
  const [isPublished, setIsPublished] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const [postRes, catsRes] = await Promise.all([
          fetch(`/api/blog/${postId}`),
          fetch("/api/categories"),
        ]);
        if (!postRes.ok) {
          router.push("/admin/posts");
          return;
        }
        const post: Post = await postRes.json();
        const cats: Category[] = await catsRes.json();

        setCategories(cats);
        setTitle(post.title);
        setSlug(post.slug);
        setExcerpt(post.excerpt);
        setContent(post.content);
        setCoverImage(post.cover_image || "");
        setCategoryId(post.category_id ? String(post.category_id) : "");
        setTags(post.tags || "");
        setReadingTime(post.reading_time ? String(post.reading_time) : "5");
        setIsPublished(!!post.is_published);
      } catch {
        router.push("/admin/posts");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [postId, router]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess(false);
    if (!title.trim() || !slug.trim() || !excerpt.trim() || !content.trim()) {
      setError("Başlık, slug, özet ve içerik zorunludur.");
      return;
    }
    setSaving(true);
    try {
      const res = await csrfFetch(`/api/blog/${postId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title.trim(),
          slug: slug.trim(),
          excerpt: excerpt.trim(),
          content: content.trim(),
          cover_image: coverImage.trim() || null,
          category_id: categoryId ? Number(categoryId) : null,
          tags: tags.trim() || null,
          reading_time: readingTime ? Number(readingTime) : null,
          is_published: isPublished ? 1 : 0,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Hata oluştu.");
      } else {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      }
    } catch {
      setError("Bağlantı hatası.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-amber-50 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-amber-200 border-t-amber-700 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-amber-50">
      <header className="bg-white border-b border-amber-100">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/admin/posts" className="text-stone-400 hover:text-amber-700 text-sm">
              ← Yazılar
            </Link>
            <span className="text-stone-300">|</span>
            <h1 className="text-xl font-bold text-amber-700">Yazıyı Düzenle</h1>
          </div>
          <div className="flex items-center gap-3">
            {success && (
              <span className="text-sm text-green-600 font-medium">✓ Kaydedildi</span>
            )}
            <button
              form="post-form"
              type="submit"
              disabled={saving}
              className="bg-amber-700 hover:bg-amber-800 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors disabled:opacity-50"
            >
              {saving ? "Kaydediliyor..." : "Kaydet"}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {error && (
          <div className="mb-6 bg-red-50 text-red-600 text-sm p-3 rounded-xl border border-red-100">
            {error}
          </div>
        )}

        <form id="post-form" onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-white rounded-2xl p-6 border border-amber-100 shadow-sm space-y-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Başlık *</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-stone-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Slug *</label>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-stone-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 outline-none font-mono"
                />
                <p className="text-xs text-stone-400 mt-1">/blog/{slug}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Özet *</label>
                <textarea
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  required
                  rows={3}
                  className="w-full px-3 py-2 border border-stone-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 outline-none resize-none"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-amber-100 shadow-sm">
              <label className="block text-sm font-medium text-stone-700 mb-2">İçerik * (HTML)</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                rows={20}
                className="w-full px-3 py-2 border border-stone-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 outline-none resize-y font-mono"
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-white rounded-2xl p-5 border border-amber-100 shadow-sm space-y-4">
              <h3 className="text-sm font-semibold text-stone-700">Yayın Ayarları</h3>

              <label className="flex items-center gap-3 cursor-pointer">
                <div
                  onClick={() => setIsPublished(!isPublished)}
                  className={`w-10 h-6 rounded-full transition-colors relative ${isPublished ? "bg-amber-600" : "bg-stone-200"}`}
                >
                  <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${isPublished ? "translate-x-4" : ""}`} />
                </div>
                <span className="text-sm text-stone-600">{isPublished ? "Yayında" : "Taslak"}</span>
              </label>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-amber-100 shadow-sm space-y-4">
              <h3 className="text-sm font-semibold text-stone-700">Detaylar</h3>

              <div>
                <label className="block text-xs font-medium text-stone-500 mb-1">Kategori</label>
                <select
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                  className="w-full px-3 py-2 border border-stone-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 outline-none bg-white"
                >
                  <option value="">Seçiniz</option>
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-500 mb-1">Okuma Süresi (dk)</label>
                <input
                  type="number"
                  min={1}
                  max={60}
                  value={readingTime}
                  onChange={(e) => setReadingTime(e.target.value)}
                  className="w-full px-3 py-2 border border-stone-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-500 mb-1">Etiketler</label>
                <input
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  className="w-full px-3 py-2 border border-stone-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                  placeholder="kahvaltı, düzce, tarif"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-amber-100 shadow-sm">
              <h3 className="text-sm font-semibold text-stone-700 mb-3">Kapak Görseli</h3>
              <input
                type="url"
                value={coverImage}
                onChange={(e) => setCoverImage(e.target.value)}
                className="w-full px-3 py-2 border border-stone-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                placeholder="https://..."
              />
              {coverImage && (
                <div className="mt-3 rounded-xl overflow-hidden border border-amber-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={coverImage} alt="Kapak" className="w-full h-32 object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                </div>
              )}
            </div>

            <div className="bg-white rounded-2xl p-5 border border-amber-100 shadow-sm">
              <Link
                href={`/blog/${slug}`}
                target="_blank"
                className="flex items-center justify-center gap-2 text-sm text-amber-700 hover:text-amber-900 font-medium"
              >
                🌐 Canlı Görüntüle
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
