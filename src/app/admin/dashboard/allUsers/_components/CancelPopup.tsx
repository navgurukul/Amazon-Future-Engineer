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
import { updateBookingStatus } from '@/utils/api';

interface CancelPopupProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  bookingSingle: {
    id: number;
    status: string;
    start_time: string;
    end_time: string;
    booking_for: string;
    // Add any other fields you need from bookingSingle
  };
}

const CancelPopup: React.FC<CancelPopupProps> = ({ isOpen, onClose, name, bookingSingle }) => {
  const [isSecondOpen, setIsSecondOpen] = useState<boolean>(false);
  const [reason, setReason] = useState<string>(""); // State to hold the reason
  const [isReasonProvided, setIsReasonProvided] = useState<boolean>(false); // State to check if reason is provided

  // Enable the button only if the reason is not empty
  const handleReasonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const reasonText = e.target.value;
    setReason(reasonText);
    setIsReasonProvided(reasonText.trim().length > 0); // Update the state to check if reason is provided
  };

  const openSecondDialog = () => {
    onClose();
    setIsSecondOpen(true);
    handleSubmitAndCompleteSprint();
  };

  const handleSubmitAndCompleteSprint = async () => {
    try {
      const reason1 = await updateBookingStatus(bookingSingle.id, "Cancelled", reason,"Cancelled"); 
      window.location.reload()
    } catch (error) {
      console.error('Error updating booking status:', error);
    }
  };

  const closeSecondDialog = () => setIsSecondOpen(false);

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl font-extrabold text-text-primary">
              {name === "cancel" ? "Cancel Sprint" : "Not Interested"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div className="flex flex-col items-start justify-start gap-2">
              <div className="relative leading-[170%] font-medium">
                Reason for {name === "cancel" ? "Cancellation" : "Marking as Not Interested"}
              </div>
              <Textarea
                className="w-full rounded-lg border-text-primary1 border-[1px] border-solid py-2 px-4 text-lg font-medium min-h-[100px]"
                placeholder="Enter your reason here..."
                value={reason}
                onChange={handleReasonChange} // Track the reason input
              />
            </div>
            <div className="flex flex-row items-start justify-end gap-4">
              <Button
                variant="proceedWhite"
                className="border-text-primary border-[1px] border-solid box-border text-text-primary"
                onClick={onClose}
              >
                Dismiss
              </Button>
              <Button
                variant="proceed"
                onClick={openSecondDialog}
                disabled={!isReasonProvided} // Disable button if no reason is provided
              >
                {name === "cancel" ? "Cancel Sprint" : "Submit"}
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
