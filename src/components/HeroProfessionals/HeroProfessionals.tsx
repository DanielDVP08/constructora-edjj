"use client";

// import { useState, useEffect } from 'react'
import { motion } from "framer-motion";
import { ChevronDown, Users, Search, Zap } from "lucide-react";
import { Button } from "@nextui-org/react";
import { redirect } from "next/navigation";

export default function HeroProfessionals() {
  //   const [isClient, setIsClient] = useState(false)

  //   useEffect(() => {
  //     setIsClient(true)
  //   }, [])

  //   if (!isClient) {
  //     return null
  //   }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 to-background">
      {/* Presentation Cover */}
      <section className="h-screen flex flex-col items-center justify-center text-center p-6">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            Profesionales Eficaces
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Revoluciona tus proyectos
          </p>
          <Button
            size="lg"
            className="text-lg"
            onClick={() => redirect("/signin")}
          >
            Explorar Talentos
          </Button>
        </motion.div>
        <motion.div
          className="absolute bottom-8"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={40} className="text-primary" />
        </motion.div>
      </section>

      {/* Section 1: Discover Top Talent */}
      <section className="py-20 bg-white">

          <div className="p-6 grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-4">
                Encuentra el mejor talento para tu proyecto
              </h2>
              <p className="text-muted-foreground mb-6">
                Profesionales capaces, eficientes y recomendados por nuestra
                empresa
              </p>
              {/* <Button size="lg">Start Exploring</Button> */}
            </div>
            <motion.div
              className="flex justify-center"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
            >
              <Users size={200} className="text-primary" />
            </motion.div>
          </div>
      </section>

      {/* Section 2: Efficient Search Tools */}
      <section className="py-20 bg-white">
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
              {/* <Button size="lg" variant="faded">
                  Learn More
                </Button> */}
            </div>
          </div>
      </section>

      {/* Section 3: Call to Action */}
      <section className="py-20">
        <div className="bg-primary text-primary-foreground">
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
                <Button size="lg" variant="faded">
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
