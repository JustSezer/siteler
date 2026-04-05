import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  const { pathname } = request.nextUrl;

  // ===== GÜVENLİK HEADER'LARI =====
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=()"
  );

  if (process.env.NODE_ENV === "production") {
    response.headers.set(
      "Strict-Transport-Security",
      "max-age=63072000; includeSubDomains; preload"
    );
  }

  // CSP: script-src 'unsafe-inline' Next.js inline script'leri için gerekli
  // (nonce tabanlı CSP Next.js App Router'da experimental; mevcut yapıyla uyumlu en güvenli hali)
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https:",
    "font-src 'self' https://fonts.gstatic.com",
    "connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "object-src 'none'",
  ].join("; ");
  response.headers.set("Content-Security-Policy", csp);

  // API route'ları için önbelleklemeyi devre dışı bırak
  if (pathname.startsWith("/api/")) {
    response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate");
  }

  // ===== ADMİN ROTA KORUMASI =====
  // /admin/login ve /admin/setup herkese açık; diğer /admin/* korumalı
  const isAdminRoute =
    pathname.startsWith("/admin") &&
    pathname !== "/admin/login" &&
    pathname !== "/admin/setup" &&
    !pathname.startsWith("/api/admin/setup") &&
    !pathname.startsWith("/api/admin/auth");

  const isAdminApiRoute =
    pathname.startsWith("/api/admin/") &&
    !pathname.startsWith("/api/admin/setup") &&
    !pathname.startsWith("/api/admin/auth");

  if (isAdminRoute || isAdminApiRoute) {
    const token = request.cookies.get("admin_session")?.value;
    if (!token) {
      if (isAdminApiRoute) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|favicon.svg).*)"],
};
