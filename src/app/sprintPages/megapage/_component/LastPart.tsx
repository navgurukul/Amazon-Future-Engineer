import React from "react";

const LastPart = () => {
  return (
    <div className="flex flex-col gap-8 md:mt-20 max-w-full sm:max-w-[70%]">
      <div className="w-full">
        <div className="text-2xl md:text-3xl lg:text-13xl leading-[150%] font-extrabold text-midnight-blue-main text-left">
          Have Any Questions?
        </div>
        <b className="w-full relative text-[14px] md:text-[20px] leading-[170%] font-medium text-[#3a3a3a] font-['Amazon Ember']">
          <span>{`Reach out to us at `}</span>
          <span className="text-tomato">afeinnovation@ihub.com</span>
        </b>
      </div>
    </div>
  );
};

export default LastPart;