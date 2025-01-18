import { NextRequest, NextResponse } from "next/server";
import db from "@/libs/bd";

export async function POST(request: NextRequest) {
  const data = await request.formData();
  // console.log(data);

  const userEmailFound = await db.user.findFirst({
    where: {
      email: data.get("email") as string,
    },
  });

  if (!userEmailFound) {
    return
  }

  return NextResponse.json(userEmailFound);
}

// export async function GET(request: NextRequest) {
//   const data = await request.formData();
//   // console.log(data);

//   const userEmailFound = await db.user.findFirst({
//     where: {
//       email: data.get("email") as string,
//     },
//   });

//   if (!userEmailFound) {
//     return null;
//   }

//   return NextResponse.json(userEmailFound);
// }
