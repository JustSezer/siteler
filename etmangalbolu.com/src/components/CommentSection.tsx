"use client";

import { useState, useEffect } from "react";

interface Comment {
  id: number;
  name: string;
  content: string;
  createdAt: string;
}

export default function CommentSection({ postId }: { postId: number }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`/api/comments?postId=${postId}`)
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setComments(data);
      })
      .catch(() => {});
  }, [postId]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, content, postId }),
      });
      const data = await res.json();

      if (res.ok) {
        setMessage("Yorumunuz gönderildi! Onaylandıktan sonra görünecektir.");
        setName("");
        setEmail("");
        setContent("");
      } else {
        setMessage(data.error || "Bir hata oluştu.");
      }
    } catch {
      setMessage("Bağlantı hatası");
    }
    setLoading(false);
  }

  return (
    <div className="mt-10 sm:mt-14">
      <h3 className="text-xl sm:text-2xl font-bold mb-6">
        Yorumlar {comments.length > 0 && `(${comments.length})`}
      </h3>

      {/* Existing comments */}
      {comments.length > 0 && (
        <div className="space-y-4 mb-8">
          {comments.map((c) => (
            <div key={c.id} className="bg-stone-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-sm">{c.name}</span>
                <time className="text-xs text-stone-400">
                  {new Date(c.createdAt).toLocaleDateString("tr-TR")}
                </time>
              </div>
              <p className="text-sm text-stone-600">{c.content}</p>
            </div>
          ))}
        </div>
      )}

      {/* Comment form */}
      <div className="bg-stone-50 rounded-xl p-4 sm:p-6">
        <h4 className="font-semibold mb-4">Yorum Yaz</h4>

        {message && (
          <div className={`p-3 rounded-lg text-sm mb-4 ${
            message.includes("gönderildi") ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
          }`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Adınız *"
              required
              maxLength={100}
              className="border border-stone-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-posta *"
              required
              className="border border-stone-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Yorumunuz *"
            required
            rows={4}
            maxLength={2000}
            className="w-full border border-stone-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            disabled={loading}
            className="btn-primary disabled:opacity-50"
          >
            {loading ? "Gönderiliyor..." : "Yorum Gönder"}
          </button>
          <p className="text-xs text-stone-400">
            Yorumunuz onaylandıktan sonra yayınlanacaktır.
          </p>
        </form>
      </div>
    </div>
  );
}
