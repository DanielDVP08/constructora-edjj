import HeroSection from "@/components/Global/HeroSection/HeroSection";
// import Header from "@/components/Header/Header";
// import { auth } from "../../auth";
// import HeaderNavBar from "@/components/Header/HeaderNavBar";
// import ProjectCarousel from "@/components/ProjectCarousel/ProjectCarousel";
// import ServicesSection from "@/components/ServicesSection/ServicesSection";
// import LandingPage from "@/components/HeroSection/ProbanLanding";

export default async function Home() {
  // const session = await auth();

  return (
    <>
      <HeroSection />
      {/* <HeaderNavBar
        isLoggedIn={session ? true : false}
        userEmail={session?.user.email as string}
        userImage={session?.user.image as string}
        userRole={session?.user.role as string}
      /> */}
      {/* <Header /> */}
      {/* <ProjectCarousel /> */}
      {/* <ServicesSection /> */}
      {/* <LandingPage/> */}
    </>
  );
}
