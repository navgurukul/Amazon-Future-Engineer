"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React from "react";
import { useRouter } from "next/navigation";

const CancelSecondPopup: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const router = useRouter();

    const handleGoToDashboard = () => {
        router.push("/admin/dashboard/allUsers");
        onClose();
    }

  return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl font-extrabold text-text-primary">
              Cancel Sprint
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div className="flex flex-col items-start justify-start gap-2">
              <div className="relative leading-[170%] font-medium">
                The Mini sprint for Rahul Prakash has been cancelled. An email and SMS will be shared to them
              </div>
            </div>
            <div className="flex flex-row items-start justify-end gap-4">
              <Button className="bg-white rounded-full border border-[#f55c38] text-[#f55c38] hover:bg-[#f5f5f5]" onClick={handleGoToDashboard}>Go to Dashboard</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
  );
};

export default CancelSecondPopup;
