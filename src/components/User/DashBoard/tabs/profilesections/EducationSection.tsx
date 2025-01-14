import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  useDisclosure,
} from "@nextui-org/react";
import { BookMarked, GraduationCap, Plus } from "lucide-react";
import { useState } from "react";
import { FieldValues } from "react-hook-form";

interface EducationProps {
  onUpdateData: ({}) => void;
  data: FieldValues;
  isEdit: boolean;
}

export default function EducationSection({
  onUpdateData,
  data,
  isEdit,
}: EducationProps) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const [auxEducation, setAuxEducation] = useState<string[]>(
    (data.education).split(",") || []
  );
  const [auxCareer, setAuxCareer] = useState<string[]>((data.career).split(",") || []);
  const [auxUniversity, setAuxUniversity] = useState<string[]>(
    (data.university).split(",") || []
  );

  const [education, setEducation] = useState(data.education || "");
  const [career, setCareer] = useState(data.career || "");
  const [university, setUniversity] = useState(data.university || "");

  const handleAddEducation = () => {
    if (education.trim()) {
      setAuxEducation((auxEducation.toString()+","+education.trim()).split(","));
      setEducation("");
    }
    if (career.trim()) {
      setAuxCareer((auxCareer.toString()+","+career.trim()).split(","));
      setCareer("");
    }
    if (university.trim()) {
      setAuxUniversity((auxUniversity.toString()+","+university.trim()).split(","));
      setUniversity("");
    }
    onUpdateData({
      education: auxEducation.toString()+","+education.trim(),
      career: auxCareer.toString()+","+career.trim(),
      university: auxUniversity.toString()+","+university.trim(),
    });
    console.log({
      education: auxEducation.toString()+","+education.trim(),
      career: auxCareer.toString()+","+career.trim(),
      university: auxUniversity.toString()+","+university.trim(),
    });
    onClose();
  };

  return (
    <>
      <div>
        <div className="flex items-center justify-between mb-2 mx-4">
          <div className="flex items-center">
            <BookMarked className="flex-shrink-0 h-5 w-5 mr-2" />
            <label htmlFor="study">Estudios</label>
          </div>

          {/* <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                <Plus className="mr-2 h-4 w-4" /> Add Education
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Education</DialogTitle>
              </DialogHeader>
              <Input placeholder="Degree" />
              <Input placeholder="School" />
              <Input placeholder="Year" />
              <Button>Add</Button>
            </DialogContent>
          </Dialog> */}

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
                    <Select
                      value={education}
                      radius="none"
                      onChange={(e) => setEducation(e.target.value)}
                      placeholder="Seleccione un nivel de educacion"
                      className="w-full p-2 border rounded"
                      required
                    >
                      <SelectItem key="Univeristario">Univeristario</SelectItem>
                      <SelectItem key="Tecnico">Tecnico</SelectItem>
                      <SelectItem key="Certificacion">Certificacion</SelectItem>
                    </Select>
                    <input
                      type="text"
                      placeholder="Carrera/Certificacion"
                      onChange={(e) => setCareer(e.target.value)}
                      className="w-full p-2 border rounded"
                    />
                    <input
                      type="text"
                      placeholder="Lugar de Estudios"
                      onChange={(e) => setUniversity(e.target.value)}
                      className="w-full p-2 border rounded"
                    />
                    {/* <input
                      type="text"
                      placeholder="Año"
                      className="w-full p-2 border rounded"
                    /> */}
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Cerrar
                    </Button>
                    <Button color="primary" onPress={handleAddEducation}>
                      Agregar
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
        {auxEducation.map((edu, index) => (
          <div key={index} className="flex items-center mb-2 ml-8">
            {/* <GraduationCap className="mr-2 h-4 w-4" />
            <span>
              {edu.degree} - {edu.school}, {edu.year}
            </span>
          </div> */}
            {/* <div className="flex"> */}
            <div className="mr-4 flex-shrink-0">
              <GraduationCap />
            </div>
            <div>
              <h5 className="text-lg font-semibold">{edu}</h5>
              <p className="text-gray-600">{auxCareer[index]}</p>
              <p className="text-sm text-gray-500">{auxUniversity[index]}</p>
              {/* <p className="text-sm text-gray-500">{member.codcip}</p> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
