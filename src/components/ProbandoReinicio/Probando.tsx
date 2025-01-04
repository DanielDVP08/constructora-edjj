"use client";

import { signIn, signOut } from "next-auth/react";
// import { useRouter } from "next/navigation";
import { updateSession } from "../../../actions/auth-action";


export default function Probando() {

    // const router=useRouter()

  const handleOutClick = async () => {
    await signOut();
  };
  const handleInClick = async () => {
    const res = await signIn("credentials", {
      email: "daniel_9816@hotmail.com",
      password: "amorcita2407",
      redirect: false,
      // redirectTo: "/dashboard",
    });
    console.log(res);
    // if (res?.error) {
    //   setError(res.error);
    // } else {
    //   router.push("/");
    //   // redirect("/")
    // }
  };

  const handleResetClick = async () => {
    // await signOut({
    //   redirect: false,
    // });
    // const res = await signIn("credentials", {
    //   email: "daniel_9816@hotmail.com",
    //   password: "amorcita2407",
    //   redirect: false,
    //   // redirectTo: "/dashboard",
    // });

    // console.log(res);

    await updateSession("daniel_9816@hotmail.com","amorcita2407")

    // router.push("/")

  };

  return (
    <>
      <button onClick={handleOutClick} className="text-white p-10">
        OUT
      </button>
      <button onClick={handleInClick} className="text-white p-10">
        LOGIN
      </button>
      <button onClick={handleResetClick} className="text-white p-10">
        REINICIO
      </button>
    </>
  );
}
