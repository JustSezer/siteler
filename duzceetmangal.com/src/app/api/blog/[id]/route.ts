import { NextRequest, NextResponse } from "next/server";
import { getPostById, updatePost, deletePost } from "@/lib/db";
import { verifyToken } from "@/lib/auth";
import { sanitizeHtml } from "@/lib/sanitize";
import { verifyCsrfFromRequest } from "@/lib/csrf";

interface Props {
  params: Promise<{ id: string }>;
}

function parseId(raw: string): number | null {
  const id = Math.floor(Number(raw));
  if (!Number.isFinite(id) || id <= 0) return null;
  return id;
}

export async function GET(_req: NextRequest, { params }: Props) {
  const { id: rawId } = await params;
  const id = parseId(rawId);
  if (!id) {
    return NextResponse.json({ error: "Geçersiz ID." }, { status: 400 });
  }

  const post = getPostById(id);
  if (!post) {
    return NextResponse.json({ error: "Yazı bulunamadı." }, { status: 404 });
  }
  return NextResponse.json(post);
}

export async function PUT(req: NextRequest, { params }: Props) {
  const auth = await verifyToken();
  if (!auth) {
    return NextResponse.json({ error: "Yetkisiz erişim." }, { status: 401 });
  }
  if (!verifyCsrfFromRequest(req)) {
    return NextResponse.json({ error: "Geçersiz CSRF token." }, { status: 403 });
  }

  try {
    const { id: rawId } = await params;
    const id = parseId(rawId);
    if (!id) {
      return NextResponse.json({ error: "Geçersiz ID." }, { status: 400 });
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

    // Check post exists
    const existing = getPostById(id);
    if (!existing) {
      return NextResponse.json({ error: "Yazı bulunamadı." }, { status: 404 });
    }

    // Sanitize content if provided
    if (typeof body.content === "string") {
      body.content = sanitizeHtml(body.content);
    }

    // Validate cover_image URL if provided
    if (body.cover_image !== undefined && body.cover_image !== null && body.cover_image !== "") {
      if (typeof body.cover_image !== "string") {
        return NextResponse.json({ error: "Geçersiz görsel URL'si." }, { status: 400 });
      }
      try {
        const url = new URL(body.cover_image);
        if (!["http:", "https:"].includes(url.protocol)) {
          return NextResponse.json({ error: "Görsel URL'si http/https olmalıdır." }, { status: 400 });
        }
      } catch {
        return NextResponse.json({ error: "Geçersiz görsel URL'si." }, { status: 400 });
      }
    }

    updatePost(id, body);
    return NextResponse.json({ success: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Sunucu hatası.";
    if (message.includes("UNIQUE")) {
      return NextResponse.json({ error: "Bu slug zaten kullanılıyor." }, { status: 409 });
    }
    return NextResponse.json({ error: "Sunucu hatası." }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: Props) {
  const auth = await verifyToken();
  if (!auth) {
    return NextResponse.json({ error: "Yetkisiz erişim." }, { status: 401 });
  }
  if (!verifyCsrfFromRequest(req)) {
    return NextResponse.json({ error: "Geçersiz CSRF token." }, { status: 403 });
  }

  try {
    const { id: rawId } = await params;
    const id = parseId(rawId);
    if (!id) {
      return NextResponse.json({ error: "Geçersiz ID." }, { status: 400 });
    }

    const existing = getPostById(id);
    if (!existing) {
      return NextResponse.json({ error: "Yazı bulunamadı." }, { status: 404 });
    }

    deletePost(id);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Sunucu hatası." }, { status: 500 });
  }
}
