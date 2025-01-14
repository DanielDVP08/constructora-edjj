import { auth } from "../../../../../auth";
import { redirect } from "next/navigation";
import Registration from "@/components/User/RegistrationMember/Registration";

export default async function Register() {
  const session = await auth();

  return (
    <>
      {!session ||
      session.user.role === "member" ||
      session.user.role === "member_business" ? (
        redirect("/")
      ) : (
        <Registration
          emailUser={session?.user.email as string}
          imageUser={session?.user.image as string}
          roleUser={session?.user.role as string}
        />
      )}
    </>
  );
}
