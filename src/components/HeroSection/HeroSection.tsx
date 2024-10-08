// import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="h-96">
      <section
        className="relative bg-auto bg-no-repeat bg-center text-white bg-white bg-opacity-50 bg-blend-overlay"
        style={{ backgroundImage: "url(/assets/HeroFondo.jpg)" }}
      >
        <div className="container mx-auto px-6 py-40 flex flex-col items-start space-y-4">
          <h1 className="text-5xl font-semibold text-[#020352]">Construye tus metas</h1>
          <p className="text-lg max-w-lg text-[#020352]">
            Nos distingue la excelencia en la selección de profesionales y la
            atención personalizada para cada proyecto, asegurando resultados que
            superan expectativas
          </p>
          {/* <div className="flex space-x-4">
            <Link
              href="#"
              className="bg-yellow-500 text-gray-900 px-4 py-2 rounded"
            >
              Servicios
            </Link>
            <Link
              href="#"
              className="bg-transparent border-2 border-yellow-500 text-yellow-500 px-4 py-2 rounded"
            >
              Saber Mas
            </Link>
          </div> */}
        </div>
      </section>
    </div>
  );
}
