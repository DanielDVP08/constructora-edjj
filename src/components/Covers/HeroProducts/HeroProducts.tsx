"use client";

import {
  Button,
  Card,
  CardBody,
  Chip,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  Pagination,
  useDisclosure,
} from "@nextui-org/react";
import { MessageCircleMore } from "lucide-react";
import { CldImage } from "next-cloudinary";
// import Image from "next/image";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Terreno",
    description:
      "probandokjahkfhhkshafhkakfjhkfjhkfjshiudjkhjahdkjfhkahfkeoifihfajhkfakscbkjjfkjhfaskjhkjfhaskj",
    price: "50.50",
    saleStatus: true,
    rentalStatus: false,
  },
  {
    id: 2,
    name: "Terreno",
    description:
      "probandokjahkfhhkshafhkakfjhkfjhkfjshiudjkhjahdkjfhkahfkeoifihfajhkfakscbkjjfkjhfaskjhkjfhaskj",
    price: "50.50",
    saleStatus: true,
    rentalStatus: true,
  },
  {
    id: 3,
    name: "Terreno",
    description:
      "probandokjahkfhhkshafhkakfjhkfjhkfjshiudjkhjahdkjfhkahfkeoifihfajhkfakscbkjjfkjhfaskjhkjfhaskj",
    price: "50.50",
    saleStatus: true,
    rentalStatus: true,
  },
  {
    id: 4,
    name: "Terreno",
    description:
      "probandokjahkfhhkshafhkakfjhkfjhkfjshiudjkhjahdkjfhkahfkeoifihfajhkfakscbkjjfkjhfaskjhkjfhaskj",
    price: "50.50",
    saleStatus: true,
    rentalStatus: true,
  },
  {
    id: 5,
    name: "Terreno",
    description:
      "probandokjahkfhhkshafhkakfjhkfjhkfjshiudjkhjahdkjfhkahfkeoifihfajhkfakscbkjjfkjhfaskjhkjfhaskj",
    price: "50.50",
    saleStatus: true,
    rentalStatus: true,
  },
  {
    id: 6,
    name: "Terreno",
    description:
      "probandokjahkfhhkshafhkakfjhkfjhkfjshiudjkhjahdkjfhkahfkeoifihfajhkfakscbkjjfkjhfaskjhkjfhaskj",
    price: "50.50",
    saleStatus: true,
    rentalStatus: true,
  },
  {
    id: 7,
    name: "Terreno",
    description:
      "probandokjahkfhhkshafhkakfjhkfjhkfjshiudjkhjahdkjfhkahfkeoifihfajhkfakscbkjjfkjhfaskjhkjfhaskj",
    price: "50.50",
    saleStatus: true,
    rentalStatus: true,
  },
  {
    id: 8,
    name: "Terreno",
    description:
      "probandokjahkfhhkshafhkakfjhkfjhkfjshiudjkhjahdkjfhkahfkeoifihfajhkfakscbkjjfkjhfaskjhkjfhaskj",
    price: "50.50",
    saleStatus: true,
    rentalStatus: true,
  },
  {
    id: 9,
    name: "Terreno",
    description:
      "probandokjahkfhhkshafhkakfjhkfjhkfjshiudjkhjahdkjfhkahfkeoifihfajhkfakscbkjjfkjhfaskjhkjfhaskj",
    price: "50.50",
    saleStatus: true,
    rentalStatus: true,
  },
  {
    id: 10,
    name: "Terreno",
    description:
      "probandokjahkfhhkshafhkakfjhkfjhkfjshiudjkhjahdkjfhkahfkeoifihfajhkfakscbkjjfkjhfaskjhkjfhaskj",
    price: "50.50",
    saleStatus: true,
    rentalStatus: true,
  },
  {
    id: 11,
    name: "Terreno",
    description:
      "probandokjahkfhhkshafhkakfjhkfjhkfjshiudjkhjahdkjfhkahfkeoifihfajhkfakscbkjjfkjhfaskjhkjfhaskj",
    price: "50.50",
    saleStatus: true,
    rentalStatus: true,
  },
  {
    id: 12,
    name: "Terreno",
    description:
      "probandokjahkfhhkshafhkakfjhkfjhkfjshiudjkhjahdkjfhkahfkeoifihfajhkfakscbkjjfkjhfaskjhkjfhaskj",
    price: "50.50",
    saleStatus: false,
    rentalStatus: true,
  },
  {
    id: 13,
    name: "Terreno",
    description:
      "probandokjahkfhhkshafhkakfjhkfjhkfjshiudjkhjahdkjfhkahfkeoifihfajhkfakscbkjjfkjhfaskjhkjfhaskj",
    price: "50.50",
    saleStatus: true,
    rentalStatus: true,
  },
  {
    id: 14,
    name: "Terreno",
    description:
      "probandokjahkfhhkshafhkakfjhkfjhkfjshiudjkhjahdkjfhkahfkeoifihfajhkfakscbkjjfkjhfaskjhkjfhaskj",
    price: "50.50",
    saleStatus: true,
    rentalStatus: true,
  },
  {
    id: 15,
    name: "Terreno",
    description:
      "probandokjahkfhhkshafhkakfjhkfjhkfjshiudjkhjahdkjfhkahfkeoifihfajhkfakscbkjjfkjhfaskjhkjfhaskj",
    price: "50.50",
    saleStatus: true,
    rentalStatus: true,
  },
  {
    id: 16,
    name: "Terreno",
    description:
      "probandokjahkfhhkshafhkakfjhkfjhkfjshiudjkhjahdkjfhkahfkeoifihfajhkfakscbkjjfkjhfaskjhkjfhaskj",
    price: "50.50",
    saleStatus: true,
    rentalStatus: true,
  },
  {
    id: 17,
    name: "Terreno",
    description:
      "probandokjahkfhhkshafhkakfjhkfjhkfjshiudjkhjahdkjfhkahfkeoifihfajhkfakscbkjjfkjhfaskjhkjfhaskj",
    price: "50.50",
    saleStatus: true,
    rentalStatus: true,
  },
  {
    id: 18,
    name: "Terreno",
    description:
      "probandokjahkfhhkshafhkakfjhkfjhkfjshiudjkhjahdkjfhkahfkeoifihfajhkfakscbkjjfkjhfaskjhkjfhaskj",
    price: "50.50",
    saleStatus: true,
    rentalStatus: true,
  },
  {
    id: 19,
    name: "Terreno",
    description:
      "probandokjahkfhhkshafhkakfjhkfjhkfjshiudjkhjahdkjfhkahfkeoifihfajhkfakscbkjjfkjhfaskjhkjfhaskj",
    price: "50.50",
    saleStatus: true,
    rentalStatus: true,
  },
  {
    id: 20,
    name: "Terreno",
    description:
      "probandokjahkfhhkshafhkakfjhkfjhkfjshiudjkhjahdkjfhkahfkeoifihfajhkfakscbkjjfkjhfaskjhkjfhaskj",
    price: "50.50",
    saleStatus: true,
    rentalStatus: false,
  },
];

