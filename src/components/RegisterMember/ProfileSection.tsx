"use client";

import { useState } from "react";
import ProfileCard from "./ProfileCard";
import ProfileModal from "./ProfileModal";
import { Search } from "lucide-react";
import { Pagination } from "@nextui-org/react";

interface Profile {
  id: number;
  name: string;
  profession: string;
  location: string;
  image: string;
  bio: string;
  skills: string[];
  experience: string[];
  education: string[];
}

// Mock data for profiles
const mockProfiles = Array.from({ length: 120 }, (_, i) => ({
  id: i + 1,
  name: `Professional ${i + 1}`,
  profession: `Profession ${i + 1}`,
  location: `City ${i + 1}`,
  image: `/placeholder.svg?height=100&width=100`,
  bio: `This is the bio for Professional ${
    i + 1
  }. They are an expert in their field with years of experience.`,
  skills: ["Skill 1", "Skill 2", "Skill 3"],
  experience: ["Company A", "Company B", "Company C"],
  education: ["University X", "College Y"],
}));

export default function ProfilesSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>();
  const profilesPerPage = 8;
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProfiles = mockProfiles.filter(
    (profile) =>
      profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profile.profession.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
  const currentProfiles = filteredProfiles.slice(
    indexOfFirstProfile,
    indexOfLastProfile
  );

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <section className="bg-blue-100 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search profiles..."
              className="w-full md:w-96 px-4 py-2 rounded-full border-2 border-gray-300 focus:outline-none focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute right-3 top-2.5 text-gray-400" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentProfiles.map((profile) => (
            <ProfileCard
              key={profile.id}
              {...profile}
              onViewProfile={() => setSelectedProfile(profile)}
            />
          ))}
        </div>
        {/* <div className="mt-8 flex justify-center">
          {Array.from(
            { length: Math.ceil(filteredProfiles.length / profilesPerPage) },
            (_, i) => (
              <button
                key={i}
                onClick={() => paginate(i + 1)}
                className={`mx-1 px-3 py-1 rounded ${
                  currentPage === i + 1
                    ? "bg-blue-500 text-white"
                    : "bg-white text-blue-500"
                }`}
              >
                {i + 1}
              </button>
            )
          )}
        </div> */}
        <div className="w-full mt-8 px-2 flex justify-center">
          <Pagination
            showShadow
            color="warning"
            size="lg"
            showControls
            initialPage={1}
            total={Math.ceil(filteredProfiles.length / profilesPerPage)}
            // onChange={() => paginate(currentPage + 1)}
            page={currentPage}
            onChange={setCurrentPage}
          />
        </div>
      </div>
      {selectedProfile && (
        <ProfileModal
          profile={selectedProfile}
          onClose={() => setSelectedProfile(null)}
        />
      )}
    </section>
  );
}
