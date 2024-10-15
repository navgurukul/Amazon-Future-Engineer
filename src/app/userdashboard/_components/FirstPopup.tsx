import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import type { NextPage } from 'next';
import Image from "next/image";
import React from 'react';


// Define EventData type
interface EventData {
  booking_for: string;         // Alternatively, you could use Date if you are handling it that way
  start_time: string;
  end_time: string;
  booking_batch_size: number;
}

interface FirstPopupProps {
  isOpen: boolean;
  handleClose: () => void;
  handleOpenSecondPopup: () => void;
  userData: EventData | null;  // Accept userData as a prop, nullable if no data is available
}

const FirstPopup: NextPage<FirstPopupProps> = ({
  isOpen,
  handleClose,
  handleOpenSecondPopup,
  userData,
}) => {
  if (!userData) return null; // Don't render if no data is available

  const formattedDate = new Date(userData.booking_for).toLocaleDateString();
  const startTime = userData.start_time;
  const endTime = userData.end_time;
  const studentsCount = userData.booking_batch_size;

  return (
    //     <Dialog open={isOpen} onOpenChange={handleClose}>
    //   <DialogContent className="bg-white w-full fixed md:top-[50%] md:bottom-auto md:max-w-lg md:h-auto p-4 md:p-6">
    //     <DialogHeader>
    //       <DialogTitle>
    //         <div className="text-[#3a3a3a] text-xl md:text-2xl font-extrabold leading-7 md:leading-9 text-left">
    //           Reschedule Nano Sprint
    //         </div>
    //       </DialogTitle>
    //     </DialogHeader>

    //     <div className="text-[#3a3a3a] text-lg md:text-xl font-bold leading-6 md:leading-8">
    //       Current Booking Details
    //     </div>

    //     <DialogDescription className="text-gray-600">
    //       <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:items-baseline">
    //         <div className="flex items-center space-x-3">
    //           <Image
    //             className="w-6 h-6 md:w-8 md:h-8"
    //             alt="calendar icon"
    //             src="/userDashboard/reshot-icon-calendar-U75ASPNFXK.svg"
    //             width={24}
    //             height={24}
    //           />
    //           <div className="text-[#3a3a3a] text-base md:text-lg font-medium">
    //             {formattedDate}
    //           </div>
    //         </div>

    //         <div className="flex items-center space-x-3">
    //           <Image
    //             className="w-6 h-6 md:w-8 md:h-8"
    //             alt="time icon"
    //             src="/userDashboard/reshot-icon-time-SRKEMN64PU.svg"
    //             width={24}
    //             height={24}
    //           />
    //           <div className="text-[#3a3a3a] text-base md:text-lg font-medium">
    //             {`${startTime} to ${endTime}`}
    //           </div>
    //         </div>

    //         <div className="flex items-center space-x-3">
    //           <Image
    //             className="w-6 h-6 md:w-8 md:h-8"
    //             alt="students icon"
    //             src="/userDashboard/reshot-icon-student-DRC3YF56MU.svg"
    //             width={24}
    //             height={24}
    //           />
    //           <div className="text-[#3a3a3a] text-base md:text-lg font-medium">
    //             {`${studentsCount} Students`}
    //           </div>
    //         </div>
    //       </div>

    //       <div className="text-[#3a3a3a] text-sm md:text-base font-medium leading-6 md:leading-7 mt-8">
    //         We recommend to reschedule only in cases of emergencies. Please confirm if you would like to proceed.
    //       </div>
    //     </DialogDescription>

    //     <DialogFooter className="mt-4 md:mt-6 flex flex-col md:flex-row md:justify-end space-y-2 md:space-y-0 md:space-x-4">
    //       <div className="mt-2 flex flex-col md:flex-row md:justify-end space-y-2 md:space-y-0 md:space-x-4">
    //         <div
    //           className="hidden md:flex px-6 py-2 rounded-full border border-[#3a3a3a] justify-center items-center cursor-pointer"
    //           onClick={handleClose}
    //         >
    //           <div className="text-center text-[#3a3a3a] text-base md:text-lg font-medium">
    //             Cancel
    //           </div>
    //         </div>

    //         <div
    //           className="w-full md:w-auto h-12 px-6 py-2 bg-[#f55c38] rounded-full justify-center items-center flex cursor-pointer"
    //           onClick={handleOpenSecondPopup}
    //         >
    //           <div className="text-center text-white text-base md:text-lg font-medium">
    //             Request Reschedule
    //           </div>
    //         </div>
    //       </div>
    //     </DialogFooter>
    //   </DialogContent>
    // </Dialog>
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end  md:items-center justify-center bg-black bg-opacity-50 ">
          {/* Modal Content */}
          <div className="bg-white w-[592px]  md:p-8 py-6 px-4  md:h-auto rounded-t-lg md:rounded-lg shadow-lg relative">

            {/* "X" Button to Close the Popup */}
            {/* <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none"
              onClick={handleClose}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button> */}

            {/* Header */}
            {/* <div className="text-[#3a3a3a] text-xl md:text-heading6 font-heading6-bold leading-7 md:leading-[150%] text-left mb-4">
              Reschedule Nano Sprint
            </div> */}

            <div className="flex justify-between items-center">
              <h2 className="text-[#3a3a3a] sm:text-subHeading1 font-[Amazon Ember Display] md:text-heading6 font-heading6-bold leading-[150%] mb-4">
                Reschedule Nano Sprint
              </h2>
              <button
                onClick={handleClose}
                className="text-[#949494] text-lg font-bold justify-center w-6 h-6 mb-2 "
              >
                X
              </button>
            </div>

            {/* Current Booking Details */}
            {/* <div className="text-[#3A3A3A] text-lg md:subTitle1 md:font-subTitle1-bold leading-6 md:leading-[170%] mt-4">
        Current Booking Details
      </div> */}
            <div className="text-[#3a3a3a] md:subTitle1 md:font-subTitle1-bold md:leading-[170%] text-lg font-bold mb-4">
              Current Booking Details
            </div>

            {/* Booking Info */}
            <div className="text-gray-600">
              <div className="flex flex-col space-y-4 gap-8 md:flex-row md:space-x-4 md:items-baseline justify-start">
                <div className="flex items-center gap-3 mt-4 md:mt-0">
                  <Image className="w-6 h-6 md:w-8 md:h-8" alt="calendar icon" src="/userDashboard/reshot-icon-calendar-U75ASPNFXK.svg" width={24} height={24} />
                  <div className="text-[#3a3a3a] whitespace-nowrap text-base md:text-button1 font-button1-bold md:leading-[170%]">
                    {formattedDate}
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-4 md:mt-0">
                  <Image className="w-6 h-6 md:w-8 md:h-8" alt="time icon" src="/userDashboard/reshot-icon-time-SRKEMN64PU.svg" width={24} height={24} />
                  <div className="text-[#3a3a3a] whitespace-nowrap text-base md:text-button1 font-button1-bold md:leading-[170%]">
                    {`${startTime} to ${endTime}`}
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-4 md:mt-0">
                  <Image className="w-6 h-6 md:w-8 md:h-8" alt="students icon" src="/userDashboard/reshot-icon-student-DRC3YF56MU.svg" width={24} height={24} />
                  <div className="text-[#3a3a3a] whitespace-nowrap text-base md:text-button1 font-button1-bold md:leading-[170%]">
                    {`${studentsCount} Students`}
                  </div>
                </div>
              </div>             
              <div className="text-[#3a3a3a] text-bodyM md:body1 font-body1-regular md:leading-[170%] leading-6  mt-8">
                We recommend to reschedule only in cases of emergencies. Please confirm if you would like to proceed.
              </div>
            </div>

            {/* Footer with buttons */}
            <div className="mt-8 md:mt-8 flex flex-col md:flex-row md:justify-end space-y-2 md:space-y-0 md:space-x-4">

              {/* Cancel button hidden on small screens */}
              <div className="hidden md:flex px-8 py-2 rounded-full border border-[#3a3a3a] justify-center items-center cursor-pointer" onClick={handleClose}>
                <div className="text-center text-[#3a3a3a] text-base md:text-lg font-medium">
                  Cancel
                </div>
              </div>

              {/* Request Reschedule button (full width for small screens) */}
              <div className="w-full md:w-auto h-12 px-6 py-2 bg-[#f55c38] rounded-full justify-center items-center flex cursor-pointer md:py-2 md:px-8" onClick={handleOpenSecondPopup}>
                <div className="text-center text-white text-base md:text-lg font-medium">
                  Request Reschedule
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