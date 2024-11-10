// "use client";

// import { Dispatch, SetStateAction, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Mail, X } from "lucide-react";
// import Image from "next/image";

// const CoverSection = () => (
//   <motion.section
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//     transition={{ duration: 1 }}
//     className="h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center"
//   >
//     <motion.div
//       initial={{ y: -50, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ type: "spring", stiffness: 300, damping: 10, delay: 0.5 }}
//       className="text-center"
//     >
//       <motion.h1
//         className="text-5xl md:text-7xl font-bold text-white mb-4"
//         initial={{ scale: 0.5 }}
//         animate={{ scale: 1 }}
//         transition={{ type: "spring", stiffness: 100, delay: 1 }}
//       >
//         Discover Amazing Products
//       </motion.h1>
//       <motion.p
//         className="text-xl md:text-2xl text-white"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.5 }}
//       >
//         Scroll down to explore our offerings
//       </motion.p>
//     </motion.div>
//   </motion.section>
// );

// const ProductSection = ({
//   title,
//   image,
//   index,
//   activeSection,
//   setActiveSection,
// }: {
//   title: string;
//   image: string;
//   index: number;
//   activeSection: null;
//   setActiveSection: Dispatch<SetStateAction<null>>;
// }) => {
//   const isActive = activeSection === index;

//   const toggleForm = () => {
//     if (isActive) {
//       setActiveSection(null);
//     } else {
//       setActiveSection(index);
//     }
//   };

//   return (
//     <section className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
//         <motion.div layout className="flex flex-col md:flex-row">
//           <motion.div layout className="w-full md:w-1/2 flex-shrink-0">
//             <Image
//               src={image}
//               alt={title}
//               height={400}
//               width={800}
//               className="w-full h-64 object-cover"
//             />
//             <div className="p-6 text-center">
//               <h2 className="text-2xl font-bold mb-4">{title}</h2>
//               <button
//                 onClick={toggleForm}
//                 className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors flex items-center justify-center mx-auto"
//               >
//                 {isActive ? (
//                   <>
//                     <X className="mr-2" />
//                     Close
//                   </>
//                 ) : (
//                   <>
//                     {/* <Icon className="mr-2" /> */}
//                     Learn More
//                   </>
//                 )}
//               </button>
//             </div>
//           </motion.div>
//           <AnimatePresence>
//             {isActive && (
//               <motion.div
//                 initial={{ x: "100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 exit={{ x: "100%", opacity: 0 }}
//                 transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                 className="w-full md:w-1/2 flex-shrink-0 p-6 bg-gray-50"
//               >
//                 <form
//                   onSubmit={(e) => e.preventDefault()}
//                   className="space-y-4"
//                 >
//                   <input
//                     type="text"
//                     placeholder="Full Name"
//                     className="w-full p-2 border rounded"
//                   />
//                   <input
//                     type="email"
//                     placeholder="Email"
//                     className="w-full p-2 border rounded"
//                   />
//                   <input
//                     type="tel"
//                     placeholder="Phone Number"
//                     className="w-full p-2 border rounded"
//                   />
//                   <textarea
//                     placeholder="Description"
//                     className="w-full p-2 border rounded"
//                     rows={4}
//                   ></textarea>
//                   <input
//                     type="file"
//                     accept="image/*"
//                     className="w-full p-2 border rounded"
//                   />
//                   <button
//                     type="submit"
//                     className="w-full bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors flex items-center justify-center"
//                   >
//                     <Mail className="mr-2" />
//                     Send Email
//                   </button>
//                 </form>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default function Component() {
//   const [activeSection, setActiveSection] = useState(null);

//   return (
//     <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
//       <div className="snap-start">
//         <CoverSection />
//       </div>
//       <div className="snap-start">
//         <ProductSection
//           title="Amazing Product 1"
//           image="/placeholder.svg?height=400&width=800"
//           //   icon={ShoppingBag}
//           index={0}
//           activeSection={activeSection}
//           setActiveSection={setActiveSection}
//         />
//       </div>
//       <div className="snap-start">
//         <ProductSection
//           title="Incredible Product 2"
//           image="/placeholder.svg?height=400&width=800"
//           //   icon={Truck}
//           index={1}
//           activeSection={activeSection}
//           setActiveSection={setActiveSection}
//         />
//       </div>
//       <div className="snap-start">
//         <ProductSection
//           title="Revolutionary Product 3"
//           image="/placeholder.svg?height=400&width=800"
//           //   icon={Headphones}
//           index={2}
//           activeSection={activeSection}
//           setActiveSection={setActiveSection}
//         />
//       </div>
//     </div>
//   );
// }
