import LastPart from "./LastPart";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import React from "react";

interface BookingProps {
  handleOfflineBooking: () => void;
}

const Booking: NextPage<BookingProps> = ({ handleOfflineBooking }) => {
  const router = useRouter();

  const handleOnlineBooking = () => {
    // Navigate to the desired page
    router.push("/booking");
  };
  return (
    <>
      <div className="relative flex flex-col items-center w-full">
        <div className="relative flex justify-between w-full gap-8 mt-8">
          <div className="flex flex-col w-full lg:w-2/3 gap-8">
            <div className="w-full text-left text-[#29458c]">
              <h1 className="text-2xl md:text-3xl lg:text-13xl font-extrabold font-['Amazon Ember']">
                Programs Details
              </h1>
            </div>
            <div className="flex flex-row items-center gap-4 text-darkslategray">
              <img
                className="w-[67px] h-12 overflow-hidden relative"
                src="/nanopage/reshot-icon-time-YEDR7WZV2Q.svg"
                alt="Time Icon"
              />
              <div className="flex flex-col">
                <b className="leading-[170%] text-extrabold">Duration</b>
                <div className="leading-[170%] font-medium">
                  1 Day (3 hours)
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4 text-darkslategray">
              <img
                className="w-[67px] h-12 overflow-hidden relative"
                alt="Batch Strength Icon"
                src="/nanopage/reshot-icon-student-DRC3YF56MU.svg"
              />
              <div className="flex flex-col">
                <b className="leading-[170%] text-extrabold">Batch Strength</b>
                <div className="leading-[170%] font-medium">
                  30 to 40 students per session
                </div>
              </div>
            </div>
            <div className="w-full mt-8">
              <h1 className="text-2xl md:text-3xl lg:text-13xl leading-[150%] font-extrabold text-midnight-blue-main text-left">
                Why Schedule a Nano Sprint?{" "}
              </h1>
              <p className="w-full relative text-[14px] md:text-[20px] leading-[170%] font-medium text-[#3a3a3a] font-['Amazon Ember'] mt-4">
                Nano Sprints are designed to spark students curiosity by
                providing an engaging, hands-on introduction to robotics and AI.
                They offer students the chance to tinker, learn new skills, and
                explore the world of robotics and AI, inspiring the next
                generation of innovators
              </p>
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
            {/* <div className="flex md:gap-8 items-start flex-wrap md:flex-nowrap">
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

  <img
    className="hidden md:block"
    src="/nanopage/Frame 31619.svg"
    alt="Divider"
  />

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
</div> */}
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
              <h1 className="text-darkslategray leading-[150%] lg:text-[20px] md:text-[16px] text-[12px]  font-extrabold font-[Amazon Ember]">
                Get Started Today
              </h1>
              <p className="text-darkslategray leading-[150%] font-extrabold font-[Amazon Ember] lg:text-[17px] md:text-[12px] text-[10px] font-medium mt-4 mb-8">
                Give your students an exciting glimpse into the careers of the
                future
              </p>
              {/* lg:text-[19px] md:text-[16px] text-[13px] leading-[150%] font-medium font-[Amazon Ember] text-center */}
              {/* <div className="flex flex-row items-center gap-4 md:mb-10">
      <img
        className="w-[67px] h-12 overflow-hidden relative"
        src="/nanopage/reshot-icon-time-YEDR7WZV2Q.svg"
        alt="Time Icon"
      />
      <div className="flex flex-col gap-1">
        <b className="leading-[170%]">Duration</b>
        <div className="leading-[170%] font-medium">1 Day (3 hours)</div>
      </div>
    </div> */}

              {/* <div className="flex flex-row items-center gap-4 md:mb-10">
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
    </div> */}

              <div className="flex flex-col gap-4 text-center">
                <div
                  className="w-full h-14 flex items-center justify-center rounded-81xl bg-incandescent-main py-2 px-8 cursor-pointer"
                  onClick={handleOnlineBooking}
                >
                  <div className="leading-[170%] font-medium text-white">
                    Book Online
                  </div>
                </div>
                <div
                  className="w-full h-14 flex items-center justify-center rounded-81xl bg-orange-main py-2 px-8 cursor-pointer"
                  onClick={handleOfflineBooking}
                >
                  <div className="leading-[170%] font-medium text-text-primary">
                    Book Over Call
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:hidden fixed bottom-0 left-0 w-full z-50 bg-white p-4 rounded-t-xl">
            <div className="flex flex-col gap-4 text-center">
              <div className="w-full h-10 flex items-center justify-center rounded-81xl bg-incandescent-main py-2 px-8 cursor-pointer">
                <div className="leading-[170%] font-medium text-white">
                  Book Online
                </div>
              </div>
              <div
                className="w-full h-10 flex items-center justify-center rounded-81xl bg-orange-main py-2 px-8 cursor-pointer"
                onClick={handleOfflineBooking}
              >
                <div className="leading-[170%] font-medium text-text-primary">
                  Book Over Call
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
