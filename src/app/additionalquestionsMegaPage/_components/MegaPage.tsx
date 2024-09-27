"use client"

import React, { useState } from "react";
import type { NextPage } from 'next';
import Image from 'next/image';
import  MegaWaitingListPopup  from './MegaWaitingListPopup';


const MegaPage: NextPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState("");

    const handleJoinWaitingList = () => {
        setIsModalOpen(true);
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    return (
        <>
            <div className="w-full min-h-screen bg-white flex flex-col justify-center items-center gap-8 md:gap-16">
                <div className="w-full h-[80px] px-4 md:px-12 bg-white shadow-md flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 relative">
                            <Image
                                src="/userDashboard/chevron_left.svg"
                                alt="Back Icon"
                                width={7.41}
                                height={12}
                                className="w-full h-full"
                            />
                        </div>
                        <div className="text-lg text-[#3a3a3a] font-medium">
                            Back
                        </div>
                    </div>
                    <div className="text-lg text-center font-extrabold text-[#3a3a3a] mx-auto">
                        Mega Sprint
                    </div>
                </div>

                <div className="flex justify-center items-center w-full px-4">
                    <div className="w-full md:w-[592px] rounded-lg flex flex-col justify-start items-center gap-8 p-4 md:p-6">
                        <div className="w-full flex flex-col gap-4">
                            <div className="text-[#3a3a3a] text-2xl md:text-[24px] font-extrabold leading-[30px] md:leading-[36px]">
                                Join Mega Sprint Waiting List
                            </div>

                            <div className="text-[#3a3a3a] text-base md:text-lg font-bold leading-[25px] md:leading-[30.60px]">
                                AFE Makerspace Lab - Bengaluru
                            </div>
                            <div className="text-[#6d6d6d] text-sm md:text-lg font-medium leading-[22px] md:leading-[30.60px]">
                                Please share the following details below and we will connect with you as soon as the Mini Sprint program is launched at the lab.
                            </div>
                        </div>

                        <div className="w-full flex flex-col gap-2">
                            <label className="text-[#3a3a3a] text-sm font-medium leading-normal">
                                Name <span className="text-[#f55c38] hidden md:inline">*</span>
                            </label>
                            <input
                                className="w-full h-12 md:h-14 px-4 py-2 rounded-full border border-[#3a3a3a] text-[#000000] text-base md:text-lg font-medium"
                                placeholder="Eg. Prakash"
                                onChange={handleNameChange}
                            />
                        </div>

                        <div className="w-full flex flex-col gap-2">
                            <label className="text-[#2e2e2e] text-sm font-medium leading-normal">
                                Phone Number <span className="text-[#f55c38] hidden md:inline">*</span>
                            </label>
                            <input
                                className="w-full h-12 md:h-14 px-4 py-2 rounded-full border border-[#2e2e2e] text-[#3a3a3a] text-base md:text-lg font-medium"
                                placeholder="+918923747563"
                            />
                        </div>

                        <div className="w-full flex flex-col gap-2">
                            <label className="text-[#3a3a3a] text-sm font-medium leading-normal">
                                City <span className="text-[#f55c38] hidden md:inline">*</span>
                            </label>
                            <input
                                className="w-full h-12 md:h-14 px-4 py-2 bg-[#dedede] rounded-full border border-[#3a3a3a] text-[#3a3a3a] text-base md:text-lg font-medium"
                                value="Bengaluru"
                                readOnly
                            />
                        </div>

                        <div className="w-full flex flex-col gap-2">
                            <label className="text-[#3a3a3a] text-sm font-medium leading-normal">
                                School Name
                            </label>
                            <input
                                className="w-full h-12 md:h-14 px-4 py-2 rounded-full border border-[#3a3a3a] text-[#000000] text-base md:text-lg font-medium"
                                placeholder="Eg. Shiksha Bharti"
                            />
                        </div>

                        <div className="w-full flex flex-col gap-2">
                            <label className="text-[#3a3a3a] text-sm font-medium leading-normal">
                                Email
                            </label>
                            <input
                                className="w-full h-12 md:h-14 px-4 py-2 rounded-full border border-[#3a3a3a] text-[#000000] text-base md:text-lg font-medium"
                                placeholder="Eg. prakash@gmail.com"
                            />
                        </div>
                  
                        <div className="w-full flex flex-col gap-2">
                            <label className="text-[#3a3a3a] text-sm font-medium leading-normal">
                                Pincode
                            </label>
                            <input
                                className="w-full h-12 md:h-14 px-4 py-2 rounded-full border border-[#3a3a3a] text-[#000000] text-base md:text-lg font-medium"
                                placeholder="Eg. xxxxxx"
                            />
                        </div>


                        <div
                            className="w-full md:w-auto h-12 md:h-14 px-6 md:px-8 py-2 bg-[#f55c38] rounded-full flex justify-center items-center cursor-pointer"
                            onClick={handleJoinWaitingList}
                        >
                            <span className="text-white text-base md:text-lg font-medium leading-7 md:leading-[30.60px]">
                                Join Waiting List
                            </span>
                        </div>
                    </div>
                </div>

                <MegaWaitingListPopup isOpen={isModalOpen} name={name} />

            </div>
        </>
    );
};

export default MegaPage;



