import type { NextPage } from 'next';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter
} from "@/components/ui/dialog";
import Image from "next/image";

interface FirstPopupProps {
    isOpen: boolean;
    handleClose: () => void;
    handleOpenSecondPopup: () => void;
}

const FirstPopup: NextPage<FirstPopupProps> = ({ isOpen, handleClose, handleOpenSecondPopup }) => {
    return (
        <>
            <Dialog open={isOpen} onOpenChange={handleClose} >
                <DialogContent className="bg-white w-full sm:fixed top-[75%] md:top-[50%]  max-w-[592px] sm:w-[592px] h-auto sm:h-[377px] p-6 ">
                    <DialogHeader>
                        <DialogTitle>

                            <div className="text-[#3a3a3a] text-xl sm:text-2xl font-extrabold text-heading5 font-heading5-bold leading-7 sm:leading-9">
                                Reschedule Nano Sprint
                            </div>
                        </DialogTitle>
                    </DialogHeader>

                    {/* <div className="text-[#3a3a3a] text-lg font-bold font-['Amazon Ember'] leading-6 sm:leading-[30.60px]">
                                            Current Booking Details
                                        </div> */}
                    <div className="text-[#3a3a3a] text-subTitle1 font-subTitle1-bold leading-6 sm:leading-[30.60px] mb-4">
                        Current Booking Details
                    </div>

                    <DialogDescription className="mt-2 text-gray-600">
                        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                            <div className="flex items-center space-x-2">
                                <Image
                                    className="w-8 h-8 relative"
                                    alt="calendar icon"
                                    src="/userDashboard/reshot-icon-calendar-U75ASPNFXK.svg"
                                    width={20}
                                    height={20}
                                />
                                <div className="text-[#3a3a3a] text-lg font-medium font-['Amazon Ember'] leading-[30.60px]">
                                    24 Sept 2024
                                </div>
                            </div>

                            <div className="flex items-center space-x-2">
                                <Image
                                    className="w-8 h-8 relative"
                                    alt="time icon"
                                    src="/userDashboard/reshot-icon-time-SRKEMN64PU.svg"
                                    width={20}
                                    height={20}
                                />
                                <div className="text-[#3a3a3a] text-lg font-medium font-['Amazon Ember'] leading-[30.60px]">
                                    2 PM to 5 PM
                                </div>
                            </div>

                            <div className="flex items-center space-x-2">
                                <Image
                                    className="w-8 h-8 relative"
                                    alt="students icon"
                                    src="/userDashboard/reshot-icon-student-DRC3YF56MU.svg"
                                    width={20}
                                    height={20}
                                />
                                <div className="text-[#3a3a3a] text-lg font-medium font-['Amazon Ember'] leading-[30.60px]">
                                    30 Students                                                     </div>
                            </div>
                        </div>

                        {/* <div className="whitespace-normal text-black text-lg font-medium font-['Amazon Ember'] leading-6 sm:leading-[30.60px] mt-4">
                                         We recommend to reschedule only in cases of emergencies.
                                         <span className="block">Please confirm if you would like to proceed</span>
                                     </div> */}
                        <div className="whitespace-normal text-black text-lg font-medium font-['Amazon Ember'] leading-6 sm:leading-[30.60px] mt-4">
                            <span className="block sm:inline">We recommend to reschedule only in cases</span>
                            <span className="block sm:inline  mr-1">of emergencies. Please confirm if you would</span>
                            <span className="block sm:inline">like to proceed</span>
                        </div>

                    </DialogDescription>

                    <DialogFooter className="mt-6 flex flex-col sm:flex-row sm:justify-end space-y-2 sm:space-y-0 sm:space-x-4">


                        <div className="mt-2 flex flex-col sm:flex-row sm:justify-end space-y-2 sm:space-y-0 sm:space-x-4">
                            <div
                                className="hidden sm:flex px-8 py-2 rounded-[100px] border border-[#3a3a3a] justify-center items-center gap-2 cursor-pointer"
                                onClick={handleClose}
                            >
                                <div className="text-center text-[#3a3a3a] text-lg font-medium font-['Amazon Ember'] leading-[30.60px]">
                                    Cancel
                                </div>
                            </div>
                            <div
                                className="px-8 py-2 bg-[#f55c38] rounded-[100px] justify-center items-center gap-2 flex cursor-pointer"
                                onClick={handleOpenSecondPopup}
                            >
                                <div className="text-center text-white text-lg font-medium font-['Amazon Ember'] leading-[30.60px]">
                                    Request Reschedule
                                </div>
                            </div>
                        </div>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

        </>
    );
};

export default FirstPopup;


