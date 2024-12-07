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
import { auth } from "../../../../auth";

export default async function Header() {
  // const menuItems = ["Profesionales", "Ventas", "Proveedores"];

  const session = await auth();

  const User = {
    name: session?.user.name,
    email: session?.user.email,
    image: session?.user.image,
    role: session?.user.role,
  };

  return (
    <>
      <Navbar
        disableAnimation
        isBordered
        className="absolute bg-transparent flex flex-wrap items-center justify-between pt-2"
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/logojj.png"
                width={120}
                height={42}
                alt="Logo Constructora"
              />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarBrand className="w-100 h-full mr-2 px-20 pr-72">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/logojj.png"
                width={120}
                height={42}
                alt="Logo Constructora"
              />
            </Link>
          </NavbarBrand>
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="hover:text-yellow-500 transition-colors text-white"
            >
              Inicio
            </Link>
            <Link
              href="/about"
              className="hover:text-yellow-500 transition-colors text-white"
            >
              Nosotros
            </Link>
            <ServiceDropdown />
            <Link
              href="#"
              className="hover:text-yellow-500 transition-colors text-white"
            >
              Proyectos
            </Link>
          </div>
        </NavbarContent>

        {session?.user ? (
          <>
            <NavbarContent className="hidden sm:flex gap-4 pl-16" justify="end">
              {/* <p>Bienvenido, {User.name}</p> */}
              <h3 className="text-white">Bienvenido</h3>
            </NavbarContent>
            <NavbarContent justify="end">
              <UserDropdown
                emailUser={User.email as string}
                imageUser={User.image as string}
                roleUser={User.role as string}
              />
            </NavbarContent>
          </>
        ) : (
          <NavbarContent className="pl-16" justify="end">
            {/* <NavbarItem className="hidden lg:flex">
              <Link href="/signup" className="text-white">
                Registrate
              </Link>
            </NavbarItem> */}
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

        {/* <Navbar className="bg-white shadow-lg sticky top-0 z-50">
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/logojj.png"
                width={120}
                height={42}
                alt="Logo Constructora"
              />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="flex justify-between items-center px-4 py-4">
          <div className="flex justify-between items-center">
            <NavbarBrand className="pr-72">
              <Link href="/" className="text-2xl font-bold text-zinc-900">
                <Image
                  src="/assets/logojj.png"
                  alt="logo"
                  width={200}
                  height={150}
                />
              </Link>
            </NavbarBrand>
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="hover:text-yellow-500 transition-colors"
              >
                Inicio
              </Link>
              <Link
                href="#"
                className="hover:text-yellow-500 transition-colors"
              >
                Nosotros
              </Link>
              <ServiceDropdown />
              <Link
                href="#"
                className="hover:text-yellow-500 transition-colors"
              >
                Proyectos
              </Link>

              {session?.user ? (
                <NavbarContent className="pl-16" justify="end">
                  <p>Bienvenido, {User.name}</p>

                  <UserDropdown
                    emailUser={User.email as string}
                    imageUser={User.image as string}
                  />
                </NavbarContent>
              ) : (
                <NavbarContent className="pl-16" justify="end">
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

            </div>
          </div>
        </NavbarContent> */}

        <NavbarMenu>
          {/* {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                // color={index === menuItems.length - 1 ? "danger" : "warning"}
                color="warning"
                href="/professionals"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))} */}
          <NavbarMenuItem>
            <Link
              className="w-full"
              // color={index === menuItems.length - 1 ? "danger" : "warning"}
              color="warning"
              href="/professionals"
              size="lg"
            >
              Profesionales
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              className="w-full"
              // color={index === menuItems.length - 1 ? "danger" : "warning"}
              color="warning"
              href="/sales"
              size="lg"
            >
              Ventas
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              className="w-full"
              // color={index === menuItems.length - 1 ? "danger" : "warning"}
              color="warning"
              href="/distributors"
              size="lg"
            >
              Distribuidores
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
}
