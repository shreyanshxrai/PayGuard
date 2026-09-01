import { NextResponse } from "next/server";
import { deleteAuthCookie } from "@/lib/auth/cookies";

export async function POST() {
  try {
    await deleteAuthCookie();

    return NextResponse.json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Logout failed",
      },
      { status: 500 },
    );
  }
}
