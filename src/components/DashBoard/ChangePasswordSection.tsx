"use client";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  InputOtp,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ChangePasswordSection() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState("");
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes in seconds
  const [isResendActive, setIsResendActive] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    if (isDialogOpen && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setIsResendActive(true);
    }
  }, [isDialogOpen, timeLeft]);

  const handleUpdatePassword = () => {
    // Here you would typically send a request to your backend to initiate the password change
    setIsDialogOpen(true);
    setTimeLeft(180);
    setIsResendActive(false);
    onOpen();
  };

  const handleConfirmChange = () => {
    // Here you would typically send the confirmation code to your backend
    console.log("Confirmation code:", confirmationCode);
    setIsDialogOpen(false);
  };

  const handleResendCode = () => {
    // Here you would typically send a request to resend the confirmation code
    setTimeLeft(180);
    setIsResendActive(false);
  };

  const isUpdateButtonDisabled =
    !currentPassword ||
    !newPassword ||
    !confirmPassword ||
    newPassword !== confirmPassword;

  return (
    <Card>
      <CardHeader>
        <h2>Change Password</h2>
      </CardHeader>
      <CardBody className="space-y-6">
        <div>
          <label htmlFor="current-password">Current Password</label>
          <input
            id="current-password"
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="new-password">New Password</label>
          <input
            id="new-password"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confirm-password">Confirm New Password</label>
          <input
            id="confirm-password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button
          onClick={handleUpdatePassword}
          disabled={isUpdateButtonDisabled}
        >
          Update Password
        </button>

        {/* <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm Password Change</DialogTitle>
              <DialogDescription>
                Enter the confirmation code sent to your email. The code will
                expire in {Math.floor(timeLeft / 60)}:
                {(timeLeft % 60).toString().padStart(2, "0")}.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="confirmation-code" className="text-right">
                  Code
                </Label>
                <Input
                  id="confirmation-code"
                  className="col-span-3"
                  value={confirmationCode}
                  onChange={(e) => setConfirmationCode(e.target.value)}
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                onClick={handleConfirmChange}
                disabled={!confirmationCode}
              >
                Confirm
              </Button>
              {isResendActive && (
                <Button onClick={handleResendCode}>Resend Code</Button>
              )}
            </DialogFooter>
          </DialogContent>
        </Dialog> */}

        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader>
                  <h3>Confirm Password Change</h3>
                  <span>
                    Enter the confirmation code sent to your email. The code
                    will expire in {Math.floor(timeLeft / 60)}:
                    {(timeLeft % 60).toString().padStart(2, "0")}.
                  </span>
                </ModalHeader>
                <ModalBody>
                  <InputOtp
                    length={6}
                    variant="bordered"
                    color="primary"
                    // onValueChange={(e) => setConfirmationCode(e.target.value)}
                    onValueChange={setConfirmationCode}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <button
                    onClick={handleConfirmChange}
                    disabled={!confirmationCode}
                  >
                    Confirm
                  </button>
                  {isResendActive && (
                    <button onClick={handleResendCode}>Resend Code</button>
                  )}
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </CardBody>
    </Card>
  );
}
