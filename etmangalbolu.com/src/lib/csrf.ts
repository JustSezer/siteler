import crypto from "crypto";
import { NextRequest } from "next/server";

const CSRF_SECRET = process.env.SESSION_SECRET || process.env.API_SECRET_KEY || "csrf-fallback-secret";
const TOKEN_EXPIRY_MS = 60 * 60 * 1000; // 1 hour

export function generateCsrfToken(): string {
  const timestamp = Date.now().toString(36);
  const random = crypto.randomBytes(16).toString("hex");
  const data = `${timestamp}.${random}`;
  const signature = crypto
    .createHmac("sha256", CSRF_SECRET)
    .update(data)
    .digest("hex")
    .substring(0, 16);
  return `${data}.${signature}`;
}

export function validateCsrfToken(token: string): boolean {
  if (!token || typeof token !== "string") return false;

  const parts = token.split(".");
  if (parts.length !== 3) return false;

  const [timestamp, random, signature] = parts;

  const data = `${timestamp}.${random}`;
  const expectedSig = crypto
    .createHmac("sha256", CSRF_SECRET)
    .update(data)
    .digest("hex")
    .substring(0, 16);

  if (signature.length !== expectedSig.length) return false;
  if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSig))) return false;

  const tokenTime = parseInt(timestamp, 36);
  if (Date.now() - tokenTime > TOKEN_EXPIRY_MS) return false;

  return true;
}

export function verifyCsrfFromRequest(req: NextRequest): boolean {
  const token = req.headers.get("x-csrf-token");
  if (!token) return false;
  return validateCsrfToken(token);
}
