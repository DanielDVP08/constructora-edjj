"use client";

import { useState } from "react";
import { Button } from "@nextui-org/react";
import { BusinessCard } from "../../../../../types/business";
import { FieldValues } from "react-hook-form";
import CoverSection from "./businesssection/CoverSection";
import ProfileImageSection from "./businesssection/ProfileImageSection";
import LogoSection from "./businesssection/LogoSection";
import InfoBusinessSection from "./businesssection/InfoBusinessSection";
import ProformaSection from "./businesssection/ProformaSection";
import { AuthError } from "next-auth";
import { updateBusiness } from "../../../../../actions/auth-action";

interface BusinessProps {
  busines: BusinessCard | null;
}

export default function MyBusiness({ busines }: BusinessProps) {
  //   const [businessInfo, setBusinessInfo] = useState({
  //     name: 'Construction Co.',
  //     description: 'We build amazing structures.',
  //     companyName: 'Construction Co. LLC',
  //     address: '123 Builder St, Construction City, CC 12345',
  //     location: 'Construction City',
  //     googleMapsLink: 'https://goo.gl/maps/example',
  //     whatsappLink: 'https://wa.me/1234567890',
  //   })

  const [isEditing, setIsEditing] = useState(false);
  const [actualData, setActualData] = useState({ ...busines });
  const [newData, setNewData] = useState({
    ...busines,
    newCoverImage: null,
    newProfileImage: null,
    newLogo: null,
    newProforma: null,
  });

  //   const [isEditing, setIsEditing] = useState(false)

  const handleUpdate = (data: FieldValues) => {
    console.log(data);
    setNewData({ ...newData, ...data });
    // console.log(newData)
  };

  const handleSave = async () => {
    // setNewData({ ...newData, isWorking: isWorking });
    console.log(newData);

    setActualData({ ...actualData, ...newData });

    try {
      await updateBusiness(newData);
    } catch (error) {
      if (error instanceof AuthError) {
        return { error: error.cause?.err?.message };
      }
      return { error: "error 500" };
    }

    setIsEditing(false);
    window.location.replace("");
  };

  const handleDiscard = () => {
    window.location.replace("");
    setIsEditing(false);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 space-y-6">
      {/* <div className="relative aspect-[21/9] rounded-lg overflow-hidden">
        <Image src="/placeholder.svg" alt="Cover Photo" layout="fill" objectFit="cover" />
        <Button className="absolute top-4 right-4" size="sm">
          <Camera className="mr-2" size={16} />
          Cambiar
        </Button>
      </div> */}

      <CoverSection
        onUpdateData={handleUpdate}
        data={actualData}
        isEdit={isEditing}
      />

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 space-y-4">
          {/* <div className="relative aspect-square w-48 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg"
              alt="Home Photo"
              layout="fill"
              objectFit="cover"
            />
            <Button className="absolute bottom-2 right-2" size="sm">
              <Camera className="mr-2" size={16} />
              Cambiar
            </Button>
          </div> */}

          <ProfileImageSection
            onUpdateData={handleUpdate}
            data={actualData}
            isEdit={isEditing}
          />

          {/* <div className="relative aspect-square w-24 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg"
              alt="Logo"
              layout="fill"
              objectFit="contain"
            />
            <Button className="absolute bottom-1 right-1" size="sm" isIconOnly>
              <Camera className="mr-2" size={16} />
            </Button>
          </div> */}
          <LogoSection
            onUpdateData={handleUpdate}
            data={actualData}
            isEdit={isEditing}
          />

          <h2 className="text-2xl font-bold">{busines?.businessname}</h2>
          <textarea
            placeholder="Descripcion Breve"
            value={newData.description as string}
            onChange={(e) =>
              setNewData({ ...newData, description: e.target.value })
            }
            //   className="w-full p-2 border rounded h-24"
            className={`w-full p-2 border h-24 mt-2 ${
              isEditing ? "border" : "rounded"
            }`}
            disabled={!isEditing}
          ></textarea>
        </div>

        {/* <div className="flex-1 space-y-4">
          <h3 className="text-xl font-semibold">Contact Information</h3>
          <p>
            <strong>Company Name:</strong> {businessInfo.companyName}
          </p>
          <p>
            <strong>Address:</strong> {businessInfo.address}
          </p>
          <p>
            <strong>Location:</strong> {businessInfo.location}
          </p>
          <p>
            <strong>Google Maps:</strong>{" "}
            <a
              href={businessInfo.googleMapsLink}
              className="text-blue-600 hover:underline"
            >
              View on Google Maps
            </a>
          </p>
          <p>
            <strong>WhatsApp:</strong>{" "}
            <a
              href={businessInfo.whatsappLink}
              className="text-blue-600 hover:underline"
            >
              Contact on WhatsApp
            </a>
          </p>
        </div> */}

        <InfoBusinessSection
          onUpdateData={handleUpdate}
          data={actualData}
          isEdit={isEditing}
        />

        <ProformaSection
          onUpdateData={handleUpdate}
          data={actualData}
          isEdit={isEditing}
        />
      </div>

      <div className="flex justify-center space-x-4 mt-6">
        {/* <Button onClick={() => setIsEditing(true)}>Edit</Button>
        {isEditing && (
          <>
            <Button onClick={handleSave}>Save All Changes</Button>
            <Button variant="outline" onClick={handleDiscard}>Discard Changes</Button>
          </>
        )} */}
        {isEditing ? (
          <>
            <Button color="success" variant="solid" onPress={handleSave}>
              Guardar Cambios
            </Button>
            <Button color="danger" variant="solid" onPress={handleDiscard}>
              Descartar Cambios
            </Button>
          </>
        ) : (
          <Button color="primary" onPress={() => setIsEditing(!isEditing)}>
            Editar Perfil
          </Button>
        )}
      </div>
    </div>
  );
}
