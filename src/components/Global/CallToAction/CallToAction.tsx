"use client";

import { BrickWall, Hammer, Wrench } from "lucide-react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
// import Image from "next/image"

export default function CallToAction() {
  return (
    // <div className="relative w-full min-h-screen">
    <div className="relative w-full">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        {/* <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Background"
          fill
          className="object-cover"
          priority
        /> */}
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
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
      </div>

      {/* Content Container */}
      {/* <div className="relative h-full"> */}
      <div className="relative">
        {/* <div className="container mx-auto px-4 py-12 max-w-6xl h-full"> */}
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="max-w-xl pt-8">
            {/* Service Icons */}
            <div className="grid grid-cols-3 gap-4 mb-16 max-w-md text-center">
              <div className="flex flex-col items-center space-y-2">
                <div className="p-2 rounded-full bg-white shadow-sm">
                  <BrickWall className="w-6 h-6" />
                </div>
                {/* <p className="text-sm font-medium">Conduce o haz entregas</p> */}
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="p-2 rounded-full bg-white shadow-sm">
                  <Hammer className="w-6 h-6" />
                </div>
                {/* <p className="text-sm font-medium">Pide comida</p> */}
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="p-2 rounded-full bg-white shadow-sm">
                  <Wrench className="w-6 h-6" />
                </div>
                {/* <p className="text-sm font-medium">Viaja</p> */}
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                {/* Ponte al volante y genera ganancias */}
                Tu recurso en materiales de construcción
              </h1>
              <p className="text-lg text-gray-600">
                {/* Conduce en la plataforma que tiene la mayor cantidad de usuarios
                activos. */}
                Agilice su proceso de adquisición de materiales de construcción
                y eleve sus proyectos a nuevas alturas.
              </p>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <Link
                  href="/business/register"
                  className="inline-block bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-black/90 transition-colors"
                >
                  Registrate como Distribuidor
                </Link>

                {/* <div>
                  <Link
                    href="#"
                    className="inline-block text-gray-900 underline underline-offset-4 hover:text-gray-600"
                  >
                    Conoce más sobre cómo conducir y realizar entregas
                  </Link>
                </div> */}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
