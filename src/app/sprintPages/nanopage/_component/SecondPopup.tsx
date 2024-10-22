// import type { NextPage } from 'next';

// const SecondPopup: NextPage = () => {
//   return (
//     <>
//       <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
//       <div
//         className="fixed w-full md:w-1/3 bg-white z-50 p-8 gap-4 shadow-lg rounded-lg text-left text-gray-500 font-nunito-sans
//         flex flex-col items-center justify-center 
//         md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2"
//       >
//         <div className="flex flex-col items-center justify-start text-lg text-gray-full font-body-body-reg">
//           <div className="w-full flex flex-col items-center justify-start gap-2">
//             <img className="w-60 relative max-h-full" alt="Line Decoration" src="/nanopage/Rectangle 2933.svg"/>
//             <div className="relative leading-[170%] font-medium text-center">
//             Thanks for requesting a callback. We will reach out to you shortly to confirm your booking plans.
//           </div>
//           <div className="self-stretch bg-gainsboro h-[5px]"/>
//           </div>

//           <div className="self-stretch leading-[170%] font-medium font-webtypestyles-body1 text-center text-text-primary mt-4">
//             <p className="m-0">{`Redirecting to Sprint Information page in 5 seconds or `}</p>
//             <p className="m-0 text-tomato">Go to Sprint Information manually</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SecondPopup;

// import type { NextPage } from 'next';
// import React from 'react';

// const SecondPopup: NextPage = () => {
//   return (
//     <>
//       {/* Overlay */}
//       <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>

//       {/* Popup Container */}
//       <div
//         className="fixed h-[400px]  w-full sm:w-2/3 md:w-1/2 lg:w-1/3 max-w-lg bg-white z-50 p-6 md:p-8 gap-4 shadow-lg rounded-lg text-left text-gray-500 font-nunito-sans flex flex-col items-center justify-center bottom-0 sm:bottom-0 md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2"
//       >
//         {/* Popup Content */}
//         <div className=" flex flex-col items-center justify-start text-lg text-gray-700 font-body-body-reg">
//           <div className="w-full flex flex-col items-center justify-start gap-4">
//             <img
//               className="w-32 sm:w-40 md:w-48 lg:w-60 relative max-h-full"
//               alt="Line Decoration"
//               src="/nanopage/Rectangle 2933.svg"
//             />
//             <div className="relative leading-relaxed font-medium text-center text-gray-800 max-w-full">
//               Thanks for requesting a callback. We will reach out to you shortly to confirm your booking plans.
//             </div>
//             <div className="self-stretch bg-gray-300 h-[5px]" />
//           </div>

//           {/* Redirect Information */}
//           <div className="self-stretch leading-relaxed font-medium text-center text-gray-700 mt-4">
//             <p className="m-0">
//               Redirecting to Sprint Information page in 5 seconds or
//             </p>
//             <p className="m-0 text-red-500 cursor-pointer">
//               Go to Sprint Information manually
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SecondPopup;

"use client";

import type { NextPage } from 'next';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useState } from 'react';


const SecondPopup: NextPage = () => {
  const router = useRouter();
  const whatsappLink = `https://wa.me/${6366969292}`;
  const handleGoToSprints = () => {
    router.push("/sprintPages/nanopage");
    setIsOpen(false);
    console.log('Go to Sprints button clicked');
  };
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
<>
  {/* Overlay background dimming */}
  {/* <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div> */}

  {/* Popup */}
  <div
    className="fixed inset-0 bg-black bg-opacity-70 flex items-end md:items-center justify-center z-50"
  >
    <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-4 md:p-8 flex flex-col items-start gap-4 text-left text-gray-500">
    {/* Header Section */}
    <div className="w-full flex items-center justify-between mb-4">
      <div className="text-[#3a3a3a] leading-[150%] text-subHeading1 md:text-heading6 font-heading6-bold">
        Call Us
      </div>

      {/* <Image
        className="w-5 h-5 cursor-pointer"
        alt="close"
        src="/userDashboard/close.svg"
        width={20}
        height={20}
        onClick={handleClose}
      /> */}
      <img
              className="w-5 h-5 cursor-pointer"
              alt="close"
              src="/homepage/close.svg"
              onClick={handleClose}
            />
    </div>

    {/* Image Section */}
    <div className="w-full flex items-center justify-center mt-4">
      <img
        className="w-full h-[75px]"
        src="/userDashboard/Frame 31751.svg"
        alt="Coding Symbol"
      />
    </div>

    {/* Text Section */}
    <div className="relative md:text-center text-bodyM md:text-body1 text-[#3a3a3a] font-medium mt-4 leading-[170%]">
      Thank you for requesting a callback! We will reach out to you shortly to discuss and confirm your booking plans.
    {/* <div className="relative text-center text-bodyM md:text-body1 text-[#3a3a3a] font-medium mt-8 mb-4 leading-relaxed"> */}
    </div>

    {/* Contact Information */}
    <div className="md:text-center text-bodyM md:text-body1">
      <span className="text-[#3a3a3a] font-medium">
        In the meantime, feel free to call or WhatsApp on{" "}
      </span>
      {/* <span className="text-[#f55c38] font-extrabold">+916366969292</span> */}
      <a href={whatsappLink} target="_blank" className="text-tomato font-extrabold">+9163669-69292</a>
    </div>

    {/* Button */}
    {/* <button
      className="h-12 px-6 py-2 rounded-full border border-[#f55c38] text-[#f55c38] font-medium mt-2 md:mt-4 w-full sm:w-auto"
      onClick={handleGoToSprints}
    >
      Go to Sprints
    </button> */}
    <div className="w-full flex flex-row items-center justify-center mt-2 md:mt-4">
            <div className="w-full lg:w-auto">
            <button className="w-full rounded-[100px] flex justify-center items-center cursor-pointer border border-[#f55c38] text-[#f55c38] text-bodyM md:text-body1" onClick={handleGoToSprints}>
            <div className="px-8 py-4 text-center font-medium font-['Amazon Ember'] leading-[170%]">
              Go to Sprints
            </div>
          </button>
          </div>
          </div>
  </div>
  </div>
</>

  );
};

export default SecondPopup;