import {GalleryProfile} from "@/components/GalleryProfile/GalleryProfile";
import Header from "@/components/Header/Header";
import HeroProfessionals from "@/components/HeroProfessionals/HeroProfessionals";
import { auth } from "../../../auth";

export default async function Professionals() {
  
  const session = await auth();
  
  return (
    <>
      <Header />

      {!session?.user ?(
        <HeroProfessionals />

      ) :(
        <GalleryProfile />

      )}

    </>
  );
}
