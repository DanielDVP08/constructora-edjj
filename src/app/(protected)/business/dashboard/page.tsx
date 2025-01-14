import DashboardBus from "@/components/Business/DashBoard/DashboardBus";
import { redirect } from "next/navigation";
import { auth } from "../../../../../auth";
import db from "@/libs/bd";

export default async function page() {
  const session = await auth();

  const profileBusiness = await db.business.findFirst({
    where: {
      useremail: session?.user.email as string,
    },
  });

  return (
    <>
      {!session ||
      session.user.role === "user" ||
      session.user.role === "member" ? (
        redirect("/")
      ) : (
        <DashboardBus
          emailUser={session?.user.email as string}
          imageUser={session?.user.image as string}
          roleUser={session?.user.role as string}
          profileBusiness={profileBusiness}
        />
      )}
    </>
  );
}
