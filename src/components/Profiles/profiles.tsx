"use client";

import { useState, useEffect } from "react";

import { Search, Filter, Mail, Phone } from "lucide-react";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  Chip,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

// Generate 150 user profiles
const generateUsers = (count: number) => {
  const roles = [
    "UX Designer",
    "Full Stack Developer",
    "Data Scientist",
    "Product Manager",
    "DevOps Engineer",
    "Marketing Specialist",
    "Cybersecurity Analyst",
    "AI Researcher",
  ];
  const companies = [
    "DesignCo",
    "TechInnovate",
    "DataMind",
    "ProductPro",
    "CloudTech",
    "GrowthHack",
    "SecureNet",
    "FutureTech",
  ];
  const locations = [
    "San Francisco, CA",
    "New York, NY",
    "Boston, MA",
    "Seattle, WA",
    "Austin, TX",
    "Miami, FL",
    "Washington, D.C.",
    "Los Angeles, CA",
  ];
  const skills = [
    "UI/UX",
    "Figma",
    "User Research",
    "React",
    "Node.js",
    "MongoDB",
    "Python",
    "Machine Learning",
    "SQL",
    "Agile",
    "User Stories",
    "Roadmapping",
    "AWS",
    "Docker",
    "Kubernetes",
    "SEO",
    "Content Strategy",
    "Analytics",
    "Network Security",
    "Penetration Testing",
    "Incident Response",
    "Deep Learning",
    "NLP",
    "Computer Vision",
  ];
  const universities = [
    "Stanford University",
    "MIT",
    "Harvard University",
    "UC Berkeley",
    "Carnegie Mellon University",
    "Georgia Tech",
    "University of Washington",
    "Cornell University",
  ];
  const degrees = [
    "B.S. Computer Science",
    "M.S. Data Science",
    "B.A. Design",
    "MBA",
    "Ph.D. Artificial Intelligence",
    "B.S. Cybersecurity",
    "M.S. Software Engineering",
    "B.S. Information Systems",
  ];

  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    role: roles[Math.floor(Math.random() * roles.length)],
    company: companies[Math.floor(Math.random() * companies.length)],
    location: locations[Math.floor(Math.random() * locations.length)],
    skills: Array.from(
      { length: 3 },
      () => skills[Math.floor(Math.random() * skills.length)]
    ),
    email: `user${i + 1}@example.com`,
    phone: `(${Math.floor(Math.random() * 900) + 100}) ${
      Math.floor(Math.random() * 900) + 100
    }-${Math.floor(Math.random() * 9000) + 1000}`,
    education: {
      university: universities[Math.floor(Math.random() * universities.length)],
      degree: degrees[Math.floor(Math.random() * degrees.length)],
      year: 2010 + Math.floor(Math.random() * 13),
    },
    experience: [
      {
        title: roles[Math.floor(Math.random() * roles.length)],
        company: companies[Math.floor(Math.random() * companies.length)],
        duration: `${2015 + Math.floor(Math.random() * 7)} - Present`,
      },
      {
        title: roles[Math.floor(Math.random() * roles.length)],
        company: companies[Math.floor(Math.random() * companies.length)],
        duration: `${2010 + Math.floor(Math.random() * 5)} - ${
          2015 + Math.floor(Math.random() * 7)
        }`,
      },
    ],
    certifications: [
      skills[Math.floor(Math.random() * skills.length)] + " Certification",
      skills[Math.floor(Math.random() * skills.length)] + " Professional",
    ],
  }));
};

const users = generateUsers(8);

// const Pagination = ({ currentPage, totalPages, onPageChange }) => {
//   const pageNumbers = [];
//   for (let i = 1; i <= totalPages; i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <nav className="flex justify-center mt-8">
//       <ul className="flex space-x-2">
//         {pageNumbers.map((number) => (
//           <li key={number}>
//             <Button
//               variant={currentPage === number ? "solid" : "faded"}
//               onClick={() => onPageChange(number)}
//             >
//               {number}
//             </Button>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

