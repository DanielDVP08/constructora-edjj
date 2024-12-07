"use client";

import { useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader } from "@nextui-org/react";
import { useModalStore } from "./hook/use-modal";
import { CldImage } from "next-cloudinary";
// import Image from "next/image";
// import { X } from 'lucide-react'
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
// import { Button } from '@/components/ui/button'
// import { useModalStore } from '@/hooks/use-modal-store'

export function ImageModal() {
  const { isOpen, onClose, selectedItem, items } = useModalStore();
  const [currentItem, setCurrentItem] = useState(items[selectedItem || 0]);

  useEffect(() => {
    if (selectedItem !== null) {
      setCurrentItem(items[selectedItem]);
    }
  }, [selectedItem, items]);

  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onOpenChange={onClose} scrollBehavior="outside" backdrop="blur">
      <ModalContent className="max-w-4xl">
        <ModalHeader>
          <h2 className="text-2xl font-bold text-center">
            {currentItem?.title}
          </h2>
          {/* <Button
            variant="ghost"
            size="sm"
            className="absolute right-4 top-4"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button> */}
        </ModalHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-6 mx-6">
          {currentItem?.images.map((image, index) => (
            <div key={index} className="relative aspect-square">
              {/* <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover rounded-lg"
              /> */}
              <CldImage
                src={image.src}
                alt={image.alt}
                fill
                // priority
                crop={{
                  type: "fit",
                  source: true,
                }}
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </ModalContent>
    </Modal>
  );
}
