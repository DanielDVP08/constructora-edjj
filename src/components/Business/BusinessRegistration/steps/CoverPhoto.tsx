"use client";

import { ImagePlus, Upload, X } from "lucide-react";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import { FieldValues } from "react-hook-form";

interface CoverPhotoProps {
  onNext: ({}) => void;
  onPrevious: () => void;
  data: FieldValues;
}

export default function CoverPhoto({
  onNext,
  onPrevious,
  data,
}: CoverPhotoProps) {
  const [coverImage, setCoverImage] = useState(data.coverImage || null);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];
    setCoverImage(file);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onNext({ coverImage });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center mb-6">
        <ImagePlus className="w-8 h-8 mr-2" />
        <h2 className="text-2xl font-bold">Imagen de Portada</h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* <ImageUpload
          initialImage={profile.coverPhoto}
          onImageChange={(image) => updateProfile({ coverPhoto: image })}
          aspectRatio="aspect-video"
          buttonText="Upload Cover Photo"
        /> */}

        {coverImage ? (
          <div className="relative">
            {/* <img src={coverImage} alt="Profile" className="w-full h-64 object-cover rounded-lg" /> */}
            <Image
              src={URL.createObjectURL(coverImage)}
              alt="Profile Preview"
              height={200}
              width={250}
              className="w-full h-64 object-cover rounded-lg"
            />
            <button
              type="button"
              onClick={() => setCoverImage(null)}
              className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <label className="w-full h-64 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
            <Upload className="w-12 h-12 text-gray-400" />
            <span className="mt-2 text-sm text-gray-500">
              Subir Imagen de Portada
            </span>
            <input
              type="file"
              className="hidden"
              onChange={handleImageUpload}
              accept="image/*"
            />
          </label>
        )}

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
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Siguiente
          </button>
        </div>
      </form>
    </div>
  );
}
