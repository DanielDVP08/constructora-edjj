"use client";

import { Image } from "@nextui-org/react";
// import Image from "next/image";
// import { Avatar, Card, CardBody } from "@nextui-org/react";
import { MemberCard } from "../../../../types/member";
import ProbandoModal from "./ProbandoModal";
import { useState } from "react";

export default function ProfileMemberCard(member: MemberCard) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      {/* <Card key={member.id} className="overflow-hidden">
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
            <h3 className="text-lg font-semibold">{`${member.firstName} ${member.lastName}`} </h3>
            <p className="text-sm text-gray-500">{member.career}</p>
            <p className="text-xs text-gray-400 mt-1">{member.residence}</p>
            

            <ProbandoModal member={member}/>

          </div>
        </CardBody>
      </Card> */}

      <div
        className="flex flex-col items-center text-center bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`bg-orange-500 transition-all duration-300 ${
            isHovered
              ? "mx-auto w-24 h-24 flex justify-center items-center"
              : "h-full"
          }`}
        >
          {isHovered ? (
            <Image
              src={
                member.profileimage
                  ? member.profileimage
                  : "https://images.unsplash.com/broken"
              }
              alt={member.firstName}
              // objectFit="cover"
              // width={100}
              // height={100}
              width={150}
              height={100}
              radius="none"
              className="text-white w-24 h-24 object-cover"
            />
          ) : (
            <div className="flex justify-center items-center h-64">
              <Image
                src={
                  member.profileimage
                    ? member.profileimage
                    : "https://images.unsplash.com/broken"
                }
                alt={member.firstName}
                // objectFit="cover"
                width={300}
                height={300}
                radius="none"
                className="text-white w-full h-full object-cover"
              />
            </div>
          )}
        </div>
        {isHovered && (
          <div className="p-4">
            <h3 className="font-bold text-lg">{`${member.firstName} ${member.lastName}`}</h3>
            <p className="text-gray-600">{member.career}</p>
            <p className="text-gray-500 text-sm">{member.residence}</p>

            <ProbandoModal member={member} />
          </div>
        )}
      </div>

      {/* <div
        className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-64">
          <Image
            src={
              member.profileimage
                ? member.profileimage
                : "https://images.unsplash.com/broken"
            }
            alt={member.firstName}
            width={200}
            height={200}
            // layout="fill"
            // objectFit="cover"
            className={`transition-all duration-300 ${
              isHovered ? "scale-90 translate-y-2" : ""
            } object-cover`}
          />
          {isHovered && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
              <h3 className="text-xl font-semibold mb-2">{`${member.firstName} ${member.lastName}`}</h3>
              <p className="text-sm mb-1">{member.career}</p>
              <p className="text-sm mb-4">{member.residence}</p>
              <ProbandoModal member={member} />
            </div>
          )}
        </div>
      </div> */}
    </>
  );
}
