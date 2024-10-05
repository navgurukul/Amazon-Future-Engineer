// import React, { useState } from "react";
// import { callBookingQuery } from "@/utils/api";

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

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const phonePattern = /^[6-9]\d{9}$/;

//     // Clear previous error messages
//     setError(null);
//     setErrorMessage(null);

//     // Phone number validation
//     if (!phoneNumber) {
//       setErrorMessage("Please enter a phone number to proceed");
//       return;
//     }

//     if (phoneNumber.length !== 10) {
//       setErrorMessage("Please enter a 10-digit phone number");
//       return;
//     }

//     if (!phonePattern.test(phoneNumber)) {
//       setErrorMessage("Please enter a phone number starting with 6 or above");
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

//     // Allow only numerical characters
//     if (/^\d*$/.test(phoneInput) && phoneInput.length <= 10) {
//       setPhoneNumber(phoneInput);
//     }
//   };

//   if (!offlinePopup) return null;

//   return (
//     <>
//       <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
//       <div className="mt-20 fixed inset-0 flex items-end md:items-center justify-center z-50">
//         <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-6 flex flex-col items-start gap-4 text-left text-gray-500 font-nunito-sans">
//           <div className="flex items-center justify-between text-lg font-amazon-ember w-full">
//             <div className="font-extrabold">Helpdesk</div>
//             <img
//               className="w-5 h-5 cursor-pointer"
//               alt="close"
//               src="/homepage/close.svg"
//               onClick={handleClose}
//             />
//           </div>
//           <div className="leading-6 font-medium text-sm">
//             You can talk to our representative for sprint information, booking
//             sprints, or any general queries.
//           </div>
//           <div className="leading-6 text-sm">
//             <b>Response Time:</b>{" "}
//             <span className="font-medium">Within 24 hours</span>
//           </div>
//           <div className="leading-6 text-sm">
//             <b>Operational Time:</b>{" "}
//             <span className="font-medium">Mon to Fri from 9 AM to 6 PM</span>
//           </div>
//           <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
//             <div className="flex flex-col gap-1 w-full">
//               <label className="font-medium text-sm" htmlFor="name">
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
//             </div>

//             <div className="flex flex-col gap-1 w-full">
//               <label className="font-medium text-sm" htmlFor="phone">
//                 Phone Number <span className="text-[#f55c38]">*</span>
//               </label>
//               <input
//                 id="phone"
//                 type="tel"
//                 className="w-full h-12 flex items-center justify-start px-4 border border-gray-700 rounded-full text-base text-gray-700"
//                 placeholder="Eg. xxxx-xxxxxxx"
//                 value={phoneNumber}
//                 onChange={handlePhoneNumberChange}
//                 required
//               />
//               {error && <div className="text-red-500 text-sm">{error}</div>}
//               {errorMessage && <div className="text-red-500 text-sm">{errorMessage}</div>}
//             </div>

//             <div className="w-full flex justify-end">
//               <button
//                 type="submit"
//                 className="rounded-full bg-[#f55c38] h-14 flex items-center justify-center px-8 cursor-pointer text-white font-amazon-ember"
//               >
//                 Request a Callback
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Popup;


"use client";

import Image from "next/image";
import React, { useState } from "react";

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload on form submission

    // Store the data in localStorage
    localStorage.setItem("userData", JSON.stringify({ name, phoneNumber }));

    // Close the popup after saving data
    handleOfflineBookingClose();
  };

  if (!offlinePopup) return null;

  return (
    <>
    
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>

      <div className="fixed bottom-0 md:inset-0 flex md:items-center justify-center z-50">
        <div className="w-full md:w-1/3 bg-white shadow-lg rounded-t-lg md:rounded-lg p-6 flex flex-col items-start gap-4 text-left text-gray-500 font-nunito-sans">
          <div className="flex items-center justify-between text-lg font-amazon-ember w-full">
            <div className="font-extrabold text-[#3a3a3a] leading-9 text-xl md:text-2xl lg:text-3xl md:leading-10 lg:leading-[40px]">
              Call Us
            </div>

            <Image
              className="w-5 h-5 cursor-pointer"
              alt="close"
              src="/homepage/close.svg"
              onClick={handleClose}
              width={20}
              height={20}
            />
          </div>

          <div className="font-['Amazon Ember'] text-[#3a3a3a] leading-[30.60px] font-medium text-lg">
            Need assistance with booking a Nano session or have general queries? We’re here to help!
          </div>

          <div className="text-lg font-['Amazon Ember'] leading-[30.60px] text-[#3a3a3a] font-bold">
            <b>Response Time:</b>
            <span className="font-medium leading-[30.60px] text-[#3a3a3a] text-lg"> Within 24 hours</span>
          </div>

          <div className="leading-[30.60px] text-lg text-[#3a3a3a] font-['Amazon Ember'] ">
            <b>Operational Time:</b>
            <span className="font-medium leading-[30.60px] text-[#3a3a3a] text-lg"> Monday to Friday, from 9 AM to 6 PM</span>
          </div>

          <div className="leading-6 font-['Amazon Ember'] font-medium text-[#3a3a3a] text-lg">
            Please provide your name and phone number, and we’ll get back to you shortly.
          </div>

          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            <div className="flex flex-col gap-1 w-full">
              <label className="font-medium text-[#3a3a3a] leading-normal text-sm" htmlFor="name">
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

            <div className="flex flex-col gap-1 w-full">
              <label className="font-medium leading-normal text-[#3a3a3a] text-sm" htmlFor="phone">
                Phone Number <span className="text-[#f55c38]">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                className="w-full h-12 flex items-center justify-start px-4 border border-gray-700 rounded-full text-base text-gray-700"
                placeholder="Eg. xxxx-xxxxxxx"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>          
            <div className="w-full flex justify-end">
              <div className="w-full lg:w-auto">
                <button
                  type="submit"
                  className="h-12 lg:h-14 w-full px-8 py-2 bg-[#f55c38] rounded-[100px] flex justify-center items-center gap-2 cursor-pointer text-white font-amazon-ember"
                >
                  <div className="text-center text-white text-base font-medium font-['Amazon Ember'] leading-7">
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

