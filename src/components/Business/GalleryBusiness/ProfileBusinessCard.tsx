"use client";

import { Image } from "@nextui-org/react";
import { BusinessCard } from "../../../../types/business";
import { useRouter } from "next/navigation";

export default function ProfileBusines(negocio: BusinessCard) {
  
  const router = useRouter();

  return (
    <>
      {/* <Card key={negocio.id} className="overflow-hidden">
        <CardBody className="p-4">
          <div
            key={negocio.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={negocio.profileimage as string}
              alt={negocio.businessname as string}
              width={150}
              height={150}
              className="w-full h-40 object-cover"
            />
            <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
              Ver Tienda
            </button>
          </div>
        </CardBody>
      </Card> */}
      <div className="flex flex-col justify-center items-center h-64">
        <Image
          src={negocio.profileimage as string}
          alt={negocio.businessname as string}
          // objectFit="cover"
          width={300}
          height={300}
          radius="none"
          className="text-white w-full h-full object-cover"
        />
        <button onClick={()=>router.push(`/b/${negocio.businessname}`)} className="w-full bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 transition-colors">
          Ver Tienda
        </button>
      </div>
    </>
  );
}
