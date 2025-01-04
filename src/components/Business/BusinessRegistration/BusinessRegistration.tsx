"use client";

import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { Card } from "@nextui-org/react";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import ProgressBar from "../../User/RegistrationMember/ProgressBar";
// import ProgressBar from "./ProgressBar";
import BusinessInfo from "./steps/BusinessInfo";
import ContactInfo from "./steps/ContactInfo";
import CoverPhoto from "./steps/CoverPhoto";
import ProductsCategories from "./steps/ProductsCategories";
import Payment from "../../User/RegistrationMember/steps/Payment";
import LoginConfirmation from "./steps/LoginConfirmation";
import { UserDropdown } from "../../Global/Header/UserDropdown";
import CheckBusiness from "./steps/CheckBusiness";

const steps = [
  { title: "Informacion General", icon: "building" },
  { title: "Informacion de Contacto", icon: "phone" },
  { title: "Imagen de Portada", icon: "image" },
  { title: "Categorias de Productos", icon: "package" },
  { title: "Suscripcion", icon: "credit-card" },
  { title: "Confirmar Registro", icon: "log-in" },
  { title: "Felicidades", icon: "check" },
];

export default function BusinessRegistration({
  emailUser,
  imageUser,
  roleUser,
}: {
  emailUser: string;
  imageUser: string;
  roleUser: string;
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
          <BusinessInfo
            onNext={handleNext}
            data={formData}
            userEmail={emailUser}
            roleUser={roleUser}
          />
        );
      case 1:
        return (
          <ContactInfo
            onNext={handleNext}
            onPrevious={handlePrevious}
            data={formData}
          />
        );
      case 2:
        return (
          <CoverPhoto
            onNext={handleNext}
            onPrevious={handlePrevious}
            data={formData}
          />
        );
      case 3:
        return (
          <ProductsCategories
            onNext={handleNext}
            onPrevious={handlePrevious}
            data={formData}
          />
        );
      case 4:
        return <Payment onNext={handleNext} onPrevious={handlePrevious} />;
      case 5:
        return (
          <LoginConfirmation
            onNext={handleNext}
            onPrevious={handlePrevious}
            data={formData}
          />
        );
      case 6:
        return <CheckBusiness data={formData} />;
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
                roleUser={roleUser}
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
