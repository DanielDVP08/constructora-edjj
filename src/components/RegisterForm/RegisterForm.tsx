"use client";

import { Button, Input } from "@nextui-org/react";
import { useMemo, useState } from "react";
import { EyeFilledIcon } from "../EyeFilled/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../EyeFilled/EyeSlashFilledIcon";
import Link from "next/link";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/libs/zod";
// import { nanoid } from "nanoid";
// import db from "@/libs/bd";
// import { sendVerificationEmail } from "@/libs/brevo";

export default function RegisterForm() {
  const [value, setValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const toggleVisibility = () => setIsVisible(!isVisible);

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = useMemo(() => {
    if (value === "") return false;

    return validateEmail(value) ? false : true;
  }, [value]);

  const onSubmit = handleSubmit(async (data) => {
    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resJSON = await res.json();

    console.log(resJSON);

    console.log(data);
  });

  return (
    <div
      className="min-h-screen bg-black bg-opacity-75 flex items-center justify-center"
      style={{
        backgroundImage: "url(/assets/HeroFondo.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black bg-opacity-75 p-10 rounded-md w-full max-w-md">
        <h1 className="text-white text-3xl font-bold mb-6">Registrate</h1>

        <form onSubmit={onSubmit} className="space-y-4">
          <Input
            isClearable
            type="text"
            label="Nombre de Usuario"
            placeholder="Ingrese su nombre"
            className="max-w-xs"
            required
            {...register("username", {
              required: {
                value: true,
                message: "Ingrese un nombre valido",
              },
            })}
          />
          <Input
            value={value}
            type="email"
            label="Email"
            variant="faded"
            isInvalid={isInvalid}
            color={isInvalid ? "danger" : "default"}
            errorMessage="Ingrese un Email valido"
            onValueChange={setValue}
            className="max-w-xs"
            required
            placeholder="Correo Electronico"
            {...register("email", {
              required: {
                value: true,
                message: "Ingrese un correo valido",
              },
            })}
          />
          {/* {errors.email && <p role="alert">{errors.root?.message}</p>} */}
          <Input
            label="Contraseña"
            variant="faded"
            placeholder="Ingrese su Contraseña"
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
            type={isVisible ? "text" : "password"}
            className="max-w-xs"
            required
            {...register("password", {
              required: {
                value: true,
                message: "Se requiere contraseña",
              },
            })}
          />
          {errors.password && (
            <p role="alert" className="text-red-500">
              Se requiere constraeña
            </p>
          )}

          <Button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-md"
          >
            Registrarse
          </Button>
        </form>

        <div className="mt-4 text-gray-400 text-sm">
          <p>
            ¿Ya tienes una cuenta?{" "}
            <Link href="/signin" className="text-white hover:underline">
              Ingresa ahora
            </Link>
            .
          </p>
        </div>
        <div className="mt-4 text-gray-400 text-xs">
          <p>
            This page is protected by Google reCAPTCHA to ensure
            <Link href="#" className="text-blue-500 hover:underline">
              Learn more
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
