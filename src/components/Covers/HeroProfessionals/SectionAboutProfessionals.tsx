"use client";
import { motion } from "framer-motion";
import { UserCheck, TrendingUp, Award } from "lucide-react";

export default function SectionAboutProfessionals() {
  const services = [
    {
      icon: <UserCheck className="h-12 w-12 text-blue-600" />,
      title: "Analisis de Perfiles",
      description:
        "Evaluamos a fondo cada detalle para garantizar talento y soluciones que se ajusten a tus necesidades.",
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-blue-600" />,
      title: "Seguridad de Informacion",
      description:
        "Protegemos tus datos con sistemas robustos y confiables, porque tu tranquilidad es nuestra prioridad.",
    },
    {
      icon: <Award className="h-12 w-12 text-blue-600" />,
      title: "Recomendaciones Certeras",
      description:
        "Ofrecemos sugerencias personalizadas y precisas, respaldadas por experiencia y conocimiento.",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          ¿Que Ofrecemos?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-amber-400 p-6 rounded-lg shadow-md"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-center mb-2">
                {service.title}
              </h3>
              <p className="text-gray-800 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// export default ServiceSection
