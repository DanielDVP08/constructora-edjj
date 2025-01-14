import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import db from "@/libs/bd";

export async function POST(request: NextRequest) {
  const data = await request.formData();

  const hashedPassword = await bcrypt.hash(data.get("password") as string, 10);

  const res = await db.user.update({
    where: {
      email: data.get("email") as string,
    },
    data: {
      password: hashedPassword,
    },
  });

  return NextResponse.json(res);
}
