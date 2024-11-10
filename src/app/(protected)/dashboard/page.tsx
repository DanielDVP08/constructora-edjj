import NavUser from "@/components/NavUser/NavUser";
// import { auth } from "../../../../auth";

export default async function Page() {
  // const session = await auth();

  // if (!session) {
  //   return <div className="text-red-500">Not authenticated</div>;
  // }
  
  // const User={
  //   name:session.user.name,
  //   email:session.user.email,
  //   image:session.user.image,
  //   role:session.user.role,
  // }

  return (
    <>
      {/* <pre>{session}</pre> */}

      {/* <NavUser {...User}/> */}
      <NavUser/>

      {/* <pre className="text-red-500">{JSON.stringify(session, null, 2)}</pre> */}
    </>
  );
}