export default function Profiles() {
  const [searchTerm, setSearchTerm] = useState("");
  // const [roleFilter, setRoleFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredUsers, setFilteredUsers] = useState(users);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const usersPerPage = 12;

  useEffect(() => {
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.skills.some((skill) =>
          skill.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
    setFilteredUsers(filtered);
    setCurrentPage(1);
  }, [searchTerm]);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  // const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Amazing Professionals
          </h1>
          <p className="text-xl mb-8">
            Connect with talented individuals across various industries
          </p>
          <div className="max-w-md mx-auto relative">
            <Input
              type="text"
              placeholder="Search by name, role, company, or skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full rounded-full text-black"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-4 bg-white shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Filter className="mr-2 text-gray-500" />
            <span className="font-semibold">Filters:</span>
          </div>
          {/* <div className="w-full md:w-64">
            <Select value={roleFilter} onValueChange={setRoleFilter}>
              <option value="">All Roles</option>
              {Array.from(new Set(users.map((user) => user.role))).map(
                (role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                )
              )}
            </Select>
          </div> */}
        </div>
      </section>

      {/* User Profiles Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          {/* <h2 className="text-3xl font-bold text-center mb-12">
            Featured Professionals
          </h2> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {currentUsers.map((user) => (
              <Card
                key={user.id}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <CardBody className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar
                      className="w-24 h-24 mb-4"
                      src={`https://api.dicebear.com/6.x/avataaars/svg?seed=${user.name}`}
                      alt={user.name}
                    />
                    <h3 className="text-xl font-semibold mb-1">{user.name}</h3>
                    <p className="text-blue-600 font-medium mb-1">
                      {user.role}
                    </p>
                    <p className="text-gray-600 mb-2">{user.company}</p>
                    <p className="text-sm text-gray-500 mb-4">
                      {user.location}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      {user.skills.map((skill, index) => (
                        <Chip key={index} variant="solid" className="text-xs">
                          {skill}
                        </Chip>
                      ))}
                    </div>

                    <div className="flex flex-col gap-2">
                      <Button onPress={onOpen} className="max-w-fit">
                        Open Modal
                      </Button>

                      <Modal
                        size="xl"
                        isOpen={isOpen}
                        placement="auto"
                        onOpenChange={onOpenChange}
                      >
                        <ModalContent>
                          {(onClose) => (
                            <>
                              <ModalHeader>
                                <h4>{user.name}</h4>
                                <p>
                                  {user.role} at {user.company}
                                </p>
                              </ModalHeader>
                              <ModalBody>
                                <div className="grid gap-4 py-4">
                                  <div className="flex items-center gap-4">
                                    <Avatar
                                      className="w-20 h-20"
                                      src={`https://api.dicebear.com/6.x/avataaars/svg?seed=${user.name}`}
                                      alt={user.name}
                                    />

                                    <div>
                                      <h3 className="text-lg font-semibold">
                                        {user.name}
                                      </h3>
                                      <p className="text-sm text-gray-500">
                                        {user.location}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="grid gap-2">
                                    <div className="flex items-center gap-2">
                                      <Mail className="w-4 h-4 text-gray-500" />
                                      <span>{user.email}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <Phone className="w-4 h-4 text-gray-500" />
                                      <span>{user.phone}</span>
                                    </div>
                                  </div>
                                  <div>
                                    <h4 className="text-sm font-medium mb-2">
                                      Skills
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                      {user.skills.map((skill, index) => (
                                        <Chip
                                          key={index}
                                          variant="solid"
                                          className="text-xs"
                                        >
                                          {skill}
                                        </Chip>
                                      ))}
                                    </div>
                                  </div>
                                  <div>
                                    <h4 className="text-sm font-medium mb-2">
                                      Experience
                                    </h4>
                                    {user.experience.map((exp, index) => (
                                      <div key={index} className="mb-2">
                                        <p className="font-medium">
                                          {exp.title}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                          {exp.company} | {exp.duration}
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                  <div>
                                    <h4 className="text-sm font-medium mb-2">
                                      Education
                                    </h4>
                                    <p>{user.education.degree}</p>
                                    <p className="text-sm text-gray-500">
                                      {user.education.university},{" "}
                                      {user.education.year}
                                    </p>
                                  </div>
                                  <div>
                                    <h4 className="text-sm font-medium mb-2">
                                      Certifications
                                    </h4>
                                    <ul className="list-disc list-inside">
                                      {user.certifications.map(
                                        (cert, index) => (
                                          <li key={index} className="text-sm">
                                            {cert}
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </div>
                                </div>
                              </ModalBody>
                              <ModalFooter>
                                <Button
                                  color="danger"
                                  variant="light"
                                  onPress={onClose}
                                >
                                  Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                  Action
                                </Button>
                              </ModalFooter>
                            </>
                          )}
                        </ModalContent>
                      </Modal>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
          {/* {filteredUsers.length === 0 && (
            <p className="text-center text-gray-500 mt-8">
              No professionals found matching your search.
            </p>
          )}
          {filteredUsers.length > 0 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )} */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 px-4">
        <div className="container mx-auto text-center text-gray-600">
          <p>&copy; 2023 Professional Network. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
