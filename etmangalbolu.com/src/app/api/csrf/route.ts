import { NextRequest, NextResponse } from "next/server";
import { generateCsrfToken } from "@/lib/csrf";
import { authenticateRequest } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const authError = authenticateRequest(req);
  if (authError) return authError;

  const token = generateCsrfToken();
  return NextResponse.json({ token });
}
