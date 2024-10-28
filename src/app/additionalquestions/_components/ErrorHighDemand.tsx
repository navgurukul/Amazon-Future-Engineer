"use client";
import type { NextPage } from "next";
import SmartImage from "@/components/SmartImage";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useAppState } from "@/context/AppContext";

interface ErrorHighDemandProps {
  closePopup: () => void;
  errorMessage: string;
}

const ErrorHighDemand: NextPage<ErrorHighDemandProps> = ({
  closePopup,
  errorMessage,
}) => {
  const router = useRouter();
  const { isLanguageEnglish } = useAppState();

  const whatsappMessage = encodeURIComponent(
    "Hello! I am a teacher interested in learning more about the AFE Makerspace and booking a session for my students. Please share the next steps. Thank you!"
  );
  const whatsappLink = `https://wa.me/6366969292?text=${whatsappMessage}`;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const onNoClick = useCallback(() => {
    closePopup();
  }, [closePopup]);

  const handleGoToSprintPage = () => {
    router.push("/sprintPages/nanopage");
  };

  const [copied, setCopied] = useState(false);
  const phoneNumber = "+91 63669-69292";

  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumber)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => console.error("Failed to copy: ", err));
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-70 flex items-end md:items-center justify-center z-50">
        <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-4 md:p-8 flex flex-col items-start gap-4 text-left text-gray-500">
          {/* Header */}
          <div className="w-full flex items-center justify-center mt-4">
            <SmartImage
              className="w-full h-[160px] relative max-w-full overflow-hidden shrink-0"
              alt=""
              src="/nanopage/HighDemandError.svg"
              width={160}
              height={160}
            />
          </div>

          {/* Message */}
          <div className="relative md:text-center text-bodyM md:text-body1 text-[#3a3a3a] font-medium mt-4 leading-[170%]">
            {isLanguageEnglish
              ? "We are experiencing a very high demand right now. Please try booking your sprint again in a few minutes. We apologize for the inconvenience."
              : "ನಾವು ಇದೀಗ ಹೆಚ್ಚಿನ ಬೇಡಿಕೆಯನ್ನು ಅನುಭವಿಸುತ್ತಿದ್ದೇವೆ. ದಯವಿಟ್ಟು ಕೆಲವು ನಿಮಿಷಗಳಲ್ಲಿ ನಿಮ್ಮ ಸ್ಪ್ರಿಂಟ್ ಅನ್ನು ಮತ್ತೆ ಬುಕ್ ಮಾಡಲು ಪ್ರಯತ್ನಿಸಿ. ಅನಾನುಕೂಲತೆಗಾಗಿ ನಾವು ಕ್ಷಮೆಯಾಚಿಸುತ್ತೇವೆ."}
          </div>

          {/* Contact Info */}
          <div className="md:text-center text-bodyM md:text-body1">
            <span className="text-[#3a3a3a] font-medium">
              {isLanguageEnglish
                ? "In the meantime, feel free to call or WhatsApp on "
                : "ಈ ಮಧ್ಯೆ, ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಲು ಕರೆ ಅಥವಾ ವಾಟ್ಸಾಪ್ ಮಾಡಿ: "}
            </span>
            <strong className="inline-flex items-center">
              <a
                href={whatsappLink}
                target="_blank"
                className="text-tomato font-extrabold"
              >
                {phoneNumber}
              </a>
              <button
                className="hidden md:inline-flex px-4 py-2 ml-4 rounded-full border border-[#F55C38] justify-center items-center leading-[170%] flex gap-2 w-[89px] h-[40px]"
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
          </div>

          {/* Go to Sprint Button */}
          <div className="w-full flex flex-row items-center justify-center mt-2 md:mt-4">
            <div className="w-full lg:w-auto">
              <button
                className="w-full rounded-[100px] flex justify-center items-center cursor-pointer border border-[#f55c38] text-[#f55c38] text-bodyM md:text-body1"
                onClick={handleGoToSprintPage}
              >
                <div className="px-8 py-2 text-center font-medium leading-[170%]">
                  Go to Sprints
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorHighDemand;
