import LastPart from "./LastPart";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import Image from "next/image";
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
              <h1 className="leading-[150%] text-subHeading1 md:text-heading6 font-['Amazon Ember'] text-midnight-blue-main text-left">
                Programs Details
              </h1>
            </div>
            <div className="flex flex-row items-center gap-4 text-darkslategray">
              <div className="w-[67px] h-12 relative">
                <Image
                  src="/nanopage/reshot-icon-time-YEDR7WZV2Q.svg"
                  alt="Time Icon"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="flex flex-col">
                {/* <b className="leading-[170%] text-extrabold">Duration</b> */}
                <b className="w-full relative text-bodyM2 md:text-subTitle1 leading-[170%] font-['Amazon Ember'] text-darkslategray">Duration</b>
                {/* <div className="leading-[170%] font-medium"> */}
                <div className="w-full relative text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray">
                  1 Day (3 hours)
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4 text-darkslategray">
              <div className="w-[67px] h-12 relative">
                <Image
                  src="/nanopage/reshot-icon-student-DRC3YF56MU.svg"
                  alt="Batch Strength Icon"
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
              <h1 className="leading-[150%] text-subHeading1 md:text-heading6 font-['Amazon Ember'] text-midnight-blue-main text-left">
                Why Schedule a Nano Sprint?{" "}
              </h1>
              {/* <p className="w-full relative text-[14px] md:text-[20px] leading-[170%] font-medium text-[#3a3a3a] font-['Amazon Ember'] mt-4"> */}
              <p className="w-full relative text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray mt-4">
                Nano Sprints are designed to spark students curiosity by
                providing an engaging, hands-on introduction to robotics and AI.
                They offer students the chance to tinker, learn new skills, and
                explore the world of robotics and AI, inspiring the next
                generation of innovators
              </p>
            </div>
          </div>

          <div className="hidden lg:block lg:w-1/3 w-full sticky top-32 h-full">
            <div className="w-full relative rounded-lg bg-incandescent-light border-[2px] border-incandescent-main p-8 gap-8">
              {/* <h1 className="text-darkslategray leading-[150%] lg:text-[20px] md:text-[16px] text-[12px]  font-extrabold font-[Amazon Ember]"> */}
              <h1 className="text-darkslategray leading-[150%] md:heading6 text-subHeading1 font-[Amazon Ember]">
                Get Started Today
              </h1>
              {/* <p className="text-darkslategray leading-[150%] font-extrabold font-[Amazon Ember] lg:text-[17px] md:text-[12px] text-[10px] font-medium mt-4 mb-8"> */}
              <p className="w-full relative text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray mt-4 mb-8">
                Give your students an exciting glimpse into the careers of the
                future
              </p>

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
              <div 
                className="w-full h-10 flex items-center justify-center rounded-81xl bg-incandescent-main py-2 px-8 cursor-pointer"
                onClick={handleOnlineBooking}
              >
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
