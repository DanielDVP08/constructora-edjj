"use client";

import { useState } from "react";
import { LogIn } from "lucide-react";
import { FieldValues } from "react-hook-form";
import confetti from "canvas-confetti";
import Image from "next/image";
import {
  registerMember,
  // registerVerification,
  updateSession,
} from "../../../../../actions/auth-action";
import { AuthError } from "next-auth";
import { useRouter } from "next/navigation";

interface LoginProps {
  onPrevious: () => void;
  data: FieldValues;
}

export default function Login({ onPrevious, data }: LoginProps) {
  const [email, setEmail] = useState(data.email || "");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      const res = await updateSession(email, password);
      // const res = await registerVerification(email, password);
      if (!res?.ok) {
        setError("La contraseña es incorrecta. Verfique los datos");
      } else {
        await registerMember(data);
        await updateSession(email, password);
        confetti({
          shapes: ["square"],
          origin: { x: 0.5, y: 0.8 },
          particleCount: 200,
        });

        console.log("Login submitted", { email, password });
        console.log("Login submitted", data);
      }
    } catch (error) {
      if (error instanceof AuthError) {
        return { error: error.cause?.err?.message };
      }
      return { error: "error 500" };
    }
    
    router.push("/user/loadingpage");
    
    // confetti({
      //   shapes: ["square"],
      //   origin: { x: 0.5, y: 0.8 },
    //   particleCount: 200,
    // });

    // Here you would typically handle the login process
    // console.log("Login submitted", { email, password });
    // console.log("Login submitted", data);
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
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        {error && (
          <p className="text-orange-500 text-sm mt-1">
            El correo electronico o la constraseña son incorrectas. Verifique
            los datos
          </p>
        )}
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={onPrevious}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
        >
          Previous
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          disabled={!email || !password}
        >
          Login
        </button>
      </div>
    </form>
  );
}
