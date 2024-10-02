"use client";

import BookingPopup from "./BookingPopup";
import FullCalendarComponent from "./FullCalendarComponent";
import TimeSlots from "./TimeSlots";
import DialogHeader from "@/components/DialogHeader";
import React, { useState } from "react";

const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [bookingStatus, setBookingStatus] = useState<boolean>(false);
  const [name, setName] = useState<string>("");

  const handleBookingPopUp = ({
    name,
    status,
  }: {
    name: string;
    status: boolean;
  }) => {
    setBookingStatus(status);
    setName(name);
  };

  return (
    <div className="w-full">
      {bookingStatus ? (
        <BookingPopup isOpen={true} name={name} />
      ) : (
        <div>
          <DialogHeader />
          
          <div className="pt-[120px] px-4 md:px-8 pb-[48px]">
            <h5 className="text-13xl leading-[150%] font-extrabold font-webtypestyles-h5 text-midnight-blue-main pb-6 md:text-center">
              Book a Nano Sprint
            </h5>
            
            <div className="flex flex-col lg:flex-row w-full justify-center">
              <div className="w-full lg:w-[40%]">
                <FullCalendarComponent setSelectedDate={setSelectedDate} />
              </div>
              
              {/* divider for small screen */}
              <div className="block lg:hidden py-6">
                <hr className="border-gray-300 my-4" />
              </div>
              
              {/* divider for large screen */}
              <div className="hidden lg:block w-[2px] bg-gray-300 h-auto mx-4"></div>
              
              <div className="w-full lg:w-[400px]">
                <TimeSlots
                  selectedDate={selectedDate}
                  handleBookingPopUp={handleBookingPopUp}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
