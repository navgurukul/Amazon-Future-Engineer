// import { callBookingQuery } from "@/utils/api";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";

// interface PopupProps {
//   offlinePopup: boolean;
//   handleOfflineBookingClose: () => void;
//   handleClose: () => void;
// }

// const Popup: React.FC<PopupProps> = ({
//   offlinePopup,
//   handleOfflineBookingClose,
//   handleClose,
// }) => {
//   const [name, setName] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [error, setError] = useState<string | null>(null);
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);
//   const [nameError, setNameError] = useState<string | null>(null);

//   useEffect(() => {
//     const phoneNumber = localStorage.getItem("loginData")
//       ? JSON.parse(localStorage.getItem("loginData") || "{}").data.phone
//       : "";
//     setPhoneNumber(phoneNumber)
//   }, [])

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const phonePattern = /^[6-9]\d{9}$/;

//     setError(null);
//     setErrorMessage(null);
//     setNameError(null);

//     const namePattern = /^[A-Za-z\s]+$/;
//     if (!name.trim()) {
//       setNameError("Name is required");
//       return;
//     } else if (!namePattern.test(name.trim())) {
//       setNameError("Name should only contain letters");
//       return;
//     }
//     const programData = JSON.parse(localStorage.getItem('programData') || '[]');
//     const nanoProgram = programData.find((program: any) => program.title === "NANO");

//     const bookingData = {
//       name,
//       phone: phoneNumber,
//       program_id: nanoProgram?.id,
//       venue_id: nanoProgram?.venue_id,
//       query_type: "Booking",
//     };

//     try {
//       await callBookingQuery(bookingData);
//       handleOfflineBookingClose();
//       setName("");
//       setPhoneNumber("");
//     } catch (error: any) {
//       alert(error.message)
//     }
//   };

//   const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const phoneInput = e.target.value;
//   };

//   if (!offlinePopup) return null;

//   return (
//     <>
//       <div className="fixed inset-0 bg-black bg-opacity-70 flex items-end md:items-center justify-center z-50">
//         <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-4 md:p-8 flex flex-col items-start gap-4 text-left text-gray-500">
//           <div className="flex items-center justify-between w-full mb:2 md:mb-4">
//             <div className="text-[#3a3a3a] leading-[150%] text-subHeading1 md:text-heading6 font-heading6-bold">
//               Call Us
//             </div>

//             <Image
//               className="w-5 h-5 cursor-pointer"
//               alt="close"
//               src="/userDashboard/close.svg"
//               onClick={handleClose}
//               width={20}
//               height={20}
//             />
//           </div>
//           <div className="relative text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray">
//             Need assistance with booking a Nano session or have general queries? We are here to help!
//           </div>
//           <div className="relative text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray">
//             <b>Response Time:</b>
//             <span className="relative text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray"> Within 24 hours</span>
//           </div>
//           <div className="relative text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray">
//             <b>Operational Time:</b>
//             <span className="relative text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray"> Monday to Friday, 9 AM to 6 PM</span>
//           </div>
//           <div className="relative text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray md:mb-4">
//             Please provide your name and phone number, and we all get back to you shortly.
//           </div>
//           <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
//             <div className="flex flex-col gap-2 w-full">
//               <label className="font-medium text-[#3a3a3a] leading-[170%] text-body2" htmlFor="name">
//                 Name <span className="text-[#f55c38]">*</span>
//               </label>
//               <input
//                 id="name"
//                 type="text"
//                 className="w-full h-12 flex items-center justify-start px-4 border border-gray-700 rounded-full text-base text-gray-700"
//                 placeholder="Eg. Prakash"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//               {nameError && (
//                 <div className="text-red-500 text-sm">{nameError}</div>
//               )}
//             </div>
//             <div className="flex flex-col gap-2 w-full">
//               <label className="font-medium leading-[170%] text-[#3a3a3a] text-body2" htmlFor="phone">
//                 Phone Number <span className="text-[#f55c38]">*</span>
//               </label>
//               <input
//                 id="phone"
//                 type="tel"
//                 className="w-full h-12 flex items-center justify-start px-4 border border-gray-700 rounded-full text-base text-gray-700 bg-[#dedede]"
//                 placeholder="Eg. xxxx-xxxxxxx"
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//                 required
//                 disabled
//               />
//               {error && <div className="text-red-500 text-sm">{error}</div>}
//               {errorMessage && <div className="text-red-500 text-sm">{errorMessage}</div>}
//             </div>
//             <div className="w-full flex justify-end mt-2 md:mt-4">
//               <div className="w-full lg:w-auto">
//                 <button
//                   type="submit"
//                   className="w-full bg-[#f55c38] rounded-[100px] flex justify-center items-center cursor-pointer text-white"
//                 >
//                   <div className="px-8 py-4 text-center font-medium font-['Amazon Ember'] leading-[170%]">
//                     Request a Callback
//                   </div>
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Popup;

import { callBookingQuery } from "@/utils/api";
// Assuming the API function is correctly imported
import Image from "next/image";
import React, { useEffect, useState } from "react";


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
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [nameError, setNameError] = useState<string | null>(null);
  const [callStatus, setCallStatus] = useState<string>("");

  useEffect(() => {
    const storedPhoneNumber = localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData") || "{}").data.phone
      : "";
    setPhoneNumber(storedPhoneNumber);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const namePattern = /^[A-Za-z\s]+$/;

    // Clear previous error messages
    setError(null);
    setErrorMessage(null);
    setNameError(null);

    // Validate name
    if (!name.trim()) {
      setNameError("Name is required");
      return;
    } else if (!namePattern.test(name.trim())) {
      setNameError("Name should only contain letters");
      return;
    }

    const programData = JSON.parse(localStorage.getItem("programData") || "[]");
    const nanoProgram = programData.find((program: any) => program.title === "NANO");

    const bookingData = {
      // name,
      // phone: phoneNumber,
      program_id: nanoProgram?.id,
      venue_id: nanoProgram?.venue_id,
      // query_type: "",
    };

    try {
      await callBookingQuery(bookingData); // API call
      setCallStatus("CallRequested"); // Update the status after successful API call
      handleOfflineBookingClose(); // Close the popup after submission
      setName("");
      setPhoneNumber("");
    } catch (error: any) {
      alert(error.message);
    }
  };

  if (!offlinePopup) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-70 flex items-end md:items-center justify-center z-50">
        <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-4 md:p-8 flex flex-col items-start gap-4 text-left text-gray-500">
          <div className="flex items-center justify-between w-full mb:2 md:mb-4">
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
          <div className="relative text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray">
            Need assistance with booking a Nano session or have general queries? We are here to help!
          </div>
          <div className="relative text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray">
            <b>Response Time:</b>
            <span> Within 24 hours</span>
          </div>
          <div className="relative text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray">
            <b>Operational Time:</b>
            <span> Monday to Friday, 9 AM to 6 PM</span>
          </div>
          <div className="relative text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray md:mb-4">
            Please provide your name and phone number, and we will get back to you shortly.
          </div>
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            <div className="flex flex-col gap-2 w-full">
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
              {nameError && (
                <div className="text-red-500 text-sm">{nameError}</div>
              )}
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
                required
                disabled
              />
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