"use client";

import { useState } from "react";
import ProgressBar from "./ProgressBar";
import { FieldValues } from "react-hook-form";
import PersonalInfo from "./steps/PersonalInfo";
import Education from "./steps/Education";
import Experience from "./steps/Experience";
import Payment from "./steps/Payment";
import Login from "./steps/Login";
import { Card } from "@nextui-org/react";
import { UserDropdown } from "../../Global/Header/UserDropdown";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import Location from "./steps/Location";

const steps = [
  { title: "Informacion", icon: "user" },
  { title: "Educacion", icon: "book" },
  { title: "Experiencia", icon: "briefcase" },
  { title: "Localidad", icon: "map-pin" },
  { title: "Pago", icon: "credit-card" },
  { title: "Confirmar", icon: "log-in" },
];

export default function Registration({
  emailUser,
  imageUser,
}: {
  emailUser: string;
  imageUser: string;
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleNext = (data: FieldValues) => {
    setFormData({ ...formData, ...data });
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <PersonalInfo
            onNext={handleNext}
            data={formData}
            userEmail={emailUser}
          />
        );
      case 1:
        return (
          <Education
            onNext={handleNext}
            onPrevious={handlePrevious}
            data={formData}
          />
        );
      case 2:
        return (
          <Experience
            onNext={handleNext}
            onPrevious={handlePrevious}
            data={formData}
          />
        );
      case 3:
        return (
          <Location
            onNext={handleNext}
            onPrevious={handlePrevious}
            data={formData}
          />
        );
      case 4:
        return <Payment onNext={handleNext} onPrevious={handlePrevious} />;
      case 5:
        return <Login onPrevious={handlePrevious} data={formData} />;
      default:
        return null;
    }
  };

  return (
    // <div className="container mx-auto px-4 py-8">

    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* navegacion */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/">
              <div className="flex-shrink-0">
                {/* <Image
                  height={150}
                  width={100}
                  className="h-8 w-auto"
                  src="/assets/logojj.png"
                  alt="Company Logo"
                /> */}
                <CldImage
                  alt="Company Logo"
                  src="https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733346062/logojj_ou1syp.png"
                  height={150}
                  width={100}
                  crop={{
                    type: "fit",
                    source: true,
                  }}
                  className="h-8 w-auto"
                />
              </div>
            </Link>
            <div className="text-xl font-semibold text-gray-900">
              Bienvenido a nuestra comunidad
            </div>
            <div className="flex items-center">
              {/* <User className="h-6 w-6 text-gray-500" /> */}
              <UserDropdown
                emailUser={emailUser}
                imageUser={imageUser}
                roleUser="user"
              />
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow flex-col flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl mb-8">
          <ProgressBar steps={steps} currentStep={currentStep} />
        </div>
        <Card className="w-full max-w-4xl p-8">
          <div className="mt-8">{renderStep()}</div>
        </Card>
      </main>
    </div>
  );
}
