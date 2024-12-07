import db from "@/libs/bd";

import { SearchMember } from "./SearchMember";
import { auth } from "../../../../auth";

export async function GalleryProfile({ categoria }: { categoria: string }) {
  console.log(categoria);
  const members = await db.member.findMany({
    where: {
      category: categoria,
    },
  });

  const session = await auth();

  const emailUser = session?.user.email as string;
  const imageUser = session?.user.image as string;
  const roleUser = session?.user.role as string;

  const joinUser = roleUser === "user" ? true : false;

  return (
    <>
      <SearchMember
        members={members}
        emailUser={emailUser}
        imageUser={imageUser}
        roleUser={roleUser}
        isUser={joinUser}
      />
    </>
  );
}
