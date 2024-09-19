import React from "react";
import Image from "next/image";
import type { NextPage } from 'next';

const Page: NextPage = () => {
    return (
        <>
            <div className="flex justify-center items-center min-h-screen">
                <div className="w-[592px] rounded-lg flex-col justify-start items-center gap-8 inline-flex p-6">
                    <div className="self-stretch flex-col justify-start items-start gap-4 flex">
                        <div className="self-stretch text-[#29458c] text-2xl font-extrabold font-['Amazon Ember Display'] leading-9">Nano Sprint</div>

                        <div className="flex justify-start items-center gap-8">
                            <div className="flex items-center gap-2">
                                <Image
                                    className="w-5 h-5"
                                    alt="calendar icon"
                                    src="/userDashboard/reshot-icon-calendar-U75ASPNFXK.svg"
                                    width={20}
                                    height={20}
                                />
                                <div className="text-[#3a3a3a] text-lg font-medium font-['Amazon Ember'] leading-[30.60px]">24 Sept 2024</div>
                            </div>

                            <div className="flex items-center gap-2">
                                <Image
                                    className="w-5 h-5"
                                    alt="time icon"
                                    src="/userDashboard/reshot-icon-time-SRKEMN64PU.svg"
                                    width={20}
                                    height={20}
                                />
                                <div className="text-[#3a3a3a] text-lg font-medium font-['Amazon Ember'] leading-[30.60px]">2 PM to 5 PM</div>
                            </div>
                        </div>

                        <div className="text-[#3a3a3a] text-lg font-bold font-['Amazon Ember'] leading-[30.60px]">Innovation Hub - Bengaluru</div>

                        <div className="self-stretch text-[#6d6d6d] text-lg font-medium font-['Amazon Ember'] leading-[30.60px]">
                            Please share the following details below and we will connect with you as soon as the Mini Sprint program is launched at the lab.
                        </div>
                    </div>

                    {["Name", "Number of Students Attending (Optional)", "Phone Number", "School Name (Optional)", "Email (Optional)", "City", "Pincode (Optional)"].map((label, index) => (
                        <div key={index} className="self-stretch flex-col justify-start items-start gap-2 flex">
                            <div className="text-[#3a3a3a] text-sm font-medium font-['Amazon Ember'] leading-normal">{label}</div>
                            <div className={`self-stretch h-14 px-4 py-2 rounded-[100px] border border-[#3a3a3a] flex items-center gap-2 ${label === "City" ? "bg-[#dedede]" : ""}`}>
                                <div className={`text-lg font-medium font-['Amazon Ember'] leading-[30.60px] ${label === "City" ? "text-[#3a3a3a]" : "text-[#bdbdbd]"}`}>
                                    {label === "City" ? "Bengaluru" : `Eg. ${label.split(" ")[0]}`}
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="h-14 px-8 py-2 bg-[#f55c38] rounded-[100px] flex justify-center items-center gap-2">
                        <div className="text-center text-white text-lg font-medium font-['Amazon Ember'] leading-[30.60px]">Confirm Booking</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
