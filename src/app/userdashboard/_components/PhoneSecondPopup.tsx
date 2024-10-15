import type { NextPage } from 'next';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";

// Define the EventData type to match your booking data structure
interface EventData {
    booking_for: string; // Date of booking
    start_time: string;  // Start time of the booking
    end_time: string;    // End time of the booking
    booking_batch_size: number; // Number of students
}

interface SecondPopupProps {
    isOpen: boolean;
    handleClose: () => void;
    userData: EventData | null;  // The booking details, or null if no data
}

const PhoneSecondPopup: NextPage<SecondPopupProps> = ({ isOpen, handleClose, userData }) => {
    if (!userData) return null;  // If no data is available, do not render the popup

    // Formatting the date (assuming `booking_for` is a date string)
    const formattedDate = new Date(userData.booking_for).toLocaleDateString();
    const startTime = userData.start_time;
    const endTime = userData.end_time;
    const studentsCount = userData.booking_batch_size;

    const whatsappLink = `https://wa.me/${6366969292}`;

    return (
        <>
            {/* <Dialog open={isOpen} onOpenChange={handleClose}>
                <DialogContent className="sm:fixed top-[70%] md:top-[50%] w-full max-w-[592px] h-auto p-8 bg-white rounded-lg shadow-lg gap-2">
                    <DialogHeader>
                        <DialogTitle>
                            <div className="text-[#3a3a3a] text-xl sm:text-2xl font-extrabold text-heading5 font-heading5-bold leading-7 sm:leading-9 text-left whitespace-nowrap">
                                Reschedule Nano Sprint
                            </div>
                        </DialogTitle>
                    </DialogHeader>
                    <DialogDescription>
                        <div className="text-[#3a3a3a] text-subTitle1 font-subTitle1-bold leading-6 sm:leading-[30.60px] mb-4">
                            Current Booking Details
                        </div>
                        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                            <div className="flex items-center space-x-[12px]">
                                <Image
                                    className="w-8 h-8 relative"
                                    alt="calendar icon"
                                    src="/userDashboard/reshot-icon-calendar-U75ASPNFXK.svg"
                                    width={20}
                                    height={20}
                                />
                                <div className="text-[#3a3a3a] text-lg font-medium font-['Amazon Ember'] leading-[30.60px] gap-[2rem]">
                                    {formattedDate}
                                </div>
                            </div>

                            <div className="flex items-center space-x-[12px]">
                                <Image
                                    className="w-8 h-8 relative"
                                    alt="time icon"
                                    src="/userDashboard/reshot-icon-time-SRKEMN64PU.svg"
                                    width={20}
                                    height={20}
                                />
                                <div className="text-[#3a3a3a] text-lg font-medium font-['Amazon Ember'] leading-[30.60px] gap-[2rem]">
                                    {`${startTime} to ${endTime}`}
                                </div>
                            </div>

                            <div className="flex items-center space-x-[12px]">
                                <Image
                                    className="w-8 h-8 relative"
                                    alt="students icon"
                                    src="/userDashboard/reshot-icon-student-DRC3YF56MU.svg"
                                    width={20}
                                    height={20}
                                />
                                <div className="text-[#3a3a3a] text-lg font-medium font-['Amazon Ember'] leading-[30.60px] gap-[2rem]">
                                    {`${studentsCount} Students`}
                                </div>
                            </div>
                        </div>
                        <div className="w-full relative text-left text-[1rem]  text-gray-700 font-medium sm:text-lg leading-[170%] sm:leading-8 font-['Amazon Ember'] mt-8">
                            Currently, we are only accepting reschedule requests via calls and WhatsApp. Please contact us at the number below to confirm your session rescheduling.
                        </div>
                        <div className="mt-8 p-4 bg-[#fff2f2] rounded-lg flex flex-col justify-center items-center leading-30">
                            <div className="text-center text-[#3a3a3a] font-extrabold text-heading5 font-heading5-bold">
                                +91 6366969292
                            </div>
                            <div className="text-center text-[#3a3a3a] text-lg font-medium font-['Amazon Ember'] leading-6 sm:leading-[30.60px]">
                                AFE Makerspace Helpline
                            </div>
                        </div>
                    </DialogDescription>
                </DialogContent>
            </Dialog> */}
            {/* {isOpen && (
    <div className="fixed inset-0 flex items-end md:items-center justify-center z-50 bg-black bg-opacity-70">
        <div className="w-full max-w-[592px] h-auto p-8 bg-white rounded-lg shadow-lg">
            <div className="flex justify-between items-center">
                <h2 className="text-[#3a3a3a] sm:text-subHeading1 font-[Amazon Ember Display] md:text-heading6 font-heading6-bold sm:leading-[150%] mb-4">
                    Reschedule Nano Sprint
                </h2>
                <button
                    onClick={handleClose}
                    className="text-[#949494] text-lg font-bold justify-center mb-4 w-6 h-6"
                >
                    X
                </button>
            </div>
            {/* <div className="text-[#3A3A3A] md:subTitle1 md:font-subTitle1-bold md:leading-[170%] sm:text-bodyM2 sm:font-body2-regular sm:leading-[170%] mb-4">
                Current Booking Details
            </div> */}
            <div className="text-[#3a3a3a] md:subTitle1 md:font-subTitle1-bold md:leading-[170%] text-lg font-bold mb-4">
              Current Booking Details
            </div>
            {/* <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
                <div className="flex items-center space-x-2">
                    <Image
                        className="w-8 h-8"
                        alt="calendar icon"
                        src="/userDashboard/reshot-icon-calendar-U75ASPNFXK.svg"
                        width={20}
                        height={20}
                    />
                    <div className="text-[#3a3a3a] text-lg font-medium leading-6">
                        {formattedDate}
                    </div>
                </div>

                <div className="flex items-center space-x-2">
                    <Image
                        className="w-8 h-8"
                        alt="time icon"
                        src="/userDashboard/reshot-icon-time-SRKEMN64PU.svg"
                        width={20}
                        height={20}
                    />
                    <div className="text-[#3a3a3a] text-lg font-medium leading-6">
                        {`${startTime} to ${endTime}`}
                    </div>
                </div>

                <div className="flex items-center space-x-2">
                    <Image
                        className="w-8 h-8"
                        alt="students icon"
                        src="/userDashboard/reshot-icon-student-DRC3YF56MU.svg"
                        width={20}
                        height={20}
                    />
                    <div className="text-[#3a3a3a] text-lg font-medium leading-6">
                        {`${studentsCount} Students`}
                    </div>
                </div>
            </div> */}
            <div className="flex flex-col space-y-4 gap-8 md:flex-row md:space-x-4 md:items-baseline justify-start">
                <div className="flex items-center gap-3 mt-4 md:mt-0">
                  <Image className="w-6 h-6 md:w-8 md:h-8" alt="calendar icon" src="/userDashboard/reshot-icon-calendar-U75ASPNFXK.svg" width={24} height={24} />
                  <div className="text-[#3a3a3a] whitespace-nowrap text-base md:text-button1 font-button1-bold md:leading-[170%]">
                    {formattedDate}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Image className="w-6 h-6 md:w-8 md:h-8" alt="time icon" src="/userDashboard/reshot-icon-time-SRKEMN64PU.svg" width={24} height={24} />
                  <div className="text-[#3a3a3a] whitespace-nowrap text-base md:text-button1 font-button1-bold md:leading-[170%]">
                    {`${startTime} to ${endTime}`}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Image className="w-6 h-6 md:w-8 md:h-8" alt="students icon" src="/userDashboard/reshot-icon-student-DRC3YF56MU.svg" width={24} height={24} />
                  <div className="text-[#3a3a3a] whitespace-nowrap text-base md:text-button1 font-button1-bold md:leading-[170%]">
                    {`${studentsCount} Students`}
                  </div>
                </div>
            </div>


            <div className="mt-8 text-gray-700 text-base sm:text-lg font-medium leading-7">
                Currently, we are only accepting reschedule requests via calls and WhatsApp. Please contact us at the number below to confirm your session rescheduling.
            </div>
            <div className="mt-8 p-4 bg-[#fff2f2] rounded-lg flex flex-col justify-center items-center">
                <div className="text-[#3a3a3a] font-heading6-bold text-heading6 leading-[150%] mb-2">
                    +91 6366969292
                </div>
                <div className="text-[#3a3a3a] text-lg font-medium leading-6">
                    AFE Makerspace Helpline
                </div>
            </div>
        </div>
    </div>
)} */}
{isOpen && (
  <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black bg-opacity-70">
    <div className="bg-white max-w-auto px-4 py-6 md:p-8 md:h-auto rounded-t-lg md:rounded-lg shadow-lg relative">
      <div className="flex justify-between items-center">
        
      <div className="text-[#3a3a3a] text-subHeading1 md:text-heading6 font-['Amazon Ember Display'] leading-[150%] text-left">
        Reschedule Nano Sprint
      </div>
      <button
        className="text-gray-400 hover:text-gray-600 focus:outline-none"
        onClick={handleClose}
      >
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
          Currently, we are only accepting reschedule requests via calls{" "}
          <span className='md:block'>and WhatsApp. Please contact us at the number below to</span>{" "} confirm your session rescheduling
        </div>
      </div>
      <div className=" w-full p-4 bg-[#fff2f2] rounded-lg flex flex-col justify-center items-center mt-6 md:mt-8">
            <div className="relative leading-[150%] text-center text-heading6 font-heading6-bold text-[#3a3a3a]">
              <a href={whatsappLink} target="_blank" className="font-extrabold">
                +916366969292
              </a>
            </div>
            <div className="relative text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray">
              AFE Makerspace Helpline
            </div>
          </div>
    </div>
  </div>
)}
        </>
    );
};

export default PhoneSecondPopup;
