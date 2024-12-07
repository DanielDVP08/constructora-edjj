import { GalleryProfile } from "@/components/Landings/GalleryProfile/GalleryProfile";
import { auth } from "../../../../../auth";
import { redirect } from "next/navigation";

export default async function page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const categoria = (await params).category;
  const session = await auth();
  const categorias=["profesional","tecnico","operario"]

  return (
    <>
      {session && categorias.includes(categoria) ? <GalleryProfile categoria={categoria} /> : redirect("/")}
    </>
    // <div>{categoria}</div>
  );
}
