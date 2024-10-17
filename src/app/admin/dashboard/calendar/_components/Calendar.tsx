"use client"
import React, { useState } from "react";
import BookingPopup from "./BookingPopup";
import FullCalendarComponent from "./FullCalendarComponent";
import TimeSlotCalendar from "./TimeSlotCalendar";


const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [bookingStatus, setBookingStatus] = useState<boolean>(false);
  const [bookingData, setBookingData] = useState<any>(null);


  const handleBookingPopUp = (data: any) => {
    setBookingStatus(true);
    setBookingData(data);
  };


  return (
    <div className="w-full">
      {bookingStatus ? (
        <BookingPopup isOpen={true} bookingData={bookingData} />
      ) : (
        <div>
          <div className="pt-[120px] px-4 md:px-8 pb-[48px]">
            <div className="flex flex-col lg:flex-row w-full justify-center">
              <div className="w-full lg:w-[100%]">
                {/* <FullCalendarComponent setSelectedDate={setSelectedDate} /> */}
                <TimeSlotCalendar/>
              </div>
              <div className="block lg:hidden py-6">
                <hr className="border-gray-300 my-4" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;

