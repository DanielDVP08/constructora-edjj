// 'use client'

// // import { Card, CardBody } from "@nextui-org/react"
// import { motion} from "framer-motion";
// import Image from "next/image";

// import { useState, useEffect } from 'react'

// // const images = [
// //   "/placeholder.svg?height=400&width=600",
// //   "/placeholder.svg?height=400&width=600",
// //   "/placeholder.svg?height=400&width=600",
// //   "/placeholder.svg?height=400&width=600",
// // ]

// const services = [
//   {
//     title: "Profesionales Capaces",
//     image: "/assets/serviceprofessionals.png",
//   },
//   {
//     title: "Ventas de productos",
//     image: "/assets/serviceventas.png",
//   },
//   {
//     title: "Distribuidores",
//     image: "/assets/servicedistribuidor.png",
//   },
// ];

// export default function HeroAbout() {
//   // const [currentImage, setCurrentImage] = useState(0)

//   // useEffect(() => {
//   //   const timer = setInterval(() => {
//   //     setCurrentImage((prevImage) => (prevImage + 1) % images.length)
//   //   }, 5000) // Change image every 5 seconds

//   //   return () => clearInterval(timer)
//   // }, [])

//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % services.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="w-full h-screen py-12 md:py-24 lg:py-32" style={{ backgroundImage: "url(/assets/HeroAbout.png)" }}>
//       <div className="absolute h-screen inset-0 bg-black/60" />

//       <div className="container px-4 md:px-6">
//         <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
//           <div className="space-y-4">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-amber-50">
//               Our Commitment to Excellence
//             </h2>
//             <p className="max-w-[600px] text-amber-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-amber-100">
//               At our company, we pride ourselves on delivering exceptional results through dedication, innovation, and a
//               relentless pursuit of quality. Our teams commitment to excellence drives every project we undertake.
//             </p>
//             <p className="max-w-[600px] text-amber-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-amber-100">
//               We believe in creating lasting value for our clients, our community, and our environment. Our work is a
//               testament to our passion for making a positive impact in everything we do.
//             </p>
//           </div>
//           {/* <Card className="overflow-hidden">
//             <CardBody className="p-0"> */}
//             <div className="relative w-full aspect-[4/3]">
//               {services.map((service, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: currentSlide === index ? 1 : 0 }}
//                   transition={{ duration: 0.5 }}
//                   className="absolute inset-0"
//                 >
//                   <Image
//                     src={service.image}
//                     alt={service.title}
//                     layout="fill"
//                     objectFit="cover"
//                     className="rounded-lg"
//                   />
//                   {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-6">
//                     <h3 className="text-white text-xl font-semibold">
//                       {service.title}
//                     </h3>
//                   </div> */}
//                 </motion.div>
//               ))}
//             </div>
//             {/* </CardBody>
//           </Card> */}
//         </div>
//       </div>
//     </section>
//   )
// }

"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { CldImage } from "next-cloudinary";

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
      {/* <motion.section */}
      {/* <section
        // initial="initial"
        // animate="animate"
        // variants={fadeIn}
        // className="hero min-h-screen flex items-center justify-center bg-[url('/hero-bg.jpg')] bg-cover bg-center"
        style={{ backgroundImage: "url(/assets/HeroAbout.png)" }}
      > */}
      {/* <HeaderSection />
        <div className="hero min-h-screen flex items-center justify-center bg-[url('/hero-bg.jpg')] bg-cover bg-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-yellow-400">JJ</span> Constructora
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Sustainable solutions for a greener future
            </p> */}
      {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
            >
            Learn More
            </motion.button> */}
      {/* </div>
        </div>
      </section> */}

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
                Sustainable solutions for a greener future
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
      </section>

      {/* <motion.section
        initial="initial"
        whileInView="animate"
        variants={fadeIn}
        viewport={{ once: true }}
        id="contact"
        className="py-20 px-4 md:px-0"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Us</h2>
          <p className="text-lg mb-8">Ready to make a positive impact on the environment? Get in touch with us today!</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Contact Us
          </motion.button>
        </div>
      </motion.section>

      <footer className="bg-amber-800 py-8 text-center">
        <p>&copy; 2023 Eco Solutions Inc. All rights reserved.</p>
      </footer> */}
    </main>
  );
}
