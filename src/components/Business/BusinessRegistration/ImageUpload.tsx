import { useState } from "react";
import Image from "next/image";
import { Upload, X } from "lucide-react";

interface ImageUploadProps {
  initialImage: string | null;
  onImageChange: (image: File | null) => void;
  aspectRatio?: string;
  buttonText?: string;
}

export default function ImageUpload({
  initialImage,
  onImageChange,
  aspectRatio = "aspect-square",
  // buttonText = "Upload Image",
}: ImageUploadProps) {
  const [image, setImage] = useState<string | null>(initialImage);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setImage(URL.createObjectURL(file));
      onImageChange(file);
      //   const reader = new FileReader();
      //   reader.onloadend = () => {
      //     const result = reader.result as string;
      //     setImage(result);
      //   };
      //   reader.readAsDataURL(file);
    }
  };

  return (
    <div className={`w-full ${aspectRatio} relative`}>
      {/* {image ? (
        <>
          <Image
            src={image}
            alt="Uploaded"
            height={150}
            width={100}
            className="w-full h-full object-cover rounded"
          />
          <button
            // type="button"
            className="absolute top-2 right-2"
            onClick={() => {
              setImage(null);
              onImageChange(null);
            }}
          >
            Delete
          </button>
        </>
      ) : (
        <div className="w-full h-full bg-gray-100 flex items-center justify-center rounded">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            id="imageUpload"
          />
          <label
            htmlFor="imageUpload"
            className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {buttonText}
          </label>
        </div>
      )} */}

      {image ? (
        <div className="relative">
          {/* <img src={profileImage} alt="Profile" className="w-full h-64 object-cover rounded-lg" /> */}
          <Image
            src={image}
            alt="Profile Preview"
            height={150}
            width={100}
            className="w-full h-full object-cover rounded"
          />
          <button
            type="button"
            onClick={() => {
              setImage(null);
              onImageChange(null);
            }}
            className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <label className="w-full h-full flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
          <Upload className="w-12 h-12 text-gray-400" />
          <span className="mt-2 text-sm text-gray-500">
            Subir Imagen
          </span>
          <input
            type="file"
            className="hidden"
            onChange={handleImageUpload}
            accept="image/*"
          />
        </label>
      )}
    </div>
  );
}
