"use client";


import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { Button } from "@nextui-org/react";
import { redirect, useRouter } from "next/navigation";
import SectionAboutProfessionals from "./SectionAboutProfessionals";
import { CldImage } from "next-cloudinary";

export default function HeroProfessionals() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 to-background">
      {/* Presentation Cover */}
      {/* <section
        className="h-screen flex flex-col items-center justify-center text-center p-6"
        style={{ backgroundImage: "url(/assets/mesadetrabajo.jpg)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="px-10 py-10 border-black border-2"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            Profesionales Eficaces
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-primary mb-8">
            Revoluciona tus proyectos
          </p>
          <Button
            size="lg"
            color="warning"
            className="text-lg"
            onClick={() => redirect("/signin")}
          >
            Explora nuestros Talentos
          </Button>
        </motion.div>
        <motion.div
          className="absolute bottom-8"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={40} className="text-primary" />
        </motion.div>
      </section> */}

      <section className="relative h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* <Image
            src="/assets/mesadetrabajo.jpg"
            alt="Construction Site"
            layout="fill"
            objectFit="cover"
            priority
            className="w-full h-full object-cover opacity-50 blur-sm"
          /> */}
          <CldImage
            alt="Fondo"
            src="https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733346062/mesadetrabajo_qypxh5.jpg"
            // width={120}
            // height={42}
            fill
            priority
            crop={{
              type: "fit",
              source: true,
            }}
            className="w-full h-full object-cover opacity-50 blur-sm"
          />
        </div>
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Profesionales Eficaces
            </h2>
            <p className="text-xl md:text-2xl mb-8">
              Descubre una forma facil de vender tus materiales y/o maquinarias
            </p>
            <Button
              size="lg"
              color="warning"
              className="text-lg"
              onClick={() => redirect("/signin")}
            >
              Explora nuestros Talentos
            </Button>
            {/* <motion.div
              className="absolute bottom-8"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ChevronDown size={40} className="text-primary" />
            </motion.div> */}
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="px-10 py-10 border-black border-2"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
              Profesionales Eficaces
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-primary mb-8">
              Revoluciona tus proyectos
            </p>
            <Button
              size="lg"
              color="warning"
              className="text-lg"
              onClick={() => redirect("/signin")}
            >
              Explora nuestros Talentos
            </Button>
          </motion.div>
          <motion.div
            className="absolute bottom-8"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown size={40} className="text-primary" />
          </motion.div> */}
        </div>
      </section>

      {/* Acerca del Servicio */}

      <SectionAboutProfessionals />

      {/* Section 1: Discover Top Talent */}
      {/* <section className="py-20 bg-white">

          <div className="p-6 grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-4">
                Encuentra el mejor talento para tu proyecto
              </h2>
              <p className="text-muted-foreground mb-6">
                Profesionales capaces, eficientes y recomendados por nuestra
                empresa
              </p>
              <Button size="lg">Start Exploring</Button>
            </div>
            <motion.div
              className="flex justify-center"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
            >
              <Users size={200} className="text-primary" />
            </motion.div>
          </div>
      </section> */}

      {/* Section 2: Efficient Search Tools */}
      {/* <section className="py-20 bg-white">
          <div className="p-6 grid md:grid-cols-2 gap-6 items-center">
            <motion.div
              className="flex justify-center"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <Search size={200} className="text-secondary" />
            </motion.div>
            <div>
              <h2 className="text-3xl font-semibold mb-4">
                Herramienta de busqueda confiable
              </h2>
              <p className="text-muted-foreground mb-6">
                Podras descubrir diferentes perfiles profesionales pra que
                escojas el mejor para tus proyectos
              </p>
              <Button size="lg" variant="faded">
                  Learn More
                </Button> 
            </div>
          </div>
      </section> */}

      {/* Section 3: Call to Action */}
      <section>
        <div className="bg-primary text-primary-foreground py-20">
          <div className="p-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Unete a nosotros y accede a nuestros servicios
              </h2>
              {/* <p className="text-xl mb-6">
                  Dont miss out on the opportunity to revolutionize your hiring
                  process. Sign up now and get:
                </p> */}
              <ul className="text-left inline-block mb-6">
                <li className="flex items-center mb-2">
                  <Zap className="mr-2" /> Accede a perfiles profecionales
                  recomendados
                </li>
                <li className="flex items-center mb-2">
                  <Zap className="mr-2" /> Obten informacion verificada
                </li>
                {/* <li className="flex items-center mb-2">
                    <Zap className="mr-2" /> Streamlined hiring process
                  </li> */}
                {/* <li className="flex items-center">
                    <Zap className="mr-2" /> 30-day free trial
                  </li> */}
              </ul>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                {/* <Input
                    type="email"
                    placeholder="Enter your email"
                    className="max-w-xs bg-primary-foreground text-primary"
                  /> */}
                <Button
                  size="lg"
                  variant="faded"
                  onClick={() => router.push("/signin")}
                >
                  Registrate ahora !!
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* <footer className="text-center p-6 text-muted-foreground">
        <p>&copy; 2024 TalentView Pro. All rights reserved.</p>
      </footer> */}
    </div>
  );
}
