import SubmitPopup from "../../upcomingBookings/_components/SubmitPopup";
import CancelPopup from "./CancelPopup";
import ReschedulePopup from "./ReschedulePopup";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  quesryBookingStatus,
  updateBookingStatus,
  updateBookingStatusAllUsers,
} from "@/utils/api";
import { useEffect, useState } from "react";

interface BookingDetails {
  name: string;
  email: string | null;
  phoneNumber: string;
  dateofRequest: string;
  programName: string;
  schoolName: string | number; // Adjust based on your data
  udiseCode: string;
  city: string;
  pincode: string;
  grade: string;
  numberOfStudents: number;
  slot: string;
}

interface FooterProps {
  programName: string;
  bookingId: number;
  onSubmitClick: (message: string) => void;
  handleCalendar: () => void;
  bookingSingle: {
    id: number;
    status: string;
    start_time: string;
    end_time: string;
    booking_for: string;
    // Add any other fields you need from bookingSingle
  };
  bookings: BookingDetails;
  status: string;
  slotId: number;
}
interface PopupState {
  isCancel: boolean;
  isReschedule: boolean;
  isNotInterested: boolean;
  isUpdate: boolean;
  isConfirm: boolean;
}

export default function Footer({
  handleCalendar,
  programName,
  bookingId,
  onSubmitClick,
  bookings,
  bookingSingle,
  status,
  slotId,
}: FooterProps) {
  const { toast } = useToast();
  const [isCancelPopupOpen, setIsCancelPopupOpen] = useState<boolean>(false);
  const [popup, setPopup] = useState<PopupState>({
    isCancel: false,
    isReschedule: false,
    isNotInterested: false,
    isUpdate: false,
    isConfirm: false,
  });



  // Logic for disabling/enabling buttons based on status
  const disableAllButtons =
    status === "Completed" ||
    status === "Cancelled" ||
    status === "NotInterested";
  const enableAllButtons =
    status === "RequestedReschedule" || status === "BookingConfirmed";
  const disableRescheduleOnly = !disableAllButtons && !enableAllButtons;

  console.log("bookingDetails", slotId);
  useEffect(() => {
    if (slotId !== 0) {
      setPopup((prev) => {
        return {
          ...prev,
          isReschedule: true,
        };
      });
    }
  }, [slotId]);

  // Function to handle popup toggle based on id
  const handlePopup = (id: string) => {
    setPopup((prevPopup) => {
      switch (id) {
        case "isCancel":
          return {
            ...prevPopup,
            isCancel: !prevPopup.isCancel,
          };
        case "isReschedule":
          return {
            ...prevPopup,
            isReschedule: !prevPopup.isReschedule,
          };
        case "isNotInterested":
          return {
            ...prevPopup,
            isNotInterested: !prevPopup.isNotInterested,
          };
        case "isUpdate":
          return {
            ...prevPopup,
            isUpdate: !prevPopup.isUpdate,
          };
        case "isConfirm":
          return {
            ...prevPopup,
            isConfirm: !prevPopup.isConfirm,
          };
        default:
          return prevPopup; // If the id doesn't match any case, return the previous state
      }
    });
  };

  const handleCancelClick = () => {
    setIsCancelPopupOpen(true);
  };
  const closeCancelPopup = () => {
    setPopup({
      isCancel: false,
      isReschedule: false,
      isNotInterested: false,
      isUpdate: false,
      isConfirm: false,
    });
  };

  const handleNotInterestedStatus = async () => {
    try {
      const reason1 = await quesryBookingStatus(1, 2, "NotInterested"); //needs to be chanage it dynamic
      console.log(reason1);
    } catch (error) {
      console.error("Error updating booking status:", error);
    }
  };

  useEffect(() => {
    if (popup.isUpdate) {
      toast({
        title: "Sprint Booking Details Updated Successfully!",
        description: "",
        duration: 3000,
      });
    }
    if (popup.isNotInterested) {
      handleNotInterestedStatus();
      toast({
        title: "User is marked as not intersted",
        description: "",
        duration: 3000,
      });
    }
  }, [popup.isUpdate, toast, popup.isNotInterested]);

  useEffect(() => {
    if (popup.isConfirm) {
      onSubmitClick("true");
    }
    console.log("Hello");
  }, [onSubmitClick, popup.isConfirm]);

  const [loading, setLoading] = useState(false); // State to handle button loading

  function setIsSubmitPopupOpen(arg0: boolean): void {
    throw new Error("Function not implemented.");
  }
  const parseSlot = (slot: string) => {
    const [datePart, timePart] = slot.split(" | ");
    return { date: datePart, time: timePart };
  };

  return (
    <>
      {popup.isConfirm ? (
        <SubmitPopup
          isOpen={popup.isConfirm}
          type="Rahul Prakash"
          onClose={() => setIsSubmitPopupOpen(false)}
          bookingData={{
            name: bookings.name,
            date: parseSlot(bookings.slot).date,
            time: parseSlot(bookings.slot).time,
            students: bookings.numberOfStudents,
          }}
        />
      ) : (
        <footer className="z-50 w-full shadow-[0px_-2px_2px_rgba(0,0,0,0.04),0px_-1px_5px_rgba(0,0,0,0.08)] bg-white p-6 text-center text-lg text-gray-800 font-amazon-ember">
          <div className="flex flex-row items-center justify-between">
            <nav
              aria-label="Sprint actions"
              className="flex flex-row items-start justify-between w-full"
            >
              <div className="flex gap-4">
                {(programName === "Nano Sprint" || programName === "") && (
                  <>
                    <Button
                      className="h-14 px-8 border rounded-full text-[#3A3A3A] border-[#3A3A3A] bg-white hover:text-white"
                      aria-label="Cancel Sprint"
                      disabled={disableAllButtons || loading}
                      onClick={() => handlePopup("isCancel")}
                    >
                      Cancel Sprint
                    </Button>
                    <Button
                      className="h-14 px-8 border rounded-full text-[#3A3A3A] border-[#3A3A3A] bg-white hover:text-white"
                      aria-label="Mark as Not Interested"
                      disabled={disableAllButtons || loading}
                      onClick={() => handlePopup("isNotInterested")}
                    >
                      Mark as Not Interested
                    </Button>
                  </>
                )}
                {(programName === "Mini Sprint" ||
                  programName === "Mega Sprint") && (
                  <Button
                    className="h-14 px-8 border rounded-full text-[#3A3A3A] border-[#3A3A3A] bg-white hover:text-white"
                    aria-label="Mark as Not Interested"
                    disabled={disableAllButtons || loading}
                    onClick={() => handlePopup("isNotInterested")}
                  >
                    Mark as Not Interested
                  </Button>
                )}
              </div>
              <div className="flex gap-4">
                {(programName === "Nano Sprint" || programName === "") && (
                  <>
                    <Button
                      variant="proceed"
                      className="h-14 px-8 bg-[#29458C] text-white rounded-full hover:bg-[#0A2A52]"
                      aria-label="Update Sprint Details"
                      disabled={disableAllButtons || loading}
                      onClick={() => handlePopup("isUpdate")}
                    >
                      Update Sprint Details
                    </Button>
                    <Button
                      variant="proceed"
                      className="h-14 px-8 bg- text-white rounded-full bg-[#f091b2] hover:bg-[#c06e8d]"
                      aria-label="Reschedule Sprint"
                      disabled={
                        disableRescheduleOnly || disableAllButtons || loading
                      }
                      onClick={() => handlePopup("isReschedule")}
                    >
                      Reschedule Sprint
                    </Button>
                    <Button
                      variant="proceed"
                      className="h-14 px-8 bg-[#F55C38] text-white rounded-full"
                      aria-label="Confirm Booking"
                      disabled={disableAllButtons || loading}
                      onClick={() => handlePopup("isConfirm")}
                    >
                      Confirm Booking
                    </Button>
                  </>
                )}
                {(programName === "Mini Sprint" ||
                  programName === "Mega Sprint") && (
                  <>
                    <Button
                      variant="proceed"
                      className="h-14 px-8 bg-blue-800 text-white rounded-full hover:bg-blue-900"
                      aria-label="Update Sprint Details"
                      disabled={disableRescheduleOnly || loading}
                      onClick={() => handlePopup("isConfirm")}
                    >
                      Update Sprint Details
                    </Button>
                    <Button
                      variant="proceed"
                      className="h-14 px-8 bg-[#F55C38] text-white rounded-full"
                      aria-label="Go to Dashboard"
                      // onClick={() => handleStatusChange('Completed', 'Booking')}
                    >
                      Go to Dashboard
                    </Button>
                  </>
                )}
              </div>
            </nav>
          </div>
          {/* Conditionally rendering the popups */}
          {popup.isCancel && (
            <CancelPopup
              name="cancel"
              bookingSingle={bookingSingle}
              isOpen={popup.isCancel}
              onClose={closeCancelPopup}
            />
          )}
          {popup.isReschedule && (
            <ReschedulePopup
              handleCalendar={handleCalendar}
              isOpen={popup.isReschedule}
              onClose={closeCancelPopup}
              slotId = {slotId}
              bookingId = { bookingId}
              bookings = {bookings}
            />
          )}
          {/* {popup.isNotInterested &&  <CancelPopup  name="interested" isOpen={popup.isNotInterested} onClose={closeCancelPopup}  bookingSingle={bookingSingle}/>}  */}
        </footer>
      )}
    </>
  );
}
