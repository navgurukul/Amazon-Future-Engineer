import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

interface CreateAClassProps {
  closePopup: () => void; // Add closePopup as a prop
}

const CreateAClass: NextPage<CreateAClassProps> = ({ closePopup }) => {
  const router = useRouter();

  const onYesClick = useCallback(() => {
    router.push("/login");
  }, [router]);

  const onNoClick = useCallback(() => {
    closePopup();
  }, [closePopup]);

  return (
    <div className="fixed inset-0 flex items-end justify-center lg:items-center z-50">
      <div className="relative w-full lg:w-1/3 shadow-lg rounded-t-lg lg:rounded-lg bg-white flex flex-col justify-start items-end p-4 lg:p-8 gap-8 text-left text-lg text-gray-600 font-nunito max-h-[90vh] lg:max-h-[80vh] overflow-y-auto">
        {/* Popup content */}
        <div className="text-5xl leading-[150%] font-extrabold font-webtypestyles-h6 text-text-primary text-left">Welcome to AFE Makerspace</div>
              
      <div className="w-full max-w-[592px] h-[75px] flex items-stretch justify-between px-4 relative md:text-center">
      <Image src="/symbols/Vector (8).svg" alt="Image 1" width={30} height={30}className="rounded-full self-start mt-8" />
      <div className="flex items-center self-center">
        <Image src="/symbols/Vector (7).svg" alt="Arrow Left" width={20} height={20} className="mt-8"/>
        <Image src="/symbols/Vector (4).svg" alt="Arrow Right" width={20} height={20} className="ml-1 mt-14" />
      </div>
      <Image src="symbols/colon (1).svg" alt="Colon" width={32} height={32} className="self-end mb-10" />
      <Image src="/symbols/Vector (2).svg" alt="Image 2" width={32} height={32} className="self-end mt-2 md:hidden" />
      <Image src="/symbols/Vector (5).svg" alt="Image 3" width={30} height={30} className="self-center" />
      <div className="items-center self-start mt-2 hidden md:flex">
        <Image src="/symbols/Vector (9).svg" alt="Arrow Left" width={16} height={16} className="mt-4"/>
        <Image src="/symbols/Vector (6).svg" alt="Arrow Right" width={16} height={16} className="ml-1 mt-8" />
      </div>
    </div>

        <div className="self-stretch font-amazon-ember font-medium leading-7 text-gray-700">
        Thank you for your interest in the AFE Makerspace. While the AFE Makerspace is for all, we currently prioritize lab bookings for students from government schools to ensure equitable access and support diverse talent in shaping the future of technology. We appreciate your understanding!
        </div>

        {/* Hidden content */}
        <div className="hidden w-[33rem] flex-col gap-2 items-start justify-start">
          <div className="relative text-base leading-[150%]">
            Foundation Track
          </div>
          <div className="flex flex-row items-center justify-start gap-4 text-center">
            <Image
              className="w-12 h-12"
              alt=""
              src="courseicon.svg"
              width={48}
              height={48}
            />
            <div className="leading-[150%]">Python</div>
          </div>
        </div>

        {/* Close button */}
        <div className="w-full flex flex-row items-center justify-between gap-4 text-center">
          <div
            className="absolute -top-1 -right-1 lg:top-2 lg:right-1 rounded-full flex items-center justify-center cursor-pointer"
            onClick={onNoClick}
          >
            <Image
              src="./homepage/close.svg"
              alt="Close button"
              width={24}
              height={24}
            />
          </div>

          {/* Proceed to Login button */}
          <div className="flex-grow flex justify-end">
            <div
              className="rounded-full bg-[#f55c38] h-14 flex items-center justify-center px-8 py-2 text-white cursor-pointer w-full lg:w-auto"
              onClick={onYesClick}
            >
              <div className="font-medium leading-7">Proceed to Login</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAClass;
