"use client";

import { useForm } from "react-hook-form";

export default function ProbandoImagen() {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const res = await fetch("/api/uploadp", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resJSON = await res.json();

    console.log(resJSON);

    console.log(data);
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          {...register("email", {
            required: {
              value: true,
              message: "Archivo no encontrado",
            },
          })}
        />
        <input
          type="file"
          accept="image/*"
          {...register("picture", {
            required: {
              value: true,
              message: "Archivo no encontrado",
            },
          })}
        />
        <button
          type="submit"
          className="w-1/4 bg-red-600 hover:bg-red-700 text-white py-3 rounded-md"
        >
          Submit
        </button>
      </form>
    </>
  );
}
