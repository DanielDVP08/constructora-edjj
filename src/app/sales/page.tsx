import HeroSales from "@/components/HeroSales/HeroSales";
// import HeroSection from "@/components/HeroSection/HeroSection";

import { auth } from "../../../auth";
import Header from "@/components/Header/Header";
// import SalesSend from "@/components/SalesSend/SalesSend";
// import SendSales from "@/components/SendSales/SendSales";
import Probando from "@/components/SendSales/Probando";

export default async function Sales() {
  const session = await auth();

  return (
    <>
      <Header />
      {!session?.user ? (
        <>
          <HeroSales />
        </>
      ) : (
        <>
          {/* <HeroSection /> */}
          {/* <SalesSend /> */}
          
          {/* <SendSales /> */}
          <Probando/>
        </>
      )}
    </>
  );
}
