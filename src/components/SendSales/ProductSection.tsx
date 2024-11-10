"use client";

import { Image, Input, Textarea } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";
import { ChangeEvent, useState } from "react";
// import { Mail, X } from "lucide-react";
// import Image from "next/image";
// import { useState } from "react";

import { Mail, Upload, X } from "lucide-react";
// import { getUrlFile } from "../../../actions/data-actions";


// export function ProductSection({
//   title,
//   image,
//   index,
// }: {
//   title: string;
//   image: string;
//   index: number;
// }) {
//   const [activeSection, setActiveSection] = useState(null);

//   const isActive = activeSection === index;

//   const toggleForm = () => {
//     if (isActive) {
//       setActiveSection(null);
//     }
//     //  else {
//     //   setActiveSection(index);
//     // }
//   };

//   return (
//     <>
//       <section className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//         <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
//           <motion.div layout className="flex flex-col md:flex-row">
//             <motion.div layout className="w-full md:w-1/2 flex-shrink-0">
//               <Image
//                 src={image}
//                 alt={title}
//                 width={400}
//                 height={100}
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-6 text-center">
//                 <h2 className="text-2xl font-bold mb-4">{title}</h2>
//                 <button
//                   onClick={toggleForm}
//                   className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors flex items-center justify-center mx-auto"
//                 >
//                   {isActive ? (
//                     <>
//                       <X className="mr-2" />
//                       Close
//                     </>
//                   ) : (
//                     <>
//                       {/* <Icon  className="mr-2" /> */}
//                       Learn More
//                     </>
//                   )}
//                 </button>
//               </div>
//             </motion.div>
//             <AnimatePresence>
//               {isActive && (
//                 <motion.div
//                   initial={{ x: "100%", opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   exit={{ x: "100%", opacity: 0 }}
//                   transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                   className="w-full md:w-1/2 flex-shrink-0 p-6 bg-gray-50"
//                 >
//                   <form
//                     onSubmit={(e) => e.preventDefault()}
//                     className="space-y-4"
//                   >
//                     <input
//                       type="text"
//                       placeholder="Full Name"
//                       className="w-full p-2 border rounded"
//                     />
//                     <input
//                       type="email"
//                       placeholder="Email"
//                       className="w-full p-2 border rounded"
//                     />
//                     <input
//                       type="tel"
//                       placeholder="Phone Number"
//                       className="w-full p-2 border rounded"
//                     />
//                     <textarea
//                       placeholder="Description"
//                       className="w-full p-2 border rounded"
//                       rows={4}
//                     ></textarea>
//                     <input
//                       type="file"
//                       accept="image/*"
//                       className="w-full p-2 border rounded"
//                     />
//                     <button
//                       type="submit"
//                       className="w-full bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors flex items-center justify-center"
//                     >
//                       <Mail className="mr-2" />
//                       Send Email
//                     </button>
//                   </form>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.div>
//         </div>
//       </section>
//     </>
//   );
// }

// import React from 'react'

export function ProductSection({
  title,
  image,
  index,
}: {
  title: string;
  image: string;
  index: number;
}) {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const toggleForm = () => setIsFormVisible(!isFormVisible);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  // const [urls, setUrls] = useState<string[]>([]);
  const [images, setImages] = useState<File[]>([]);
  // const [images, setImages] = useState<FileList>([]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    description: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    const files = Array.from(e.target.files);

    setImages(files)

    setPreviewImages([...previewImages, ...files.map((file) => URL.createObjectURL(file))]);

    console.log(images);
  };

  const removeImage = (index: number) => {
    // if(!images){return}
    setPreviewImages(previewImages.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const form = new FormData();

    form.set("fullName", formData.fullName);
    form.set("email", formData.email);
    form.set("phoneNumber", formData.phoneNumber);
    form.set("description", formData.description);
    // form.set("captures", urls.toString());
    // form.set("captures", JSON.stringify(images));

    const res = await fetch("/api/sendsales", {
      method: "POST",
      body: form,
    });

    const data = await res.json();
    console.log(data);

    console.log("Form submitted:", formData);
  };

  // const handleFileChange = (e) => {
  //   setFile(e.target.files[0]);
  // };

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <button
            onClick={toggleForm}
            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors flex items-center justify-center mx-auto"
          >
            {isFormVisible ? (
              <>
                <X className="mr-2" />
                Close
              </>
            ) : (
              <>
                {/* <Icon className="mr-2" /> */}
                Learn More
              </>
            )}
          </button>
        </div>

        <motion.div layout className="flex flex-col md:flex-row">
          <motion.div layout className="w-full md:w-1/2 flex-shrink-0">
            <Image
              src={image}
              alt={title}
              height={440}
              width={800}
              className="w-full h-64 object-cover"
            />
          </motion.div>
          <AnimatePresence>
            {isFormVisible && (
              <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="w-full md:w-1/2 flex-shrink-0 p-6 bg-gray-50"
              >
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    id="fullName"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded"
                  />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded"
                  />
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded"
                  />
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded"
                    rows={4}
                  ></Textarea>
                  {/* <input
                    type="file"
                    accept="image/*"
                    className="w-full p-2 border rounded"
                    onChange={(e) => {
                      // console.log(e.target.files)
                      if (!e.target.files) {
                        return;
                      }
                      console.log(e.target.files[0]);
                      const file = e.target.files[0];
                      setFile(file);

                    }}
                  /> */}

                  <div>
                    <label htmlFor={`images-${index}`}>Images</label>
                    {images.length === 0 ? (
                      <div className="mt-2">
                        <input
                          id={`images-${index}`}
                          type="file"
                          multiple
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                        <label
                          htmlFor={`images-${index}`}
                          className="flex items-center justify-center w-full h-32 border-2 border-dashed rounded-md cursor-pointer"
                        >
                          <Upload className="mr-2" /> Subir Imagenes
                        </label>
                      </div>
                    ) : (
                      <div className="mt-2 grid grid-cols-3 gap-2">
                        {images.map((image, i) => (
                          <div key={i} className="relative">
                            <Image
                              src={URL.createObjectURL(image)}
                              alt={`Uploaded ${i}`}
                              className="w-24 h-24 object-cover rounded-md"
                            />
                            <button
                              type="button"
                              // variant="solid"
                              className="absolute top-0 right-0 p-1 -mt-2 -mr-1 rounded-full"
                              onClick={() => removeImage(i)}
                            >
                              <X size={16} />
                            </button>
                            {/* <Button
                              size="sm"
                              variant="solid"
                              className="absolute top-0 right-0 p-1"
                              onClick={() => removeImage(i)}
                            >
                              <X size={16} />
                            </Button> */}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors flex items-center justify-center"
                  >
                    <Mail className="mr-2" />
                    Enviar
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Probando */}
      </div>
    </section>
  );
}
