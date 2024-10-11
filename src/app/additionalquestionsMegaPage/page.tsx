"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import DialogHeader from "@/components/DialogHeader";
import WaitingListPopup from "./_components/WaitingListPopup";
import { createWaitingList } from "@/utils/api";
import ErrorHighDemand from "../additionalquestions/_components/ErrorHighDemand";

const MegaPage = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false); // State for error popup
  const [errorMessage, setErrorMessage] = useState(''); // State for error message

  const [formData, setFormData] = useState({
    name: "",
    phoneNo: "",
    city: "Bengaluru",
    schoolName: "",
    email: "",
    pincode: "",
  });
  interface FormErrors {
    name?: string;
    phoneNo?: string;
    schoolName?: string;
    email?: string;
    pincode?: string;
  }
  
  const [errors, setErrors] = useState<FormErrors>({});

  interface MegaProgram {
    id: number;
    title: string;
    venue_id: number;
  }

  const [megaProgram, setMegaProgram] = useState<MegaProgram | null>(null);

  useEffect(() => {
    const phoneNumber = localStorage.getItem("loginData")
    ? JSON.parse(localStorage.getItem("loginData") || "{}").data.phone
    : "";
    setFormData(prev => ({ ...prev,  phoneNo: phoneNumber }))
    const programData = JSON.parse(localStorage.getItem("programData") || "[]");
    const foundMegaProgram = programData.find((program: { title: string; }) => program.title === "MEGA");
    setMegaProgram(foundMegaProgram);
  }, []);

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!/^[6-9]\d{9}$/.test(formData.phoneNo)) newErrors.phoneNo = "Enter a valid 10-digit number starting with 6-9";
    if (!formData.schoolName.trim()) newErrors.schoolName = "School name is required";
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Enter a valid email";
    if (formData.pincode && !/^\d{6}$/.test(formData.pincode)) newErrors.pincode = "Enter a valid 6-digit pincode";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleJoinWaitingList = async () => {
    if (validateForm()) {
      try {
        const waitingListData = {
          name: formData.name,
          email: formData.email,
          venue_id: megaProgram?.venue_id ?? 0,
          program_id: megaProgram?.id ?? 0,
          city: formData.city,
          pin_code: formData.pincode,
          school_name: formData.schoolName
        };
        await createWaitingList(waitingListData);
        setIsModalOpen(true);
      } catch (error:any) {
        console.error('Error joining waiting list:', error);
        setErrorMessage(error.message);
        setShowErrorPopup(true);
      }
    }
  };

  const closeErrorPopup = () => {
    setShowErrorPopup(false);
    setErrorMessage('');
  };

  return (
    <div className="pt-[120px] w-full min-h-screen bg-white flex flex-col justify-center items-center gap-8 md:gap-16">
      <DialogHeader />
      <div className="w-full md:w-[592px] rounded-lg flex flex-col justify-start items-center gap-8 p-4 md:p-6">
        <h1 className="text-[#3a3a3a] text-[1.25rem] md:text-[24px] font-extrabold">Join Mega Sprint Waiting List</h1>
        <p className="text-[#6d6d6d] text-[1rem] leading-[170%]">
          Please share the following details below and we will connect with you as soon as the Mega Sprint program is launched at the lab.
        </p>
        
        {Object.entries(formData).map(([key, value]) => (
          <div key={key} className="w-full flex flex-col gap-2">
            <label className="text-[#3a3a3a] text-sm font-medium">
              {key === "schoolName"
                ? "School Name" :
                key.charAt(0).toUpperCase() +
                key.slice(1).replace("No", " Number")}
              {key === "name" || key === "phoneNo" ? <span className="text-[#f55c38]">*</span> : null}
            </label>
            {key === "city" ? (
              <input className="w-full h-12 md:h-14 px-4 py-2 bg-[#dedede] rounded-full border border-[#3a3a3a]" value={value} readOnly />
            ) : key === "phoneNo" ? (
              <div className="relative flex items-center bg-[#dedede] rounded-full">
                {/*<span className="absolute left-4 text-[#3a3a3a]">+91</span>*/}
                <input
                  className="w-full h-12 md:h-14 px-4 py-2 rounded-full border border-[#3a3a3a]"
                  type="tel"
                  name={key}
                  value={value}
                  onChange={handleInputChange}
                  placeholder="xxxxxxxxxx"
                  disabled
                />
              </div>
            ) : (
              <input
                className="w-full h-12 md:h-14 px-4 py-2 rounded-full border border-[#3a3a3a]"
                type={key === "email" ? "email" : "text"}
                name={key}
                value={value}
                onChange={handleInputChange}
                placeholder={`Enter your ${key}`}
              />
            )}
            {errors[key as keyof FormErrors] && <p className="text-red-500 text-sm">{errors[key as keyof FormErrors]}</p>}
          </div>
        ))}

        <button
          className="w-full md:w-auto h-12 md:h-14 px-6 md:px-8 py-2 bg-[#f55c38] rounded-full text-white"
          onClick={handleJoinWaitingList}
        >
          Join Waiting List
        </button>
      </div>
      <WaitingListPopup isOpen={isModalOpen} name={formData.name} />
      {showErrorPopup && <ErrorHighDemand closePopup={closeErrorPopup} errorMessage={errorMessage} />}
    </div>
  );
};

export default MegaPage;