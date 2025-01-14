"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { Camera } from "lucide-react";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { FieldValues } from "react-hook-form";

interface CoverProps {
  onUpdateData: ({}) => void;
  data: FieldValues;
  isEdit: boolean;
}

export default function CoverSection({
  onUpdateData,
  data,
  isEdit,
}: CoverProps) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const [auxCoverImage, setAuxCoverImage] = useState(data.coverimage || null);
  const [coverImage, setCoverImage] = useState(data.coverimage || null);
  const [newCoverImage, setNewCoverImage] = useState<File | null>();

  // const [workStatus, setWorkStatus] = useState("working");
  // const [isWorking, setIsWorking] = useState(data.isWorking || false);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];
    setNewCoverImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setCoverImage(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleChangeImage = () => {
    setAuxCoverImage(coverImage);
    onUpdateData({ coverimage: coverImage, newCoverImage: newCoverImage });
    // console.log(data);
    onClose();
  };

  return (
    <>
      <div className="relative aspect-[21/9] rounded-lg overflow-hidden">
        <Image
          src={auxCoverImage as string}
          alt="Cover Photo"
          layout="fill"
          objectFit="cover"
        />
        <Button
          className="absolute top-4 right-4"
          variant="solid"
          size="sm"
          onPress={onOpen}
          isDisabled={!isEdit}
        >
          <Camera className="mr-2" size={16} />
          Cambiar
        </Button>

        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader>Cambiar Imagen de Portada</ModalHeader>
                <ModalBody>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cerrar
                  </Button>
                  <Button color="primary" onPress={handleChangeImage}>
                    Cambiar
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </>
  );
}
