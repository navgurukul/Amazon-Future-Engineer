import React, { useState } from "react";

interface PopupProps {
  offlinePopup: boolean;
  handleOfflineBookingClose: () => void;
  handleClose: () => void;
}

const Popup: React.FC<PopupProps> = ({
  offlinePopup,
  handleOfflineBookingClose,
  handleClose,
}) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload on form submission

    // Store the data in localStorage
    localStorage.setItem("userData", JSON.stringify({ name, phoneNumber }));

    // Close the popup after saving data
    handleOfflineBookingClose();
  };

  if (!offlinePopup) return null;

  return (
    <>
      {/* Backdrop Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>

      {/* Popup Dialog */}
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-6 flex flex-col items-start gap-4 text-left text-gray-500 font-nunito-sans">
          {/* Title and Close Button */}
          <div className="flex items-center justify-between text-lg font-amazon-ember w-full">
            <div className="font-extrabold">Helpdesk</div>
            <img
              className="w-5 h-5 cursor-pointer"
              alt="close"
              src="/homepage/close.svg"
              onClick={handleClose}
            />
          </div>

          {/* Description Text */}
          <div className="leading-6 font-medium text-sm">
            You can talk to our representative for sprint information, booking
            sprints, or any general queries.
          </div>

          {/* Response Time */}
          <div className="leading-6 text-sm">
            <b>Response Time:</b>{" "}
            <span className="font-medium">Within 24 hours</span>
          </div>

          {/* Operational Time */}
          <div className="leading-6 text-sm">
            <b>Operational Time:</b>{" "}
            <span className="font-medium">Mon to Fri from 9 AM to 6 PM</span>
          </div>

          {/* Form Starts Here */}
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            {/* Name Input */}
            <div className="flex flex-col gap-1 w-full">
              <label className="font-medium text-sm" htmlFor="name">
                Name <span className="text-[#f55c38]">*</span>
              </label>
              <input
                id="name"
                type="text"
                className="w-full h-12 flex items-center justify-start px-4 border border-gray-700 rounded-full text-base text-gray-700"
                placeholder="Eg. Prakash"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Phone Number Input */}
            <div className="flex flex-col gap-1 w-full">
              <label className="font-medium text-sm" htmlFor="phone">
                Phone Number <span className="text-[#f55c38]">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                className="w-full h-12 flex items-center justify-start px-4 border border-gray-700 rounded-full text-base text-gray-700"
                placeholder="+91 xxxx-xxxxxxx"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>

            {/* Callback Button */}
            <div className="w-full flex justify-end">
              <button
                type="submit"
                className="rounded-full bg-[#f55c38] h-14 flex items-center justify-center px-8 cursor-pointer text-white font-amazon-ember"
              >
                Request a Callback
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Popup;


