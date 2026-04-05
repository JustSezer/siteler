import { NextRequest, NextResponse } from "next/server";
import { getPostById, updatePost, deletePost } from "@/lib/db";
import { verifyToken } from "@/lib/auth";
import { sanitizeHtml } from "@/lib/sanitize";
import { verifyCsrfFromRequest } from "@/lib/csrf";

interface Params {
  params: Promise<{ id: string }>;
}

export async function GET(_req: NextRequest, { params }: Params) {
  try {
    const { id } = await params;
    const safeId = parseInt(id, 10);
    if (isNaN(safeId) || safeId <= 0) {
      return NextResponse.json({ error: "Geçersiz ID." }, { status: 400 });
    }
    const post = getPostById(safeId);
    if (!post) return NextResponse.json({ error: "Bulunamadı." }, { status: 404 });
    return NextResponse.json(post);
  } catch {
    return NextResponse.json({ error: "Sunucu hatası." }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: Params) {
  try {
    const auth = await verifyToken();
    if (!auth) return NextResponse.json({ error: "Yetkisiz erişim." }, { status: 401 });
    if (!verifyCsrfFromRequest(req)) return NextResponse.json({ error: "Geçersiz CSRF token." }, { status: 403 });

    const { id } = await params;
    const safeId = parseInt(id, 10);
    if (isNaN(safeId) || safeId <= 0) {
      return NextResponse.json({ error: "Geçersiz ID." }, { status: 400 });
    }

    const contentType = req.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
      return NextResponse.json({ error: "Geçersiz istek formatı." }, { status: 415 });
    }

    const body = await req.json();
    if (body.content) body.content = sanitizeHtml(body.content);

    updatePost(safeId, body);
    return NextResponse.json({ success: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Sunucu hatası.";
    if (message.includes("UNIQUE")) return NextResponse.json({ error: "Bu slug zaten kullanılıyor." }, { status: 409 });
    return NextResponse.json({ error: "Sunucu hatası." }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: Params) {
  try {
    const auth = await verifyToken();
    if (!auth) return NextResponse.json({ error: "Yetkisiz erişim." }, { status: 401 });
    if (!verifyCsrfFromRequest(req)) return NextResponse.json({ error: "Geçersiz CSRF token." }, { status: 403 });

    const { id } = await params;
    const safeId = parseInt(id, 10);
    if (isNaN(safeId) || safeId <= 0) return NextResponse.json({ error: "Geçersiz ID." }, { status: 400 });

    deletePost(safeId);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Sunucu hatası." }, { status: 500 });
  }
}
