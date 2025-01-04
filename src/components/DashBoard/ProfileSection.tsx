"use client";

import { useState } from "react";
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { label } from "@/components/ui/label"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Badge } from "@/components/ui/badge"
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Pencil,
  Phone,
  Briefcase,
  GraduationCap,
  FileText,
  Plus,
} from "lucide-react";
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
  ModalHeader,
  Textarea,
  useDisclosure,
} from "@nextui-org/react";

export default function ProfileSection() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    title: "Software Developer",
    email: "john.doe@example.com",
    phone: "+1 234 567 8900",
    description: "Passionate about creating user-friendly web applications.",
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        school: "University of Technology",
        year: "2018",
      },
    ],
    experience: [
      {
        title: "Senior Developer",
        company: "Tech Solutions Inc.",
        duration: "2018 - Present",
      },
    ],
    resume: "john_doe_resume.pdf",
  });
  const [workStatus, setWorkStatus] = useState("working");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Here you would typically send the updated profile to your backend
    setIsEditing(false);
  };

  const handleDiscard = () => {
    // Reset the profile to its original state
    setIsEditing(false);
  };

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <span>Profile Information</span>
            <Button
              variant="solid"
              size="sm"
              onClick={() => setIsEditing(!isEditing)}
            >
              <Pencil className="mr-2 h-4 w-4" /> Edit Profile
            </Button>
          </div>
        </CardHeader>
        <CardBody className="space-y-6">
          <div className="flex flex-col items-center">
            <Avatar className="w-32 h-32">
              {/* <AvatarImage src="/placeholder.svg" alt="Profile picture" />
              <AvatarFallback>JD</AvatarFallback> */}
            </Avatar>
            {/* <Dialog>
              <DialogTrigger asChild>
                <Button variant="solid" size="sm" className="mt-4">
                  Change Picture
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Change Profile Picture</DialogTitle>
                </DialogHeader>
                <Input type="file" accept="image/*" />
                <Button>Upload</Button>
              </DialogContent>
            </Dialog> */}
            <Button variant="solid" size="sm" onPress={onOpen} className="mt-4">
              Change Picture
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader>Change Profile Picture</ModalHeader>
                    <ModalBody>
                      <input type="file" accept="image/*" />
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Close
                      </Button>
                      <Button color="primary">Cambiar</Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
            <Chip className="mt-4">
              {workStatus === "working" ? "Working" : "Open to Work"}
            </Chip>
            <Button
              variant="solid"
              onPress={() =>
                setWorkStatus(workStatus === "working" ? "open" : "working")
              }
            >
              Change Status
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                value={profile.name}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
            <div>
              <label htmlFor="title">Title</label>
              <input
                id="title"
                name="title"
                value={profile.title}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <div className="flex">
                <input
                  id="phone"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
                {/* <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="solid" size="sm" className="ml-2">
                      <Phone className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Change Phone Number</DialogTitle>
                    </DialogHeader>
                    <Input placeholder="New phone number" />
                    <Button>Update</Button>
                  </DialogContent>
                </Dialog> */}

                <Button variant="solid" size="sm" className="ml-2">
                  <Phone className="h-4 w-4" />
                </Button>
                <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                  <ModalContent>
                    {(onClose) => (
                      <>
                        <ModalHeader>Change Phone Number</ModalHeader>
                        <ModalBody>
                          <input placeholder="New phone number" />
                        </ModalBody>
                        <ModalFooter>
                          <Button
                            color="danger"
                            variant="light"
                            onPress={onClose}
                          >
                            Close
                          </Button>
                          <Button color="primary">Cambiar</Button>
                        </ModalFooter>
                      </>
                    )}
                  </ModalContent>
                </Modal>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <Textarea
              id="description"
              name="description"
              value={profile.description}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <label>Education</label>
              {/* <Dialog>
                <DialogTrigger asChild>
                  <Button variant="solid" size="sm">
                    <Plus className="mr-2 h-4 w-4" /> Add Education
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add Education</DialogTitle>
                  </DialogHeader>
                  <Input placeholder="Degree" />
                  <Input placeholder="School" />
                  <Input placeholder="Year" />
                  <Button>Add</Button>
                </DialogContent>
              </Dialog> */}

              <Button variant="solid" size="sm">
                <Plus className="mr-2 h-4 w-4" /> Add Education
              </Button>
              <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader>Add Education</ModalHeader>
                      <ModalBody>
                        <input placeholder="Degree" />
                        <input placeholder="School" />
                        <input placeholder="Year" />
                      </ModalBody>
                      <ModalFooter>
                        <Button
                          color="danger"
                          variant="light"
                          onPress={onClose}
                        >
                          Close
                        </Button>
                        <Button color="primary">Agregar</Button>
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </div>
            {profile.education.map((edu, index) => (
              <div key={index} className="flex items-center mb-2">
                <GraduationCap className="mr-2 h-4 w-4" />
                <span>
                  {edu.degree} - {edu.school}, {edu.year}
                </span>
              </div>
            ))}
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <label>Experience</label>
              {/* <Dialog>
                <DialogTrigger asChild>
                  <Button variant="solid" size="sm">
                    <Plus className="mr-2 h-4 w-4" /> Add Experience
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add Experience</DialogTitle>
                  </DialogHeader>
                  <Input placeholder="Title" />
                  <Input placeholder="Company" />
                  <Input placeholder="Duration" />
                  <Button>Add</Button>
                </DialogContent>
              </Dialog> */}

              <Button variant="solid" size="sm">
                <Plus className="mr-2 h-4 w-4" /> Add Experience
              </Button>
              <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader>Add Experience</ModalHeader>
                      <ModalBody>
                        <input placeholder="Title" />
                        <input placeholder="Company" />
                        <input placeholder="Duration" />
                      </ModalBody>
                      <ModalFooter>
                        <Button
                          color="danger"
                          variant="light"
                          onPress={onClose}
                        >
                          Close
                        </Button>
                        <Button color="primary">Agregar</Button>
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </div>
            {profile.experience.map((exp, index) => (
              <div key={index} className="flex items-center mb-2">
                <Briefcase className="mr-2 h-4 w-4" />
                <span>
                  {exp.title} at {exp.company}, {exp.duration}
                </span>
              </div>
            ))}
          </div>
          <div>
            <label htmlFor="resume">Resume</label>
            <div className="flex items-center">
              <input
                id="resume"
                name="resume"
                value={profile.resume}
                onChange={handleChange}
                disabled={!isEditing}
              />
              <Button variant="solid" size="sm" className="ml-2">
                <FileText className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
      <div className="flex justify-center space-x-4">
        {isEditing && (
          <>
            <Button onPress={handleDiscard} variant="solid">
              Discard Changes
            </Button>
            <Button onPress={handleSave}>Save Changes</Button>
          </>
        )}
      </div>
    </div>
  );
}
