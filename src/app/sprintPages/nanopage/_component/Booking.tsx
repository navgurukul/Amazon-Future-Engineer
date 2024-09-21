import LastPart from "./LastPart";
import React, { useState } from "react";
import Tamanna from "../Tamanna"

const Booking = () => {
  const [offlinePopup,setOfflinePopup] = useState<boolean>(false);

  const handleOfflineBooking = ()=>{
    setOfflinePopup(true)
  }
  const handleOfflineBookingClose=()=>{
    setOfflinePopup(false)
  }

  return (
    <>
      <div className="relative flex flex-col items-center w-full">
        {/* Container for Main Section with Line Divider */}
        <div className="relative flex justify-between w-full gap-8 mt-8">

          {/* Left Side Content for larger screens */}
          <div className="flex flex-col w-full md:w-2/3 gap-8">
            <div className="w-full text-left md:text-5xl text-[#29458c]">
              <h1 className="text-3xl font-bold">Why is Nano a Perfect Fit for Your Class?</h1>
            </div>

            {/* Vertical Line with Red Circles */}
            <div className="relative flex items-center justify-center">
              <div className="absolute top-0 w-4 h-4 rounded-full bg-[#f55c38]" />
              <div className="w-1 flex-1 rounded-full bg-[#933722]" />
              <div className="absolute bottom-0 w-4 h-4 rounded-full bg-[#f55c38]" />
            </div>

            {/* Main Content Sections */}
            <div className="flex flex-col gap-8">

              {/* Section 1 (Left of Line) */}
              <div className="relative flex items-center gap-4 md:w-[35%]">
                <img
                  className="absolute -left-[70px] w-[123.8px] h-[123.8px] z-0"
                  alt="Polygon 1"
                  src="/nanopage/Polygon 1.svg"
                />
                <div className="flex flex-col z-10">
                  <b className="leading-[170%]">First Visit</b>
                  <div className="leading-[170%] font-medium">
                    A great starting point for schools exploring the AFE Innovation Hub for the first time.
                  </div>
                </div>
              </div>

              {/* Section 2 (Right of Line) */}
              <div className="relative flex items-center justify-start gap-4 ml-auto md:w-[35%]">
                <img
                  className="absolute -left-[70px] w-[123.8px] h-[123.8px] z-0"
                  alt="Polygon 1 (1)"
                  src="/nanopage/Polygon 1 (1).svg"
                />
                <div className="flex flex-col z-10">
                  <b className="leading-[170%]">Getting a Taste of AFE</b>
                  <div className="leading-[170%] font-medium">
                    Discover exciting opportunities and resources at AFE Innovation Hub.
                  </div>
                </div>
              </div>

              {/* Section 3 (Left of Line) */}
              <div className="relative flex items-center gap-4 md:w-[35%]">
                <img
                  className="absolute -left-[70px] w-[123.8px] h-[123.8px] z-0"
                  alt="Polygon 1 (2)"
                  src="/nanopage/Polygon 1 (2).svg"
                />
                <div className="flex flex-col z-10">
                  <b className="leading-[170%]">One-Day Skill-Building</b>
                  <div className="leading-[170%] font-medium">
                    Gain foundational skills and insights into robotics and AI in just one day.
                  </div>
                </div>
              </div>

              {/* Section 4 (Right of Line) */}
              <div className="relative flex items-center justify-start gap-4 ml-auto md:w-[35%]">
                <img
                  className="absolute -left-[70px] w-[123.8px] h-[123.8px] z-0"
                  alt="Star 1"
                  src="/nanopage/Star 1.svg"
                />
                <div className="flex flex-col z-10">
                  <b className="leading-[170%]">Inspiring Future Aspirations</b>
                  <div className="leading-[170%] font-medium">
                    Spark curiosity and inspire students to dive deeper into STEM fields.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Adjacent Section (for Larger Screens) */}
          <div className="hidden md:block md:w-1/3 w-full">
            <div className="w-full relative rounded-lg bg-incandescent-light border-[2px] border-incandescent-main p-8 gap-8">

              {/* Duration */}
              <div className="flex flex-row items-center gap-4 md:mb-10">
                <img className="w-[67px] h-12 overflow-hidden relative" src="/nanopage/reshot-icon-time-YEDR7WZV2Q.svg" alt="Time Icon" />
                <div className="flex flex-col gap-1">
                  <b className="leading-[170%]">Duration</b>
                  <div className="leading-[170%] font-medium">1 Day (3 hours)</div>
                </div>
              </div>

              {/* Batch Strength */}
              <div className="flex flex-row items-center gap-4 md:mb-10">
                <img
                  className="w-[67px] h-12 overflow-hidden relative"
                  alt="Batch Strength Icon"
                  src="/nanopage/reshot-icon-student-DRC3YF56MU.svg"
                />
                <div className="flex flex-col gap-1">
                  <b className="leading-[170%]">Batch Strength</b>
                  <div className="leading-[170%] font-medium">
                    30 to 50 students per session
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-4 text-center">
                <div className="w-full h-14 flex items-center justify-center rounded-81xl bg-incandescent-main py-2 px-8 cursor-pointer">
                  <div className="leading-[170%] font-medium text-white">Book Online</div>
                </div>
                <div className="w-full h-14 flex items-center justify-center rounded-81xl bg-orange-main py-2 px-8 cursor-pointer">
                  <div className="leading-[170%] font-medium text-text-primary" onClick={handleOfflineBooking}>Book via Helpdesk</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Last Part Component */}
      <LastPart />
      <Tamanna offlinePopup={offlinePopup} handleOfflineBookingClose={handleOfflineBookingClose} />
    </>
  );
};

export default Booking;