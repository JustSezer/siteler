import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { adminGetAllPosts, createPost, getPostBySlug, adminGetStats } from "@/lib/db";
import { sanitizeHtml, sanitizeSlug, sanitizeText, isValidImageUrl } from "@/lib/sanitize";
import { verifyCsrfFromRequest } from "@/lib/csrf";

async function requireAuth() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return null;
}

// Get all posts (including drafts) + stats
export async function GET(request: NextRequest) {
  const authError = await requireAuth();
  if (authError) return authError;

  const url = new URL(request.url);
  const statsOnly = url.searchParams.get("stats");

  if (statsOnly === "true") {
    const stats = await adminGetStats();
    return NextResponse.json(stats);
  }

  const posts = await adminGetAllPosts();
  return NextResponse.json(posts);
}

// Create new post
export async function POST(request: NextRequest) {
  const authError = await requireAuth();
  if (authError) return authError;

  if (!verifyCsrfFromRequest(request)) {
    return NextResponse.json({ error: "Geçersiz CSRF token" }, { status: 403 });
  }

  const contentType = request.headers.get("content-type");
  if (!contentType?.includes("application/json")) {
    return NextResponse.json({ error: "Invalid content type" }, { status: 415 });
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

  if (!title || !slug || !excerpt || !content) {
    return NextResponse.json({ error: "Başlık, slug, özet ve içerik zorunludur" }, { status: 400 });
  }

  if (typeof title !== "string" || typeof slug !== "string" || typeof excerpt !== "string" || typeof content !== "string") {
    return NextResponse.json({ error: "Invalid field types" }, { status: 400 });
  }

  if (title.length > 200 || excerpt.length > 1000 || content.length > 100_000) {
    return NextResponse.json({ error: "Field length exceeded" }, { status: 400 });
  }

  const safeSlug = sanitizeSlug(slug);
  if (!safeSlug) {
    return NextResponse.json({ error: "Geçersiz slug" }, { status: 400 });
  }

  if (cover_image && typeof cover_image === "string" && cover_image.length > 0) {
    if (!isValidImageUrl(cover_image)) {
      return NextResponse.json({ error: "Geçersiz görsel URL" }, { status: 400 });
    }
  }

  const existing = await getPostBySlug(safeSlug);
  if (existing) {
    return NextResponse.json({ error: "Bu slug zaten kullanılıyor" }, { status: 409 });
  }

  const post = await createPost({
    title: sanitizeText(title, 200),
    slug: safeSlug,
    excerpt: sanitizeText(excerpt, 1000),
    content: sanitizeHtml(content),
    cover_image: cover_image && typeof cover_image === "string" && cover_image.length > 0 ? cover_image : null,
    category: category && typeof category === "string" ? sanitizeText(category, 50) : "Genel",
    tags: tags && typeof tags === "string" ? sanitizeText(tags, 500) : null,
    reading_time: typeof reading_time === "number" && reading_time > 0 && reading_time < 120 ? reading_time : 5,
    published_at: new Date().toISOString(),
    is_published: is_published === 0 ? 0 : 1,
  });

  return NextResponse.json(post, { status: 201 });
}
