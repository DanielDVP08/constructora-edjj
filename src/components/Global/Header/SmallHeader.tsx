// import Image from "next/image";
import Link from "next/link";
import { UserDropdown } from "./UserDropdown";
import { CldImage } from "next-cloudinary";

export default function SmallHeader({
  emailUser,
  imageUser,
  roleUser,
}: {
  emailUser: string;
  imageUser: string;
  roleUser: string;
}) {
  return (
    <>
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
            <div className="text-xl font-semibold text-gray-900"></div>
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
    </>
  );
}
