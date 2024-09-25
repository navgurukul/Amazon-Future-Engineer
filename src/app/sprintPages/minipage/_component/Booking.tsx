import LastPart from "./LastPart";
import React from "react";
import { useRouter } from "next/navigation";

const Booking = () => {
  const router = useRouter()
  const handleRoute = ()=>{
    router.push("/additionalquestions")
  }
  return (
    <>
      <div className="relative flex flex-col items-center w-full">
        {/* Container for Main Section with Line Divider */}
        <div className="relative flex justify-between w-full gap-8 mt-8">
          {/* Left Side Content for larger screens */}
          <div className="flex flex-col w-full md:w-2/3 gap-8">
            <div className="w-full text-left md:text-5xl text-[#29458c]">
              <h1 className="text-3xl font-bold">
                Why is Mini a Perfect Fit for Your Class?
              </h1>
            </div>
            {/* Main Content Sections */}
            <div className="flex gap-8 items-start">
              <div className="flex flex-col gap-[300px] mt-20">
                {/* Section 1 (Left of Line) */}
                <div className="relative flex items-center gap-4 md:w-[100%]">
                  <img
                    className="absolute -left-[70px] w-[123.8px] h-[123.8px] z-0"
                    alt="Polygon 1"
                    src="/nanopage/Polygon 1.svg"
                  />
                  <div className="flex flex-col z-10">
                    <b className="leading-[170%]">First Visit</b>
                    <div className="leading-[170%] font-medium">
                      A great starting point for schools exploring the AFE
                      Innovation Hub for the first time.
                    </div>
                  </div>
                </div>
              </div>

              {/* Vertical Line with Red Circles */}
              <div>
              <img src="/nanopage/Frame 31619.svg" alt="Divider"/>
              </div>

              <div className="flex flex-col gap-[250px] mt-40 ml-20">
                {/* Section 3 (Right of Line) */}
                <div className="relative flex items-center justify-start gap-4 md:w-[100%] mt-20">
                  <img
                    className="absolute -left-[70px] w-[123.8px] h-[123.8px] z-0"
                    alt="Polygon 1 (1)"
                    src="/nanopage/Polygon 1 (1).svg"
                  />
                  <div className="flex flex-col z-10">
                    <b className="leading-[170%]">Hands-On Learning</b>
                    <div className="leading-[170%] font-medium">
                     Build and refine essential skills with practical, hands-on activities and tools.
                    </div>
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
                <img
                  className="w-[67px] h-12 overflow-hidden relative"
                  src="/nanopage/reshot-icon-time-YEDR7WZV2Q.svg"
                  alt="Time Icon"
                />
                <div className="flex flex-col gap-1">
                  <b className="leading-[170%]">Duration</b>
                  <div className="leading-[170%] font-medium">
                  3 Days (2 hours per day) 
                  </div>
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
                  20 to 30 students per session 
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-4 text-center">
                <div className="w-full h-14 flex items-center justify-center rounded-81xl bg-incandescent-main py-2 px-8 cursor-pointer" onClick={handleRoute}>
                  <div className="leading-[170%] font-medium text-white">
                  Join Waiting List
                  </div>
                </div>
               {/* <div
                  className="w-full h-14 flex items-center justify-center rounded-81xl bg-orange-main py-2 px-8 cursor-pointer"
                  onClick={handleOfflineBooking}
                >
                  <div className="leading-[170%] font-medium text-text-primary">
                    Book via Helpdesk
                  </div>
                </div>
                */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Last Part Component */}
      <LastPart />
    </>
  );
};

export default Booking;
