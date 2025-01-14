"use client";

import { useState } from "react";
import Sidebar from "./SideBarBus";
import { BusinessCard } from "../../../../types/business";
import { UserDropdown } from "@/components/Global/Header/UserDropdown";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import MyBusiness from "./tabs/MyBusiness";
import Subscription from "./tabs/SubscriptionBus";

interface DashBoardProps {
  emailUser: string;
  imageUser: string;
  roleUser: string;
  profileBusiness: BusinessCard | null;
}

export default function DashboardBus({
  emailUser,
  imageUser,
  roleUser,
  profileBusiness,
}: DashBoardProps) {
  const [selectedPage, setSelectedPage] = useState("myBusiness");

  return (
    <div className="min-h-screen bg-indigo-950">
      {/* navegacion */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/">
              <div className="flex-shrink-0">
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
            {/* <div className="text-xl font-semibold text-gray-900">
              Bienvenido a nuestra comunidad
            </div> */}
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

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <Sidebar
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            imageUser={imageUser}
          />
          <main className="flex-1">
            {selectedPage === "myBusiness" && (
              <MyBusiness busines={profileBusiness} />
            )}
            {selectedPage === "subscription" && (
              <Subscription busines={profileBusiness} />
            )}
            {/* {selectedPage === 'changePassword' && <ChangePassword />} */}
          </main>
        </div>
      </div>
    </div>
  );
}
