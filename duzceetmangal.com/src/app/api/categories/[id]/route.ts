import { NextRequest, NextResponse } from "next/server";
import { deleteCategory } from "@/lib/db";
import { verifyToken } from "@/lib/auth";
import { verifyCsrfFromRequest } from "@/lib/csrf";

interface Props {
  params: Promise<{ id: string }>;
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
    const id = Math.floor(Number(rawId));
    if (!Number.isFinite(id) || id <= 0) {
      return NextResponse.json({ error: "Geçersiz ID." }, { status: 400 });
    }

    deleteCategory(id);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Sunucu hatası." }, { status: 500 });
  }
}
