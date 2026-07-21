import { getAuthCookie } from "@/lib/auth/cookies";
import { verifyToken } from "@/lib/auth/jwt";
import { prisma } from "@repo/db";
import { NextResponse } from "next/server";

// get users list
export async function GET() {
  try {
    const token = await getAuthCookie();
    const payload = await verifyToken(token);
    if (!payload) {
      return NextResponse.json({ msg: "Unauthorized" }, { status: 401 });
    }
    const Users = await prisma.user.findMany({
      select: { id: true, name: true },
    });
    if (Users.length === 0) {
      return NextResponse.json({ msg: "No Users yet" }, { status: 404 });
    }
    return NextResponse.json(Users, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { msg: "error fetching history" },
      { status: 500 },
    );
  }
}
