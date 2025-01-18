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
import { AuthError } from "next-auth";
import { useEffect, useState } from "react";
import {
  cerrarSession,
  changePass,
  isValidPass,
  sendCodeChangePass,
} from "../../../../actions/auth-action";
import { EyeSlashFilledIcon } from "@/components/Auth/FormSinginup/EyeFilled/EyeSlashFilledIcon";
import { EyeFilledIcon } from "@/components/Auth/FormSinginup/EyeFilled/EyeFilledIcon";

function generateCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

interface PasswordProps {
  email: string;
  pass: string;
}

export default function PasswordChangeForm({ email, pass }: PasswordProps) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState("");
  const [code, setCode] = useState("");
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes in seconds
  const [isResendActive, setIsResendActive] = useState(false);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [error, setError] = useState<string | null>(null);
  const [errorCode, setErrorCode] = useState<string | null>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleNew, setIsVisibleNew] = useState(false);
  const [isVisibleComfirNew, setIsVisibleComfirNew] = useState(false);

  useEffect(() => {
    if (isDialogOpen && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setCode(generateCode());
      setIsResendActive(true);
    }
  }, [isDialogOpen, timeLeft]);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleVisibilityNew = () => setIsVisibleNew(!isVisibleNew);
  const toggleVisibilityComfirNew = () =>
    setIsVisibleComfirNew(!isVisibleComfirNew);

  const handleUpdatePassword = async () => {
    // Here you would typically send a request to your backend to initiate the password change
    try {
      const res = await isValidPass(currentPassword, pass);
      // console.log(res);
      if (!res) {
        setError("La contraseña es incorrecta. Verfique los datos");
      } else {
        //crear el codigo de verificacion
        sendCode();
        // console.log(email,code)
        // await sendCodeConfirmation(email, code);

        setError(null);
        setIsDialogOpen(true);
        setTimeLeft(180);
        setIsResendActive(false);
        onOpen();
      }
    } catch (error) {
      if (error instanceof AuthError) {
        return { error: error.cause?.err?.message };
      }
      return { error: "error 500" };
    }
  };

  const handleConfirmChange = async () => {
    // Here you would typically send the confirmation code to your backend
    // console.log("Confirmation code:", confirmationCode);

    if (code === confirmationCode) {
      // console.log(code);
      // console.log("coincide");
      setErrorCode(null);
      await changePass(newPassword, email);
      setIsDialogOpen(false);
      onClose();
      await cerrarSession();
    } else {
      // console.log(code);
      // console.log("no coincide");
      setErrorCode("El Codigo es incorrecto");
    }
  };

  const sendCode = async () => {
    await sendCodeChangePass(email, code);
  };

  const handleResendCode = () => {
    // Here you would typically send a request to resend the confirmation code
    sendCode();
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
        <h1 className="ml-2">
          <strong>Cambiar Contraseña</strong>
        </h1>
      </CardHeader>
      <CardBody className="m-8 space-y-6">
        <div className="flex flex-col">
          <label htmlFor="current-password" className="mb-2">
            Actual Contraseña
          </label>
          <Input
            id="current-password"
            type={isVisible ? "text" : "password"}
            variant="bordered"
            size="md"
            color="primary"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-96"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
                aria-label="toggle password visibility"
              >
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
          />
          {error && (
            <p className="text-orange-500 text-sm mt-1">
              La Contraseña es incorrecta
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="new-password" className="mb-2">
            Nueva Contraseña
          </label>
          <Input
            id="new-password"
            type={isVisibleNew ? "text" : "password"}
            variant="bordered"
            size="md"
            color="primary"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-96"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibilityNew}
                aria-label="toggle password visibility"
              >
                {isVisibleNew ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="confirm-password" className="mb-2">
            Confirmar Nueva Contraseña
          </label>
          <Input
            id="confirm-password"
            type={isVisibleComfirNew ? "text" : "password"}
            variant="bordered"
            size="md"
            color="primary"
            value={confirmPassword}
            onChange={(e) => {
              setCode(generateCode());
              setConfirmPassword(e.target.value);
            }}
            className="w-96"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibilityComfirNew}
                aria-label="toggle password visibility"
              >
                {isVisibleComfirNew ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
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
                  <h3>Confirmar Cambio</h3>
                </ModalHeader>
                <ModalBody>
                  <span>
                    Ingresa el código de confirmación que te enviamos a tu
                    correo electrónico. El código expirará en{" "}
                    {Math.floor(timeLeft / 60)}:
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
                  {errorCode && (
                    <p className="text-orange-500 text-sm mt-1">
                      El Codigo es Incorrecto
                    </p>
                  )}
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cerrar
                  </Button>
                  <Button
                    color="primary"
                    onPress={handleConfirmChange}
                    disabled={!confirmationCode}
                  >
                    Confirmar
                  </Button>
                  {isResendActive && (
                    <Button color="warning" onPress={handleResendCode}>
                      Reenviar Codigo
                    </Button>
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
