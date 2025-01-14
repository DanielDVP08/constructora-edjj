import { NextRequest, NextResponse } from "next/server";
import db from "@/libs/bd";
import { getUrlFile } from "../../../../actions/data-actions";

export async function POST(request: NextRequest) {
  const data = await request.formData();

  const userEmailFound = await db.business.findUnique({
    where: {
      useremail: data.get("email") as string,
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

  const cover = data.get("newCoverImage");
  const image = data.get("newProfileImage");
  const logo = data.get("newLogoImage");
  const proforma = data.get("newProforma");

//   console.log(image);
//   console.log(cv);

  let urlCover = "";

  if (cover === "null") {
    urlCover = data.get("coverImage") as string;
  } else {
    urlCover = await getUrlFile(cover as File);
  }

  let urlImage = "";

  if (image === "null") {
    urlImage = data.get("profileimage") as string;
  } else {
    urlImage = await getUrlFile(image as File);
  }

  let urlLogo = "";

  if (logo === "null") {
    urlLogo = data.get("logoImage") as string;
  } else {
    urlLogo = await getUrlFile(image as File);
  }

  let urlProforma = "";

  if (proforma === "null") {
    urlProforma = data.get("proforma") as string;
  } else {
    urlProforma = await getUrlFile(proforma as File);
  }

  const updated = await db.business.update({
    where: {
      useremail: data.get("email") as string,
    },
    data: {
      coverimage: urlCover,
      profileimage: urlImage,
      companylogo: urlLogo,
      description: data.get("description") as string,
      businessaddress: data.get("address") as string,
      googlemaps: data.get("googleMapsLink") as string,
      whatsapp: data.get("whatsappLink") as string,
      proforma: urlProforma,
    },
  });

  return NextResponse.json(updated);
}

export function GET() {
  return NextResponse.json({
    message: "subiendo foto",
  });
}
