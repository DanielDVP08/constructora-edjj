import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  Tab,
  Tabs,
  useDisclosure,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import { MemberCard } from "../../../../types/member";
import {
  Briefcase,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function ProfileModal({ member }: { member: MemberCard }) {
  const fadeInUp = {
    animate: { opacity: 1, y: 0 },
    // initial: { opacity: 0, y: 20 },
    // transition: { duration: 0.5 }
  };

  const staggerChildren = {
    animate: { transition: { staggerChildren: 0.1 } },
  };

  const skills = (member.skills as string).split(",");
  const lastjob = (member.lastjob as string).split(",");

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalBody>
                  <div className="container mx-auto p-4 space-y-6 max-w-4xl">
                    <motion.div
                      initial="initial"
                      animate="animate"
                      variants={staggerChildren}
                    >
                      <motion.div variants={fadeInUp}>
                        <Card className="relative">
                          {/* <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600"></div> */}
                          <CardBody className="p-6">
                            <div className="flex flex-col md:flex-row items-center md:items-end gap-4 -mt-20 md:-mt-16">
                              <Avatar
                                isBordered
                                color="primary"
                                src={
                                  member.profileimage
                                    ? member.profileimage
                                    : "https://images.unsplash.com/broken"
                                }
                                className="w-32 h-32 border-4 border-background"
                              />
                              {/* <AvatarImage src="/placeholder.svg?height=128&width=128" alt="John Doe" /> */}
                              {/* <AvatarFallback>JD</AvatarFallback> */}
                              {/* </Avatar> */}
                              <div className="text-center md:text-left space-y-2 flex-grow">
                                <h1 className="text-3xl font-bold">{`${member.firstName} ${member.lastName}`}</h1>
                                {/* <p className="text-xl text-muted-foreground">
                                        Senior Software Engineer at TechCorp
                                        Inc.
                                      </p> */}
                              </div>
                              {/* <Button
                                      className="md:self-start"
                                      onClick={() =>
                                        window.open(
                                          member.cv as string,
                                          "_blank"
                                        )
                                      }
                                    >
                                      <Download className="mr-2 h-4 w-4" />{" "}
                                      Descargar CV
                                    </Button> */}
                            </div>
                          </CardBody>
                        </Card>
                      </motion.div>

                      <motion.div variants={fadeInUp}>
                        <Card className="mt-6">
                          <CardBody className="p-6">
                            <div className="flex flex-wrap justify-center md:justify-start gap-4">
                              <Chip
                                variant="flat"
                                className="flex items-center gap-1"
                              >
                                <Phone className="w-4 h-4" />
                                {member.phoneNumber}
                              </Chip>
                              <Chip
                                variant="flat"
                                className="flex items-center gap-1"
                              >
                                <Mail className="w-4 h-4" />
                                {member.email}
                              </Chip>
                              <Chip
                                variant="flat"
                                className="flex items-center gap-1"
                              >
                                <MapPin className="w-4 h-4" />
                                {member.residence}
                              </Chip>
                            </div>
                          </CardBody>
                        </Card>
                      </motion.div>

                      <motion.div variants={fadeInUp}>
                        <Tabs aria-label="Options" className="mt-6">
                          {/* <TabsList className="grid w-full grid-cols-3"> */}
                          {/* <Tab value="about">About</Tab> */}
                          {/* <Tab value="experience">Experience</Tab> */}
                          {/* <Tab value="education">Education</Tab> */}
                          {/* </TabsList> */}
                          <Tab key="descripcion" title="Descripcion">
                            <Card>
                              <CardHeader>
                                <h3>Descripcion</h3>
                              </CardHeader>
                              <CardBody>
                                <p>{member.description}</p>

                                <h3 className="font-semibold mb-2">
                                  Habilidades
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                  {/* <Chip>JavaScript</Chip>
                                        <Chip>React</Chip>
                                        <Chip>Node.js</Chip>
                                        <Chip>Python</Chip>
                                        <Chip>AWS</Chip>
                                        <Chip>Docker</Chip> */}

                                  {skills.map((skill, index) => (
                                    <Chip key={index}>{skill}</Chip>
                                  ))}
                                </div>
                              </CardBody>
                            </Card>
                          </Tab>
                          <Tab key="experience" title="Experiencia">
                            <Card>
                              <CardHeader>
                                <h3>Ultimo Trabajo</h3>
                              </CardHeader>
                              <CardBody>
                                <div className="space-y-4">
                                  <div className="flex items-start gap-4">
                                    <Briefcase className="w-6 h-6 text-primary mt-1" />
                                    <div>
                                      <h3 className="font-semibold">
                                        {lastjob[0]}
                                      </h3>
                                      <p className="text-sm text-muted-foreground">
                                        {lastjob[1]}
                                      </p>
                                      <p className="text-sm text-muted-foreground">
                                        {lastjob[2]} - {lastjob[3]}
                                      </p>
                                      {/* <p className="mt-2">
                                              Leading development of
                                              cloud-native applications and
                                              mentoring junior developers.
                                            </p> */}
                                    </div>
                                  </div>
                                  {/* <SeparatorHorizontal />
                                        <div className="flex items-start gap-4">
                                          <Briefcase className="w-6 h-6 text-primary mt-1" />
                                          <div>
                                            <h3 className="font-semibold">
                                              Software Engineer
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                              InnoSoft Solutions
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                              Jun 2017 - Dec 2019 (2.5 years)
                                            </p>
                                            <p className="mt-2">
                                              Developed and maintained web
                                              applications using React and
                                              Node.js.
                                            </p>
                                          </div>
                                        </div> */}
                                </div>
                              </CardBody>
                            </Card>
                          </Tab>
                          <Tab key="education" title="Educacion">
                            <Card>
                              <CardHeader>
                                <h3>Educacion</h3>
                              </CardHeader>
                              <CardBody>
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
                                {/* <SeparatorHorizontal className="my-4" />
                                      <div className="flex items-start gap-4">
                                        <GraduationCap className="w-6 h-6 text-primary mt-1" />
                                        <div>
                                          <h3 className="font-semibold">
                                            Bachelor of Science in Computer
                                            Engineering
                                          </h3>
                                          <p className="text-sm text-muted-foreground">
                                            MIT
                                          </p>
                                          <p className="text-sm text-muted-foreground">
                                            Graduated: 2015
                                          </p>
                                        </div>
                                      </div> */}
                              </CardBody>
                            </Card>
                          </Tab>
                        </Tabs>
                      </motion.div>
                    </motion.div>
                  </div>
                </ModalBody>

                <motion.div
                  initial="initial"
                  animate="animate"
                  variants={fadeInUp}
                  className="flex justify-center"
                >
                  <Button
                    className="w-full md:w-auto transition-transform hover:scale-105"
                    onClick={() => window.open(member.cv as string, "_blank")}
                  >
                    <Download className="mr-2 h-4 w-4" /> Download Resume PDF
                  </Button>
                </motion.div>

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
