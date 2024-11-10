import ProfileRegistration from "@/components/RegisterMember/ProbandoV";
import { auth } from "../../../../../auth";
// import { getUserSession } from "@/libs/session";
// import RegisterMember from "@/components/RegisterMember/RegisterMember";


export default async function Register() {
  
  const session = await auth();

  const User = {
    name: session?.user.name,
    email: session?.user.email,
    image: session?.user.image,
    role: session?.user.role,
  };
  
  return (
    <>
      {/* <RegisterMember/> */}
      <ProfileRegistration {...User}/>
    </>
  )
}
