import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { adminMarkLeadRead } from "@/lib/db";
import { verifyCsrfFromRequest } from "@/lib/csrf";

type Params = { params: Promise<{ id: string }> };

export async function PUT(request: NextRequest, { params }: Params) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!verifyCsrfFromRequest(request)) {
    return NextResponse.json({ error: "Geçersiz CSRF token" }, { status: 403 });
  }

  const { id } = await params;
  const leadId = parseInt(id, 10);
  if (isNaN(leadId)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  await adminMarkLeadRead(leadId);
  return NextResponse.json({ success: true });
}
