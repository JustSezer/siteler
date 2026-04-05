import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { authenticateRequest } from "@/lib/auth";
import { checkRateLimit } from "@/lib/rate-limit";
import { validateCategoryInput } from "@/lib/validate";

export async function GET(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  const { allowed } = checkRateLimit(ip, "read");
  if (!allowed) {
    return NextResponse.json({ error: "Çok fazla istek" }, { status: 429 });
  }

  const categories = await prisma.category.findMany({
    include: { _count: { select: { posts: true } } },
  });
  return NextResponse.json(categories);
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

  const { data, error } = validateCategoryInput(body);
  if (error || !data) {
    return NextResponse.json({ error }, { status: 400 });
  }

  try {
    const category = await prisma.category.create({ data });
    return NextResponse.json(category, { status: 201 });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "";
    if (message.includes("Unique constraint")) {
      return NextResponse.json({ error: "Bu kategori zaten mevcut" }, { status: 409 });
    }
    return NextResponse.json({ error: "Sunucu hatası" }, { status: 500 });
  }
}
