import { NextRequest, NextResponse } from "next/server";
import { updateCategory, deleteCategory } from "@/lib/db";
import { verifyToken } from "@/lib/auth";
import { verifyCsrfFromRequest } from "@/lib/csrf";

interface Props {
  params: Promise<{ id: string }>;
}

function parseId(raw: string): number | null {
  const id = Math.floor(Number(raw));
  if (!Number.isFinite(id) || id <= 0) return null;
  return id;
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

    const contentType = req.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
      return NextResponse.json({ error: "Geçersiz istek formatı." }, { status: 415 });
    }

    let body: { name?: string; slug?: string };
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Geçersiz JSON." }, { status: 400 });
    }

    const { name, slug } = body;

    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json({ error: "Kategori adı gerekli." }, { status: 400 });
    }
    if (!slug || typeof slug !== "string" || !slug.trim()) {
      return NextResponse.json({ error: "Slug gerekli." }, { status: 400 });
    }
    if (!/^[a-z0-9-]+$/.test(slug)) {
      return NextResponse.json({ error: "Slug sadece küçük harf, rakam ve tire içerebilir." }, { status: 400 });
    }

    updateCategory(id, name.trim(), slug.trim());
    return NextResponse.json({ success: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Sunucu hatası.";
    if (message.includes("UNIQUE")) {
      return NextResponse.json({ error: "Bu kategori zaten mevcut." }, { status: 409 });
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

    deleteCategory(id);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Sunucu hatası." }, { status: 500 });
  }
}
