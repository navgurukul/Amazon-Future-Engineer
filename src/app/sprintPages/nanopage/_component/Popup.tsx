import React, { useEffect, useState } from "react";
import { callBookingQuery } from "@/utils/api";
import Image from "next/image";

interface PopupProps {
  offlinePopup: boolean;
  handleOfflineBookingClose: () => void;
  handleClose: () => void;
}

const Popup: React.FC<PopupProps> = ({
  offlinePopup,
  handleOfflineBookingClose,
  handleClose,
}) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);


  useEffect(()=>{
    const phoneNumber = localStorage.getItem("loginData")
    ? JSON.parse(localStorage.getItem("loginData") || "{}").data.phone
    : "";
    setPhoneNumber(phoneNumber)
  },[])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const phonePattern = /^[6-9]\d{9}$/;

    // Clear previous error messages
    setError(null);
    setErrorMessage(null);

    // Phone number validation
    if (!phoneNumber) {
      setErrorMessage("Please enter a phone number to proceed");
      return;
    }

    if (phoneNumber.length !== 10) {
      setErrorMessage("Please enter a 10-digit phone number");
      return;
    }

    if (!phonePattern.test(phoneNumber)) {
      setErrorMessage("Please enter a phone number starting with 6 or above");
      return;
    }
    const programData = JSON.parse(localStorage.getItem('programData') || '[]');
    const nanoProgram = programData.find((program: any) => program.title === "NANO");

    const bookingData = {
      name,
      phone: phoneNumber,
      program_id: nanoProgram?.id,
      venue_id: nanoProgram?.venue_id,
      query_type: "Booking",
    };

    try {
      await callBookingQuery(bookingData);
      handleOfflineBookingClose();
      setName("");
      setPhoneNumber("");
    } catch (error: any) {
      alert(error.message)
    }
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phoneInput = e.target.value;

    // Allow only numerical characters
    if (/^\d*$/.test(phoneInput) && phoneInput.length <= 10) {
      setPhoneNumber(phoneInput);
    }
  };

  if (!offlinePopup) return null;

  return (
    <>
      {/* <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div> */}
      <div className="fixed inset-0 bg-black bg-opacity-70 flex items-end md:items-center justify-center z-50">
        <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-4 md:p-8 flex flex-col items-start gap-4 text-left text-gray-500">
          <div className="flex items-center justify-between w-full mb:2 md:mb-4">
            {/* <div className="font-extrabold text-[#3a3a3a] leading-9 text-xl md:text-2xl lg:text-3xl md:leading-10 lg:leading-[40px]"> */}
            <div className="text-[#3a3a3a] leading-[150%] text-subHeading1 md:text-heading6 font-heading6-bold">
              Call Us
            </div>

            <Image
              className="w-5 h-5 cursor-pointer"
              alt="close"
              src="/userDashboard/close.svg"
              onClick={handleClose}
              width={20}
              height={20}
            />
          </div>
          {/* <div className="font-['Amazon Ember'] text-[#3a3a3a] leading-[30.60px] font-medium text-lg"> */}
          <div className="relative text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray">
            Need assistance with booking a Nano session or have general queries? We are here to help!
          </div>
          <div className="relative text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray">
            <b>Response Time:</b>
            <span className="relative text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray"> Within 24 hours</span>
          </div>
           <div className="relative text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray">
            <b>Operational Time:</b>
            <span className="relative text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray"> Monday to Friday, 9 AM to 6 PM</span>
          </div>
          <div className="relative text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray md:mb-4">
            Please provide your name and phone number, and we all get back to you shortly.
          </div>
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            <div className="flex flex-col gap-2 w-full">
              {/* <label className="font-medium text-[#3a3a3a] leading-normal text-sm" htmlFor="name"> */}
              <label className="font-medium text-[#3a3a3a] leading-[170%] text-body2" htmlFor="name">
                Name <span className="text-[#f55c38]">*</span>
              </label>
              <input
                id="name"
                type="text"
                className="w-full h-12 flex items-center justify-start px-4 border border-gray-700 rounded-full text-base text-gray-700"
                placeholder="Eg. Prakash"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
              <div className="flex flex-col gap-2 w-full">
              <label className="font-medium leading-[170%] text-[#3a3a3a] text-body2" htmlFor="phone">
                Phone Number <span className="text-[#f55c38]">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                className="w-full h-12 flex items-center justify-start px-4 border border-gray-700 rounded-full text-base text-gray-700 bg-[#dedede]"
                placeholder="Eg. xxxx-xxxxxxx"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                disabled
              />
              {error && <div className="text-red-500 text-sm">{error}</div>}
              {errorMessage && <div className="text-red-500 text-sm">{errorMessage}</div>}
            </div>
            <div className="w-full flex justify-end mt-2 md:mt-4">
              <div className="w-full lg:w-auto">
                <button
                  type="submit"
                  className="w-full bg-[#f55c38] rounded-[100px] flex justify-center items-center cursor-pointer text-white"
                >
                  <div className="px-8 py-4 text-center font-medium font-['Amazon Ember'] leading-[170%]">
                    Request a Callback
                  </div>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Popup;


