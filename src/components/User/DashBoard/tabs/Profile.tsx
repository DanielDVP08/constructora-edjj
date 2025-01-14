"use client";

import { useState } from "react";

import { FileText, UserCircle2 } from "lucide-react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Switch,
} from "@nextui-org/react";
import ProfileImageSection from "./profilesections/ProfileImageSection";
import PersonalInformationSection from "./profilesections/PersonalInformationSection";
import EducationSection from "./profilesections/EducationSection";
import ExperienceSection from "./profilesections/ExperienceSection";
import HabilitiesSection from "./profilesections/HabilitiesSection";
import ResumeSection from "./profilesections/ResumeSection";
import { FieldValues } from "react-hook-form";
import { MemberCard } from "../../../../../types/member";
import { updateMember } from "../../../../../actions/auth-action";
import { AuthError } from "next-auth";

interface ProfileProps {
  member: MemberCard | null;
}

export default function ProfileSection({ member }: ProfileProps) {
  // const router = useRouter();

  const [isEditing, setIsEditing] = useState(false);
  const [actualData, setActualData] = useState({ ...member });
  const [newData, setNewData] = useState({
    ...member,
    newProfileImage: null,
    newCV: null,
  });

  const [isWorking, setIsWorking] = useState(actualData.isWorking || false);
  //   const [profile, setProfile] = useState({
  //     name: "John Doe",
  //     title: "Software Developer",
  //     email: "john.doe@example.com",
  //     phone: "+1 234 567 8900",
  //     description: "Passionate about creating user-friendly web applications.",
  //     education: [
  //       {
  //         degree: "Bachelor of Science in Computer Science",
  //         school: "University of Technology",
  //         year: "2018",
  //       },
  //     ],
  //     experience: [
  //       {
  //         title: "Senior Developer",
  //         company: "Tech Solutions Inc.",
  //         duration: "2018 - Present",
  //       },
  //     ],
  //     resume: "john_doe_resume.pdf",
  //   });
  //   const [workStatus, setWorkStatus] = useState("working");

  //   //   const [isEditing, setIsEditing] = useState(false)
  //   //   const [isWorking, setIsWorking] = useState(true)
  //   const [phoneNumber, setPhoneNumber] = useState("+1 234 567 890");
  //   const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
  //   const [newPhoneNumber, setNewPhoneNumber] = useState("");

  //   const handlePhoneChange = () => {
  //     setPhoneNumber(newPhoneNumber);
  //     setIsPhoneModalOpen(false);
  //   };

  //   const handleChange = (
  //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  //   ) => {
  //     setProfile({ ...profile, [e.target.name]: e.target.value });
  //   };

  //   const handleSave = () => {
  //     // Here you would typically send the updated profile to your backend
  //     setIsEditing(false);
  //   };

  //   const handleDiscard = () => {
  //     // Reset the profile to its original state
  //     setIsEditing(false);
  //   };

  const handleUpdate = (data: FieldValues) => {
    console.log(data);
    setNewData({ ...newData, ...data });
    // console.log(newData)
  };

  const handleSave = async () => {
    // setNewData({ ...newData, isWorking: isWorking });
    console.log(newData);

    setActualData({ ...actualData, ...newData });

    try {
      await updateMember(newData);
    } catch (error) {
      if (error instanceof AuthError) {
        return { error: error.cause?.err?.message };
      }
      return { error: "error 500" };
    }

    setIsEditing(false);
    window.location.replace(""); 
  };

  const handleDiscard = () => {
    window.location.replace("");
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <h1 className="flex items-center justify-between">
            <UserCircle2 />
            Informacion de Perfil
          </h1>
        </CardHeader>
        <CardBody className="space-y-6">
          <ProfileImageSection
            onUpdateData={handleUpdate}
            data={actualData}
            isEdit={isEditing}
          />

          <div className="flex flex-col items-center my-4">
            <Chip color={isWorking ? "success" : "primary"}>
              {isWorking ? "Trabajando" : "Disponible a Trabajar"}
            </Chip>
            <Switch
              color="success"
              isSelected={isWorking}
              onValueChange={(e) => {
                setIsWorking(e);
                setNewData({ ...newData, isWorking: e });
                console.log(e);
              }}
              isDisabled={!isEditing}
              className="mt-1"
            />
          </div>

          <PersonalInformationSection
            onUpdateData={handleUpdate}
            data={actualData}
            isEdit={isEditing}
          />

          <div className="mx-4">
            <div className="flex items-center">
              <FileText className="flex-shrink-0 h-5 w-5 mr-2" />
              <label htmlFor="description">Descripcion</label>
            </div>
            {/* <Textarea
              id="descripcion"
              name="descripcion"
              value={profile.description}
              onChange={handleChange}
              disabled={!isEditing}
            /> */}
            <textarea
              placeholder="Descripcion Breve"
              value={newData.description as string}
              onChange={(e) =>
                setNewData({ ...newData, description: e.target.value })
              }
              //   className="w-full p-2 border rounded h-24"
              className={`w-full p-2 border h-24 mt-2 ${
                isEditing ? "border" : "rounded"
              }`}
              disabled={!isEditing}
            ></textarea>
          </div>

          <EducationSection
            onUpdateData={handleUpdate}
            data={actualData}
            isEdit={isEditing}
          />

          <ExperienceSection
            onUpdateData={handleUpdate}
            data={actualData}
            isEdit={isEditing}
          />

          <HabilitiesSection
            onUpdateData={handleUpdate}
            data={actualData}
            isEdit={isEditing}
          />

          <ResumeSection
            onUpdateData={handleUpdate}
            data={actualData}
            isEdit={isEditing}
          />
        </CardBody>

        <CardFooter className="flex justify-center space-x-4">
          {isEditing ? (
            <>
              <Button color="success" variant="solid" onPress={handleSave}>
                Guardar Cambios
              </Button>
              <Button color="danger" variant="solid" onPress={handleDiscard}>
                Descartar Cambios
              </Button>
            </>
          ) : (
            <Button color="primary" onPress={() => setIsEditing(!isEditing)}>
              Editar Perfil
            </Button>
          )}
        </CardFooter>
      </Card>

      {/* <div className="flex justify-center space-x-4">
        {isEditing && (
          <>
            <Button onClick={handleDiscard} variant="outline">
              Discard Changes
            </Button>
            <Button onClick={handleSave}>Save Changes</Button>
          </>
        )}
      </div> */}
    </div>
  );
}
