import { cookies } from "next/headers";
import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";

const SESSION_SECRET = process.env.SESSION_SECRET || process.env.API_SECRET_KEY;
if (!SESSION_SECRET || SESSION_SECRET.length < 16) {
  throw new Error("SESSION_SECRET or API_SECRET_KEY env variable must be set");
}

const SESSION_NAME = "admin_session";
const SESSION_MAX_AGE = 60 * 60 * 24; // 24 hours

function generateToken(username: string): string {
  const timestamp = Date.now().toString(36);
  const random = crypto.randomBytes(24).toString("hex");
  const data = `${timestamp}.${random}.${username}`;
  const signature = crypto
    .createHmac("sha256", SESSION_SECRET!)
    .update(data)
    .digest("hex");
  return `${data}.${signature}`;
}

function verifyToken(token: string): { valid: boolean; username: string | null } {
  try {
    const lastDot = token.lastIndexOf(".");
    if (lastDot === -1) return { valid: false, username: null };

    const data = token.substring(0, lastDot);
    const signature = token.substring(lastDot + 1);

    const expectedSig = crypto
      .createHmac("sha256", SESSION_SECRET!)
      .update(data)
      .digest("hex");

    if (signature.length !== expectedSig.length) return { valid: false, username: null };
    if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSig))) {
      return { valid: false, username: null };
    }

    const parts = data.split(".");
    if (parts.length < 3) return { valid: false, username: null };

    const timestamp = parseInt(parts[0], 36);
    const username = parts.slice(2).join(".");
    if (!username || isNaN(timestamp)) return { valid: false, username: null };

    const ageSeconds = (Date.now() - timestamp) / 1000;
    if (ageSeconds > SESSION_MAX_AGE || ageSeconds < 0) return { valid: false, username: null };

    return { valid: true, username };
  } catch {
    return { valid: false, username: null };
  }
}

export function createSession(username: string): void {
  const token = generateToken(username);
  cookies().set(SESSION_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: SESSION_MAX_AGE,
    path: "/",
  });
}

export function destroySession(): void {
  cookies().delete(SESSION_NAME);
}

export function isAuthenticated(): boolean {
  const token = cookies().get(SESSION_NAME)?.value;
  if (!token) return false;
  const { valid } = verifyToken(token);
  return valid;
}

// For API route handlers that receive the NextRequest object
export function authenticateRequest(req: NextRequest): NextResponse | null {
  const token = req.cookies.get(SESSION_NAME)?.value;
  if (!token) {
    return NextResponse.json({ error: "Yetkilendirme gerekli" }, { status: 401 });
  }
  const { valid } = verifyToken(token);
  if (!valid) {
    return NextResponse.json({ error: "Geçersiz oturum" }, { status: 403 });
  }
  return null; // authenticated
}
