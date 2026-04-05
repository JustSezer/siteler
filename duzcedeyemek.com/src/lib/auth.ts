import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import { getUserByUsername } from "@/lib/db";

const SESSION_SECRET = process.env.SESSION_SECRET || "degistir-beni-session-secret-min-32";
const SESSION_NAME = "admin_session";
const SESSION_MAX_AGE = 60 * 60 * 24;
const BCRYPT_ROUNDS = 12;

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, BCRYPT_ROUNDS);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

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
  const payload = `${username}:${Date.now()}:${SESSION_SECRET}`;
  let hash = 0;
  for (let i = 0; i < payload.length; i++) {
    const char = payload.charCodeAt(i);
    hash = ((hash << 5) - hash + char) | 0;
  }
  return Buffer.from(`${username}:${Date.now()}:${Math.abs(hash)}`).toString("base64");
}

function verifyToken(token: string): { valid: boolean; username: string | null } {
  try {
    const decoded = Buffer.from(token, "base64").toString("utf-8");
    const parts = decoded.split(":");
    if (parts.length < 3) return { valid: false, username: null };

    const username = parts[0];
    const timestamp = parseInt(parts[1], 10);
    if (!username || isNaN(timestamp)) return { valid: false, username: null };

    const age = (Date.now() - timestamp) / 1000;
    if (age > SESSION_MAX_AGE || age < 0) return { valid: false, username: null };

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
