import { endpoint, s3Client } from "@/libs/s3Client";
import { v4 as uuid } from "uuid";
import { ObjectCannedACL, PutObjectCommand } from "@aws-sdk/client-s3";

export async function getUrlFile(file: File) {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const fileExtension = file.name.split(".").pop();

  const bucketParams = {
    Bucket: "jjconstructorastorage",
    Key: `${uuid()}.${fileExtension}`,
    Body: buffer,
    ACL: "public-read" as ObjectCannedACL,
  };

  await s3Client.send(new PutObjectCommand(bucketParams));

  const url = `${endpoint}/${bucketParams.Bucket}/${bucketParams.Key}`;

  return url
}
