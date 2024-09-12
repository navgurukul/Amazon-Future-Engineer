
import React from "react";

const UserDashboard: React.FC = () => {
    return (
        <>
            <div className="absolute top-[184px] left-[256px] text-left text-[#29458C] w-[200px] h-[48px] font-['Amazon Ember Display'] text-[32px] font-extrabold leading-[48px]">
                 My Bookings
            </div>

            <div className=" p-4 h-[426px] w-[480px] mt-[296px] mx-auto relative">

                <div className="bg-[#D9D9D9] h-[260px] mb-4 flex items-center justify-center rounded-[8px]"></div>

                    <p className="mb-4 text-center h-[62px] font-['Amazon Ember'] text-[18px] font-bold leading-[30.6px] text-[#3A3A3A]">
                        Checkout the sprint details and book one for your students today
                    </p>

                    <button className="bg-[#F55C38] text-white h-[56px] rounded-[100px] px-[32px] py-[8px] hover:bg-[#F55C38] mx-auto block">
                        View Sprints
                    </button>

            </div> 

            {/* <div className="text-[#29458c] text-[32px] font-extrabold font-['Amazon Ember Display'] leading-[48px]">My Bookings</div>
            <div className="h-[426px] flex-col justify-start items-center gap-8 inline-flex">
                <div className="self-stretch h-[338px] flex-col justify-start items-center gap-4 flex">
                    <div className="w-[480px] h-[260px] bg-[#d9d9d9] rounded-lg"></div>
                    <div className="self-stretch h-[62px] flex-col justify-start items-start gap-4 flex">
                        <div className="self-stretch text-center text-[#3a3a3a] text-lg font-medium font-['Amazon Ember'] leading-[30.60px]">Checkout the the sprint details and book one for your students today</div>
                    </div>
                </div>
                <div className="h-14 px-8 py-2 bg-[#f55c38] rounded-[100px] justify-center items-center gap-2 inline-flex">
                    <div className="text-center text-white text-lg font-medium font-['Amazon Ember'] leading-[30.60px]">View Sprints</div>
                </div>
            </div> */}
        </>
    );
};

export default UserDashboard;
