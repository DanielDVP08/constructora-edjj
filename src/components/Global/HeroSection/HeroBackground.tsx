"use client";

import { CldImage } from "next-cloudinary";

export default function HeroBackground() {
  return (
    <CldImage
      alt="Fondo"
      src="https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733346061/herojj_m15yfk.jpg"
      // width={120}
      // height={42}
      fill
      priority
      crop={{
        type: "fit",
        source: true,
      }}
    />
  );
}
