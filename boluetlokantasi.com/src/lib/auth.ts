import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { getUserByUsername } from "@/lib/db";

const SESSION_SECRET = process.env.SESSION_SECRET;
if (!SESSION_SECRET || SESSION_SECRET.length < 32) {
  throw new Error("SESSION_SECRET env variable must be set and at least 32 characters long");
}

const SESSION_NAME = "boluet-admin-token";
const SESSION_MAX_AGE = 60 * 60 * 24; // 24 hours
const BCRYPT_ROUNDS = 12;

// Hash a password
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, BCRYPT_ROUNDS);
}

// Verify password against hash
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

// Validate credentials against database
export async function validateCredentials(
  username: string,
  password: string
): Promise<{ valid: boolean; displayName?: string }> {
  if (!username || !password) return { valid: false };

  const user = await getUserByUsername(username);
  if (!user) return { valid: false };

  const valid = await verifyPassword(password, user.password_hash);
  return { valid, displayName: valid ? user.display_name : undefined };
}

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

    // Timing-safe comparison
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

export async function createSession(username: string): Promise<void> {
  const token = generateToken(username);
  const cookieStore = await cookies();
  cookieStore.set(SESSION_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: SESSION_MAX_AGE,
    path: "/",
  });
}

export async function destroySession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_NAME);
}

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_NAME)?.value;
  if (!token) return false;

  const { valid, username } = verifyToken(token);
  if (!valid || !username) return false;

  // Verify user still exists in DB
  const user = await getUserByUsername(username);
  return !!user;
}

export async function getSessionUser(): Promise<string | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_NAME)?.value;
  if (!token) return null;

  const { valid, username } = verifyToken(token);
  if (!valid) return null;
  return username;
}
