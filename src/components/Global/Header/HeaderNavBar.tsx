"use client";

import { useState, useEffect } from "react";
import {
  ChevronDown,
  HardHat,
  Menu,
  Package,
  ShoppingBag,
  Store,
  X,
} from "lucide-react";
// import Image from "next/image";
// import  from "next/link";
import { UserDropdown } from "./UserDropdown";
import { Button, Link } from "@nextui-org/react";
import { CldImage } from "next-cloudinary";

interface HeaderProps {
  isLoggedIn: boolean;
  userEmail: string | null;
  userImage: string | null;
  userRole: string | null;
}

export default function HeaderNavBar({
  isLoggedIn,
  userEmail,
  userImage,
  userRole,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  // const logo="https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733346062/logojj_ou1syp.png"

  //   const closeServices = () => {
  //     setIsServicesOpen(false);
  //   };

  return (
    <nav className="bg-yelow-500 shadow-md py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {isMobile && (
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-yelow-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            )}
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-gray-800">
                {/* Logo */}
                {/* <Image
                  src="/assets/logojj.png"
                  // src={logo}
                  // src={new URL("https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733346062/logojj_ou1syp.png")}
                  // src={URL.createObjectURL("")}
                  width={120}
                  height={42}
                  alt="Logo Constructora"
                /> */}

                <CldImage
                  alt="Logo Constructora"
                  // src="https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733346062/logojj_ou1syp.png"
                  src="https://res.cloudinary.com/dqpc8hl3r/image/upload/v1736817428/LOGOBLANCO_t8sl2i.png"
                  width={120}
                  height={42}
                  crop={{
                    type: "fit",
                    source: true,
                  }}
                />
              </Link>
            </div>
          </div>
          {!isMobile && (
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="hover:text-yellow-500 transition-colors text-white"
                  //   className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Inicio
                </Link>
                <Link
                  href="/about"
                  className="hover:text-yellow-500 transition-colors text-white"
                >
                  Nosotros
                </Link>
                <Link
                  href="/proyectos"
                  className="hover:text-yellow-500 transition-colors text-white"
                >
                  Proyectos
                </Link>

                {isLoggedIn ? (
                  <div className="relative group">
                    <button
                      className="text-white hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium inline-flex items-center"
                      onClick={toggleServices}
                      //   onMouseEnter={() => setIsServicesOpen(true)}
                      //   onMouseLeave={() => setIsServicesOpen(false)}
                      aria-expanded={isServicesOpen}
                    >
                      Servicios
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {isServicesOpen && (
                      <div
                        className="absolute z-10 left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        <div
                          className="py-1"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="options-menu"
                        >
                          <Link
                            href="/servicios/products"
                            className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                          >
                            <ShoppingBag />{" "}
                            <span className="ml-2">Productos en Venta</span>
                          </Link>
                          <Link
                            href="/servicios/professionals"
                            className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                          >
                            <HardHat />
                            <span className="ml-2">
                              Profesionales Confiables
                            </span>
                          </Link>
                          <Link
                            href="/servicios/sales"
                            className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                          >
                            <Package />
                            <span className="ml-2">Ventas</span>
                          </Link>
                          <Link
                            href="/business"
                            className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                          >
                            <Store />
                            <span className="ml-2">Distribuidores</span>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href="/servicios"
                    className="hover:text-yellow-500 transition-colors text-white"
                  >
                    Servicios
                  </Link>
                )}
              </div>
            </div>
          )}
          <div>
            {isLoggedIn ? (
              <UserDropdown
                emailUser={userEmail as string}
                imageUser={userImage as string}
                roleUser={userRole as string}
              />
            ) : (
              <Button
                as={Link}
                color="primary"
                href="/signin"
                variant="flat"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Acceder
              </Button>
            )}
          </div>
        </div>
      </div>
      {isMobile && isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base"
            >
              Inicio
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base"
            >
              Nosotros
            </Link>
            <Link
              href="/proyectos"
              className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base"
            >
              Proyectos
            </Link>

            {isLoggedIn ? (
              <div className="relative">
                <button
                  className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base w-full text-left flex justify-between items-center"
                  onClick={toggleServices}
                  aria-expanded={isServicesOpen}
                >
                  Servicios
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transform ${
                      isServicesOpen ? "rotate-180" : ""
                    } transition-transform duration-200`}
                  />
                </button>
                {isServicesOpen && (
                  <div className="pl-4">
                    <Link
                      href="/servicios/products"
                      className="block px-3 py-2 rounded-md text-base text-white hover:text-yellow-500"
                    >
                      Productos
                    </Link>
                    <Link
                      href="/servicios/professionals"
                      className="block px-3 py-2 rounded-md text-base text-white hover:text-yellow-500"
                    >
                      Profesionales Confiables
                    </Link>
                    <Link
                      href="/servicios/sales"
                      className="block px-3 py-2 rounded-md text-base text-white hover:text-yellow-500"
                    >
                      Ventas
                    </Link>
                    <Link
                      href="/business"
                      className="block px-3 py-2 rounded-md text-base text-white hover:text-yellow-500"
                    >
                      Distribuidores
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/servicios"
                className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-medium"
              >
                Servicios
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
