import { NextResponse } from "next/server";
import { generateCsrfToken } from "@/lib/csrf";
import { verifyToken } from "@/lib/auth";

export async function GET() {
  const auth = await verifyToken();
  if (!auth) {
    return NextResponse.json({ error: "Yetkisiz." }, { status: 401 });
  }

  const token = generateCsrfToken();
  return NextResponse.json({ token });
}
