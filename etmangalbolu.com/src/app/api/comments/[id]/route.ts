import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { authenticateRequest } from "@/lib/auth";
import { checkRateLimit } from "@/lib/rate-limit";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  const { allowed } = checkRateLimit(ip, "write");
  if (!allowed) return NextResponse.json({ error: "Çok fazla istek" }, { status: 429 });

  const authError = authenticateRequest(req);
  if (authError) return authError;

  const id = parseInt(params.id);
  if (isNaN(id)) return NextResponse.json({ error: "Geçersiz ID" }, { status: 400 });

  let body: { approved?: boolean };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Geçersiz JSON" }, { status: 400 });
  }

  try {
    const comment = await prisma.comment.update({
      where: { id },
      data: { approved: body.approved ?? true },
    });
    return NextResponse.json(comment);
  } catch {
    return NextResponse.json({ error: "Yorum bulunamadı" }, { status: 404 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  const { allowed } = checkRateLimit(ip, "write");
  if (!allowed) return NextResponse.json({ error: "Çok fazla istek" }, { status: 429 });

  const authError = authenticateRequest(req);
  if (authError) return authError;

  const id = parseInt(params.id);
  if (isNaN(id)) return NextResponse.json({ error: "Geçersiz ID" }, { status: 400 });

  try {
    await prisma.comment.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Yorum bulunamadı" }, { status: 404 });
  }
}
