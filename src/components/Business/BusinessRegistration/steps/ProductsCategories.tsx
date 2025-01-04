"use client";

import { ChangeEvent, useState } from "react";
import { Package, Upload, X } from "lucide-react";
import { FieldValues } from "react-hook-form";
// import { Select, SelectItem } from "@nextui-org/react";
// import ImageUpload from "../ImageUpload";
import Image from "next/image";
// import Image from "next/image";

interface ProductsCategoriesProps {
  onNext: ({}) => void;
  onPrevious: () => void;
  data: FieldValues;
}

// interface Category {
//     name: string;
//     image: File | null;
// }

// type Category = Array<{ name: string; image: File | null }>;

export default function ProductsCategories({
  onNext,
  onPrevious,
  data,
}: ProductsCategoriesProps) {

  // const [categories, setCategories] = useState<Category>(
  //   data.productCategories || []
  // );
  // const [selectedCategory, setSelectedCategory] = useState("");
  const [companyLogo, setCompanyLogo] = useState(data.companyLogo || null);
  const [proformaFile, setProformaFile] = useState<File | null>(
    data.proformaFile
  );

  // const handleAddCategory = () => {
  //   if (selectedCategory) {
  //     setCategories([...categories, { name: selectedCategory, image: null }]);
  //     setSelectedCategory("");
  //   }
  // };

  // const handleImageUpload = (index: number, image: File | null) => {
  //   const updatedCategories = [...categories];
  //   updatedCategories[index].image = image;
  //   setCategories(updatedCategories);
  // };

  // const handleRemoveCategory = (index: number) => {
  //   const updatedCategories = categories.filter((_, i) => i !== index);
  //   setCategories(updatedCategories);
  // };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) {
        return;
      }
      const file = e.target.files[0];
      setCompanyLogo(file);
  
    };

  const handleProformaUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setProformaFile(file);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // updateProfile({ productCategories: categories, proformaFile });
    onNext({ companyLogo, proformaFile });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center mb-6">
        <Package className="w-8 h-8 mr-2" />
        <h2 className="text-2xl font-bold">Categorias de Productos</h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Company Logo</h3>
          {companyLogo ? (
              <div className="relative">
                {/* <img src={profileImage} alt="Profile" className="w-full h-64 object-cover rounded-lg" /> */}
                <Image
                  src={URL.createObjectURL(companyLogo)}
                  alt="Profile Preview"
                  height={150}
                  width={100}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => setCompanyLogo(null)}
                  className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <label className="w-full h-64 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                <Upload className="w-12 h-12 text-gray-400" />
                <span className="mt-2 text-sm text-gray-500">
                  Subir Logo
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

        <div>
          <h3 className="text-lg font-semibold mb-2">Proforma</h3>
          {proformaFile ? (
            <div className="flex items-center space-x-2">
              <span>Proforma De Productos</span>
              <button type="button" onClick={() => setProformaFile(null)}>
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <input
              type="file"
              accept=".pdf"
              onChange={handleProformaUpload}
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
            />
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
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Siguiente
          </button>
        </div>
      </form>
    </div>
  );
}
