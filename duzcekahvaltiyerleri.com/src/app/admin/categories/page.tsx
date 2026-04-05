"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCsrf } from "@/lib/useCsrf";

interface Category {
  id: number;
  name: string;
  slug: string;
}

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/ğ/g, "g").replace(/ü/g, "u").replace(/ş/g, "s")
    .replace(/ı/g, "i").replace(/ö/g, "o").replace(/ç/g, "c")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const router = useRouter();
  const { csrfFetch } = useCsrf();

  // Form state
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [slugManual, setSlugManual] = useState(false);
  const [formError, setFormError] = useState("");
  const [saving, setSaving] = useState(false);

  async function loadCategories() {
    try {
      const res = await fetch("/api/categories");
      if (!res.ok) {
        router.push("/admin/login");
        return;
      }
      const data = await res.json();
      setCategories(data);
    } catch {
      router.push("/admin/login");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadCategories();
  }, []);

  function handleNameChange(val: string) {
    setName(val);
    if (!slugManual) setSlug(generateSlug(val));
  }

  function openNew() {
    setEditingId(null);
    setName("");
    setSlug("");
    setSlugManual(false);
    setFormError("");
    setShowForm(true);
  }

  function openEdit(cat: Category) {
    setEditingId(cat.id);
    setName(cat.name);
    setSlug(cat.slug);
    setSlugManual(true);
    setFormError("");
    setShowForm(true);
  }

  function cancelForm() {
    setShowForm(false);
    setEditingId(null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormError("");
    if (!name.trim() || !slug.trim()) {
      setFormError("Ad ve slug zorunludur.");
      return;
    }
    setSaving(true);
    try {
      const url = editingId ? `/api/categories/${editingId}` : "/api/categories";
      const method = editingId ? "PUT" : "POST";
      const res = await csrfFetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          slug: slug.trim(),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setFormError(data.error || "Hata oluştu.");
      } else {
        setShowForm(false);
        setEditingId(null);
        loadCategories();
      }
    } catch {
      setFormError("Bağlantı hatası.");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: number, name: string) {
    if (!confirm(`"${name}" kategorisini silmek istediğinizden emin misiniz?\nBu kategorideki yazılar kategorisiz kalacak.`)) return;
    setDeletingId(id);
    try {
      const res = await csrfFetch(`/api/categories/${id}`, { method: "DELETE" });
      if (res.ok) {
        setCategories((prev) => prev.filter((c) => c.id !== id));
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
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/admin" className="text-stone-400 hover:text-amber-700 text-sm">
              ← Dashboard
            </Link>
            <span className="text-stone-300">|</span>
            <h1 className="text-xl font-bold text-amber-700">Kategoriler</h1>
          </div>
          <button
            onClick={openNew}
            className="bg-amber-700 hover:bg-amber-800 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors"
          >
            + Yeni Kategori
          </button>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
        {/* Form */}
        {showForm && (
          <div className="bg-white rounded-2xl shadow-sm border border-amber-100 p-6">
            <h2 className="text-base font-semibold text-stone-700 mb-4">
              {editingId ? "Kategoriyi Düzenle" : "Yeni Kategori"}
            </h2>
            {formError && (
              <div className="mb-4 bg-red-50 text-red-600 text-sm p-3 rounded-xl border border-red-100">
                {formError}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Ad *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => handleNameChange(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-stone-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                    placeholder="Kategori adı"
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
                    placeholder="kategori-slug"
                  />
                </div>
              </div>
              <div className="flex items-center gap-3 pt-1">
                <button
                  type="submit"
                  disabled={saving}
                  className="bg-amber-700 hover:bg-amber-800 text-white text-sm font-semibold px-5 py-2 rounded-xl transition-colors disabled:opacity-50"
                >
                  {saving ? "Kaydediliyor..." : editingId ? "Güncelle" : "Ekle"}
                </button>
                <button
                  type="button"
                  onClick={cancelForm}
                  className="text-sm text-stone-500 hover:text-stone-700 px-3 py-2 rounded-xl hover:bg-stone-100 transition-colors"
                >
                  İptal
                </button>
              </div>
            </form>
          </div>
        )}

        {/* List */}
        {loading ? (
          <div className="flex justify-center py-16">
            <div className="w-8 h-8 border-4 border-amber-200 border-t-amber-700 rounded-full animate-spin" />
          </div>
        ) : categories.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-amber-100">
            <div className="text-4xl mb-4">📂</div>
            <p className="text-stone-500 mb-4">Henüz kategori yok.</p>
            <button onClick={openNew} className="text-amber-700 font-semibold hover:underline">
              İlk kategoriyi ekle →
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm border border-amber-100 overflow-hidden">
            <ul className="divide-y divide-amber-50">
              {categories.map((cat) => (
                <li key={cat.id} className="flex items-center px-6 py-4 hover:bg-amber-50/50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-stone-800 text-sm">{cat.name}</div>
                    <div className="text-xs text-stone-400 font-mono mt-0.5">{cat.slug}</div>
                  </div>
                  <div className="flex items-center gap-2 ml-4 shrink-0">
                    <button
                      onClick={() => openEdit(cat)}
                      className="text-xs text-amber-700 hover:text-amber-900 px-2 py-1 rounded-lg hover:bg-amber-50 transition-colors font-medium"
                    >
                      Düzenle
                    </button>
                    <button
                      onClick={() => handleDelete(cat.id, cat.name)}
                      disabled={deletingId === cat.id}
                      className="text-xs text-red-500 hover:text-red-700 px-2 py-1 rounded-lg hover:bg-red-50 transition-colors disabled:opacity-40"
                    >
                      {deletingId === cat.id ? "..." : "Sil"}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="px-6 py-3 border-t border-amber-50 bg-amber-50/50">
              <span className="text-xs text-stone-400">{categories.length} kategori</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
