"use client";

import { useState } from "react";
import { FieldValues } from "react-hook-form";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import EmailChangePassword from "./steps/EmailChangePassword";
import CodeConfirmation from "./steps/CodeConfirmation";
import NewPassword from "./steps/NewPassword";

const steps = [
  { title: "Correo Electronico", icon: "book" },
  { title: "Codigo de Verificacion", icon: "lock-keyhole" },
  { title: "Cambiar Constraseña", icon: "book" },
];

export default function PasswordRecovery() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleNext = (data: FieldValues) => {
    setFormData({ ...formData, ...data });
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  //   const handlePrevious = () => {
  //     setCurrentStep((prev) => Math.max(prev - 1, 0));
  //   };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <EmailChangePassword onNext={handleNext} data={formData} />;
      case 1:
        return <CodeConfirmation onNext={handleNext} data={formData} />;
      case 2:
        return <NewPassword data={formData} />;
      default:
        return null;
    }
  };

  return (
    // <div className="container mx-auto px-4 py-8">

    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* navegacion */}
      <nav className="absolute bg-transparent shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/">
              <div className="flex-shrink-0">
                <CldImage
                  alt="Logo Constructora"
                  src="https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733346062/logojj_ou1syp.png"
                  height={150}
                  width={100}
                  crop={{
                    type: "fit",
                    source: true,
                  }}
                />
              </div>
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow flex-col flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <section className="w-full max-w-4xl p-8">
          <div className="mt-8">{renderStep()}</div>
        </section>
      </main>
    </div>
  );
}
