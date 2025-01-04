"use client";

import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Radio,
  RadioGroup,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
// import { Button } from "@/components/ui/button"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import { Label } from "@/components/ui/label"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"

export default function MembershipSection() {
  // const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [cancelReason, setCancelReason] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleSubmit = () => {
    // Here you would typically send the cancellation reason to your backend
    console.log("Cancellation reason:", cancelReason);
    // setIsDialogOpen(false);
  };

  return (
    <Card>
      <CardHeader>
        <h2>Membership Information</h2>
      </CardHeader>
      <CardBody className="space-y-6">
        <div className="flex items-center space-x-4">
          <Avatar>
            {/* <AvatarImage src="/placeholder.svg" alt="Profile picture" />
            <AvatarFallback>JD</AvatarFallback> */}
          </Avatar>
          <div>
            <h2 className="text-2xl font-bold">John Doe</h2>
            <Chip>Premium Member</Chip>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Subscription Plan</h3>
          <p>Premium Plan</p>
          <Chip variant="dot" className="bg-green-100 text-green-800">
            Active
          </Chip>
        </div>
        <div className="space-y-2">
          <p>
            <strong>Membership Start:</strong> January 1, 2023
          </p>
          <p>
            <strong>Membership End:</strong> December 31, 2023
          </p>
        </div>
        {/* <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild></DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Cancel Membership</DialogTitle>
              <DialogDescription>
                We're sorry to see you go. Please let us know why you're
                cancelling your membership.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <RadioGroup onValueChange={setCancelReason}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="too-expensive" id="too-expensive" />
                  <label htmlFor="too-expensive">Too expensive</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="not-using" id="not-using" />
                  <label htmlFor="not-using">Not using it enough</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="found-alternative"
                    id="found-alternative"
                  />
                  <label htmlFor="found-alternative">
                    Found a better alternative
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="other" />
                  <label htmlFor="other">Other</label>
                </div>
              </RadioGroup>
            </div>
            <DialogFooter>
              <Button type="submit" onPress={handleSubmit}>
                Submit
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog> */}

        <Button variant="faded" onPress={onOpen}>
          Cancel Membership
        </Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader>Cancel Membership</ModalHeader>
                <ModalBody>
                  <span>
                    Were sorry to see you go. Please let us know why youre
                    cancelling your membership.
                  </span>
                  <div className="grid gap-4 py-4">
                    <RadioGroup
                      label="encuesta"
                      onValueChange={setCancelReason}
                    >
                      <div className="flex items-center space-x-2">
                        <Radio value="too-expensive" id="too-expensive">
                          <p aria-label="too-expensive">Too expensive</p>
                        </Radio>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Radio value="not-using" id="not-using">
                          <p aria-label="not-using">Not using it enough</p>
                        </Radio>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Radio value="found-alternative" id="found-alternative">
                          <p aria-label="found-alternative">
                            Found a better alternative
                          </p>
                        </Radio>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Radio value="other" id="other">
                          <p aria-label="other">Other</p>
                        </Radio>
                      </div>
                    </RadioGroup>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button type="submit" onPress={handleSubmit}>
                    Submit
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </CardBody>
    </Card>
  );
}
