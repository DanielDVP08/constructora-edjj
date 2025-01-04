import BusinessRegistration from "@/components/Business/BusinessRegistration/BusinessRegistration";
import { auth } from "../../../../../auth";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await auth();
  return (
    <>
      {!session || session.user.role === "user_business" || session.user.role === "member_business" ? (
        redirect("/signin")
      ) : (
        <BusinessRegistration
          emailUser={session?.user.email as string}
          imageUser={session?.user.image as string}
          roleUser={session?.user.role as string}
        />
      )}
    </>
  );
}