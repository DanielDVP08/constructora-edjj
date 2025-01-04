// import React from 'react'

import {
  Button,
  Chip,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import {
  Briefcase,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { MemberCard } from "../../../../types/member";

export default function ProbandoModal({ member }: { member: MemberCard }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const skills = (member.skills as string).split(",");
  const lastjob = (member.lastjob as string).split(",");

  return (
    <>
      <div className="mt-4 w-full">
        <Button onPress={onOpen} variant="ghost" className="w-full">
          Ver Perfil
        </Button>

        <Modal
          size="2xl"
          isOpen={isOpen}
          placement="auto"
          onOpenChange={onOpenChange}
          scrollBehavior="inside"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalBody>
                  <div className="bg-white shadow-lg max-w-4xl mx-auto my-8">
                    <div className="flex flex-col md:flex-row">
                      {/* Left Column */}
                      <div className="w-full md:w-1/3 bg-gray-100">
                        <div className="relative h-64 md:h-auto">
                          <Image
                            src={
                              member.profileimage
                                ? member.profileimage
                                : "https://images.unsplash.com/broken"
                            }
                            alt="Profile picture"
                            height={160}
                            width={200}
                          />
                        </div>
                        <div className="p-6 space-y-6">
                          <div>
                            <h2 className="text-xl font-bold mb-2">
                              Descripcion
                            </h2>
                            <p className="text-sm">{member.description}</p>
                          </div>
                          <div>
                            <h2 className="text-xl font-bold mb-2">
                              Habilidades
                            </h2>
                            <ul className="space-y-2">
                              {skills.map((skill, index) => (
                                <Chip key={index}>{skill}</Chip>
                              ))}
                            </ul>
                          </div>
                          {/* <div>
                          <h2 className="text-xl font-bold mb-2">LANGUAGE</h2>
                          {["ENGLISH", "FRENCH", "SPANISH"].map(
                            (lang, index) => (
                              <div key={lang} className="mb-2">
                                <div className="flex justify-between text-sm mb-1">
                                  <span>{lang}</span>
                                  <span>{["100%", "80%", "60%"][index]}</span>
                                </div>
                                <div className="bg-gray-300 h-2 rounded-full">
                                  <div
                                    className="bg-yellow-400 h-2 rounded-full"
                                    style={{
                                      width: ["100%", "80%", "60%"][index],
                                    }}
                                  ></div>
                                </div>
                              </div>
                            )
                          )}
                        </div> */}
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="w-full md:w-2/3 p-6 space-y-6">
                        <div
                          className="border-b-4 border-yellow-400 pb-4"
                          // style={{
                          //   backgroundImage: "url(/assets/titlemember.png)",
                          //   backgroundSize: "cover",
                          //   backgroundPosition: "center",
                          // }}
                        >
                          <h1 className="text-4xl font-bold text-gray-800">
                            {member.firstName} {member.lastName}
                          </h1>
                          <p className="text-xl text-gray-400">
                            {member.career ? member.career : "Operario"}
                          </p>
                        </div>

                        <div>
                          <h2 className="text-xl font-bold mb-2">Educacion</h2>
                        </div>
                        <div className="flex items-start gap-4">
                          <GraduationCap className="w-6 h-6 text-primary mt-1" />
                          <div>
                            <h3 className="font-semibold">
                              {member.education}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {member.career}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {member.university}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {member.codcip}
                            </p>
                          </div>
                        </div>

                        <div>
                          <h2 className="text-xl font-bold mb-2">
                            Ultimo Trabajo
                          </h2>
                        </div>
                        <div className="flex items-start gap-4">
                          <Briefcase className="w-6 h-6 text-primary mt-1" />
                          <div>
                            <h3 className="font-semibold">{lastjob[0]}</h3>
                            <p className="text-sm text-muted-foreground">
                              {lastjob[1]}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {lastjob[2]} - {lastjob[3]}
                            </p>
                          </div>
                        </div>
                        {/* <div>
                          <h2 className="text-xl font-bold mb-2">REFERENCES</h2>
                          <p className="text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </div> */}
                      </div>
                    </div>
                    {/* Contact Information */}
                    <div className="bg-black text-white p-4">
                      <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        <Chip
                          startContent={<Phone className="w-4 h-4" />}
                          variant="flat"
                          className="flex gap-1 text-white"
                        > 
                        {member.phoneNumber}
                        </Chip>
                        <Chip
                          startContent={<Mail className="w-4 h-4" />}
                          variant="flat"
                          className="flex gap-1 text-white"
                        > 
                          {member.email}
                        </Chip>
                        <Chip
                          startContent={<MapPin className="w-4 h-4" />}
                          variant="flat"
                          className="flex gap-1 text-white"
                        > 
                          {member.residence}
                        </Chip>
                      </div>
                    </div>
                  </div>
                </ModalBody>

                <div className="flex justify-center">
                  <Button
                    className="w-full md:w-auto transition-transform hover:scale-105"
                    onPress={() => window.open(member.cv as string, "_blank")}
                  >
                    <Download className="mr-2 h-4 w-4" /> Download Resume PDF
                  </Button>
                </div>

                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
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
    </>
  );
}
