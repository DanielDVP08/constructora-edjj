import { sendSaleEmail } from "@/libs/brevo";
import { NextRequest, NextResponse } from "next/server";
import { getUrlFile } from "../../../../actions/data-actions";

export async function POST(request: NextRequest) {
  const data = await request.formData();
  // console.log(data);
  
  const urlImage= await getUrlFile(data.get("image") as File)

  await sendSaleEmail(
    data.get("fullName") as string,
    data.get("email") as string,
    data.get("phoneNumber") as string,
    data.get("ubicacion") as string,
    data.get("price") as string,
    data.get("description") as string,
    urlImage
  );

  return NextResponse.json({
    message:"mensaje enviado",
  })
}
