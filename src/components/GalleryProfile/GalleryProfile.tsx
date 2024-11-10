// "use client";


// import { Search } from "lucide-react";
// import { useState } from "react";
// import { ProfileCard } from "./ProfileCard";
// import { Input } from "@nextui-org/react";
// import { generateMembers } from "./data";
import db from "@/libs/bd"
// import ProfileMember from "./ProfileMemberCard";
import { SearchMember } from "./SearchMember";

export async function GalleryProfile() {
  const members = await db.member.findMany();

  
  return (
    // <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
    //   {/* Hero Section */}
    //   <section className="bg-[#020561] text-white py-20 px-4">
    //     <div className="container mx-auto text-center">
    //       <h1 className="text-4xl md:text-5xl font-bold mb-4">
    //         Perfiles Profesionales
    //       </h1>
    //       <p className="text-xl mb-8">
    //         Profesionistas competentes y eficientes en cada area en la que se
    //         desempeñan
    //       </p>
    //       <div className="max-w-md mx-auto relative">
    //         <Input
    //           type="text"
    //           placeholder="Busca por nombre,role,habilidad..."
    //           value={searchTerm}
    //           onChange={(e) => setSearchTerm(e.target.value)}
    //           className="pl-10 pr-4 py-2 w-full rounded-full text-black"
    //         />
    //         <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    //       </div>
    //     </div>
    //   </section>

    //   <section className="bg-[#020561] px-10">
    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    //       {filteredMembers.map((member) => (
    //         <ProfileMember key={member.id} {...member} />
    //       ))}
    //     </div>

    //     {filteredMembers.length === 0 && (
    //       <p className="text-center text-gray-500 mt-8">
    //         No se encontro coincidencias con algun miembro
    //       </p>
    //     )}

    //     <div className="mt-8 text-sm text-gray-500 text-center">
    //       Vemos {filteredMembers.length} of {members.length} miembros
    //     </div>
    //   </section>
    // </div>
    <>
      <SearchMember members={members}/>
    </>
  );
}
