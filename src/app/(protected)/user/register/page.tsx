import ProfileRegistration from "@/components/User/RegisterMember/ProfileRegistration";
import { auth } from "../../../../../auth";
import { redirect } from "next/navigation";

export default async function Register() {
  const session = await auth();

  return (
    <>
      {!session || session.user.role==="member" ? redirect("/") : <ProfileRegistration
        emailUser={session?.user.email as string}
        imageUser={session?.user.image as string}
      />}
    </>
  );
}
