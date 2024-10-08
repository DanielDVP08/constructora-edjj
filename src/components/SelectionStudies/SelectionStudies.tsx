"use client";

import React from "react";
import { Chip, Select, SelectItem, Selection } from "@nextui-org/react";
import { animals } from "./data";

export default function SelectionStudies() {
  const [values, setValues] = React.useState<Selection>(new Set([]));

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValues(new Set(e.target.value.split(",")));
  };

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Select
        label="Certificaciones"
        selectionMode="multiple"
        placeholder="---Seleccionar---"
        selectedKeys={values}
        className="max-w-xs"
        onChange={handleSelectionChange}
      >
        {animals.map((animal) => (
          <SelectItem key={animal.key}>{animal.label}</SelectItem>
        ))}
      </Select>
      <div className="text-small text-default-500">
        Seleccionados:
        {Array.from(values).map((study, index) => (
          <Chip key={index} variant="faded" color="success">
            {study}
          </Chip>
        ))}
      </div>

    </div>
  );
}
