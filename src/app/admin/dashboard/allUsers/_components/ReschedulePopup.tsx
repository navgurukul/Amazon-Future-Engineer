import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

// interface FeedbackPopupProps {
//   isOpen: boolean;
//   onClose: () => void;
//   onSubmit: (feedback: string, name: string) => void;
//   type: "teacher" | "student";
// }

interface CancelPopupProps {
  isOpen: boolean;
  onClose: () => void;
  handleCalendar: () => void;
}

// const ReschedulePopup: React.FC<FeedbackPopupProps> = ({
const ReschedulePopup: React.FC<CancelPopupProps> = ({
  isOpen,
  onClose,
  handleCalendar
  //   onSubmit,
  //   type,
}) => {
  //   const [name, setName] = useState("");
  //   const [feedback, setFeedback] = useState("");

  //   const handleSubmit = () => {
  //     if (name && feedback) {
  //       onSubmit(feedback, name);
  //       setFeedback("");
  //       setName("");
  //       onClose();
  //     }
  //   };

  const router = useRouter();
  const handleCalendarClick = ()=>{
    handleCalendar();
  }

  return (
    // <Dialog open={isOpen} onOpenChange={onClose}>
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-extrabold text-text-primary">
            Reschedule Sprint
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="relative leading-[170%] font-medium">Slot</div>
            <div className="relative w-full">
              <Input
                //   value={name}
                //   onChange={(e) => setName(e.target.value)}
                className="w-full rounded-81xl border-text-primary1 border-[1px] border-solid h-14 px-4 text-lg font-medium pr-12" // Add padding-right to make space for the image
                placeholder="Choose Slot"
              />
              <Image
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
                src="/admin/calendar_today (1).svg"
                alt="calendar"
                width={24}
                height={24}
                onClick={handleCalendarClick}
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="relative leading-[170%] font-medium">
              Reason for Rescheduling
            </div>
            <Textarea
              //   value={feedback}
              //   onChange={(e) => setFeedback(e.target.value)}
              className="w-full rounded-lg border-text-primary1 border-[1px] border-solid py-2 px-4 text-lg font-medium min-h-[100px]"
              placeholder="Enter your reason here..."
            />
          </div>
          <div className="flex flex-row items-start justify-end gap-4">
            <Button
              variant="proceedWhite"
              //   onClick={onClose}
              className="border-text-primary border-[1px] border-solid box-border text-text-primary"
            >
              Cancel
            </Button>
            <Button
              //   onClick={handleSubmit}
              variant="proceed"
              //   disabled={!name || !feedback}
              className="bg-[#f091b2] hover:bg-[#c06e8d]"
            >
              Reschedule
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReschedulePopup;
