"use client";

import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import WaitingListPopup from "./_components/WaitingListPopup";
import { useRouter } from "next/navigation";
const MiniPage: NextPage = () => {
    const router = useRouter();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [nameError, setNameError] = useState("");
    const [schoolName, setSchoolName] = useState("");
    const [schoolNameError, setSchoolNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [pincode, setPincode] = useState("");
    const [pincodeError, setPincodeError] = useState("");

    const phoneRegex = /^[0-9]{10}$/;
    const phoneDigitsOnly = /^[0-9]+$/;
    const phonePattern = /^[6-9]\d{9}$/;

    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {
            return "Email field cannot be empty";
        } else if (!regex.test(email)) {
            return "Please enter a valid email address";
        } else {
            return "";
        }
    };

    const validatePincode = (pincode: string) => {
        const regex = /^[1-9][0-9]{5}$/; 

        if (pincode === "") {
            return "Pincode field cannot be empty";
        } else if (!regex.test(pincode)) {
            return "Please enter a valid 6-digit pincode";
        } else {
            return "";
        }
    };

    const handleJoinWaitingList = () => {

        let isValid = true;

        if (!phoneRegex.test(phoneNo) || !phoneDigitsOnly.test(phoneNo) || !phonePattern.test(phoneNo)) {
            setPhoneError("Please enter a valid 10-digit phone number starting with 6-9.");
            isValid = false;
        } else {
            setPhoneError("");
        }

        if (name.trim() === "" || !isNaN(Number(name))) {
            setNameError("Please enter a valid name. It cannot be empty or a number.");
            isValid = false;
        } else {
            setNameError(""); 
        }

        if (schoolName.trim() === "" || /\d/.test(schoolName)) {
            setSchoolNameError("Please enter a valid school name. It cannot be empty or contain numbers.");
            isValid = false;
        } else {
            setSchoolNameError(""); 
        }

        const emailValidationError = validateEmail(email);
        if (emailValidationError) {
            setEmailError(emailValidationError);
            isValid = false;
        } else {
            setEmailError(""); 
        }

        const pincodeValidationError = validatePincode(pincode);
        if (pincodeValidationError) {
            setPincodeError(pincodeValidationError);
            isValid = false;
        } else {
            setPincodeError(""); 
        }

        if (isValid) {
            setIsModalOpen(true);
        }
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNo(e.target.value);
    };
    const handleSchoolChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSchoolName(e.target.value);
    };
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePincodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPincode(e.target.value);
    };
    const handleBackClick = () => {
        router.push ('/sprintPages/minipage');
    };



    return (
        <>
        {!isModalOpen ? (
            <div className="w-full min-h-screen bg-white flex flex-col justify-center items-center gap-8 md:gap-16">
                <div className="w-full h-[80px] px-4 md:px-12 bg-white shadow-md flex justify-between items-center">
                    <div className="flex items-center gap-2 cursor-pointer" 
                        onClick={handleBackClick} >
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
                    <div className="text-lg text-center font-extrabold text-[#3a3a3a] mx-auto">Mini Sprint</div>
                </div>

                <div className="flex justify-center items-center w-full px-4">
                    <div className="w-full md:w-[592px] rounded-lg flex flex-col justify-start items-center gap-8 p-4 md:p-6">
                        <div className="w-full flex flex-col gap-4">
                            <div className="text-[#3a3a3a] text-2xl md:text-[24px] font-extrabold leading-[30px] md:leading-[36px]">
                                Join Mini Sprint Waiting List
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
                                value={name}
                            />
                            {nameError && <div className="text-red-500 text-sm">{nameError}</div>}
                        </div>

                        <div className="w-full flex flex-col gap-2">
                            <label className="text-[#2e2e2e] text-sm font-medium leading-normal">
                                Phone Number <span className="text-[#f55c38] hidden md:inline">*</span>
                            </label>
                            <input
                                className="w-full h-12 md:h-14 px-4 py-2 rounded-full border border-[#2e2e2e] text-[#3a3a3a] text-base md:text-lg font-medium"
                                placeholder="+918923747563"
                                onChange={handlePhoneChange}
                                value={phoneNo}
                            />
                            {phoneError && <div className="text-red-500 text-sm">{phoneError}</div>}
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
                                School Name<span className="inline md:hidden"> (Optional)</span>
                            </label>
                            <input
                                className="w-full h-12 md:h-14 px-4 py-2 rounded-full border border-[#3a3a3a] text-[#000000] text-base md:text-lg font-medium"
                                placeholder="Eg. Shiksha Bharti"
                                onChange={handleSchoolChange}
                                value={schoolName}
                            />
                            {schoolNameError && <div className="text-red-500 text-sm">{schoolNameError}</div>}
                        </div>

                        <div className="w-full flex flex-col gap-2">
                            <label className="text-[#3a3a3a] text-sm font-medium leading-normal">
                                Email<span className="inline md:hidden"> (Optional)</span>
                            </label>
                            <input
                                className="w-full h-12 md:h-14 px-4 py-2 rounded-full border border-[#3a3a3a] text-[#000000] text-base md:text-lg font-medium"
                                placeholder="Eg. prakash@gmail.com"
                                onChange={handleEmailChange}
                                value={email}
                            />
                            {emailError && <div className="text-red-500 text-sm">{emailError}</div>}
                        </div>

                        <div className="w-full flex flex-col gap-2">
                            <label className="text-[#3a3a3a] text-sm font-medium leading-normal">
                                Pincode<span className="inline md:hidden"> (Optional)</span>
                            </label>
                            <input
                                className="w-full h-12 md:h-14 px-4 py-2 rounded-full border border-[#3a3a3a] text-[#000000] text-base md:text-lg font-medium"
                                placeholder="Eg. 560034"
                                onChange={handlePincodeChange}
                                value={pincode}
                            />
                            {pincodeError && <div className="text-red-500 text-sm">{pincodeError}</div>}
                        </div>
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
            </div>)
            // <WaitingListPopup isOpen={isModalOpen} name={name} />
            : (<WaitingListPopup isOpen={isModalOpen} name={name} />)}

        </>
    );
};

export default MiniPage;


