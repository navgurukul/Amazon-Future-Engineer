import type { NextPage } from "next";
import { useCallback } from "react";

interface PopupProps {
  closeHelpDeskPopup: () => void;
}

const Popup: NextPage<PopupProps> = ({ closeHelpDeskPopup }) => {
  const onFrameContainerClick = useCallback(() => {
    // Add your code here
  }, []);

  const onNoClick = useCallback(() => {
    closeHelpDeskPopup();
  }, [closeHelpDeskPopup]);

  return (
    <div className="w-1/3 relative shadow-md rounded-lg bg-white flex flex-col items-end justify-start p-8 gap-8 text-left text-gray-500 font-nunito-sans">
      <div className="flex flex-col gap-4 items-start w-full">
        <div className="flex items-center justify-between text-lg font-amazon-ember w-full">
          <div className="font-extrabold">Helpdesk</div>
          <img
            className="w-6 h-6 cursor-pointer"
            alt="close"
            src="/homepage/close.svg"
            onClick={onNoClick}
          />
        </div>
        <div className="leading-7 font-medium">
          You can talk to our representative for sprint information, booking
          sprints or any general queries
        </div>
        <div className="leading-7">
          <b>Response Time:</b>{" "}
          <span className="font-medium">Within 24 hours</span>
        </div>
        <div className="leading-7">
          <b>Operational Time:</b>{" "}
          <span className="font-medium">Mon to Fri from 9 AM to 6 PM</span>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div className="font-medium">
            <span>Name</span>
            <span className="text-[#f55c38]">*</span>
          </div>
          <div className="w-full h-14 flex items-center justify-start px-4 border border-gray-700 rounded-full text-lg text-gray-400">
            Eg. Prakash
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div className="font-medium">
            <span>Phone Number</span>
            <span className="text-[#f55c38]">*</span>
          </div>
          <div className="w-full h-14 flex items-center justify-start px-4 border border-gray-700 rounded-full text-lg text-gray-400">
            Eg. xxxx-xxxxxxx
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-2">
        <div className="text-sm leading-6 hidden">Foundation Track</div>
        <div className="flex hidden gap-4">
          <div className="flex items-center gap-2">
            <img className="w-6 h-6" alt="radio" src="Radio Button.svg" />
            <div className="leading-6">Web Dev</div>
          </div>
          <div className="flex items-center gap-2">
            <img className="w-6 h-6" alt="radio" src="Radio Button.svg" />
            <div className="leading-6">Soft Skills</div>
          </div>
          <div className="flex items-center gap-2">
            <img className="w-6 h-6" alt="radio" src="Radio Button.svg" />
            <div className="leading-6">Miscellaneous</div>
          </div>
        </div>
      </div>

      <div className="w-full h-14 hidden" />
      <div className="w-full h-14 hidden" />
      <div className="w-full hidden flex-col gap-2 text-sm">
        <div className="leading-6">Description</div>
        <div className="flex px-2 pt-2 text-lg text-gray-700">
          Learn about different datatypes that govern how values are stored in
          Python. We will talk about how to identify variables, naming schemes
          and usage in programs.
        </div>
      </div>
      <div className="w-full h-14 hidden" />
      <div className="w-full hidden flex-col gap-2 text-sm">
        <div className="leading-6">On Days</div>
        <div className="flex gap-4">
          <div className="rounded-lg bg-[#e9f5e9] px-3 py-1 text-green-700">
            Mon
          </div>
          <div className="rounded-lg px-3 py-1">Tue</div>
          <div className="rounded-lg px-3 py-1">Wed</div>
          <div className="rounded-lg px-3 py-1">Thurs</div>
          <div className="rounded-lg px-3 py-1">Fri</div>
          <div className="rounded-lg px-3 py-1">Sat</div>
          <div className="rounded-lg px-3 py-1">Sun</div>
        </div>
      </div>

      <div className="rounded-full bg-[#f55c38] h-14 flex items-center justify-center px-8 cursor-pointer text-white font-amazon-ember">
        Request a Callback
      </div>
    </div>
  );
};

export default Popup;
