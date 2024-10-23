import { updateBookingStatus } from "@/utils/api";
import { rescheduleBooking } from "@/utils/api";
import { NextPage } from "next";
import Image from "next/image";


interface EventData {
  id: number;
  booking_for: string;
  start_time: string;
  end_time: string;
  booking_batch_size: number;
}

interface FirstPopupProps {
    isOpen: boolean;
    handleClose: () => void;
    handleOpenSecondPopup: () => void;
    userData: EventData | null;
}

const FirstPopup: NextPage<FirstPopupProps> = ({
  isOpen,
  handleClose,
  handleOpenSecondPopup,
  userData,
}) => {
  if (!userData) return null;

  const { id } = userData;

  const formattedDate = new Date(userData.booking_for).toLocaleDateString();
  const startTime = userData.start_time;
  const endTime = userData.end_time;
  const studentsCount = userData.booking_batch_size;

  // Function to handle reschedule click
  const handleRequestReschedule = async () => {
    try {
      if (userData) {
        console.log("Userdata", userData); // Add this to check if the function is triggered
        const { id } = userData;

        if (typeof id === "number") {
          await updateBookingStatus(id, "RequestedReschedule");
          handleOpenSecondPopup();
        } else {
          console.error("Booking ID is not a valid number:", id);
        }
      }
    } catch (error) {
      console.error("Error requesting reschedule:", error);
    }
  };


  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black bg-opacity-70">
          <div className="bg-white max-w-auto px-4 py-6 md:p-8 md:h-auto rounded-t-lg md:rounded-lg shadow-lg relative">

            <div className="flex justify-between items-center">
              <div className="text-[#3a3a3a] text-subHeading1 md:text-heading6 font-['Amazon Ember Display'] leading-[150%] text-left">
                Reschedule Nano Sprint
              </div>
              <button className="text-gray-400 hover:text-gray-600 focus:outline-none" onClick={handleClose}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="text-[#3a3a3a] text-bodyM2 md:text-subTitle1 leading-[170%] mt-4 font-['Amazon Ember']">
              Current Booking Details
            </div>
            <div className="text-gray-600">
              <div className="flex flex-col md:flex-row mt-4 gap-4 md:gap-8">
                <div className="flex items-center space-x-3">
                  <Image className="w-6 h-6 md:w-8 md:h-8" alt="calendar icon" src="/userDashboard/reshot-icon-calendar-U75ASPNFXK.svg" width={24} height={24} />
                  <div className="text-[#3a3a3a] text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember']">
                    {formattedDate}
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Image className="w-6 h-6 md:w-8 md:h-8" alt="time icon" src="/userDashboard/reshot-icon-time-SRKEMN64PU.svg" width={24} height={24} />
                  <div className="text-[#3a3a3a] text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember']">
                    {`${startTime} to ${endTime}`}
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Image className="w-6 h-6 md:w-8 md:h-8" alt="students icon" src="/userDashboard/reshot-icon-student-DRC3YF56MU.svg" width={24} height={24} />
                  <div className="text-[#3a3a3a] text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember']">
                    {`${studentsCount} Students`}
                  </div>
                </div>
              </div>
              <div className="text-[#3a3a3a] text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] mt-6 md:mt-8">
                We recommend rescheduling only in cases of emergencies. Please confirm if you would like to proceed.
              </div>
            </div>

            <div className="mt-6 md:mt-8 flex flex-col md:flex-row md:justify-end gap-4">
              <div className="hidden md:flex px-8 py-2 rounded-full border border-[#3a3a3a] justify-center items-center cursor-pointer" onClick={handleClose}>
                <div className="text-center text-[#3a3a3a] text-base md:text-lg font-medium">Cancel</div>
              </div>
              <div className="w-full md:w-auto h-14 px-8 py-2 bg-[#f55c38] rounded-full justify-center items-center flex cursor-pointer" onClick={handleRequestReschedule}>
                <div className="text-center text-white text-base md:text-lg font-medium">Request Reschedule</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FirstPopup;