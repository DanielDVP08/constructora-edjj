"use client";

import {
  Avatar,
  // Button,
  Card,
  CardBody,
  // CardHeader,
  // Chip,
  // Modal,
  // ModalBody,
  // ModalContent,
  // ModalFooter,
  // Tab,
  // Tabs,
  // useDisclosure,
} from "@nextui-org/react";
// import { useState } from 'react'
// import { motion } from "framer-motion";
// import {
//   MapPin,
//   Mail,
//   Phone,
//   Download,
//   Briefcase,
//   GraduationCap,
// } from "lucide-react";
import { MemberCard } from "../../../../types/member";
// import ProfileModal from "./ProfileModal";
import ProbandoModal from "./ProbandoModal";

export default function ProfileMember(member: MemberCard) {

  // const staggerChildren = {
  //   animate: { transition: { staggerChildren: 0.1 } },
  // };

  // const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // const skills = (member.skills as string).split(",");
  // const lastjob = (member.lastjob as string).split(",");

  // const miembro=member.

  return (
    <>
      <Card key={member.id} className="overflow-hidden">
        <CardBody className="p-4">
          <div className="flex flex-col items-center text-center">
            <Avatar
              className="w-24 h-24 mb-4"
              src={
                member.profileimage
                  ? member.profileimage
                  : "https://images.unsplash.com/broken"
              }
              alt={member.firstName}
            />
            <h3 className="text-lg font-semibold">{`${member.firstName} ${member.lastName}`}</h3>
            <p className="text-sm text-gray-500">{member.career}</p>
            {/* <p className="text-sm text-gray-500">{member.company}</p> */}
            <p className="text-xs text-gray-400 mt-1">{member.residence}</p>
            {/* <div className="mt-4 flex flex-wrap justify-center gap-2">
              {member.skills.map((skill: string, index: number) => (
                <Chip key={index} variant="solid" className="text-xs">
                  {skill}
                </Chip>
              ))}
            </div> */}

            {/* MODAL */}
            
            {/* <ProfileModal member={member}/> */}

            <ProbandoModal member={member}/>

          </div>
        </CardBody>
      </Card>
    </>
  );
}
