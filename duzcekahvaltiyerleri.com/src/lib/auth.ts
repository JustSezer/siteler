import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

function getSecret(): Uint8Array {
  const secret = process.env.JWT_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("JWT_SECRET ortam değişkeni tanımlanmalı ve en az 32 karakter olmalıdır.");
  }
  return new TextEncoder().encode(secret);
}

export async function createToken(userId: number): Promise<string> {
  return new SignJWT({ userId })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer("duzcekahvaltiyerleri.com")
    .setAudience("duzcekahvaltiyerleri.com")
    .setExpirationTime("7d")
    .sign(getSecret());
}

export async function verifyToken(): Promise<{ userId: number } | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth-token")?.value;
    if (!token) return null;

    const { payload } = await jwtVerify(token, getSecret(), {
      issuer: "duzcekahvaltiyerleri.com",
      audience: "duzcekahvaltiyerleri.com",
      algorithms: ["HS256"],
      maxTokenAge: "7d",
    });

    if (!payload.userId || typeof payload.userId !== "number") {
      return null;
    }

    return { userId: payload.userId as number };
  } catch {
    return null;
  }
}
