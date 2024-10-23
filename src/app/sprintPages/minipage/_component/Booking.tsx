import LastPart from "./LastPart";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import React from "react";


const Booking = () => {
  const [hasShadow, setHasShadow] = useState<boolean>(true);
  const router = useRouter();
  const handleRoute = () => {
    router.push("/additionalquestions");
  };
  return (
    <>
      <div className="relative flex flex-col items-center w-full">
        <div className="relative flex justify-between w-full gap-8 mt-8">
          <div className="flex flex-col w-full lg:w-2/3 gap-8">
            <div className="w-full text-left text-[#29458c]">
              {/* <h1 className="text-2xl md:text-3xl lg:text-13xl font-extrabold font-['Amazon Ember']"> */}
              <h1 className="leading-[150%] text-subHeading1 md:text-heading6 font-['Amazon Ember']">
                Programs Details
              </h1>
            </div>
            <div className="flex flex-row items-center gap-4 text-darkslategray">
              <img
                className="w-[67px] h-12 relative"
                src="/nanopage/reshot-icon-time-YEDR7WZV2Q.svg"
                alt="Time Icon"
              />
              <div className="flex flex-col">
                {/* <b className="leading-[170%] text-extrabold">Duration</b> */}
                <b className="w-full relative text-bodyM2 md:text-subTitle1 leading-[170%] font-['Amazon Ember'] text-darkslategray">Duration</b>
                {/* <div className="leading-[170%] font-medium"> */}
                <div className="w-full relative text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray">
                  2 Days (3 hours per day)
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4 text-darkslategray">
              <div className="w-[67px] h-12 relative">
              <Image
                alt="Batch Strength Icon"
                src="/nanopage/reshot-icon-student-DRC3YF56MU.svg"
                layout="fill"
                  objectFit="contain"
              />
              </div>
              <div className="flex flex-col">
                {/* <b className="leading-[170%] text-extrabold">Batch Strength</b> */}
                <b className="w-full relative text-bodyM2 md:text-subTitle1 leading-[170%] font-['Amazon Ember'] text-darkslategray">Batch Strength</b>
                {/* <div className="leading-[170%] font-medium"> */}
                <div className="w-full relative text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray">
                  30 to 40 students per session
                </div>
              </div>
            </div>
            <div className="w-full mt-8">
              {/* <h1 className="text-2xl md:text-3xl lg:text-13xl leading-[150%] font-extrabold text-midnight-blue-main text-left"> */}
              <h1 className="leading-[150%] text-subHeading1 md:text-heading6 font-['Amazon Ember'] text-midnight-blue-main text-left">
                Why Schedule a Mini Sprint?{" "}
              </h1>
              <p className="w-full relative text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray mt-4">
                Mini Sprints provide a rich, multi-day experience that helps
                students develop and strengthen their skills in robotics and AI.
                Through hands-on projects and expert guidance, this program
                offers students a deeper, more engaging learning experience
              </p>
            </div>
          </div>
          {/* <div className="flex flex-col w-full lg:w-2/3 gap-8 md:h-[500px] lg:h-[560px]">
            <div className="w-full text-left text-[#29458c]">
              <h1 className="text-2xl md:text-3xl lg:text-13xl font-extrabold font-['Amazon Ember']">
                Why is Mini a Perfect Fit for Your Class?
              </h1>
            </div>
            <div className="flex md:gap-8 items-start flex-wrap md:flex-nowrap">
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
                      A great starting point for schools exploring the AFE
                      Innovation Hub for the first time.
                    </div>
                  </div>
                </div>
              </div>

              <img className="hidden md:block h-[50%]" src="/nanopage/Frame 31619.svg" alt="Divider"/>
             
              <div className="flex flex-col md:gap-[300px] md:mt-44 md:ml-20 w-full md:w-auto">
                <div className="relative flex items-center gap-4 w-full md:w-[100%] md:mt-20">
                  <img
                    className="absolute right-0 md:left-[-70px] w-[80px] md:w-[123.8px] md:h-[123.8px] z-0"
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
          </div> */}

          {/* Adjacent Section (for Larger Screens) */}
          <div className="hidden lg:block lg:w-1/3 w-full sticky top-32 h-full">
            {/* <div className="w-full relative rounded-lg bg-incandescent-light border-[2px] border-incandescent-main p-8 gap-8"> */}
            <div className="w-full relative rounded-lg bg-[#ECF0F3] border-[2px] border-[#29458C] p-8 gap-8">
              {/* <h1 className="text-darkslategray leading-[150%] lg:text-[20px] md:text-[16px] text-[12px] font-extrabold font-[Amazon Ember]"> */}
              <h1 className="text-darkslategray leading-[150%] text-subHeading1 md:text-heading6 font-['Amazon Ember']">
                Coming Soon!
              </h1>
              {/* <p className="text-darkslategray leading-[150%] font-extrabold font-[Amazon Ember] lg:text-[17px] md:text-[12px] text-[10px] font-medium mt-4 mb-8"> */}
              <p className="w-full relative text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray mt-4 mb-8">
                Be the first to know when Mini Sprints launch. Leave your
                details to receive updates
              </p>
              {/* <div className="flex flex-row items-center gap-4 md:mb-10">
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
                  20 to 30 students per session
                  </div>
                </div>
              </div> */}

              <div className="flex flex-col gap-4 text-center">
                <div
                  className="w-full h-14 flex items-center justify-center rounded-81xl bg-incandescent-main py-2 px-8 cursor-pointer"
                  onClick={handleRoute}
                >
                  <div className="leading-[170%] font-medium text-white">
                    Join Waiting List
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="lg:hidden fixed bottom-0 left-0 w-full z-50 bg-white p-4 rounded-t-xl"> */}
          <div
  className={`lg:hidden fixed bottom-0 left-0 w-full z-50 bg-white p-4 rounded-t-xl ${
    hasShadow
      ? "shadow-[-1px_-2px_2px_rgba(0,0,0,0.06),-2px_-1px_1px_rgba(0,0,0,0.04),-1px_-5px_5px_rgba(0,0,0,0.08)]"
      : ""
  }`}
>
            <div
              className="flex flex-col gap-4 text-center"
              onClick={handleRoute}
            >
              <div className="w-full h-12 flex items-center justify-center rounded-81xl bg-incandescent-main py-2 px-8 cursor-pointer">
                <div className="leading-[170%] font-medium text-white">
                  Join Waiting List
                </div>
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