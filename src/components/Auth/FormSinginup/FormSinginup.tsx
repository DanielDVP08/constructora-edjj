"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FormLogin from "./FormLogin";
import FormRegister from "./FormRegister";
import Link from "next/link";
import { CldImage } from "next-cloudinary";

export default function FormSing({ isVerified }: { isVerified: boolean }) {
  const [isLogin, setIsLogin] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleForm = () => setIsLogin(!isLogin);

  const variants = {
    left: { x: isLogin ? 0 : "100%", y: 0 },
    right: { x: isLogin ? 0 : "-100%", y: 0 },
    // top: { x: 0, y: isLogin ? 0 : "100%" },
    // bottom: { x: 0, y: isLogin ? 0 : "-100%" },
    top: { x: 0, y: 0 },
    bottom: { x: 0, y: 0 },
    // top: { order: isLogin ? 0 : 1 },
    // bottom: { order: isLogin ? 1 : 0 },
  };

  return (
    <>
      {/* Navegacion */}
      <nav className="absolute bg-transparent shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/">
              <div className="flex-shrink-0">
                {/* <Image
                  height={150}
                  width={100}
                  className="h-12 w-auto"
                  src="/assets/logojj.png"
                  alt="Company Logo"
                /> */}
                <CldImage 
                  alt="Logo Constructora"
                  src="https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733346062/logojj_ou1syp.png"
                  height={150}
                  width={100}
                  crop={{
                    type: 'fit',
                    source: true
                  }}
                />
              </div>
            </Link>
          </div>
        </div>
      </nav>

      {/* Section Principal */}
      <div
        className="min-h-screen bg-black bg-opacity-75 flex items-center justify-center p-4"
        style={{
          backgroundImage: "url(https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733346061/HeroFondo_absh9z.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="rounded-lg shadow-xl overflow-hidden w-full max-w-4xl"
          style={{
            backgroundImage: "url(https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733346061/herojj_m15yfk.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col md:flex-row relative">
            <motion.div
              className="bg-yellow-400 md:w-1/2 p-8 flex items-center justify-center"
              initial={false}
              animate={isSmallScreen ? variants.top : variants.left}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <h2 className="text-3xl font-bold text-amber-900 text-center">
                {isLogin ? "BIENVENIDO DE NUEVO!" : "UNETE A NOSOTROS!"}
              </h2>
            </motion.div>
            <motion.div
              className="md:w-1/2 p-8"
              initial={false}
              animate={isSmallScreen ? variants.bottom : variants.right}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {isLogin ? (
                <FormLogin isVerified={isVerified} />
              ) : (
                <FormRegister />
              )}
              <div className="mt-4 text-center">
                <button
                  onClick={toggleForm}
                  className="text-white hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded px-2 py-1 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  {isLogin ? (
                    <h3>No tengo una cuenta</h3>
                  ) : (
                    <h3>Ya tengo una cuenta</h3>
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

// function LoginForm() {
//   return (
//     <form className="space-y-4">
//       <h2 className="text-2xl font-bold text-amber-900 mb-4">Login</h2>
//       <div className="space-y-2">
//         <Label htmlFor="login-email">Email</Label>
//         <Input id="login-email" type="email" placeholder="Enter your email" required />
//       </div>
//       <div className="space-y-2">
//         <Label htmlFor="login-password">Password</Label>
//         <Input id="login-password" type="password" placeholder="Enter your password" required />
//       </div>
//       <Button type="submit" className="w-full bg-amber-900 hover:bg-amber-800 transition duration-300 ease-in-out transform hover:scale-105">
//         Login
//       </Button>
//     </form>
//   )
// }

// function RegisterForm() {
//   return (
//     <form className="space-y-4">
//       <h2 className="text-2xl font-bold text-amber-900 mb-4">Register</h2>
//       <div className="space-y-2">
//         <Label htmlFor="register-name">Name</Label>
//         <Input id="register-name" type="text" placeholder="Enter your name" required />
//       </div>
//       <div className="space-y-2">
//         <Label htmlFor="register-email">Email</Label>
//         <Input id="register-email" type="email" placeholder="Enter your email" required />
//       </div>
//       <div className="space-y-2">
//         <Label htmlFor="register-password">Password</Label>
//         <Input id="register-password" type="password" placeholder="Create a password" required />
//       </div>
//       <Button type="submit" className="w-full bg-amber-900 hover:bg-amber-800 transition duration-300 ease-in-out transform hover:scale-105">
//         Register
//       </Button>
//     </form>
//   )
// }
