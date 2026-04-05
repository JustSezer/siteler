"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import type { Post } from "@/lib/db";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/ç/g, "c").replace(/ğ/g, "g").replace(/ı/g, "i")
    .replace(/ö/g, "o").replace(/ş/g, "s").replace(/ü/g, "u")
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function PostEditor({ post }: { post?: Post }) {
  const router = useRouter();
  const isEditing = !!post;

  const [title, setTitle] = useState(post?.title || "");
  const [slug, setSlug] = useState(post?.slug || "");
  const [excerpt, setExcerpt] = useState(post?.excerpt || "");
  const [content, setContent] = useState(post?.content || "");
  const [coverImage, setCoverImage] = useState(post?.cover_image || "");
  const [category, setCategory] = useState(post?.category || "Genel");
  const [tags, setTags] = useState(post?.tags || "");
  const [readingTime, setReadingTime] = useState(post?.reading_time || 5);
  const [isPublished, setIsPublished] = useState(post?.is_published ?? 1);
  const [autoSlug, setAutoSlug] = useState(!isEditing);

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleTitleChange(value: string) {
    setTitle(value);
    if (autoSlug) {
      setSlug(slugify(value));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");
    setSaving(true);

    const body = {
      title,
      slug,
      excerpt,
      content,
      cover_image: coverImage || null,
      category,
      tags: tags || null,
      reading_time: readingTime,
      is_published: isPublished,
    };

    try {
      const url = isEditing ? `/api/admin/posts/${post.id}` : "/api/admin/posts";
      const method = isEditing ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Kaydetme başarısız");
        setSaving(false);
        return;
      }

      if (isEditing) {
        setSuccess("Yazı güncellendi");
        router.refresh();
      } else {
        router.push("/admin");
        router.refresh();
      }
    } catch {
      setError("Bağlantı hatası");
    }
    setSaving(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl p-3">
          {error}
        </div>
      )}
      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 text-sm rounded-xl p-3">
          {success}
        </div>
      )}

      {/* Title & Slug */}
      <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 space-y-4 border border-stone-100">
        <div>
          <label htmlFor="title" className="block text-sm font-bold text-stone-700 mb-1">
            Başlık *
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
            required
            maxLength={200}
            className="w-full px-3 py-2.5 border border-stone-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm"
            placeholder="Yazı başlığı"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1">
            <label htmlFor="slug" className="block text-sm font-bold text-stone-700">
              Slug *
            </label>
            {!isEditing && (
              <label className="flex items-center gap-1.5 text-xs text-stone-500 cursor-pointer">
                <input
                  type="checkbox"
                  checked={autoSlug}
                  onChange={(e) => setAutoSlug(e.target.checked)}
                  className="rounded"
                />
                Otomatik
              </label>
            )}
          </div>
          <input
            type="text"
            id="slug"
            value={slug}
            onChange={(e) => { setSlug(e.target.value); setAutoSlug(false); }}
            required
            className="w-full px-3 py-2.5 border border-stone-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm font-mono"
            placeholder="yazi-slug-url"
          />
          <p className="text-xs text-stone-400 mt-1">URL: /blog/{slug || "..."}</p>
        </div>
      </div>

      {/* Excerpt */}
      <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 border border-stone-100">
        <label htmlFor="excerpt" className="block text-sm font-bold text-stone-700 mb-1">
          Özet *
        </label>
        <textarea
          id="excerpt"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          required
          maxLength={1000}
          rows={3}
          className="w-full px-3 py-2.5 border border-stone-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm resize-none"
          placeholder="Kısa açıklama (SEO description olarak da kullanılır)"
        />
        <p className="text-xs text-stone-400 mt-1">{excerpt.length}/1000</p>
      </div>

      {/* Content */}
      <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 border border-stone-100">
        <label htmlFor="content" className="block text-sm font-bold text-stone-700 mb-1">
          İçerik (HTML) *
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={16}
          className="w-full px-3 py-2.5 border border-stone-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm font-mono resize-y"
          placeholder="<h2>Başlık</h2><p>İçerik...</p>"
        />
        <p className="text-xs text-stone-400 mt-1">
          HTML etiketleri: h2, h3, p, ul, ol, li, strong, em, a, img, blockquote, code, table
        </p>
      </div>

      {/* Meta */}
      <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 space-y-4 border border-stone-100">
        <h3 className="font-bold text-stone-800">Yazı Detayları</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="category" className="block text-sm font-bold text-stone-700 mb-1">
              Kategori
            </label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              maxLength={50}
              className="w-full px-3 py-2.5 border border-stone-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm"
              placeholder="Düzce Lezzetleri"
            />
          </div>
          <div>
            <label htmlFor="readingTime" className="block text-sm font-bold text-stone-700 mb-1">
              Okuma Süresi (dk)
            </label>
            <input
              type="number"
              id="readingTime"
              value={readingTime}
              onChange={(e) => setReadingTime(parseInt(e.target.value) || 5)}
              min={1}
              max={120}
              className="w-full px-3 py-2.5 border border-stone-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm"
            />
          </div>
        </div>

        <div>
          <label htmlFor="tags" className="block text-sm font-bold text-stone-700 mb-1">
            Etiketler
          </label>
          <input
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            maxLength={500}
            className="w-full px-3 py-2.5 border border-stone-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm"
            placeholder="düzce, yemek, tarif (virgülle ayırın)"
          />
        </div>

        <div>
          <label htmlFor="coverImage" className="block text-sm font-bold text-stone-700 mb-1">
            Kapak Görseli URL
          </label>
          <input
            type="url"
            id="coverImage"
            value={coverImage}
            onChange={(e) => setCoverImage(e.target.value)}
            className="w-full px-3 py-2.5 border border-stone-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm"
            placeholder="https://images.unsplash.com/..."
          />
          {coverImage && (
            <img
              src={coverImage}
              alt="Preview"
              className="mt-2 h-32 w-full object-cover rounded-xl border"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 border border-stone-100">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="status"
                checked={isPublished === 1}
                onChange={() => setIsPublished(1)}
                className="text-orange-600"
              />
              <span className="text-sm font-bold text-stone-700">Yayınla</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="status"
                checked={isPublished === 0}
                onChange={() => setIsPublished(0)}
                className="text-amber-600"
              />
              <span className="text-sm font-bold text-stone-700">Taslak</span>
            </label>
          </div>

          <div className="flex gap-3 w-full sm:w-auto">
            <Link
              href="/admin"
              className="flex-1 sm:flex-initial text-center border border-stone-300 text-stone-700 hover:bg-stone-50 font-bold px-5 py-2.5 rounded-xl text-sm transition-colors"
            >
              İptal
            </Link>
            <button
              type="submit"
              disabled={saving}
              className="flex-1 sm:flex-initial bg-orange-600 hover:bg-orange-700 disabled:bg-orange-300 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors"
            >
              {saving ? "Kaydediliyor..." : isEditing ? "Güncelle" : "Kaydet"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
