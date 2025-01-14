"use client";

// import { UserDropdown } from "@/components/Global/Header/UserDropdown";
// import { Link } from "lucide-react";
// import { CldImage } from "next-cloudinary";
import PasswordChangeForm from "./PasswordChangeForm";

interface ChangePasswordProps {
  emailUser: string;
  passUser: string;
}

export default function ChangePassword({
  emailUser,
  passUser,
}: ChangePasswordProps) {
  return (
    <div className="min-h-screen bg-indigo-950 flex flex-col">
      {/* navegacion */}
      {/* <nav className="bg-white shadow-sm">
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
            <div className="flex items-center">
              <UserDropdown
                emailUser={emailUser}
                imageUser={imageUser}
                roleUser={roleUser}
              />
            </div>
          </div>
        </div>
      </nav> */}

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
          <PasswordChangeForm email={emailUser} pass={passUser} />
        </div>
      </main>
    </div>
  );
}
