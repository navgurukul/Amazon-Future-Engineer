import Image from "next/image";
import React from "react";
import Booking from "./Booking";

const MainContent = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-[calc(50%_-_512px)] flex flex-col gap-8">
      <div className="flex flex-col md:flex-row items-center justify-start gap-16 text-2xl md:text-5xl">
        <div className="text-sm md:text-lg leading-[150%] text-left inline-block">
          <span className="text-darkslateblue">
            <b className="font-amazon-ember">Home</b>
          </span>
          <span className="font-medium font-amazon-ember">
            <span className="text-darkslateblue">{` / `}</span>
            <span className="text-darkslategray">Sprints</span>
          </span>
        </div>
      </div>

      {/* Center the 3 sprint images */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-left text-lg md:text-5xl text-text-primary font-webtypestyles-h6">
        <div className="w-full sm:w-[152px] flex flex-col items-center justify-start gap-4 text-midnight-blue-main">
          <Image
            className="w-full sm:w-[127.6px] h-auto sm:h-[120px] object-cover"
            alt="Nano Sprints"
            src="/nanopage/Vector.svg"
            width={127.6}
            height={120}
          />
          <div className="leading-[150%] font-extrabold">Nano Sprints</div>
        </div>
        <div className="w-full sm:w-[152px] flex flex-col items-center justify-start gap-4 cursor-pointer">
          <Image
            className="w-full sm:w-[127.6px] h-auto sm:h-[120px] object-cover mix-blend-luminosity"
            alt="Mini Sprints"
            src="/nanopage/Vector.svg"
            width={127.6}
            height={120}
          />
          <div className="leading-[150%]">Mini Sprints</div>
        </div>
        <div className="w-full sm:w-[152px] flex flex-col items-center justify-start gap-4 cursor-pointer">
          <Image
            className="w-full sm:w-[127.6px] h-auto sm:h-[120px] object-cover mix-blend-luminosity"
            alt="Mega Sprints"
            src="/nanopage/Vector.svg"
            width={127.6}
            height={120}
          />
          <div className="leading-[150%]">Mega Sprints</div>
        </div>
      </div>

      {/* Other elements aligned to the left */}
      <div className="w-full max-w-screen-lg text-lg md:text-13xl leading-[150%] font-extrabold font-webtypestyles-h5 text-midnight-blue-main text-left">
        <div>Nano Sprints: One-Day Introductory Sessions to</div>
        <div>Spark Interest and Build Aspiration</div>
      </div>

      <div className="flex flex-col gap-4 md:gap-8">
        <div className="flex flex-wrap gap-4 justify-start">
          <img src="/nanopage/Rectangle 4.svg" className="w-1/2 md:w-[200px]" />
          <img
            src="/nanopage/Rectangle 32.svg"
            className="w-1/2 md:w-[200px]"
          />
        </div>
        <div className="flex flex-wrap gap-4 justify-start">
          <img
            src="/nanopage/Rectangle 42.svg"
            className="w-1/3 md:w-[200px]"
          />
          <img src="/nanopage/Rectangle 3.svg" className="w-1/3 md:w-[200px]" />
          <img src="/nanopage/Rectangle 3.svg" className="w-1/3 md:w-[200px]" />
        </div>
      </div>
      <Booking/>
    </div>
  );
};

export default MainContent;
