"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Building2,
  Truck,
  Star,
  Quote,
  ArrowRight,
} from "lucide-react";
import { Button, Card, CardHeader } from "@nextui-org/react";
import { CldImage } from "next-cloudinary";
import { useRouter } from "next/navigation";

const stores = [
  {
    id: 1,
    name: "BuildRight Supplies",
    type: "Store",
    rating: 4.5,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "ConstructAll Distributors",
    type: "Distributor",
    rating: 4.8,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "MegaBuild Warehouse",
    type: "Store",
    rating: 4.2,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "PremiumMaterials Co.",
    type: "Distributor",
    rating: 4.7,
    image: "/placeholder.svg?height=200&width=300",
  },
];

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    company: "ABC Construction",
    text: "The recommendations provided were spot on. We found high-quality materials at great prices!",
  },
  {
    id: 2,
    name: "Jane Smith",
    company: "Smith Builders",
    text: "Thanks to these recommendations, we've streamlined our supply chain and improved our project timelines.",
  },
  {
    id: 3,
    name: "Mike Johnson",
    company: "Johnson & Sons",
    text: "The distributors recommended here are reliable and offer excellent customer service.",
  },
];

export default function HeroDistributors() {
  const [currentBanner, setCurrentBanner] = useState(0);

  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % stores.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      {/* Section 1: Presentation Cover */}
      {/* <section className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10"
        >
          <h1 className="text-5xl font-bold mb-4">Proveedores Confiables</h1>
          <p className="text-xl mb-8">
            Su puerta de entrada a suministros de calidad y distribuidores
            confiables
          </p>
          <Button variant="faded" size="lg" className="bg-white text-blue-500">
            Explorar Ahora
          </Button>
        </motion.div>
      </section> */}

      <section className="relative h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* <Image
            src="/assets/herojj.jpg"
            alt="Construction Site"
            layout="fill"
            objectFit="cover"
            priority
            className="w-full h-full object-cover opacity-50 blur-sm"
          /> */}
          <CldImage
            alt="Fondo"
            src="https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733346061/herojj_m15yfk.jpg"
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Proveedores Confiables
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Su puerta de entrada a suministros de calidad y distribuidores
              confiables
            </p>
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              Explorar Ahora
            </motion.button> */}
          </motion.div>
        </div>
      </section>

      {/* Section 2: Banner Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Tiendas y distribuidores destacados
          </h2>
          <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
            <AnimatePresence>
              <motion.div
                key={currentBanner}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">
                    {stores[currentBanner].name}
                  </h3>
                  <p>{stores[currentBanner].type}</p>
                  <div className="flex justify-center items-center mt-4">
                    {stores[currentBanner].type === "Store" ? (
                      <Building2 className="mr-2" />
                    ) : (
                      <Truck className="mr-2" />
                    )}
                    <span>
                      {stores[currentBanner].rating}{" "}
                      <Star className="inline" size={16} />
                    </span>
                  </div>
                  <Button variant="faded" className="bg-white text-blue-500">
                    Saber mas
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
            <Button
              variant="faded"
              size="sm"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white"
              onClick={() =>
                setCurrentBanner(
                  (prev) => (prev - 1 + stores.length) % stores.length
                )
              }
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="faded"
              size="sm"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white"
              onClick={() =>
                setCurrentBanner((prev) => (prev + 1) % stores.length)
              }
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="text-center mt-8">
            <Button
              variant="faded"
              size="lg"
              onPress={() => router.push("/business")}
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              Ver tiendas
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Section 3: Testimonials */}
      <section className="py-20 bg-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Lo que dicen nuestros usuarios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col">
                  <CardHeader className="text-center px-6">
                    <h3>{testimonial.name}</h3>
                    {/* <p>{testimonial.company}</p> */}
                  </CardHeader>
                  <div className="flex items-start px-6 pb-4">
                    <Quote className="text-blue-500 mb-2" />
                    <p className="italic text-gray-600 px-2">
                      {testimonial.text}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Page Promotion */}
      {/* <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Su recurso único en materiales de construcción
            </h2>
            <p className="text-xl mb-8">
              Descubra las tiendas mejor calificadas, conéctese con
              distribuidores confiables y acceda a recomendaciones de expertos,
              todo en un solo lugar. Agilice su proceso de adquisición de
              materiales de construcción y eleve sus proyectos a nuevas alturas.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button
                variant="faded"
                size="lg"
                className="bg-white text-blue-500"
              >
                Exploremos
              </Button>
            </div>
          </div>
        </div>
      </section> */}


    </div>
  );
}
