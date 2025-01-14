import { NextRequest, NextResponse } from "next/server";
import { sendCodeConfirmation } from "@/libs/brevo";

export async function POST(request: NextRequest) {
  const data = await request.formData();

  const res = await sendCodeConfirmation(
    data.get("email") as string,
    data.get("code") as string
  );

  return NextResponse.json(res);
}
