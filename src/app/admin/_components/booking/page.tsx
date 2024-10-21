import Calendar from "./_components/Calendar";
import React from "react";

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

const Home: React.FC<CalendarPopupProps> = ({ handleCalendar, bookingDetails,calendarData }) => {
  return (
    <div className="min-h-screen">
      <Calendar handleCalendar={handleCalendar} bookingDetails={bookingDetails} calendarData={calendarData}/>
    </div>
  );
};

export default Home;

