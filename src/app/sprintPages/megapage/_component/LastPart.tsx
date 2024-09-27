import React from "react";

const LastPart = () => {
  return (
    <div className="flex flex-col gap-8 md:mt-4 max-w-full sm:max-w-[70%]">
      <div className="flex flex-col w-full mt-4 gap-4">
        <h1 className="text-2xl md:text-3xl lg:text-13xl leading-[150%] font-extrabold text-midnight-blue-main text-left">
          Have Questions?
        </h1>
        <p className="w-full relative text-[14px] md:text-[20px] leading-[170%] font-medium text-[#3a3a3a] font-['Amazon Ember']">
          <span>{`Call Us or Whatsapp on `}</span>
          <span className="text-tomato">+918764674356</span>
        </p>
      </div>
    </div>
  );
};

export default LastPart;