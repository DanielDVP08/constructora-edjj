import {
  Button,
  Chip,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { BriefcaseBusiness, Plus, X } from "lucide-react";
import { useState } from "react";
import { FieldValues } from "react-hook-form";

interface HabilitiesProps {
  onUpdateData: ({}) => void;
  data: FieldValues;
  isEdit: boolean;
}

export default function HabilitiesSection({
  onUpdateData,
  data,
  isEdit,
}: HabilitiesProps) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const [skills, setSkills] = useState<string[]>(data.skills.split(",") || []);

  const [competencies, setCompetencies] = useState<string[]>([]);
  const [newCompetency, setNewCompetency] = useState("");

  const handleAddCompetency = () => {
    if (newCompetency.trim()) {
      setCompetencies([...competencies, newCompetency.trim()]);
      setNewCompetency("");
    }
  };

  const handleRemoveCompetency = (index: number) => {
    setCompetencies(competencies.filter((_: string, i: number) => i !== index));
  };

  const handleAddSkills = () => {
    setSkills([...skills, ...competencies]);
    onUpdateData({
      skills: skills.toString()+","+competencies.toString(),
    });
    console.log({
      skills: skills.toString()+","+competencies.toString(),
    });
    onClose();
  };

  return (
    <>
      <div>
        <div className="flex items-center justify-between mb-2 mx-4">
          <div className="flex items-center">
            <BriefcaseBusiness className="flex-shrink-0 h-5 w-5 mr-2" />
            <label htmlFor="experience">Especialidades</label>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onPress={onOpen}
            isIconOnly
            isDisabled={!isEdit}
          >
            <Plus className="h-4 w-4" />
          </Button>

          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader>Agregar</ModalHeader>
                  <ModalBody>
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Especialidades</h3>
                      <div className="flex items-center space-x-2">
                        <input
                          type="text"
                          placeholder="Especialidades (Ejem: Carpinteria, Electricidad, Soldadura, etc.)"
                          value={newCompetency}
                          onChange={(e) => setNewCompetency(e.target.value)}
                          className="flex-grow p-2 border rounded"
                        />
                        <button
                          type="button"
                          onClick={handleAddCompetency}
                          className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
                        >
                          <Plus className="w-5 h-5" />
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {competencies.map(
                          (competency: string, index: number) => (
                            <span
                              key={index}
                              className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm flex items-center"
                            >
                              {competency}
                              <button
                                type="button"
                                onClick={() => handleRemoveCompetency(index)}
                                className="ml-1 text-blue-800 hover:text-blue-900"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      color="danger"
                      variant="light"
                      onPress={() => {
                        setCompetencies([]);
                        onClose();
                      }}
                    >
                      Cerrar
                    </Button>
                    <Button color="primary" onPress={handleAddSkills}>
                      Agregar
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
        <div className="flex flex-wrap gap-2 ml-8">
          {skills.map((skill, index) => (
            <Chip key={index} variant="faded">
              {skill}
            </Chip>
          ))}
        </div>
      </div>
    </>
  );
}
