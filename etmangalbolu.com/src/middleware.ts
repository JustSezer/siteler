import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { validateCsrfToken } from "@/lib/csrf";

const SESSION_NAME = "admin_session";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const method = req.method;

  // Protect admin routes at middleware level (quick cookie presence check)
  const isAdminPage = pathname.startsWith("/admin");
  const isAdminApi = pathname.startsWith("/api/admin") || pathname.startsWith("/api/auth/logout");
  const isLoginPage = pathname === "/admin";
  const isCsrfEndpoint = pathname === "/api/csrf";
  const isLoginEndpoint = pathname === "/api/auth/login";

  if ((isAdminPage && !isLoginPage) || isAdminApi) {
    const token = req.cookies.get(SESSION_NAME)?.value;
    if (!token) {
      if (pathname.startsWith("/api/")) {
        return NextResponse.json({ error: "Yetkilendirme gerekli" }, { status: 401 });
      }
      return NextResponse.redirect(new URL("/admin", req.url));
    }
  }

  // CSRF token validation for mutation API requests (skip login and csrf endpoints)
  if (
    pathname.startsWith("/api/") &&
    ["POST", "PUT", "DELETE", "PATCH"].includes(method) &&
    !isLoginEndpoint &&
    !isCsrfEndpoint
  ) {
    // First check origin header (defense in depth)
    const origin = req.headers.get("origin");
    const host = req.headers.get("host");

    if (origin) {
      try {
        const originHost = new URL(origin).host;
        if (originHost !== host) {
          return NextResponse.json({ error: "CSRF: Origin mismatch" }, { status: 403 });
        }
      } catch {
        return NextResponse.json({ error: "CSRF: Invalid origin" }, { status: 403 });
      }
    }

    // For authenticated (admin) API routes, also require CSRF token
    if (isAdminApi || pathname.startsWith("/api/posts") || pathname.startsWith("/api/comments")) {
      const csrfToken = req.headers.get("x-csrf-token");
      if (csrfToken && !validateCsrfToken(csrfToken)) {
        return NextResponse.json({ error: "Geçersiz CSRF token" }, { status: 403 });
      }
    }
  }

  const response = NextResponse.next();

  // Security Headers
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=()"
  );
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains; preload"
  );
  response.headers.set(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      // unsafe-inline kept only for GA inline script (Next.js Script component)
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' https: data:",
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
    ].join("; ")
  );

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
