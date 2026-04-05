import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { adminGetPostById, updatePost, deletePost } from "@/lib/db";
import { sanitizeHtml, sanitizeSlug, sanitizeText, isValidImageUrl } from "@/lib/sanitize";

async function requireAuth() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return null;
}

type Params = { params: Promise<{ id: string }> };

export async function GET(request: NextRequest, { params }: Params) {
  const authError = await requireAuth();
  if (authError) return authError;

  const { id } = await params;
  const postId = parseInt(id, 10);
  if (isNaN(postId)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const post = await adminGetPostById(postId);
  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  return NextResponse.json(post);
}

export async function PUT(request: NextRequest, { params }: Params) {
  const authError = await requireAuth();
  if (authError) return authError;

  const { id } = await params;
  const postId = parseInt(id, 10);
  if (isNaN(postId)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const existing = await adminGetPostById(postId);
  if (!existing) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { title, slug, excerpt, content, cover_image, category, tags, reading_time, is_published } = body as {
    title?: string; slug?: string; excerpt?: string; content?: string;
    cover_image?: string; category?: string; tags?: string;
    reading_time?: number; is_published?: number;
  };

  const updates: Record<string, unknown> = {};

  if (title !== undefined) {
    if (typeof title !== "string" || title.length > 200) {
      return NextResponse.json({ error: "Geçersiz başlık" }, { status: 400 });
    }
    updates.title = sanitizeText(title, 200);
  }

  if (slug !== undefined) {
    const safeSlug = sanitizeSlug(slug);
    if (!safeSlug) return NextResponse.json({ error: "Geçersiz slug" }, { status: 400 });
    if (safeSlug !== existing.slug) {
      const { getPostBySlug } = await import("@/lib/db");
      const slugTaken = await getPostBySlug(safeSlug);
      if (slugTaken && slugTaken.id !== postId) {
        return NextResponse.json({ error: "Bu slug zaten kullanılıyor" }, { status: 409 });
      }
    }
    updates.slug = safeSlug;
  }

  if (excerpt !== undefined) {
    if (typeof excerpt !== "string" || excerpt.length > 1000) {
      return NextResponse.json({ error: "Geçersiz özet" }, { status: 400 });
    }
    updates.excerpt = sanitizeText(excerpt, 1000);
  }

  if (content !== undefined) {
    if (typeof content !== "string" || content.length > 100_000) {
      return NextResponse.json({ error: "Geçersiz içerik" }, { status: 400 });
    }
    updates.content = sanitizeHtml(content);
  }

  if (cover_image !== undefined) {
    if (cover_image === null || cover_image === "") {
      updates.cover_image = null;
    } else if (typeof cover_image === "string") {
      if (!isValidImageUrl(cover_image)) {
        return NextResponse.json({ error: "Geçersiz görsel URL" }, { status: 400 });
      }
      updates.cover_image = cover_image;
    }
  }

  if (category !== undefined && typeof category === "string") {
    updates.category = sanitizeText(category, 50);
  }

  if (tags !== undefined) {
    updates.tags = tags && typeof tags === "string" ? sanitizeText(tags, 500) : null;
  }

  if (reading_time !== undefined && typeof reading_time === "number" && reading_time > 0 && reading_time < 120) {
    updates.reading_time = reading_time;
  }

  if (is_published !== undefined && (is_published === 0 || is_published === 1)) {
    updates.is_published = is_published;
  }

  await updatePost(postId, updates);

  const updated = await adminGetPostById(postId);
  return NextResponse.json(updated);
}

export async function DELETE(request: NextRequest, { params }: Params) {
  const authError = await requireAuth();
  if (authError) return authError;

  const { id } = await params;
  const postId = parseInt(id, 10);
  if (isNaN(postId)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const existing = await adminGetPostById(postId);
  if (!existing) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  await deletePost(postId);
  return NextResponse.json({ success: true });
}
