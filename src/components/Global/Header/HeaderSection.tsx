import { auth } from "../../../../auth";
import HeaderNavBar from "./HeaderNavBar";
// import { useSession } from "next-auth/react";

export default async function HeaderSection() {
  const session = await auth();

  return (
    <>
      <HeaderNavBar
        isLoggedIn={session ? true : false}
        userEmail={session?.user.email as string}
        userImage={session?.user.image as string}
        userRole={session?.user.role as string}
      />
    </>
  );
}
