"use client"

import Image from "next/image";
// import { Image } from "@nextui-org/react";
import { User, CreditCard } from "lucide-react";

interface SidebarProps {
  selectedPage: string;
  setSelectedPage: (page: string) => void;
  imageUser: string;
}

export default function Sidebar({
  selectedPage,
  setSelectedPage,
  imageUser,
}: SidebarProps) {
  const pages = [
    { id: "profile", title: "Mi Perfil", icon: User },
    { id: "subscription", title: "Membresia", icon: CreditCard },
    // { id: "changePassword", title: "Cambiar Contraseña", icon: Lock },
  ];

  return (
    <div className="w-full md:w-64 space-y-4">
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <Image
          src={imageUser}
          alt="Profile"
          width={256}
          height={256}
          // fill
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="flex flex-col md:flex-col space-y-2 md:space-x-0 md:space-y-2">
        {pages.map((page) => (
          <button
            key={page.id}
            onClick={() => setSelectedPage(page.id)}
            className={`w-full p-4 text-left rounded-lg transition-colors flex items-center ${
              selectedPage === page.id
                ? "bg-blue-500 text-white"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            <page.icon className="mr-2 h-5 w-5" />
            {page.title}
          </button>
        ))}
      </div>
    </div>
  );
}
