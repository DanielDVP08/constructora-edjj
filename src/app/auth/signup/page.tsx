"use client";

import { Button, Input } from "@nextui-org/react";
import { useMemo, useState } from "react";
import {EyeFilledIcon} from "../../../components/EyeFilled/EyeFilledIcon";
import {EyeSlashFilledIcon} from "../../../components/EyeFilled/EyeSlashFilledIcon";
import Link from "next/link";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [value, setValue] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const validateEmail = (value:string) =>
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
      className="min-h-screen bg-black bg-opacity-75 flex items-center justify-center"
      style={{
        backgroundImage:
          "url(/assets/HeroFondo.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black bg-opacity-75 p-10 rounded-md w-full max-w-md">
        <h1 className="text-white text-3xl font-bold mb-6">Registrate</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            value={value}
            type="email"
            label="Email"
            variant="faded"
            isInvalid={isInvalid}
            color={isInvalid ? "danger" : "default"}
            errorMessage="Please enter Link valid email"
            onValueChange={setValue}
            className="max-w-xs"
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email address"
          />
          <Input
            label="Password"
            variant="faded"
            placeholder="Enter your password"
            endContent={
              <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
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
            Registrarse
          </Button>
        </form>
        <div className="mt-4 text-gray-400 text-sm">
          <p>
            ¿Ya tienes una cuenta?{" "}
            <Link href="/auth/singin" className="text-white hover:underline">
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
