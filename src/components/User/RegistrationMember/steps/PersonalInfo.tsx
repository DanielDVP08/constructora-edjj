"use client";

import { ChangeEvent, useState } from "react";
import { User, Upload, X } from "lucide-react";
import { FieldValues } from "react-hook-form";
import Image from "next/image";

export default function PersonalInfo({
  onNext,
  data,
  userEmail,
}: {
  onNext: ({}) => void;
  data: FieldValues;
  userEmail: string;
}) {
  const [profileImage, setProfileImage] = useState(data.profileImage || null);
  const [formData, setFormData] = useState({
    firstName: data.name || "",
    lastName: data.surname || "",
    idType: data.idType || "id",
    documentid: data.idNumber || "",
    phoneNumber: data.phone || "",
    email: data.email || userEmail,
    description: data.description || "",
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

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onNext({ ...formData, profileImage });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-semibold flex items-center">
        <User className="mr-2" /> Informacion Personal
      </h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3">
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
                Subir Imagen de Perfil
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
        <div className="w-full md:w-2/3 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Nombres"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="text"
              placeholder="Apellidos"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              className="w-full p-2 border rounded"
              required
            />
            <select
              value={formData.idType}
              onChange={(e) =>
                setFormData({ ...formData, idType: e.target.value })
              }
              className="w-full p-2 border rounded"
              required
            >
              <option value="DNI">DNI</option>
              <option value="Cedula">Cedula</option>
              <option value="Pasaporte">Pasaporte</option>
            </select>
            <input
              type="text"
              // placeholder={`${formData.idType.toUpperCase()} Number`}
              value={formData.documentid}
              onChange={(e) =>
                setFormData({ ...formData, documentid: e.target.value })
              }
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="tel"
              placeholder="Telefono"
              value={formData.phoneNumber}
              onChange={(e) =>
                setFormData({ ...formData, phoneNumber: e.target.value })
              }
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="email"
              placeholder="Correo Electronico"
              value={userEmail}
              // defaultValue={userEmail}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full p-2 border rounded"
              // required
              disabled
            />
          </div>
          <textarea
            placeholder="Descripcion Breve"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="w-full p-2 border rounded h-24"
            required
          ></textarea>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Siguiente
        </button>
      </div>
    </form>
  );
}
