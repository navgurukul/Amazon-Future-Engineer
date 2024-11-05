import type { NextPage } from "next";
import SmartImage from "@/components/SmartImage";;
import { useCallback } from "react";
import { useAppState } from "@/context/AppContext";

interface PopupProps {
  closeHelpDeskPopup: () => void;
}

const Popup: NextPage<PopupProps> = ({ closeHelpDeskPopup }) => {
  const { isLanguageEnglish } = useAppState(); // Access language state
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
          <div className="font-extrabold">
            {/* Helpdesk */}
            {isLanguageEnglish
                ? "Helpdesk"
                : "ಸಹಾಯದesk"}
          </div>
          <SmartImage
            className="w-6 h-6 cursor-pointer"
            alt="close"
            src="/homepage/close.svg"
            onClick={onNoClick}
            width={24}
            height={24}
          />
        </div>
        <div className="leading-7 font-medium">
          {/* You can talk to our representative for sprint information, booking
          sprints, or any general queries. */}
          {isLanguageEnglish
              ? "You can talk to our representative for sprint information, booking sprints, or any general queries."
              : "ನೀವು ಸ್ಪ್ರಿಂಟ್ ಮಾಹಿತಿಗಾಗಿ, ಸ್ಪ್ರಿಂಟ್ಸ್ ಬುಕ್ ಮಾಡಲು ಅಥವಾ ಯಾವುದೇ ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೆಗಳಿಗೆ ನಮ್ಮ ಪ್ರತಿನಿಧಿಯೊಂದಿಗೆ ಮಾತನಾಡಬಹುದು."}
        </div>
        <div className="leading-7">
          {/* <b>Response Time:</b>{" "} */}
          {/* <span className="font-medium">Within 24 hours</span> */}
          <b>{isLanguageEnglish ? "Response Time:" : "ಪ್ರತಿಕ್ರಿಯಾ ಸಮಯ:"}</b>{" "}
        </div>
        <div className="leading-7">
          {/* <b>Operational Time:</b>{" "} */}
          <b>{isLanguageEnglish ? "Operational Time:" : "ಕಾರ್ಯನಿರ್ವಹಣಾ ಸಮಯ:"}</b>{" "}
          <span className="font-medium">
            {/* Mon to Fri from 9 AM to 6 PM */}
            {isLanguageEnglish
                ? "Mon to Fri from 9 AM to 6 PM"
                : "ಸೋಮವಾರದಿಂದ ಶುಕ್ರವಾರ 9 AM ರಿಂದ 6 PM"}
          </span>
        </div>

        {/* Name input */}
        <div className="flex flex-col gap-2 w-full">
          <div className="font-medium">
            {/* <span>Name</span> */}
            {isLanguageEnglish ? "Name" : "ಹೆಸರು"}
            <span className="text-[#f55c38]">*</span>
          </div>
          <div className="w-full h-14 flex items-center justify-start px-4 border border-gray-700 rounded-full text-lg text-gray-400">
            Eg. Prakash
          </div>
        </div>

        {/* Phone input */}
        <div className="flex flex-col gap-2 w-full">
          <div className="font-medium">
            {/* <span>Phone Number</span> */}
            {isLanguageEnglish ? "Phone Number" : "ಫೋನ್ ಸಂಖ್ಯೆ"}
            <span className="text-[#f55c38]">*</span>
          </div>
          <div className="w-full h-14 flex items-center justify-start px-4 border border-gray-700 rounded-full text-lg text-gray-400">
            Eg. xxxx-xxxxxxx
          </div>
        </div>
      </div>

      {/* Request Callback button */}
      <div className="w-full lg:w-auto h-14 rounded-full bg-[#f55c38] flex items-center justify-center cursor-pointer text-white font-amazon-ember">
        {/* Request a Callback */}
        {isLanguageEnglish ? "Request a Callback" : "ಕಾಲ್‌ಬ್ಯಾಕ್ ಕೇಳಿ"}
      </div>
    </div>
  );
};

export default Popup;
