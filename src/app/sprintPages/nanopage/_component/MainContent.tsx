import Booking from "./Booking";
import Image from "next/image";
import React from "react";


const MainContent = ({handleOfflineBooking}) => {
  return (
    <div className="pt-[104px] py-16 max-w-[70%] mx-auto flex flex-col gap-8">
      <div className="flex flex-col md:flex-row items-center justify-start gap-8 md:gap-16 text-xl md:text-2xl lg:text-3xl">
        <div className="text-sm md:text-lg leading-[150%] text-left inline-block">
          <span className="text-darkslateblue text-[#29458c]">
            <b className="font-amazon-ember">Home</b>
          </span>
          <span className="font-medium font-amazon-ember">
            <span className="text-darkslateblue">{` / `}</span>
            <span className="text-darkslategray">Sprints</span>
          </span>
        </div>
      </div>

      {/* Adjusted sprint images */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-left text-lg md:text-2xl lg:text-3xl text-text-primary font-webtypestyles-h6">
        <div className="w-full sm:w-[110px] flex flex-col items-center justify-start gap-4 text-[#29458c]">
          <Image
            className="w-full h-auto object-cover rounded-md"
            alt="Nano Sprints"
            src="/nanopage/Vector.svg"
            width={110}
            height={110}
          />
          <div className="leading-[150%] font-extrabold">Nano Sprints</div>
        </div>
        <div className="w-full sm:w-[110px] flex flex-col items-center justify-start gap-4 cursor-pointer">
          <Image
            className="w-full h-auto object-cover  rounded-md"
            alt="Mini Sprints"
            src="/nanopage/Vector (1).svg"
            width={110}
            height={110}
          />
          <div className="leading-[150%]">Mini Sprints</div>
        </div>
        <div className="w-full sm:w-[110px] flex flex-col items-center justify-start gap-4 cursor-pointer">
          <Image
            className="w-full h-auto object-cover  rounded-md"
            alt="Mega Sprints"
            src="/nanopage/Vector (1).svg"
            width={110}
            height={110}
          />
          <div className="leading-[150%]">Mega Sprints</div>
        </div>
      </div>

      {/* Increased heading size */}
      <div className="md:max-w-[70%] text-2xl md:text-13xl lg:text-4xl leading-[150%] font-extrabold font-webtypestyles-h5 text-[#29458c] text-left mt-6 md:mt-10">
        Nano Sprints: One-Day Introductory Sessions to Spark Interest and Build Aspiration
      </div>

      {/* First two images in the same row */}
      <div className="flex flex-col sm:flex-row gap-6 justify-between">
        <img
          src="/nanopage/Rectangle 4.jpeg"
          className="w-full sm:w-[48%] h-auto rounded-md"
          alt="First Image"
        />
        <img
          src="/nanopage/Rectangle 32.jpeg"
          className="w-full sm:w-[48%] h-auto rounded-md"
          alt="Second Image"
        />
      </div>

      {/* Last three images in the same row */}
      <div className="flex flex-col sm:flex-row gap-6 justify-between">
        <img
          src="/nanopage/Rectangle 4.jpeg"
          className="w-full sm:w-[32%] h-auto rounded-md"
          alt="First Image"
        />
        <img
          src="/nanopage/Rectangle 32.jpeg"
          className="w-full sm:w-[32%] h-auto rounded-md"
          alt="Second Image"
        />
        <img
          src="/nanopage/Rectangle 32.jpeg"
          className="w-full sm:w-[32%] h-auto rounded-md"
          alt="Third Image"
        />
      </div>

      <Booking handleOfflineBooking={handleOfflineBooking}/>
    </div>
  );
};

export default MainContent;