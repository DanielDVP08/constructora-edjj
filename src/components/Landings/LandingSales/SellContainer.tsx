"use client";

import { motion } from "framer-motion";
// import Image from "next/image";
import { type LucideIcon } from "lucide-react";
import { CldImage } from "next-cloudinary";

interface SellContainerProps {
  title: string;
  icon: LucideIcon;
  onClick: () => void;
}

export function SellContainer({
  title,
  icon: Icon,
  onClick,
}: SellContainerProps) {
  return (
    <motion.div
      className="bg-transparent rounded-lg p-4 cursor-pointer w-full max-w-xs mx-auto"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <div className="relative h-40 mb-4">
        {/* <Image
          src={`/placeholder.svg?height=160&width=240`}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded"
        /> */}
        <CldImage
          alt={title}
          src="https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733366409/fondosell_e5i9rz.png"
          // width={120}
          // height={42}
          fill
          priority
          crop={{
            type: "fit",
            source: true,
          }}
          className="rounded"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon size={48} className="text-brown-500" />
        </div>
      </div>
      <h2
        className="text-xl font-semibold text-center text-white bg-amber-500 px-8 py-2 rounded-lg"
        // style={{
        //   backgroundImage:
        //     "url(https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733346063/titlecategory_sx3a7p.png)",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
      >
        {title}
      </h2>
    </motion.div>
  );
}
