import { auth } from "../../auth";

export async function getUserSession() {
  const session = await auth();

  const User = {
    name: session?.user.name,
    email: session?.user.email,
    image: session?.user.image,
    role: session?.user.role,
  };
  return User
}
