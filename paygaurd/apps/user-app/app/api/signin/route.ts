import { setAuthCookie } from "@/lib/auth/cookies";
import { generateToken } from "@/lib/auth/jwt";
import { prisma } from "@repo/db";
import { siginSchema } from "@repo/schemas";

import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

// post request for signin
export async function POST(request: Request) {
  let body;
  try {
    body = await request.json();
  } catch (err) {
    console.error(err);
    return NextResponse.json({ msg: "Error in the body" }, { status: 400 });
  }
  const parseBody = siginSchema.safeParse(body);
  if (parseBody.success) {
    const { email, password } = parseBody.data;
    try {
      const user = await prisma.user.findUnique({
        where: { email: email },
      });
      if (!user) {
        return NextResponse.json(
          { msg: "Invalid email or Password" },
          { status: 401 },
        );
      } else {
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          return NextResponse.json(
            { msg: "Invalid email or Password" },
            { status: 401 },
          );
        }
        const payload = { id: user.id, email: user.email };
        const token = await generateToken(payload);
        await setAuthCookie(token);
        return NextResponse.json({ msg: "Logged In" }, { status: 200 });
      }
    } catch (err) {
      console.error(err);
      return NextResponse.json(
        { msg: "Authentication Error" },
        { status: 400 },
      );
    }
  } else {
    return NextResponse.json({ msg: "Bad inputs" }, { status: 400 });
  }
}
