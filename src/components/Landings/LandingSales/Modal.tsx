"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCheck, X } from "lucide-react";
import { Button } from "@nextui-org/react";
import {
  departaments,
  Localidades,
} from "@/components/User/RegistrationMember/data";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: string;
  name: string;
  email: string;
}

export function Modal({ isOpen, onClose, item, name, email }: ModalProps) {
  //   const [name, setName] = useState('John Doe')
  //   const [email, setEmail] = useState('johndoe@example.com')

  const [phone, setPhone] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const [department, setDepartment] = useState<string>("");
  const [province, setProvince] = useState<string>("");
  const [provinces, setProvinces] = useState<string[]>([""]);

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isSubmitting && progress < 100) {
      interval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + 1
          if (newProgress >= 100) {
            clearInterval(interval)
            return 100
          }
          return newProgress
        })
      }, 50) // 100ms * 100 steps = 10 seconds
    }
    return () => clearInterval(interval)
  }, [isSubmitting, progress])

  useEffect(() => {
    if (progress === 100) {
      setIsSubmitted(true)
      setIsSubmitting(false)
    }
  }, [progress])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // setIsSubmitting(true);

    const form = new FormData();

    form.set("fullName", name);
    form.set("email", email);
    form.set("phoneNumber", phone);
    form.set("ubicacion", `${department}, ${province}`);
    form.set("price", price);
    form.set("description", description);
    form.set("image", image as File);

    // const res = await fetch("/api/sendsales", {
    //   method: "POST",
    //   body: form,
    // });

    // setIsSubmitted(true);
    setIsSubmitting(true)
    setProgress(0)
    try {
      const result = await fetch("/api/sendsales", {
        method: "POST",
        body: form,
      });
      if (result.ok) {
        // Form reset is now handled by the progress completion
        setTimeout(() => {
          // const form = document.getElementById('product-form') as HTMLFormElement
          // form.reset()
          setIsSubmitted(false)
          setProgress(0)
        }, 2000)
      }
    } catch (error) {
      console.error('Failed to submit product:', error)
      setIsSubmitting(false)
      setProgress(0)
    }

    setIsSubmitted(false)

    // const data = await res.json();
    // console.log(data);

    onClose();
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl md:text-2xl font-bold text-brown-800">
            Vendo {item}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        <form id="product-form" onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              value={name}
              readOnly
              className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brown-500 focus:border-brown-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              readOnly
              className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brown-500 focus:border-brown-500"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Telefono Movil
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              required
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brown-500 focus:border-brown-500"
            />
          </div>
          <div>
            <label
              htmlFor="Ubicacion"
              className="block text-sm font-medium text-gray-700"
            >
              Ubicacion
            </label>
            <select
              value={department}
              onChange={(e) => {
                setDepartment(e.target.value);
                if (e.target.value !== "") {
                  const index = Localidades.findIndex(
                    (localidad) => localidad.departamento === e.target.value
                  );
                  setProvinces(Localidades[index].provincias);
                }
                setProvince("");
              }}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Seleccione un Departmento</option>
              {departaments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
            <select
              value={province}
              onChange={(e) => {
                setProvince(e.target.value);
              }}
              className="w-full p-2 border rounded"
              disabled={!department}
              required
            >
              <option value="">Seleccione una Provincia</option>
              {provinces.map((prov: string) => (
                <option key={prov} value={prov}>
                  {prov}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Precio Estimado (s./)
            </label>
            <input
              type="tel"
              id="price"
              value={price}
              required
              onChange={(e) => setPrice(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brown-500 focus:border-brown-500"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Descripcion
            </label>
            <textarea
              id="description"
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brown-500 focus:border-brown-500"
            />
          </div>
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Imagen de Referencia
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              required
              onChange={handleImageUpload}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brown-500 focus:border-brown-500"
            />
          </div>
          {image && (
            <div>
              <p>Imagen Seleccionada: {image.name}</p>
              <button
                type="button"
                onClick={() => setImage(null)}
                className="mt-2 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Borrar
              </button>
            </div>
          )}
          <Button
            type="submit"
            color={isSubmitting ? "warning" : (isSubmitted ? "success" : "primary")}
            variant="faded"
            className="w-full px-4 py-2 bg-brown-600 text-amber-900 rounded-md hover:bg-brown-700 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:ring-offset-2"
          >
            {isSubmitted ? (
              <>
                <CheckCheck className="ml-2 h-5 w-5" aria-hidden="true" /> Enviado
              </>
            ) : isSubmitting ? (
              <>Enviando... {progress}%</>
            ) : (
              "Enviar"
            )}
          </Button>
        </form>
      </motion.div>
    </motion.div>
  );
}
