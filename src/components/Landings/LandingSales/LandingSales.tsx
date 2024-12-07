"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tractor, Hammer, Mountain } from "lucide-react";
import { SellContainer } from "./SellContainer";
import { Modal } from "./Modal";

export default function LandingSales({
  name,
  email,
}: {
  name: string;
  email: string;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const items = [
    { title: "Maquinaria", icon: Tractor },
    { title: "Materiales de Obra", icon: Hammer },
    { title: "Terrenos", icon: Mountain },
  ];

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  return (
    <section className="min-h-screen bg-brown-100 flex flex-col items-center justify-center p-4 md:p-8">
      <h1 className="text-2xl md:text-4xl font-bold text-amber-900 text-center mb-8">
        ¿Que ofreces?
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-8 md:space-y-0 mt-12 w-full max-w-4xl">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            className="w-full md:w-1/3"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <SellContainer
              title={item.title}
              icon={item.icon}
              onClick={() => handleItemClick(item.title)}
            />
          </motion.div>
        ))}
      </div>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          item={selectedItem}
          name={name}
          email={email}
        />
      )}
    </section>
  );
}
