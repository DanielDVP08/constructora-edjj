"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
  CheckboxGroup,
  Input,
} from "@nextui-org/react";
import { Briefcase } from "lucide-react";
import React, { useState } from "react";
import { CustomCheckbox } from "@/components/CustomCheckBox/CustomCheckBox.jsx";
import SelectionStudies from "@/components/SelectionStudies/SelectionStudies";
import SelectTitle from "@/components/SelectTitle/SelectTitle";

export default function WorkerRegistration() {
  const [value, setValue] = useState("");
  const [valueWork, setValueWork] = useState("");
  const [groupSelected, setGroupSelected] = useState([""]);

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = React.useMemo(() => {
    if (value === "") return false;

    return validateEmail(value) ? false : true;
  }, [value]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <h3 className="text-2xl font-bold text-center">Join</h3>
          <p className="text-center">Create your construction worker profile</p>
        </CardHeader>
        <CardBody>
          <form action="" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Input
                  isRequired
                  type="text"
                  variant="faded"
                  label="Nombres"
                  labelPlacement="outside"
                  placeholder="Ingrese su nombre completo"
                  color="default"
                />
              </div>

              <div>
                <Input
                  isRequired
                  type="text"
                  variant="faded"
                  label="Apellidos"
                  labelPlacement="outside"
                  placeholder="Ingrese sus apellidos"
                  color="default"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Input
                  value={value}
                  type="email"
                  label="Email"
                  labelPlacement="outside"
                  placeholder="Ingrese su email"
                  variant="bordered"
                  isInvalid={isInvalid}
                  color={isInvalid ? "danger" : "default"}
                  errorMessage="Please enter a valid email"
                  onValueChange={setValue}
                  className="max-w-xs"
                />
              </div>

              <div>
                <Input
                  value={value}
                  type="password"
                  label="Contraseña"
                  labelPlacement="outside"
                  placeholder="***********"
                  variant="bordered"
                  onValueChange={setValue}
                  className="max-w-xs"
                />
              </div>
            </div>

            <div>
              <label htmlFor="">¿Que puesto buscas?</label>
              <div className="flex">
                <Briefcase className="w-5 h-5 text-gray-400 mr-2 mt-2" />
                <Input
                  value={valueWork}
                  type="text"
                  variant="faded"
                  onValueChange={setValueWork}
                  className="max-w-xs"
                />
              </div>
            </div>

            <div className="max-w-sm">
              <label htmlFor="experiencia">Experiencia</label>
              
              <div className="grid grid-cols-2 gap-1">
                <div className="max-w-28">
                  <Input
                    type="number"
                    label="Años"
                    placeholder="0"
                    labelPlacement="outside"
                    min={0}
                    max={40}
                    endContent={
                      <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 text-small">
                          años
                        </span>
                      </div>
                    }
                  />
                </div>
                <div className="max-w-28">
                  <Input
                    type="number"
                    label="Meses"
                    placeholder="0"
                    labelPlacement="outside"
                    min={0}
                    max={11}
                    endContent={
                      <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 text-small">
                          años
                        </span>
                      </div>
                    }
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1 w-full">
              <CheckboxGroup
                className="gap-1"
                label="Habilidades"
                orientation="horizontal"
                value={groupSelected}
                onChange={setGroupSelected}
              >
                <CustomCheckbox value="wifi">Wifi</CustomCheckbox>
                <CustomCheckbox value="tv">TV</CustomCheckbox>
                <CustomCheckbox value="kitchen">Kitchen</CustomCheckbox>
                <CustomCheckbox value="parking">Parking</CustomCheckbox>
                <CustomCheckbox value="pool">Pool</CustomCheckbox>
                <CustomCheckbox value="gym">Gym</CustomCheckbox>
              </CheckboxGroup>
            </div>

            <div>
              <SelectionStudies />
            </div>

            <div>
              <SelectTitle />
            </div>

            <div>
              <Checkbox radius="sm" color="success" size="md">
                <p className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  I agree to the terms and conditions
                </p>
              </Checkbox>
            </div>
          </form>

          <CardFooter>
            <Button
              className="w-full"
              radius="lg"
              color="primary"
              variant="shadow"
            >
              Guardar
            </Button>
          </CardFooter>
        </CardBody>
      </Card>
    </div>
  );
}
