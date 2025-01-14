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

interface ProfileImageProps {
  onUpdateData: ({}) => void;
  data: FieldValues;
  isEdit: boolean;
}

export default function ProfileImageSection({
  onUpdateData,
  data,
  isEdit,
}: ProfileImageProps) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const [auxProfileImage, setAuxProfileImage] = useState(
    data.profileimage || null
  );
  const [profileImage, setProfileImage] = useState(data.profileimage || null);
  const [newProfileImage, setNewProfileImage] = useState<File|null>();

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];
    setNewProfileImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setProfileImage(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleChangeImage = () => {
    setAuxProfileImage(profileImage);
    onUpdateData({ profileimage:profileImage, newProfileImage: newProfileImage });
    // console.log(data);
    onClose();
  };

  return (
    <>
      <div className="relative aspect-square w-48 rounded-lg overflow-hidden">
        <Image
          src={auxProfileImage as string}
          alt="Home Photo"
          layout="fill"
          objectFit="cover"
        />
        <Button
          className="absolute bottom-2 right-2"
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
                <ModalHeader>Cambiar Imagen de Inicio</ModalHeader>
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
