import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import type { NextPage } from 'next';
import React from 'react';
import { useAppState } from "@/context/AppContext";
import { updateBookingStatus } from "@/utils/api";
import { rescheduleBooking } from "@/utils/api";
import SmartImage from "@/components/SmartImage";;


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
  userData: EventData | any;
}

const FirstPopup: NextPage<FirstPopupProps> = ({
  isOpen,
  handleClose,
  handleOpenSecondPopup,
  userData,
}) => {
  const { isLanguageEnglish } = useAppState(); // Get language state from context

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
                {/* Reschedule Nano Sprint */}
                <span>
                  {isLanguageEnglish ? "Reschedule Nano Sprint" : "ನಾನು ನಾನೋ ಸ್ಪ್ರಿಂಟ್ ಪುನಃ ಶೆಡ್ಯೂಲ್ ಮಾಡಿರಿ"}
                </span>
              </div>
              <button className="text-gray-400 hover:text-gray-600 focus:outline-none" onClick={handleClose}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Current Booking Details */}
            <div className="text-[#3a3a3a] text-bodyM2 md:text-subTitle1 leading-[170%] mt-4 font-['Amazon Ember']">
              {isLanguageEnglish
                ? "Current Booking Details"
                : "ಈಗಿನ ಬುಕಿಂಗ್ ವಿವರಗಳು"}
            </div>

            {/* Booking Info */}
            <div className="text-gray-600">
              {/* <div className="flex flex-col space-y-4 md:flex-row md:space-x-24 md:items-baseline"> */}
              <div className="flex flex-col md:flex-row mt-4 gap-4 md:gap-8">
                <div className="flex items-center space-x-3">
                  <SmartImage className="w-6 h-6 md:w-8 md:h-8" alt="calendar icon" src="/userDashboard/reshot-icon-calendar-U75ASPNFXK.svg" width={24} height={24} />
                  <div className="text-[#3a3a3a] text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember']">
                    {formattedDate}
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <SmartImage className="w-6 h-6 md:w-8 md:h-8" alt="time icon" src="/userDashboard/reshot-icon-time-SRKEMN64PU.svg" width={24} height={24} />
                  <div className="text-[#3a3a3a] text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember']">
                    {`${startTime} to ${endTime}`}
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <SmartImage className="w-6 h-6 md:w-8 md:h-8" alt="students icon" src="/userDashboard/reshot-icon-student-DRC3YF56MU.svg" width={24} height={24} />
                  <div className="text-[#3a3a3a] text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember']">
                    {`${studentsCount} Students`}
                  </div>
                </div>
              </div>

              {/* Reschedule Confirmation */}
              <div className="text-[#3a3a3a] text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] mt-6 md:mt-8">
                {/* We recommend rescheduling only in cases of emergencies.{` `}  */}
                {isLanguageEnglish
                  ? "We recommend rescheduling only in cases of emergencies."
                  : "ತುರ್ತು ಸಂದರ್ಭಗಳಲ್ಲಿ ಮಾತ್ರ ರೀಶೆಡ್ಯುಲ್ ಮಾಡಲು ನಾವು ಶಿಫಾರಸು ಮಾಡುತ್ತೇವೆ."}

                <span className="md:block">
                  {/* Please confirm if you would like to proceed. ನೀವು ಮುಂದುವರಿಯಲು ಬಯಸುತ್ತೀರಾ ಎನ್ನುವುದನ್ನು ದಯವಿಟ್ಟು ತಿಳಿಸಿ. */}
                  {isLanguageEnglish
                    ? "Please confirm if you would like to proceed."
                    : "ನೀವು ಮುಂದುವರಿಯಲು ಬಯಸುತ್ತೀರಾ ಎನ್ನುವುದನ್ನು ದಯವಿಟ್ಟು ತಿಳಿಸಿ."}
                </span>
              </div>
            </div>

            {/* Footer with buttons */}
            {/* <div className="mt-6 md:mt-8 flex flex-col md:flex-row md:justify-end space-y-2 md:space-y-0 md:space-x-4"> */}
            <div className="mt-6 md:mt-8 flex flex-col md:flex-row md:justify-end gap-4">

              {/* Cancel button hidden on small screens */}
              <div className="hidden md:flex px-8 py-2 rounded-full border border-[#3a3a3a] justify-center items-center cursor-pointer" onClick={handleClose}>
                <div className="text-center text-[#3a3a3a] text-base md:text-lg font-medium">
                  {/* Cancel */}
                  <span>
                    {isLanguageEnglish ? "Cancel" : "ನಿಲ್ಲಿಸಿ"}
                  </span>
                </div>
              </div>

              {/* Request Reschedule button (full width for small screens) */}
              <div className="w-full md:w-auto h-14 px-8 py-2 bg-[#f55c38] rounded-full justify-center items-center flex cursor-pointer" onClick={handleOpenSecondPopup}>
                <div className="text-center text-white text-base md:text-lg font-medium">
                  {/* Request Reschedule */}
                  <span>
                    {isLanguageEnglish ? "Request Reschedule" : "ಪುನಃ ಶೆಡ್ಯೂಲ್ ಮಾಡುವಂತೆ ಕೇಳಿ"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FirstPopup;