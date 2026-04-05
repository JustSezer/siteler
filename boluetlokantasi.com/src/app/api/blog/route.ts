import { NextRequest, NextResponse } from "next/server";
import { getAllPosts, createPost, getPostBySlug } from "@/lib/db";
import { sanitizeHtml, sanitizeSlug, sanitizeText, isValidImageUrl } from "@/lib/sanitize";
import { rateLimit } from "@/lib/rate-limit";

const API_KEY = process.env.BLOG_API_KEY;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://boluetlokantasi.com";
const MIN_API_KEY_LENGTH = 32;

function isAuthorized(request: NextRequest): boolean {
  if (!API_KEY || API_KEY.length < MIN_API_KEY_LENGTH) return false;
  const authHeader = request.headers.get("authorization");
  if (!authHeader) return false;
  const expected = `Bearer ${API_KEY}`;
  if (authHeader.length !== expected.length) return false;
  let mismatch = 0;
  for (let i = 0; i < authHeader.length; i++) {
    mismatch |= authHeader.charCodeAt(i) ^ expected.charCodeAt(i);
  }
  return mismatch === 0;
}

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": SITE_URL,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Authorization, Content-Type",
  };
}

// CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      ...corsHeaders(),
      "Access-Control-Max-Age": "86400",
    },
  });
}

export async function GET(request: NextRequest) {
  const ip = getClientIp(request);
  const { allowed, remaining } = rateLimit(ip, 60, 60_000);

  if (!allowed) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429, headers: { ...corsHeaders(), "Retry-After": "60" } }
    );
  }

  const posts = await getAllPosts();
  return NextResponse.json(posts, {
    headers: { ...corsHeaders(), "X-RateLimit-Remaining": String(remaining) },
  });
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  const { allowed } = rateLimit(ip, 5, 60_000);

  if (!allowed) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429, headers: { ...corsHeaders(), "Retry-After": "60" } }
    );
  }

  // Content-Type validation
  const contentType = request.headers.get("content-type");
  if (!contentType?.includes("application/json")) {
    return NextResponse.json(
      { error: "Content-Type must be application/json" },
      { status: 415, headers: corsHeaders() }
    );
  }

  if (!isAuthorized(request)) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401, headers: corsHeaders() }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400, headers: corsHeaders() }
    );
  }

  const { title, slug, excerpt, content, cover_image, category, tags, reading_time } = body as {
    title?: string; slug?: string; excerpt?: string; content?: string;
    cover_image?: string; category?: string; tags?: string; reading_time?: number;
  };

  // Validation - generic messages in production
  if (!title || !slug || !excerpt || !content) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400, headers: corsHeaders() }
    );
  }

  if (typeof title !== "string" || typeof slug !== "string" || typeof excerpt !== "string" || typeof content !== "string") {
    return NextResponse.json(
      { error: "Invalid field types" },
      { status: 400, headers: corsHeaders() }
    );
  }

  if (title.length > 200 || excerpt.length > 1000 || content.length > 100_000) {
    return NextResponse.json(
      { error: "Field length exceeded" },
      { status: 400, headers: corsHeaders() }
    );
  }

  const safeSlug = sanitizeSlug(slug);
  if (!safeSlug) {
    return NextResponse.json(
      { error: "Invalid slug" },
      { status: 400, headers: corsHeaders() }
    );
  }

  // Image URL validation against trusted domains
  if (cover_image && typeof cover_image === "string") {
    if (!isValidImageUrl(cover_image)) {
      return NextResponse.json(
        { error: "Image URL not from trusted domain" },
        { status: 400, headers: corsHeaders() }
      );
    }
  }

  const existing = await getPostBySlug(safeSlug);
  if (existing) {
    return NextResponse.json(
      { error: "Slug already in use" },
      { status: 409, headers: corsHeaders() }
    );
  }

  const post = await createPost({
    title: sanitizeText(title, 200),
    slug: safeSlug,
    excerpt: sanitizeText(excerpt, 1000),
    content: sanitizeHtml(content),
    cover_image: cover_image && typeof cover_image === "string" ? cover_image : null,
    category: category && typeof category === "string" ? sanitizeText(category, 50) : "Genel",
    tags: tags && typeof tags === "string" ? sanitizeText(tags, 500) : null,
    reading_time: typeof reading_time === "number" && reading_time > 0 && reading_time < 120 ? reading_time : 5,
    published_at: new Date().toISOString(),
    is_published: 1,
  });

  return NextResponse.json(post, { status: 201, headers: corsHeaders() });
}
