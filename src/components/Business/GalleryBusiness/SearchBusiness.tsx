"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input, Pagination } from "@nextui-org/react";
import { Business } from "../../../../types/business";
import ProfileBusines from "./ProfileBusinessCard";

export function SearchBusiness({
  business,
}: {
  business: Business;
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBusiness = business.filter(
    (busines) =>
      busines.businessname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      busines.companyname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      busines.province?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      busines.rucNumber?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // paginacion
  const [currentPage, setCurrentPage] = useState(1);
  const businessPerPage = 8;

  const indexOfLastBusiness = currentPage * businessPerPage;
  const indexOfFirstBusiness = indexOfLastBusiness - businessPerPage;
  const currentBusiness = filteredBusiness.slice(
    indexOfFirstBusiness,
    indexOfLastBusiness
  );

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
        {/* <SmallHeader
          emailUser={emailUser}
          imageUser={imageUser}
          roleUser={roleUser}
        /> */}

        {/* Hero Section */}
        <section className="bg-[#020561] text-white py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Distribuidores y Empresas
            </h1>
            {/* <p className="text-xl mb-8">
              Profesionistas competentes y eficientes en cada area en la que se
              desempeñan
            </p> */}

            <div className="max-w-md mx-auto relative">
              <Input
                type="text"
                placeholder="Busca por nombre,role,habilidad..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full rounded-full text-black"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </section>

        <section className="bg-[#020561] px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* {filteredBusiness.map((member) => ( */}
            {currentBusiness.map((negocio) => (
              // <ProfileMember key={member.id} {...member} />
              <ProfileBusines key={negocio.id} {...negocio} />
            ))}
          </div>

          {filteredBusiness.length === 0 && (
            <h2 className="text-center text-white mt-8">
              No se encontro coincidencias con algun negocio
            </h2>
          )}

          <br />
          {/* <div className="mt-8 text-sm text-white text-center">
            Vemos {filteredMembers.length} de {members.length} miembros
          </div> */}
          <div className="w-full mt-8 px-2 pt-8 flex justify-center">
            {filteredBusiness.length > 0 && (
              <Pagination
                showShadow
                color="warning"
                size="lg"
                showControls
                initialPage={1}
                total={Math.ceil(filteredBusiness.length / businessPerPage)}
                // onChange={() => paginate(currentPage + 1)}
                page={currentPage}
                onChange={setCurrentPage}
              />
            )}
          </div>
          <br />
          <br />
        </section>

        {/* <ProfilesSection/> */}

        {/* {isUser && (
          <section className="py-20 bg-gradient-to-r from-black via-orange-500 to-black text-white">
            <div className="container mx-auto text-center px-4">
              <h2 className="text-3xl font-bold mb-4">
                Unete a nuestra Comunidad de profesionales
              </h2>
              <button className="bg-white text-black px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-200 transition-colors duration-300">
                Unete Ahora !
              </button>
            </div>
          </section>
        )} */}
      </div>
    </>
  );
}
