"use client";

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
import { Search } from "lucide-react";
import { useState } from "react";
// import { generateMembers } from "./data";

// Placeholder data for registered members
const members = [
  {
    id: 1,
    name: "John Doe",
    role: "Senior Developer",
    company: "Tech Corp",
    location: "New York, USA",
    skills: ["React", "Node.js", "TypeScript"],
    description:
      "Passionate about creating scalable web applications and mentoring junior developers. Always exploring new technologies to improve development processes.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "UX Designer",
    company: "Creative Studios",
    location: "London, UK",
    skills: ["UI/UX", "Figma", "User Research"],
    description:
      "Dedicated to crafting intuitive and visually appealing user interfaces. Advocates for user-centered design in every project.",
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Project Manager",
    company: "Innovate Inc",
    location: "San Francisco, USA",
    skills: ["Agile", "Scrum", "Risk Management"],
    description:
      "Experienced in leading cross-functional teams and delivering complex projects on time and within budget. Strong believer in agile methodologies.",
  },
  {
    id: 4,
    name: "Emily Brown",
    role: "Full Stack Developer",
    company: "WebSolutions",
    location: "Berlin, Germany",
    skills: ["Vue.js", "Python", "Docker"],
    description:
      "Full stack developer with a passion for building robust and efficient web applications. Enjoys tackling challenging problems and learning new technologies.",
  },
  {
    id: 5,
    name: "Chris Lee",
    role: "Graphic Designer",
    company: "DesignWorks",
    location: "Tokyo, Japan",
    skills: ["Illustration", "Adobe CC", "Branding"],
    description:
      "Creative graphic designer with a keen eye for detail. Specializes in creating unique brand identities and eye-catching marketing materials.",
  },
  {
    id: 6,
    name: "Alex Chen",
    role: "Data Scientist",
    company: "DataMinds",
    location: "Singapore",
    skills: ["Python", "Machine Learning", "Data Visualization"],
    description:
      "Data scientist with a background in statistical analysis and machine learning. Passionate about extracting meaningful insights from complex datasets.",
  },
  {
    id: 7,
    name: "Sarah Kim",
    role: "Product Manager",
    company: "ProductPro",
    location: "Seoul, South Korea",
    skills: ["Product Strategy", "User Research", "Roadmapping"],
    description:
      "Product manager focused on creating user-centric products. Skilled in translating business requirements into actionable development plans.",
  },
  // {
  //   id: 8,
  //   name: "Tom Wilson",
  //   role: "DevOps Engineer",
  //   company: "CloudTech",
  //   location: "Sydney, Australia",
  //   skills: ["AWS", "Kubernetes", "CI/CD"],
  //   description:
  //     "DevOps engineer specializing in cloud infrastructure and automation. Committed to improving deployment processes and system reliability.",
  // },
  // {
  //   id: 9,
  //   name: "Tom Wilson",
  //   role: "DevOps Engineer",
  //   company: "CloudTech",
  //   location: "Sydney, Australia",
  //   skills: ["AWS", "Kubernetes", "CI/CD"],
  //   description:
  //     "DevOps engineer specializing in cloud infrastructure and automation. Committed to improving deployment processes and system reliability.",
  // },
  // {
  //   id: 10,
  //   name: "Tom Wilson",
  //   role: "DevOps Engineer",
  //   company: "CloudTech",
  //   location: "Sydney, Australia",
  //   skills: ["AWS", "Kubernetes", "CI/CD"],
  //   description:
  //     "DevOps engineer specializing in cloud infrastructure and automation. Committed to improving deployment processes and system reliability.",
  // },
  // {
  //   id: 11,
  //   name: "Tom Wilson",
  //   role: "DevOps Engineer",
  //   company: "CloudTech",
  //   location: "Sydney, Australia",
  //   skills: ["AWS", "Kubernetes", "CI/CD"],
  //   description:
  //     "DevOps engineer specializing in cloud infrastructure and automation. Committed to improving deployment processes and system reliability.",
  // },
  // {
  //   id: 12,
  //   name: "Tom Wilson",
  //   role: "DevOps Engineer",
  //   company: "CloudTech",
  //   location: "Sydney, Australia",
  //   skills: ["AWS", "Kubernetes", "CI/CD"],
  //   description:
  //     "DevOps engineer specializing in cloud infrastructure and automation. Committed to improving deployment processes and system reliability.",
  // },
  // {
  //   id: 13,
  //   name: "Tom Wilson",
  //   role: "DevOps Engineer",
  //   company: "CloudTech",
  //   location: "Sydney, Australia",
  //   skills: ["AWS", "Kubernetes", "CI/CD"],
  //   description:
  //     "DevOps engineer specializing in cloud infrastructure and automation. Committed to improving deployment processes and system reliability.",
  // },
  // {
  //   id: 14,
  //   name: "Tom Wilson",
  //   role: "DevOps Engineer",
  //   company: "CloudTech",
  //   location: "Sydney, Australia",
  //   skills: ["AWS", "Kubernetes", "CI/CD"],
  //   description:
  //     "DevOps engineer specializing in cloud infrastructure and automation. Committed to improving deployment processes and system reliability.",
  // },
];

