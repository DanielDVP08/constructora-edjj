"use client";

import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { signOut } from "next-auth/react";
// import { UserP } from "../../../types/user";

// type User = {
//   name: string | null | undefined;
//   email: string | null | undefined;
//   image: string | null | undefined;
//   role: string | null | undefined;
// };

export function UserDropdown({
  emailUser,
  imageUser,
  roleUser,
}: {
  emailUser: string;
  imageUser: string;
  roleUser: string;
}) {
  const handleClick = async () => {
    await signOut({
      redirectTo: "/",
    });
  };

  return (
    <>
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            color="secondary"
            name="Jason Hughes"
            size="md"
            src={imageUser}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="name" className="h-14 gap-2">
            {/* <p className="font-semibold">Signed in as</p> */}
            <p className="font-semibold">{emailUser}</p>
          </DropdownItem>
          {roleUser === "member" || roleUser === "member_business" ? (
            <DropdownItem key="profile" href="/user/dashboard">
              Mi perfil
            </DropdownItem>
          ) : (
            <DropdownItem key="register" href="/user/register">
              Convierte en Miembro
            </DropdownItem>
          )}
          {roleUser === "user_business" || roleUser === "member_business" ? (
            <DropdownItem key="business" href="/business/dashboard">
              Mi Negocio
            </DropdownItem>
          ) : (
            <DropdownItem key="register_business" href="/business/register">
              Registra tu Negocio
            </DropdownItem>
          )}
          <DropdownItem key="change_pass" href="/user/changepass">
            Cambiar Contraseña
          </DropdownItem>
          {/* <DropdownItem>
            Mi perfil
          </DropdownItem> */}
          {/* <DropdownItem key="settings">My Settings</DropdownItem>
          <DropdownItem key="team_settings">Team Settings</DropdownItem>
          <DropdownItem key="analytics">Analytics</DropdownItem>
          <DropdownItem key="system">System</DropdownItem>
          <DropdownItem key="configurations">Configurations</DropdownItem>
          <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem> */}
          <DropdownItem key="logout" color="danger" onClick={handleClick}>
            Cerrar Sesion
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
}
