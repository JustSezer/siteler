import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SESSION_NAME = "admin_session";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect admin routes at middleware level
  const isAdminRoute = pathname.startsWith("/admin") || pathname.startsWith("/api/admin");
  const isLoginPage = pathname === "/admin/login";
  const isCsrfEndpoint = pathname === "/api/csrf";

  if (isAdminRoute && !isLoginPage && !isCsrfEndpoint) {
    const token = request.cookies.get(SESSION_NAME)?.value;
    if (!token) {
      if (pathname.startsWith("/api/")) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  const response = NextResponse.next();
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

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
    "max-age=31536000; includeSubDomains; preload"
  );
  response.headers.set(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      `script-src 'self' 'nonce-${nonce}' https://va.vercel-scripts.com`,
      "style-src 'self' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https://images.unsplash.com",
      "connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self' https://formsubmit.co",
      "upgrade-insecure-requests",
    ].join("; ")
  );

  // Pass nonce to layout via header (for inline scripts if needed)
  response.headers.set("X-Nonce", nonce);

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|favicon.svg|manifest.json|og-image.svg).*)",
  ],
};
