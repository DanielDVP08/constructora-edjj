import { auth } from "../../../../auth";

export default async function Member() {
  const session = await auth();

  if (session?.user.role !== "MEMBER") {
    return <div className="text-orange-500">No eres administrador</div>;
  }

  return (
    <>
      <div className="text-orange-500">Hola admin</div>
    </>
  );
}
