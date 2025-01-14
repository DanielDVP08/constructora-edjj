import { redirect } from "next/navigation";
import { departaments } from "@/components/User/RegistrationMember/data";
import { GalleryBussiness } from "@/components/Business/GalleryBusiness/GalleryBusiness";
import HeaderSection from "@/components/Global/Header/HeaderSection";

export default async function page({
  params,
}: {
  params: Promise<{ departament: string }>;
}) {
  const departament = (await params).departament;

  return (
    <>
      <HeaderSection />
      {departaments.includes(departament.replaceAll("_"," ")) ? (
        <GalleryBussiness departament={departament} />
      ) : (
        redirect("/")
      )}
    </>
    // <div>{categoria}</div>
  );
}
