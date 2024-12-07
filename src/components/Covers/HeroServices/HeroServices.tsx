"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { CldImage } from "next-cloudinary";

const services = [
  {
    title: "Productos",
    description:
      "Embark on unforgettable journeys through pristine natural wonders. Our eco-tourism adventures offer immersive experiences that connect you with nature while promoting sustainable travel practices.",
    image: "/assets/HeroAbout.png",
    seeLink: "/servicios/products",
  },
  {
    title: "Perfiles Profesionales",
    description:
      "Dive deep into the rich tapestry of global cultures. Our heritage tours provide unique insights into local traditions, historical landmarks, and authentic experiences that bring history to life.",
    image: "/assets/HeroAbout.png",
    seeLink: "/servicios/professionals",
  },
  {
    title: "Ventas de Articulos",
    description:
      "Indulge in rejuvenating escapes at our world-class wellness retreats. Combining luxurious accommodations with holistic health programs, these getaways offer the perfect balance of relaxation and revitalization.",
    image: "/assets/HeroAbout.png",
    seeLink: "/servicios/sales",
  },
  {
    title: "Distribuidores Confiables",
    description:
      "Push your limits with our thrilling adventure sports packages. From mountain climbing to deep-sea diving, our expert-guided expeditions cater to both novices and seasoned thrill-seekers alike.",
    image: "/assets/HeroAbout.png",
    seeLink: "/servicios/distributors",
  },
];

export default function HeroServices() {
  
  return (
    <div className="min-h-screen bg-background">

      <CoverSection />

      {services.map((service, index) => (
        <ServiceSection key={index} service={service} index={index} />
      ))}
    </div>
  );
}

function CoverSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section id="cover" className="relative h-screen w-full">
      {/* <Image
        src="/assets/HeroAbout.png"
        alt="Wonders of the World"
        fill
        className="object-cover"
        priority
      /> */}

      <CldImage
        alt="Fondo"
        src="https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733346061/HeroAbout_vzxus7.png"
        // width={120}
        // height={42}
        fill
        priority
        crop={{
          type: "fit",
          source: true,
        }}
      />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
        className="absolute inset-0 bg-black/60 flex items-center justify-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
          Descubre Nuestros Excelentes Servicios
        </h1>
      </motion.div>
    </section>
  );
}

interface ServiceSectionProps {
  service: {
    title: string;
    description: string;
    image: string;
    seeLink: string;
  };
  index: number;
}

function ServiceSection({ service, index }: ServiceSectionProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      id={`service-${index + 1}`}
      ref={ref}
      // className="py-16 md:py-24 bg-amber-700"
      className={
        index % 2 === 0 ? "py-16 md:py-24 bg-amber-700" : "py-16 md:py-24"
      }
      // style={{ backgroundImage: "url(/assets/HeroAbout.png)" }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
          className={`grid md:grid-cols-2 gap-8 items-center ${
            index % 2 === 0 ? "md:grid-flow-col" : "md:grid-flow-col-dense"
          }`}
        >
          <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
            <motion.h2
              className="text-3xl font-bold mb-4 text-yellow-500"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.6, delay: 0.2 },
                },
              }}
            >
              {service.title}
            </motion.h2>
            <motion.p
              className="text-muted-foreground mb-6 text-white"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.6, delay: 0.4 },
                },
              }}
            >
              {service.description}
            </motion.p>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.6, delay: 0.6 },
                },
              }}
            >
              {/* <Button>Ver Mas</Button> */}
              <Button
                as={Link}
                color="warning"
                href={service.seeLink}
                variant="solid"
                size="md"
              >
                Ver Mas
              </Button>
            </motion.div>
          </div>
          <motion.div
            className={index % 2 === 0 ? "md:order-2" : "md:order-1"}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.8, delay: 0.2 },
              },
            }}
          >
            <Image
              src={service.image}
              alt={service.title}
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
