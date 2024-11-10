// "use client";

// import { useState } from "react";
// // import Image from "next/image";
// import { Button, Input, Textarea } from "@nextui-org/react";

// export default function Component() {
//   const [activeForm, setActiveForm] = useState<number | null>(null);

//   const sections = [
//     { image: "/assets/HeroFondo.jpg", title: "Section 1" },
//     { image: "/assets/HeroFondo.jpg", title: "Section 2" },
//     { image: "/assets/HeroFondo.jpg", title: "Section 3" },
//   ];

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     // Here you would typically send the form data to a server
//     console.log("Form submitted");
//     setActiveForm(null);
//   };

//   return (
//     <div className="container mx-auto p-4 space-y-8">
//       {sections.map((section, index) => (
//         <div key={index} className="relative overflow-hidden">
//           <div className="h-96 flex">
//             <div
//               className="w-1/2 transition-transform duration-500 ease-in-out"
//               style={{
//                 transform:
//                   activeForm === index ? "translateX(-100%)" : "translateX(0)",
//                 backgroundImage: "url(/assets/HeroFondo.jpg)",
//               }}
//             >
//               {/* <Image
//                 src={section.image}
//                 alt={`Section ${index + 1}`}
//                 width={400}
//                 height={400}
//                 className="w-full h-auto"
//               /> */}
//             </div>
//             <div
//               className="w-1/2 p-4 flex items-center justify-center"
//               style={{ backgroundImage: "url(/assets/HeroFondo.jpg)" }}
//             >
//               <Button onClick={() => setActiveForm(index)}>
//                 Open Form for {section.title}
//               </Button>
//             </div>
//           </div>
//           <div
//             className="absolute top-0 left-0 w-full h-full bg-white transition-transform duration-500 ease-in-out"
//             style={{
//               transform:
//                 activeForm === index ? "translateX(0)" : "translateX(100%)",
//               overflow: "scroll",
//             }}
//           >
//             <form
//               onSubmit={handleSubmit}
//               className="h-full p-4 flex flex-col space-y-4"
//             >
//               <h2 className="text-2xl font-bold mb-4">{section.title} Form</h2>
//               <div>
//                 <label htmlFor={`email-${index}`}>Email</label>
//                 <Input
//                   id={`email-${index}`}
//                   type="email"
//                   placeholder="Enter your email"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor={`name-${index}`}>Full Name</label>
//                 <Input
//                   id={`name-${index}`}
//                   placeholder="Enter your full name"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor={`phone-${index}`}>Phone Number</label>
//                 <Input
//                   id={`phone-${index}`}
//                   type="tel"
//                   placeholder="Enter your phone number"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor={`description-${index}`}>Description</label>
//                 <Textarea
//                   id={`description-${index}`}
//                   placeholder="Enter a description"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor={`image-${index}`}>Upload Image</label>
//                 <Input id={`image-${index}`} type="file" accept="image/*" />
//               </div>
//               <div className="flex space-x-4">
//                 <Button type="submit">Submit</Button>
//                 <Button
//                   type="button"
//                   variant="faded"
//                   onClick={() => setActiveForm(null)}
//                 >
//                   Cancel
//                 </Button>
//               </div>
//             </form>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

"use client";

import { useState, useEffect, ChangeEvent } from "react";
// import Image from "next/image";
import { ChevronRight, ChevronUp, Send, Upload, X } from "lucide-react";
import { Button, Input, Textarea } from "@nextui-org/react";
import Image from "next/image";
// import { read } from "fs";

export default function SalesSend() {
  const [activeForm, setActiveForm] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [images, setImages] = useState([""])

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const sections = [
    { image: "/assets/HeroFondo.jpg", title: "Section 1" },
    { image: "/assets/HeroFondo.jpg", title: "Section 2" },
    { image: "/assets/HeroFondo.jpg", title: "Section 3" },
  ];

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    // const files = Array.from(e.target.files)
    if(!e.target.files){return}
    const files = e.target.files
    const archives=[...images,...[files].map(file=>console.log(file))]
    // setImages([...images, ...files.map(file => URL.createObjectURL(file))])
    console.log(archives)
  }

  const removeImage = (index:number) => {
    setImages(images.filter((_, i) => i !== index))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    // Here you would typically send the form data to a server
    console.log("Form submitted", Object.fromEntries(formData));
    setActiveForm(null);
  };

  return (
    <div className="container mx-auto p-4 space-y-8">
      {sections.map((section, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-lg shadow-md h-96"
        >
          {/* <div
            className="transition-transform duration-500 ease-in-out h-96"
            style={{
              transform:
                activeForm === index ? "translateX(-100%)"
                : isMobile
                ? "translateX(0)"
                : "translateY(0)",
              backgroundImage: `url(${section.image})`,
            }}
          > */}
          <div
            className="ease-in-out h-96"
            style={{
              backgroundImage: `url(${section.image})`,
            }}
          >
            {/* <Image
              src={section.image}
              alt={`Section ${index + 1}`}
              width={600}
              height={400}
              className="w-full h-full"
            /> */}
            <Button
              className={`absolute ${
                isMobile
                  ? "bottom-4 right-4"
                  : "top-1/4 inset-1/2 -translate-y-1/2"
              } rounded-full`}
              onClick={() => setActiveForm(index)}
              aria-label={`Open form for ${section.title}`}
            >
              {isMobile ? (
                <ChevronUp className="h-6 w-6" />
              ) : (
                <ChevronRight className="h-6 w-6" />
              )}
            </Button>
          </div>
          <div
            className={`absolute inset-0 bg-white transition-all duration-500 ease-in-out overflow-y-auto`}
            style={{
              transform:
                activeForm === index
                  ? "translate(0, 0)"
                  : isMobile
                  ? "translateY(100%)"
                  : "translateX(100%)",
              opacity: activeForm === index ? 1 : 0,
            }}
          >
            <form
              onSubmit={handleSubmit}
              className="h-full p-4 flex flex-col space-y-4"
            >
              <h2 className="text-2xl font-bold mb-4">{section.title} Form</h2>
              <div>
                <label htmlFor={`email-${index}`}>Email</label>
                <Input
                  id={`email-${index}`}
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor={`name-${index}`}>Full Name</label>
                <Input
                  id={`name-${index}`}
                  name="fullName"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label htmlFor={`phone-${index}`}>Phone Number</label>
                <Input
                  id={`phone-${index}`}
                  name="phoneNumber"
                  type="tel"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div>
                <label htmlFor={`description-${index}`}>Description</label>
                <Textarea
                  id={`description-${index}`}
                  name="description"
                  placeholder="Enter a description"
                  required
                />
              </div>
              {/* <div>
                <label htmlFor={`image-${index}`}>Upload Image</label>
                <Input
                  id={`image-${index}`}
                  name="image"
                  type="file"
                  accept="image/*"
                />
              </div> */}
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
                    <Upload className="mr-2" /> Upload Images
                  </label>
                </div>
              ) : (
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {images.map((image, i) => (
                    <div key={i} className="relative">
                      <Image src={image} alt={`Uploaded ${i}`} className="w-full h-24 object-cover rounded-md" />
                      <Button
                        size="sm"
                        // variant="destructive"
                        className="absolute top-0 right-0 p-1"
                        onClick={() => removeImage(i)}
                      >
                        <X size={16} />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
              <div className="flex space-x-4">
                <Button type="submit">
                  <Send className="mr-2 h-4 w-4" /> Send
                </Button>
                <Button
                  type="button"
                  variant="faded"
                  onClick={() => setActiveForm(null)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
}
