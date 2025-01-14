import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { FileBadge, Folder } from "lucide-react";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { FieldValues } from "react-hook-form";

interface ProformaProps {
  onUpdateData: ({}) => void;
  data: FieldValues;
  isEdit: boolean;
}

export default function ProformaSection({
  onUpdateData,
  data,
  isEdit,
}: ProformaProps) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const [proforma, setProforma] = useState(data.proforma || null);
  const [resume, setResume] = useState(data.proforma || null);
  const [newResume, setNewResume] = useState<File | null>();

  const handleResumeUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];
    setNewResume(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setResume(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleChangeResume = () => {
    setProforma(resume);
    onUpdateData({ proforma: resume, newProforma: newResume });
    // console.log(data);
    onClose();
  };

  return (
    <>
      <div className="mx-4">
        <div className="flex items-center">
          <Folder className="flex-shrink-0 h-5 w-5 mr-2" />
          <label htmlFor="resume">Proforma</label>
        </div>
        <div className="flex items-center">
          {/* <Input
              id="resume"
              name="resume"
              value={profile.resume}
              onChange={handleChange}
              disabled={!isEditing}
            /> */}
          {/* <p key="name" className="ml-2 mt-1">
              Curriculum {data.firstName} {data.lastName}
            </p> */}
          <Link href={proforma as string} target="_blank" className="ml-2 mt-1">
            Proforma de Productos
          </Link>
          <Button
            variant="ghost"
            size="sm"
            onPress={onOpen}
            className="ml-2"
            isIconOnly
            isDisabled={!isEdit}
          >
            <FileBadge className="h-4 w-4" />
          </Button>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader>Actulizar Proforma</ModalHeader>
                  <ModalBody>
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={handleResumeUpload}
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Cerrar
                    </Button>
                    <Button color="primary" onPress={handleChangeResume}>
                      Cambiar
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
      </div>
    </>
  );
}
