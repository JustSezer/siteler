import { NextRequest, NextResponse } from "next/server";
import { getAllCategories, createCategory } from "@/lib/db";
import { verifyToken } from "@/lib/auth";
import { verifyCsrfFromRequest } from "@/lib/csrf";

export async function GET() {
  try {
    const categories = getAllCategories();
    return NextResponse.json(categories);
  } catch {
    return NextResponse.json({ error: "Sunucu hatası." }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const auth = await verifyToken();
  if (!auth) {
    return NextResponse.json({ error: "Yetkisiz erişim." }, { status: 401 });
  }
  if (!verifyCsrfFromRequest(req)) {
    return NextResponse.json({ error: "Geçersiz CSRF token." }, { status: 403 });
  }

  try {
    // Validate Content-Type
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

    // Validate slug format
    if (!/^[a-z0-9-]+$/.test(slug)) {
      return NextResponse.json({ error: "Slug sadece küçük harf, rakam ve tire içerebilir." }, { status: 400 });
    }

    const result = createCategory(name.trim(), slug.trim());
    return NextResponse.json({ success: true, id: result.lastInsertRowid }, { status: 201 });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Sunucu hatası.";
    if (message.includes("UNIQUE")) {
      return NextResponse.json({ error: "Bu kategori zaten mevcut." }, { status: 409 });
    }
    return NextResponse.json({ error: "Sunucu hatası." }, { status: 500 });
  }
}
