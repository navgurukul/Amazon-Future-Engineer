"use client";

import FullCalendarComponent from "./FullCalendarComponent";
import TimeSlots from "./TimeSlots";
import CalendarPopup from "@/app/sprintPages/nanopage/_component/CalendarPopup";
import React, { useState } from "react";

const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [bookingStatus, setBookingStatus] = useState<boolean>(false);
  const [name, setName] = useState<string>("");

  const handleBookingPopUp = ({ name, status }) => {
    setBookingStatus(status);
    setName(name);
  };

  return (
    <>
      <div className="w-[301px] text-center relative text-13xl leading-[150%] font-extrabold font-webtypestyles-h5 text-midnight-blue-main text-left inline-block">Book a Nano Sprint</div>
      {!bookingStatus ? (
        <CalendarPopup isOpen={true} name={"Tamanna"} />
      ) : (
        <div className="flex w-full h-screen">
          <div className="w-1/2 p-4">
            <FullCalendarComponent setSelectedDate={setSelectedDate} />
          </div>
          <div className="border-l border-gray-300 h-full" />
          <div className="w-1/2 p-4">
            <TimeSlots
              selectedDate={selectedDate}
              handleBookingPopUp={handleBookingPopUp}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Calendar;
