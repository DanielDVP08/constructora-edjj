import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Divider,
} from "@nextui-org/react";
import {
  MapPin,
  Mails,
  HardHat,
  GraduationCap,
  FolderArchive,
  PhoneCall,
  IdCard,
  Award,
} from "lucide-react";
import db from "@/libs/bd";
import Link from "next/link";
import ProfileImage from "./ProfileImage";
// import { CldImage } from "next-cloudinary";

export default async function ProfileAccount({
  emailUser,
}: {
  emailUser: string;
}) {
  const member = await db.member.findFirst({
    where: {
      email: emailUser,
    },
  });

  const skills = (member?.skills as string).split(",");

  const lastjob = (member?.lastjob as string).split(",");

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navegacion */}
      <nav className="absolute bg-transparent shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/">
              <div className="flex-shrink-0">
                {/* <Image
                  height={150}
                  width={100}
                  className="h-12 w-auto"
                  src="/assets/logojj.png"
                  alt="Company Logo"
                /> */}
                <ProfileImage />
              </div>
            </Link>
          </div>
        </div>
      </nav>
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Cover Image */}
            <div
              className="h-48 w-full rounded-b-lg"
              style={{
                backgroundImage: "url(https://res.cloudinary.com/dqpc8hl3r/image/upload/v1733346062/logojj_ou1syp.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            {/* Profile Image */}
            <div className="absolute bottom-0 left-6 -mb-12">
              <Avatar
                className="h-32 w-32 border-4 border-white"
                src={member?.profileimage as string}
              />
              {/* <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Mike Builder" /> */}
            </div>
          </div>

          <div className="mt-16 pb-6 flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {member?.firstName} {member?.lastName}
              </h1>
              <p className="text-xl text-gray-600">
                {member?.category === "profesional"
                  ? member.career
                  : (member?.category as string).toUpperCase()}
              </p>
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <MapPin className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                {member?.residence}
              </div>
              <div className="mt-2 flex items-center text-sm text-blue-600">
                <Mails className="flex-shrink-0 mr-1.5 h-5 w-5" />
                <a href="#" className="hover:underline">
                  {member?.email}
                </a>
              </div>
            </div>
            {/* <div className="mb-4 sm:mb-0 flex flex-wrap gap-2">
              <Button>Connect</Button>
              <Button variant="faded">Message</Button>
              <Button variant="faded">More</Button>
            </div> */}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* left column */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <p>Descripcion</p>
              </CardHeader>
              <Divider />
              <CardBody>
                <p className="text-gray-600">{member?.description}</p>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <p>Experiencia</p>
              </CardHeader>
              <Divider />
              <CardBody>
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    {/* <Avatar> */}
                    {/* <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${job.company[0]}`} alt={job.company} /> */}
                    {/* <AvatarFallback>{job.company[0]}</AvatarFallback> */}
                    {/* </Avatar> */}
                    <HardHat />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{lastjob[0]}</h3>
                    <p className="text-gray-600">{lastjob[1]}</p>
                    <p className="text-sm text-gray-500">
                      {lastjob[2]} / {lastjob[3]}
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <p>Educacion</p>
              </CardHeader>
              <Divider />
              <CardBody>
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    {/* <Avatar></Avatar> */}
                    <GraduationCap />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      {member?.education}
                    </h3>
                    {member?.career ? (
                      <>
                        <p className="text-gray-600">{member.career}</p>
                        <p className="text-sm text-gray-500">
                          {member.university}
                        </p>
                        <p className="text-sm text-gray-500">{member.codcip}</p>
                      </>
                    ) : (
                      <>
                        <p className="text-sm text-gray-500">
                          Secundaria Completa
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <p>Ultimo Trabajo</p>
              </CardHeader>
              <Divider />
              <CardBody className="space-y-4">
                {/* {[
                  {
                    name: "OSHA 30-Hour Construction Safety and Health",
                    issuer: "Occupational Safety and Health Administration",
                    year: "2018",
                  },
                  {
                    name: "First Aid and CPR",
                    issuer: "American Red Cross",
                    year: "2022",
                  },
                  {
                    name: "Certified Construction Manager (CCM)",
                    issuer: "Construction Management Association of America",
                    year: "2020",
                  },
                ].map((cert, index) => (
                  <div key={index} className="flex items-start">
                    <Award className="h-5 w-5 mr-2 mt-1 text-yellow-500" />
                    <div>
                      <p className="font-semibold">{cert.name}</p>
                      <p className="text-sm text-gray-600">{cert.issuer}</p>
                      <p className="text-sm text-gray-500">
                        Issued {cert.year}
                      </p>
                    </div>
                  </div>
                ))} */}

                <div className="flex items-start">
                  <Award className="h-5 w-5 mr-2 mt-1 text-yellow-500" />
                  <div>
                    <p className="font-semibold">{lastjob[0]}</p>
                    <p className="text-sm text-gray-600">{lastjob[1]}</p>
                    <p className="text-sm text-gray-500">
                      Desde {lastjob[2]} Hasta {lastjob[3]}
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* <Card>
              <CardHeader>
                <p>Curriculum Vitae</p>
              </CardHeader>
              <Divider />
              <CardBody>
                <div className="flex items-start">
                  <HardHat className="h-5 w-5 mr-2 mt-1 text-blue-500" />
                  <Link href={member?.cv as string} target="_blank">
                    Curriculum {member?.firstName}
                  </Link>
                </div>
              </CardBody>
            </Card> */}
          </div>

          {/* Right column */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <p>Informacion de Contacto</p>
              </CardHeader>
              <Divider />
              <CardBody>
                <div className="flex items-start">
                  <PhoneCall className="h-5 w-5 mr-2 mt-1 text-blue-500" />
                  {member?.phoneNumber}
                </div>
                <div className="flex items-start">
                  <IdCard className="h-5 w-5 mr-2 mt-1 text-blue-500" />
                  {member?.documentid}
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <p>Skills</p>
              </CardHeader>
              <Divider />
              <CardBody>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Chip key={index} variant="faded">
                      {skill}
                    </Chip>
                  ))}
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <p>Curriculum Vitae</p>
              </CardHeader>
              <Divider />
              <CardBody>
                <div className="flex items-start">
                  <FolderArchive className="h-5 w-5 mr-2 mt-1 text-blue-500" />
                  <Link href={member?.cv as string} target="_blank">
                    Curriculum {member?.firstName}
                  </Link>
                </div>
              </CardBody>
            </Card>

            {/* <Card>
              <CardHeader>
                <p>People also viewed</p>
              </CardHeader>
              <CardBody className="space-y-4"> */}
            {/* {[
                  {
                    name: "Sarah Johnson",
                    role: "Project Manager at UrbanBuild Co.",
                  },
                  {
                    name: "Tom Martinez",
                    role: "Electrician at PowerUp Services",
                  },
                  {
                    name: "Lisa Chen",
                    role: "Civil Engineer at StructurePro Inc.",
                  },
                ].map((person, index) => (
                  <div key={index} className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      
                    </Avatar>
                    <div>
                      <p className="font-semibold">{person.name}</p>
                      <p className="text-sm text-gray-600">{person.role}</p>
                    </div>
                  </div>
                ))} */}
            {/* </CardBody>
            </Card> */}

            {/* <Card>
              <CardHeader>
                <p>Recommendations</p>
              </CardHeader>
              <CardBody className="space-y-4"> */}
            {/* {[
                  {
                    name: "John Smith",
                    role: "Project Manager",
                    text: "Mike is an exceptional foreman. His attention to detail and ability to manage complex projects is outstanding.",
                  },
                  {
                    name: "Emily Rodriguez",
                    role: "Architect",
                    text: "Working with Mike was a pleasure. His knowledge of construction techniques and problem-solving skills are top-notch.",
                  },
                ].map((rec, index) => (
                  <div
                    key={index}
                    className="border-t pt-4 first:border-t-0 first:pt-0"
                  >
                    <p className="italic text-gray-600">{rec.text}</p>
                    <div className="mt-2 flex items-center">
                      <Avatar className="h-8 w-8 mr-2">
                        
                      </Avatar>
                      <div>
                        <p className="font-semibold">{rec.name}</p>
                        <p className="text-xs text-gray-500">{rec.role}</p>
                      </div>
                    </div>
                  </div>
                ))} */}
            {/* </CardBody>
            </Card> */}

            {/* <Card>
              <CardHeader>
                <p>Current Projects</p>
              </CardHeader>
              <CardBody className="space-y-4"> */}
            {/* {[
                  {
                    name: "Downtown Office Complex",
                    location: "Chicago, IL",
                    status: "In Progress",
                  },
                  {
                    name: "Riverfront Apartments",
                    location: "Chicago, IL",
                    status: "Planning Phase",
                  },
                ].map((project, index) => (
                  <div key={index} className="flex items-start">
                    <HardHat className="h-5 w-5 mr-2 mt-1 text-blue-500" />
                    <div>
                      <p className="font-semibold">{project.name}</p>
                      <p className="text-sm text-gray-600">
                        {project.location}
                      </p>
                      <Chip variant="faded" className="mt-1">
                        {project.status}
                      </Chip>
                    </div>
                  </div>
                ))} */}
            {/* </CardBody>
            </Card> */}
          </div>
        </div>
      </div>
    </div>
  );
}
