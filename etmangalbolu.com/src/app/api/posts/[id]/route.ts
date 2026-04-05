import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { authenticateRequest } from "@/lib/auth";
import { checkRateLimit } from "@/lib/rate-limit";
import { validatePostInput, validateId } from "@/lib/validate";
import { sanitizeHtml } from "@/lib/sanitize";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  const { allowed } = checkRateLimit(ip, "read");
  if (!allowed) {
    return NextResponse.json({ error: "Çok fazla istek" }, { status: 429 });
  }

  const id = validateId(params.id);
  if (!id) {
    return NextResponse.json({ error: "Geçersiz ID" }, { status: 400 });
  }

  const post = await prisma.post.findUnique({
    where: { id },
    include: { category: true, tags: true },
  });

  if (!post) {
    return NextResponse.json({ error: "Yazı bulunamadı" }, { status: 404 });
  }

  return NextResponse.json(post);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  const { allowed } = checkRateLimit(ip, "write");
  if (!allowed) {
    return NextResponse.json({ error: "Çok fazla istek" }, { status: 429 });
  }

  const authError = authenticateRequest(req);
  if (authError) return authError;

  const id = validateId(params.id);
  if (!id) {
    return NextResponse.json({ error: "Geçersiz ID" }, { status: 400 });
  }

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
    const post = await prisma.post.update({
      where: { id },
      data: {
        title: data.title,
        slug: data.slug,
        excerpt: data.excerpt,
        content: data.content,
        coverImage: data.coverImage,
        categoryId: data.categoryId,
        published: data.published,
        tags: data.tagIds
          ? { set: data.tagIds.map((tagId) => ({ id: tagId })) }
          : undefined,
      },
      include: { category: true, tags: true },
    });

    return NextResponse.json(post);
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "";
    if (message.includes("Record to update not found")) {
      return NextResponse.json({ error: "Yazı bulunamadı" }, { status: 404 });
    }
    if (message.includes("Unique constraint")) {
      return NextResponse.json({ error: "Bu slug zaten kullanılıyor" }, { status: 409 });
    }
    return NextResponse.json({ error: "Sunucu hatası" }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  const { allowed } = checkRateLimit(ip, "write");
  if (!allowed) {
    return NextResponse.json({ error: "Çok fazla istek" }, { status: 429 });
  }

  const authError = authenticateRequest(req);
  if (authError) return authError;

  const id = validateId(params.id);
  if (!id) {
    return NextResponse.json({ error: "Geçersiz ID" }, { status: 400 });
  }

  try {
    await prisma.post.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "";
    if (message.includes("Record to delete does not exist")) {
      return NextResponse.json({ error: "Yazı bulunamadı" }, { status: 404 });
    }
    return NextResponse.json({ error: "Sunucu hatası" }, { status: 500 });
  }
}
