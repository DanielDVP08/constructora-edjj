"use client";

import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";
import GalleryPhotos from "./GalleryPhotos";

export default function HeroProjects() {
  return (
    <>
      {/* Portada */}
      <section className="relative h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* <Image
            src="/assets/herojj.jpg"
            alt="Construction Site"
            layout="fill"
            objectFit="cover"
            priority
            className="w-full h-full object-cover opacity-50"
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
            className="opacity-50"
          />
        </div>
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Construyendo sueños, creando realidad
            </h2>
            <p className="text-xl md:text-2xl mb-8">
              Transformando visiones en estructuras impresionantes
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

      {/* Galeria fotos */}
      {/* <GalleryProjects /> */}
      <GalleryPhotos />

      {/* Descripcion */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">
              Creando excelencia en cada proyecto
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              En JJ Constructora, nos enorgullecemos de ofrecer soluciones
              innovadoras y de calidad excepcional para cada proyecto que
              emprendemos. Nuestro equipo de profesionales capacitados aporta
              años de experiencia y pasión por la excelencia a cada proyecto de
              construcción.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Residencials", icon: "🏠" },
                { title: "Comercios", icon: "🏢" },
                { title: "Industrial", icon: "🏭" },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.05 }}
                  className="bg-amber-700 p-6 rounded-lg"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {item.title}
                  </h3>
                  <p className="text-white">
                    Soluciones personalizadas para sus necesidades específicas
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section> */}
    </>
  );
}
