"use client";

import settingsIcon from "../../../assets/settings.svg";
import BookingPopup from "./BookingPopup";
import FullCalendarComponent from "./FullCalendarComponent";
import TimeSlotCalendar from "./TimeSlotCalendar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";


const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [bookingStatus, setBookingStatus] = useState<boolean>(false);
  const [bookingData, setBookingData] = useState<any>(null);
  const [showTimeSlotCalendar, setShowTimeSlotCalendar] = useState<boolean>(false);


  const handleBookingPopUp = (data: any) => {
    setBookingStatus(true);
    setBookingData(data);
  };

  const handleManageSlotsClick = () => {
    setShowTimeSlotCalendar(true); // Show TimeSlotCalendar when clicked
  };


  return (
    <div className="w-full">
      {bookingStatus ? (
        <BookingPopup isOpen={true} bookingData={bookingData} />
      ) : (
        <div>
          {/* <div className="pt-[120px] px-4 md:px-8 pb-[48px]"> */}
          <div className="mt-8 px-4 md:px-8 pb-[48px]">
<div className="w-full relative h-14 flex flex-row items-center justify-between text-center text-lg text-white font-['Amazon Ember'] mb-8">
  <Button className="bg-[#f55c38] rounded-full h-14 flex items-center justify-center px-8 py-2 box-border">
    <span className="relative font-medium leading-[170%]">Create Booking</span>
  </Button>
  <Button className="bg-[#f091b2] rounded-full h-14 flex items-center justify-center px-8 py-2 box-border gap-2">
    <Image width={24} height={24} className="w-6 h-6 relative flex-shrink-0" alt="settings" src={settingsIcon} />
    <span onClick={handleManageSlotsClick} className="relative font-medium leading-[170%]">Manage Slots</span>
  </Button>
</div>
{showTimeSlotCalendar ? ( // Conditionally render TimeSlotCalendar based on state
              <TimeSlotCalendar />
            ) : (
            <div className="flex flex-col lg:flex-row w-full justify-center">
              <div className="w-full lg:w-[100%]">
                {/* <FullCalendarComponent setSelectedDate={setSelectedDate} /> */}
                <TimeSlotCalendar/>
              </div>
              <div className="block lg:hidden py-6">
                <hr className="border-gray-300 my-4" />
              </div>
            </div>
          )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;