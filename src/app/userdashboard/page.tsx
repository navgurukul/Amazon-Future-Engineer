"use client"
import * as React from "react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter
} from "@/components/ui/dialog";
import Image from "next/image";
import type { NextPage } from "next";

const Page: NextPage = () => {
    const [openRescheduleDialog, setOpenRescheduleDialog] = useState(false);
    const [openAnotherDialog, setOpenAnotherDialog] = useState(false);

    const handleOpenReschedule = () => setOpenRescheduleDialog(true);

    const handleCloseReschedule = () => setOpenRescheduleDialog(false);

    const handleOpenAnother = () => setOpenAnotherDialog(true);

    const handleCloseAnother = () => setOpenAnotherDialog(false);

    return (
        <>
            <div className="mt-[184px] max-w-[90%] sm:max-w-[1216px] h-auto flex flex-col justify-start items-center gap-8 mb-8 mx-auto relative">
                <div className="text-[#29458c] text-[24px] sm:text-[32px] font-extrabold leading-[36px] sm:leading-[48px] self-stretch">
                    My Bookings
                </div>
                {[...Array(3)].map((_, index) => (
                    <div
                        key={index}
                        className="bg-white p-4 rounded-md flex flex-col sm:flex-row justify-between items-center shadow-md h-auto sm:h-[132px] border border-gray-200 w-full"
                    >
                        <div className="space-y-2 text-center sm:text-left">
                            <div className="text-lg font-semibold">Nano Sprint</div>
                            <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-2 sm:space-y-0">
                                <div className="flex items-center space-x-2">
                                    <Image
                                        className="w-8 h-8 relative"
                                        alt="calendar icon"
                                        src="/userDashboard/reshot-icon-calendar-U75ASPNFXK.svg"
                                        width={20}
                                        height={20}
                                    />
                                    <div className="text-[#3a3a3a] flex items-center text-lg font-medium font-['Amazon Ember'] leading-[30.60px]">24 Sept 2024</div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Image
                                        className="w-8 h-8 relative"
                                        alt="time icon"
                                        src="/userDashboard/reshot-icon-time-SRKEMN64PU.svg"
                                        width={20}
                                        height={20}
                                    />
                                    <div className="text-[#3a3a3a] flex items-center text-lg font-medium font-['Amazon Ember'] leading-[30.60px]">2 PM to 5 PM</div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Image
                                        className="w-8 h-8 relative"
                                        alt="students icon"
                                        src="/userDashboard/reshot-icon-student-DRC3YF56MU.svg"
                                        width={20}
                                        height={20}
                                    />
                                    <div className="text-[#3a3a3a] flex items-center text-lg font-medium font-['Amazon Ember'] leading-[30.60px]">30 Students</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Button variant="reschedule" onClick={handleOpenReschedule} className="mt-4 sm:mt-0">
                                Reschedule
                            </Button>
                            {openRescheduleDialog && (
                                <Dialog open={openRescheduleDialog} onOpenChange={setOpenRescheduleDialog}>
                                    <DialogContent className="bg-white w-full max-w-[592px] sm:w-[592px] h-auto sm:h-[377px] p-6">
                                        <DialogHeader>
                                            <DialogTitle>
                                                <div style={{fontSize:"24px",fontWeight:"800px"}} className="text-[#3a3a3a] text-xl sm:text-2xl font-extrabold font-['Amazon Ember Display'] leading-7 sm:leading-9">
                                                    Reschedule Nano Sprint
                                                </div>
                                            </DialogTitle>
                                        </DialogHeader>

                                        <div className="text-[#3a3a3a] text-lg font-bold font-['Amazon Ember'] leading-6 sm:leading-[30.60px]">
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
                                                        30 Students
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="whitespace-normal text-black text-lg font-medium font-['Amazon Ember'] leading-6 sm:leading-[30.60px] mt-4">
                                                We recommend to reschedule only in cases of emergencies.
                                                <span className="block">Please confirm if you would like to proceed</span>
                                            </div>
                                        </DialogDescription>

                                        <DialogFooter className="mt-6 flex flex-col sm:flex-row sm:justify-end space-y-2 sm:space-y-0 sm:space-x-4">


                                            <div className="mt-6 flex flex-col sm:flex-row sm:justify-end space-y-2 sm:space-y-0 sm:space-x-4">
                                                <div
                                                    onClick={handleCloseReschedule}
                                                    className="px-8 py-2 rounded-[100px] border border-[#3a3a3a] justify-center items-center gap-2 flex cursor-pointer"
                                                >
                                                    <div className="text-center text-[#3a3a3a] text-lg font-medium font-['Amazon Ember'] leading-[30.60px]">
                                                        Cancel
                                                    </div>
                                                </div>

                                                <div
                                                    onClick={handleOpenAnother}
                                                    className="px-8 py-2 bg-[#f55c38] rounded-[100px] justify-center items-center gap-2 flex cursor-pointer"
                                                >
                                                    <div className="text-center text-white text-lg font-medium font-['Amazon Ember'] leading-[30.60px]">
                                                        Request Reschedule
                                                    </div>
                                                </div>
                                            </div>

                                        </DialogFooter>

                                        {openAnotherDialog && (
                                            <Dialog open={openAnotherDialog} onOpenChange={setOpenAnotherDialog} >
                                                <DialogContent className="w-full max-w-[592px] h-auto p-8 bg-white rounded-lg shadow-lg ">
                                                    <DialogHeader>
                                                        <DialogTitle className="flex justify-between items-center">
                                                            <div style={{fontSize:"24px",fontWeight:"800px"}} className="text-[#3a3a3a] text-xl sm:text-2xl font-extrabold font-['Amazon Ember Display'] leading-7 sm:leading-9">
                                                                Reschedule Nano Sprint
                                                            </div>
                                                            <button onClick={handleCloseAnother} className="w-6 h-6" />
                                                        </DialogTitle>
                                                    </DialogHeader>
                                                    <DialogDescription>
                                                        <div className="text-[#3a3a3a] text-lg font-bold font-['Amazon Ember'] leading-6 sm:leading-[30.60px] mb-4">
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

                                                        <div className="whitespace-normal text-[#3a3a3a] text-lg font-medium font-['Amazon Ember'] leading-6 sm:leading-[30.60px] mt-4">
                                                            Please contact us at the phone number below to confirm your
                                                            <span className="block">sprint rescheduling</span>
                                                        </div>
                                                        <div className="mt-6 p-4 bg-[#fff2f2] rounded-lg flex flex-col justify-center items-center">
                                                            {/* <div className="text-center text-[#3a3a3a] text-2xl sm:text-20xl font-extrabold font-['Amazon Ember Display'] leading-9 sm:leading-9">
                                                                +91 8597437548
                                                            </div> */}
                                                            <div style={{fontSize:"24px",fontWeight:"800px"}} className="text-center text-[#3a3a3a] text-2xl font-extrabold font-['Amazon Ember Display'] leading-30">
                                                                +91 8597437548
                                                            </div>
                                                            <div className="text-center text-black text-lg font-medium font-['Amazon Ember'] leading-6 sm:leading-[30.60px]">
                                                                Sprint Admin
                                                            </div>
                                                        </div>

                                                    </DialogDescription>
                                                </DialogContent>
                                            </Dialog>
                                        )}
                                    </DialogContent>
                                </Dialog>
                            )}

                        </div>
                    </div>
                ))}
            </div>

            <div className="max-w-[90%] sm:w-[1216px] h-[0px] border border-[#dedede] mx-auto relative gap-16"></div>

            <div className="w-full max-w-[90%] sm:max-w-[1216px] h-auto mx-auto relative flex flex-col items-center gap-8 p-4">
                <div className="text-[#29458c] text-[24px] sm:text-[32px] font-extrabold leading-[36px] sm:leading-[48px] text-center self-start">
                    How to Reach the Innovation Hub
                </div>
                <div className="flex flex-col sm:flex-row items-start gap-4 w-full">
                    <Image
                        className="w-full sm:w-[696px] h-auto sm:h-[440px] rounded-lg"
                        alt="innovation hub map"
                        src="/userDashboard/map.png"
                        width={696}
                        height={440}
                    />
                    <div className="w-full sm:w-[487px] flex flex-col gap-4">
                        <div className="text-[#3a3a3a] text-2xl font-extrabold leading-9">Innovation Hub Center</div>
                        <div className="text-[#3a3a3a] text-lg font-medium leading-[30.60px]">
                            16th Avenue, Roadside steps, Bengaluru - 208011
                        </div>
                        <div className="text-[#3a3a3a] text-lg font-medium leading-[30.60px]">
                            Mon - Fri, 10 AM to 7 PM
                        </div>
                        <div>
                            <span>For queries, please contact us at </span>
                            <a href="mailto:afeinnovation@ihub.com" className="text-[#f55c38] font-semibold underline">
                                afeinnovation@ihub.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-[90%] sm:w-[1216px] h-auto flex flex-col justify-center items-start gap-8 mx-auto relative mt-8">
                <div className="flex flex-col justify-start items-start gap-4">
                    <div className="text-left text-[#29458c] text-[24px] sm:text-[32px] font-extrabold leading-[36px] sm:leading-[48px]">
                        Planned for future sprints?
                    </div>
                    <div className="text-left text-[#3a3a3a] text-lg font-medium leading-[30.60px]">
                        Check out the sprint details and book one for your students today.
                    </div>
                </div>
                <div className="h-14 px-8 py-2 bg-[#f55c38] rounded-[100px] justify-center items-center inline-flex mb-4">
                    <span className="text-center text-white text-lg font-medium leading-[30.60px]">
                        View Sprint Details
                    </span>
                </div>
            </div>
        </>
    );
};

export default Page;
