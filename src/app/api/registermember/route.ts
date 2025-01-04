import { NextRequest, NextResponse } from "next/server";
import db from "@/libs/bd";
// import { endpoint, s3Client } from "@/libs/s3Client";
// import { v4 as uuid } from "uuid";
// import { ObjectCannedACL, PutObjectCommand } from "@aws-sdk/client-s3";
import { getUrlFile } from "../../../../actions/data-actions";

export async function POST(request: NextRequest) {
  // const data =await request.json()
  // return NextResponse.json(data)
  const data = await request.formData();
  // console.log(data);

  const userEmailFound = await db.member.findUnique({
    where: {
      email: data.get("email") as string,
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

  const userDocumentFound = await db.member.findUnique({
    where: {
      documentid: data.get("documentId") as string,
    },
  });

  if (userDocumentFound) {
    return NextResponse.json(
      {
        message: "El usuario ya existe",
      },
      {
        status: 400,
      }
    );
  }

  const image = data.get("image") as File;
  const cv = data.get("resume") as File;

  if (!image) {
    return;
  }
  if (!cv) {
    return;
  }

  // const suscriptionactived = data.get("paymentApproved") ? new Date(): null;

  // const bytesImage = await image.arrayBuffer();
  // const bufferImage = Buffer.from(bytesImage);
  // const fileExtensionImage = image.name.split(".").pop();
  
  // const bytesCV = await cv.arrayBuffer();
  // const bufferCV = Buffer.from(bytesCV);
  // const fileExtensionCV = cv.name.split(".").pop();

  // const bucketParamsImage = {
  //   Bucket: "jjconstructorastorage",
  //   Key: `${uuid()}.${fileExtensionImage}`,
  //   Body: bufferImage,
  //   ACL: "public-read" as ObjectCannedACL,
  // };

  // const bucketParamsCV = {
  //   Bucket: "jjconstructorastorage",
  //   Key: `${uuid()}.${fileExtensionCV}`,
  //   Body: bufferCV,
  //   ACL: "public-read" as ObjectCannedACL,
  // };

  // await s3Client.send(new PutObjectCommand(bucketParamsImage));
  // await s3Client.send(new PutObjectCommand(bucketParamsCV));

  // const urlImage=`${endpoint}/${bucketParamsImage.Bucket}/${bucketParamsImage.Key}`
  // const urlCV=`${endpoint}/${bucketParamsCV.Bucket}/${bucketParamsCV.Key}`

  const urlImage=await getUrlFile(image)
  const urlCV= await getUrlFile(cv)

  const newMember = await db.member.create({
    data: {
      profileimage: urlImage,
      firstName: data.get("firstName") as string,
      lastName: data.get("lastName") as string,
      documentid: data.get("documentId") as string,
      phoneNumber: data.get("phoneNumber") as string,
      email: data.get("email") as string,
      education: data.get("education") as string,
      career: data.get("career") as string,
      university: data.get("university") as string,
      codcip: data.get("codCip") as string,
      yearsOfExperience: data.get("yearsOfExperience") as string,
      skills: data.get("skills") as string,
      description: data.get("description") as string,
      residence: data.get("location") as string,
      lastjob: data.get("lastJob") as string,
      cv: urlCV,
      category: data.get("category") as string,
      suscriptionactived: new Date(),
    },
  });


  const updated=await db.user.update({
    where: {
      email: data.get("email") as string,
    },
    data: {
      username:data.get("firstName") as string,
      image: urlImage,
      role: "member",
    },
  });

console.log(updated) 

  return NextResponse.json(newMember);

  // return new Response(
  //   JSON.stringify({
  //     message: "uploading file",
  //   })
  // );
}

export function GET() {
  return NextResponse.json({
    message: "subiendo foto",
  });
}

// export const UploadFile = async (form: FormData) => {
//   try
//   const file = form.get('file') as File;
//   if (!file) throw new Error('No file provided");
//   if (file.size < 1) throw new Error('File is empty');

//   const buffer = await file.arrayBuffer();
//   const storage = new Storage();
//   await storage.bucket('scriptbytes-storagedemo'). file(file.name).save(Buffer.from(buffer));
