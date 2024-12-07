"use client";

import { Button, Card, CardBody, ScrollShadow } from "@nextui-org/react";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Terreno",
    description:
      "probandokjahkfhhkshafhkakfjhkfjhkfjshiudjkhjahdkjfhkahfkeoifihfajhkfakscbkjjfkjhfaskjhkjfhaskj",
    price: "50.50",
  },
  {
    id: 2,
    name: "Terreno",
    description:
      "probandokjahkfhhkshafhkakfjhkfjhkfjshiudjkhjahdkjfhkahfkeoifihfajhkfakscbkjjfkjhfaskjhkjfhaskj",
    price: "50.50",
  },
  {
    id: 3,
    name: "Terreno",
    description:
      "probandokjahkfhhkshafhkakfjhkfjhkfjshiudjkhjahdkjfhkahfkeoifihfajhkfakscbkjjfkjhfaskjhkjfhaskj",
    price: "50.50",
  },
  {
    id: 4,
    name: "Terreno",
    description:
      "probandokjahkfhhkshafhkakfjhkfjhkfjshiudjkhjahdkjfhkahfkeoifihfajhkfakscbkjjfkjhfaskjhkjfhaskj",
    price: "50.50",
  },
  {
    id: 5,
    name: "Terreno",
    description:
      "probandokjahkfhhkshafhkakfjhkfjhkfjshiudjkhjahdkjfhkahfkeoifihfajhkfakscbkjjfkjhfaskjhkjfhaskj",
    price: "50.50",
  },
  {
    id: 6,
    name: "Terreno",
    description:
      "probandokjahkfhhkshafhkakfjhkfjhkfjshiudjkhjahdkjfhkahfkeoifihfajhkfakscbkjjfkjhfaskjhkjfhaskj",
    price: "50.50",
  },
  {
    id: 7,
    name: "Terreno",
    description:
      "probandokjahkfhhkshafhkakfjhkfjhkfjshiudjkhjahdkjfhkahfkeoifihfajhkfakscbkjjfkjhfaskjhkjfhaskj",
    price: "50.50",
  },
  {
    id: 8,
    name: "Terreno",
    description:
      "probandokjahkfhhkshafhkakfjhkfjhkfjshiudjkhjahdkjfhkahfkeoifihfajhkfakscbkjjfkjhfaskjhkjfhaskj",
    price: "50.50",
  },
  {
    id: 9,
    name: "Terreno",
    description:
      "probandokjahkfhhkshafhkakfjhkfjhkfjshiudjkhjahdkjfhkahfkeoifihfajhkfakscbkjjfkjhfaskjhkjfhaskj",
    price: "50.50",
  },
];

export default function HeroProducts() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  //   const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const toggleCardExpansion = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <>
      <div className="flex min-h-screen flex-col bg-black">
        <main className="flex-1">
          {/* Hero Section */}
          <section
            className="relative overflow-hidden bg-black py-16"
            style={{
              backgroundImage: "url(https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733346062/portadaproducts_fktdpq.png)",
              // backgroundImage: "url(/assets/portadaproducts.png)",
              // backgroundImage: "https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733346062/portadaproducts_fktdpq.png",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className="container px-4"
              // style={{
              //   backgroundImage: "url(/assets/portadaproducts.png)",
              //   backgroundSize: "cover",
              //   backgroundPosition: "center",
              // }}
            >
              <div className="relative z-10 mx-auto max-w-5xl text-center pl-12">
                <h1 className="mb-6 text-6xl font-bold text-yellow-500 md:text-7xl">
                  DIVERSOS
                  <span className="block text-white">PRODUCTOS</span>
                </h1>
                <p className="mb-8 text-3xl font-bold text-white">
                  VENTAS <span className="text-yellow-500">ACCESIBLES</span>
                </p>
                {/* <Button
                  className="bg-yellow-500 text-black hover:bg-yellow-400"
                  size="lg"
                >
                  Shop Now
                </Button> */}
              </div>
            </div>
          </section>

          {/* ProductSection */}
          <section className="py-12">
            <div className="container px-4">
              <h2 className="text-white text-2xl font-bold mb-6">
                Nuestros Productos
              </h2>
              <ScrollShadow className="h-[600px] rounded-md border md:ml-8 md:w-full">
                <div className="grid gap-6 p-4 md:grid-cols-2 lg:grid-cols-3">
                  {products.map((product) => (
                    <Card
                      key={product.id}
                      // className="group relative overflow-hidden rounded-lg bg-yellow-500/10 p-6 transition-colors hover:bg-yellow-500/20"
                      className="group relative overflow-hidden rounded-lg p-6 transition-colors bg-transparent"
                      style={{
                        // backgroundImage: "url(/assets/cardproduct.png)",
                        backgroundImage: "url(https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733346059/cardproduct_umk52s.png)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                      isPressable
                      onClick={() => toggleCardExpansion(product.id)}
                    >
                      <CardBody
                        className="p-4"
                        onClick={() => toggleCardExpansion(product.id)}
                      >
                        <div className="flex space-x-4">
                          <div className="w-2/3 space-y-2">
                            <h3 className="text-lg font-bold text-black">
                              {product.name}
                            </h3>
                            <p
                              className={`text-sm text-gray-700 ${
                                expandedCard === product.id
                                  ? ""
                                  : "line-clamp-2"
                              }`}
                            >
                              {product.description}
                            </p>
                            <p className="text-xl font-bold text-black">
                              {"S./"} {product.price}
                            </p>
                            {expandedCard === product.id && (
                              <Button
                                color="success"
                                className="text-black mt-8"
                                onClick={() =>
                                  window.open("wa.link/i30rpf", "_blank")
                                }
                              >
                                <MessageCircle /> WhatsApp
                              </Button>
                              // <Button
                              //   as={Link}
                              //   href="wa.link/i30rpf"
                              //   target="_blank"
                              //   className="bg-yellow-500 text-black hover:bg-yellow-400 mt-8"
                              //   // onClick={()=>window.open("wa.link/i30rpf","_blank")}
                              // >
                              //   <MessageCircle /> WhatsApp
                              // </Button>
                            )}
                          </div>

                          <div className="w-1/3">
                            <Image
                              src="/placeholder.svg?height=100&width=100"
                              alt={product.name}
                              width={100}
                              height={100}
                              //   className="rounded-md object-cover"
                              className="aspect-square overflow-hidden rounded-lg bg-black"
                            />
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  ))}
                </div>
              </ScrollShadow>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
