import HeroProfessionals from "@/components/Covers/HeroProfessionals/HeroProfessionals";
import { auth } from "../../../../auth";
import LandingProfessionals from "@/components/Landings/LandingProfessionals/LandingProfessionals";
import HeaderSection from "@/components/Global/Header/HeaderSection";

export default async function Professionals() {
  const session = await auth();


  return (
    <>
      <HeaderSection />

      {!session?.user ? (
        <HeroProfessionals />
      ) : (
        <LandingProfessionals />
      )}
    </>
  );
}
