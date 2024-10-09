"use client";

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
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import {
  ChevronDown,
  Lock,
  Activity,
  Flash,
  Server,
  TagUser,
  Scale,
} from "./Icons.jsx";
import Image from "next/image";

export default function Header() {
  const menuItems = ["Profesionales", "Ventas", "Proveedores"];

  const icons = {
    chevron: (
      <ChevronDown fill="currentColor" size={16} height={24} width={24} />
    ),
    scale: (
      <Scale
        className="text-warning"
        fill="currentColor"
        size={30}
        height={24}
        width={24}
      />
    ),
    lock: (
      <Lock
        className="text-success"
        fill="currentColor"
        size={30}
        height={24}
        width={24}
      />
    ),
    activity: (
      <Activity
        className="text-secondary"
        fill="currentColor"
        size={30}
        height={24}
        width={24}
      />
    ),
    flash: (
      <Flash
        className="text-primary"
        fill="currentColor"
        size={30}
        height={24}
        width={24}
      />
    ),
    server: (
      <Server
        className="text-success"
        fill="currentColor"
        size={30}
        height={24}
        width={24}
      />
    ),
    user: (
      <TagUser
        className="text-danger"
        fill="currentColor"
        size={30}
        height={24}
        width={24}
      />
    ),
  };

  return (
    <>
      <Navbar disableAnimation isBordered className="bg-[#1e3a5f] flex flex-wrap items-center justify-between">
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
          <NavbarBrand className="w-50 h-full bg-yellow-400 mr-2 px-20">
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
          <Dropdown className="bg-[#010242]">
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent text-white"
                  endContent={icons.chevron}
                  radius="sm"
                  variant="light"
                >
                  Servicios
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="Servicios"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="profesionales"
                description="Perfiles de profesionales competentes y capaces."
                startContent={icons.scale}
                className="text-white"
              >
                <Link href="/professionals">Profesionales</Link>
              </DropdownItem>
              <DropdownItem
                key="Ventas"
                description="Ventas de material, maquinarias y otros."
                startContent={icons.activity}
                className="text-white"
              >
                Ventas
              </DropdownItem>
              <DropdownItem
                key="production_ready"
                description="Diversos proveedores y negocios de venta materiales de construccion."
                startContent={icons.flash}
                className="text-white"
              >
                Proveedores Confiables
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          {/* <NavbarItem>
            <Link href="#" aria-current="page">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem> */}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="/auth/signin" className="text-white">Acceder</Link>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href="/auth/signup"
              variant="flat"
              className="text-white"
            >
              Registrate
            </Button>
          </NavbarItem>
        </NavbarContent>

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
