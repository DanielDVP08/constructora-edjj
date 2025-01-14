import { NextRequest, NextResponse } from "next/server";
import db from "@/libs/bd";
import { getUrlFile } from "../../../../actions/data-actions";

export async function POST(request: NextRequest) {
  const data = await request.formData();

  const userEmailFound = await db.member.findUnique({
    where: {
      email: data.get("email") as string,
    },
  });

  if (!userEmailFound) {
    return NextResponse.json(
      {
        message: "El email no existe",
      },
      {
        status: 400,
      }
    );
  }

  const image = data.get("newProfileImage");
  const cv = data.get("newCV");
  const work = data.get("isWorking") as string;
  const isWorking = work === "true" ? true : false;

  console.log(image);
  console.log(cv);

  let urlImage = "";

  if (image === "null") {
    urlImage = data.get("profileImage") as string;
  } else {
    urlImage = await getUrlFile(image as File);
  }

  let urlCv = "";

  if (cv === "null") {
    urlCv = data.get("resume") as string;
  } else {
    urlCv = await getUrlFile(cv as File);
  }

  const updated = await db.member.update({
    where: {
      email: data.get("email") as string,
    },
    data: {
      profileimage: urlImage,
      isWorking: isWorking,
      phoneNumber: data.get("phoneNumber") as string,
      description: data.get("description") as string,
      education: data.get("education") as string,
      career: data.get("career") as string,
      university: data.get("university") as string,
      lastjob: data.get("lastJob") as string,
      skills: data.get("skills") as string,
      cv: urlCv,
    },
  });

  await db.user.update({
    where: {
      email: data.get("email") as string,
    },
    data: {
      image: urlImage,
    },
  });

  return NextResponse.json(updated);
}

export function GET() {
  return NextResponse.json({
    message: "subiendo foto",
  });
}
