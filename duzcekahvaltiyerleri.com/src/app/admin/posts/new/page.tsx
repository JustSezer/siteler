"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCsrf } from "@/lib/useCsrf";

interface Category {
  id: number;
  name: string;
}

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/ğ/g, "g").replace(/ü/g, "u").replace(/ş/g, "s")
    .replace(/ı/g, "i").replace(/ö/g, "o").replace(/ç/g, "c")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function NewPostPage() {
  const router = useRouter();
  const { csrfFetch } = useCsrf();

  const [categories, setCategories] = useState<Category[]>([]);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [slugManual, setSlugManual] = useState(false);
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [tags, setTags] = useState("");
  const [readingTime, setReadingTime] = useState("5");
  const [isPublished, setIsPublished] = useState(false);

  useEffect(() => {
    fetch("/api/categories").then((r) => r.json()).then(setCategories).catch(() => {});
  }, []);

  function handleTitleChange(val: string) {
    setTitle(val);
    if (!slugManual) setSlug(generateSlug(val));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!title.trim() || !slug.trim() || !excerpt.trim() || !content.trim()) {
      setError("Başlık, slug, özet ve içerik zorunludur.");
      return;
    }
    setSaving(true);
    try {
      const res = await csrfFetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title.trim(),
          slug: slug.trim(),
          excerpt: excerpt.trim(),
          content: content.trim(),
          cover_image: coverImage.trim() || undefined,
          category_id: categoryId ? Number(categoryId) : undefined,
          tags: tags.trim() || undefined,
          reading_time: readingTime ? Number(readingTime) : undefined,
          is_published: isPublished ? 1 : 0,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Hata oluştu.");
      } else {
        router.push("/admin/posts");
      }
    } catch {
      setError("Bağlantı hatası.");
    } finally {
      setSaving(false);
    }
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
            <h1 className="text-xl font-bold text-amber-700">Yeni Yazı</h1>
          </div>
          <button
            form="post-form"
            type="submit"
            disabled={saving}
            className="bg-amber-700 hover:bg-amber-800 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors disabled:opacity-50"
          >
            {saving ? "Kaydediliyor..." : "Kaydet"}
          </button>
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
                  onChange={(e) => handleTitleChange(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-stone-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                  placeholder="Yazı başlığı"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Slug *</label>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => { setSlug(e.target.value); setSlugManual(true); }}
                  required
                  className="w-full px-3 py-2 border border-stone-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 outline-none font-mono"
                  placeholder="yazi-slug"
                />
                <p className="text-xs text-stone-400 mt-1">/blog/{slug || "yazi-slug"}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Özet *</label>
                <textarea
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  required
                  rows={3}
                  className="w-full px-3 py-2 border border-stone-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 outline-none resize-none"
                  placeholder="Yazı özeti (SEO için önemli)"
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
                placeholder="<p>Yazı içeriği...</p>"
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
          </div>
        </form>
      </div>
    </div>
  );
}
