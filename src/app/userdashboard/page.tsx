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
}

const Page: NextPage = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<EventData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
    
    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
                <Header isLoggedIn={true} handleOfflineBooking={function (): void {
                    throw new Error("Function not implemented.");
                }} offlinePopup={false} openSecondPopup={false} />
            </div>
            {/* <Header isLoggedIn={true} /> */}
            {/* <div className="mt-[184px] max-w-[90%] sm:max-w-[1216px] h-auto flex flex-col justify-start items-center gap-8 mb-8 mx-auto relative"> */}
            <div className=" pt-[184px] max-w-[90%] sm:max-w-[1216px] h-auto flex flex-col justify-start items-center gap-8 mb-8 mx-auto relative">
                {/* <Header isLoggedIn={true} /> */}
                <div className="text-[#29458c]  text-[24px] sm:text-[32px] font-extrabold leading-[36px] sm:leading-[48px] self-stretch">
                    My Bookings
                </div>
                {/* <div className="text-[#29458c] text-heading4 font-heading4-bold  sm:text-[32px]  leading-[48px] sm:leading-[48px] self-stretch">
                    My Bookings
                </div> */}
                {isLoading ? (
                    <div>Loading...</div>
                  ) : userData?.length ? (
                    userData?.map((event, index) => (
                      <div
                        key={index}
                        className="bg-white p-4 rounded-md flex flex-col sm:flex-row sm:justify-between sm:items-center shadow-md h-auto sm:h-[132px] border border-gray-200 w-full"
                      >
                        <div className="space-y-2 text-left sm:text-right">
                          <div className="text-left leading-[150%] font-bold text-[1.5rem]  md:font-extrabold">
                            Nano Sprint
                          </div>
                          <div className="flex flex-col gap-[1rem] sm:flex-row space-x-0 sm:space-x-4 space-y-2 sm:space-y-0">
                            <div className="flex items-center space-x-[12px]">
                              <Image
                                className="w-6 sm:w-8 h-6 sm:h-8"
                                alt="calendar icon"
                                src="/userDashboard/reshot-icon-calendar-U75ASPNFXK.svg"
                                width={20}
                                height={20}
                              />
                              <div className="text-[#3a3a3a] flex items-center gap-[2rem] text-lg font-medium font-['Amazon Ember'] leading-[30.60px]">
                                {new Date(event.booking_for).toLocaleDateString()}
                              </div>
                            </div>
                            <div className="flex items-center space-x-[12px]">
                              <Image
                                className="w-6 sm:w-8 h-6 sm:h-8"
                                alt="time icon"
                                src="/userDashboard/reshot-icon-time-SRKEMN64PU.svg"
                                width={20}
                                height={20}
                              />
                              <div className="text-[#3a3a3a] flex items-center gap-[2rem] text-lg font-medium font-['Amazon Ember'] leading-[30.60px]">
                                {`${event.start_time} to ${event.end_time}`}
                              </div>
                            </div>
                            <div className="flex items-center space-x-[12px]">
                              <Image
                                className="w-6 sm:w-8 h-6 sm:h-8"
                                alt="students icon"
                                src="/userDashboard/reshot-icon-student-DRC3YF56MU.svg"
                                width={20}
                                height={20}
                              />
                              <div className="text-[#3a3a3a] flex items-center text-lg gap-[2rem] font-medium font-['Amazon Ember'] leading-[30.60px]">
                                {`${event.booking_batch_size} Students (${event.students_grade})`}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="h-14 px-8 py-2 rounded-[100px] border border-[#f55c38] justify-center items-center gap-2 inline-flex hover:bg-transparent w-full sm:w-48 sm:px-6 sm:py-2 mt-4">
                            <div
                              className="text-center text-[#f55c38] text-lg font-medium font-['Amazon Ember'] leading-[30.60px] sm:text-base sm:leading-7 cursor-pointer"
                              onClick={handleOpenFirstPopup}
                            >
                              Reschedule
                            </div>
                          </div>
                        </div>
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
            />
            <PhoneSecondPopup
                isOpen={isPhoneSecondPopupOpen}
                handleClose={handleCloseSecondPopup}
            />
            <div className="w-full max-w-[90%] sm:max-w-[1216px] h-auto mx-auto relative flex flex-col items-center gap-8 ">
                <div className="text-[#29458c] text-[24px] font-extrabold leading-[36px] text-left sm:text-[32px] sm:leading-[48px] self-start">
                    How to Reach AFE<span className="block sm:hidden"></span>
                    <span className="sm:ml-2">Makerspace</span>
                </div>
                <div className="flex flex-col sm:flex-row items-start gap-[33px] w-full">
                    <Image
                        className="w-full sm:w-[592px] h-[13.75rem] sm:h-[440px] rounded-lg object-cover"
                        alt="innovation hub map"
                        src="/userDashboard/map.png"
                        width={592}
                        height={440}
                    />
                    <div className="w-full sm:w-[487px] flex flex-col gap-4">
                        <div className="text-[#3a3a3a] text-[24px] sm:text-xl font-extrabold leading-9">Amazon Future Engineer Makerspace</div>
                        <div className="text-[#3a3a3a] text-lg font-medium leading-[30.60px]">
                            #41, 3rd Floor, Above Maruti Suzuki Arena, 15th Cross, Margosa Road, Malleshwaram, Bangalore - 560003
                        </div>
                        <div className="text-[#3a3a3a] text-lg font-medium leading-[30.60px]">
                            Landmark: Near Veena Stores
                        </div>
                        <div className="text-[#3a3a3a] text-lg font-medium leading-[30.60px]">
                            For queries, please call or Whatsapp us on<br />
                            <span className="text-[#f55c38] text-base font-extrabold font-['Amazon Ember'] leading-7">+916366969292</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" max-w-[90%] sm:w-[1216px] h-auto flex flex-col justify-center items-start gap-8 mx-auto relative mt-8">
                <div className="flex flex-col justify-start items-start gap-4">
                    <div className="text-left text-[#29458c] text-[24px] sm:text-[32px] font-extrabold leading-[36px] sm:leading-[48px]">
                        Planned for future sprints?
                    </div>
                    <div className="text-left text-[#3a3a3a] text-lg font-medium leading-[30.60px]">
                        Checkout the sprint details and book
                        <br className="block sm:hidden" />
                        one for your students today!
                    </div>
                </div>
                <div className="w-full sm:w-auto h-12 sm:h-12 bg-[#f55c38] rounded-[100px] flex items-center justify-center px-4 sm:px-8 py-2 mb-4 cursor-pointer"
                    onClick={handleViewSprintDetails}>                   
                    <div className="text-center text-white text-sm sm:text-base font-medium leading-[170%] font-['Amazon Ember']">
                        View Sprint Details
                    </div>
                </div>
            </div>
        </>
    );
};
export default Page;
