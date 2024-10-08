import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Divider,
} from "@nextui-org/react";
import { MapPin, Mails, Award, HardHat } from "lucide-react";

export default function WorkerProfile() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Cover Image */}
            <div className="h-48 w-full bg-gray-300 rounded-b-lg"></div>

            {/* Profile Image */}
            <div className="absolute bottom-0 left-6 -mb-12">
              <Avatar className="h-32 w-32 border-4 border-white">
                {/* <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Mike Builder" /> */}
              </Avatar>
            </div>
          </div>

          <div className="mt-16 pb-6 flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Mike Builder</h1>
              <p className="text-xl text-gray-600">
                Senior Construction Foreman at BuildRight Contractors
              </p>
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <MapPin className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                Chicago, Illinois
              </div>
              <div className="mt-2 flex items-center text-sm text-blue-600">
                <Mails className="flex-shrink-0 mr-1.5 h-5 w-5" />
                <a href="#" className="hover:underline">
                  linkedin.com/in/mikebuilder
                </a>
              </div>
            </div>
            <div className="mb-4 sm:mb-0 flex flex-wrap gap-2">
              <Button>Connect</Button>
              <Button variant="faded">Message</Button>
              <Button variant="faded">More</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* left column */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <p>About</p>
              </CardHeader>
              <Divider />
              <CardBody>
                <p className="text-gray-600">
                  Experienced construction foreman with 15+ years in the
                  industry. Skilled in project management, team leadership, and
                  ensuring safety standards. Passionate about delivering
                  high-quality construction projects on time and within budget.
                </p>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <p>Experience</p>
              </CardHeader>
              <Divider />
              <CardBody>
                {[
                  {
                    title: "Senior Construction Foreman",
                    company: "BuildRight Contractors",
                    duration: "Jan 2015 - Present",
                    description:
                      "Lead a team of 30+ workers on large-scale commercial construction projects. Oversee daily operations, ensure safety compliance, and coordinate with project managers and clients.",
                  },
                  {
                    title: "Construction Supervisor",
                    company: "Urban Developers Inc.",
                    duration: "Mar 2010 - Dec 2014",
                    description:
                      "Supervised residential construction projects, managed subcontractors, and ensured quality control throughout the building process.",
                  },
                  {
                    title: "Carpenter",
                    company: "Reliable Builders LLC",
                    duration: "Jun 2005 - Feb 2010",
                    description:
                      "Performed various carpentry tasks including framing, finishing, and custom woodwork for residential and small commercial projects.",
                  },
                ].map((job, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <Avatar>
                        {/* <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${job.company[0]}`} alt={job.company} /> */}
                        {/* <AvatarFallback>{job.company[0]}</AvatarFallback> */}
                      </Avatar>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{job.title}</h3>
                      <p className="text-gray-600">{job.company}</p>
                      <p className="text-sm text-gray-500">{job.duration}</p>
                      <p className="mt-2 text-gray-600">{job.description}</p>
                    </div>
                  </div>
                ))}
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <p>Education</p>
              </CardHeader>
              <Divider />
              <CardBody>
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <Avatar>
                      {/* <AvatarImage src="/placeholder.svg?height=40&width=40&text=T" alt="Trade School" /> */}
                      {/* <AvatarFallback>T</AvatarFallback> */}
                    </Avatar>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Associates Degree in Construction Technology
                    </h3>
                    <p className="text-gray-600">Chicago Technical Institute</p>
                    <p className="text-sm text-gray-500">2003 - 2005</p>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <p>Certifications</p>
              </CardHeader>
              <Divider />
              <CardBody className="space-y-4">
                {[
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
                ))}
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <p>Skills</p>
              </CardHeader>
              <Divider />
              <CardBody>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Project Management",
                    "Team Leadership",
                    "Blueprint Reading",
                    "Safety Compliance",
                    "Quality Control",
                    "Scheduling",
                    "Budgeting",
                    "Carpentry",
                    "Concrete Work",
                    "OSHA Regulations",
                    "Heavy Equipment Operation",
                    "Contract Negotiation",
                  ].map((skill, index) => (
                    <Chip key={index} variant="faded">
                      {skill}
                    </Chip>
                  ))}
                </div>
              </CardBody>
            </Card>
          </div>

            {/* Right column */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <p>People also viewed</p>
              </CardHeader>
              <CardBody className="space-y-4">
                {[
                  { name: "Sarah Johnson", role: "Project Manager at UrbanBuild Co." },
                  { name: "Tom Martinez", role: "Electrician at PowerUp Services" },
                  { name: "Lisa Chen", role: "Civil Engineer at StructurePro Inc." }
                ].map((person, index) => (
                  <div key={index} className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      {/* <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${person.name[0]}`} alt={person.name} /> */}
                      {/* <AvatarFallback>{person.name[0]}</AvatarFallback> */}
                    </Avatar>
                    <div>
                      <p className="font-semibold">{person.name}</p>
                      <p className="text-sm text-gray-600">{person.role}</p>
                    </div>
                  </div>
                ))}
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <p>Recommendations</p>
              </CardHeader>
              <CardBody className="space-y-4">
                {[
                  { name: "John Smith", role: "Project Manager", text: "Mike is an exceptional foreman. His attention to detail and ability to manage complex projects is outstanding." },
                  { name: "Emily Rodriguez", role: "Architect", text: "Working with Mike was a pleasure. His knowledge of construction techniques and problem-solving skills are top-notch." }
                ].map((rec, index) => (
                  <div key={index} className="border-t pt-4 first:border-t-0 first:pt-0">
                    <p className="italic text-gray-600">{rec.text}</p>
                    <div className="mt-2 flex items-center">
                      <Avatar className="h-8 w-8 mr-2">
                        {/* <AvatarImage src={`/placeholder.svg?height=32&width=32&text=${rec.name[0]}`} alt={rec.name} /> */}
                        {/* <AvatarFallback>{rec.name[0]}</AvatarFallback> */}
                      </Avatar>
                      <div>
                        <p className="font-semibold">{rec.name}</p>
                        <p className="text-xs text-gray-500">{rec.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <p>Current Projects</p>
              </CardHeader>
              <CardBody className="space-y-4">
                {[
                  { name: "Downtown Office Complex", location: "Chicago, IL", status: "In Progress" },
                  { name: "Riverfront Apartments", location: "Chicago, IL", status: "Planning Phase" }
                ].map((project, index) => (
                  <div key={index} className="flex items-start">
                    <HardHat className="h-5 w-5 mr-2 mt-1 text-blue-500" />
                    <div>
                      <p className="font-semibold">{project.name}</p>
                      <p className="text-sm text-gray-600">{project.location}</p>
                      <Chip variant="faded" className="mt-1">{project.status}</Chip>
                    </div>
                  </div>
                ))}
              </CardBody>
            </Card>
          </div>


        </div>
      </div>
    </div>
  );
}
