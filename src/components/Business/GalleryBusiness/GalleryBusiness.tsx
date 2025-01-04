import db from "@/libs/bd";
import { SearchBusiness } from "./SearchBusiness";

// import { SearchMember } from "./SearchMember";
// import { auth } from "../../../../auth";

export async function GalleryBussiness({
  departament,
}: {
  departament: string;
}) {
  const business = await db.business.findMany({
    where: {
      department: departament,
    },
  });

  return (
    <>
      <SearchBusiness business={business} />
      {/* {business && (
        <div>
          {business.map((business, index) => (
            <p key={index}>{business.businessname}</p>
          ))}
        </div>
      )} */}
    </>
  );
}
