import FormSing from "@/components/Auth/FormSinginup/FormSinginup";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";

export default async function SingIn({
  searchParams,
}: {
  searchParams: { verified: string };
}) {
  const session = await auth();

  const isVerified = searchParams.verified === "true";

  return (
    <>
      {session ? redirect("/") : <FormSing isVerified={isVerified} />}
    </>
  );
}
