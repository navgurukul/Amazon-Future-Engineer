import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

interface WaitingListPopupProps {
  isOpen: boolean;
  name: string;
}

const WaitingListPopup: React.FC<WaitingListPopupProps> = ({
  isOpen,
  name,
}) => {
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        router.push("/sprintPages/minipage");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, router]);

  if (!isOpen) return null;

  const handleBackClick = () => {
    router.push("/sprintPages/minipage");
  };

  return (
    <div className="fixed inset-0 flex justify-center bg-black bg-opacity-50">
      <div className="w-full h-auto p-4 md:px-12 bg-white shadow-md min-h-screen bg-bg-surface-default flex flex-col items-center pb-[64px] px-8 sm:px-[16px]">
        <div className="w-full max-w-[592px] h-[75px] mt-[120px] flex items-stretch justify-between px-4 relative md:text-center">
          <Image
            src="/symbols/Vector (8).svg"
            alt="Image 1"
            width={30}
            height={30}
            className="rounded-full self-start mt-8"
          />
          <div className="flex items-center self-center">
            <Image
              src="/symbols/Vector (7).svg"
              alt="Arrow Left"
              width={20}
              height={20}
              className="mt-8"
            />
            <Image
              src="/symbols/Vector (4).svg"
              alt="Arrow Right"
              width={20}
              height={20}
              className="ml-1 mt-14"
            />
          </div>
          <Image
            src="symbols/colon (1).svg"
            alt="Colon"
            width={32}
            height={32}
            className="self-end mb-10"
          />
          <Image
            src="/symbols/Vector (2).svg"
            alt="Image 2"
            width={32}
            height={32}
            className="self-end mt-2 md:hidden"
          />
          <Image
            src="/symbols/Vector (5).svg"
            alt="Image 3"
            width={30}
            height={30}
            className="self-center"
          />
          <div className="items-center self-start mt-2 hidden md:flex">
            <Image
              src="/symbols/Vector (9).svg"
              alt="Arrow Left"
              width={16}
              height={16}
              className="mt-4"
            />
            <Image
              src="/symbols/Vector (6).svg"
              alt="Arrow Right"
              width={16}
              height={16}
              className="ml-1 mt-8"
            />
          </div>
        </div>
        <div className="w-full max-w-[592px] mt-[60px] p-6 md:p-8 flex flex-col items-start justify-start gap-6 text-left text-base md:text-lg text-text-primary font-mobiletypestyles-body1 md:font-webtypestyles-body1 bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.06),_0px_2px_1px_rgba(0,_0,_0,_0.04),_0px_1px_5px_rgba(0,_0,_0,_0.08)] rounded-lg sm:px-[16px]">
          <div className="flex flex-col items-start justify-start gap-4 w-full text-center">
              <div className="w-full text-5xl leading-[150%] font-extrabold font-webtypestyles-h6 text-midnight-blue-main text-center">
                Mini Sprint Waiting List
              </div>
          </div>

          <div className="w-full relative text-lg leading-[170%] font-medium font-webtypestyles-body1 text-text-primary text-center inline-block">
            Thanks for your interest. We will contact you via the phone number
            or email provided when the program is launched
          </div>

          <div className="w-full  text-[18px] leading-[170%] text-center">
          <div>
            <div>
            <span className="font-medium font-amazon-ember text-darkslategray">{`In the meantime, feel free to call or Whatsapp on `}</span>
            </div>
            <div>
            <span className="font-extrabold font-amazon-ember text-tomato">
              +916366969292
            </span>
            </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-[32px]">
          <span className="text-[#3a3a3a] text-base md:text-lg font-medium leading-7 md:leading-[30.60px]">
            Redirecting to Sprint Information page in 5 seconds or <br />
          </span>
        </div>
      </div>
    </div>
  );
};

export default WaitingListPopup;
