"use client";

import { Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import { AuthError } from "next-auth";
import { useState } from "react";

import { EyeSlashFilledIcon } from "@/components/Auth/FormSinginup/EyeFilled/EyeSlashFilledIcon";
import { EyeFilledIcon } from "@/components/Auth/FormSinginup/EyeFilled/EyeFilledIcon";
import { FieldValues } from "react-hook-form";
import { changePass } from "../../../../../actions/auth-action";
import { useRouter } from "next/navigation";

interface NewPasswordProps {
  data: FieldValues;
}

export default function NewPassword({ data }: NewPasswordProps) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isVisibleNew, setIsVisibleNew] = useState(false);
  const [isVisibleComfirNew, setIsVisibleComfirNew] = useState(false);

  const router = useRouter();

  const toggleVisibilityNew = () => setIsVisibleNew(!isVisibleNew);
  const toggleVisibilityComfirNew = () =>
    setIsVisibleComfirNew(!isVisibleComfirNew);

  const handleUpdatePassword = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    // Here you would typically send a request to your backend to initiate the password change
    try {
      await changePass(newPassword, data.email);
      //   console.log(newPassword, data.email);
      router.push("/signin");
    } catch (error) {
      if (error instanceof AuthError) {
        return { error: error.cause?.err?.message };
      }
      return { error: "error 500" };
    }
  };

  const isUpdateButtonDisabled =
    !newPassword || !confirmPassword || newPassword !== confirmPassword;

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <h1 className="mx-auto p-2">
          <strong>Nueva Contraseña</strong>
        </h1>
      </CardHeader>
      <CardBody>
        <p>Ingrese la nueva contraseña.</p>
        <form onSubmit={handleUpdatePassword} className="space-y-4 my-2">
          <div className="space-y-2 ml-4">
            <label htmlFor="new-password">Nueva Contraseña</label>
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
              isRequired
            />
          </div>
          <div className="space-y-2 ml-4">
            <label htmlFor="confirm-password">Confirmar Nueva Contraseña</label>

            <Input
              id="confirm-password"
              type={isVisibleComfirNew ? "text" : "password"}
              variant="bordered"
              size="md"
              color="primary"
              value={confirmPassword}
              onChange={(e) => {
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
              isRequired
            />
          </div>
          <Button
            type="submit"
            className="w-full"
            color="success"
            isDisabled={isUpdateButtonDisabled}
          >
            Cambiar Contraseña
          </Button>
        </form>
      </CardBody>
    </Card>
  );
}
