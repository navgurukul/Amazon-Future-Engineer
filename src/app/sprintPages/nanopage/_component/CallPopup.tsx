import React, { useState } from "react";

interface PopupProps {
  offlinePopup: boolean;
  handleClose: () => void;
}

const CallPopup: React.FC<PopupProps> = ({
  offlinePopup,
  handleClose,
}) => {
  if (!offlinePopup) return null;

  return (
    <>
      {/* Backdrop Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>

      {/* Popup Dialog */}
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-6 flex flex-col items-start gap-4 text-left text-gray-500 font-nunito-sans">
          {/* Title and Close Button */}
          <div className="flex items-center justify-between text-lg font-amazon-ember w-full">
            <div className="font-extrabold">Helpdesk</div>
            <img
              className="w-5 h-5 cursor-pointer"
              alt="close"
              src="/homepage/close.svg"
              onClick={handleClose}
            />
          </div>

          {/* Description Text */}
          <div className="leading-6 font-medium text-sm">
            You can talk to our representative for sprint information, booking
            sprints, or any general queries.
          </div>

          {/* Response Time */}
          <div className="leading-6 text-sm">
            <b>Response Time:</b>{" "}
            <span className="font-medium">Within 24 hours</span>
          </div>

          {/* Operational Time */}
          <div className="leading-6 text-sm">
            <b>Operational Time:</b>{" "}
            <span className="font-medium">Mon to Fri from 9 AM to 6 PM</span>
          </div>
          <div className=" w-full mt-6 p-4 bg-[#fff2f2] rounded-lg flex flex-col justify-center items-center">
          <div className="text-center text-[#3a3a3a] font-extrabold text-heading5 font-heading5-bold">
            +91 8597437548
          </div>

          <div className="text-center text-black text-lg font-medium font-['Amazon Ember'] leading-6 sm:leading-[30.60px]">
            AFE Helpdesk
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default CallPopup;
