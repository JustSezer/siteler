import { NextRequest, NextResponse } from "next/server";
import { getAllPosts, createPost } from "@/lib/db";
import { verifyToken } from "@/lib/auth";
import { sanitizeHtml } from "@/lib/sanitize";
import { verifyCsrfFromRequest } from "@/lib/csrf";

export async function GET() {
  try {
    const posts = getAllPosts();
    return NextResponse.json(posts);
  } catch {
    return NextResponse.json({ error: "Sunucu hatası." }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const auth = await verifyToken();
    if (!auth) {
      return NextResponse.json({ error: "Yetkisiz erişim." }, { status: 401 });
    }

    if (!verifyCsrfFromRequest(req)) {
      return NextResponse.json({ error: "Geçersiz CSRF token." }, { status: 403 });
    }

    // Validate Content-Type
    const contentType = req.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
      return NextResponse.json({ error: "Geçersiz istek formatı." }, { status: 415 });
    }

    let body: Record<string, unknown>;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Geçersiz JSON." }, { status: 400 });
    }

    const { title, slug, excerpt, content, cover_image, category_id, tags, reading_time, is_published } = body;

    // Type validation
    if (
      typeof title !== "string" || !title.trim() ||
      typeof slug !== "string" || !slug.trim() ||
      typeof excerpt !== "string" || !excerpt.trim() ||
      typeof content !== "string" || !content.trim()
    ) {
      return NextResponse.json(
        { error: "Başlık, slug, özet ve içerik zorunludur." },
        { status: 400 }
      );
    }

    // Validate cover_image URL if provided
    if (cover_image !== undefined && cover_image !== null && cover_image !== "") {
      if (typeof cover_image !== "string") {
        return NextResponse.json({ error: "Geçersiz görsel URL'si." }, { status: 400 });
      }
      try {
        const url = new URL(cover_image as string);
        if (!["http:", "https:"].includes(url.protocol)) {
          return NextResponse.json({ error: "Görsel URL'si http/https olmalıdır." }, { status: 400 });
        }
      } catch {
        return NextResponse.json({ error: "Geçersiz görsel URL'si." }, { status: 400 });
      }
    }

    const result = createPost({
      title: title as string,
      slug: slug as string,
      excerpt: excerpt as string,
      content: sanitizeHtml(content as string),
      cover_image: cover_image as string | undefined,
      category_id: category_id ? Number(category_id) : undefined,
      tags: typeof tags === "string" ? tags : undefined,
      reading_time: reading_time ? Number(reading_time) : undefined,
      is_published: is_published === 0 || is_published === false ? 0 : 1,
    });

    return NextResponse.json({ success: true, id: result.lastInsertRowid }, { status: 201 });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Sunucu hatası.";
    // Check for UNIQUE constraint violation
    if (message.includes("UNIQUE")) {
      return NextResponse.json({ error: "Bu slug zaten kullanılıyor." }, { status: 409 });
    }
    return NextResponse.json({ error: "Sunucu hatası." }, { status: 500 });
  }
}
