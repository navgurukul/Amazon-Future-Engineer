import React from "react";
import { useState} from "react";


const LastPart = () => {
  const whatsappLink = `https://wa.me/${6366969292}`;

  const [copied, setCopied] = useState(false);

  const phoneNumber = " +91 63669-69292";

  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumber)
      .then(() => {
        setCopied(true); // Show "Copied!" message

        // Reset the message after 2 seconds
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="flex flex-col gap-8 md:mt-4 max-w-full sm:max-w-[70%]">
      <div className="flex flex-col w-full mt-4 gap-4">
        <h1 className="text-2xl md:text-3xl lg:text-13xl leading-[150%] font-extrabold text-midnight-blue-main text-left">
          Have Questions?
        </h1>
        <p className="w-full relative text-[14px] md:text-[20px] leading-[170%] font-medium text-[#3a3a3a] font-['Amazon Ember']">
          <span>{`Call Us or Whatsapp on `}</span>
          {/* <a href="tel:+919875466343" className="text-tomato">+916366969292</a> */}
          {/* <a href={whatsappLink} target="_blank" className="text-tomato font-extrabold">+9163669-69292</a> */}
          <strong className="inline-flex items-center">
            <a href={whatsappLink} target="_blank" className="text-tomato font-extrabold">
              +91 63669-69292
            </a>
            <button
              className=" px-4 py-2 ml-4 rounded-full border border-[#F55C38] justify-center items-center leading-[170%] flex gap-2 w-[89px] h-[40px]"
              onClick={handleCopy}
            >
              {copied ? (
                <>
                  <img
                    src="/userDashboard/checkmark_icon.png"
                    alt="Check Icon"
                    className="h-[16px] w-[16px]"
                  />
                  <span className="text-[#F55C38] text-base md:text-body2 font-body2-regular">
                    Copied!
                  </span>
                </>
              ) : (
                <>
                  <img
                    src="/userDashboard/content_copy.svg"
                    alt="Copy Icon"
                    className="h-[16px] w-[16px]"
                  />
                  <span className="text-[#F55C38] text-base md:text-body2 font-body2-regular">
                    Copy
                  </span>
                </>
              )}
            </button>
          </strong>
        </p>
      </div>
    </div>
  );
};

export default LastPart;