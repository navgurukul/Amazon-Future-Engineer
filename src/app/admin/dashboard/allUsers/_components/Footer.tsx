import CancelPopup from "./CancelPopup";
import { Button } from "@/components/ui/button";
import { updateBookingStatus, updateBookingStatusAllUsers } from "@/utils/api";
import { useEffect, useState } from "react";
import ReschedulePopup from "./ReschedulePopup";
import SubmitPopup from "../../upcomingBookings/_components/SubmitPopup";
import { useToast } from "@/hooks/use-toast"


interface FooterProps {
  programName: string;
  bookingId: string;
  onSubmitClick: () => void; // Add onSubmitClick to the interface
}
interface PopupState {
  isCancel: boolean;
  isReschedule: boolean;
  isNotInterested: boolean;
  isUpdate: boolean;
  isConfirm: boolean;
}

export default function Footer({ programName, bookingId, onSubmitClick }: FooterProps){
  const { toast } = useToast()
  const [isCancelPopupOpen, setIsCancelPopupOpen] = useState<boolean>(false);
  const [popup,setPopup] = useState<PopupState>({
    isCancel:false,
    isReschedule:false,
    isNotInterested:false,
    isUpdate:false,
    isConfirm:false
  })

// Function to handle popup toggle based on id
const handlePopup = (id: string) => {
  console.log("id",id)
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
   
  useEffect (()=>{
    if (popup.isUpdate) {
      toast({
        title: "Sprint Booking Details Updated Successfully!",
        description: "",
        duration: 3000,
      })

    }
  },[popup.isUpdate])

  useEffect(()=>{
    if (popup.isConfirm){
      onSubmitClick("true")
    }
    console.log("Hello")
  },[popup.isConfirm ===true ])
  


  const [loading, setLoading] = useState(false); // State to handle button loading
  const handleStatusChange = async (
    status:
      | "Confirmed"
      | "Waiting"
      | "Cancelled"
      | "Disinterested"
      | "Completed"
    // queryType: "Booking" | "Reschedule",
    // cancellationReason?: string
  ) => {
    setLoading(true);
    try {
      console.log(
        // `Making API call with status: ${status}, queryType: ${queryType}, reason: ${cancellationReason}`
        `Making API call with status: ${status}`
      );
      const response = await updateBookingStatus(
        bookingId,
        status
        // queryType,
        // cancellationReason
      );
      alert(`Status updated to ${status}`);
    } catch (error) {
      console.error("Error making API request:", error);
      alert(`Error updating statuhandlePopups: ${error.message || "Unknown error"}`);
    } finally {
      setLoading(false);
    }
  };

  function setIsSubmitPopupOpen(arg0: boolean): void {
    throw new Error("Function not implemented.");
  }


  return (
    <>
    {
      popup.isConfirm ? (<SubmitPopup 
        isOpen={popup.isConfirm}
        type = "Rahul Prakash"
        onClose={() => setIsSubmitPopupOpen(false)}
        bookingData={{
          name:"",
          date:"",
          time:"",
          students: "",
        }}  />):(
    
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
                  disabled={loading}
                  onClick={() => handlePopup("isCancel")}
                >
                  Cancel Sprint
                </Button>
                <Button
                  className="h-14 px-8 border rounded-full text-[#3A3A3A] border-[#3A3A3A] bg-white hover:text-white"
                  aria-label="Mark as Not Interested"
                  disabled={loading}
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
                disabled={loading}
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
                  disabled={loading}
                  onClick={() => handlePopup("isUpdate")}
                >
                  Update Sprint Details
                </Button>
                <Button
                  variant="proceed"
                  className="h-14 px-8 bg-gray-400 text-white rounded-full hover:bg-gray-500"
                  aria-label="Reschedule Sprint"
                  disabled={loading}
                  onClick={() => handlePopup("isReschedule")}
                  
                >
                  Reschedule Sprint
                </Button>
                <Button
                  variant="proceed"
                  className="h-14 px-8 bg-[#F55C38] text-white rounded-full"
                  aria-label="Confirm Booking"
                  disabled={loading}
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
                  disabled={loading}
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
            {popup.isCancel &&  <CancelPopup name="cancel" isOpen={popup.isCancel} onClose={closeCancelPopup} />}
            {popup.isReschedule && <ReschedulePopup isOpen = {popup.isReschedule} onClose={closeCancelPopup}/>}
            {popup.isNotInterested &&  <CancelPopup  name="interested" isOpen={popup.isNotInterested} onClose={closeCancelPopup} />}
      
    </footer>)}</>
  );
}
