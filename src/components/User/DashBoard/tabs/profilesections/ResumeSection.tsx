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

interface ResumeProps {
  onUpdateData: ({}) => void;
  data: FieldValues;
  isEdit: boolean;
}

export default function ResumeSection({
  onUpdateData,
  data,
  isEdit,
}: ResumeProps) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const [cv, setCv] = useState(data.cv || null);
  const [resume, setResume] = useState(data.cv || null);
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
    setCv(resume);
    onUpdateData({ cv: resume, newCV: newResume });
    // onUpdateData({ cv: newResume, isChangeCv: true });
    // console.log(data);
    onClose();
  };

  return (
    <>
      <div className="mx-4">
        <div className="flex items-center">
          <Folder className="flex-shrink-0 h-5 w-5 mr-2" />
          <label htmlFor="resume">Curriculum Vitae</label>
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
          <Link href={cv} target="_blank" className="ml-2 mt-1">
            Curriculum {data.firstName} {data.lastName}
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
                  <ModalHeader>Actulizar Curriculum</ModalHeader>
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
