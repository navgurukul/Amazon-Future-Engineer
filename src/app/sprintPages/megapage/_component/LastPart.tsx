import SmartImage from "@/components/SmartImage";
import React from "react";
import { useAppState } from "@/context/AppContext";
import { useState } from "react";


const LastPart = () => {
  const { isLanguageEnglish } = useAppState(); // Access language state

  // const whatsappMessage = encodeURIComponent("Hello! I am a teacher interested in learning more about the AFE Makerspace and booking a session for my students. Please share the next steps. Thank you!");
  const whatsappMessage = encodeURIComponent(
    isLanguageEnglish 
      ? "Hello! I am a teacher interested in learning more about the AFE Makerspace and booking a session for my students. Please share the next steps. Thank you!" 
      : "ನಮಸ್ಕಾರ! ನಾನು ಶಿಕ್ಷಕ/ಶಿಕ್ಷಕಿ. AFE ಮೇಕರ್‌ಸ್ಪೇಸ್ ಮತ್ತು ನನ್ನ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಸೆಷನ್‌ ಬುಕ್ ಮಾಡಲು ಹೆಚ್ಚಿನ ಮಾಹಿತಿ ಪಡೆಯಲು ಆಸಕ್ತಿ ಹೊಂದಿದ್ದೇನೆ. ದಯವಿಟ್ಟು ಮುಂದಿನ ಹಂತಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಿ. ಧನ್ಯವಾದಗಳು!"
  );
  const whatsappLink = `https://wa.me/6366969292?text=${whatsappMessage}`;

  const [copied, setCopied] = useState(false);

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
    <div className="flex flex-col gap-8 md:mt-4 max-w-full sm:max-w-[70%]">
      <div className="flex flex-col w-full mt-4 gap-4">
        {/* <h1 className="text-2xl md:text-3xl lg:text-13xl leading-[150%] font-extrabold text-midnight-blue-main text-left">
          Have Questions?
        </h1> */}
        <h1 className="text-2xl md:text-3xl lg:text-13xl leading-[150%] font-extrabold text-midnight-blue-main text-left">
          {isLanguageEnglish ? "Have Questions?" : "ಪ್ರಶ್ನೆಗಳಿದೆಯೆ?"}
        </h1>
        <p className="w-full relative text-[14px] md:text-[20px] leading-[170%] font-medium text-[#3a3a3a] font-['Amazon Ember']">
          {/* <span>{`Call Us or Whatsapp on `}</span> */}
          <span>{isLanguageEnglish ? `Call Us or Whatsapp on ` : `ನಮ್ಮನ್ನು ಕರೆ ಮಾಡಿ ಅಥವಾ ವಾಟ್ಸಾಪ್ ಮಾಡಿ `}</span>
          {/* <a href={whatsappLink} target="_blank" className="text-tomato font-extrabold">+9163669-69292</a> */}

          <strong className="inline-flex items-center">
            <a href={whatsappLink} target="_blank" className="text-tomato font-extrabold">
              +91 63669-69292
            </a>

            <button
              className="inline-flex px-4 py-2 ml-4 rounded-full border border-[#F55C38] justify-center items-center leading-[170%] gap-2 w-[89px] h-[40px]"
              onClick={handleCopy}
            >
              {copied ? (
                <>
                  <SmartImage
                    src="/userDashboard/checkmark_icon.png"
                    alt="Check Icon"
                    width={16}
                    height={16}
                  />
                  <span className="text-[#F55C38] text-base md:text-body2 font-body2-regular">
                    Copied!
                  </span>
                </>
              ) : (
                <>
                  <SmartImage
                    src="/userDashboard/content_copy.svg"
                    alt="Copy Icon"
                    width={16}
                    height={16}
                  />
                  <span className="text-[#F55C38] text-base md:text-body2 font-body2-regular">
                    Copy
                  </span>
                </>
              )}
            </button>
          </strong>

          <a href={whatsappLink} target="_blank" className="text-tomato font-extrabold">+9163669-69292</a>
        </p>
      </div>
    </div>
  );
};

export default LastPart;