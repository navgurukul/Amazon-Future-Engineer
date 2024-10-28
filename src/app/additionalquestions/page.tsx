"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import DialogHeader from "@/components/DialogHeader";
import WaitingListPopup from "./_components/WaitingListPopup";
import { createWaitingList } from "@/utils/api";
import ErrorHighDemand from "./_components/ErrorHighDemand";
import { useAppState } from "@/context/AppContext";

// Translation object for dynamic field labels and placeholders
const translations = {
  name: { en: "Name", kn: "ಹೆಸರು" },
  phoneNo: { en: "Phone Number", kn: "ದೂರವಾಣಿ ಸಂಖ್ಯೆ" },
  city: { en: "City", kn: "ನಗರ" },
  schoolName: { en: "School Name", kn: "ಶಾಲೆಯ ಹೆಸರು" },
  email: { en: "Email", kn: "ಇಮೇಲ್" },
  pincode: { en: "Pincode", kn: "ಪಿನ್‌ಕೋಡ್" },
};

// Utility function to fetch translations based on the language flag
const getTranslation = (key: keyof FormData, isLanguageEnglish: boolean) =>
  isLanguageEnglish ? translations[key].en : translations[key].kn;

interface FormData {
  name: string;
  phoneNo: string;
  city: string;
  schoolName: string;
  email: string;
  pincode: string;
}

interface MiniProgram {
  venue_id: string;
  id: string;
  title: string;
}

const MiniPage = () => {
  const router = useRouter();
  const { isLanguageEnglish } = useAppState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState<FormData>({
    name: "",
    phoneNo: "",
    city: "Bengaluru",
    schoolName: "",
    email: "",
    pincode: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [miniProgram, setMiniProgram] = useState<MiniProgram | null>(null);

  useEffect(() => {
    const phoneNumber = localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData") || "{}").data.phone
      : "";
    setFormData((prev) => ({ ...prev, phoneNo: phoneNumber }));

    const programData = JSON.parse(localStorage.getItem("programData") || "[]");
    const foundMiniProgram = programData.find(
      (program: { title: string }) => program.title === "MINI"
    );
    setMiniProgram(foundMiniProgram);
  }, []);

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = getTranslation("name", isLanguageEnglish) + " is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name.trim())) {
      newErrors.name = getTranslation("name", isLanguageEnglish) + " should contain only letters";
    }

    if (!formData.schoolName.trim()) {
      newErrors.schoolName = getTranslation("schoolName", isLanguageEnglish) + " is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.schoolName.trim())) {
      newErrors.schoolName = getTranslation("schoolName", isLanguageEnglish) + " should contain only letters";
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (formData.pincode && !/^[1-9][0-9]{5}$/.test(formData.pincode.trim())) {
      newErrors.pincode = "Enter a valid 6-digit pincode";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
          school_name: formData.schoolName,
        };
        await createWaitingList(waitingListData);
        setIsModalOpen(true);
      } catch (error: any) {
        console.error("Error joining waiting list:", error);
        setErrorMessage(error.message);
        setShowErrorPopup(true);
      }
    }
  };

  const closeErrorPopup = () => {
    setShowErrorPopup(false);
    setErrorMessage("");
  };

  return (
    <div className="pt-[120px] w-full min-h-screen bg-white flex flex-col justify-center items-center gap-8 md:gap-16">
      <DialogHeader />
      <div className="w-full md:w-[592px] rounded-lg flex flex-col justify-start items-center gap-8 p-4 md:p-6">
        <h1 className="text-[#3a3a3a] text-[1.25rem] md:text-[24px] font-extrabold">
          {isLanguageEnglish
            ? "Join Mini Sprint Waiting List"
            : "ಮಿನಿ ಸ್ಪ್ರಿಂಟ್ ವೇಟಿಂಗ್ ಲಿಸ್ಟ್‌ಗೆ ಸೇರಿ"}
        </h1>
        <p className="text-[#6d6d6d] text-[1rem] leading-[170%]">
          {isLanguageEnglish
            ? "Please share the following details below and we will connect with you as soon as the Mini Sprint program is launched at the lab."
            : "ದಯವಿಟ್ಟು ಕೆಳಗಿನ ವಿವರಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಿ ಮತ್ತು ಲ್ಯಾಬ್‌ನಲ್ಲಿ ಮಿನಿ ಸ್ಪ್ರಿಂಟ್ ಪ್ರೋಗ್ರಾಂ ಪ್ರಾರಂಭವಾದ ತಕ್ಷಣ ನಾವು ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತೇವೆ."}
        </p>

        {Object.entries(formData).map(([key, value]) => {
          const isDisabled = key === "phoneNo" || key === "city";
          return (
            <div key={key} className="w-full flex flex-col gap-2">
              <label className="text-[#3a3a3a] text-sm font-medium">
                {getTranslation(key as keyof FormData, isLanguageEnglish)}
                {(key === "name" || key === "phoneNo") && (
                  <span className="text-[#f55c38]">*</span>
                )}
              </label>
              <input
                className={`w-full h-12 md:h-14 px-4 py-2 rounded-full border ${
                  isDisabled
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "border-[#3a3a3a]"
                }`}
                type={key === "email" ? "email" : "text"}
                name={key}
                value={value}
                onChange={handleInputChange}
                placeholder={
                  isLanguageEnglish
                    ? `Enter your ${translations[key as keyof FormData].en}`
                    : `${translations[key as keyof FormData].kn} ನಮೂದಿಸಿ`
                }
                disabled={isDisabled}
              />
              {errors[key as keyof FormData] && (
                <p className="text-red-500 text-sm">{errors[key as keyof FormData]}</p>
              )}
            </div>
          );
        })}

        <button
          className="w-full md:w-auto h-12 md:h-14 px-6 md:px-8 py-2 bg-[#f55c38] rounded-full text-white"
          onClick={handleJoinWaitingList}
        >
          {isLanguageEnglish ? "Join Waiting List" : "ಕಾಯುವ ಪಟ್ಟಿಗೆ ಸೇರಿಕೊಳ್ಳಿ"}
        </button>
      </div>
      <WaitingListPopup isOpen={isModalOpen} name={formData.name} />
      {showErrorPopup && (
        <ErrorHighDemand closePopup={closeErrorPopup} errorMessage={errorMessage} />
      )}
    </div>
  );
};

export default MiniPage;
