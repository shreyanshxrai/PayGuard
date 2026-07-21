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
    const { id } = payload;
    const userId = Number(id);
    const Users = await prisma.user.findMany({
      where: { NOT: { id: userId } },
      select: { id: true, name: true },
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
