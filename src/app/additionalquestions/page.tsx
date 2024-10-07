"use client"
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import DialogHeader from "@/components/DialogHeader";
import WaitingListPopup from "./_components/WaitingListPopup";
import { createWaitingList } from "@/utils/api";

const MiniPage = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  interface FormData {
    name: string;
    phoneNo: string;
    city: string;
    schoolName: string;
    email: string;
    pincode: string;
  }
  
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phoneNo: "",
    city: "Bengaluru",
    schoolName: "",
    email: "",
    pincode: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  interface MiniProgram {
    venue_id: string;
    id: string;
    title: string;
  }

  const [miniProgram, setMiniProgram] = useState<MiniProgram | null>(null);

  useEffect(() => {
    const programData = JSON.parse(localStorage.getItem("programData") || "[]");
    const foundMiniProgram = programData.find((program: { title: string; }) => program.title === "MINI");
    setMiniProgram(foundMiniProgram);
  }, []);

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!/^\d{10}$/.test(formData.phoneNo)) newErrors.phoneNo = "Enter a valid 10-digit number";
    if (!formData.schoolName.trim()) newErrors.schoolName = "School name is required";
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Enter a valid email";
    if (formData.pincode && !/^\d{6}$/.test(formData.pincode)) newErrors.pincode = "Enter a valid 6-digit pincode";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleJoinWaitingList = async () => {
    if (validateForm()) {
      try {
        const waitingListData = {
          name: formData.name,
          email: formData.email,
          venue_id: Number(miniProgram?.venue_id),
          program_id: Number(miniProgram?.id),
          city: formData.city,
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

  return (
    <div className="pt-[120px] w-full min-h-screen bg-white flex flex-col justify-center items-center gap-8 md:gap-16">
      <DialogHeader />
      <div className="w-full md:w-[592px] rounded-lg flex flex-col justify-start items-center gap-8 p-4 md:p-6">
        <h1 className="text-[#3a3a3a] text-[1.25rem] md:text-[24px] font-extrabold">Join Mini Sprint Waiting List</h1>
        <p className="text-[#6d6d6d] text-[1rem] leading-[170%]">
          Please share the following details below and we will connect with you as soon as the Mini Sprint program is launched at the lab.
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
              <div className="relative flex items-center">
                <span className="absolute left-4 text-[#3a3a3a]">+91</span>
                <input
                  className="w-full h-12 md:h-14 pl-12 pr-4 py-2 rounded-full border border-[#3a3a3a]"
                  type="tel"
                  name={key}
                  value={value}
                  onChange={handleInputChange}
                  placeholder="xxxxxxxxxx"
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
            {errors[key as keyof FormData] && <p className="text-red-500 text-sm">{errors[key as keyof FormData]}</p>}
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
    </div>
  );
};

export default MiniPage;