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
import { Edit } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FieldValues } from "react-hook-form";

interface InfoBusinessProps {
  onUpdateData: ({}) => void;
  data: FieldValues;
  isEdit: boolean;
}

export default function InfoBusinessSection({
  onUpdateData,
  data,
  isEdit,
}: InfoBusinessProps) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const [auxAddress, setAuxAddress] = useState(data.businessaddress || "");
  const [auxGoogleMaps, setAuxGoogleMaps] = useState(data.googlemaps || "");
  const [auxWhatsapp, setAuxWhatsapp] = useState(data.whatsapp || "");

  const [address, setAddress] = useState("");
  const [googleMaps, setGoogleMaps] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const handleChangeInfo = () => {
    setAuxAddress(address);
    setAuxGoogleMaps(googleMaps);
    setAuxWhatsapp(whatsapp);
    onUpdateData({
      businessaddress: address,
      googlemaps: googleMaps,
      whatsapp: whatsapp,
    });
    console.log(data);
    onClose();
  };

  return (
    <>
      <div className="flex-1 space-y-4">
        <h3 className="text-xl font-semibold">Informacion de Contacto</h3>
        <p>
          <strong>Razon Social:</strong> {data.companyname}
        </p>
        <p>
          <strong>Direccion:</strong> {auxAddress}
        </p>
        <p>
          <strong>Ubicacion:</strong> {data.department} {data.province}
        </p>
        <p>
          <strong>Google Maps:</strong>{" "}
          <Link
            href={auxGoogleMaps as string}
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Ver Google Maps
          </Link>
        </p>
        <p>
          <strong>WhatsApp:</strong>{" "}
          <Link
            href={auxWhatsapp as string}
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Contactar por WhatsApp
          </Link>
        </p>

        <Button size="sm" onPress={onOpen} isDisabled={!isEdit}>
          <Edit className="mr-2" size={16} />
          Editar
        </Button>

        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader>Cambiar Informacion</ModalHeader>
                <ModalBody>
                  <input
                    className="w-full p-2 border rounded"
                    placeholder="Direccion"
                    // value={businessInfo.address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <input
                    className="w-full p-2 border rounded"
                    placeholder="Google Maps Link"
                    // value={businessInfo.googleMapsLink}
                    onChange={(e) => setGoogleMaps(e.target.value)}
                  />
                  <input
                    className="w-full p-2 border rounded"
                    placeholder="WhatsApp Link"
                    // value={businessInfo.whatsappLink}
                    onChange={(e) => setWhatsapp(e.target.value)}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cerrar
                  </Button>
                  <Button color="primary" onPress={handleChangeInfo}>
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
