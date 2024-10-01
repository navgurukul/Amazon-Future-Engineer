"use client";
import DialogHeader from "@/components/DialogHeader";
import FullCalendarComponent from "./FullCalendarComponent";
import TimeSlots from "./TimeSlots";
import BookingPopup from  "./BookingPopup";
import React, { useState } from "react";

const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [bookingStatus, setBookingStatus] = useState<boolean>(false);
  const [name, setName] = useState<string>("");

  const handleBookingPopUp = ({ name, status }: { name: any, status: any }) => {
    setBookingStatus(status);
    setName(name);
  };

  return (
    <div>
      {bookingStatus ? (
        <BookingPopup isOpen={true} name={name} />
      ) : (
        <div>
          <DialogHeader />
          {/* Adjust padding-top to account for the fixed header */}
          <div className="pt-[120px]">
            <h5 className="text-13xl leading-[150%] font-extrabold font-webtypestyles-h5 text-midnight-blue-main pb-5 text-center">
              Book a Nano Sprint
            </h5>
            <div>
            <div className="w-full pl-8 text-lg leading-[170%] font-extrabold font-webtypestyles-subtitle1 text-text-primary text-left ">Available Dates</div>
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
