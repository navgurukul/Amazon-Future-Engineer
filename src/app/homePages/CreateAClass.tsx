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
    // <div className="fixed inset-0 flex items-end justify-center lg:items-center z-50">
    //   <div className="relative w-full lg:w-1/3 shadow-lg rounded-t-lg lg:rounded-lg bg-white flex flex-col justify-start items-end p-4 lg:p-8 gap-8 text-left text-lg text-gray-600 font-nunito max-h-[90vh] lg:max-h-[80vh] overflow-y-auto">
    //     {/* Popup content */}
    //     <div className="self-stretch bg-gray-300 h-32" />

    //     <div className="self-stretch font-amazon-ember font-medium leading-7 text-gray-700">
    //       Hi there. We strongly encourage teachers from government schools to
    //       register and book sprints. Though, the AFE Makerspace is open for all.
    //     </div>

    //     {/* Hidden content */}
    //     <div className="hidden w-[33rem] flex-col gap-2 items-start justify-start">
    //       <div className="relative text-base leading-[150%]">
    //         Foundation Track
    //       </div>
    //       <div className="flex flex-row items-center justify-start gap-4 text-center">
    //         <Image
    //           className="w-12 h-12"
    //           alt=""
    //           src="courseicon.svg"
    //           width={48}
    //           height={48}
    //         />
    //         <div className="leading-[150%]">Python</div>
    //       </div>
    //     </div>

    //     {/* Close button */}
    //     <div className="w-full flex flex-row items-center justify-between gap-4 text-center">
    //       <div
    //         className="absolute -top-1 -right-1 lg:top-2 lg:right-1 rounded-full flex items-center justify-center cursor-pointer"
    //         onClick={onNoClick}
    //       >
    //         <Image
    //           src="./homepage/close.svg"
    //           alt="Close button"
    //           width={24}
    //           height={24}
    //         />
    //       </div>

    //       {/* Proceed to Login button */}
    //       <div className="flex-grow flex justify-end">
    //         <div
    //           className="rounded-full bg-[#f55c38] h-14 flex items-center justify-center px-8 py-2 text-white cursor-pointer w-full lg:w-auto"
    //           onClick={onYesClick}
    //         >
    //           <div className="font-medium leading-7">Proceed to Login</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="fixed bottom-0 w-[592px] h-[482px] md:h-auto shadow-lg rounded-lg bg-white flex flex-col justify-start items-end p-4 gap-6 text-left text-lg text-gray-600 font-nunito md:relative md:bottom-auto md:w-1/3">
      <div className="w-full">
        <div className="relative flex flex-row items-center justify-between text-left text-xl text-[#3a3a3a] font-extrabold font-['Amazon Ember Display'] leading-9 gap-4 sm:flex-col sm:items-start sm:text-lg">
          Welcome to AFE Makerspace
        </div>
      </div>

      <div className="flex justify-start self-stretch">
        <div className=" relative w-[517px] h-[75px] border border-blue-500">
          {/* First Symbol */}
          <div className="absolute left-[19px] top-[32px] w-[31px] h-[31px]">
            <Image src="/symbols/vector.svg" alt="Vector" width={31} height={31} />
          </div>

          {/* VectorBlue Symbol 1 */}
          <div className="absolute left-[116.56px] top-[35.45px] w-[18px] h-[26px]">
            <Image src="/symbols/VectorBlue1.svg" alt="VectorBlue1" width={18} height={26} className="object-contain" />
          </div>

          {/* VectorBlue Symbol 2 */}
          <div className="absolute left-[137.66px] top-[40.84px] w-[18px] h-[26px]">
            <Image src="/symbols/VectorBlue2.svg" alt="VectorBlue2" width={18} height={26} className="object-contain" />
          </div>

          {/* Colon Symbol */}
          <div className="absolute left-[228.95px] top-[10px] w-[31px] h-[31px]">
            <Image src="/symbols/colon.svg" alt="Colon" width={38} height={40} className="object-contain" />
          </div>

          {/* Plus Symbol */}
          <div className="absolute left-[361.02px] top-[15.38px] w-[29px] h-[29px]">
            <Image src="/symbols/vector plus.svg" alt="Plus" width={29} height={29} className="object-contain" />
          </div>
          {/* BracketsGreen Symbol 1 */}
          <div className="absolute left-[478.66px] top-[29.37px] w-[18px] h-[26px]">
            <Image src="/symbols/Bracketsgreen1.svg" alt="BracketsGreen1" width={18} height={29} className="object-contain" />
          </div>

          {/* BracketsGreen Symbol 2 */}
          <div className="absolute left-[498.81px] top-[40.07px] w-[18px] h-[26px]">
            <Image src="/symbols/Bracketsgreen2.svg" alt="BracketsGreen2" width={18} height={29} className="object-contain" />
          </div>

        </div>
      </div>

      <div className="w-full h-auto gap-4">
        <div className="self-stretch font-['Amazon Ember'] w-[528px] h-[155px] font-medium leading-6 text-gray-700">
          Thank you for your interest in the AFE Makerspace. While the AFE Makerspace is for all,
          we currently prioritize lab bookings for students from government schools to ensure equitable access
          and support diverse talent in shaping the future of technology. We appreciate your understanding!
        </div>
      </div>

      {/* <div className="flex flex-row items-center justify-center gap-4 text-center">
        <div
          className="w-full h-12 px-4 py-2 bg-[#f55c38] rounded-full justify-center items-center mb-4 gap-2 flex cursor-pointer"
          onClick={onYesClick}
        >
          <div className="text-center text-white text-base text-lg font-medium font-['Amazon Ember'] leading-6">
            Proceed to Login
          </div>
        </div>
      </div> */}

      {/* <div className="flex flex-row items-center justify-center w-full">
        <div
          className="w-full h-10 px-4 py-2 bg-[#f55c38] rounded-[100px] justify-center items-center gap-2 inline-flex cursor-pointer sm:h-12 sm:px-8 sm:mb-4"
          onClick={onYesClick}
        >
          <div className="text-center text-white text-base font-medium font-['Amazon Ember'] leading-7 sm:text-lg">
            Proceed to Login
          </div>
        </div>
      </div> */}

      <div className="flex-grow flex justify-end">
        <div
          className="rounded-full bg-[#f55c38] h-14 flex items-center justify-center px-8 py-2 text-white cursor-pointer w-full lg:w-auto"
          onClick={onYesClick}
        >
          <div className="font-medium leading-7">Proceed to Login</div>
        </div>
      </div>
    </div>
  );
};

export default CreateAClass;
