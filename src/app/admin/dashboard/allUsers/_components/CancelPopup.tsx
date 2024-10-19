"use client";

import CancelSecondPopup from "./CancelSecondPopup";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import React from "react";

const CancelPopup: React.FC = () => {
  const [isFirstOpen, setIsFirstOpen] = useState(false); // State for the first dialog
  const [isSecondOpen, setIsSecondOpen] = useState(false); // State for the second dialog

  const openFirstDialog = () => setIsFirstOpen(true);
  const closeFirstDialog = () => setIsFirstOpen(false);

  const openSecondDialog = () => {
    setIsFirstOpen(false); // Close the first dialog
    setIsSecondOpen(true); // Open the second dialog
  };

  const closeSecondDialog = () => setIsSecondOpen(false);

  return (
    <>
      <Button onClick={openFirstDialog} className="bg-blue-500 text-white">
        Open Cancel Popup
      </Button>

      <Dialog open={isFirstOpen} onOpenChange={closeFirstDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl font-extrabold text-text-primary">
              Cancel Sprint
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div className="flex flex-col items-start justify-start gap-2">
              <div className="relative leading-[170%] font-medium">
                Reason for Cancellation
              </div>
              <Textarea
                className="w-full rounded-lg border-text-primary1 border-[1px] border-solid py-2 px-4 text-lg font-medium min-h-[100px]"
                placeholder="Enter your reason here..."
              />
            </div>
            <div className="flex flex-row items-start justify-end gap-4">
              <Button
                variant="proceedWhite"
                className="border-text-primary border-[1px] border-solid box-border text-text-primary"
                onClick={closeFirstDialog}
              >
                Dismiss
              </Button>
              <Button variant="proceed" onClick={openSecondDialog}>
                Cancel Sprint
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <CancelSecondPopup isOpen={isSecondOpen} onClose={closeSecondDialog} />
    </>
  );
};

export default CancelPopup;
