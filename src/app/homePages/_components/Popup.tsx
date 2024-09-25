import type { NextPage } from "next";
import { useCallback } from "react";

interface PopupProps {
  closeHelpDeskPopup: () => void;
}

const Popup: NextPage<PopupProps> = ({ closeHelpDeskPopup }) => {
  const onFrameContainerClick = useCallback(() => {
    // Add your code here
  }, []);

  const onNoClick = useCallback(() => {
    closeHelpDeskPopup();
  }, [closeHelpDeskPopup]);

  return (
    <div className="fixed bottom-0 w-full md:w-2/3 lg:w-1/3 shadow-md rounded-lg bg-white flex flex-col justify-between p-4 lg:p-8 gap-4 text-left text-gray-500 font-nunito-sans">
      {/* Popup header and content */}
      <div className="flex flex-col gap-4 flex-grow">
        <div className="flex items-center justify-between text-lg font-amazon-ember w-full">
          <div className="font-extrabold">Helpdesk</div>
          <img
            className="w-6 h-6 cursor-pointer"
            alt="close"
            src="/homepage/close.svg"
            onClick={onNoClick}
          />
        </div>
        <div className="leading-7 font-medium">
          You can talk to our representative for sprint information, booking
          sprints, or any general queries.
        </div>
        <div className="leading-7">
          <b>Response Time:</b>{" "}
          <span className="font-medium">Within 24 hours</span>
        </div>
        <div className="leading-7">
          <b>Operational Time:</b>{" "}
          <span className="font-medium">Mon to Fri from 9 AM to 6 PM</span>
        </div>

        {/* Name input */}
        <div className="flex flex-col gap-2 w-full">
          <div className="font-medium">
            <span>Name</span>
            <span className="text-[#f55c38]">*</span>
          </div>
          <div className="w-full h-14 flex items-center justify-start px-4 border border-gray-700 rounded-full text-lg text-gray-400">
            Eg. Prakash
          </div>
        </div>

        {/* Phone input */}
        <div className="flex flex-col gap-2 w-full">
          <div className="font-medium">
            <span>Phone Number</span>
            <span className="text-[#f55c38]">*</span>
          </div>
          <div className="w-full h-14 flex items-center justify-start px-4 border border-gray-700 rounded-full text-lg text-gray-400">
            Eg. xxxx-xxxxxxx
          </div>
        </div>
      </div>

      {/* Request Callback button */}
      <div className="w-full lg:w-auto h-14 rounded-full bg-[#f55c38] flex items-center justify-center cursor-pointer text-white font-amazon-ember">
        Request a Callback
      </div>
    </div>
  );
};

export default Popup;
