"use client";

import React, { ChangeEvent, useState } from "react";
import { ArrowLeft, ArrowRight, Upload } from "lucide-react";
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

export default function RegisterMember() {
  const [step, setStep] = useState(1);
  const [profileImage, setProfileImage] = useState<string | ArrayBuffer | null>(
    null
  );
  const [archive, setArchive] = useState<File>();
  const [formData, setFormData] = useState({
    // profileImage: null,
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    education: "",
    career: "",
    university: "",
    yearsOfExperience: "",
    skills: [""],
    description: "",
    residence: "",
    // resume: File||null,
  });
  const [currentSkill, setCurrentSkill] = useState<string>();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfileImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleResumeUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];
    setArchive(file);
    // setFormData((prev) => ({ ...prev, resume: archive }));
    // if (file) {
    //   setFormData((prev) => ({ ...prev, resume: file }));
    // }
  };

  const handleAddSkill = () => {
    // if (currentSkill && !formData.skills.includes(currentSkill)) {
    //   setFormData((prev) => ({
    //     ...prev,
    //     skills: [...prev.skills, currentSkill],
    //   }));
    //   setCurrentSkill("");
    // }
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
          formData.email
        );
      case 2:
        return (
          formData.education &&
          (formData.education === "high_school" ||
            (formData.career && formData.university)) &&
          formData.yearsOfExperience &&
          formData.skills.length > 0
        );
      case 3:
        return formData.description && formData.residence && archive;
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

    const form = new FormData();

    console.log(profileImage);

    if (typeof profileImage !== "string") {
      return;
    }

    if (formData.skills.length === 0) {
      return;
    }

    if (!archive) {
      return;
    }

    form.set("profileImage", profileImage);
    form.set("firstname", formData.firstName);
    form.set("lastname", formData.lastName);
    form.set("phonenumber", formData.phoneNumber);
    form.set("email", formData.email);
    form.set("education", formData.education);
    form.set("career", formData.career);
    form.set("university", formData.university);
    form.set("yearsofexperience", formData.yearsOfExperience);
    form.set("skills", formData.skills.toString());
    form.set("description", formData.description);
    form.set("resume", archive);

    const res = await fetch("/api/registermember", {
      method: "POST",
      body: form,
    });

    const data = await res.json();
    console.log(data);

    // Here you would typically send the formData to your backend
    console.log("Form submitted:", formData);
    // Reset form or redirect user after successful submission
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <h3 className="text-2xl font-bold text-center text-gray-900">
            Create Your Work Profile
          </h3>
        </CardHeader>
        <CardBody>
          <div className="mb-4">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${(step / 3) * 100}%` }}
              ></div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="profileImage"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Profile Image
                    </label>
                    {!profileImage ? (
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                          <Upload className="mx-auto h-12 w-12 text-gray-400" />
                          <div className="flex text-sm text-gray-600">
                            <label
                              htmlFor="profileImage"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                            >
                              <span>Upload a file</span>
                              <input
                                id="profileImage"
                                name="profileImage"
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="sr-only"
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                    ) : (
                      profileImage &&
                      typeof profileImage === "string" && (
                        <Image
                          src={profileImage}
                          // src="/assets/HeroFondo.jpg"
                          height={150}
                          width={100}
                          alt="Profile Preview"
                          // className="w-16 h-16 rounded-full object-cover"
                          className="w-60 h-60 object-cover"
                        />
                      )
                    )}
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First Name
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
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last Name
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
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phoneNumber"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone Number
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
                    <div>
                      <label
                        htmlFor="email"
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
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="education"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Education
                    </label>
                    <Select
                      onChange={
                        (e: React.ChangeEvent<HTMLSelectElement>) => {
                          handleSelectChange("education", e.target.value);
                        }
                        // (value:string) =>
                        // handleSelectChange("education", value)
                      }
                      placeholder="Select your education level"
                      className="w-full mt-1"
                    >
                      <SelectItem key="high_school">High School</SelectItem>
                      <SelectItem key="bachelors">Bachelors Degree</SelectItem>
                      <SelectItem key="masters">Masters Degree</SelectItem>
                      <SelectItem key="phd">Ph.D.</SelectItem>
                    </Select>
                  </div>
                  {formData.education &&
                    formData.education !== "high_school" && (
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="career"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Career
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
                            htmlFor="university"
                            className="block text-sm font-medium text-gray-700"
                          >
                            University
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
                      </div>
                    )}
                  <div>
                    <label
                      htmlFor="yearsOfExperience"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Years of Experience
                    </label>
                    <Input
                      id="yearsOfExperience"
                      name="yearsOfExperience"
                      type="number"
                      min="0"
                      value={formData.yearsOfExperience}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="skills"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Main Skills
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
                        Add
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
                              {/* <button
                            type="button"
                            onClick={() => handleRemoveSkill(skill)}
                            className="ml-1 focus:outline-none"
                          >
                          <X className="h-3 w-3" />
                          </button> */}
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
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Description
                    </label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      rows={4}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="residence"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Place of Residence
                    </label>
                    <Input
                      id="residence"
                      name="residence"
                      value={formData.residence}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="resume"
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
                  </div>
                </div>
              </>
            )}
          </form>
        </CardBody>
        <CardFooter className="flex justify-between">
          {step > 1 && (
            <Button onClick={handlePrevious} variant="faded">
              <ArrowLeft className="mr-2 h-4 w-4" /> Previous
            </Button>
          )}
          {step < 3 ? (
            <Button
              onClick={handleNext}
              disabled={!isStepValid()}
              className="ml-auto"
            >
              Next <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button
              type="submit"
              onClick={handleSubmit}
              disabled={!isStepValid()}
              className="ml-auto"
            >
              Submit
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}

