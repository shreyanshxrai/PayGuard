import { getAuthCookie } from "@/lib/auth/cookies";
import { verifyToken } from "@/lib/auth/jwt";
import { prisma } from "@repo/db";
import { NextRequest, NextResponse } from "next/server";

// get reciever details
export async function GET(request: NextRequest) {
  try {
    const token = await getAuthCookie();
    const payload = await verifyToken(token);
    if (!payload) {
      return NextResponse.json({ msg: "Unauthorized" }, { status: 401 });
    }
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json(
        { msg: "Missing id parameter" },
        { status: 400 },
      );
    }

    const userId = Number(id);
    const Users = await prisma.user.findUnique({
      where: { id: userId },
      select: { name: true, phone: true },
    });
    return NextResponse.json(Users, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { msg: "error fetching history" },
      { status: 500 },
    );
  }
}
