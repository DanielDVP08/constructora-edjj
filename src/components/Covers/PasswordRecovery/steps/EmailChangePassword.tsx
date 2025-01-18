"use client";

import { Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import {
  isValidEmail,
  sendCodeChangePass,
} from "../../../../../actions/auth-action";
import { AuthError } from "next-auth";

interface EmailProps {
  onNext: ({}) => void;
  data: FieldValues;
}

function generateCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export default function EmailChangePassword({ onNext, data }: EmailProps) {
  const [emailUser, setEmailUser] = useState(data.email || "");
  const [error, setError] = useState<string | null>(null);
  const [code, setCode] = useState("");

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("entro");
    try {
      const res = await isValidEmail(emailUser);
      console.log("paso la validacion", res);
      if (!res) {
        setError("La contraseña es incorrecta. Verfique los datos");
      } else {
        console.log("se encontro el correo");
        //crear el codigo de verificacion
        sendCode();
        setError(null);
        onNext({ email: emailUser, code: code });
      }
    } catch (error) {
      if (error instanceof AuthError) {
        return { error: error.cause?.err?.message };
      }
      return { error: "error 500" };
    }
  };

  const sendCode = async () => {
    await sendCodeChangePass(emailUser, code);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <h1 className="mx-auto p-4">
          <strong>Correo Electronico</strong>
        </h1>
      </CardHeader>
      <CardBody>
        <p className="mx-2">
          Ingrese su correo electronico y le enviaremos un codigo de
          verificacion.
        </p>
        <form onSubmit={handleSubmit} className="my-4 space-y-4">
          <div className="px-4 space-y-2">
            <Input
              radius="none"
              size="md"
              color="primary"
              label="Email"
              type="email"
              variant="bordered"
              value={emailUser}
              onChange={(e) => {
                setCode(generateCode());
                setEmailUser(e.target.value);
              }}
              isRequired
            />
            {error && (
              <p className="text-orange-500 text-sm mt-1">
                Este Correo Electronico no se encuentra registrado
              </p>
            )}
          </div>
          <div className="mx-8">
            <Button type="submit" color="success" className="w-full">
              Enviar Codigo
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}
