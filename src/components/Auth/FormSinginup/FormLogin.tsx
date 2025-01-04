"use client";

import { Alert, Button, Input } from "@nextui-org/react";
import { useMemo, useState, useTransition } from "react";
import { EyeSlashFilledIcon } from "./EyeFilled/EyeSlashFilledIcon";
import { EyeFilledIcon } from "./EyeFilled/EyeFilledIcon";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/libs/zod";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { AuthError } from "next-auth";

export default function FormLogin({ isVerified }: { isVerified: boolean }) {
  const [value, setValue] = useState("");
  // const [rememberMe, setRememberMe] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  // const [isPendingGoogle, startTransitionGoogle] = useTransition();
  const router = useRouter();

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = useMemo(() => {
    if (value === "") return false;

    return validateEmail(value) ? false : true;
  }, [value]);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);

    try {
      startTransition(async () => {
        const res = await signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false,
          // redirectTo: "/dashboard",
        });
        if (res?.error) {
          setError(res.error);
        } else {
          router.push("/");
          // redirect("/")
        }
      });
      return { success: true };
    } catch (error) {
      if (error instanceof AuthError) {
        return { error: error.cause?.err?.message };
      }
      return { error: "error 500" };
    }

    // console.log(res?.error ? res.error : "enviando a home");

    // await loginAction(data);
    
  });

  // const onSubmitGoogle = handleSubmit(async () => {
  //   await signIn("google");

  //   try {
  //     startTransitionGoogle(async () => {
  //       const res = await signIn("google");
  //       console.log(res)
  //       if (res?.error) {
  //         setError(res.error);
  //       } else {
  //         router.push("/dashboard");
  //       }
  //     });
  //     return { success: true };
  //   } catch (error) {
  //     if (error instanceof AuthError) {
  //       return { error: error.cause?.err?.message };
  //     }
  //     return { error: "error 500" };
  //   }
  // });

  return (
    <section className="w-full max-w-md bg-black bg-opacity-75 p-8 rounded-lg">
      <h1 className="text-white text-3xl font-bold mb-8">Iniciar Sesion</h1>
      {isVerified && (
        // <p className="text-green-500 text-sm mt-1 mb-2">
        <div className="mt-1 mb-4">
          <Alert color={"success"} title={`Su Cuenta ha sido verificada`}/>
        </div>
      )}
      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <Input
            value={value}
            type="email"
            label="Email"
            variant="faded"
            isInvalid={isInvalid}
            color={isInvalid ? "danger" : "default"}
            errorMessage="Ingresa un email valido"
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
        </div>
        <div>
          <Input
            label="Password"
            variant="faded"
            placeholder="****************"
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
          {/* {errors.password && <p className="text-orange-500 text-sm mt-1">{errors.password}</p>} */}
        </div>
        {error && (
          <p className="text-orange-500 text-sm mt-1">
            El correo electronico o la constraseña son incorrectas. Verifique
            los datos
          </p>
        )}
        <Button
          type="submit"
          disabled={isPending}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-md"
        >
          Acceder
        </Button>
      </form>

      {/* no funciona */}
      {/* <form onSubmit={onSubmitGoogle} className="space-y-6">
        <Button
            type="submit"
            disabled={isPendingGoogle}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-md"
          >
            Acceder con Google
          </Button>
        </form> */}

      {/* <button
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-md"
          onClick={async () => await signIn("google",{ callbackUrl: "/" })}
          // onClick={onSubmitGoogle}
        >
          Google
        </button> */}

      {/* <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Checkbox
            isSelected={rememberMe}
            onValueChange={setRememberMe}
            className="text-red-600 focus:ring-red-500"
          />
          <label htmlFor="remember-me" className="ml-2 text-sm text-gray-400">
            Recuerdame
          </label>
        </div>
        <a href="#" className="text-sm text-gray-400 hover:underline">
          Need help?
        </a>
      </div> */}

      {/* <div className="mt-8">
        <p className="text-gray-400">
          ¿Eres nuevo aqui?{" "}
          <Link href="/signup" className="text-white hover:underline">
            Registrate
          </Link>
          .
        </p>
        <p className="text-sm text-gray-400 mt-4">
          This page is protected by Google reCAPTCHA to ensure youre not a bot.{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Saber Mas
          </a>
          .
        </p>
      </div> */}
    </section>
  );
}
