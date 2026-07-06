// post request for signup
import { prisma, PrismaClient } from "@repo/db";
import { signupSchema } from "@repo/schemas";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
export async function POST(request: Request) {
  const body = await request.json();
  const parseBody = signupSchema.safeParse(body);

  if (parseBody.success) {
    const { email, name, phone, password } = parseBody.data;
    const prisma = new PrismaClient();
    const duplicateUser = await prisma.user.findUnique({
      where: { email: email },
    });
    if (!duplicateUser) {
      try {
        const hashPassword = await bcrypt.hash(password, 10);
        await prisma.user.create({
          data: {
            name: name,
            email: email,
            phone: phone,
            password: hashPassword,
          },
        });
        return NextResponse.json({ msg: "user created" }, { status: 201 });
      } catch (err) {
        console.log(err);
        return NextResponse.json({ msg: "Error" }, { status: 500 });
      }
    } else {
      return NextResponse.json({ msg: "user already exists" }, { status: 409 });
    }
  } else {
    return NextResponse.json({ msg: "Validation failed" }, { status: 400 });
  }
}
