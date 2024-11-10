"use client";

import { useState, useEffect, ChangeEvent } from "react";
import { ArrowLeft, ArrowRight, FileText, Upload, X } from "lucide-react";
// import { localidades } from "./data";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import Image from "next/image";
import {  UserP } from "../../../types/user";
import { UserDropdown } from "../Header/UserDropdown";
// import { set } from "zod";

export default function ProfileRegistration(user: UserP) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // profileImage: null,
    firstName: "",
    lastName: "",
    documentid: "",
    phoneNumber: "",
    email: "",
    description: "",
    education: "",
    career: "",
    university: "",
    cipCode: "",
    skills: [""],
    yearsOfExperience: "",
    lastJobCompany: "",
    lastJobPosition: "",
    lastJobStartDate: "",
    lastJobEndDate: "",
    department: "",
    province: "",
    district: "",
    // resume: null,
  });
  const [currentSkill, setCurrentSkill] = useState<string>();
  const [departments, setDepartments] = useState<string[]>([""]);
  const [provinces, setProvinces] = useState<string[]>([""]);
  const [districts, setDistricts] = useState<string[]>([""]);
  const [profileImage, setProfileImage] = useState<string | ArrayBuffer | null>(
    null
  );
  const [archive, setArchive] = useState<File | null>();
  const [image, setImage] = useState<File | null>();

  useEffect(() => {
    // Simulated API call to fetch departments
    setDepartments(["Department 1", "Department 2", "Department 3"]);
    // setDepartments(localidades.departamento);
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "department") {
      // Simulated API call to fetch provinces based on department
      setProvinces(["Province 1", "Province 2", "Province 3"]);
      setFormData((prev) => ({ ...prev, province: "", district: "" }));
      setDistricts([]);
    } else if (name === "province") {
      // Simulated API call to fetch districts based on province
      setDistricts(["District 1", "District 2", "District 3"]);
      setFormData((prev) => ({ ...prev, district: "" }));
    }
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];
    setImage(file)

    const reader = new FileReader();

    reader.onloadend = () => {
      setProfileImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleDeleteImage = () => {
    // setFormData(prev => ({ ...prev, profileImage: null }))
    setProfileImage(null);
  };

  const handleResumeUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];
    setArchive(file);
  };

  const handleDeleteResume = () => {
    // setFormData(prev => ({ ...prev, resume: null }))
    // setUploadProgress(0)
    setArchive(null);
  };

  const handleAddSkill = () => {
    if (currentSkill && !formData.skills.includes(currentSkill)) {
      if (formData.skills.includes("")) {
        setFormData((prev) => ({
          ...prev,
          skills: [currentSkill],
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          skills: [...prev.skills, currentSkill],
        }));
      }
      setCurrentSkill("");
    }

    // if (currentSkill && !formData.skills.includes(currentSkill)) {
    //   setFormData((prev) => ({
    //     ...prev,
    //     skills: [...prev.skills, currentSkill],
    //   }));
    //   setCurrentSkill("");
    // }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill !== skillToRemove),
    }));
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return (
          profileImage &&
          formData.firstName &&
          formData.lastName &&
          formData.phoneNumber &&
          // formData.email &&
          formData.description
        );
      case 2:
        return (
          formData.education &&
          (formData.education === "high_school" ||
            (formData.career && formData.university && formData.cipCode)) &&
          formData.skills.length > 0
        );
      case 3:
        return (
          formData.yearsOfExperience &&
          formData.lastJobCompany &&
          formData.lastJobPosition &&
          formData.lastJobStartDate &&
          formData.lastJobEndDate
        );
      case 4:
        return (
          formData.department &&
          formData.province &&
          formData.district &&
          archive
        );
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (isStepValid()) {
      setStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    // Here you would typically send the formData to your backend

    const form = new FormData();

    console.log(profileImage);

    if (typeof profileImage !== "string") {
      return;
    }

    if (formData.skills.length === 0) {
      return;
    }

    if (!image) {
      return;
    }

    if (!archive) {
      return;
    }
    
    form.set("image", image);
    form.set("profileImage", profileImage);
    form.set("firstName", formData.firstName);
    form.set("lastName", formData.lastName);
    form.set("documentId", formData.documentid);
    form.set("phoneNumber", formData.phoneNumber);
    form.set("email", user.email as string);
    form.set("description", formData.description);
    form.set("education", formData.education);
    form.set("career", formData.career);
    form.set("university", formData.university);
    form.set("codCip", formData.cipCode);
    form.set("skills", formData.skills.toString());
    form.set("yearsOfExperience", formData.yearsOfExperience);
    form.set(
      "lastJob",
      `${formData.lastJobCompany},${formData.lastJobPosition},${formData.lastJobStartDate},${formData.lastJobEndDate}`
    );
    form.set(
      "location",
      `${formData.department},${formData.province},${formData.district}`
    );
    form.set("resume", archive);

    const res = await fetch("/api/registermember", {
      method: "POST",
      body: form,
      // headers:{
      //   'Content-Type':'multipart/form-data'
      // }
    });

    const data = await res.json();
    console.log(data);

    console.log("Form submitted:", formData);
    // Reset form or redirect user after successful submission
  };

  const pageTitle = [
    "Informacion Personal",
    "Educacion y Habilidades",
    "Experiencia Laboral",
    "Localidad de origen",
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              {/* <Image
              height={150}
              width={100}
                className="h-8 w-auto"
                src="/placeholder.svg?height=32&width=32"
                alt="Company Logo"
              /> */}
            </div>
            <div className="text-xl font-semibold text-gray-900">
              Bienvenido a nuestra comunidad
            </div>
            <div className="flex items-center">
              {/* <User className="h-6 w-6 text-gray-500" /> */}
              <UserDropdown {...user}/>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-4xl">
          <CardHeader>
            <h3 className="text-2xl font-bold text-center text-gray-900">
              {pageTitle[step - 1]}
            </h3>
          </CardHeader>
          <CardBody>
            <div className="mb-4">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${(step / 4) * 100}%` }}
                ></div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 1 && (
                <>
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:space-x-4">
                      <div className="flex-1">
                        <label
                          aria-label="profile"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Imagen de Perfil
                        </label>
                        {!image ? (
                          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                            <div className="space-y-1 text-center">
                              <Upload className="mx-auto h-12 w-12 text-gray-400" />
                              <div className="flex text-sm text-gray-600">
                                <label
                                  aria-label="profileImage"
                                  className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                                >
                                  <span>Upload</span>
                                  <input
                                    id="profileImage"
                                    name="profileImage"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="sr-only"
                                  />
                                </label>
                                <p className="pl-1">o drag and drop</p>
                              </div>
                              <p className="text-xs text-gray-500">
                                PNG, JPG, GIF up to 10MB
                              </p>
                            </div>
                          </div>
                        ) : (
                          
                            <div className="mt-1 flex justify-center">
                              <div className="relative">
                                <Image
                                  src={URL.createObjectURL(image)}
                                  alt="Profile Preview"
                                  height={150}
                                  width={100}
                                  className="w-32 h-32 object-cover rounded-full"
                                />
                                <button
                                  type="button"
                                  onClick={handleDeleteImage}
                                  className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white rounded-full p-1"
                                >
                                  <X className="h-4 w-4" />
                                </button>
                              </div>
                            </div>
                          
                        )}
                      </div>
                      <div className="flex-1 space-y-4">
                        <div>
                          <label
                            aria-label="firstName"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Nombres
                          </label>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <label
                            aria-label="lastName"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Apellidos
                          </label>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <Select
                          isRequired
                          onChange={(
                            e: React.ChangeEvent<HTMLSelectElement>
                          ) => {
                            handleSelectChange("education", e.target.value);
                          }}
                        >
                          <SelectItem key="dni">DNI</SelectItem>
                          <SelectItem key="passport">Pasaporte</SelectItem>
                        </Select>
                      </div>
                      <div>
                        <Input
                          id="documentid"
                          name="documentid"
                          value={formData.documentid}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          aria-label="phoneNumber"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Telefono
                        </label>
                        <Input
                          id="phoneNumber"
                          name="phoneNumber"
                          type="tel"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      {/* <div>
                        <label
                          aria-label="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          defaultValue={user.email as string}
                          isDisabled
                          className="mt-1"
                        />
                      </div> */}
                    </div>
                    <div>
                      <label
                        aria-label="description"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Descripcion
                      </label>
                      <Textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        rows={3}
                      />
                    </div>
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <div className="space-y-4">
                    <div>
                      <label
                        aria-label="education"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Educacion
                      </label>
                      <Select
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                          handleSelectChange("education", e.target.value);
                        }}
                      >
                        {/* <SelectTrigger className="w-full mt-1">
                          <SelectValue placeholder="Select your education level" />
                        </SelectTrigger> */}

                        <SelectItem key="high_school">Secundaria Completa</SelectItem>
                        <SelectItem key="bachelors">
                          Bachiller
                        </SelectItem>
                        <SelectItem key="masters">Colegiatura</SelectItem>
                        <SelectItem key="phd">Maestria</SelectItem>
                        <SelectItem key="doctorado">Doctorado</SelectItem>
                      </Select>
                    </div>
                    {formData.education &&
                      formData.education !== "" &&
                      formData.education !== "Secundaria Completa" && (
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                          <div>
                            <label
                              aria-label="career"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Carrera
                            </label>
                            <Input
                              id="career"
                              name="career"
                              value={formData.career}
                              onChange={handleInputChange}
                              required
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <label
                              aria-label="university"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Universidad
                            </label>
                            <Input
                              id="university"
                              name="university"
                              value={formData.university}
                              onChange={handleInputChange}
                              required
                              className="mt-1"
                            />
                          </div>
                          <div>
                            <label
                              aria-label="cipCode"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Codigo CIP
                            </label>
                            <Input
                              id="cipCode"
                              name="cipCode"
                              value={formData.cipCode}
                              onChange={handleInputChange}
                              required
                              className="mt-1"
                            />
                          </div>
                        </div>
                      )}
                    <div>
                      <label
                        aria-label="skills"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Habilidades
                      </label>
                      <div className="mt-1 flex">
                        <Input
                          id="skills"
                          value={currentSkill}
                          onChange={(e) => setCurrentSkill(e.target.value)}
                          className="flex-grow"
                          placeholder="Enter a skill"
                        />
                        <Button
                          type="button"
                          onClick={handleAddSkill}
                          className="ml-2"
                        >
                          Agregar
                        </Button>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {formData.skills.map(
                          (skill, index) =>
                            skill !== "" && (
                              <Chip
                                key={index}
                                // variant="secondary"
                                className="text-sm"
                                onClose={() => handleRemoveSkill(skill)}
                              >
                                {skill}
                              </Chip>
                            )
                        )}
                      </div>
                    </div>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <div className="space-y-4">
                    <div>
                      <label
                        aria-label="yearsOfExperience"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Años de Experiencia
                      </label>
                      <Input
                        id="yearsOfExperience"
                        name="yearsOfExperience"
                        type="number"
                        min={0}
                        max={35}
                        value={formData.yearsOfExperience}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <label
                        aria-label="lastJobCompany"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Ultimo Lugar de Trabajo
                      </label>
                      <Input
                        id="lastJobCompany"
                        name="lastJobCompany"
                        value={formData.lastJobCompany}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <label
                        aria-label="lastJobPosition"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Posicion Ocupada
                      </label>
                      <Input
                        id="lastJobPosition"
                        name="lastJobPosition"
                        value={formData.lastJobPosition}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          aria-label="lastJobStartDate"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Fecha de Inicio
                        </label>
                        <Input
                          id="lastJobStartDate"
                          name="lastJobStartDate"
                          type="date"
                          value={formData.lastJobStartDate}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <label
                          aria-label="lastJobEndDate"
                          className="block text-sm font-medium text-gray-700"
                        >
                          End Date
                        </label>
                        <Input
                          id="lastJobEndDate"
                          name="lastJobEndDate"
                          type="date"
                          value={formData.lastJobEndDate}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}

              {step === 4 && (
                <>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                      <div>
                        <label
                          aria-label="department"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Departamento
                        </label>
                        <Select
                          onChange={(e) =>
                            handleSelectChange("department", e.target.value)
                          }
                        >
                          {departments.map((dept, index) => (
                            <SelectItem key={index} value={dept}>
                              {dept}
                            </SelectItem>
                          ))}
                        </Select>
                      </div>
                      <div>
                        <label
                          aria-label="province"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Provincia
                        </label>
                        <Select
                          onChange={(e) =>
                            handleSelectChange("province", e.target.value)
                          }
                          disabled={!formData.department}
                        >
                          {provinces.map((prov, index) => (
                            <SelectItem key={index} value={prov}>
                              {prov}
                            </SelectItem>
                          ))}
                        </Select>
                      </div>
                      <div>
                        <label
                          aria-label="district"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Distrito
                        </label>
                        <Select
                          onChange={(e) =>
                            handleSelectChange("district", e.target.value)
                          }
                          disabled={!formData.province}
                        >
                          {districts.map((dist, index) => (
                            <SelectItem key={index} value={dist}>
                              {dist}
                            </SelectItem>
                          ))}
                        </Select>
                      </div>
                    </div>
                    {/* <div>
                      <label
                        aria-label="resume"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Resume (PDF)
                      </label>
                      <Input
                        id="resume"
                        name="resume"
                        type="file"
                        accept=".pdf"
                        onChange={handleResumeUpload}
                        required
                        className="mt-1"
                      />
                    </div> */}
                    <div>
                      <label
                        htmlFor="resume"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Curriculum (PDF)
                      </label>
                      {!archive ? (
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                          <div className="space-y-1 text-center">
                            <Upload className="mx-auto h-12 w-12 text-gray-400" />
                            <div className="flex text-sm text-gray-600">
                              <label
                                htmlFor="resume"
                                className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                              >
                                <span>Upload </span>
                                <input
                                  id="resume"
                                  name="resume"
                                  type="file"
                                  accept=".pdf"
                                  onChange={handleResumeUpload}
                                  className="sr-only"
                                />
                              </label>
                              <p className="pl-1"> o drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">
                              PDF up to 10MB
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="mt-1 flex items-center space-x-2">
                          <FileText className="h-8 w-8 text-blue-500" />
                          <span className="text-sm text-gray-500">
                            {archive.name}
                          </span>

                          <button
                            type="button"
                            onClick={handleDeleteResume}
                            className="text-red-500 hover:text-red-700 "
                          >
                            <X className="h-5 w-5" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}
            </form>
          </CardBody>
          <CardFooter className="flex justify-between">
            {step > 1 && (
              <Button onClick={handlePrevious} variant="faded">
                <ArrowLeft className="mr-2 h-4 w-4" /> Atras
              </Button>
            )}
            {step < 4 ? (
              <Button
                onClick={handleNext}
                disabled={!isStepValid()}
                className="ml-auto"
              >
                Siguiente <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button
                type="submit"
                onClick={handleSubmit}
                disabled={!isStepValid()}
                className="ml-auto"
              >
                Registrarme
              </Button>
            )}
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
