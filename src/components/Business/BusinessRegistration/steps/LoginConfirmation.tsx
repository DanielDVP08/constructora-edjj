"use client";

import { useState } from "react";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { FieldValues } from "react-hook-form";
import confetti from "canvas-confetti";
import Image from "next/image";
import {
  registerBusiness,
  //   registerMember,
  // registerVerification,
  updateSession,
} from "../../../../../actions/auth-action";
import { AuthError } from "next-auth";
import { CircularProgress } from "@nextui-org/react";

interface LoginProps {
  onNext: ({}) => void;
  onPrevious: () => void;
  data: FieldValues;
}

export default function LoginConfirmation({
  onNext,
  onPrevious,
  data,
}: LoginProps) {
  const [email, setEmail] = useState(data.userEmail || "");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // console.log("inicio de verificacion")
      const res = await updateSession(email, password);
      // const res = await registerVerification(email, password);
      // console.log("paso por verificacion")
      if (!res?.ok) {
        setError("La contraseña es incorrecta. Verfique los datos");
      } else {
        // await registerMember(data);
        await registerBusiness(data);
        // console.log("paso el registro exitosamente")
        await updateSession(email, password);
        confetti({
          shapes: ["square"],
          origin: { x: 0.5, y: 0.8 },
          particleCount: 200,
        });
        setIsLoading(false);
        // console.log("Login submitted", { email, password });
        // console.log("Login submitted", data);
        // router.push("/user/loadingpage");
      }
    } catch (error) {
      if (error instanceof AuthError) {
        return { error: error.cause?.err?.message };
      }
      return { error: "error 500" };
    }

    // confetti({
    //   shapes: ["square"],
    //   origin: { x: 0.5, y: 0.8 },
    //   particleCount: 200,
    // });

    // // Here you would typically handle the login process
    // console.log("Login submitted", { email, password });
    // console.log("Login submitted", data);
    onNext({});
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-semibold flex items-center">
        <LogIn className="mr-2" /> Confirmar Registro
      </h2>
      <div className="space-y-4">
        {data.profileImage && (
          // <img
          //   src={data.profileImage}
          //   alt="Profile"
          //   className="w-24 h-24 rounded-full mx-auto"
          // />

          <Image
            // src={data.profileImage}
            src={URL.createObjectURL(data.profileImage)}
            alt="Profile Preview"
            height={150}
            width={100}
            // className="w-24 h-24 rounded-full mx-auto"
            className="w-32 h-32 object-cover rounded-full mx-auto"
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          disabled
          // required
        />
        {/* <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
          required
        /> */}

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded pr-10"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-2 text-gray-500"
          >
            {showPassword ? (
              <EyeOff className="w-6 h-6" />
            ) : (
              <Eye className="w-6 h-6" />
            )}
          </button>
        </div>

        {error && (
          <p className="text-orange-500 text-sm mt-1">
            La constraseña es incorrecta. Verifique los datos
          </p>
        )}
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={onPrevious}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
        >
          Atras
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-green-600"
          disabled={!email || !password}
        >
          {isLoading ? (
            <CircularProgress
              aria-label="Loading..."
              color="success"
              size="sm"
            />
          ) : (
            "Confirmar"
          )}
        </button>
      </div>
    </form>
  );
}
