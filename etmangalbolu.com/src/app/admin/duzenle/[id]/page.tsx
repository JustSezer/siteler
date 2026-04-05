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

export default function EditPostPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    coverImage: "",
    categoryId: 0,
    tagIds: [] as number[],
    published: true,
  });

  useEffect(() => {
    Promise.all([
      fetch(`/api/posts/${params.id}`).then((r) => r.json()),
      fetch("/api/categories").then((r) => r.json()),
      fetch("/api/tags").then((r) => r.json()),
    ]).then(([post, cats, tgs]) => {
      setCategories(cats);
      setTags(tgs);
      if (post && !post.error) {
        setForm({
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt,
          content: post.content,
          coverImage: post.coverImage || "",
          categoryId: post.categoryId,
          tagIds: post.tags?.map((t: Tag) => t.id) || [],
          published: post.published,
        });
      }
      setFetching(false);
    });
  }, [params.id]);

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
      const res = await fetch(`/api/posts/${params.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok) {
        setMessage("Yazı güncellendi!");
        setTimeout(() => router.push("/admin"), 1000);
      } else {
        setMessage(data.error || "Güncelleme hatası");
      }
    } catch {
      setMessage("Bağlantı hatası");
    }
    setLoading(false);
  }

  if (fetching) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center text-stone-500">
        Yükleniyor...
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
      <h1 className="text-3xl font-bold mb-8">Yazı Düzenle</h1>

      {message && (
        <div
          className={`mb-4 p-3 rounded-lg text-sm ${
            message.includes("güncellendi")
              ? "bg-green-50 text-green-600"
              : "bg-red-50 text-red-600"
          }`}
        >
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-1">Başlık</label>
          <input
            type="text"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
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
            Kapak Görseli URL
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

        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={form.published}
              onChange={(e) =>
                setForm({ ...form, published: e.target.checked })
              }
              className="w-4 h-4 accent-primary"
            />
            <span className="text-sm">Yayında</span>
          </label>
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={loading}
            className="btn-primary disabled:opacity-50"
          >
            {loading ? "Kaydediliyor..." : "Güncelle"}
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
