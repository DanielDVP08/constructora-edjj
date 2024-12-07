"use client";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
// import Image from "next/image";
import { CldImage } from "next-cloudinary";

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            {/* <Image
              src="/assets/logojj.png"
              width="150"
              height="40"
              alt="Logo Constructora"
            /> */}
            <CldImage
              alt="Logo Constructora"
              src="https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733346062/logojj_ou1syp.png"
              width={150}
              height={40}
              crop={{
                type: "fit",
                source: true,
              }}
            />
            <p className="mb-4">
              Nos distingue la excelencia en la selección de profesionales y la
              atención personalizada para cada proyecto, asegurando resultados
              que superan expectativas
            </p>
          </div>
          <div>
            {/* <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3> */}
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  Nosotros
                </Link>
              </li>
              {/* <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Servicios
                </Link>
              </li> */}
              {/* <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Projects
                </Link>
              </li> */}
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Nuestros Servicios
            </h3>
            <ul className="space-y-2">
              <li>Perfiles Profesionales</li>
              <li>Ventas</li>
              <li>Proveedores Confiables</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Contactanos
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>Lima</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>(073) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <a
                  href="mailto:info@buildright.com"
                  className="hover:text-white transition-colors"
                >
                  info@jjconstructora.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>
            &copy; {new Date().getFullYear()} JJ Constructora. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
