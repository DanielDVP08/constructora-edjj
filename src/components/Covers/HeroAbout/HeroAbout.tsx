"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { CldImage } from "next-cloudinary";
import FoundersSection from "./FoundersSection";

export default function Home() {
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
    <main className="min-h-screen text-amber-100">
      {/* Cover Section */}
      <section id="cover" className="relative h-screen w-full">
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

        {/* <HeaderSection /> */}

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
          <div className="hero min-h-screen flex items-center justify-center bg-[url('/hero-bg.jpg')] bg-cover bg-center">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                <span className="text-yellow-400">JJ</span> Constructora
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Construyendo calidad, fortaleciendo confianza
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* <motion.section */}
      <section
        // initial="initial"
        // whileInView="animate"
        // variants={fadeIn}
        // viewport={{ once: true }}
        id="about"
        className="py-20 px-4 md:px-0"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            ¿Quienes Somos?
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Image
              src="/assets/logojj.png"
              alt="About Eco Solutions"
              width={400}
              height={300}
              className="rounded-lg"
            />
            <p className="text-lg">
              JJ Constructora se dedica a brindar alternativas confiables ,
              soluciones innovadoras y sostenibles a los diferentes desafíos en
              construccion. Nuestro equipo de expertos trabaja incansablemente
              para garantizar que cada proyecto se desarrolle de la manera mas
              segura y completa concentrandonos en las personas y sus
              habilidades
            </p>
          </div>
        </div>
      </section>
      {/* 
      <section
        // initial="initial"
        // whileInView="animate"
        // variants={fadeIn}
        // viewport={{ once: true }}
        id="services"
        className="py-20 px-4 md:px-0 bg-amber-800"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Productos",
                description:
                  "Ofrecemos una amplia gama de productos de construcción de alta calidad para proyectos residenciales, comerciales e industriales. Desde materiales básicos como cemento, bloques y madera, hasta herramientas especializadas y acabados de última generación, somos el aliado ideal para profesionales de la construcción, contratistas y particulares.",
              },
              {
                title: "Profesionales Capaces",
                description:
                  "Conecta con los mejores profesionales para tu proyecto. Nuestro servicio de recomendación te ayuda a encontrar trabajadores calificados y confiables en construcción, garantizando calidad y eficiencia en cada trabajo. ¡Tu obra, en buenas manos!",
              },
              {
                title: "Ventas",
                description:
                  "Facilitamos la recepción de ofertas de compra para tus proyectos. Comparte tus necesidades y recibe propuestas personalizadas de proveedores confiables, ahorrando tiempo y asegurando los mejores precios del mercado. ¡Optimiza tus compras con nosotros!",
              },
              {
                title: "Distribuidores",
                description:
                  "Encuentra a los mejores distribuidores para tus proyectos. Nuestro servicio conecta tu negocio con proveedores confiables, garantizando productos de calidad, precios competitivos y una experiencia eficiente. ¡Tu solución, al alcance de un clic!",
              },
            ].map((service, index) => (
              <div
                key={index}
                // whileHover={{ scale: 1.05 }}
                className="bg-amber-700 p-6 rounded-lg text-center"
              >
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* <HoverSection /> */}

      <FoundersSection />
    </main>
  );
}
