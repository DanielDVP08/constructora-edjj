"use client";

import { motion } from "framer-motion";
import { ShoppingCart, HardHat, PackagePlus, Store } from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Productos",
    description: "Materiales de calidad al mejor precio.",
    link: "/servicios/products",
    icon: ShoppingCart,
  },
  {
    title: "Perfiles Profesionales",
    description: "Expertos que garantizan tus proyectos.",
    link: "/servicios/professionals",
    icon: HardHat,
  },
  {
    title: "Ventas de Articulos",
    description: "Promociones que construyen más por menos.",
    link: "/servicios/sales",
    icon: PackagePlus,
  },
  {
    title: "Distribuidores Confiables",
    description: "Proveedores en los que puedes confiar.",
    link: "/servicios/distributors",
    icon: Store,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-indigo-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white text-center mb-12">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
