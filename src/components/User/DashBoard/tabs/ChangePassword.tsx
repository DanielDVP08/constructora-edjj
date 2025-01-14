"use client";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  InputOtp,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useState, useEffect } from "react";

export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState("");
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes in seconds
  const [isResendActive, setIsResendActive] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    if (isDialogOpen && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setIsResendActive(true);
    }
  }, [isDialogOpen, timeLeft]);

  const handleUpdatePassword = () => {
    // Here you would typically send a request to your backend to initiate the password change
    setIsDialogOpen(true);
    setTimeLeft(180);
    setIsResendActive(false);
    onOpen();
  };

  const handleConfirmChange = () => {
    // Here you would typically send the confirmation code to your backend
    console.log("Confirmation code:", confirmationCode);
    setIsDialogOpen(false);
  };

  const handleResendCode = () => {
    // Here you would typically send a request to resend the confirmation code
    setTimeLeft(180);
    setIsResendActive(false);
  };

  const isUpdateButtonDisabled =
    !currentPassword ||
    !newPassword ||
    !confirmPassword ||
    newPassword !== confirmPassword;

  return (
    <Card>
      <CardHeader>
        <h1 className="ml-2">Cambiar Contraseña</h1>
      </CardHeader>
      <CardBody className="ml-8 mb-8 space-y-6">
        <div className="flex flex-col">
          <label htmlFor="current-password" className="mb-2">
            Actual Contraseña
          </label>
          <Input
            id="current-password"
            type="password"
            variant="bordered"
            size="md"
            color="primary"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-96"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="new-password" className="mb-2">
            Nueva Contraseña
          </label>
          <Input
            id="new-password"
            type="password"
            variant="bordered"
            size="md"
            color="primary"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-96"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="confirm-password" className="mb-2">
            Confirmar Nueva Contraseña
          </label>
          <Input
            id="confirm-password"
            type="password"
            variant="bordered"
            size="md"
            color="primary"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-96"
          />
        </div>
        <div className="px-auto mt-2">
          <Button
            color="warning"
            variant="shadow"
            onPress={handleUpdatePassword}
            isDisabled={isUpdateButtonDisabled}
          >
            Cambiar Contraseña
          </Button>
        </div>

        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader>
                  <h3>Confirm Password Change</h3>
                </ModalHeader>
                <ModalBody>
                  <span>
                    Enter the confirmation code sent to your email. The code
                    will expire in {Math.floor(timeLeft / 60)}:
                    {(timeLeft % 60).toString().padStart(2, "0")}.
                  </span>
                  <InputOtp
                    length={6}
                    variant="bordered"
                    color="primary"
                    // onValueChange={(e) => setConfirmationCode(e.target.value)}
                    onValueChange={setConfirmationCode}
                    className="mx-auto"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <button
                    onClick={handleConfirmChange}
                    disabled={!confirmationCode}
                  >
                    Confirm
                  </button>
                  {isResendActive && (
                    <button onClick={handleResendCode}>Resend Code</button>
                  )}
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </CardBody>
    </Card>
  );
}
