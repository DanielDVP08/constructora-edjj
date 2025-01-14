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
import { Award, Mails, Phone, PhoneCall, User } from "lucide-react";
import { useState } from "react";
import { FieldValues } from "react-hook-form";

interface PersonalInformationProps {
  onUpdateData: ({}) => void;
  data: FieldValues;
  isEdit: boolean;
}

export default function PersonalInformationSection({
  onUpdateData,
  data,
  isEdit,
}: PersonalInformationProps) {
  const [auxPhoneNumber, setAuxPhoneNumber] = useState(data.phoneNumber || "");
  const [phoneNumber, setPhoneNumber] = useState(data.phoneNumber || "");

  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const handleChangePhone = () => {
    setAuxPhoneNumber(phoneNumber);
    onUpdateData({ phoneNumber });
    console.log(data);
    onClose();
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-4">
        <div>
          <div className="flex items-center">
            <User className="flex-shrink-0 h-5 w-5 mr-2" />
            <label htmlFor="name">Nombre</label>
          </div>
          {/* <Input
            id="name"
            name="name"
            value={profile.name}
            onChange={handleChange}
            disabled={!isEditing}
          /> */}
          <p key="name" className="ml-2 mt-1">
            {data.firstName} {data.lastName}
          </p>
        </div>
        <div>
          <div className="flex items-center">
            <Award className="flex-shrink-0 h-5 w-5 mr-2" />
            <label htmlFor="title">Titulo</label>
          </div>
          {/* <Input
            id="title"
            name="title"
            value={profile.title}
            onChange={handleChange}
            disabled={!isEditing}
          /> */}
          <p key="name" className="ml-2 mt-1">
            {data.career ? data.career : "Operario"}
          </p>
        </div>
        <div>
          <div className="flex items-center">
            <Mails className="flex-shrink-0 mr-2 h-5 w-5" />
            <label htmlFor="email">Correo Electronico</label>
          </div>
          {/* <Input
            id="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            disabled={!isEditing}
          /> */}
          <p key="name" className="ml-2 mt-1">
            {data.email}
          </p>
        </div>
        <div>
          <div className="flex items-center">
            <PhoneCall className="flex-shrink-0 h-5 w-5 mr-2" />
            <label htmlFor="phone">Telefono Movil</label>
          </div>
          <div className="flex">
            {/* <Input
              id="phone"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              disabled={!isEditing}
            /> */}
            <p key="name" className="ml-2 mt-2">
              {auxPhoneNumber}
            </p>
            <Button
              variant="ghost"
              size="sm"
              className="ml-2 mt-1"
              isIconOnly
              //   onPress={() => setIsPhoneModalOpen(true)}
              onPress={onOpen}
              isDisabled={!isEdit}
            >
              <Phone className="h-4 w-4" />
            </Button>
            {/* cambiar numero de telefono  */}

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader>Cambiar Numero de Telefono</ModalHeader>
                    <ModalBody>
                      <input
                        type="tel"
                        placeholder="Telefono"
                        // value={formData.phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="w-full p-2 border rounded"
                        // required
                      />
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Cerrar
                      </Button>
                      <Button color="primary" onPress={handleChangePhone}>
                        Cambiar
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}
