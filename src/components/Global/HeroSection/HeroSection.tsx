// "use client"

// import { Button, Link } from "@nextui-org/react";

// // import { motion } from "framer-motion";
// // import { ChevronDown } from "lucide-react";
// // import Image from "next/image";

// export default function HeroSection() {
//   return (
//     // <div className="h-96">
//     //   <section
//     //     className="relative bg-auto bg-no-repeat bg-center text-white bg-white bg-opacity-50 bg-blend-overlay"
//     //     style={{ backgroundImage: "url(/assets/HeroFondo.jpg)" }}
//     //   >
//     //     <div className="container mx-auto px-6 py-40 flex flex-col items-start space-y-4">
//     //       <h1 className="text-5xl font-semibold text-[#020352]">Construye tus metas</h1>
//     //       <p className="text-lg max-w-lg text-[#020352]">
//     //         Nos distingue la excelencia en la selección de profesionales y la
//     //         atención personalizada para cada proyecto, asegurando resultados que
//     //         superan expectativas
//     //       </p>
//     //       {/* <div className="flex space-x-4">
//     //         <Link
//     //           href="#"
//     //           className="bg-yellow-500 text-gray-900 px-4 py-2 rounded"
//     //         >
//     //           Servicios
//     //         </Link>
//     //         <Link
//     //           href="#"
//     //           className="bg-transparent border-2 border-yellow-500 text-yellow-500 px-4 py-2 rounded"
//     //         >
//     //           Saber Mas
//     //         </Link>
//     //       </div> */}
//     //     </div>
//     //   </section>
//     // </div>

//     // <section className="relative h-[600px] flex items-center mx-auto">
//     <section
//       className="h-screen flex flex-col items-center justify-center text-center p-6"
//       style={{ backgroundImage: "url(/assets/herojj.jpg)" }}
//     >
//       {/* <Image
//         src="/assets/herojj.jpg"
//         alt="Construction Site"
//         layout="fill"
//         objectFit="cover"
//         priority
//         className="w-screen"
//       />
//       */}
//       {/* <div className="absolute h-screen inset-0 bg-black/60" /> */}
//       <div className="relative text-white text-center px-4">
//         {/* <div className="text-white text-center px-72"> */}
//         {/* <h1 className="text-4xl md:text-6xl font-bold mb-4">
//           SOMOS LOS
//           <br />
//           <span className="text-yellow-500">EXPERTOS EN CONSTRUCCION</span>
//         </h1> */}
//         {/* <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
//           SOMOS LOS
//         </h1> */}
//         <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
//           EXPERTOS EN{" "}
//           <span className="text-4xl md:text-6xl font-bold text-yellow-500 mb-4">
//             CONSTRUCCION
//           </span>
//         </h1>
//         {/* <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 whitespace-nowrap">
//         SOMOS LOS{" "}
//           <span className="text-yellow-500">EXPERTOS EN CONSTRUCCION</span>
//         </h1> */}
//         {/* <p className="max-w-2xl mx-auto mb-8 text-lg">
//           We&apos;re an elite squad of alpha geeks, creative storytellers and
//           business minds. Together, we mix art and science to turn brands into
//           favorites.
//           </p> */}
//         <div className="flex gap-4 justify-center pt-16">
//           {/* <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded transition-colors">
//             Conocenos
//           </button> */}
//           <Button
//             as={Link}
//             color="warning"
//             href="/about"
//             variant="solid"
//             size="lg"
//             className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded transition-colors"
//           >
//             Conocenos
//           </Button>
//           {/* <button className="border-2 border-white hover:bg-white hover:text-black px-8 py-3 rounded transition-colors">
//             Contact
//           </button> */}
//           {/* <ChevronDown size={100} color="#e7b108" /> */}
//         </div>
//         {/* <motion.div
//           className="absolute bottom-8"
//           animate={{ y: [0, 10, 0] }}
//           transition={{ repeat: Infinity, duration: 2 }}
//           >
//           <ChevronDown size={100} color="#e7b108" />
//           </motion.div> */}
//         {/* </div> */}
//       </div>
//     </section>
//   );
// }

// import Image from "next/image";
import Link from "next/link";
import HeaderNavBar from "../Header/HeaderNavBar";
import { auth } from "../../../../auth";
import { Button } from "@nextui-org/react";
// import { CldImage } from "next-cloudinary";
import HeroBackground from "./HeroBackground";

export default async function HeroSection() {
  const session = await auth();

  return (
    <main className="min-h-screen relative">
      {/* Background Image */}
      {/* <Image
        src="/assets/herojj.jpg"
        alt="Construction site at sunset"
        fill
        className="object-cover"
        priority
      /> */}
      
      <HeroBackground/>

      <div className="absolute inset-0 bg-black/50" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation */}
        <HeaderNavBar
          isLoggedIn={session ? true : false}
          userEmail={session?.user.email as string}
          userImage={session?.user.image as string}
          userRole={session?.user.role as string}
        />
        {/* Hero Section */}
        <section className="flex-grow flex items-center justify-center px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-wide">
              EXPERTOS EN <span className="text-yellow-400">CONSTRUCCIÓN</span>
            </h1>
            <div className="border-x-3 border-b-3 border-white p-6 md:p-8">
              <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed">
                Somos una empresa de élite, al mando de un equipo de
                profesionales especializados y capacitados para resolver
                cualquier situación.
              </p>

              <div className="flex gap-4 justify-center pt-16">
                <Button
                  as={Link}
                  color="warning"
                  href="/about"
                  variant="solid"
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded transition-colors"
                >
                  Conocenos
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
