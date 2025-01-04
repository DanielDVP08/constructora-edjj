"use client";

import { Phone } from "lucide-react";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import {
  departaments,
  Localidades,
} from "@/components/User/RegistrationMember/data";

interface ContactInfoProps {
  onNext: ({}) => void;
  onPrevious: () => void;
  data: FieldValues;
}

export default function ContactInfo({
  onNext,
  onPrevious,
  data,
}: ContactInfoProps) {
  const [department, setDepartment] = useState<string>(data.department || "");
  const [province, setProvince] = useState<string>(data.province || "");
  const [provinces, setProvinces] = useState<string[]>([""]);

  const [formData, setFormData] = useState({
    companyName: data.companyName || "",
    businessAddress: data.businessAddress || "",
    whatsappLink: data.whatsappLink || "",
    googleMapsLink: data.googleMapsLink || "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onNext({ ...formData, department, province });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center mb-6">
        <Phone className="w-8 h-8 mr-2" />
        <h2 className="text-2xl font-bold">Informacion de Contacto</h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          placeholder="Razon Social"
          value={formData.companyName}
          onChange={(e) =>
            setFormData({ ...formData, companyName: e.target.value })
          }
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Direccion"
          value={formData.businessAddress}
          onChange={(e) =>
            setFormData({ ...formData, businessAddress: e.target.value })
          }
          required
          className="w-full p-2 border rounded"
        />
        <div className="flex space-x-4">
          <select
            value={department}
            onChange={(e) => {
              setDepartment(e.target.value);
              // console.log(e.target.value)
              // console.log(Localidades.findIndex((localidad) => localidad.departamento === e.target.value))
              if (e.target.value !== "") {
                const index = Localidades.findIndex(
                  (localidad) => localidad.departamento === e.target.value
                );
                setProvinces(Localidades[index].provincias);
              }
              setProvince("");
              // setDistrict("");
            }}
            className="w-1/2 p-2 border rounded"
            required
          >
            <option value="">Seleccione un Departmento</option>
            {departaments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
          <select
            value={province}
            onChange={(e) => {
              setProvince(e.target.value);
              // setDistrict("");
            }}
            className="w-1/2 p-2 border rounded"
            disabled={!department}
            required
          >
            <option value="">Seleccione una Provincia</option>
            {provinces.map((prov: string) => (
              <option key={prov} value={prov}>
                {prov}
              </option>
            ))}
          </select>
        </div>
        <input
          type="text"
          placeholder="Link de Whatsapp"
          value={formData.whatsappLink}
          onChange={(e) =>
            setFormData({ ...formData, whatsappLink: e.target.value })
          }
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Link de Google Maps"
          value={formData.googleMapsLink}
          onChange={(e) =>
            setFormData({ ...formData, googleMapsLink: e.target.value })
          }
          required
          className="w-full p-2 border rounded"
        />
        <div className="flex justify-between">
          <button
            type="button"
            onClick={onPrevious}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
          >
            Atras
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Siguiente
          </button>
        </div>
      </form>
    </div>
  );
}
