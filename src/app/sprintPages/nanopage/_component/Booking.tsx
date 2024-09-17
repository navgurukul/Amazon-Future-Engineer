import React from "react";

const Booking = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="flex-1">
        <div className="w-[633px] relative text-13xl leading-[150%] font-extrabold font-webtypestyles-h5 text-midnight-blue-main text-left inline-block">
          Why is Nano a Perfect Fit for Your Class?{" "}
        </div>
      </div>
      <div className="p-2">
        <div className="w-full relative rounded-lg bg-incandescent-light border-incandescent-main border-[2px] border-solid box-border flex flex-col items-start justify-start p-8 gap-8 text-left text-lg text-text-primary font-webtypestyles-buttonlarge">
          <div className="flex flex-row items-center justify-start gap-4">
            <div className="w-[67px] relative h-12 overflow-hidden shrink-0">
              <img src="/nanopage/reshot-icon-search-time-schedule-YKN4SVFGAU.svg" />
            </div>
            <div className="flex flex-col items-start justify-center gap-1">
              <b className="relative leading-[170%]">Duration</b>
              <div className="relative leading-[170%] font-medium">
                1 Day (3 hours)
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <img
              className="w-[67px] relative h-12 overflow-hidden shrink-0"
              alt=""
              src="/nanopage/reshot-icon-student-boy-L9ESXQZ3WU.svg"
            />
            <div className="flex flex-col items-start justify-center gap-1">
              <b className="relative leading-[170%]">Batch Strength</b>
              <div className="relative leading-[170%] font-medium">
                30 to 50 students per session
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-4 text-center text-incandescent-contrasttext">
            <div className="self-stretch rounded-81xl bg-incandescent-main h-14 flex flex-row items-center justify-center py-2 px-8 box-border cursor-pointer">
              <div className="relative leading-[170%] font-medium">
                Book Nano Sprint Online
              </div>
            </div>
            <div className="self-stretch rounded-81xl bg-orange-main h-14 flex flex-row items-center justify-center py-2 px-8 box-border cursor-pointer text-text-primary">
              <div className="relative leading-[170%] font-medium">
                Book over Call
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Booking;
