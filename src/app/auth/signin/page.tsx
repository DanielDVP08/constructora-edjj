"use client";

import { Button, Checkbox, Input} from "@nextui-org/react";
import { useMemo, useState } from "react";
import { EyeFilledIcon } from "../../../components/EyeFilled/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../../../components/EyeFilled/EyeSlashFilledIcon";
import Link from "next/link";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [value, setValue] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = useMemo(() => {
    if (value === "") return false;

    return validateEmail(value) ? false : true;
  }, [value]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted", { email, password });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-black bg-opacity-75 bg-blend-overlay"
      style={{
        backgroundImage: "url(/assets/HeroFondo.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black bg-opacity-75 p-10 rounded-md w-full max-w-md">
        <h1 className="text-white text-3xl font-bold mb-6">Iniciar Sesion</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            value={value}
            type="email"
            label="Email"
            variant="faded"
            isInvalid={isInvalid}
            color={isInvalid ? "danger" : "default"}
            errorMessage="Please enter a valid email"
            onValueChange={setValue}
            className="max-w-xs"
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Correo Electronico"
          />
          <Input
            label="Password"
            variant="faded"
            placeholder="***********"
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
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-md"
          >
            Acceder
          </Button>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox
                radius="sm"
                color="success"
                size="md"
                className="text-red-600 focus:ring-red-500"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 text-sm text-gray-400"
              >
                Recuerdame
              </label>
            </div>
            <Link href="#" className="text-sm text-gray-400 hover:underline">
              ¿Necesitas Ayuda?
            </Link>
          </div>
        </form>
        <div className="mt-8">
          <p className="text-gray-400">
            ¿Eres nuevo aqui?{" "}
            <Link href="/auth/signup" className="text-white hover:underline">
              Registrate Ahora
            </Link>
            .
          </p>
          <p className="text-sm text-gray-400 mt-4">
            This page is protected by Google reCAPTCHA to ensure youre not Link
            bot.{" "}
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
