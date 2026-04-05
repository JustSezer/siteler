import { NextResponse } from "next/server";
import { generateCsrfToken } from "@/lib/csrf";
import { isAuthenticated } from "@/lib/auth";

export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Yetkisiz." }, { status: 401 });
  }
  const token = generateCsrfToken();
  return NextResponse.json({ token });
}
