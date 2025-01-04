"use client";

import { Building, Upload, X } from "lucide-react";
import { FieldValues } from "react-hook-form";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

interface BusinessInfoProps {
  onNext: ({}) => void;
  data: FieldValues;
  userEmail: string;
  roleUser: string;
}

export default function BusinessInfo({ onNext, data, userEmail, roleUser }: BusinessInfoProps) {

  const [profileImage, setProfileImage] = useState(data.profileImage || null);
  const [formData, setFormData] = useState({
    businessName: data.businessName || "",
    rucNumber: data.rucNumber || "",
    description: data.description || "",
    userEmail: userEmail,
    roleUser: roleUser,
  });

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];
    setProfileImage(file);

    // if (file) {
    //   const reader = new FileReader();
    //   reader.onload = (e) => setProfileImage(e.target?.result);
    //   reader.readAsDataURL(file);
    // }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const formData = new FormData(event.currentTarget);
    // updateProfile({
    //   businessName: formData.get("businessName") as string,
    //   rucNumber: formData.get("rucNumber") as string,
    //   description: formData.get("description") as string,
    // });
    // router.push("/contact");
    onNext({ ...formData, profileImage });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center mb-6">
        <Building className="w-8 h-8 mr-2" />
        <h2 className="text-2xl font-bold">Informacion General</h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="flex-1 mb-4 md:mb-0">
            {/* <ImageUpload
              initialImage={profile.referenceImage}
              onImageChange={(image) =>
                updateProfile({ referenceImage: image })
              }
            /> */}
            {profileImage ? (
              <div className="relative">
                {/* <img src={profileImage} alt="Profile" className="w-full h-64 object-cover rounded-lg" /> */}
                <Image
                  src={URL.createObjectURL(profileImage)}
                  alt="Profile Preview"
                  height={150}
                  width={100}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => setProfileImage(null)}
                  className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <label className="w-full h-64 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                <Upload className="w-12 h-12 text-gray-400" />
                <span className="mt-2 text-sm text-gray-500">
                  Subir Imagen de Inicio
                </span>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleImageUpload}
                  accept="image/*"
                />
              </label>
            )}
          </div>
          <div className="flex-1 space-y-4">
            <input
              type="text"
              placeholder="Nombre del Negocio"
              value={formData.businessName}
              onChange={(e) =>
                setFormData({ ...formData, businessName: e.target.value })
              }
              required
              className="w-full p-2 border rounded"
            />
            <input
              type="tel"
              placeholder="RUC"
              value={formData.rucNumber}
              onChange={(e) =>
                setFormData({ ...formData, rucNumber: e.target.value })
              }
              required
              className="w-full p-2 border rounded"
            />
            <textarea
              placeholder="Descripcion de tu negocio"
              value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="w-full p-2 border rounded h-32"
              required
            />
          </div>
        </div>
        <button type="submit" className="w-full border rounded py-2 bg-black text-white">
          Siguiente
        </button>
      </form>
    </div>
  );
}
