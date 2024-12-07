import HeroSales from "@/components/Covers/HeroSales/HeroSales";
// import HeroSection from "@/components/HeroSection/HeroSection";

import { auth } from "../../../../auth";
// import Header from "@/components/Header/Header";
// import SalesSend from "@/components/SalesSend/SalesSend";
// import SendSales from "@/components/SendSales/SendSales";
// import Probando from "@/components/SendSales/Probando";
import LandingSales from "@/components/Landings/LandingSales/LandingSales";
import HeaderSection from "@/components/Global/Header/HeaderSection";

export default async function Sales() {
  const session = await auth();

  const User={
    name:session?.user.name as string,
    email: session?.user.email as string,
  }

  return (
    <>
      <HeaderSection />
      {!session?.user ? (
        <>
          <HeroSales />
        </>
      ) : (
        <>
          <LandingSales name={User.name} email={User.email} />
        </>
      )}
    </>
  );
}
