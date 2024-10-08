import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import ProjectCarousel from "@/components/ProjectCarousel/ProjectCarousel";
import ServicesSection from "@/components/ServicesSection/ServicesSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ProjectCarousel />
      <ServicesSection />
    </>
  );
}
