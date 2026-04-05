"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCsrf } from "@/lib/useCsrf";

interface Category { id: number; name: string; }

export default function NewPostPage() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [tags, setTags] = useState("");
  const [readingTime, setReadingTime] = useState("5");
  const [publishDate, setPublishDate] = useState("");
  const [isPublished, setIsPublished] = useState(true);
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const { csrfFetch } = useCsrf();
  const router = useRouter();

  useEffect(() => {
    fetch("/api/categories").then((r) => r.json()).then(setCategories).catch(() => {});
  }, []);

  function generateSlug(text: string) {
    return text.toLowerCase()
      .replace(/ğ/g, "g").replace(/ü/g, "u").replace(/ş/g, "s")
      .replace(/ı/g, "i").replace(/ö/g, "o").replace(/ç/g, "c")
      .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  function handleTitleChange(value: string) {
    setTitle(value);
    setSlug(generateSlug(value));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await csrfFetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title, slug, excerpt, content,
          cover_image: coverImage || undefined,
          category_id: categoryId ? Number(categoryId) : undefined,
          tags: tags || undefined,
          reading_time: Number(readingTime),
          published_at: publishDate || undefined,
          is_published: isPublished ? 1 : 0,
        }),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Kayıt başarısız.");
        return;
      }
      router.push("/admin/posts");
    } catch {
      setError("Bağlantı hatası.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass = "w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none text-sm";

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-green-950 text-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/admin/posts" className="text-green-400 hover:text-green-300 text-sm">← Yazılar</Link>
          <h1 className="text-lg font-bold">Yeni Yazı</h1>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-6 space-y-6 border border-gray-100">
          {error && <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg border border-red-100">{error}</div>}

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Başlık *</label>
              <input type="text" value={title} onChange={(e) => handleTitleChange(e.target.value)} required className={inputClass} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Slug *</label>
              <input type="text" value={slug} onChange={(e) => setSlug(e.target.value)} required className={inputClass} />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Özet *</label>
            <textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} required rows={2} className={inputClass} />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-sm font-medium text-gray-700">İçerik (HTML) *</label>
              <button type="button" onClick={() => setShowPreview(!showPreview)} className="text-xs text-green-700 hover:text-green-600 font-medium">
                {showPreview ? "Editör" : "Önizleme"}
              </button>
            </div>
            {showPreview ? (
              <div className="w-full min-h-[300px] px-4 py-3 border border-gray-200 rounded-xl bg-white overflow-auto">
                <div className="blog-content" dangerouslySetInnerHTML={{ __html: content }} />
              </div>
            ) : (
              <textarea value={content} onChange={(e) => setContent(e.target.value)} required rows={15} className={`${inputClass} font-mono`} />
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Kapak Görseli URL</label>
              <input type="url" value={coverImage} onChange={(e) => setCoverImage(e.target.value)} className={inputClass} placeholder="https://images.pexels.com/..." />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Kategori</label>
              <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)} className={inputClass}>
                <option value="">Kategori Seçin</option>
                {categories.map((cat) => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Etiketler</label>
              <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} className={inputClass} placeholder="bolu, doğa, yürüyüş" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Okuma Süresi (dk)</label>
              <input type="number" value={readingTime} onChange={(e) => setReadingTime(e.target.value)} min="1" className={inputClass} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Yayın Tarihi</label>
              <input type="datetime-local" value={publishDate} onChange={(e) => setPublishDate(e.target.value)} className={inputClass} />
              <p className="text-xs text-gray-400 mt-1">Boş bırakılırsa hemen yayınlanır.</p>
            </div>
            <div className="flex items-center pt-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={isPublished} onChange={(e) => setIsPublished(e.target.checked)} className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500" />
                <span className="text-sm font-medium text-gray-700">Yayınla</span>
              </label>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button type="submit" disabled={loading} className="bg-green-900 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors disabled:opacity-50 text-sm">
              {loading ? "Kaydediliyor..." : "Kaydet"}
            </button>
            <Link href="/admin/posts" className="border border-gray-200 text-gray-600 hover:bg-gray-50 px-6 py-3 rounded-xl transition-colors text-sm">
              İptal
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
