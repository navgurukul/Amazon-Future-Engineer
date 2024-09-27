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
        router.push("/userdashboard");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, router]);

  if (!isOpen) return null;

  const handleBackClick = () => {
    router.push("/sprintPages/nanopage");
  };

  return (
    // <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="w-full min-h-screen bg-white flex flex-col items-center gap-8 md:gap-16">
      <div className="w-full h-[60px] px-4 md:px-12 bg-white shadow-md flex justify-between items-center">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={handleBackClick}
        >
          <div className="w-6 h-6 relative">
            <Image
              src="/userDashboard/chevron_left.svg"
              alt="Back Icon"
              width={7.41}
              height={12}
              className="w-full h-full"
            />
          </div>
          <div className="text-lg text-[#3a3a3a] font-medium">Back</div>
        </div>
        <div className="text-lg text-center font-extrabold text-[#3a3a3a] mx-auto">
         Nano Sprint
        </div>
      </div>

      <div className="w-[360px] md:w-[592px] h-auto md:h-[458px] flex-col justify-start items-center gap-8 inline-flex bg-white rounded-lg p-6">
        <div className="w-[320px] h-[220px] md:w-[434px] md:h-[238px] bg-[#d9d9d9] rounded-lg"></div>
        <div className="text-center text-[#3a3a3a] text-base md:text-lg font-medium font-['Amazon Ember'] leading-7 md:leading-[30.60px]">
          Thanks for joining the waiting list {name}. We will contact you via
          the phone number or email provided when the program is launched.
        </div>

        <div className="relative w-[240px] h-0 border-t border-t-[1px] opacity-100 rotate-0">
          <Image
            src="/userDashboard/Line 33.svg"
            alt="Line Icon"
            width={7.41}
            height={12}
            className="w-full h-full"
          />
        </div>

        <div className="text-center">
          <span className="text-[#3a3a3a] text-base md:text-lg font-medium leading-7 md:leading-[30.60px]">
            Redirecting to Sprint Information page in 5 seconds or <br />
          </span>
          <span className="text-[#f55c38] text-base md:text-lg font-medium leading-7 md:leading-[30.60px]">
            Go to Sprint Information manually
          </span>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default WaitingListPopup;