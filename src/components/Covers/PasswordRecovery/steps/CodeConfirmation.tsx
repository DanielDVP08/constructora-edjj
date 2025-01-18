"use client";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  InputOtp,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { sendCodeChangePass } from "../../../../../actions/auth-action";
import { FieldValues } from "react-hook-form";

function generateCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

interface CodeConfirmationProps {
  onNext: ({}) => void;
  data: FieldValues;
}

export default function CodeConfirmation({
  onNext,
  data,
}: CodeConfirmationProps) {
  const [errorCode, setErrorCode] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes in seconds
  const [code, setCode] = useState(data.code || "");
  const [isResendActive, setIsResendActive] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState("");

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setCode(generateCode());
      setIsResendActive(true);
    }
  }, [isDialogOpen, timeLeft]);

  const handleConfirmChange = async () => {
    // Here you would typically send the confirmation code to your backend
    // console.log("Confirmation code:", confirmationCode);

    if (code === confirmationCode) {
      // console.log(code);
      // console.log("coincide");
      setErrorCode(null);
      setIsDialogOpen(false);
      onNext({ ...data });
    } else {
      setErrorCode("El Codigo es incorrecto");
    }
  };

  const sendCode = async () => {
    await sendCodeChangePass(data.email, code);
  };

  const handleResendCode = () => {
    // Here you would typically send a request to resend the confirmation code
    sendCode();
    setErrorCode(null);
    setTimeLeft(180);
    setIsResendActive(false);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <h1 className="mx-auto p-4">
          <strong>Verificacion</strong>
        </h1>
      </CardHeader>
      <CardBody>
        <p className="mx-2">
          Ingresa el código de confirmación que te enviamos a tu correo
          electrónico. El código expirará en {Math.floor(timeLeft / 60)}:
          {(timeLeft % 60).toString().padStart(2, "0")}.
        </p>
        <InputOtp
          length={6}
          variant="bordered"
          color="primary"
          // onValueChange={(e) => setConfirmationCode(e.target.value)}
          onValueChange={setConfirmationCode}
          className="mx-auto mt-4"
        />
        {errorCode && (
          <p className="text-orange-500 text-sm my-2 mx-auto">
            El Codigo es Incorrecto
          </p>
        )}
        <div className="ml-auto my-2 mr-2">
          <Button
            color="primary"
            onPress={handleConfirmChange}
            disabled={!confirmationCode}
          >
            Confirmar
          </Button>
          {isResendActive && (
            <Button color="warning" onPress={handleResendCode} className="ml-4">
              Reenviar Codigo
            </Button>
          )}
        </div>
      </CardBody>
    </Card>
  );
}
