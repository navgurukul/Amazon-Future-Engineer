import * as React from "react";
import { Button } from "@/components/ui/button";

const Page = () => {
    return (
        <>
            <div className="mt-[184px] max-w-[90%] sm:max-w-[1216px] h-auto flex flex-col justify-start items-center gap-8 mb-8 mx-auto relative">
                <div className="text-[#29458c] text-[24px] sm:text-[32px] font-extrabold font-['Amazon Ember Display'] leading-[36px] sm:leading-[48px] self-stretch">
                    My Bookings
                </div>
                {[...Array(3)].map((_, index) => (
                    <div key={index} className="bg-white p-4 rounded-md flex flex-col sm:flex-row justify-between items-center shadow-md h-auto sm:h-[132px] border border-gray-200 w-full">
                        <div className="space-y-2 text-center sm:text-left">
                            <div className="text-lg font-semibold">Nano Sprint</div>
                            <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-2 sm:space-y-0">
                                <div className="flex items-center space-x-2">
                                    <img className="w-5 h-5" alt="calendar icon" src="reshot-icon-calendar-U75ASPNFXK.svg" />
                                    <div className="text-sm">24 Sept 2024</div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <img className="w-5 h-5" alt="time icon" src="reshot-icon-time-SRKEMN64PU.svg" />
                                    <div className="text-sm">2 PM to 5 PM</div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <img className="w-5 h-5" alt="student icon" src="reshot-icon-student-boy-L9ESXQZ3WU.svg" />
                                    <div className="text-sm">30 Students</div>
                                </div>
                            </div>
                        </div>
                        <Button variant="reschedule" className="mt-4 sm:mt-0">
                            Reschedule
                        </Button>
                    </div>
                ))}
            </div>

            <div className="max-w-[90%] sm:w-[1216px] h-[0px] border border-[#dedede] mx-auto relative gap-16"></div>

            <div className="w-full max-w-[90%] sm:max-w-[1216px] h-auto mx-auto relative flex flex-col items-center gap-8 p-4">
                <div className="text-[#29458c] text-[24px] sm:text-[32px] font-extrabold font-['Amazon Ember Display'] leading-[36px] sm:leading-[48px] text-center self-start">
                    How to Reach the Innovation Hub
                </div>
                <div className="flex flex-col sm:flex-row items-start gap-4 w-full">
                    <img className="w-full sm:w-[696px] h-auto sm:h-[440px] rounded-lg" alt="innovation hub map" src="Rectangle 14.png" />
                    <div className="w-full sm:w-[487px] flex flex-col gap-4">
                        <div className="text-[#3a3a3a] text-2xl font-extrabold font-['Amazon Ember Display'] leading-9">Innovation Hub Center</div>
                        <div className="text-[#3a3a3a] text-lg font-medium font-['Amazon Ember'] leading-[30.60px]">16th Avenue, Roadside steps, Bengaluru - 208011</div>
                        <div className="text-[#3a3a3a] text-lg font-medium font-['Amazon Ember'] leading-[30.60px]">Mon - Fri, 10 AM to 7 PM</div>
                        <div>
                            <span>For queries, please contact us at </span>
                            <a href="mailto:afeinnovation@ihub.com" className="text-[#f55c38] font-semibold underline">
                                afeinnovation@ihub.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-[90%] sm:w-[1216px] h-auto flex flex-col justify-center items-start gap-8 mx-auto relative mt-8">
                <div className="flex flex-col justify-start items-start gap-4">
                    <div className="text-left text-[#29458c] text-[24px] sm:text-[32px] font-extrabold font-['Amazon Ember Display'] leading-[36px] sm:leading-[48px]">
                        Planned for future sprints?
                    </div>
                    <div className="text-left text-[#3a3a3a] text-lg font-medium font-['Amazon Ember'] leading-[30.60px]">
                        Checkout the sprint details and book one for your students today
                    </div>
                </div>
                <Button variant="details">
                    <span className="text-center text-white text-lg font-medium font-['Amazon Ember'] leading-[30.60px]">
                        View Sprint Details
                    </span>
                </Button>
            </div>
        </>
    );
};

export default Page;
