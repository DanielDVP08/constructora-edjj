"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";

const categories = [
  {
    title: "Profesional",
    description: "Explore career opportunities for professionals",
    image:
      "https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733346061/categoryprofesional_dmbcno.png",
    link: "/servicios/professionals/profesional",
  },
  {
    title: "Tecnico",
    description: "Discover technical roles and advancements",
    image:
      "https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733346061/categorytecnico_vbtlcr.png",
    link: "/servicios/professionals/tecnico",
  },
  {
    title: "Operario",
    description: "Find operator positions and training programs",
    image:
      "https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733346060/categoryoperario_dzdle4.png",
    link: "/servicios/professionals/operario",
  },
];

export default function LandingProfessionals() {
  
  return (
    // <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
    //   <div className="max-w-7xl mx-auto">
    //     <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Choose Your Career Path</h1>
    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    //       {categories.map((category, index) => (
    //         <motion.div
    //           key={category.title}
    //           className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
    //           whileHover={{ scale: 1.05 }}
    //           whileTap={{ scale: 0.95 }}
    //           onHoverStart={() => setHoveredIndex(index)}
    //           onHoverEnd={() => setHoveredIndex(null)}
    //         >
    // <Link href={ `/professionals${category.link}` } className="block h-full">
    //   <div className="flex flex-col md:flex-row h-full">
    //     <div className="p-6 flex flex-col justify-center md:w-1/2">
    //       <h2 className="text-2xl font-semibold text-gray-900 mb-2">{category.title}</h2>
    //       <p className="text-gray-600 mb-4">{category.description}</p>
    //       <motion.span
    //         className="text-blue-600 font-medium"
    //         animate={{ x: hoveredIndex === index ? 10 : 0 }}
    //       >
    //         Learn More &rarr;
    //       </motion.span>
    //     </div>
    //     <div className="md:w-1/2 relative h-64 md:h-auto">
    //       {/* <Image
    //         src={category.image}
    //         alt={`${category.title} category`}
    //         fill
    //         style={{ objectFit: 'cover' }}
    //       /> */}
    //     </div>
    //   </div>
    // </Link>
    //         </motion.div>
    //       ))}
    //     </div>
    //   </div>
    // </div>

    <>
      {/* <div className="min-h-screen flex items-center justify-center bg-amber-900"> */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-amber-900 p-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          ¿Qué profesional estás buscando?
        </h1>
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 w-full max-w-4xl px-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              className="flex-1"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Link href={category.link} className="block">
                <motion.div
                  className="bg-transparent p-6 rounded-lg shadow-lg cursor-pointer h-full flex flex-col items-center justify-center transition-all duration-300 hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative w-full aspect-square mb-4">
                    {/* <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover rounded-lg"
                    /> */}

                    <CldImage
                      src={category.image}
                      alt={category.title}
                      // width={120}
                      // height={42}
                      fill
                      // priority
                      crop={{
                        type: "fit",
                        source: true,
                      }}
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h2
                    className="text-2xl font-bold text-amber-900 text-center px-8"
                    style={{
                      backgroundImage:
                        "url(https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733346063/titlecategory_sx3a7p.png)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {category.title}
                  </h2>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
