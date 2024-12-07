import ProfileAccount from "@/components/User/Account/ProfileAccount";
import { auth } from "../../../../../auth";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await auth();

  const User = {
    email: session?.user.email,
  };
  return (
    <>
      {!session || session.user.role === "user" ? (
        redirect("/")
      ) : (
        <ProfileAccount emailUser={User.email as string} />
      )}
    </>
  );
}
