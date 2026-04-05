import { NextRequest, NextResponse } from "next/server";
import { getAllCategories, createCategory } from "@/lib/db";
import { verifyToken } from "@/lib/auth";
import { verifyCsrfFromRequest } from "@/lib/csrf";

export async function GET() {
  try {
    return NextResponse.json(getAllCategories());
  } catch {
    return NextResponse.json({ error: "Sunucu hatası." }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const auth = await verifyToken();
    if (!auth) return NextResponse.json({ error: "Yetkisiz erişim." }, { status: 401 });
    if (!verifyCsrfFromRequest(req)) return NextResponse.json({ error: "Geçersiz CSRF token." }, { status: 403 });

    const { name, slug } = await req.json();
    if (!name || !slug) return NextResponse.json({ error: "Ad ve slug zorunludur." }, { status: 400 });

    createCategory(name, slug);
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Sunucu hatası.";
    if (message.includes("UNIQUE")) return NextResponse.json({ error: "Bu kategori zaten var." }, { status: 409 });
    return NextResponse.json({ error: "Sunucu hatası." }, { status: 500 });
  }
}
