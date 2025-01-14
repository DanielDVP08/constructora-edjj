import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { Construction, HardHat, SquarePen } from "lucide-react";
import { useState } from "react";
import { FieldValues } from "react-hook-form";

interface ExperienceProps {
  onUpdateData: ({}) => void;
  data: FieldValues;
  isEdit: boolean;
}

export default function ExperienceSection({
  onUpdateData,
  data,
  isEdit,
}: ExperienceProps) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const [lastJob, setLastJob] = useState<string[]>(
    data.lastjob.split(",") || []
  );

  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleChangeLastJob = () => {
    setLastJob([company, position, startDate, endDate]);
    onUpdateData({ lastjob: `${company},${position},${startDate},${endDate}` });
    console.log(data);
    onClose();
  };

  return (
    <>
      <div>
        <div className="flex items-center justify-between mb-2 mx-4">
          <div className="flex items-center">
            <Construction className="flex-shrink-0 h-5 w-5 mr-2" />
            <label htmlFor="experience">Ultimo Lugar de Trabajo</label>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onPress={onOpen}
            isIconOnly
            isDisabled={!isEdit}
          >
            <SquarePen className="h-4 w-4" />
          </Button>

          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader>Cambiar</ModalHeader>
                  <ModalBody>
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Lugar de Trabajo</h3>
                      <input
                        type="text"
                        name="lastJob.company"
                        placeholder="Empresa donde trabajaste"
                        // value={formData.lastJob.company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full p-2 border rounded"
                        // required
                      />
                      <input
                        type="text"
                        name="lastJob.position"
                        placeholder="Ocupacion / Cargo"
                        // value={formData.lastJob.position}
                        onChange={(e) => setPosition(e.target.value)}
                        className="w-full p-2 border rounded"
                        // required
                      />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                          type="date"
                          name="lastJob.startDate"
                          placeholder="Fecha de Inicio"
                          //   value={formData.lastJob.startDate}
                          onChange={(e) => setStartDate(e.target.value)}
                          className="w-full p-2 border rounded"
                          //   required
                        />
                        <input
                          type="date"
                          name="lastJob.endDate"
                          placeholder="Fecha de Fin"
                          //   value={formData.lastJob.endDate}
                          onChange={(e) => setEndDate(e.target.value)}
                          disabled={!startDate}
                          min={startDate}
                          className="w-full p-2 border rounded"
                        />
                      </div>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Cerrar
                    </Button>
                    <Button color="primary" onPress={handleChangeLastJob}>
                      Cambiar
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
        {/* {profile.experience.map((exp, index) => (
          <div key={index} className="flex items-center mb-2">
            <Briefcase className="mr-2 h-4 w-4" />
            <span>
              {exp.title} at {exp.company}, {exp.duration}
            </span>
          </div>
        ))} */}
        <div className="flex items-start ml-8">
          <HardHat className="h-5 w-5 mr-2 mt-1 text-yellow-500" />
          <div>
            <p className="font-semibold">{lastJob[0]}</p>
            <p className="text-sm text-gray-600">{lastJob[1]}</p>
            <p className="text-sm text-gray-500">
              Desde {lastJob[2]} Hasta {lastJob[3]}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
