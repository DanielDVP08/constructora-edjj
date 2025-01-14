import { auth } from "../../../../../auth";
import { redirect } from "next/navigation";
import db from "@/libs/bd";
import DashboardUser from "@/components/User/DashBoard/DashBoardUser";

export default async function page() {
  const session = await auth();

  const profileMember = await db.member.findFirst({
    where: {
      email: session?.user.email as string,
    },
  });

  return (
    <>
      {!session ||
      session.user.role === "user" ||
      session.user.role === "user_business" ? (
        redirect("/")
      ) : (
          <DashboardUser
            emailUser={session?.user.email as string}
            imageUser={session?.user.image as string}
            roleUser={session?.user.role as string}
            profileMember={profileMember}
          />
      )}
    </>
  );
}
