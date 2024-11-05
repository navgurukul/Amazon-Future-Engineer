import type { NextPage } from "next";
import SmartImage from "@/components/SmartImage";;
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { useAppState } from "@/context/AppContext";


interface ErrorBookingPopupProps {
    closePopup: () => void;
    errorMessage: string;
}

const ErrorBookingPopup: NextPage<ErrorBookingPopupProps> = ({ closePopup, errorMessage }) => {
    const { isLanguageEnglish } = useAppState(); // Access language state

    const router = useRouter();

    // const whatsappMessage = encodeURIComponent("Hello! I am a teacher interested in learning more about the AFE Makerspace and booking a session for my students. Please share the next steps. Thank you!");
    const whatsappMessage = encodeURIComponent(
        isLanguageEnglish 
          ? "Hello! I am a teacher interested in learning more about the AFE Makerspace and booking a session for my students. Please share the next steps. Thank you!" 
          : "ನಮಸ್ಕಾರ! ನಾನು ಶಿಕ್ಷಕ/ಶಿಕ್ಷಕಿ. AFE ಮೇಕರ್‌ಸ್ಪೇಸ್ ಮತ್ತು ನನ್ನ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಸೆಷನ್‌ ಬುಕ್ ಮಾಡಲು ಹೆಚ್ಚಿನ ಮಾಹಿತಿ ಪಡೆಯಲು ಆಸಕ್ತಿ ಹೊಂದಿದ್ದೇನೆ. ದಯವಿಟ್ಟು ಮುಂದಿನ ಹಂತಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಿ. ಧನ್ಯವಾದಗಳು!"
      );
    const whatsappLink = `https://wa.me/6366969292?text=${whatsappMessage}`;

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        document.body.classList.add("overflow-hidden");
    }, []);

    const onNoClick = useCallback(() => {
        closePopup();
    }, [closePopup]);

    const handleGoToSprintPage = () => {
        router.push("/sprintPages/nanopage");
    };

    return (
        <div className="fixed inset-0 flex items-end justify-center lg:items-center z-50">
            <div className="relative w-full lg:w-1/3 shadow-lg rounded-t-lg lg:rounded-lg bg-white flex flex-col justify-start items-center p-4 md:p-auto gap-8 text-left text-lg text-gray-600 font-nunito max-h-[90vh] lg:max-h-[80vh] overflow-y-auto">

                {/* Close button (Top Right) */}
                <div className="w-full relative flex justify-end text-5xl text-text-primary font-webtypestyles-h6 cursor-pointer">
                    <SmartImage className="w-6 h-6 overflow-hidden shrink-0" alt="Close" src="/homepage/close.svg" width={24} height={24} onClick={onNoClick} />
                </div>

                <div className="w-full max-w-auto h-auto flex items-stretch justify-between px-4 relative md:text-center">
                    <SmartImage
                        className="w-full h-[160px] relative max-w-full overflow-hidden shrink-0"
                        alt=""
                        src="/nanopage/HighDemandError.svg"
                        width={160}
                        height={160}
                    />
                </div>

                <div className="self-stretch font-amazon-ember font-medium leading-7 text-gray-700">
                    <p className="self-stretch relative leading-[170%] font-medium md:text-center mb-4">
                        {/* We are experiencing a very high demand right now. Please try booking your sprint again in a few minutes. We apologize for the inconvenience. */}
                        <span>
                            {isLanguageEnglish
                                ? "We are experiencing a very high demand right now. Please try booking your sprint again in a few minutes. We apologize for the inconvenience."
                                : "ನಾವು ಈ ಸಂದರ್ಭದಲ್ಲಿ ಅತ್ಯಂತ ಹೆಚ್ಚಿನ ಬೇಡಿಕೆಯನ್ನು ಅನುಭವಿಸುತ್ತಿದ್ದೇವೆ. ದಯವಿಟ್ಟು ಕೆಲವು ನಿಮಿಷಗಳಲ್ಲಿ ನಿಮ್ಮ ಸ್ಪ್ರಿಂಟ್ ಪುನಃ ಬುಕ್ ಮಾಡಲು ಪ್ರಯತ್ನಿಸಿ. ತೊಂದರೆಗಾಗಿ ಕ್ಷಮಿಸಿ."}
                        </span>
                    </p>
                    <p className="self-stretch relative leading-[170%] md:text-center">
                        <span className="font-medium">
                            {/* In the meantime, feel free to call or Whatsapp on  */}
                            <span>
                                {isLanguageEnglish
                                    ? "In the meantime, feel free to call or WhatsApp on "
                                    : "ಈ ಮಧ್ಯದಲ್ಲಿ, ದಯವಿಟ್ಟು ಕರೆ ಅಥವಾ ವಾಟ್ಸಾಪ್ ಮಾಡಿ "}
                            </span>
                        </span>
                        {/* <span className="font-extrabold text-tomato">+916366969292</span> */}
                        <a href={whatsappLink} target="_blank" className="text-tomato font-extrabold">+9163669-69292</a>
                    </p>
                </div>

                {/* Go to Sprint Page button (Centered) */}
                <button
                    onClick={handleGoToSprintPage}
                    className="mt-8 w-full md:w-auto relative rounded-[100px] border-incandescent-main border-[1px] border-solid box-border h-14 flex flex-row items-center justify-center py-2 px-4 text-center text-lg text-incandescent-main font-webtypestyles-buttonlarge"
                >
                    <div className="relative leading-[170%] font-medium md:text-center">
                        {/* Go to Sprints */}
                        <span>
                            {isLanguageEnglish
                                ? "Go to Sprints"
                                : "ಸ್ಪ್ರಿಂಟ್ಸ್ ಗೆ ಹೋಗಿ"}
                        </span>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default ErrorBookingPopup;