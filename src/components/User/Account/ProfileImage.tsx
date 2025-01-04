"use client"

import { CldImage } from "next-cloudinary";

export default function ProfileImage() {
  return (
    <>
      <CldImage
        alt="Company Logo"
        src="https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733346062/logojj_ou1syp.png"
        height={150}
        width={100}
        crop={{
          type: "fit",
          source: true,
        }}
        className="h-12 w-auto"
      />
    </>
  );
}
