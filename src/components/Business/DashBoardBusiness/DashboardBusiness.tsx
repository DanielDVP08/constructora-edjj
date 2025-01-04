"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
// import { CldImage } from "next-cloudinary";
import { BusinessCard } from "../../../../types/business";
import Image from "next/image";

interface DashboardBusinessProps {
  busines: BusinessCard;
}

export default function DashboardBusiness({ busines }: DashboardBusinessProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleDownload = () => {
    setIsAnimating(true);
    // Simulate download delay
    setTimeout(() => {
      setIsAnimating(false);
      // In a real application, you would generate and provide a actual PDF download here
      // alert('Proforma PDF downloaded successfully!')
    }, 2000);
    window.open(busines.proforma as string, "_blank");
  };

  return (
    <main className="flex-grow">
      <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
        {/* <CldImage
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
        /> */}
        <Image
          src={busines.coverimage as string}
          alt={busines.businessname as string}
          layout="fill"
          objectFit="cover"
          priority
        />
        {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center">
            Building Your Future
          </h1>
        </div> */}
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8">
            <div className="w-full md:w-1/2">
              <div className="flex items-center space-x-4 mb-4">
                {/* <CldImage
                  alt="Logo Constructora"
                  src="https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733346062/logojj_ou1syp.png"
                  width={120}
                  height={42}
                  crop={{
                    type: "fit",
                    source: true,
                  }}
                /> */}
                <Image
                  src={busines.companylogo as string}
                  alt={busines.companyname as string}
                  width={64}
                  height={64}
                />
                <h4 className="text-3xl font-bold">{busines.businessname}</h4>
              </div>
              <p className="text-gray-600">{busines.description}</p>
            </div>

            {/* info de contacto */}
            <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Contactanos</h3>
              <ul className="space-y-2 mb-6">
                <li>
                  <strong>Razon Social: </strong>
                  {busines.companyname}
                </li>
                <li>
                  <strong>Direccion: </strong> {busines.businessaddress}
                </li>
                <li>
                  <strong>Ubicacion: </strong>{" "}
                  {`${busines.department}, ${busines.province}`}
                </li>
                <li>
                  <strong>Google Maps: </strong>
                  {busines.googlemaps}
                </li>
              </ul>
              <Link
                href={`https://wa.me/${busines.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition duration-300"
              >
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-200 flex justify-center items-center">
        <motion.button
          className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleDownload}
        >
          {isAnimating ? (
            <motion.div
              className="h-6 w-6 border-t-2 border-white rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          ) : (
            "Download Product Proforma (PDF)"
          )}
        </motion.button>
      </section>
    </main>
  );
}
