"use client";

import { useEffect } from "react";
import { useModalStore } from "./hook/use-modal";
import { ImageModal } from "./ImageModal";
import { items } from "./data";
import { CldImage } from "next-cloudinary";
// import Image from "next/image";
// import Link from 'next/link'
// import { ImageModal } from '@/components/image-modal'
// import { useModalStore } from ''

export default function GalleryPhotos() {
  const { onOpen, setItems } = useModalStore();

  useEffect(() => {
    setItems(items);
  }, [setItems]);

  return (
    <div className="min-h-screen bg-amber-300 flex flex-col">
      {/* <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold">Image Collections</span>
          </Link>
          <nav className="flex gap-6">
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header> */}
      <section className="flex-grow container mx-auto py-6 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center py-6">
          Nuestros Proyectos
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {items.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer transition-transform hover:scale-105 w-full max-w-xs mb-8"
              onClick={() => onOpen(index)}
            >
              <div className="relative aspect-square mb-2">
                {/* <Image
                  src={item.images[0].src}
                  alt={item.images[0].alt}
                  fill
                  className="object-cover rounded-lg"
                /> */}
                <CldImage
                  src={item.images[0].src}
                  alt={item.images[0].alt}
                  fill
                //   priority
                  crop={{
                    type: "fit",
                    source: true,
                  }}
                  className="object-cover rounded-lg"
                />
              </div>
              <h2 className="text-xl font-semibold text-center">
                {item.title}
              </h2>
              <p className="text-sm text-muted-foreground text-center">
                {item.images.length} imagenes
              </p>
            </div>
          ))}
        </div>
      </section>
      <ImageModal />
    </div>
  );
}
