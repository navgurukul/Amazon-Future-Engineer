import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";


interface ErrorHighDemandProps {
    closePopup: () => void;
    errorMessage: string;
}

const ErrorHighDemand: NextPage<ErrorHighDemandProps> = ({ closePopup, errorMessage }) => {
    const router = useRouter();

    const whatsappLink = `https://wa.me/${6366969292}`;

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
        <div className="fixed inset-0 flex bg-black bg-opacity-50 items-end justify-center lg:items-center z-50">
            <div className="relative w-full lg:w-1/3 shadow-lg rounded-t-lg lg:rounded-lg bg-white flex flex-col justify-start items-center p-4 md:p-auto gap-8 text-left text-lg text-gray-600 font-nunito max-h-[90vh] lg:max-h-[80vh] overflow-y-auto">

                <div className="w-full relative flex justify-end text-5xl text-text-primary font-webtypestyles-h6 cursor-pointer">
                    <Image className="w-6 h-6 overflow-hidden shrink-0" alt="Close" src="/homepage/close.svg" width={24} height={24} onClick={onNoClick} />
                </div>

                <div className="w-full max-w-auto h-auto flex items-stretch justify-between px-4 relative md:text-center">
                    <Image
                        className="w-full h-[160px] relative max-w-full overflow-hidden shrink-0"
                        alt=""
                        src="/nanopage/HighDemandError.svg"
                        width={160}
                        height={160}
                    />
                </div>

                <div className="self-stretch font-amazon-ember font-medium leading-7 text-gray-700">
                    <p className="self-stretch relative leading-[170%] font-medium md:text-center mb-4">
                        We are experiencing a very high demand right now. Please try joining the waitlist in a few minutes. We apologize for the inconvenience
                    </p>
                    <p className="self-stretch relative leading-[170%] md:text-center">
                        <span className="font-medium">In the meantime, feel free to call or Whatsapp on </span>
                        {/* <span className="font-extrabold text-tomato">+916366969292</span> */}
                        <a href={whatsappLink} target="_blank" className="text-tomato font-extrabold">+916366969292</a>
                    </p>
                </div>

                <button
                    onClick={handleGoToSprintPage}
                    className="mt-8 w-full md:w-auto relative rounded-[100px] border-incandescent-main border-[1px] border-solid box-border h-14 flex flex-row items-center justify-center py-2 px-4 text-center text-lg text-incandescent-main font-webtypestyles-buttonlarge"
                >
                    <div className="relative leading-[170%] font-medium md:text-center">Go to Sprints</div>
                </button>
            </div>
        </div>
    );
};

export default ErrorHighDemand;