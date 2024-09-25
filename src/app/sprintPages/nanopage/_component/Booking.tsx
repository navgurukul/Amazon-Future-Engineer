import LastPart from "./LastPart";
import React from "react";

const Booking = ({ handleOfflineBooking }) => {
  return (
    <>
      <div className="relative flex flex-col items-center w-full">
        <div className="relative flex justify-between w-full gap-8 mt-8">
          <div className="flex flex-col w-full lg:w-2/3 gap-8">
            <div className="w-full text-left text-[#29458c]">
              <h1 className="text-2xl md:text-3xl lg:text-13xl font-extrabold font-['Amazon Ember']">
                Why is Nano a Perfect Fit for Your Class?
              </h1>
            </div>
            {/* <div className="flex gap-8 items-start">
              <div className="flex flex-col gap-[300px] mt-20">
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
                <div className="relative flex items-center gap-4 md:w-[100%]">
                  <img
                    className="absolute -left-[70px] w-[123.8px] h-[123.8px] z-0"
                    alt="Polygon 1 (2)"
                    src="/nanopage/Polygon 1 (2).svg"
                  />
                  <div className="flex flex-col z-10">
                    <b className="leading-[170%]">One-Day Skill-Building</b>
                    <div className="leading-[170%] font-medium">
                      Gain foundational skills and insights into robotics and AI
                      in just one day.
                    </div>
                  </div>
                </div>
              </div>

              <img src="/nanopage/Frame 31619.svg" alt="Divider" />

              <div className="flex flex-col gap-[300px] mt-44 ml-20">
                <div className="relative flex items-center justify-start gap-4 md:w-[100%] mt-20">
                  <img
                    className="absolute -left-[70px] w-[123.8px] h-[123.8px] z-0"
                    alt="Polygon 1 (1)"
                    src="/nanopage/Polygon 1 (1).svg"
                  />
                  <div className="flex flex-col z-10">
                    <b className="leading-[170%]">Getting a Taste of AFE</b>
                    <div className="leading-[170%] font-medium">
                      Discover exciting opportunities and resources at AFE
                      Innovation Hub.
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center justify-start gap-4 md:w-[100%]">
                  <img
                    className="absolute -left-[70px] w-[123.8px] h-[123.8px] z-0"
                    alt="Star 1"
                    src="/nanopage/Star 1.svg"
                  />
                  <div className="flex flex-col z-10">
                    <b className="leading-[170%]">
                      Inspiring Future Aspirations
                    </b>
                    <div className="leading-[170%] font-medium">
                      Spark curiosity and inspire students to dive deeper into
                      STEM fields.
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="flex md:gap-8 items-start flex-wrap md:flex-nowrap">
  {/* Left Column */}
  <div className="flex flex-col md:gap-[300px] md:mt-20 w-full md:w-auto">
    <div className="relative flex items-center md:gap-4 w-full md:w-[100%]">
      <img
        className="absolute right-0 md:left-[-70px] w-[80px] md:w-[123.8px] md:h-[123.8px] z-0"
        alt="Polygon 1"
        src="/nanopage/Polygon 1.svg"
      />
      <div className="flex flex-col z-10 w-full text-left gap-2 md:gap-0 mb-4 md:mb-0">
        <b className="leading-[170%]">First Visit</b>
        <div className="leading-[170%] font-medium">
          A great starting point for schools exploring the AFE Innovation Hub for the first time.
        </div>
      </div>
    </div>

    <div className="relative flex items-center gap-4 w-full md:w-[100%]">
      <img
        className="absolute right-0 md:left-[-70px] w-[80px] md:w-[123.8px] md:h-[123.8px] z-0"
        alt="Polygon 1 (2)"
        src="/nanopage/Polygon 1 (2).svg"
      />
      <div className="flex flex-col z-10 w-full text-left gap-2 md:gap-0 mb-4 md:mb-0">
        <b className="leading-[170%]">One-Day Skill-Building</b>
        <div className="leading-[170%] font-medium">
          Gain foundational skills and insights into robotics and AI in just one day.
        </div>
      </div>
    </div>
  </div>

  {/* Divider: Hide on smaller screens */}
  <img
    className="hidden md:block"
    src="/nanopage/Frame 31619.svg"
    alt="Divider"
  />

  {/* Right Column */}
  <div className="flex flex-col md:gap-[300px] md:mt-44 md:ml-20 w-full md:w-auto">
    <div className="relative flex items-center gap-4 w-full md:w-[100%] md:mt-20">
      <img
        className="absolute right-0 md:left-[-70px] w-[80px] md:w-[123.8px] md:h-[123.8px] z-0"
        alt="Polygon 1 (1)"
        src="/nanopage/Polygon 1 (1).svg"
      />
      <div className="flex flex-col z-10 w-full text-left gap-2 md:gap-0 mb-4 md:mb-0">
        <b className="leading-[170%]">Getting a Taste of AFE</b>
        <div className="leading-[170%] font-medium">
          Discover exciting opportunities and resources at AFE Innovation Hub.
        </div>
      </div>
    </div>

    <div className="relative flex items-center gap-4 w-full md:w-[100%]">
      <img
        className="absolute right-0 md:left-[-70px] w-[80px] md:w-[123.8px] md:h-[123.8px] z-0"
        alt="Star 1"
        src="/nanopage/Star 1.svg"
      />
      <div className="flex flex-col z-10 w-full text-left gap-2 md:gap-0 mb-4 md:mb-0">
        <b className="leading-[170%]">Inspiring Future Aspirations</b>
        <div className="leading-[170%] font-medium">
          Spark curiosity and inspire students to dive deeper into STEM fields.
        </div>
      </div>
    </div>
  </div>
</div>


          </div>

          {/* <div className="hidden md:block md:w-1/3 w-full">
            <div className="w-full relative rounded-lg bg-incandescent-light border-[2px] border-incandescent-main p-8 gap-8">
              <div className="flex flex-row items-center gap-4 md:mb-10">
                <img
                  className="w-[67px] h-12 overflow-hidden relative"
                  src="/nanopage/reshot-icon-time-YEDR7WZV2Q.svg"
                  alt="Time Icon"
                />
                <div className="flex flex-col gap-1">
                  <b className="leading-[170%]">Duration</b>
                  <div className="leading-[170%] font-medium">
                    1 Day (3 hours)
                  </div>
                </div>
              </div>

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

              <div className="flex flex-col gap-4 text-center">
                <div className="w-full h-14 flex items-center justify-center rounded-81xl bg-incandescent-main py-2 px-8 cursor-pointer">
                  <div className="leading-[170%] font-medium text-white">
                    Book Online
                  </div>
                </div>
                <div
                  className="w-full h-14 flex items-center justify-center rounded-81xl bg-orange-main py-2 px-8 cursor-pointer"
                  onClick={handleOfflineBooking}
                >
                  <div className="leading-[170%] font-medium text-text-primary">
                    Book via Helpdesk
                  </div>
                </div>
              </div>
            </div>
          </div> */}
<div className="hidden lg:block lg:w-1/3 w-full sticky top-32 h-full">
  <div className="w-full relative rounded-lg bg-incandescent-light border-[2px] border-incandescent-main p-8 gap-8">
    <div className="flex flex-row items-center gap-4 md:mb-10">
      <img
        className="w-[67px] h-12 overflow-hidden relative"
        src="/nanopage/reshot-icon-time-YEDR7WZV2Q.svg"
        alt="Time Icon"
      />
      <div className="flex flex-col gap-1">
        <b className="leading-[170%]">Duration</b>
        <div className="leading-[170%] font-medium">1 Day (3 hours)</div>
      </div>
    </div>

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

    <div className="flex flex-col gap-4 text-center">
      <div className="w-full h-14 flex items-center justify-center rounded-81xl bg-incandescent-main py-2 px-8 cursor-pointer">
        <div className="leading-[170%] font-medium text-white">Book Online</div>
      </div>
      <div
        className="w-full h-14 flex items-center justify-center rounded-81xl bg-orange-main py-2 px-8 cursor-pointer"
        onClick={handleOfflineBooking}
      >
        <div className="leading-[170%] font-medium text-text-primary">
          Book via Helpdesk
        </div>
      </div>
    </div>
  </div>
</div>

<div className="lg:hidden fixed bottom-0 left-0 w-full z-50 bg-white p-4 rounded-t-xl">
  <div className="flex flex-col gap-4 text-center">
    <div className="w-full h-10 flex items-center justify-center rounded-81xl bg-incandescent-main py-2 px-8 cursor-pointer">
      <div className="leading-[170%] font-medium text-white">Book Online</div>
    </div>
    <div
      className="w-full h-10 flex items-center justify-center rounded-81xl bg-orange-main py-2 px-8 cursor-pointer"
      onClick={handleOfflineBooking}
    >
      <div className="leading-[170%] font-medium text-text-primary">
        Book via Helpdesk
      </div>
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
