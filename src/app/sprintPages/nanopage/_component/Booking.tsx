import LastPart from "./LastPart";
import React from "react";


const Booking = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="relative w-full h-[1081px] text-left text-[32px] text-[#29458c] font-bold">
          <div className="absolute top-0 left-0 leading-[150%] font-extrabold w-[760px]">
            Why is Nano a Perfect Fit for Your Class?
          </div>
          <div className="absolute top-[80px] left-8 w-[760px] h-[501px] text-[18px] text-[#3a3a3a]">
            <div className="absolute top-0 left-[352px] flex flex-col items-center justify-start gap-2 w-6 h-[999px]">
              <div className="w-4 h-4 rounded-full bg-[#f55c38]" />
              <div className="w-1 flex-1 rounded-full bg-[#933722]" />
              <div className="w-4 h-4 rounded-full bg-[#f55c38]" />
            </div>
            <div className="absolute top-[96px] left-0 flex items-center gap-4 w-[320px]">
              <img
                className="w-[153.8px] h-[153.8px] absolute -top-[51.09px] -left-[69.09px] z-0"
                alt=""
                src="/nanopage/Polygon 1.svg"
              />
              <div className="relative z-1 flex flex-col items-start gap-2">
                <b className="leading-[170%]">First Visit</b>
                <div className="leading-[170%] font-medium">
                  A great starting point for schools exploring the AFE Innovation Hub for the first time
                </div>
              </div>
            </div>
            <div className="absolute top-[324px] left-[440px] flex items-center gap-4 w-[320px]">
              <img
                className="w-[153.8px] h-[153.8px] absolute -top-[51.09px] -left-[53.09px] z-0"
                alt=""
                src="/nanopage/Polygon 1 (1).svg"
              />
              <div className="relative z-1 flex flex-col items-start gap-2">
                <b className="leading-[170%]">Getting a Taste of AFE</b>
                <div className="leading-[170%] font-medium">
                  Discover exciting opportunities and resources at AFE Innovation Hub
                </div>
              </div>
            </div>
            <div className="absolute top-[556px] left-0 flex items-center gap-4 w-[320px]">
              <img
                className="w-[153.8px] h-[153.8px] absolute -top-[51.09px] -left-[69.09px] z-0"
                alt=""
                src="/nanopage/Polygon 1 (2).svg"
              />
              <div className="relative z-1 flex flex-col items-start gap-2">
                <b className="leading-[170%]">One-Day Skill-Building</b>
                <div className="leading-[170%] font-medium">
                  Gain foundational skills and insights into robotics and AI in just one day
                </div>
              </div>
            </div>
            <div className="absolute top-[824px] left-[440px] flex items-center gap-4 w-[320px]">
              <img
                className="w-[153.8px] h-[153.8px] absolute -top-[51.09px] -left-[53.09px] z-0"
                alt=""
                src="/nanopage/Star 1.svg"
              />
              <div className="relative z-1 flex flex-col items-start gap-2">
                <b className="leading-[170%]">Inspiring Future Aspirations</b>
                <div className="leading-[170%] font-medium">
                  Spark curiosity and inspire students to dive deeper into STEM fields
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 w-[560px]">
          <div className="w-full relative rounded-lg bg-incandescent-light border-[2px] border-incandescent-main border-solid flex flex-col items-start justify-start p-8 gap-8 text-left text-lg text-text-primary font-webtypestyles-buttonlarge">
            <div className="flex flex-row items-center justify-start gap-4">
              <div className="w-[67px] h-12 overflow-hidden relative shrink-0">
                <img src="/nanopage/reshot-icon-time-YEDR7WZV2Q.svg" />
              </div>
              <div className="flex flex-col items-start justify-center gap-1">
                <b className="leading-[170%]">Duration</b>
                <div className="leading-[170%] font-medium">1 Day (3 hours)</div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-4">
              <img
                className="w-[67px] h-12 overflow-hidden relative shrink-0"
                alt=""
                src="/nanopage/reshot-icon-student-DRC3YF56MU.svg"
              />
              <div className="flex flex-col items-start justify-center gap-1">
                <b className="leading-[170%]">Batch Strength</b>
                <div className="leading-[170%] font-medium">
                  30 to 40 students per session
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-4 text-center text-incandescent-contrasttext">
              <div className="self-stretch h-14 flex items-center justify-center rounded-81xl bg-incandescent-main py-2 px-8 cursor-pointer">
                <div className="leading-[170%] font-medium">Book Online</div>
              </div>
              <div className="self-stretch h-14 flex items-center justify-center rounded-81xl bg-orange-main py-2 px-8 cursor-pointer text-text-primary">
                <div className="leading-[170%] font-medium">Book via Helpdesk</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LastPart />
    </>
  );
};

export default Booking;