"use client";

import {
  Avatar,
  Button,
  // Chip,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  // Switch,
  useDisclosure,
} from "@nextui-org/react";
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
  const [newProfileImage, setNewProfileImage] = useState<File | null>();

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
    // onUpdateData({ profileimage: newProfileImage, isChangeImage: true });
    // console.log(data);
    onClose();
  };

  return (
    <>
      <div className="flex flex-col items-center my-4">
        <Avatar
          className="h-32 w-32 border-4 border-white"
          src={auxProfileImage as string}
          // src="https://i.pravatar.cc/150?u=a04258114e29026302d"
          // src={
          //   typeof auxProfileImage === "string"
          //     ? auxProfileImage
          //     : URL.createObjectURL(auxProfileImage)
          // }
        />

        {/* cambiar foto de perfil */}

        <Button
          variant="solid"
          size="sm"
          onPress={onOpen}
          className="mt-4"
          isDisabled={!isEdit}
        >
          Cambiar Imagen
        </Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader>Cambiar Imagen de Perfil</ModalHeader>
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

        {/* switch de si estas trabajando */}
        {/* <Chip className="mt-4">
          {workStatus === "working" ? "Working" : "Open to Work"}
        </Chip>
        <Button
          variant="solid"
          onPress={() =>
            setWorkStatus(workStatus === "working" ? "open" : "working")
          }
        >
          Cambiar Estado
        </Button> */}

        {/* <Chip color={isWorking ? "success" : "primary"} className="mt-4">
          {isWorking ? "Trabajando" : "Disponble a Trabajar"}
        </Chip>
        <Switch
          color="success"
          isSelected={isWorking}
          onValueChange={setIsWorking}
          isDisabled={!isEdit}
          className="mt-1"
        /> */}
        {/* {isWorking ? "Working" : "Open to Work"}
        </Switch> */}
      </div>
    </>
  );
}
