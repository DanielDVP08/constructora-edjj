import { sendSaleEmail } from "@/libs/brevo";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.formData();
  console.log(data);
  
  await sendSaleEmail(
    data.get("fullName") as string,
    data.get("email") as string,
    data.get("phoneNumber") as string,
    data.get("description") as string
  );

  return NextResponse.json({
    message:"mensaje enviado",
  })
}
