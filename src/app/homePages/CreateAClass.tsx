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
    closePopup(); // Close the popup when "No, I am not" is clicked
  }, [closePopup]);

  return (
    <div className="relative w-1/3 shadow-lg rounded-lg bg-white flex flex-col justify-start items-end p-8 gap-8 text-left text-lg text-gray-600 font-nunito">
      <div className="self-stretch bg-gray-300 h-32" />
      <div className="self-stretch font-amazon-ember font-medium leading-7 text-gray-700">
        Hi there. We strongly encourage teachers from government schools to
        register and book sprints. Though, the AFE Makerspace is open for all
      </div>
      <div className="hidden w-[33rem] flex-col gap-2 items-start justify-start">
        <div className="relative text-base leading-[150%]">Foundation Track</div>
        <div className="flex flex-row items-center justify-start gap-4 text-center">
          <img className="w-12 h-12" alt="" src="courseicon.svg" />
          <div className="leading-[150%]">Python</div>
        </div>
        <div className="hidden flex-row gap-4 items-start justify-start text-left text-sm text-gray-800">
          <div className="flex flex-row items-center justify-center gap-2">
            <img className="w-6 h-6" alt="" src="Radio Button.svg" />
            <div className="leading-[150%]">Web Dev</div>
          </div>
          <div className="flex flex-row items-center justify-center gap-2">
            <img className="w-6 h-6" alt="" src="Radio Button.svg" />
            <div className="leading-[150%]">Soft Skills</div>
          </div>
          <div className="flex flex-row items-center justify-center gap-2">
            <img className="w-6 h-6" alt="" src="Radio Button.svg" />
            <div className="leading-[150%]">Miscellaneous</div>
          </div>
        </div>
      </div>
      <div className="hidden w-[31rem] h-15" />
      <div className="hidden w-[31rem] h-15 flex-col gap-2 items-start justify-start text-sm">
        <div className="leading-[150%]">Description</div>
        <div className="self-stretch flex flex-row items-start justify-start pt-2 text-base text-gray-800">
          <div className="leading-[150%]">
            Learn about different datatypes that govern how values are stored in
            Python. We will talk about how to identify variables, naming
            schemes, and usage in programs.
          </div>
        </div>
      </div>
      <div className="hidden w-[31rem] h-15" />
      <div className="hidden w-[32.19rem] flex-col gap-2 items-start justify-start text-sm">
        <div className="leading-[150%]">On Days</div>
        <div className="flex flex-row items-start justify-start gap-4 text-base">
          <div className="rounded-lg bg-green-100 flex flex-col items-center justify-center py-1 px-3 text-green-600 font-bold">
            Mon
          </div>
          <div className="rounded-lg flex flex-col items-center justify-center py-1 px-3">Tue</div>
          <div className="rounded-lg flex flex-col items-center justify-center py-1 px-3">Wed</div>
          <div className="rounded-lg flex flex-col items-center justify-center py-1 px-3">Thurs</div>
          <div className="rounded-lg flex flex-col items-center justify-center py-1 px-3">Fri</div>
          <div className="rounded-lg flex flex-col items-center justify-center py-1 px-3">Sat</div>
          <div className="rounded-lg flex flex-col items-center justify-center py-1 px-3">Sun</div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-4 text-center">
        {/* "x" button at top-right corner */}
        <div
          className="absolute -top-2 -right-6 rounded-full h-14 flex items-center justify-center px-8 py-2 cursor-pointer"
          onClick={onNoClick}
        >
          {/* <div className="font-medium leading-7">x</div> */}
          <img src="./homepage/close.svg" alt="" />
        </div>
        <div
          className="rounded-full bg-[#f55c38] h-14 flex items-center justify-center px-8 py-2 text-white cursor-pointer"
          onClick={onYesClick}
        >
          <div className="font-medium leading-7">Proceed to Login</div>
        </div>
      </div>
    </div>
  );
};

export default CreateAClass;