import type { NextPage } from "next";
import SmartImage from "@/components/SmartImage";;
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { useAppState } from "@/context/AppContext";


interface CreateAClassProps {
  closePopup: () => void; // Add closePopup as a prop
}

const CreateAClass: NextPage<CreateAClassProps> = ({ closePopup }) => {
  const { isLanguageEnglish } = useAppState(); // Access language state

  const router = useRouter();

  const onYesClick = useCallback(() => {
    router.push("/login");
  }, [router]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // document.body.classList.add("overflow-hidden");
  }, [])

  const onNoClick = useCallback(() => {
    closePopup();
  }, [closePopup]);

  return (
    <div className="fixed inset-0 flex items-end justify-center lg:items-center z-50">
      <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-4 md:p-8 flex flex-col items-start gap-4 text-left text-gray-500">
        {/* Popup content */}
        <div className="flex items-center justify-between w-full mb-4">
          <div className="text-[#3a3a3a] leading-[150%] text-subHeading1 md:text-heading6 font-['Amazon Ember']">
            {/* Welcome to AFE Makerspace */}
            <span>
              {isLanguageEnglish ? "Welcome to AFE Makerspace" : "AFE ಮಾಕರ್‌ಸ್ಪೇಸ್‌ಗೆ ಸುಸ್ವಾಗತ"}
            </span>
          </div>
          {/* Close button */}
          <SmartImage className="w-6 relative h-6 overflow-hidden shrink-0 cursor-pointer" alt="" src="/homepage/close.svg" width={24} height={24} onClick={onNoClick} />
        </div>

        {/* <div className="w-full max-w-[592px] h-[75px] flex items-stretch justify-between px-4 relative md:text-center">
          <SmartImage
            src="/symbols/Vector (8).svg"
            alt="SmartImage 1"
            width={30}
            height={30}
            className="rounded-full self-start mt-8"
          />
          <div className="flex items-center self-center">
            <SmartImage
              src="/symbols/Vector (7).svg"
              alt="Arrow Left"
              width={20}
              height={20}
              className="mt-8"
            />
            <SmartImage
              src="/symbols/Vector (4).svg"
              alt="Arrow Right"
              width={20}
              height={20}
              className="ml-1 mt-14"
            />
          </div>
          <SmartImage
            src="symbols/colon (1).svg"
            alt="Colon"
            width={32}
            height={32}
            className="self-end mb-10"
          />
          <SmartImage
            src="/symbols/Vector (2).svg"
            alt="SmartImage 2"
            width={32}
            height={32}
            className="self-end mt-2 md:hidden"
          />
          <SmartImage
            src="/symbols/Vector (5).svg"
            alt="SmartImage 3"
            width={30}
            height={30}
            className="self-center"
          />
          <div className="items-center self-start mt-2 hidden md:flex">
            <SmartImage
              src="/symbols/Vector (9).svg"
              alt="Arrow Left"
              width={16}
              height={16}
              className="mt-4"
            />
            <SmartImage
              src="/symbols/Vector (6).svg"
              alt="Arrow Right"
              width={16}
              height={16}
              className="ml-1 mt-8"
            />
          </div>
        </div> */}

        {/* <div className="w-full mb-4">
        <SmartImage src="/symbols/Frame 31751.svg" alt="coding symbols" width={75} height={75} />
        </div> */}

        {/* <div className="relative text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray"> */}
        {/* Thank you for your interest in the AFE Makerspace. While the AFE
          Makerspace is for all, we currently prioritize lab bookings for
          students from government schools to ensure equitable access and
          support diverse talent in shaping the future of technology. We
          appreciate your understanding! */}
        {/* Thank you for your interest in AFE Makerspace! Currently, we prioritise
          bookings for <span className="text-[#3a3a3a] leading-[150%] text-bodyM2 md:text-subTitle1 font-['Amazon Ember']">GOVERNMENT SCHOOLS</span>,  to ensure equitable access and support
          diverse talent in shaping the future of technology
        </div>
        <div className="relative text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray">
        Please confirm if your school is a Government Institution.
        We appreciate your understanding!

        </div> */}

        <div className="relative text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray">
          {/* Thank you for your interest in the AFE Makerspace. While the AFE
  Makerspace is for all, we currently prioritize lab bookings for
  students from government schools to ensure equitable access and
  support diverse talent in shaping the future of technology. We
  appreciate your understanding! */}
          {isLanguageEnglish
            ? "Thank you for your interest in AFE Makerspace! Currently, we prioritise bookings for "
            : "AFE ಮೇಕರ್‌ಸ್ಪೇಸ್‌ಗಾಗಿ ನಿಮ್ಮ ಆಸಕ್ತಿಗೆ ಧನ್ಯವಾದಗಳು! ಪ್ರಸ್ತುತ, ನಾವು "}
          <span className="text-[#3a3a3a] leading-[150%] text-bodyM2 md:text-subTitle1 font-['Amazon Ember']">
            {isLanguageEnglish ? "GOVERNMENT SCHOOLS" : "ಸರ್ಕಾರಿ ಶಾಲೆಗಳು"}
          </span>
          {isLanguageEnglish
            ? ", to ensure equitable access and support diverse talent in shaping the future of technology."
            : " ಶಾಶ್ವತ ಪ್ರವೇಶವನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ಮತ್ತು ತಂತ್ರಜ್ಞಾನದ ಭವಿಷ್ಯ ರೂಪಿಸಲು ವಿವಿಧ ಪ್ರತಿಭೆಗಳನ್ನು ಬೆಂಬಲಿಸಲು ಆದ್ಯತೆ ನೀಡುತ್ತೇವೆ."}
        </div>

        <div className="relative text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray">
          {isLanguageEnglish
            ? "Please confirm if your school is a Government Institution. We appreciate your understanding!"
            : "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಶಾಲೆಯು ಸರ್ಕಾರಿ ಸಂಸ್ಥೆಯಾಗಿದೆ ಎಂದು ಖಚಿತಪಡಿಸಿ. ನಿಮ್ಮ ಸಹಕಾರಕ್ಕೆ ಧನ್ಯವಾದಗಳು!"}
        </div>


        {/* Hidden content */}
        <div className="hidden w-[33rem] flex-col gap-2 items-start justify-start">
          <div className="relative text-base leading-[150%]">
            Foundation Track
          </div>
          <div className="flex flex-row items-center justify-start gap-4 text-center">
            <SmartImage
              className="w-12 h-12"
              alt=""
              src="courseicon.svg"
              width={48}
              height={48}
            />
            <div className="leading-[150%]">Python</div>
          </div>
        </div>

        <div className="w-full flex flex-row items-center justify-between gap-0 text-center">

          {/* Proceed to Login button */}
          {/* <div className="flex-grow flex justify-end">
            <div
              className="rounded-full bg-[#f55c38] h-14 flex items-center justify-center px-8 py-2 text-white cursor-pointer w-full lg:w-auto"
              onClick={onYesClick}
            >
              <div className="font-medium leading-7">Proceed to Login</div>
            </div>
          </div> */}
          <div className="w-full flex flex-row items-center justify-end mt-2 md:mt-4">
            <div className="w-full lg:w-auto">
              <button className="w-full bg-[#f55c38] rounded-[100px] flex justify-center items-center cursor-pointer text-white" onClick={onYesClick}>
                <div className="px-8 py-4 text-center font-medium font-['Amazon Ember'] leading-[170%]">
                  {/* Proceed to Login */}
                  {isLanguageEnglish ? "Proceed to Login" : "ಲಾಗಿನ್‌ಗೆ ಮುಂದುವರಿಯಿರಿ"}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAClass;
