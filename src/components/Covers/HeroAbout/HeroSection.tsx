'use client'

import { useState } from 'react'
import Image from 'next/image'

const items = [
  {
    id: 1,
    image: '/assets/HeroFondo.jpg',
    text: 'Innovative solutions for modern businesses',
  },
  {
    id: 2,
    image: '/assets/HeroFondo.jpg',
    text: 'Cutting-edge technology at your fingertips',
  },
  {
    id: 3,
    image: '/assets/HeroFondo.jpg',
    text: 'Empowering growth through digital transformation',
  },
]

export default function HoverSection() {
    const [hoveredId, setHoveredId] = useState<number | null>(null)
  
    return (
      <section className="container mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row justify-between items-stretch gap-4 md:h-[400px]">
          {items.map((item) => (
            <div
              key={item.id}
              className={`relative overflow-hidden transition-all duration-300 ease-in-out mb-4 md:mb-0 ${
                hoveredId === item.id
                  ? 'md:w-1/2'
                  : hoveredId === null
                  ? 'md:w-1/3'
                  : 'md:w-1/4'
              } h-[300px] md:h-full`}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Image
                src={item.image}
                alt={`Image ${item.id}`}
                fill
                className="object-cover"
              />
              <div
                className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
                  hoveredId === item.id ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <p className="text-white text-center">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  