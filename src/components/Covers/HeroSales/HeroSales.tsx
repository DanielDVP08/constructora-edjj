"use client";

import { Button } from "@nextui-org/react";
// import { useState, useEffect } from 'react'
import { motion } from "framer-motion";
import {
  Building2,
  Truck,
  Package,
  DollarSign,
  ArrowRight,
  Zap,
} from "lucide-react";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HeroSales() {
  //   const [email, setEmail] = useState('')
  //   const [isEmailValid, setIsEmailValid] = useState(false)

  //   useEffect(() => {
  //     setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
  //   }, [email])

  //   const handleSubmit = (e: React.FormEvent) => {
  //     e.preventDefault()
  //     if (isEmailValid) {
  //       // Handle form submission here
  //       console.log('Form submitted with email:', email)
  //       // You would typically send this to your backend or a service
  //     }
  //   }

  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      {/* Section 1: Presentation Cover */}
      {/* <section className="h-screen flex items-center justify-center bg-primary text-primary-foreground" >
        <div className="text-center">
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Ventas de Construccion
          </motion.h1>
          <motion.p
            className="text-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Descubre una forma facil de vender tus materiales y/o maquinarias
          </motion.p>
        </div>
      </section> */}
      <section className="relative h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* <Image
            src="/assets/heromateriales.jpg"
            alt="Construction Site"
            layout="fill"
            objectFit="cover"
            priority
            className="w-full h-full object-cover opacity-50 blur-sm"
          /> */}
          <CldImage
            alt="Fondo"
            src="https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733346062/heromateriales_nlbvkc.jpg"
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
              Ventas de Construccion
            </h2>
            <p className="text-xl md:text-2xl mb-8">
              Descubre una forma facil de vender tus materiales y/o maquinarias
            </p>
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              Explora Nuestros Proyectos
            </motion.button> */}
          </motion.div>
        </div>
      </section>

      {/* Section 2: Join Us */}
      <section className="py-20 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Entra en nuestra red de venta
            </h2>
            <p className="text-lg mb-4">
              Contactanos y te ayudaremos a vender ese material que ya no usaras
              o la maquinaria que te sobro
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <ArrowRight className="mr-2 text-primary" /> Grandes ofertas
              </li>
              <li className="flex items-center">
                <ArrowRight className="mr-2 text-primary" /> Evaluacion completa
              </li>
              <li className="flex items-center">
                <ArrowRight className="mr-2 text-primary" /> Respuestas rapidas
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              className="bg-primary text-primary-foreground p-6 rounded-lg flex flex-col items-center justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Building2 size={48} />
              <p className="mt-2 text-center">Materiales</p>
            </motion.div>
            <motion.div
              className="bg-secondary text-secondary-foreground p-6 rounded-lg flex flex-col items-center justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Truck size={48} />
              <p className="mt-2 text-center">Acceso a entrega</p>
            </motion.div>
            <motion.div
              className="bg-amber-400 text-accent-foreground p-6 rounded-lg flex flex-col items-center justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Package size={48} />
              <p className="mt-2 text-center">Maquinarias</p>
            </motion.div>
            <motion.div
              className="bg-green-500 text-muted-foreground p-6 rounded-lg flex flex-col items-center justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <DollarSign size={48} />
              <p className="mt-2 text-center">Grandes Ofertas</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Why Choose Us */}
      <section className="py-20 px-4 bg-secondary text-secondary-foreground">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <motion.div
              className="w-full h-64 bg-primary rounded-lg shadow-lg"
              animate={{
                rotateY: [0, 180, 360],
                boxShadow: [
                  "0px 0px 0px rgba(0,0,0,0.1)",
                  "0px 10px 20px rgba(0,0,0,0.2)",
                  "0px 0px 0px rgba(0,0,0,0.1)",
                ],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Image
                src="/assets/HeroFondo.jpg"
                alt="Construction site"
                width={600}
                height={200}
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-4">Conocenos</h2>
            <p className="text-lg mb-4">
              Somos una empresa confiable y responsable con nuestros usuarios
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <ArrowRight className="mr-2" /> Respuestas rapidas y precisas
              </li>
              <li className="flex items-center">
                <ArrowRight className="mr-2" /> Total transparencia
              </li>
              <li className="flex items-center">
                <ArrowRight className="mr-2" /> Evaluaciones completas de los
                productos
              </li>
              {/* <li className="flex items-center">
                <ArrowRight className="mr-2" /> Dedicated customer support
              </li> */}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4: Call to Action */}
      {/* <section className="py-20 px-4">
        <div className="container mx-auto text-center"> */}
      {/* <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Construction Supply Chain?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of satisfied contractors and builders. Register now
            to access exclusive deals and streamline your material sourcing!
          </p> */}
      {/* <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
              <Label htmlFor="email" className="sr-only">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
              />
            </div>
          </form> */}
      {/* <Button className="w-full" onClick={() => router.push("/signup")}>
            Registrate Ahora
          </Button> */}
      {/* <p className="mt-4 text-sm text-muted-foreground">
            By registering, you agree to our Terms of Service and Privacy
            Policy.
          </p> */}
      {/* </div>
      </section> */}

      <section>
        <div className="bg-primary text-primary-foreground py-20">
          <div className="p-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Unete a nosotros y accede a nuestra red de ventas
              </h2>
              {/* <p className="text-xl mb-6">
                  Dont miss out on the opportunity to revolutionize your hiring
                  process. Sign up now and get:
                </p> */}
              <ul className="text-left inline-block mb-6">
                <li className="flex items-center mb-2">
                  <Zap className="mr-2" /> Envia con total transparencia tu
                  producto
                </li>
                <li className="flex items-center mb-2">
                  <Zap className="mr-2" /> Obten una oferta justa y razonable
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
    </div>
  );
}
