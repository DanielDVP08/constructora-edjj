"use client";

// import { useState } from "react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserCircle, CreditCard, Lock } from "lucide-react";
// import Image from "next/image";
import { Tab, Tabs } from "@nextui-org/react";
import ProfileSection from "./ProfileSection";
import MembershipSection from "./MembershipSection";
import ChangePasswordSection from "./ChangePasswordSection";
// import ProfileSection from '@/components/ProfileSection'
// import MembershipSection from '@/components/MembershipSection'
// import ChangePasswordSection from '@/components/ChangePasswordSection'

export default function Dashboard() {
  //   const [activeTab, setActiveTab] = useState("profile");

  return (
    <Tabs
      aria-label="Options"
      //   selectedKey={activeTab}
      //   onSelectionChange={setActiveTab}
      isVertical
      className="flex flex-col md:flex-row min-h-screen"
    >
      {/* <div className="w-full md:w-1/4 p-4 space-y-4 border-r"> */}
        {/* <div className="mb-4">
          <Image
            src="/placeholder.svg"
            alt="Dashboard Image"
            width={300}
            height={200}
            className="w-full rounded-lg"
          />
        </div> */}
        <Tab
          key="profile"
          title={
            <>
              <UserCircle className="mr-2" />
              <span>My Profile</span>
            </>
          }
          className="flex items-center justify-start py-2 px-4"
        >
          <ProfileSection />
        </Tab>
        <Tab
          key="membership"
          title={
            <>
              <CreditCard className="mr-2" />
              <span>Membership</span>
            </>
          }
          className="flex items-center justify-start py-2 px-4"
        >
          <MembershipSection />
        </Tab>
        <Tab
          key="password"
          title={
            <>
              <Lock className="mr-2" />
              <span>Change Password</span>
            </>
          }
          //   className="flex flex-col items-stretch h-auto"
          className="flex items-center justify-start py-2 px-4"
        >
          <ChangePasswordSection />
        </Tab>
        {/* <TabsTrigger
            value="membership"
            className="flex items-center justify-start py-2 px-4"
          >
            <CreditCard className="mr-2" />
            Membership
          </TabsTrigger>
          <TabsTrigger
            value="password"
            className="flex items-center justify-start py-2 px-4"
          >
            <Lock className="mr-2" />
            Change Password
          </TabsTrigger> */}
      {/* </div> */}
      {/* <div className="w-full md:w-3/4 p-4"> */}
        {/* <TabsContent value="profile">
          <ProfileSection />
        </TabsContent>
        <TabsContent value="membership">
        </TabsContent>
        <TabsContent value="password">
        </TabsContent> */}
      {/* </div> */}
    </Tabs>
  );
}
