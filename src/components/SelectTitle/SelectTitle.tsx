import { Select, SelectItem } from "@nextui-org/react";
import { animals } from "./data";
import { GraduationCap } from "lucide-react";

export default function App() {
  return (
    <div className="w-full flex flex-col gap-4">
      <label htmlFor="educacion">Ultimo Grado de Estudios</label>
      <div
        key="faded"
        className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4"
      >
        <GraduationCap className="w-65 h-65 text-gray-400 mr-2 mt-2" />
        <Select variant="faded" label="Grado de Estudios" className="max-w-xs">
          {animals.map((animal) => (
            <SelectItem key={animal.key}>{animal.label}</SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
}
