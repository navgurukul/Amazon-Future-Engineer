import React from "react";
import type { NextPage } from 'next';

const Page: NextPage = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-white flex flex-col justify-center items-center gap-16">
        <div className="w-full h-[104px] pl-12 pr-[816px] pt-[37px] pb-9 bg-white shadow inline-flex justify-start items-start gap-[698px]">
          <div className="self-stretch flex items-center gap-2">
            <div className="w-6 h-6 relative"></div>
            <div className="text-center text-[#3a3a3a] text-lg font-medium font-['Amazon Ember'] leading-[30.60px]">Back</div>
          </div>
          <div className="text-center text-[#3a3a3a] text-lg font-bold font-['Amazon Ember'] leading-[30.60px]">Mini Sprint</div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-[592px] rounded-lg flex-col justify-start items-center gap-8 inline-flex p-6">
            <div className="self-stretch  flex-col justify-start items-start gap-4 flex">
              <div className="text-[#3a3a3a] text-[24px] font-extrabold leading-[36px] font-['Amazon Ember Display']">
                Join Mini Sprint Waiting List
              </div>

              <div className="text-[#3a3a3a] text-lg font-bold leading-[30.60px]">Innovation Hub - Bengaluru</div>
              <div className="self-stretch text-[#6d6d6d] text-lg font-medium leading-[30.60px]">
                Please share the following details below and we will connect with you as soon as the Mini Sprint program is launched at the lab.
              </div>
            </div>
            <div className="self-stretch h-[88px] flex-col justify-start items-start gap-2 flex">
              <div>
                <span className="text-[#3a3a3a] text-sm font-medium font-['Amazon Ember'] leading-normal">Name</span>
                <span className="text-[#f55c38] text-sm font-medium font-['Amazon Ember'] leading-normal">*</span>
              </div>
              <div className="self-stretch h-14 px-4 py-2 rounded-[100px] border border-[#3a3a3a] justify-start items-center gap-2 inline-flex">
                <div className="text-[#bdbdbd] text-lg font-medium font-['Amazon Ember'] leading-[30.60px]">Eg. Prakash</div>
              </div>
            </div>
            <div className="self-stretch h-[88px] flex-col justify-start items-start gap-2 flex">
              <div>
                <span className="text-[#2e2e2e] text-sm font-medium font-['Amazon Ember'] leading-normal">Phone Number</span>
                <span className="text-[#f55c38] text-sm font-medium font-['Amazon Ember'] leading-normal">*</span>
              </div>
              <div className="self-stretch h-14 px-4 py-2 rounded-[100px] border border-[#2e2e2e] justify-start items-center gap-2 inline-flex">
                <div className="text-[#3a3a3a] text-lg font-medium font-['Amazon Ember'] leading-[30.60px]">+918923747563</div>
              </div>
            </div>
            <div className="self-stretch h-[88px] flex-col justify-start items-start gap-2 flex">
              <div>
                <span className="text-[#3a3a3a] text-sm font-medium font-['Amazon Ember'] leading-normal">City</span>
                <span className="text-[#f55c38] text-sm font-medium font-['Amazon Ember'] leading-normal">*</span>
              </div>
              <div className="self-stretch h-14 px-4 py-2 bg-[#dedede] rounded-[100px] border border-[#3a3a3a] justify-start items-center gap-2 inline-flex">
                <div className="text-[#3a3a3a] text-lg font-medium font-['Amazon Ember'] leading-[30.60px]">Bengaluru</div>
              </div>
            </div>
            <div className="self-stretch h-[88px] flex-col justify-start items-start gap-2 flex">
              <div className="text-[#3a3a3a] text-sm font-medium font-['Amazon Ember'] leading-normal">School Name</div>
              <div className="self-stretch h-14 px-4 py-2 rounded-[100px] border border-[#3a3a3a] justify-start items-center gap-2 inline-flex">
                <div className="text-[#bdbdbd] text-lg font-medium font-['Amazon Ember'] leading-[30.60px]">Eg. Shiksha Bharti</div>
              </div>
            </div>
            <div className="self-stretch h-[88px] flex-col justify-start items-start gap-2 flex">
              <div className="text-[#3a3a3a] text-sm font-medium font-['Amazon Ember'] leading-normal">Email</div>
              <div className="self-stretch h-14 px-4 py-2 rounded-[100px] border border-[#3a3a3a] justify-start items-center gap-2 inline-flex">
                <div className="text-[#bdbdbd] text-lg font-medium font-['Amazon Ember'] leading-[30.60px]">Eg. prakash@gmail.com</div>
              </div>
            </div>
            <div className="self-stretch h-[88px] flex-col justify-start items-start gap-2 flex">
              <div className="text-[#3a3a3a] text-sm font-medium font-['Amazon Ember'] leading-normal">Pincode</div>
              <div className="self-stretch h-14 px-4 py-2 rounded-[100px] border border-[#3a3a3a] justify-start items-center gap-2 inline-flex">
                <div className="text-[#bdbdbd] text-lg font-medium font-['Amazon Ember'] leading-[30.60px]">Eg. xxxxxx</div>
              </div>
            </div>
            <div className="h-14 px-8 py-2 bg-[#f55c38] rounded-[100px] justify-center items-center gap-2 inline-flex ">
              <div className="text-center text-white text-lg font-medium font-['Amazon Ember'] leading-[30.60px]">Join Waiting List</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;


