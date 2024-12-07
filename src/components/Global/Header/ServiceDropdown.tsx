"use client"

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,

  NavbarItem,
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
import Link from "next/link";

export function ServiceDropdown() {
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
      <Dropdown className="bg-[#010242]">
        <NavbarItem>
          <DropdownTrigger>
            <Button
              disableRipple
              className="p-0 bg-transparent data-[hover=true]:bg-transparent hover:text-yellow-500 transition-colors text-white"
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
            href="/professionals"
          >
            <Link href="/professionals">Profesionales</Link>
          </DropdownItem>
          <DropdownItem
            key="Ventas"
            description="Ventas de material, maquinarias y otros."
            startContent={icons.activity}
            className="text-white"
            href="/sales"
          >
            <Link href="/sales">Ventas</Link>
          </DropdownItem>
          <DropdownItem
            key="production_ready"
            description="Diversos proveedores y negocios de venta materiales de construccion."
            startContent={icons.flash}
            className="text-white"
            href="/distributors"
          >
            <Link href="/distributors">Proveedores Confiables</Link>
            
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
}
