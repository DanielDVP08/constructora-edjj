import { type NextRequest } from "next/server";
import db from "@/libs/bd";
import { redirect } from "next/navigation";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const token = searchParams.get("token");

  if (!token) {
    return new Response("Token not found", { status: 400 });
  }

  const verifyToken = await db.verficationToken.findFirst({
    where: {
      token,
    },
  });

  if (!verifyToken) {
    return new Response("Token not found", { status: 400 });
  }

  if (verifyToken.expires < new Date()) {
    return new Response("Token ha expirado", { status: 400 });
  }

  const user = await db.user.findUnique({
    where: {
      email: verifyToken.identifier,
    },
  });

  if (user?.emailVerified) {
    return new Response("Email already verified", { status: 400 });
  }

  await db.user.update({
    where:{
        email:verifyToken.identifier,
    },
    data:{
        emailVerified:new Date(),
    }
  })

  await db.verficationToken.delete({
    where:{
      identifier:verifyToken.identifier,
    }
  })

//   return Response.json({ token });

  redirect("/signin?verified=true")
}
