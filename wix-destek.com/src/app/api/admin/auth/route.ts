import { NextRequest, NextResponse } from "next/server";
import { validateCredentials, createSession, destroySession } from "@/lib/auth";
import { rateLimit } from "@/lib/rate-limit";

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  const { allowed } = rateLimit(ip, 5, 300_000);

  if (!allowed) {
    return NextResponse.json(
      { error: "Çok fazla deneme. 5 dakika bekleyin." },
      { status: 429 }
    );
  }

  const contentType = request.headers.get("content-type");
  if (!contentType?.includes("application/json")) {
    return NextResponse.json({ error: "Invalid content type" }, { status: 415 });
  }

  let body: { username?: string; password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { username, password } = body;

  if (!username || !password || typeof username !== "string" || typeof password !== "string") {
    return NextResponse.json({ error: "Kullanıcı adı ve şifre gerekli" }, { status: 400 });
  }

  const { valid } = await validateCredentials(username, password);

  if (!valid) {
    return NextResponse.json({ error: "Geçersiz kullanıcı adı veya şifre" }, { status: 401 });
  }

  await createSession(username);
  return NextResponse.json({ success: true });
}

export async function DELETE() {
  await destroySession();
  return NextResponse.json({ success: true });
}
