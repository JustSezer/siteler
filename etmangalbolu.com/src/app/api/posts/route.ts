import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { authenticateRequest } from "@/lib/auth";
import { checkRateLimit } from "@/lib/rate-limit";
import { validatePostInput } from "@/lib/validate";
import { sanitizeHtml } from "@/lib/sanitize";

export async function GET(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  const { allowed } = checkRateLimit(ip, "read");
  if (!allowed) {
    return NextResponse.json({ error: "Çok fazla istek" }, { status: 429 });
  }

  const posts = await prisma.post.findMany({
    where: { published: true },
    include: { category: true, tags: true },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(posts);
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  const { allowed } = checkRateLimit(ip, "write");
  if (!allowed) {
    return NextResponse.json({ error: "Çok fazla istek" }, { status: 429 });
  }

  const authError = authenticateRequest(req);
  if (authError) return authError;

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Geçersiz JSON" }, { status: 400 });
  }

  const { data, error } = validatePostInput(body);
  if (error || !data) {
    return NextResponse.json({ error }, { status: 400 });
  }

  // Sanitize HTML content
  data.content = sanitizeHtml(data.content);

  try {
    const post = await prisma.post.create({
      data: {
        title: data.title,
        slug: data.slug,
        excerpt: data.excerpt,
        content: data.content,
        coverImage: data.coverImage,
        categoryId: data.categoryId,
        tags: data.tagIds
          ? { connect: data.tagIds.map((id) => ({ id })) }
          : undefined,
      },
      include: { category: true, tags: true },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "";
    if (message.includes("Unique constraint")) {
      return NextResponse.json({ error: "Bu slug zaten kullanılıyor" }, { status: 409 });
    }
    return NextResponse.json({ error: "Sunucu hatası" }, { status: 500 });
  }
}
