import type { NextPage } from 'next';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,

} from "@/components/ui/dialog";
import Image from "next/image";
interface SecondPopupProps {
    isOpen: boolean;
    handleClose: () => void; 
}
const PhoneSecondPopup: NextPage<SecondPopupProps> = ({ isOpen, handleClose }) => {
    return (
        <>
            <Dialog open={isOpen} onOpenChange={handleClose}>

                <DialogContent className="sm:fixed top-[75%] md:top-[50%] w-full max-w-[592px] h-auto p-8 bg-white rounded-lg shadow-lg">
                    {/* <DialogContent className="w-full max-w-[592px] h-auto p-8 bg-white rounded-lg shadow-lg "> */}
                    <DialogHeader>                                                        
                    <DialogTitle className="flex justify-between items-center">
                    
                        <div className="text-[#3a3a3a] text-xl sm:text-2xl font-extrabold text-heading5 font-heading5-bold leading-7 sm:leading-9">
                            Reschedule Nano Sprint
                        </div>

                        <button className="w-6 h-6" />
                    </DialogTitle>
                    </DialogHeader>
                    <DialogDescription>
                        {/* <div className="text-[#3a3a3a] text-lg font-extrabold font-['Amazon Ember'] leading-6 sm:leading-[30.60px] mb-4">
                                                             Current Booking Details
                                                         </div> */}
                        <div className="text-[#3a3a3a] text-subTitle1 font-subTitle1-bold leading-6 sm:leading-[30.60px] mb-4">
                            Current Booking Details
                        </div>
                        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                            <div className="flex items-center space-x-2">
                                <Image
                                    className="w-8 h-8 relative"
                                    alt="calendar icon"
                                    src="/userDashboard/reshot-icon-calendar-U75ASPNFXK.svg"
                                    width={20}
                                    height={20}
                                />
                                <div className="flex items-center text-[#3a3a3a] text-lg font-medium font-['Amazon Ember'] leading-[30.60px]">
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
                                <div className="flex items-center text-[#3a3a3a] text-lg font-medium font-['Amazon Ember'] leading-[30.60px]">
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
                                <div className="flex items-center text-[#3a3a3a] text-lg font-medium font-['Amazon Ember'] leading-[30.60px]">
                                    30 Students
                                </div>
                            </div>
                        </div>

                        {/* <div className="whitespace-normal text-[#3a3a3a] text-lg font-medium font-['Amazon Ember'] leading-6 sm:leading-[30.60px] mt-4">
                                                     Please contact us at the phone number below to confirm your
                                                     <span className="block">sprint rescheduling</span>
                                                 </div> */}

                        <div className="whitespace-normal text-[#3a3a3a] text-lg font-medium font-['Amazon Ember'] leading-6 sm:leading-[30.60px] mt-4">
                            <span className="block sm:hidden">Please contact us at the phone number</span>
                            <span className="block sm:hidden">below to confirm your sprint rescheduling</span>
                            <span className="hidden sm:inline">
                                Please contact us at the phone number below to confirm your
                                <span className="block">sprint rescheduling</span>
                            </span>
                        </div>

                        <div className="mt-6 p-4 bg-[#fff2f2] rounded-lg flex flex-col justify-center items-center">
                            <div className="text-center text-[#3a3a3a] font-extrabold text-heading5 font-heading5-bold">
                                +91 8597437548
                            </div>

                            <div className="text-center text-black text-lg font-medium font-['Amazon Ember'] leading-6 sm:leading-[30.60px]">
                                Sprint Admin
                            </div>
                        </div>
                    </DialogDescription>
                </DialogContent>
            </Dialog>

        </>
    );
};

export default PhoneSecondPopup;

