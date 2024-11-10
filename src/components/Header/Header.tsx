import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

import Image from "next/image";
import { ServiceDropdown } from "./ServiceDropdown";
import { UserDropdown } from "./UserDropdown";
import { auth } from "../../../auth";

export default async function Header() {
  const menuItems = ["Profesionales", "Ventas", "Proveedores"];

  const session = await auth();

  const User = {
    name: session?.user.name,
    email: session?.user.email,
    image: session?.user.image,
    role: session?.user.role,
  };

  // const icons = {
  //   chevron: (
  //     <ChevronDown fill="currentColor" size={16} height={24} width={24} />
  //   ),
  //   scale: (
  //     <Scale
  //       className="text-warning"
  //       fill="currentColor"
  //       size={30}
  //       height={24}
  //       width={24}
  //     />
  //   ),
  //   lock: (
  //     <Lock
  //       className="text-success"
  //       fill="currentColor"
  //       size={30}
  //       height={24}
  //       width={24}
  //     />
  //   ),
  //   activity: (
  //     <Activity
  //       className="text-secondary"
  //       fill="currentColor"
  //       size={30}
  //       height={24}
  //       width={24}
  //     />
  //   ),
  //   flash: (
  //     <Flash
  //       className="text-primary"
  //       fill="currentColor"
  //       size={30}
  //       height={24}
  //       width={24}
  //     />
  //   ),
  //   server: (
  //     <Server
  //       className="text-success"
  //       fill="currentColor"
  //       size={30}
  //       height={24}
  //       width={24}
  //     />
  //   ),
  //   user: (
  //     <TagUser
  //       className="text-danger"
  //       fill="currentColor"
  //       size={30}
  //       height={24}
  //       width={24}
  //     />
  //   ),
  // };

  return (
    <>
      <Navbar
        disableAnimation
        isBordered
        className="bg-[#1e3a5f] flex flex-wrap items-center justify-between"
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/2_LOGO.png"
                width={120}
                height={42}
                alt="Logo Constructora"
              />
            </Link>
            {/* <AcmeLogo />
            <p className="font-bold text-inherit">ACME</p> */}
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarBrand className="w-50 h-full mr-2 px-20">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/2_LOGO.png"
                width={120}
                height={42}
                alt="Logo Constructora"
              />
            </Link>
            {/* <AcmeLogo />
            <p className="font-bold text-inherit">ACME</p> */}
          </NavbarBrand>
          <ServiceDropdown />
        </NavbarContent>
        {/* <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="/signin" className="text-white">Acceder</Link>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href="/signup"
              variant="flat"
              className="text-white"
            >
              Registrate
            </Button>
          </NavbarItem>
        </NavbarContent> */}

        {session?.user ? (
          <NavbarContent justify="end">
            <p>Bienvenido, {User.name}</p>

            <UserDropdown {...User} />
          </NavbarContent>
        ) : (
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Link href="/signup" className="text-white">
                Registrate
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Button
                as={Link}
                color="primary"
                href="/signin"
                variant="flat"
                className="text-white"
              >
                Acceder
              </Button>
            </NavbarItem>
          </NavbarContent>
        )}

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={index === menuItems.length - 1 ? "danger" : "foreground"}
                href="/professionals"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
}
