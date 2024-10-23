"use client";

import FirstPopup from "./_components/FirstPopup";
import PhoneSecondPopup from "./_components/PhoneSecondPopup";
import Header from "@/components/Header";
import { getUserData } from "@/utils/api";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useState, useEffect } from "react";


interface EventData {
  booking_batch_size: number;
  booking_for: string;
  end_time: string;
  start_time: string;
  status: string;
  students_grade: string;
  program_id: number;
  venue_id: number;
  booking_id: number;
}

const Page: NextPage = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<EventData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const whatsappLink = `https://wa.me/${6366969292}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data: EventData[] = await getUserData();
        setUserData((prevData) => {
          return data;
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  const handleViewSprintDetails = () => {
    // Navigate to the desired page
    router.push("/sprintPages/nanopage");
  };
  const [isFirstPopupOpen, setIsFirstPopupOpen] = useState(false);
  const [isPhoneSecondPopupOpen, setIsPhoneSecondPopupOpen] = useState(false);
  const handleOpenFirstPopup = () => setIsFirstPopupOpen(true);
  const handleCloseFirstPopup = () => setIsFirstPopupOpen(false);
  const handleOpenSecondPopup = () => {
    handleCloseFirstPopup();
    setIsPhoneSecondPopupOpen(true);
  };

  const handleCloseSecondPopup = () => setIsPhoneSecondPopupOpen(false);
  const handleBookSessionClick = () => {
    console.log("need to add logic for this")
  }


  const [copied, setCopied] = useState(false);

  const phoneNumber = " +91 63669-69292";

  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumber)
      .then(() => {
        setCopied(true); 

        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <Header bgColor="" openSecondPopup={false} handleOfflineBooking={function (): void {
          throw new Error("Function not implemented.");
        }} offlinePopup={false} bookingPopup={false} handleBookSessionClick={handleBookSessionClick} />
      </div>
      {/* <Header isLoggedIn={true} /> */}
      {/* <div className="mt-[184px] max-w-[90%] sm:max-w-[1216px] h-auto flex flex-col justify-start items-center gap-8 mb-8 mx-auto relative"> */}
      <div className=" pt-[184px] max-w-[90%] md:max-w-[90%] lg:max-w-[70%] h-auto flex flex-col justify-start items-center gap-8 mb-8 mx-auto relative">
        {/* <Header isLoggedIn={true} /> */}
        {/* <div className="text-[#29458c]  text-[24px] sm:text-[32px] font-extrabold leading-[36px] sm:leading-[48px] self-stretch">
          My Bookings
        </div> */}
        <h2 className="self-stretch leading-[150%] text-heading6 md:text-heading5 text-[#29458c]">My Bookings</h2>
        {/* <div className="text-[#29458c] text-heading4 font-heading4-bold  sm:text-[32px]  leading-[48px] sm:leading-[48px] self-stretch">
                    My Bookings
                </div> */}
        {isLoading ? (
          <div>Loading...</div>
        ) : userData?.length ? (
          userData?.map((event, index) => (
            <div
              key={index}
              // className="bg-white p-4 rounded-md flex flex-col sm:flex-row sm:justify-between sm:items-center shadow-md h-auto sm:h-[132px] border border-gray-200 w-full"
              className="bg-white p-6 rounded-md flex flex-col md:flex-row md:justify-between md:items-center shadow-md h-auto border border-gray-200 w-full"
            >
              <div className="text-left md:text-right">
                {/* <div className="text-left leading-[150%] font-bold text-[1.5rem] md:font-extrabold">
                  Nano Sprint
                </div> */}
                <h3 className="leading-[150%] text-subHeading1 md:text-heading6 font-heading5-bold text-[#3a3a3a] text-left mb-4">Nano Sprint</h3>
                <div className="flex flex-col gap-4 md:gap-8 md:flex-row">
                  <div className="flex items-center gap-3">
                    <Image
                      className="w-auto h-8"
                      alt="calendar icon"
                      src="/userDashboard/reshot-icon-calendar-U75ASPNFXK.svg"
                      width={20}
                      height={20}
                    />
                    {/* <div className="text-[#3a3a3a] flex items-center gap-[2rem] text-lg font-medium font-['Amazon Ember'] leading-[30.60px]">
                      {new Date(event.booking_for).toLocaleDateString()}
                    </div> */}
                    <p className="w-full relative text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray">{new Date(event.booking_for).toLocaleDateString()}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Image
                      className="w-auto h-8"
                      alt="time icon"
                      src="/userDashboard/reshot-icon-time-SRKEMN64PU.svg"
                      width={20}
                      height={20}
                    />
                    {/* <div className="text-[#3a3a3a] flex items-center gap-[2rem] text-lg font-medium font-['Amazon Ember'] leading-[30.60px]">
                      {`${event.start_time} to ${event.end_time}`}
                    </div> */}
                    <p className="w-full relative text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray">{`${event.start_time} to ${event.end_time}`}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Image
                      className="w-auto h-8"
                      alt="students icon"
                      src="/userDashboard/reshot-icon-student-DRC3YF56MU.svg"
                      width={20}
                      height={20}
                    />
                    {/* <div className="text-[#3a3a3a] flex items-center text-lg gap-[2rem] font-medium font-['Amazon Ember'] leading-[30.60px]">
                      {`${event.booking_batch_size} Students`}
                    </div> */}
                    <p className="w-full relative text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray">{`${event.booking_batch_size} Students`}</p>
                  </div>
                </div>
              </div>
              {/* <div> */}
              {/* <div className="h-14 px-8 py-2 rounded-[100px] border border-[#f55c38] justify-center items-center gap-2 inline-flex hover:bg-transparent w-full sm:w-48 sm:px-6 sm:py-2 mt-4"> */}
              <div
                className="text-center text-[#f55c38] text-lg font-medium font-['Amazon Ember'] cursor-pointer px-8 py-2 rounded-[100px] border border-[#f55c38] justify-center items-center gap-2 inline-flex hover:bg-transparent w-full md:w-auto mt-6 md:mt-0 text-bodyM md:text-body1"
                onClick={handleOpenFirstPopup}
              >
                Reschedule
              </div>
              {/* </div> */}
              {/* </div> */}
            </div>
          ))
        ) : (
          <div>No upcoming events found.</div>
        )}
      </div>

      <FirstPopup
        isOpen={isFirstPopupOpen}
        handleClose={handleCloseFirstPopup}
        handleOpenSecondPopup={handleOpenSecondPopup}
        // userData={userData ? userData[0] : null}
         userData={userData && userData.length > 0 ? userData[0] : null}
        // userData={userData && userData.length > 0 && userData[0].booking_id ? userData[0] : null}
         />

      <PhoneSecondPopup
        isOpen={isPhoneSecondPopupOpen}
        handleClose={handleCloseSecondPopup}
        userData={userData ? userData[0] : null}
      />


      <div className="w-full max-w-[90%] lg:max-w-[70%] md:max-w-[90%] h-auto mx-auto relative flex flex-col items-center gap-8 mt-12">
        {/* <div className="text-[#29458c] text-[24px] font-extrabold leading-[36px] text-left sm:text-[32px] sm:leading-[48px] self-start"> */}
        <h2 className="leading-[150%] text-heading6 md:text-heading5 text-[#29458c] text-left self-start w-full max-w-[90%]">
          How to Reach AFE Makerspace
          {/* <span className="block sm:hidden"></span>
          <span className="sm:ml-2">Makerspace</span> */}
        </h2>
        <div className="flex flex-col xl:flex-row items-start gap-[33px] w-full">
          {/* <img
            className="lg:w-[50%] w-full h-auto rounded-lg object-cover"
            alt="innovation hub map"
            src="/userDashboard/map.png"        
          /> */}
          <div className="md:max-w-[592px] md:max-h-[440px]">
            <a href="https://maps.app.goo.gl/z7QztCwrwcMTnpscA" target="_blank" rel="noopener noreferrer">
              <img
                className=" w-full h-auto rounded-lg object-cover cursor-pointer"
                alt="innovation hub map"
                src="/userDashboard/map.png"
              />
            </a>
          </div>

          <div className="w-full flex flex-col gap-4">
            {/* <div className="text-[#3a3a3a] text-[24px] sm:text-xl font-extrabold leading-9"> */}
            <div className="leading-[150%] text-subHeading1 md:text-heading6 font-['Amazon Ember'] text-[#3a3a3a]">
              Amazon Future Engineer Makerspace</div>
            {/* <div className="text-[#3a3a3a] text-lg font-medium leading-[30.60px]"> */}
            <div className="w-full relative text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray">
              #41, 3rd Floor, Above Maruti Suzuki Arena, 15th Cross, Margosa Road, Malleshwaram, Bangalore - 560003
            </div>
            {/* <div className="text-[#3a3a3a] text-lg font-medium leading-[30.60px]"> */}
            <div className="w-full relative text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray">
              Landmark: Near Veena Stores
            </div>
            {/* <div className="text-[#3a3a3a] text-lg font-medium leading-[30.60px]"> */}
            {/* <div className="w-full relative text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray">
              For queries, please call or Whatsapp us on {" "}
              <strong className="inline-flex items-center">
                  <a href={whatsappLink} target="_blank" className="text-tomato font-extrabold">
                    +91 636696-9292
                  </a>
                  <button
                    className="hidden md:flex px-2 py-1 ml-4 rounded-full border border-[#F55C38] justify-center items-center leading-[170%]"
                    onClick={handleCopy}
                  >
                    <img
                      src="/userDashboard/content_copy.svg"
                      alt="Copy Icon"
                      className="h-[16px] w-[16px] mr-2"
                    />
                  
                    <div className="h-[24px] w-[33px] text-center text-[#F55C38] text-base md:text-body2 font-body2-regular">
                      Copy
                    </div>
                  </button>
              </strong>
            </div> */}

            <div className="w-full relative text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray">
              For queries, please call or Whatsapp us on {" "}
              <strong className="inline-flex items-center">
                <a href={whatsappLink} target="_blank" className="text-tomato font-extrabold">
                  +91 63669-69292
                </a>
                <button
                  className="hidden md:inline-flex px-4 py-2 ml-4 rounded-full border border-[#F55C38] justify-center items-center leading-[170%] flex gap-2 w-[89px] h-[40px]"
                  onClick={handleCopy}
                >
                  {copied ? (
                    <>
                      <img
                        src="/userDashboard/checkmark_icon.png"
                        alt="Check Icon"
                        className="h-[16px] w-[16px]"
                      />
                      <span className="text-[#F55C38] text-base md:text-body2 font-body2-regular">
                        Copied!
                      </span>
                    </>
                  ) : (
                    <>
                      <img
                        src="/userDashboard/content_copy.svg"
                        alt="Copy Icon"
                        className="h-[16px] w-[16px]"
                      />
                      <span className="text-[#F55C38] text-base md:text-body2 font-body2-regular">
                        Copy
                      </span>
                    </>
                  )}
                </button>
              </strong>
            </div>
          </div>
        </div>
      </div>
      {/* <div className=" max-w-[90%] lg:max-w-[70%] md:max-w-[90%] h-auto flex flex-col justify-center items-start gap-8 mx-auto relative mt-8"> */}
      <div className="max-w-[90%] lg:max-w-[70%] md:max-w-[90%] h-auto flex justify-between items-start gap-8 mx-auto relative mt-8 md:mb-16">
        <div className="h-auto flex flex-col justify-center items-start gap-8 relative md:mt-8 text-left">
          <div className="flex flex-col justify-start items-start gap-4">
            {/* <div className="text-left text-[#29458c] text-[24px] sm:text-[32px] font-extrabold leading-[36px] sm:leading-[48px]"> */}
            <div className="leading-[150%] text-heading6 md:text-heading5 text-[#29458c] text-left self-start">
              Planned for future sprints?
            </div>
            {/* <div className="text-left text-[#3a3a3a] text-lg font-medium leading-[30.60px]"> */}
            <div className="w-full relative text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray">
              Checkout the sprint details and book
              {/* <br className="block sm:hidden" /> */}
              one for your students today!
            </div>
          </div>
          <div className="w-full sm:w-auto h-12 sm:h-12 bg-[#f55c38] rounded-[100px] flex items-center justify-center px-4 sm:px-8 py-2 mb-4 cursor-pointer"
            onClick={handleViewSprintDetails}>
            {/* <div className="text-center text-white text-sm sm:text-base font-medium leading-[170%] font-['Amazon Ember']"> */}
            <div className="text-center text-white text-body1 font-medium leading-[170%] font-['Amazon Ember']">
              View Sprint Details
            </div>
          </div>
        </div>
        <div>
          {/* <img className="hidden md:block mt-16 w-[80%] float-right" src="/userDashboard/Frame 31752.svg" alt="Coding symbol" /> */}
        </div>
      </div>
    </>
  );
};
export default Page;