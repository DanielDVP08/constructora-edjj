'use client'

import { ChangeEvent, useState } from 'react'
import { Briefcase } from 'lucide-react'
import { FieldValues } from 'react-hook-form'

interface ExperienceProps{
    onNext: ({})=>void
    onPrevious: ()=>void
    data : FieldValues
}

export default function Experience({ onNext, onPrevious, data }:ExperienceProps) {
  const [formData, setFormData] = useState({
    yearsOfExperience: data.yearsOfExperience || '',
    yearsOfFieldExperience: data.yearsOfFieldExperience || '',
    lastJob: {
      company: data.lastJob?.company || '',
      position: data.lastJob?.position || '',
      startDate: data.lastJob?.startDate || '',
      endDate: data.lastJob?.endDate || '',
    },
  })

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name.startsWith('lastJob.')) {
      const jobField = name.split('.')[1]
      setFormData((prev) => ({
        ...prev,
        lastJob: {
          ...prev.lastJob,
          [jobField]: value,
        },
      }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = (e:React.SyntheticEvent) => {
    e.preventDefault()
    onNext(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-semibold flex items-center">
        <Briefcase className="mr-2" /> Experiencia Laboral
      </h2>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="number"
            name="yearsOfExperience"
            placeholder="Años de Experiencia Laboral"
            value={formData.yearsOfExperience}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="number"
            name="yearsOfFieldExperience"
            placeholder="Años de Experiencia en Obra"
            value={formData.yearsOfFieldExperience}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Anterior Lugar de Trabajo</h3>
          <input
            type="text"
            name="lastJob.company"
            placeholder="Anterior Empresa donde trabajaste"
            value={formData.lastJob.company}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="lastJob.position"
            placeholder="Ocupacion / Cargo"
            value={formData.lastJob.position}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="date"
              name="lastJob.startDate"
              placeholder="Fecha de Inicio"
              value={formData.lastJob.startDate}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="date"
              name="lastJob.endDate"
              placeholder="Fecha de Fin"
              value={formData.lastJob.endDate}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              disabled={!formData.lastJob.startDate}
              min={formData.lastJob.startDate}
            />
          </div>
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
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Siguiente
        </button>
      </div>
    </form>
  )
}

