"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { departaments } from "@/components/User/RegistrationMember/data";
import { useRouter } from "next/navigation";

// const departments = [
//   'Amazonas', 'Áncash', 'Apurímac', 'Arequipa', 'Ayacucho', 'Cajamarca',
//   'Callao', 'Cusco', 'Huancavelica', 'Huánuco', 'Ica', 'Junín', 'La Libertad',
//   'Lambayeque', 'Lima', 'Loreto', 'Madre de Dios', 'Moquegua', 'Pasco', 'Piura',
//   'Puno', 'San Martín', 'Tacna', 'Tumbes', 'Ucayali'
// ]

export default function HeroBusiness() {
  const router = useRouter();
  const [selectedDepartment, setSelectedDepartment] = useState("");

  return (
    <div
      className="min-h-screen bg-black flex flex-col items-center justify-center px-4"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dqpc8hl3r/image/upload/v1735963871/reddetiendas_rb7xhk.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-stone-900 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-white text-center mb-6">
          ¿En que departamento estas buscando?
        </h1>
        <select
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
          className="w-full p-2 mb-4 bg-gray-800 text-white border border-gray-600 rounded focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        >
          <option value="">Selecciona un Departamento</option>
          {departaments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
        <button
          onClick={() => router.push(`/business/${(selectedDepartment).trim().replaceAll(" ","_")}`)}
          disabled={!selectedDepartment}
          className="w-full bg-blue-600 text-white p-2 rounded flex items-center justify-center disabled:bg-gray-600 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors duration-200"
        >
          <Search className="mr-2" size={20} />
          Buscar
        </button>
      </div>
    </div>
  );
}

// HeroBusiness
