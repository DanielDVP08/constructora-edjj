import { redirect } from "next/navigation";
import { auth } from "../../../../../auth";

import db from "@/libs/bd";
import ChangePassword from "@/components/Covers/ChangePassword/ChangePassword";
import HeaderSection from "@/components/Global/Header/HeaderSection";

export default async function page() {
  const session = await auth();

  const profileUser = await db.user.findFirst({
    where: {
      email: session?.user.email as string,
    },
  });

  return (
    <>
      {!session ? (
        redirect("/")
      ) : (
        <>
          <HeaderSection />
          <ChangePassword
            //   imageUser={session?.user.image as string}
            //   roleUser={session?.user.role as string}
            emailUser={session?.user.email as string}
            passUser={profileUser?.password as string}
          />
        </>
      )}
    </>
  );
}
