import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/rate-limit";
import { validateString } from "@/lib/validate";
import { sanitizeHtml } from "@/lib/sanitize";

export async function GET(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  const { allowed } = checkRateLimit(ip, "read");
  if (!allowed) {
    return NextResponse.json({ error: "Çok fazla istek" }, { status: 429 });
  }

  const postId = req.nextUrl.searchParams.get("postId");
  if (!postId || isNaN(parseInt(postId))) {
    return NextResponse.json({ error: "postId gerekli" }, { status: 400 });
  }

  const comments = await prisma.comment.findMany({
    where: { postId: parseInt(postId), approved: true },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(comments);
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  const { allowed } = checkRateLimit(ip, "write");
  if (!allowed) {
    return NextResponse.json({ error: "Çok fazla istek. Lütfen bekleyin." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Geçersiz JSON" }, { status: 400 });
  }

  const b = body as Record<string, unknown>;

  let err = validateString(b.name, "İsim", 100);
  if (err) return NextResponse.json({ error: err }, { status: 400 });

  err = validateString(b.content, "Yorum", 2000);
  if (err) return NextResponse.json({ error: err }, { status: 400 });

  if (typeof b.email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email)) {
    return NextResponse.json({ error: "Geçerli bir e-posta adresi girin" }, { status: 400 });
  }

  if (typeof b.postId !== "number" || b.postId < 1) {
    return NextResponse.json({ error: "Geçersiz postId" }, { status: 400 });
  }

  try {
    const comment = await prisma.comment.create({
      data: {
        name: (b.name as string).trim().replace(/</g, "&lt;").replace(/>/g, "&gt;"),
        email: (b.email as string).trim().toLowerCase(),
        content: sanitizeHtml((b.content as string).trim()),
        postId: b.postId as number,
      },
    });

    return NextResponse.json(
      { message: "Yorumunuz onay bekliyor.", id: comment.id },
      { status: 201 }
    );
  } catch {
    return NextResponse.json({ error: "Sunucu hatası" }, { status: 500 });
  }
}
