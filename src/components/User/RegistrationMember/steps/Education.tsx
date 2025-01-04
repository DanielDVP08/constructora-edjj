"use client";

import { useState } from "react";
import { Book, Plus, X } from "lucide-react";
import { FieldValues } from "react-hook-form";
import { carreras_profesionales_peru, universidades_peru } from "../data";
import { Select, SelectItem } from "@nextui-org/react";

interface EducationProps {
  onNext: ({}) => void;
  onPrevious: () => void;
  data: FieldValues;
}

export default function Education({
  onNext,
  onPrevious,
  data,
}: EducationProps) {
  const [education, setEducation] = useState(data.education || "high_school");
  const [degree, setDegree] = useState(data.degree || "");
  const [university, setUniversity] = useState(data.university || "");
  const [cipCode, setCipCode] = useState(data.cipCode || "");
  const [competencies, setCompetencies] = useState(data.competencies || []);
  const [newCompetency, setNewCompetency] = useState("");

  const handleAddCompetency = () => {
    if (newCompetency.trim()) {
      setCompetencies([...competencies, newCompetency.trim()]);
      setNewCompetency("");
    }
  };

  const handleRemoveCompetency = (index: number) => {
    setCompetencies(competencies.filter((_: string, i: number) => i !== index));
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onNext({ education, degree, university, cipCode, competencies });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-semibold flex items-center">
        <Book className="mr-2" /> Educacion
      </h2>
      <div className="space-y-4">
        {/* <label htmlFor="education">Nivel de Educacion</label>
        <select
          value={education}
          onChange={(e) => setEducation(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="Secundaria Completa">Secundaria Completa</option>
          <option value="Bachiller">Bachiller</option>
          <option value="Maestria">Maestria</option>
          <option value="Doctorado">Doctorado</option>
        </select> */}
        <Select
          value={education}
          radius="none"
          onChange={(e) => setEducation(e.target.value)}
          placeholder="Seleccione un nivel de educacion"
          className="w-full p-2 border rounded"
          required
        >
          <SelectItem key="Secundaria Completa">Secundaria Completa</SelectItem>
          <SelectItem key="Bachiller">Bachiller</SelectItem>
          <SelectItem key="Maestria">Maestria</SelectItem>
          <SelectItem key="Doctorado">Doctorado</SelectItem>
        </Select>
        {(education === "Bachiller" ||
          education === "Maestria" ||
          education === "Doctorado") && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* <select
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
              className="w-full p-2 border rounded"
            >
              {carreras_profesionales_peru.map((carrera) => (
                <option key={carrera} value={carrera}>
                  {carrera}
                </option>
              ))}
            </select>

            <select
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
              className="w-full p-2 border rounded"
            >
              {universidades_peru.map((universidad) => (
                <option key={universidad} value={universidad}>
                  {universidad}
                </option>
              ))}
            </select> */}

            <Select
              value={degree}
              radius="none"
              onChange={(e) => setDegree(e.target.value)}
              placeholder="Seleccione una carrera"
              className="w-full p-2 border rounded"
            >
              {carreras_profesionales_peru.map((carrera) => (
                <SelectItem key={carrera} value={carrera}>
                  {carrera}
                </SelectItem>
              ))}
            </Select>

            <Select
              value={university}
              radius="none"
              onChange={(e) => setUniversity(e.target.value)}
              placeholder="Seleccione una universidad"
              className="w-full p-2 border rounded"
            >
              {universidades_peru.map((universidad) => (
                <SelectItem key={universidad} value={universidad}>
                  {universidad}
                </SelectItem>
              ))}
            </Select>

            {/* <input
              type="text"
              placeholder="Carrera"
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="text"
              placeholder="Universidad"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
              className="w-full p-2 border rounded"
              required
            /> */}
            <input
              type="text"
              placeholder="Codigo CIP (opcional)"
              value={cipCode}
              onChange={(e) => setCipCode(e.target.value)}
              className="w-full p-2 border rounded"
              // required
            />
          </div>
        )}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Especialidades (Ejem: Carpinteria, Electricidad, Soldadura, etc.)"
            value={newCompetency}
            onChange={(e) => setNewCompetency(e.target.value)}
            className="flex-grow p-2 border rounded"
          />
          <button
            type="button"
            onClick={handleAddCompetency}
            className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {competencies.map((competency: string, index: number) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm flex items-center"
            >
              {competency}
              <button
                type="button"
                onClick={() => handleRemoveCompetency(index)}
                className="ml-1 text-blue-800 hover:text-blue-900"
              >
                <X className="w-4 h-4" />
              </button>
            </span>
          ))}
        </div>
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
