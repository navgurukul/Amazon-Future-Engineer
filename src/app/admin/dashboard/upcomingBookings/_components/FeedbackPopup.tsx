// FeedbackPopup.tsx
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

interface FeedbackPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (feedback: string) => void;
  type: 'teacher' | 'student';
}

const FeedbackPopup: React.FC<FeedbackPopupProps> = ({ isOpen, onClose, onSubmit, type }) => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  
  useEffect(() => {
    // Load name from localStorage if exists
    const storedName = localStorage.getItem(`${type}Name`);
    if (storedName) {
      setName(storedName);
    }
  }, [type]);

  const handleSubmit = () => {
    if (name && feedback) {
      // Store name in localStorage
      localStorage.setItem(`${type}Name`, name);
      onSubmit(feedback);
      setFeedback('');
      onClose();
    }
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
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="relative leading-[170%] font-medium">
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
            <div className="relative leading-[170%] font-medium">Feedback</div>
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