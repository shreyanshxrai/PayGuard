import { getAuthCookie } from "@/lib/auth/cookies";
import { verifyToken } from "@/lib/auth/jwt";
import { prisma } from "@repo/db";
import { NextResponse } from "next/server";

// get request for payment history
export async function GET(request: Request) {
  try {
    const token = await getAuthCookie();
    const payload = await verifyToken(token);
    if (payload) {
      const { id, email } = payload;
      const fromUserId = Number(id);
      const history = await prisma.transactionHistory.findMany({
        where: { fromUserId: fromUserId },
      });
      if (history.length === 0) {
        return NextResponse.json({ msg: "No transactions" }, { status: 404 });
      }

      return NextResponse.json(history, { status: 200 });
    } else {
      return NextResponse.json({ msg: "Unauthorized" }, { status: 401 });
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { msg: "error fetching history" },
      { status: 500 },
    );
  }
}
