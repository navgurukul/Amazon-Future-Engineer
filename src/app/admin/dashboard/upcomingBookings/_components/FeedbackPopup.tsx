import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

interface FeedbackPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (name: string, feedback: string) => void;
  type: 'teacher' | 'student';
}

const FeedbackPopup: React.FC<FeedbackPopupProps> = ({ isOpen, onClose, onSubmit, type }): JSX.Element => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    onSubmit(name, feedback);
    setName('');
    setFeedback('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-extrabold text-text-primary">
            {type === 'teacher' ? 'Teacher Feedback' : 'Student Feedback'}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="flex flex-col items-start justify-start gap-2 text-text-primary1 font-webtypestyles-buttonlarge">
            <div className="relative leading-[170%] font-medium">
              {type === 'teacher' ? 'Teacher Name' : 'Student Name'}
            </div>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-81xl border-text-primary1 border-[1px] border-solid h-14 px-4 text-lg text-text-primary font-medium"
              placeholder="Enter name"
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-2 text-text-primary1 font-webtypestyles-buttonlarge">
            <div className="relative leading-[170%] font-medium">Feedback</div>
            <Textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full rounded-lg border-text-primary1 border-[1px] border-solid overflow-hidden py-2 px-4 text-lg text-text-primary font-medium min-h-[100px]"
              placeholder="Enter your feedback here..."
            />
          </div>
          <div className="flex flex-row items-start justify-end gap-4 text-center text-lg text-text-primary font-webtypestyles-buttonlarge">
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