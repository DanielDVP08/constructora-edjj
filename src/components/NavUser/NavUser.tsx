import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Link,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import { ServiceDropdown } from "../Header/ServiceDropdown";
// import { signOut } from "next-auth/react";
// import { UserDropdown } from "../Header/UserDropdown";
import { auth } from "../../../auth";

// type User={
//   name:string| null | undefined;
//   email:string| null | undefined;
//   image:string| null | undefined;
//   role:string| null | undefined;
// }

export default async function NavUser() {
  const menuItems = ["Profesionales", "Ventas", "Proveedores"];

  const session = await auth();

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
            <Link href="/dashboard" className="flex items-center">
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

        {session?.user ? (
          <NavbarContent justify="end">
            {/* <UserDropdown /> */}
          </NavbarContent>
        ) : (
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Link href="/signin" className="text-white">
                Acceder
              </Link>
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