// const members = generateMembers(8);

export default function GalleryProfile() {
  const [searchTerm, setSearchTerm] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      ) ||
      member.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      {/* Hero Section */}
      <section className="bg-[#020561] text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Perfiles Profesionales
          </h1>
          <p className="text-xl mb-8">
            Profesionistas competentes y eficientes en cada area en la que se
            desempeñan
          </p>
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
          {filteredMembers.map((member) => (
            <Card key={member.id} className="overflow-hidden">
              <CardBody className="p-4">
                <div className="flex flex-col items-center text-center">
                  <Avatar
                    className="w-24 h-24 mb-4"
                    src={`https://api.dicebear.com/6.x/avataaars/svg?seed=${member.name}`}
                    alt={member.name}
                  />
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                  {/* <p className="text-sm text-gray-500">{member.company}</p> */}
                  <p className="text-xs text-gray-400 mt-1">
                    {member.location}
                  </p>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {member.skills.map((skill, index) => (
                      <Chip key={index} variant="solid" className="text-xs">
                        {skill}
                      </Chip>
                    ))}
                  </div>
                  <div className="mt-4 w-full">
                    <Button onPress={onOpen} variant="ghost" className="w-full">
                      Ver Perfil
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
                            <ModalHeader className="flex flex-col gap-1">
                              <h4>{member.name}</h4>
                              <p>
                                {member.role}
                                {/* {member.role} at {member.company} */}
                              </p>
                            </ModalHeader>
                            <ModalBody>
                              <div className="grid gap-4 py-4">
                                <div className="flex items-center gap-4">
                                  <Avatar
                                    className="w-20 h-20"
                                    src={`https://api.dicebear.com/6.x/avataaars/svg?seed=${member.name}`}
                                    alt={member.name}
                                  />

                                  <div>
                                    <h3 className="text-lg font-semibold">
                                      {member.name}
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                      {member.location}
                                    </p>
                                  </div>
                                </div>
                              </div>

                              {/* <div className="grid gap-2">
                                    <div className="flex items-center gap-2">
                                      <Mail className="w-4 h-4 text-gray-500" />
                                      <span>{member.email}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <Phone className="w-4 h-4 text-gray-500" />
                                      <span>{member.phone}</span>
                                    </div>
                                  </div> */}

                              <div>
                                <h4 className="text-sm font-medium mb-2">
                                  Skills
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {member.skills.map((skill, index) => (
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

                              {/* <div>
                                    <h4 className="text-sm font-medium mb-2">
                                      Experience
                                    </h4>
                                    {member.experience.map((exp, index) => (
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
                                    <p>{member.education.degree}</p>
                                    <p className="text-sm text-gray-500">
                                      {member.education.university},{" "}
                                      {member.education.year}
                                    </p>
                                  </div>
                                  <div>
                                    <h4 className="text-sm font-medium mb-2">
                                      Certifications
                                    </h4>
                                    <ul className="list-disc list-inside">
                                      {member.certifications.map(
                                        (cert, index) => (
                                          <li key={index} className="text-sm">
                                            {cert}
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </div> */}

                              {/* <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Nullam pulvinar risus non
                                  risus hendrerit venenatis. Pellentesque sit
                                  amet hendrerit risus, sed porttitor quam.
                                </p>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Nullam pulvinar risus non
                                  risus hendrerit venenatis. Pellentesque sit
                                  amet hendrerit risus, sed porttitor quam.
                                </p> */}
                            </ModalBody>
                            <ModalFooter>
                              <Button
                                color="danger"
                                variant="light"
                                onPress={onClose}
                              >
                                Close
                              </Button>
                              {/* <Button color="primary" onPress={onClose}>
                                  Action
                                </Button> */}
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

        {filteredMembers.length === 0 && (
          <p className="text-center text-gray-500 mt-8">
            No se encontro coincidencias con algun miembro
          </p>
        )}

        <div className="mt-8 text-sm text-gray-500 text-center">
          Vemos {filteredMembers.length} of {members.length} miembros
        </div>
      </section>
    </div>
  );
}
