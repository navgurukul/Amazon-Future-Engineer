import React from "react";

const LastPart = () => {
  return (
    <div className="flex flex-col gap-8 mt-20 max-w-full sm:max-w-[70%]">
      <div className="w-full mt-4">
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-13xl leading-[150%] font-extrabold font-webtypestyles-h5 text-midnight-blue-main text-left">
          Have Any Questions?
        </div>
        <b className="text-base sm:text-lg md:text-xl leading-[170%] font-webtypestyles-subtitle1 text-left text-darkslategray mt-2">
          <span>{`Reach out to us at `}</span>
          <span className="text-tomato">afeinnovation@ihub.com</span>
        </b>
      </div>
    </div>
  );
};

export default LastPart;