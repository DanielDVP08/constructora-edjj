"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
// import Link from "next/link";
// import { ServiceDropdown } from "../Header/ServiceDropdown";
// import {
//   Button,
//   Navbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   NavbarMenuToggle,
// } from "@nextui-org/react";
// import Header from "../Header/Header";
// import { Image } from '@nextui-org/react'

const services = [
  {
    title: "Profesionales Capaces",
    image: "/assets/serviceprofessionals.png",
  },
  {
    title: "Ventas de productos",
    image: "/assets/serviceventas.png",
  },
  {
    title: "Distribuidores",
    image: "/assets/servicedistribuidor.png",
  },
];

const founders = [
  {
    name: "John Doe",
    position: "CEO",
    image: "/assets/fundador.png",
  },
  {
    name: "Jane Smith",
    position: "COO",
    image: "/assets/fundador.png",
  },
  {
    name: "Mike Johnson",
    position: "CTO",
    image: "/assets/fundador.png",
  },
];

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % services.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="min-h-screen bg-transparent">
      {/* Top Bar */}
      {/* <div className="bg-zinc-900 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              1-800-555-1234
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              info@emarat.com
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Open Hours 09:00 am - 06:00 pm
            </span>
          </div>
          <div className="flex gap-4">
            <Facebook className="h-4 w-4 cursor-pointer hover:text-yellow-500 transition-colors" />
            <Twitter className="h-4 w-4 cursor-pointer hover:text-yellow-500 transition-colors" />
            <Linkedin className="h-4 w-4 cursor-pointer hover:text-yellow-500 transition-colors" />
          </div>
        </div>
      </div> */}

      {/* <Navbar className="bg-transparent shadow-lg sticky top-0 z-50">
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/logojj.png"
                width={120}
                height={42}
                alt="Logo Constructora"
              />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="flex justify-between items-center px-4 py-4">
          <div className="flex justify-between items-center">
            <NavbarBrand className="pr-72">
              <Link href="/" className="text-2xl font-bold text-zinc-900">
                <Image
                  src="/assets/logojj.png"
                  alt="logo"
                  width={100}
                  height={80}
                />
              </Link>
            </NavbarBrand>
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="hover:text-yellow-500 transition-colors"
              >
                Inicio
              </Link>
              <Link
                href="#"
                className="hover:text-yellow-500 transition-colors"
              >
                Nosotros
              </Link>
              <ServiceDropdown />
              <Link
                href="#"
                className="hover:text-yellow-500 transition-colors"
              >
                Proyectos
              </Link>

              <NavbarContent className="pl-16" justify="end">
                <NavbarItem>
                  <Button
                    as={Link}
                    color="primary"
                    href="/signin"
                    variant="flat"
                  >
                    Acceder
                  </Button>
                </NavbarItem>
              </NavbarContent>
            </div>
          </div>
        </NavbarContent>
      </Navbar> */}

      {/* <Header/> */}
      {/* Hero Section */}
      {/* <section className="relative h-[600px] flex items-center mx-auto">
        <Image
          src="/assets/herojj.jpg"
          alt="Construction Site"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" /> */}

      {/* <div className="container mx-auto px-4 relative text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 mx-auto">
            WE ARE THE BEST
            <br />
            <span className="text-yellow-500">CONSTRUCTION</span> EXPERTS
          </h1>
          <p className="max-w-2xl mb-8 text-lg mx-auto">
            we&apos;re an elite squad of alpha geeks, creative storytellers and
            business minds. Together, we mix art and science to turn brands into
            favorites.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded transition-colors">
              Our Work
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-black px-8 py-3 rounded transition-colors">
              Contact
            </button>
          </div>
        </div> */}
      {/* 
        <div className="relative text-white text-center px-72">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            WE ARE THE BEST
            <br />
            <span className="text-yellow-500">CONSTRUCTION</span> EXPERTS
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            We&apos;re an elite squad of alpha geeks, creative storytellers and
            business minds. Together, we mix art and science to turn brands into
            favorites.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded transition-colors">
              Our Work
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-black px-8 py-3 rounded transition-colors">
              Contact
            </button>
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      <section ref={ref} className="py-20 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate={controls}
              variants={textVariants}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-yellow-500">
                <motion.span variants={letterVariants} className="inline-block">
                  Nuestros Servicios
                </motion.span>{" "}
                {/* <motion.span
                  variants={letterVariants}
                  className="inline-block text-yellow-500"
                >
                  Services
                </motion.span> */}
              </h2>
              <motion.p
                variants={textVariants}
                className="text-white leading-relaxed"
              >
                En nuestra constructora, hacemos mucho más que levantar
                estructuras; creamos espacios que transforman vidas. Con años de
                experiencia en el sector, ofrecemos soluciones integrales que
                van desde el diseño y planificación hasta la ejecución impecable
                de cada proyecto.
              </motion.p>
              <motion.ul variants={textVariants} className="space-y-4">
                <motion.li
                  variants={letterVariants}
                  className="flex items-center gap-2 hover:text-yellow-500 transition-colors"
                >
                  <ChevronRight className="text-yellow-500" />
                  Profesionales y trabajadores calificados
                </motion.li>
                <motion.li
                  variants={letterVariants}
                  className="flex items-center gap-2 hover:text-yellow-500 transition-colors"
                >
                  <ChevronRight className="text-yellow-500" />
                  Respuestas rapidas ante diversas ofertas de venta
                </motion.li>
                <motion.li
                  variants={letterVariants}
                  className="flex items-center gap-2 hover:text-yellow-500 transition-colors"
                >
                  <ChevronRight className="text-yellow-500" />
                  Distribuidores confiables y puntuales
                </motion.li>
              </motion.ul>
            </motion.div>
            <div className="relative h-[400px]">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: currentSlide === index ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                  {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-6">
                    <h3 className="text-white text-xl font-semibold">
                      {service.title}
                    </h3>
                  </div> */}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Nosotros te respaldamos</h2>
            {/* <p className="text-gray-600">
              Our leadership team brings decades of combined experience in
              construction and project management, ensuring the highest
              standards of quality and professionalism in every project.
            </p> */}
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-lg"
              >
                <Image
                  src={founder.image}
                  alt={founder.name}
                  width={300}
                  height={400}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-semibold">
                      {founder.name}
                    </h3>
                    <p className="text-gray-300">{founder.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-zinc-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Únete a nosotros y descubre nuestros
            <br/>
            <span className="text-yellow-500"> Increibles Servicios</span>
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-300">
            ¿Estas listo para potenciar tu proyecto de construcción? Nuestro
            equipo de expertos está aquí para ayudarlo a hacer realidad su
            visión con un servicio profesional y una calidad inigualable.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded transition-colors"
          >
            <Link href="/signup" className="text-white">
              UNETE !!
            </Link>
          </motion.button>
        </div>
      </section>
    </div>
  );
}
