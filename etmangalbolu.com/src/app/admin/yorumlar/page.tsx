"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Comment {
  id: number;
  name: string;
  email: string;
  content: string;
  approved: boolean;
  createdAt: string;
  postId: number;
}

export default function CommentsAdminPage() {
  const router = useRouter();
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchComments();
  }, []);

  async function fetchComments() {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/comments");
      if (res.status === 401 || res.status === 403) {
        router.push("/admin");
        return;
      }
      const data = await res.json();
      if (Array.isArray(data)) setComments(data);
    } catch {
      setMessage("Yorumlar yüklenemedi");
    }
    setLoading(false);
  }

  async function approveComment(id: number) {
    try {
      const res = await fetch(`/api/comments/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ approved: true }),
      });
      if (res.ok) {
        setComments(comments.map((c) => (c.id === id ? { ...c, approved: true } : c)));
        setMessage("Yorum onaylandı");
      } else if (res.status === 401 || res.status === 403) {
        router.push("/admin");
      }
    } catch {
      setMessage("Hata oluştu");
    }
  }

  async function deleteComment(id: number) {
    if (!confirm("Yorumu silmek istediğinize emin misiniz?")) return;
    try {
      const res = await fetch(`/api/comments/${id}`, { method: "DELETE" });
      if (res.ok) {
        setComments(comments.filter((c) => c.id !== id));
        setMessage("Yorum silindi");
      } else if (res.status === 401 || res.status === 403) {
        router.push("/admin");
      }
    } catch {
      setMessage("Hata oluştu");
    }
  }

  const pending = comments.filter((c) => !c.approved);
  const approved = comments.filter((c) => c.approved);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
      <h1 className="text-3xl font-bold mb-2">Yorum Yönetimi</h1>
      <p className="text-stone-500 text-sm mb-8">
        {pending.length} onay bekleyen, {approved.length} onaylı yorum
      </p>

      {message && (
        <div className="mb-4 p-3 bg-accent/10 text-accent rounded-lg text-sm">{message}</div>
      )}

      {loading ? (
        <p className="text-stone-500">Yükleniyor...</p>
      ) : (
        <>
          {pending.length > 0 && (
            <div className="mb-10">
              <h2 className="text-xl font-bold mb-4 text-primary">Onay Bekleyen</h2>
              <div className="space-y-3">
                {pending.map((c) => (
                  <div key={c.id} className="card p-4 border-l-4 border-accent">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <div>
                        <span className="font-semibold text-sm">{c.name}</span>
                        <span className="text-xs text-stone-400 ml-2">{c.email}</span>
                      </div>
                      <time className="text-xs text-stone-400">
                        {new Date(c.createdAt).toLocaleDateString("tr-TR")}
                      </time>
                    </div>
                    <p className="text-sm text-stone-600 mb-3">{c.content}</p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => approveComment(c.id)}
                        className="text-xs px-3 py-1.5 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
                      >
                        Onayla
                      </button>
                      <button
                        onClick={() => deleteComment(c.id)}
                        className="text-xs px-3 py-1.5 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                      >
                        Sil
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {approved.length > 0 && (
            <div>
              <h2 className="text-xl font-bold mb-4">Onaylı Yorumlar</h2>
              <div className="space-y-3">
                {approved.map((c) => (
                  <div key={c.id} className="card p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <span className="font-semibold text-sm">{c.name}</span>
                      <time className="text-xs text-stone-400">
                        {new Date(c.createdAt).toLocaleDateString("tr-TR")}
                      </time>
                    </div>
                    <p className="text-sm text-stone-600 mb-3">{c.content}</p>
                    <button
                      onClick={() => deleteComment(c.id)}
                      className="text-xs px-3 py-1.5 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                    >
                      Sil
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
