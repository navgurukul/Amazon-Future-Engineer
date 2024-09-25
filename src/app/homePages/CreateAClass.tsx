import type { NextPage } from "next";
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
    <div className="self-stretch bg-gray-300 h-32" />

    <div className="self-stretch font-amazon-ember font-medium leading-7 text-gray-700">
      Hi there. We strongly encourage teachers from government schools to
      register and book sprints. Though, the AFE Makerspace is open for all.
    </div>

    {/* Hidden content */}
    <div className="hidden w-[33rem] flex-col gap-2 items-start justify-start">
      <div className="relative text-base leading-[150%]">Foundation Track</div>
      <div className="flex flex-row items-center justify-start gap-4 text-center">
        <img className="w-12 h-12" alt="" src="courseicon.svg" />
        <div className="leading-[150%]">Python</div>
      </div>
    </div>

    {/* Close button */}
    <div className="w-full flex flex-row items-center justify-between gap-4 text-center">
      <div
        className="absolute -top-1 -right-1 lg:top-2 lg:right-1 rounded-full flex items-center justify-center cursor-pointer"
        onClick={onNoClick}
      >
        <img src="./homepage/close.svg" alt="Close button" />
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