import FeedbackPopup from "./FeedbackPopup";
import SubmitPopup from "./SubmitPopup";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  addTeacherFeedback,
  addStudentFeedback,
  getFeedback,
  updateBookingStatus,
  updateBookingDetails,
} from "@/utils/api";
import Image from "next/image";
import React, { useState, useCallback, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

interface BookingDetails {
  // bookingDetails(slot: string, arg1: number): unknown;
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




interface Booking {
  program_id: any;
  id: number;
  user: {
    name: string;
    id: string;
    email: string;
    phone: string;
    school_id?: string;
  };
  slot: {
    venue: {
      city: string;
    };
    program: {
      title: string;
    };
  };
  booking_for: string;
  start_time: string;
  end_time: string;
  booking_batch_size: number;
  created_at: string;
  status: string;
}

interface SprintDetailsProps {
  bookingDetails: BookingDetails;
  bookingProp: Booking; 
}

const SprintDetailsComponent: React.FC<SprintDetailsProps> = ({
  bookingProp,
  bookingDetails,
}) => {
  const { toast } = useToast()
  // State Management
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [isTeacherFeedbackSubmitted, setIsTeacherFeedbackSubmitted] =
    useState(true);
  const [isTeacherPopupOpen, setIsTeacherPopupOpen] = useState(false);
  const [isStudentPopupOpen, setIsStudentPopupOpen] = useState(false);
  const [isSubmitPopupOpen, setIsSubmitPopupOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [toastId, setToastId] = useState<string | null>(null);
  

  // State for editable fields
  const [editedDetails, setEditedDetails] = useState({
    pincode: bookingDetails?.pincode,
    actualNumberOfStudents: bookingDetails?.actualNumberOfStudents,
    grade: bookingDetails?.grade,
    schoolName: bookingDetails?.schoolName,
    udiseCode: bookingDetails?.udiseCode,
    name: bookingDetails?.name,
  });



  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
      // Function to handle the "Yes" confirmation
      const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  // Function to check if all fields are filled
  const checkAllFieldsFilled = () => {
    return (
      editedDetails.pincode &&
      editedDetails.actualNumberOfStudents &&
      editedDetails.grade &&
      editedDetails.schoolName &&
      editedDetails.udiseCode &&
      editedDetails.name
    );
  };

  // Use effect to enable/disable button based on field completion
  useEffect(() => {
    const areAllFieldsFilled = checkAllFieldsFilled();
    setIsButtonDisabled(!areAllFieldsFilled); // Disable if not all fields are filled
  }, [editedDetails]);


   


  // Fetch feedbacks
  const fetchFeedbacks = useCallback(async () => {
    try {
      const response = await getFeedback(
        Number(bookingProp.user.id),
        parseInt(bookingDetails.slot, 10)
      );
      const hasTeacherFeedback = Array.isArray(response.data) && response.data.some((feedback: { is_teacher: any; }) => feedback.is_teacher);
      if (hasTeacherFeedback) {
        setIsTeacherFeedbackSubmitted(false);
      }
      setFeedbacks(response.data);
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
    }
  }, [bookingDetails.slot, bookingProp.user.id]);

  useEffect(() => {
    fetchFeedbacks();
  }, [fetchFeedbacks]);

  // Handle input changes for editable fields
  const handleInputChange = (field: string, value: string | number) => {
    setEditedDetails((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Save changes to booking details
  const handleSaveChanges = async () => { 
    setIsSaving(true);
    try {
      const bookingData = {
        user_id: Number(bookingProp.user.id),
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
        pin_code: parseInt(bookingDetails.pincode, 10),
      };
      await updateBookingDetails(bookingProp.id, bookingData);
    } catch (error) {
      console.error("Error updating booking details:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleTeacherFeedbackSubmit = useCallback(
    async (feedbackContent: string, name: string) => {
      try {
        const feedbackData = {
          user_id: Number(bookingProp.user.id),
          slot_id: parseInt(bookingDetails.slot, 10),
          program_id: bookingProp.program_id,
          feedback: feedbackContent,
          rating: 5,
          is_teacher: true,
          name: name,
        };
        await addTeacherFeedback(feedbackData);
        fetchFeedbacks();
        setIsTeacherPopupOpen(false);
        setIsTeacherFeedbackSubmitted(false)
      } catch (error) {
        console.error("Error adding teacher feedback:", error);
      }
    },
    [
      bookingDetails.slot,
      bookingProp.program_id,
      bookingProp.user.id,
      fetchFeedbacks,
    ]
  );

  const handleStudentFeedbackSubmit = useCallback(
    async (feedbackContent: string, name: string) => {
      try {
        const feedbackData = {
          user_id: Number(bookingProp.user.id),
          slot_id: parseInt(bookingDetails.slot, 10),
          program_id: bookingProp.program_id,
          feedback: feedbackContent,
          rating: 5,
          is_teacher: false,
          name: name,
        };
        await addTeacherFeedback(feedbackData);
        fetchFeedbacks();
        setIsStudentPopupOpen(false);
      } catch (error) {
        console.error("Error adding student feedback:", error);
      }
    },
    [bookingDetails.slot, bookingProp.program_id, fetchFeedbacks]
  );



  /// Function to handle the "Yes" confirmation
  const handleConfirmYes = async () => {
    try {
      await updateBookingStatus(Number(bookingProp.user.id), "Completed", "Completed");
      setIsConfirmationOpen(false);
      setIsSubmitPopupOpen(true);
      // Show success toast
      toast({
        title: "Success",
        description: "Sprint completed successfully",
        variant: "success",
        duration: 1000,
      });
    } catch (error) {
      console.error("Error updating booking status:", error);
      // Show error toast
      toast({
        title: "Error",
        description: "Failed to complete sprint",
        variant: "destructive",
        duration: 1000,
      });
    }
  };

  const handleSubmitAndCompleteSprint = () => {
    setIsConfirmationOpen(true);
    toast({
      title: "Complete Sprint",
      description: (
        <div className="space-y-2">
          <p>Are you sure you want to complete the sprint?</p>
          <div className="flex space-x-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleConfirmYes();
              }}
              className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition-colors"
            >
              Yes
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsConfirmationOpen(false);
                // Show cancelled toast
                toast({
                  title: "Not Completed",
                  description: "Sprint not completed yet",
                  duration: 3000,
                });
              }}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
            >
              No
            </button>
          </div>
        </div>
      ),
      duration: isConfirmationOpen ? Infinity : 0,
    });
  };

  // Effect to clear the confirmation state when component unmounts
  useEffect(() => {
    return () => {
      setIsConfirmationOpen(false);
    };
  }, []);




  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const parseSlot = (slot: string) => {
    const [datePart, timePart] = slot.split(" | ");
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
            students: bookingDetails.numberOfStudents,
          }} type={""}        />
      ) : (
        <div className="w-[592px] max-w-4xl mx-auto px-4 mt-[10px] space-y-6">
          {/* Booking Details Section */}
          <div className="space-y-8">
            <h1 className="text-heading5 font-heading5-bold leading-[150%] font-extrabold text-midnight-blue-main">
              Booking Details
            </h1>
            <Card className="rounded-lg border-none shadow-none ml-[-20px]">
              <CardContent className="pt-6 space-y-6">
                {Object.entries(bookingDetails).map(([key, value]) => {
                  const isEditable = [
                    "pincode",
                    "actualNumberOfStudents",
                    "grade",
                    "schoolName",
                    "udiseCode",
                    "name",
                  ].includes(key);

                  return (
                    <div
                      key={key}
                      className="flex justify-between items-center"
                    >
                      <Label className="font-subTitle1-bold text-subTitle1 font-extrabold text-text-primary leading-[170%]">
                        {key
                          .replace(/([A-Z])/g, " $1")
                          .trim()
                          .split(" ")
                          .map(
                            (word) =>
                              word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join(" ")}
                      </Label>
                      <Input
                        value={
                          isEditable
                            ? editedDetails[key as keyof typeof editedDetails]
                            : value?.toString() ?? ""
                        }
                        onChange={
                          isEditable
                            ? (e) => handleInputChange(key, e.target.value)
                            : undefined
                        }
                        readOnly={!isEditable}
                        className={`w-80 rounded-[100px] border-text-primary border-[1px] border-solid box-border h-14 flex flex-row items-center justify-start py-2 px-4 text-left text-lg text-text-primary font-webtypestyles-body1 ${
                          isEditable
                            ? "bg-white border-text-primary"
                            : "bg-grey-300 border-text-primary"
                        }`}
                      />
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Save Changes Button */}
            <div className="flex justify-center pt-2 pb-16">
              <Button
                variant="proceed"
                onClick={handleSaveChanges}
                disabled={isButtonDisabled}
              >
                {isSaving ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          </div>

          {/* Feedback Section */}
          <div className="space-y-8">
            <h2 className="text-heading5 font-heading5-bold leading-[150%] font-extrabold text-midnight-blue-main">
              Sprint Feedback
            </h2>

            {/* Teacher Feedback Section */}
            <div className="space-y-6">
              <div className="space-y-6">
                <h3 className="text-lg font-extrabold">
                  Teacher Feedback (Only one allowed)
                </h3>
                {isTeacherFeedbackSubmitted && (
                  <Button
                    variant="proceed"
                    onClick={() => setIsTeacherPopupOpen(true)}
                    className="rounded-full border-incandescent-main border text-incandescent-main bg-transparent"
                  >
                    Add Feedback
                  </Button>
                )}
                {feedbacks
                  .filter((f) => f.is_teacher)
                  .map((feedback) => (
                    <div key={feedback.id} className="pb-8 rounded">
                      <div className="flex items-center justify-between mb-2 gap-4 font-body1-regular text-body1">
                        <div className="flex items-center gap-4">
                          <Image
                            className="object-cover rounded-full cursor-pointer"
                            alt="User Avatar"
                            src="/login/avatarIcon.svg"
                            width={48}
                            height={48}
                          />
                          <span className="font-body1-regular text-body1">
                            {feedback.name}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">
                          {formatDate(feedback.created_at)}
                        </span>
                      </div>
                      <p className="font-body1-regular text-body1">
                        {feedback.feedback}
                      </p>
                    </div>
                  ))}
              </div>

              {/* Student Feedback Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-extrabold">Student Feedback</h3>
                {feedbacks
                  .filter((f) => !f.is_teacher)
                  .map((feedback) => (
                    <div key={feedback.id} className="pb-8 rounded">
                      <div className="flex items-center justify-between mb-2 gap-4 font-body1-regular text-body1">
                        <div className="flex items-center gap-4">
                          <Image
                            className="object-cover rounded-full cursor-pointer"
                            alt="User Avatar"
                            src="/login/avatarIcon.svg"
                            width={48}
                            height={48}
                          />

                          <span className="font-body1-regular text-body1">
                            {feedback.name}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">
                          {formatDate(feedback.created_at)}
                        </span>
                      </div>
                      <p className="font-body1-regular text-body1">
                        {feedback.feedback}
                      </p>
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
          <div className="flex justify-center items-center mt-[104px] py-6">
            <Button variant="proceed" onClick={handleSubmitAndCompleteSprint} disabled={isButtonDisabled}>
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
