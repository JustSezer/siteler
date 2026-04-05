import { NextRequest, NextResponse } from "next/server";
import { deleteCategory } from "@/lib/db";
import { verifyToken } from "@/lib/auth";
import { verifyCsrfFromRequest } from "@/lib/csrf";

interface Params {
  params: Promise<{ id: string }>;
}

export async function DELETE(req: NextRequest, { params }: Params) {
  try {
    const auth = await verifyToken();
    if (!auth) return NextResponse.json({ error: "Yetkisiz erişim." }, { status: 401 });
    if (!verifyCsrfFromRequest(req)) return NextResponse.json({ error: "Geçersiz CSRF token." }, { status: 403 });

    const { id } = await params;
    const safeId = parseInt(id, 10);
    if (isNaN(safeId) || safeId <= 0) return NextResponse.json({ error: "Geçersiz ID." }, { status: 400 });

    deleteCategory(safeId);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Sunucu hatası." }, { status: 500 });
  }
}
