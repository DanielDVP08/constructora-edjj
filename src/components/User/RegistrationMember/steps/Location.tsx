"use client";

import { ChangeEvent, useState } from "react";
import { MapPin, Upload, X } from "lucide-react";
import { FieldValues } from "react-hook-form";

import { departaments, Localidades } from "../data";

// const departments = ["Lima", "Arequipa", "Cusco"]; // Add more as needed
// const localidades = {
//   Lima: ["Lima", "Callao"],
//   Arequipa: ["Arequipa", "Caylloma"],
//   Cusco: ["Cusco", "Urubamba"],
//   // Add more as needed
// };
// const districts = {
//   Lima: ["Miraflores", "San Isidro", "Barranco"],
//   Callao: ["Bellavista", "La Punta", "Ventanilla"],
//   // Add more as needed
// };

interface LocationProps {
  onNext: ({}) => void;
  onPrevious: () => void;
  data: FieldValues;
}

export default function Location({ onNext, onPrevious, data }: LocationProps) {
  const [department, setDepartment] = useState<string>(data.department || "");
  const [province, setProvince] = useState<string>(data.province || "");
  const [provinces, setProvinces] = useState<string[]>([""]);
  // const [district, setDistrict] = useState<string>(data.district || "");
  const [resume, setResume] = useState(data.resume || null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleResumeUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];
    if (file) {
      // Simulating file upload progress
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setUploadProgress(progress);
        if (progress >= 100) {
          clearInterval(interval);
          setResume(file);
          setUploadProgress(0);
        }
      }, 200);
    }
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // onNext({ department, province, district, resume });
    onNext({ department, province, resume });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-semibold flex items-center">
        <MapPin className="mr-2" /> Location
      </h2>
      <div className="space-y-4">
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
          className="w-full p-2 border rounded"
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
          className="w-full p-2 border rounded"
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
        {/* <select
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
          className="w-full p-2 border rounded"
          disabled={!province}
          required
        >
          <option value="">Select District</option>
          {province &&
            districts[province].map((dist: string) => (
              <option key={dist} value={dist}>
                {dist}
              </option>
            ))}
        </select> */}
        {resume ? (
          <div className="flex items-center justify-between bg-gray-100 p-4 rounded">
            <div className="flex items-center">
              <Upload className="w-6 h-6 mr-2 text-blue-500" />
              <span>{resume.name}</span>
            </div>
            <button
              type="button"
              onClick={() => setResume(null)}
              className="text-red-500 hover:text-red-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <div>
            <label className="w-full h-32 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
              <Upload className="w-8 h-8 text-gray-400" />
              <span className="mt-2 text-sm text-gray-500">
                Subir Curriculum Vitae (PDF)
              </span>
              <input
                type="file"
                className="hidden"
                onChange={handleResumeUpload}
                accept=".pdf"
              />
            </label>
            {uploadProgress > 0 && uploadProgress < 100 && (
              <div className="mt-2">
                <div className="bg-blue-200 h-2 rounded-full">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
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
  );
}
