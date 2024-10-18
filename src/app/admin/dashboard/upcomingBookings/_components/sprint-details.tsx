import React, { useState, useCallback, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addTeacherFeedback, addStudentFeedback, getFeedback, updateBookingStatus, updateBookingDetails } from '@/utils/api';
import FeedbackPopup from './FeedbackPopup';
import SubmitPopup from './SubmitPopup';

interface BookingDetails {
  name: string;
  email: string;
  phoneNumber: string;
  dateOfRequest: string;
  programName: string;
  schoolName: string;
  udiseCode: string;
  city: string;
  pincode: string;
  grade: string;
  numberOfStudents: number;
  actualNumberOfStudents: number | null;
  slot: string;
}

interface Feedback {
  id: number;
  user_id: number;
  slot_id: number;
  program_id: number;
  feedback: string;
  is_teacher: boolean;
  rating: number;
  admin_user_id: number | null;
  created_at: string;
  name: string;
}

interface SprintDetailsProps {
  bookingDetails: BookingDetails;
  bookingProp: {
    user: {
      id: number;
    };
    program_id: number;
  };
}

const SprintDetailsComponent: React.FC<SprintDetailsProps> = ({ bookingProp, bookingDetails }) => {
  // State Management
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [isTeacherFeedbackSubmitted, setIsTeacherFeedbackSubmitted] = useState(false);
  const [isTeacherPopupOpen, setIsTeacherPopupOpen] = useState(false);
  const [isStudentPopupOpen, setIsStudentPopupOpen] = useState(false);
  const [isSubmitPopupOpen, setIsSubmitPopupOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // State for editable fields
  const [editedDetails, setEditedDetails] = useState({
    pincode: bookingDetails?.pincode,
    actualNumberOfStudents: bookingDetails?.actualNumberOfStudents,
    grade: bookingDetails?.grade,
    schoolName: bookingDetails?.schoolName,
    udiseCode: bookingDetails?.udiseCode,
    name: bookingDetails?.name,
  });

  // Fetch feedbacks
  const fetchFeedbacks = useCallback(async () => {
    try {
      const response = await getFeedback(bookingProp.user.id, parseInt(bookingDetails.slot, 10));
      setFeedbacks(response.data);
      setIsTeacherFeedbackSubmitted(response.data.some((feedback: Feedback) => !feedback.is_teacher));
    } catch (error) {
      console.error('Error fetching feedbacks:', error);
    }
  }, [bookingDetails.slot, bookingProp.user.id]);

  useEffect(() => {
    fetchFeedbacks();
  }, [fetchFeedbacks]);

  // Handle input changes for editable fields
  const handleInputChange = (field: string, value: string | number) => {
    setEditedDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Save changes to booking details
  const handleSaveChanges = async () => {
    setIsSaving(true);
    try {
      const bookingData = {
        user_id: bookingProp.user.id,
        slot_id: parseInt(bookingDetails.slot, 10),
        program_id: bookingProp.program_id,
        booking_batch_size: bookingDetails.numberOfStudents,
        visited_batch_size: Number(editedDetails.actualNumberOfStudents),
        students_grade: editedDetails.grade,
        visiting_time: bookingDetails.dateOfRequest,
        school_name: editedDetails.schoolName,
        udise: editedDetails.udiseCode,
        email: bookingDetails.email,
        address: bookingDetails.city,
        village: bookingDetails.city,
        state: "Karnataka",
        district: bookingDetails.city,
        pin_code: parseInt(bookingDetails.pincode, 10)
      };


 

      await updateBookingDetails(bookingProp.user.id, bookingData);
    } catch (error) {
      console.error('Error updating booking details:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleTeacherFeedbackSubmit = useCallback(async (feedbackContent: string, name: string) => {
    try {
      const feedbackData = {
        user_id: bookingProp.user.id,
        slot_id: parseInt(bookingDetails.slot, 10),
        program_id: bookingProp.program_id,
        feedback: feedbackContent,
        rating: 5,
        is_teacher: false,
        name: name,
      };
      await addTeacherFeedback(feedbackData);
      setIsTeacherFeedbackSubmitted(true);
      fetchFeedbacks();
      setIsTeacherPopupOpen(false);
    } catch (error) {
      console.error('Error adding teacher feedback:', error);
    }
  }, [bookingDetails.slot, bookingProp.program_id, bookingProp.user.id, fetchFeedbacks]);

  const handleStudentFeedbackSubmit = useCallback(async (feedbackContent: string, name: string) => {
    try {
      const feedbackData = {
        slot_id: parseInt(bookingDetails.slot, 10),
        program_id: bookingProp.program_id,
        feedback: feedbackContent,
        rating: 5,
        is_teacher: true,
        name: name,
      };
      await addStudentFeedback(feedbackData);
      fetchFeedbacks();
      setIsStudentPopupOpen(false);
    } catch (error) {
      console.error('Error adding student feedback:', error);
    }
  }, [bookingDetails.slot, bookingProp.program_id, fetchFeedbacks]);

  const handleSubmitAndCompleteSprint = async () => {
    try {
      await updateBookingStatus(bookingProp.user.id, "Completed");
      setIsSubmitPopupOpen(true);
    } catch (error) {
      console.error('Error updating booking status:', error);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const parseSlot = (slot: string) => {
    const [datePart, timePart] = slot.split(' | ');
    return { date: datePart, time: timePart };
  };

  return (
    <>
      {isSubmitPopupOpen ? (
        <SubmitPopup 
          isOpen={isSubmitPopupOpen}
          onClose={() => setIsSubmitPopupOpen(false)}
          bookingData={{
            name: bookingDetails.name,
            date: parseSlot(bookingDetails.slot).date,
            time: parseSlot(bookingDetails.slot).time,
            students: editedDetails.numberOfStudents,
          }} 
        />
      ) : (
        <div className="w-full max-w-4xl mx-auto px-4 py-8 space-y-16">
          {/* Booking Details Section */}
          <div className="space-y-8">
            <h1 className="text-4xl font-extrabold text-midnight-blue-main">Booking Details</h1>
            <Card className="rounded-lg border-none shadow-none ml-[-20px]">
              <CardContent className="pt-6 space-y-6">
                {Object.entries(bookingDetails).map(([key, value]) => {
                  const isEditable = [
                    'pincode',
                    'actualNumberOfStudents',
                    'grade',
                    'schoolName',
                    'udiseCode',
                    'name'
                  ].includes(key);

                  return (
                    <div key={key} className="flex justify-between items-center">
                      <Label className="font-extrabold text-lg text-text-primary">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </Label>
                      <Input
                        value={isEditable ? editedDetails[key as keyof typeof editedDetails] : value?.toString() ?? ''}
                        onChange={isEditable ? (e) => handleInputChange(key, e.target.value) : undefined}
                        readOnly={!isEditable}
                        className={`w-80 rounded-81xl ${
                          isEditable 
                            ? 'bg-white border-text-primary' 
                            : 'bg-grey-300 border-text-primary'
                        } font-medium text-lg text-text-primary`}
                      />
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Save Changes Button */}
            <div className="flex justify-end">
              <Button
                variant="proceed"
                onClick={handleSaveChanges}
                disabled={isSaving}
              >
                {isSaving ? 'Saving...' : 'Save Changes'}
              </Button>
            </div>
          </div>

          {/* Feedback Section */}
          <div className="space-y-8">
            <h2 className="text-4xl font-extrabold text-midnight-blue-main">Sprint Feedback</h2>
            
            {/* Teacher Feedback Section */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-extrabold">Teacher Feedback (Only one allowed)</h3>
                {!isTeacherFeedbackSubmitted && (
                  <Button
                    variant="proceed"
                    onClick={() => setIsTeacherPopupOpen(true)}
                    className="rounded-full border-incandescent-main border text-incandescent-main bg-transparent"
                  >
                    Add Feedback
                  </Button>
                )}
                {feedbacks.filter(f => !f.is_teacher).map((feedback) => (
                  <div key={feedback.id} className="p-4 rounded">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                        <span className="font-medium">{feedback.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{formatDate(feedback.created_at)}</span>
                    </div>
                    <p className="text-gray-700">{feedback.feedback}</p>
                  </div>
                ))}
              </div>

              {/* Student Feedback Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-extrabold">Student Feedback</h3>
                {feedbacks.filter(f => f.is_teacher).map((feedback) => (
                  <div key={feedback.id} className="p-4 rounded">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                        <span className="font-medium">{feedback.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{formatDate(feedback.created_at)}</span>
                    </div>
                    <p className="text-gray-700">{feedback.feedback}</p>
                  </div>
                ))}
                <Button
                  variant="proceed"
                  onClick={() => setIsStudentPopupOpen(true)}
                  className="rounded-full border-incandescent-main border text-incandescent-main bg-transparent"
                >
                  Add Feedback
                </Button>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center items-center">
            <Button 
              variant="proceed" 
              onClick={handleSubmitAndCompleteSprint}
            >
              Submit and Complete Sprint
            </Button>
          </div>
        </div>
      )}

      {/* Feedback Popups */}
      <FeedbackPopup
        isOpen={isTeacherPopupOpen}
        onClose={() => setIsTeacherPopupOpen(false)}
        onSubmit={handleTeacherFeedbackSubmit}
        type="teacher"
      />

      <FeedbackPopup
        isOpen={isStudentPopupOpen}
        onClose={() => setIsStudentPopupOpen(false)}
        onSubmit={handleStudentFeedbackSubmit}
        type="student"
      />
      
    </>
  );
};

export default SprintDetailsComponent;





