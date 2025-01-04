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

  if (userEmailFound) {
    return NextResponse.json(
      {
        message: "El email ya existe",
      },
      {
        status: 400,
      }
    );
  }

  //cambiar a validacion de ruc
  // const userDocumentFound = await db.member.findUnique({
  //   where: {
  //     documentid: data.get("documentId") as string,
  //   },
  // });

  // if (userDocumentFound) {
  //   return NextResponse.json(
  //     {
  //       message: "El usuario ya existe",
  //     },
  //     {
  //       status: 400,
  //     }
  //   );
  // }

  const profileImage = data.get("profileImage") as File;
  const companyLogo = data.get("companyLogo") as File;
  const coverImage = data.get("coverImage") as File;
  const proforma = data.get("resume") as File;

  if (!profileImage) {
    return;
  }
  if (!companyLogo) {
    return;
  }
  if (!coverImage) {
    return;
  }
  if (!proforma) {
    return;
  }

  const urlProfileImage = await getUrlFile(profileImage);
  const urlCompanyLogo = await getUrlFile(companyLogo);
  const urlCoverImage = await getUrlFile(coverImage);
  const urlProforma = await getUrlFile(proforma);

  const newBusiness = await db.business.create({
    data: {
      useremail: data.get("email") as string,
      businessname: data.get("businessName") as string,
      rucNumber: data.get("rucNumber") as string,
      companyname: data.get("companyName") as string,
      businessaddress: data.get("businessAddress") as string,
      department: data.get("department") as string,
      province: data.get("province") as string,
      description: data.get("description") as string,
      profileimage: urlProfileImage,
      companylogo: urlCompanyLogo,
      coverimage: urlCoverImage,
      proforma: urlProforma,
      whatsapp: data.get("whatsappLink") as string,
      googlemaps: data.get("googleMapsLink") as string,
      suscriptionactived: new Date(),
    },
  });

  const role = data.get("role") as string;

  if (role === "user") {
    await db.user.update({
      where: {
        email: data.get("email") as string,
      },
      data: {
        role: "user_business",
      },
    });
  } else {
    await db.user.update({
      where: {
        email: data.get("email") as string,
      },
      data: {
        role: "member_business",
      },
    });
  }

  // const updated=await db.user.update({
  //   where: {
  //     email: data.get("email") as string,
  //   },
  //   data: {
  //     role: "user_business",
  //   },
  // });

  // console.log(updated)

  return NextResponse.json(newBusiness);
}

export function GET() {
  return NextResponse.json({
    message: "subiendo foto",
  });
}
