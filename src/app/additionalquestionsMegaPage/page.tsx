"use client";

import React, { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import WaitingListPopup from "./_components/WaitingListPopup";
import { useRouter } from "next/navigation";
import { createWaitingList } from "@/utils/api";

const MegaPage: NextPage = () => {
    const router = useRouter();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phoneNo: "",
        schoolName: "",
        email: "",
        pincode: "",
    });
    const [errors, setErrors] = useState({
        name: "",
        phoneNo: "",
        schoolName: "",
        email: "",
        pincode: "",
    });

    const validateForm = () => {
        const newErrors = {
            name: "",
            phoneNo: "",
            schoolName: "",
            email: "",
            pincode: "",
        };

        if (formData.name.trim() === "" || !isNaN(Number(formData.name))) {
            newErrors.name = "Please enter a valid name. It cannot be empty or a number.";
        }

        if (!/^[6-9]\d{9}$/.test(formData.phoneNo)) {
            newErrors.phoneNo = "Please enter a valid 10-digit phone number starting with 6-9.";
        }

        if (formData.schoolName.trim() === "" || /\d/.test(formData.schoolName)) {
            newErrors.schoolName = "Please enter a valid school name. It cannot be empty or contain numbers.";
        }

        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (formData.pincode && !/^[1-9][0-9]{5}$/.test(formData.pincode)) {
            newErrors.pincode = "Please enter a valid 6-digit pincode";
        }

        setErrors(newErrors);
        return Object.values(newErrors).every((error) => error === "");
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleJoinWaitingList = async () => {
        if (validateForm()) {
            try {
                const programData = JSON.parse(localStorage.getItem('programData') || '[]');
                const megaProgram = programData.find((program: any) => program.title === "MEGA");

                if (!megaProgram) {
                    throw new Error('Required data not found in localStorage');
                }

                const waitingListData = {
                    name: formData.name,
                    email: formData.email,
                    venue_id: megaProgram.venue_id,
                    program_id: megaProgram.id,
                    city: "Bengaluru",
                    pin_code: formData.pincode,
                    school_name: formData.schoolName
                };

                await createWaitingList(waitingListData);
                setIsModalOpen(true);
            } catch (error) {
                console.error('Error joining waiting list:', error);
            }
        }
    };

    const handleBackClick = () => {
        router.push('/sprintPages/megapage');
    };

    return (
        <>
            {!isModalOpen ? (
                <div className="w-full min-h-screen bg-white flex flex-col justify-center items-center gap-8 md:gap-16">
                    <div className="w-full h-[80px] px-4 md:px-12 bg-white shadow-md flex justify-between items-center">
                        <div className="flex items-center gap-2 cursor-pointer" onClick={handleBackClick}>
                            <div className="w-6 h-6 relative">
                                <Image
                                    src="/userDashboard/chevron_left.svg"
                                    alt="Back Icon"
                                    width={7.41}
                                    height={12}
                                    className="w-full h-full"
                                />
                            </div>
                            <div className="text-lg text-[#3a3a3a] font-medium">Back</div>
                        </div>
                        <div className="text-lg text-center font-extrabold text-[#3a3a3a] mx-auto">Mega Sprint</div>
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
                                    Please share the following details below and we will connect with you as soon as the Mega Sprint program is launched at the lab.
                                </div>
                            </div>

                            {['name', 'phoneNo', 'schoolName', 'email', 'pincode'].map((field) => (
                                <div key={field} className="w-full flex flex-col gap-2">
                                    <label className="text-[#3a3a3a] text-sm font-medium leading-normal">
                                        {field.charAt(0).toUpperCase() + field.slice(1).replace('No', ' Number')}
                                        {field === 'name' || field === 'phoneNo' ? (
                                            <span className="text-[#f55c38] hidden md:inline">*</span>
                                        ) : (
                                            <span className="inline md:hidden"> (Optional)</span>
                                        )}
                                    </label>
                                    <input
                                        className="w-full h-12 md:h-14 px-4 py-2 rounded-full border border-[#3a3a3a] text-[#000000] text-base md:text-lg font-medium"
                                        placeholder={`Eg. ${
                                            field === 'name'
                                                ? 'Prakash'
                                                : field === 'phoneNo'
                                                ? '8923747563'
                                                : field === 'schoolName'
                                                ? 'Shiksha Bharti'
                                                : field === 'email'
                                                ? 'prakash@gmail.com'
                                                : '560034'
                                        }`}
                                        name={field}
                                        value={formData[field as keyof typeof formData]}
                                        onChange={handleInputChange}
                                    />
                                    {errors[field as keyof typeof errors] && (
                                        <div className="text-red-500 text-sm">{errors[field as keyof typeof errors]}</div>
                                    )}
                                </div>
                            ))}

                            <button
                                className="w-full md:w-auto h-12 md:h-14 px-6 md:px-8 py-2 bg-[#f55c38] rounded-full flex justify-center items-center cursor-pointer"
                                onClick={handleJoinWaitingList}
                            >
                                <span className="text-white text-base md:text-lg font-medium leading-7 md:leading-8">
                                    Join Waiting List
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <WaitingListPopup isOpen={isModalOpen} name={formData.name} />
            )}
        </>
    );
};

export default MegaPage;


