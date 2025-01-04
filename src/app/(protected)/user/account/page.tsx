import ProfileAccount from "@/components/User/Account/ProfileAccount";
import { auth } from "../../../../../auth";
import { redirect } from "next/navigation";
// import { UpdateSession } from "../../../../../actions/auth-action";

export default async function page() {
  const session = await auth();

  // if (session) {
  //   UpdateSession();
  // }

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
