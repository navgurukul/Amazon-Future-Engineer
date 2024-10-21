import type { NextPage } from 'next';
import Image from "next/image";
import { useState } from "react";


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


    // const phoneNumber = " +91 636696-9292";

    // // Function to handle copying the phone number
    // const handleCopy = () => {
    //     navigator.clipboard.writeText(phoneNumber)
    //         .then(() => {
    //             console.log("Phone number copied to clipboard!");
    //             // Optionally, you can show a success message here
    //             alert("Phone number copied to clipboard!");
    //         })
    //         .catch(err => {
    //             console.error("Failed to copy: ", err);
    //         });
    // };

    const [copied, setCopied] = useState(false);

    const phoneNumber = " +91 63669-69292";

    const handleCopy = () => {
        navigator.clipboard.writeText(phoneNumber)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            })
            .catch(err => {
                console.error("Failed to copy: ", err);
            });
    };

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-end md:items-center justify-center z-50 bg-black bg-opacity-70">
                    <div className="w-full max-w-[592px] h-auto p-8 bg-white rounded-lg shadow-lg">
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
                        <div className="mt-6 text-gray-700 text-base sm:text-lg font-medium leading-7">
                            Currently, we are only accepting reschedule requests via calls and WhatsApp. Please contact us at the number below to confirm your session rescheduling.
                        </div>
                        <div className="mt-6 p-4 bg-[#fff2f2] rounded-lg flex flex-col justify-center items-center">
                            <div>
                                <a href={whatsappLink} target="_blank" className="text-[#3A3A3A] text-subHeading1 font-heading6-bold md:text-heading6 leading-[150%]">
                                    +91 63669-69292
                                </a>
                            </div>

                            <div className="text-[#3a3a3a] text-bodyM md:text-body1 font-body1-regular leading-[170%]">
                                AFE Makerspace Helpline
                            </div>

                            

                            <button
                                className=" md:flex px-8 py-2 rounded-full border border-[#F55C38] justify-center items-center leading-[170%] mt-2"
                                onClick={handleCopy}
                            >
                                {copied ? (
                                    <>
                                        <img
                                            src="/userDashboard/checkmark_icon.png"
                                            alt="Check Icon"
                                            className="h-[16px] w-[16px] mr-2"
                                        />
                                        <div className="h-[24px] w-[33px] text-center text-[#F55C38] md:text-body2 font-body2-regular">
                                            Copied!
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <img
                                            src="/userDashboard/content_copy.svg"
                                            alt="Copy Icon"
                                            className="h-[16px] w-[16px] mr-2"
                                        />
                                        <div className="h-[24px] w-[33px] text-center text-[#F55C38] md:text-body2 font-body2-regular">
                                            Copy
                                        </div>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PhoneSecondPopup;