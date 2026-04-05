"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Category {
  id: number;
  name: string;
}

interface Tag {
  id: number;
  name: string;
}

export default function NewPostPage() {
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    coverImage: "",
    categoryId: 0,
    tagIds: [] as number[],
  });

  useEffect(() => {
    Promise.all([
      fetch("/api/categories").then((r) => r.json()),
      fetch("/api/tags").then((r) => r.json()),
    ]).then(([cats, tgs]) => {
      setCategories(cats);
      setTags(tgs);
      if (cats.length > 0) setForm((f) => ({ ...f, categoryId: cats[0].id }));
    });
  }, []);

  function generateSlug(title: string) {
    return title
      .toLowerCase()
      .replace(/ğ/g, "g")
      .replace(/ü/g, "u")
      .replace(/ş/g, "s")
      .replace(/ı/g, "i")
      .replace(/ö/g, "o")
      .replace(/ç/g, "c")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  }

  function handleTitleChange(title: string) {
    setForm({ ...form, title, slug: generateSlug(title) });
  }

  function toggleTag(id: number) {
    setForm((f) => ({
      ...f,
      tagIds: f.tagIds.includes(id)
        ? f.tagIds.filter((t) => t !== id)
        : [...f.tagIds, id],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok) {
        router.push("/admin");
      } else {
        setMessage(data.error || "Kaydetme hatası");
      }
    } catch {
      setMessage("Bağlantı hatası");
    }
    setLoading(false);
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
      <h1 className="text-3xl font-bold mb-8">Yeni Yazı</h1>

      {message && (
        <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-1">Başlık</label>
          <input
            type="text"
            value={form.title}
            onChange={(e) => handleTitleChange(e.target.value)}
            required
            className="w-full border border-stone-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Slug</label>
          <input
            type="text"
            value={form.slug}
            onChange={(e) => setForm({ ...form, slug: e.target.value })}
            required
            className="w-full border border-stone-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary font-mono"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Özet</label>
          <textarea
            value={form.excerpt}
            onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
            required
            rows={2}
            className="w-full border border-stone-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            İçerik (HTML)
          </label>
          <textarea
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            required
            rows={12}
            className="w-full border border-stone-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary font-mono"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Kapak Görseli URL (opsiyonel)
          </label>
          <input
            type="url"
            value={form.coverImage}
            onChange={(e) => setForm({ ...form, coverImage: e.target.value })}
            className="w-full border border-stone-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Kategori</label>
          <select
            value={form.categoryId}
            onChange={(e) =>
              setForm({ ...form, categoryId: parseInt(e.target.value) })
            }
            className="w-full border border-stone-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Etiketler</label>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag.id}
                type="button"
                onClick={() => toggleTag(tag.id)}
                className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                  form.tagIds.includes(tag.id)
                    ? "bg-primary text-white"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                #{tag.name}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={loading}
            className="btn-primary disabled:opacity-50"
          >
            {loading ? "Kaydediliyor..." : "Yayınla"}
          </button>
          <button
            type="button"
            onClick={() => router.push("/admin")}
            className="px-6 py-3 border border-stone-300 rounded-lg hover:bg-stone-100 transition-colors text-sm"
          >
            İptal
          </button>
        </div>
      </form>
    </div>
  );
}
