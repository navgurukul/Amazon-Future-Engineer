import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

interface FeedbackPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (feedback: string, name: string) => void;
  type: 'teacher' | 'student';
}

const FeedbackPopup: React.FC<FeedbackPopupProps> = ({ isOpen, onClose, onSubmit, type }) => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    if (name && feedback) {
      onSubmit(feedback, name);
      setFeedback('');
      setName('');
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[592px] p-[32px]">
        <DialogHeader>
          <DialogTitle className="font-heading6-bold text-heading6">
            {type === 'teacher' ? 'Teacher Feedback' : 'Student Feedback'}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="font-body1-regular text-body1 leading-[170%]">
              {type === 'teacher' ? 'Teacher Name' : 'Student Name'}
            </div>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-81xl border-text-primary1 border-[1px] border-solid h-14 px-4 text-lg font-medium"
              placeholder="Enter name"
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="font-body1-regular text-body1 leading-[170%]">Feedback</div>
            <Textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full rounded-lg border-text-primary1 border-[1px] border-solid py-2 px-4 text-lg font-medium min-h-[100px]"
              placeholder="Enter your feedback here..."
            />
          </div>
          <div className="flex flex-row items-start justify-end gap-4">
            <Button
              variant="proceedWhite"
              onClick={onClose}
              className="border-text-primary border-[1px] border-solid box-border text-text-primary"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              variant="proceed"
              disabled={!name || !feedback}
            >
              Save Feedback
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FeedbackPopup;