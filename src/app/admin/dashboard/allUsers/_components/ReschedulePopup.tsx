import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";

// interface FeedbackPopupProps {
//   isOpen: boolean;
//   onClose: () => void;
//   onSubmit: (feedback: string, name: string) => void;
//   type: "teacher" | "student";
// }

// const ReschedulePopup: React.FC<FeedbackPopupProps> = ({
const ReschedulePopup: React.FC = ({
//   isOpen,
//   onClose,
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

  return (
    // <Dialog open={isOpen} onOpenChange={onClose}>
    <Dialog>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-extrabold text-text-primary">
            Reschedule Sprint
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="relative leading-[170%] font-medium">
              Slot
            </div>
            <Input
            //   value={name}
            //   onChange={(e) => setName(e.target.value)}
              className="w-full rounded-81xl border-text-primary1 border-[1px] border-solid h-14 px-4 text-lg font-medium"
              placeholder="Enter name"
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="relative leading-[170%] font-medium">Reason for Rescheduling</div>
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
