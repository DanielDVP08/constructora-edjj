"use client";

import { useState } from "react";
import Image from "next/image";

const founders = [
  {
    id: 1,
    image: "/assets/HeroFondo.jpg",
    name: "Edward",
    text: "En cada proyecto, construimos más que estructuras: construimos confianza, calidad y relaciones duraderas.",
  },
  {
    id: 2,
    image: "/assets/HeroFondo.jpg",
    name: "Edward",
    text: "Nuestra pasión por la innovación y el compromiso nos permite ofrecer soluciones sólidas y eficientes para tus necesidades.",
  },
  {
    id: 3,
    image: "/assets/HeroFondo.jpg",
    name: "Edward",
    text: "Con cada entrega, reafirmamos nuestro compromiso de ser un aliado confiable en la construcción de un futuro mejor.",
  },
];

export default function FoundersSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="container mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        Nuestros Fundadores nos Inspiran
      </h2>
      <div className="flex flex-col md:flex-row justify-between items-stretch gap-4 md:h-[400px]">
        {founders.map((founder) => (
          <div
            key={founder.id}
            className={`relative overflow-hidden transition-all duration-300 ease-in-out mb-4 md:mb-0 ${
              hoveredId === founder.id
                ? "md:w-1/2"
                : hoveredId === null
                ? "md:w-1/3"
                : "md:w-1/4"
            } h-[300px] md:h-full`}
            onMouseEnter={() => setHoveredId(founder.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <Image
              src={founder.image}
              alt={`${founder.name}`}
              fill
              className="object-cover"
            />
            <div
              className={`absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center p-4 transition-opacity duration-300 ${
                hoveredId === founder.id ? "opacity-100" : "opacity-0"
              }`}
            >
              <h3 className="text-white text-xl font-bold mb-2">
                {founder.name}
              </h3>
              <p className="text-white text-center">{founder.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
