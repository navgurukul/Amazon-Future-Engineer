"use client"
import React, { useState } from "react";
import BookingPopup from "./BookingPopup";
import FullCalendarComponent from "./FullCalendarComponent";
import TimeSlots from "./TimeSlots";
// import ErrorBookingPopup from "./ErrorBookingPopup";

interface CalendarPopupProps {
  handleCalendar: () => void;
  bookingDetails: BookingDetails;
  calendarData: (data: { slot_id: any; booking_for: any; start_time: any; end_time: any }) => void; 
}

interface BookingDetails {
  name: string;
  email: string;
  phoneNumber: string;
  dateofRequest: string;
  programName: string;
  schoolName: string;
  udiseCode: string;
  city: string;
  pincode: string;
  grade: string;
  numberOfStudents: string;
  slot: string;
}

const Calendar:  React.FC <CalendarPopupProps>= ({handleCalendar,bookingDetails, calendarData }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [bookingStatus, setBookingStatus] = useState<boolean>(false);
  const [bookingData, setBookingData] = useState<any>(null);

  // const [showErrorPopup, setShowErrorPopup] = useState(false);
  // const [errorMessage, setErrorMessage] = useState('');

  const handleBookingPopUp = (data: any) => {
    setBookingStatus(true);
    setBookingData(data);
  };

  // const handleBookingPopUp = (data: any) => {
  //   if (data.success) {
  //     setBookingStatus(true);
  //     setBookingData(data);
  //   } else {
  //     // Handle booking error
  //     setErrorMessage(data.errorMessage || "An error occurred during booking.");
  //     setShowErrorPopup(true);
  //   }
  // };

  // const closeErrorPopup = () => {
  //   setShowErrorPopup(false);
  //   setErrorMessage('');
  // };

  return (
    <div className="w-full">
      {bookingStatus ? (
        <BookingPopup isOpen={true} bookingData={bookingData} />
      ) : (
        <div>
          <div className="pt-12 px-4 md:px-8 pb-[48px]">
            <h5 className="text-13xl leading-[150%] font-extrabold font-webtypestyles-h5 text-midnight-blue-main pb-[32px] md:text-center">
              Book a Nano Sprint
            </h5>
            <div className="flex flex-col lg:flex-row w-full justify-center">
              <div className="w-full lg:w-[40%]">
                <FullCalendarComponent setSelectedDate={setSelectedDate} />
              </div>
              <div className="block lg:hidden py-6">
                <hr className="border-gray-300 my-4" />
              </div>
              <div className="hidden lg:block w-[2px] bg-gray-300 h-auto mx-[32px]"></div>
              <div className="w-full lg:w-[450px]">
                <TimeSlots
                  selectedDate={selectedDate}
                  handleBookingPopUp={handleBookingPopUp}
                  handleCalendar ={handleCalendar }
                  bookingDetails={bookingDetails}
                  calendarData={ calendarData}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* {showErrorPopup && (
        <ErrorBookingPopup closePopup={closeErrorPopup} errorMessage={errorMessage} />
      )} */}
    </div>
  );
};

export default Calendar;

