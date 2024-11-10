"use client"

import {
  Avatar,
  Button,
  Card,
  CardBody,
  Chip,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

type Member = {
  id: number;
  name: string;
  role: string;
  company: string;
  location: string;
  skills: string[];
  description: string;
};

export function ProfileCard(member: Member) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
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
            <p className="text-xs text-gray-400 mt-1">{member.location}</p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {member.skills.map((skill: string, index: number) => (
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
                size="2xl"
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
                          <h4 className="text-sm font-medium mb-2">Skills</h4>
                          <div className="flex flex-wrap gap-2">
                            {member.skills.map(
                              (skill: string, index: number) => (
                                <Chip
                                  key={index}
                                  variant="solid"
                                  className="text-xs"
                                >
                                  {skill}
                                </Chip>
                              )
                            )}
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
    </>
  );
}
