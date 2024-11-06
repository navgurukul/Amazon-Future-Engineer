import SubmitPopup from "../../upcomingBookings/_components/SubmitPopup";
import CancelPopup from "./CancelPopup";
import ReschedulePopup from "./ReschedulePopup";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  queryBookingStatus,
  updateBookingStatus,
  updateBookingStatusAllUsers,
  updateBookingDetails
} from "@/utils/api";
import { useEffect, useState } from "react";

interface BookingDetails {
  name: string;
  email: string | any;
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
  bookingProp: Booking;
}
interface PopupState {
  isCancel: boolean;
  isReschedule: boolean;
  isNotInterested: boolean;
  isUpdate: boolean;
  isConfirm: boolean;
}


interface Booking {
  user_id(user_id: any): unknown;
  slot_id(slot_id: any): unknown;
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
      pin_code: any;
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

export default function Footer({
  handleCalendar,
  programName,
  bookingId,
  onSubmitClick,
  bookings,
  bookingSingle,
  status,
  slotId,
  bookingProp
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

  const validateBookingDetails = (): boolean => {
    console.log("raj",bookings)
    const requiredFields = [
      { 
        field: bookings.name, 
        name: 'Name',
        message: 'Please enter the name'
      },
      { 
        field: bookings.email, 
        name: 'Email',
        message: 'Please provide a valid email address'
      },
      { 
        field: bookings.phoneNumber, 
        name: 'Phone Number',
        message: 'Please enter a contact phone number'
      },
      { 
        field: bookings.schoolName, 
        name: 'School Name',
        message: 'Please enter school name'
      },
      // { 
      //   field: bookings.udiseCode, 
      //   name: 'UDISE Code',
      //   message: 'Please enter the school UDISE code'
      // },
      { 
        field: bookings.city, 
        name: 'City',
        message: 'Please enter city'
      },
      // { 
      //   field: bookings.pincode, 
      //   name: 'Pincode',
      //   message: 'Please enter your area pincode'
      // },
      { 
        field: bookings.grade, 
        name: 'Grade',
        message: 'Please select the grade/class'
      },
      { 
        field: bookings.numberOfStudents, 
        name: 'Number of Students',
        message: 'Please enter the number of students'
      },
      { 
        field: bookings.slot, 
        name: 'Slot',
        message: 'Please select a time slot for the session'
      }
    ];

    console.log("raj",requiredFields)
  
    const emptyField = requiredFields.find(
      ({ field }) => !field || field === '-' || field === ''
    );
  
    if (emptyField) {
      toast({
        title: "Required Field",
        description: emptyField.message,
        duration: 3000,
        variant: "error"
      });
      return false;
    }
  
    return true;
  };


  // Modified handlePopup to include validation
  const handlePopup = (id: string) => {
    if ((id === 'isUpdate' || id === 'isConfirm') && !validateBookingDetails()) {
      return;
    }

    setPopup((prevPopup) => {
      switch (id) {
        case "isCancel":
          return { ...prevPopup, isCancel: !prevPopup.isCancel };
        case "isReschedule":
          return { ...prevPopup, isReschedule: !prevPopup.isReschedule };
        case "isNotInterested":
          return { ...prevPopup, isNotInterested: !prevPopup.isNotInterested };
        case "isUpdate":
          return { ...prevPopup, isUpdate: !prevPopup.isUpdate };
        case "isConfirm":
          return { ...prevPopup, isConfirm: !prevPopup.isConfirm };
        default:
          return prevPopup;
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

  const handleNotInterestedStatus = async (status:string) => {
    try {
      const reason1 = await queryBookingStatus(bookings.name,1, 2, status); //needs to be chanage it dynamic
      window.location.reload()
    } catch (error) {
      console.error("Error updating booking status:", error);
    }
  };


  // Save changes to booking details
  const hadleIsUpdate = async () => {
    try {
      const bookingData = {
        user_id: Number(bookingProp.user_id),
        slot_id: Number(bookingProp.slot_id),
        booking_batch_size: Number(bookings.numberOfStudents),
        visited_batch_size: 0,
        students_grade: bookings.grade,
        visiting_time: new Date().toISOString(),
        school_name: String(bookings.schoolName),
        udise: bookings.udiseCode,
        email: bookings.email,
        address: bookings.city,
        village: bookings.city,
        state: "Karnataka",
        district: bookings.city,
        pin_code: parseInt(bookings.pincode, 10),
      };
      await updateBookingDetails(bookingProp.id, bookingData);
      window.location.reload()
    } catch (error) {
      console.error("Error updating booking details:", error);
    }
  };

  const updateStatus = async (status:string) => {
    await updateBookingStatus(
      Number(bookingId),
      status,
    );
  }

  useEffect(() => {
    if (popup.isUpdate) {
      if (status === "BookingConfirmed"){
        hadleIsUpdate()
        updateStatus("BookingConfirmed")
      }
      else{
        hadleIsUpdate()
        // handleNotInterestedStatus("AwaitingInfo")
      }
    }
    if (popup.isNotInterested) {
      handleNotInterestedStatus("NotInterested");
      toast({
        title: "User is marked as not intersted",
        description: "",
        duration: 3000,
      });
    }
  }, [popup.isUpdate, toast, popup.isNotInterested]);



  useEffect(() => {
    if (popup.isConfirm) {
      hadleIsUpdate();
      updateStatus("BookingConfirmed")
      onSubmitClick("true");
    }
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
                {(programName === "Nano Sprint" || programName === "-") && (
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
                {(programName === "Nano Sprint" || programName === "-") && (
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
          {/* Popups */}
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
              slotId={slotId}
              bookingId={bookingId}
              bookings={bookings}
            />
          )}
        </footer>
      )}
    </>
  );
}