import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { authenticateRequest } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const authError = authenticateRequest(req);
  if (authError) return authError;

  const comments = await prisma.comment.findMany({
    orderBy: [{ approved: "asc" }, { createdAt: "desc" }],
  });

  return NextResponse.json(comments);
}