export default function HeroProducts() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // paginacion
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

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
            className="flex overflow-hidden bg-black py-16 object-fill"
            style={{
              // backgroundImage:
              //   "url(https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733346062/portadaproducts_fktdpq.png)",
              backgroundImage: "url(/assets/productos3.jpg)",
              // backgroundImage: "https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733346062/portadaproducts_fktdpq.png",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* <div className="container px-4">
              <div className="relative z-10 mx-auto max-w-5xl text-center pl-12">
                <h1 className="mb-6 text-6xl font-bold text-yellow-500 md:text-7xl">
                  DIVERSOS
                </h1>
                <span className="mb-6 text-6xl font-bold md:text-7xl text-white">
                  PRODUCTOS
                </span>
                <p className="mb-8 text-3xl font-bold text-white">
                  VENTAS <span className="text-yellow-500">ACCESIBLES</span>
                </p>
              </div>
            </div> */}
            <div
              className="container mx-auto px-4 text-center mt-2"
            >
              <h1 className="mb-6 text-4xl font-bold text-yellow-500 md:text-6xl">
                DIVERSOS
                <span className="block text-white">PRODUCTOS</span>
              </h1>
              <p className="mb-8 text-2xl font-bold text-white">
                VENTAS <span className="text-yellow-500">ACCESIBLES</span>
              </p>
            </div>
          </section>

          {/* ProductSection */}
          <section className="py-12">
            <div className="container px-4">
              <h2 className="text-white text-2xl font-bold mb-6">
                Nuestros Productos
              </h2>
              <div className="h-full rounded-md border md:ml-8 md:w-full">
                <div className="grid gap-6 p-4 md:grid-cols-2 lg:grid-cols-3">
                  {currentProducts.map((product) => (
                    <Card
                      key={product.id}
                      // className="group relative overflow-hidden rounded-lg bg-yellow-500/10 p-6 transition-colors hover:bg-yellow-500/20"
                      className="group relative overflow-hidden rounded-lg p-6 transition-colors bg-transparent"
                      style={{
                        // backgroundImage: "url(/assets/cardproduct.png)",
                        backgroundImage:
                          "url(https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733346059/cardproduct_umk52s.png)",
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
                            <div className="flex items-center space-x-2">
                              <p>Disponible: </p>
                              {product.saleStatus && (
                                // <span className="text-green-500">Venta</span>
                                <Chip size="sm" color="success" variant="dot">
                                  Venta
                                </Chip>
                              )}
                              {product.saleStatus && product.rentalStatus && (
                                <span className="text-gray-800"> | </span>
                              )}
                              {product.rentalStatus && (
                                // <span className="text-blue-500">Alquiler</span>
                                <Chip size="sm" color="success" variant="dot">
                                  Alquiler
                                </Chip>
                              )}
                            </div>
                            {expandedCard === product.id && (
                              <Button
                                color="success"
                                // href="https://wa.link/i30rpf"
                                // target="_blank"
                                startContent={<MessageCircleMore />}
                                className="text-black mt-12"
                                onPress={() =>
                                  window.open(
                                    "https://wa.link/i30rpf",
                                    "_blank"
                                  )
                                }
                              >
                                WhatsApp
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

                          <div className="w-1/3" onClick={onOpen}>
                            {/* <Image
                              src="https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733346061/herojj_m15yfk.jpg"
                              alt={product.name}
                              width={100}
                              height={100}
                              //   className="rounded-md object-cover"
                              className="aspect-square overflow-hidden rounded-lg bg-black"
                            /> */}
                            <CldImage
                              alt="Fondo"
                              src="https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733346061/herojj_m15yfk.jpg"
                              // width={120}
                              // height={42}
                              width={100}
                              height={100}
                              priority
                              crop={{
                                type: "fit",
                                source: true,
                              }}
                              className="aspect-square overflow-hidden rounded-lg bg-black"
                            />
                          </div>

                          <Modal
                            backdrop="transparent"
                            isOpen={isOpen}
                            onOpenChange={onOpenChange}
                          >
                            <ModalContent>
                              {(onClose) => (
                                <>
                                  <ModalBody>
                                    {/* <Image
                                      src="https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733346061/herojj_m15yfk.jpg"
                                      alt={product.name}
                                      width={400}
                                      height={400}
                                      className="w-full h-auto rounded-md object-cover"
                                    /> */}
                                    <CldImage
                                      alt="Fondo"
                                      src="https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733346061/herojj_m15yfk.jpg"
                                      // width={120}
                                      // height={42}
                                      width={400}
                                      height={400}
                                      priority
                                      crop={{
                                        type: "fit",
                                        source: true,
                                      }}
                                      className="aspect-square overflow-hidden rounded-lg bg-black"
                                    />
                                  </ModalBody>
                                  <ModalFooter>
                                    <Button
                                      color="danger"
                                      variant="light"
                                      onPress={onClose}
                                    >
                                      Close
                                    </Button>
                                  </ModalFooter>
                                </>
                              )}
                            </ModalContent>
                          </Modal>
                        </div>
                      </CardBody>
                    </Card>
                  ))}
                </div>
              </div>
              <div className="w-full mt-8 px-2 flex justify-center">
                <Pagination
                  showShadow
                  color="warning"
                  size="lg"
                  // showControls
                  initialPage={1}
                  total={Math.ceil(products.length / productsPerPage)}
                  // onChange={() => paginate(currentPage + 1)}
                  page={currentPage}
                  onChange={setCurrentPage}
                />
              </div>
              {/* <ScrollShadow className="h-[600px] rounded-md border md:ml-8 md:w-full">
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
              </ScrollShadow> */}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
