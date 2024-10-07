import React, { useState } from "react";

interface PopupProps {
  offlinePopup: boolean;
  handleClose: () => void;
  handleOfflineBookingClose: () => void;
}

const CallPopup: React.FC<PopupProps> = ({ offlinePopup, handleClose }) => {
  if (!offlinePopup) return null;

  return (
    <>
      {/* Backdrop Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>

      {/* Popup Dialog */}
      <div className="fixed inset-0 flex items-end md:items-center justify-center z-50">
        <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-6 flex flex-col items-start gap-4 text-left text-gray-500 font-nunito-sans">
          {/* Title and Close Button */}
          <div className="flex items-center justify-between text-lg font-amazon-ember w-full">
            <div className="relative text-5xl leading-[150%] font-extrabold font-webtypestyles-h6 text-text-primary text-left">
              Call Us
            </div>
            <img
              className="w-5 h-5 cursor-pointer"
              alt="close"
              src="/homepage/close.svg"
              onClick={handleClose}
            />
          </div>
          
          {/* Description Text */}
          <div className="w-full relative text-lg leading-[170%] font-medium font-webtypestyles-body1 text-text-primary text-left inline-block">
            Need help with booking a session, learning about our program
            offerings, or have any general questions? We are here for you!
          </div>

          {/* Response Time */}
          <div className="w-full relative text-[18px] leading-[170%] text-text-primary text-left inline-block font-amazon-ember">
            <b>Response Time:</b>
            <span className="font-medium"> Within 24 hours</span>
          </div>

          {/* Operational Time */}

          <div className=" w-full mt-0 p-4 bg-[#fff2f2] rounded-lg flex flex-col justify-center items-center">
          <div className="relative text-5xl leading-[150%] font-extrabold font-webtypestyles-h6 text-text-primary text-center">+916366969292</div>
            <div className="relative text-lg leading-[170%] font-medium font-webtypestyles-body1 text-text-primary text-center">
              Monday to Friday, 9 AM to 6 PM
            </div>
          </div>
          <div className="w-full flex flex-row items-center justify-end mt-2">
          {/* <button className="md:w-auto relative rounded-[100px] border-incandescent-main border-[1px] border-solid box-border h-14  py-2 px-4 text-center text-lg bg-incandescent-main text-[#fff] font-webtypestyles-buttonlarge w-full">
            <div className="relative text-lg leading-[170%] font-medium font-webtypestyles-buttonlarge text-incandescent-contrasttext text-center">
              Request a Callback
            </div>
          </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CallPopup;
