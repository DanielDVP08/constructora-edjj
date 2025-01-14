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

interface LogoProps {
  onUpdateData: ({}) => void;
  data: FieldValues;
  isEdit: boolean;
}

export default function LogoSection({ onUpdateData, data, isEdit }: LogoProps) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const [auxLogoImage, setAuxLogoImage] = useState(data.companylogo || null);
  const [logoImage, setLogoImage] = useState(data.companylogo || null);
  const [newLogoImage, setNewLogoImage] = useState<File | null>();

  // const [workStatus, setWorkStatus] = useState("working");
  // const [isWorking, setIsWorking] = useState(data.isWorking || false);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];
    setNewLogoImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setLogoImage(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleChangeImage = () => {
    setAuxLogoImage(logoImage);
    onUpdateData({ companylogo: logoImage, newLogo: newLogoImage });
    // console.log(data);
    onClose();
  };

  return (
    <>
      <div className="relative aspect-square w-24 rounded-lg overflow-hidden">
        <Image
          src={auxLogoImage as string}
          alt="Logo"
          layout="fill"
          objectFit="contain"
        />
        <Button
          className="absolute bottom-1 right-1"
          size="sm"
          isIconOnly
          onPress={onOpen}
          isDisabled={!isEdit}
        >
          <Camera className="m-auto" size={16} />
        </Button>

        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader>Cambiar Imagen de Logo</ModalHeader>
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
