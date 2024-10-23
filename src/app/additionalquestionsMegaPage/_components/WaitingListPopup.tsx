import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";


interface WaitingListPopupProps {
  isOpen: boolean;
  name: string;
}

const WaitingListPopup: React.FC<WaitingListPopupProps> = ({
  isOpen,
  name,
}) => {
  const router = useRouter();

  const whatsappLink = `https://wa.me/${6366969292}`;

  const handleGoToSprints = () => {
    router.push("/sprintPages/nanopage");
    setIsOpen(false);
    console.log("Go to Sprints button clicked");
  };
  const [isOpenned, setIsOpen] = useState(true);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        router.push("/sprintPages/megapage");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, router]);

  if (!isOpen) return null;

  const handleBackClick = () => {
    router.push("/sprintPages/megapage");
  };

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
    
    <div className="fixed inset-0 flex justify-center bg-black bg-opacity-70">
      <div className="w-full h-auto p-4 md:px-12 bg-white shadow-md min-h-screen bg-bg-surface-default flex flex-col items-center pb-[64px]">
       
        <Image
        className="w-full max-w-full h-[75px] relative mt-24 md:mt-36 px-6 md:px-0"
        src="/symbols/Frame 31751-1.svg"
        alt="Coding Symbol"
        width={75}
        height={75}
        />
        <div className="w-full max-w-[592px] mt-[24px] md:mt-[60px] p-6 md:p-8 flex flex-col items-start justify-start gap-6 text-left text-base md:text-lg text-text-primary font-mobiletypestyles-body1 md:font-webtypestyles-body1 bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.06),_0px_2px_1px_rgba(0,_0,_0,_0.04),_0px_1px_5px_rgba(0,_0,_0,_0.08)] rounded-lg sm:px-[16px]">
          <div className="flex flex-col items-start justify-start gap-4 w-full text-center">
              {/* <div className="w-full text-5xl leading-[150%] font-extrabold font-webtypestyles-h6 text-midnight-blue-main text-center"> */}
              <div className="w-full leading-[150%] md:text-heading6 font-heading6-bold text-midnight-blue-main text-center">
                Mega Sprint Waiting List
              </div>
          </div>

          {/* <div className="w-full relative text-lg leading-[170%] font-medium font-webtypestyles-body1 text-text-primary text-center inline-block"> */}
          <div className="text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray md:text-center">
            Thanks for your interest. We will contact you via the phone number
            or email provided when the program is launched
          </div>

          <div className="w-full text-[18px] leading-[170%] md:text-center">
          <div>
            {/* <div> */}
            <span className="text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray md:text-center">{`In the meantime, feel free to call or Whatsapp on `}</span>
            {/* </div> */}
            {/* <div> */}
            {/* <span className="font-extrabold font-amazon-ember text-tomato">
              +916366969292
            </span> */}
            {/* <a href={whatsappLink} target="_blank" className="text-tomato font-extrabold inline">+9163669-69292</a> */}

            <strong className="inline-flex items-center">
            <a href={whatsappLink} target="_blank" className="text-tomato font-extrabold">
              +91 63669-69292
            </a>
            <button
              className="hidden md:inline-flex px-4 py-2 ml-4 rounded-full border border-[#F55C38] justify-center items-center leading-[170%] gap-2 w-[89px] h-[40px]"
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
            {/* </div> */}
            </div>
          </div>
        </div>

        {/* <div className="hidden md:block text-center mt-[64px]">
          <span className="text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray md:text-center">
            Redirecting to Sprint Information page in 5 seconds
          </span>
        </div> */}
        <div className="w-full flex flex-row items-center justify-center mt-2 md:mt-4 mt-[48px]">
            <div className="w-full lg:w-auto">
            <button className="w-full rounded-[100px] flex justify-center items-center cursor-pointer border border-[#f55c38] text-[#f55c38] text-bodyM md:text-body1" onClick={handleGoToSprints}>
            <div className="px-8 py-4 text-center font-medium font-['Amazon Ember'] leading-[170%]">
              Return to Sprints
            </div>
          </button>
          </div>
          </div>
      </div>
    </div>
  );
};

export default WaitingListPopup;