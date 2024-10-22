import React, { useState } from "react";


interface PopupProps {
  offlinePopup: boolean;
  handleClose: () => void;
  handleOfflineBookingClose: () => void;
}

const CallPopup: React.FC<PopupProps> = ({ offlinePopup, handleClose }) => {


  const [copied, setCopied] = useState(false);
  
  if (!offlinePopup) return null;

  const whatsappLink = `https://wa.me/${6366969292}`;



  const phoneNumber = " +91 63669-69292";

  const handleCopy = () => {
      navigator.clipboard.writeText(phoneNumber)
          .then(() => {
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
          })
          .catch(err => {
              console.error("Failed to copy: ", err);
          });
  };

  return (
    <>
      {/* Backdrop Overlay */}
      {/* <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div> */}

      {/* Popup Dialog */}
      <div className="fixed inset-0 bg-black bg-opacity-70 flex items-end md:items-center justify-center z-50">
        <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-4 md:p-8 flex flex-col items-start gap-4 text-left text-gray-500">
          {/* Title and Close Button */}
          <div className="flex items-center justify-between w-full">
            {/* <div className="relative text-5xl leading-[150%] font-extrabold font-webtypestyles-h6 text-text-primary text-left"> */}
            <div className="text-[#3a3a3a] leading-[150%] text-subHeading1 md:text-heading6 font-heading6-bold">
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
          {/* <div className="w-full relative text-lg leading-[170%] font-medium font-webtypestyles-body1 text-text-primary text-left inline-block"> */}
          <div className="relative text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray">
            Need help with booking a session, learning about our program offerings, or have any general questions? We are here for you!
          </div>

          {/* Response Time */}
          <div className="relative text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray">
            <b>Opening Hours:</b>
            <span className="relative text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray"> Monday to Friday, 9 AM to 6 PM</span>
          </div>

          {/* Operational Time */}

          <div className=" w-full mt-0 p-4 bg-[#fff2f2] rounded-lg flex flex-col justify-center items-center">
            <div className="relative leading-[150%] text-center text-heading6 font-heading6-bold text-[#3a3a3a]">
              <a href={whatsappLink} target="_blank" className="font-extrabold">
                +9163669-69292
              </a>
            </div>
            <button
              className="hidden md:flex px-8 py-2 rounded-full border border-[#F55C38] justify-center items-center leading-[170%] mt-2 "
              onClick={handleCopy}
            >
              {copied ? (
                <>
                  <img
                    src="/userDashboard/checkmark_icon.png"
                    alt="Check Icon"
                    className="h-[16px] w-[16px] mr-2"
                  />
                  <div className="h-[24px] w-[33px] text-center text-[#F55C38] md:text-body2 font-body2-regular">
                    Copied!
                  </div>
                </>
              ) : (
                <>
                  <img
                    src="/userDashboard/content_copy.svg"
                    alt="Copy Icon"
                    className="h-[16px] w-[16px] mr-2"
                  />
                  <div className="h-[24px] w-[33px] text-center text-[#F55C38] md:text-body2 font-body2-regular">
                    Copy
                  </div>
                </>
              )}
            </button>
            {/* <div className="relative text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray">
              Monday to Friday, 9 AM to 6 PM
            </div> */}
          </div>
          {/* <div className="w-full flex flex-row items-center justify-end mt-2 md:mt-4">
            <div className="w-full lg:w-auto">
            <button className="w-full bg-[#f55c38] rounded-[100px] flex justify-center items-center cursor-pointer text-white">
            <div className="px-8 py-4 text-center font-medium font-['Amazon Ember'] leading-[170%]">
              Request a Callback
            </div>
          </button>
          </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default CallPopup;