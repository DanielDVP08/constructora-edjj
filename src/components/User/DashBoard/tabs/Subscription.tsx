"use client";

import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Radio,
  RadioGroup,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import { MemberCard } from "../../../../../types/member";

interface SubscriptionProps{
  member: MemberCard | null;
}

export default function Subscription({member}:SubscriptionProps) {
  // const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [cancelReason, setCancelReason] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleSubmit = () => {
    // Here you would typically send the cancellation reason to your backend
    console.log("Cancellation reason:", cancelReason);
    // setIsDialogOpen(false);
  };

  return (
    <Card>
      <CardHeader>
        <h1>Membresia</h1>
      </CardHeader>
      <CardBody className="space-y-6 ml-8 mb-8">
        <div className="flex items-center space-x-4">
          <Avatar
            size="lg"
            // src="https://i.pravatar.cc/150?u=a04258114e29026302d"
            src={member?.profileimage as string}
          />
          <div>
            <h2 className="ml-1 text-2xl font-bold">{member?.firstName} {member?.lastName}</h2>
            <Chip>Premium Member</Chip>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Subscription Plan</h3>
          <p>Premium Plan</p>
          <Chip variant="dot" className="bg-green-100 text-green-800">
            Active
          </Chip>
        </div>
        <div className="space-y-2">
          <p>
            <strong>Membership Start:</strong> January 1, 2023
          </p>
          <p>
            <strong>Membership End:</strong> December 31, 2023
          </p>
        </div>

        <div className="px-auto">
          <Button variant="shadow" color="danger" onPress={onOpen}>
            Cancelar Membresia
          </Button>
        </div>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader>Cancelar Membresia</ModalHeader>
                <ModalBody>
                  <span>
                  Lamentamos que te vayas. Por favor, infórmanos por qué estás cancelando tu membresía.
                  </span>
                  <div className="grid gap-4 py-4">
                    <RadioGroup
                      // label="encuesta"
                      onValueChange={setCancelReason}
                    >
                      <div className="flex items-center space-x-2">
                        <Radio value="too-expensive" id="too-expensive">
                          <p aria-label="too-expensive">Demasiado caro</p>
                        </Radio>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Radio value="not-using" id="not-using">
                          <p aria-label="not-using">No lo uso lo suficiente</p>
                        </Radio>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Radio value="found-alternative" id="found-alternative">
                          <p aria-label="found-alternative">
                          Encontré una mejor alternativa
                          </p>
                        </Radio>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Radio value="other" id="other">
                          <p aria-label="other">Otros</p>
                        </Radio>
                      </div>
                    </RadioGroup>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cerrar
                  </Button>
                  <Button type="submit" onPress={handleSubmit}>
                    Cancelar
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </CardBody>
    </Card>
  );
}
