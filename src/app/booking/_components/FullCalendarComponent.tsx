import { useAllBookings } from "./allBookings";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

interface FullCalendarComponentProps {
  setSelectedDate: (date: Date) => void;
}

const FullCalendarComponent: React.FC<FullCalendarComponentProps> = ({
  setSelectedDate,
}) => {
  const calendarRef = useRef<any>(null);
  const [currentMonthYear, setCurrentMonthYear] = useState<string>("");
  const [selectedDateState, setSelectedDateState] = useState<Date | null>(null);
  const allEvents = useAllBookings();

  const getMonthYear = (date: Date) => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${month} ${year}`;
  };

  const updateMonthYear = () => {
    const calendarApi = calendarRef.current?.getApi();
    const currentDate = calendarApi?.getDate();
    if (currentDate) {
      setCurrentMonthYear(getMonthYear(currentDate));
    }
  };

  const handlePrevMonth = () => {
    const calendarApi = calendarRef.current?.getApi();
    if (calendarApi) {
      calendarApi.prev();
      updateMonthYear();
    }
  };

  const handleNextMonth = () => {
    const calendarApi = calendarRef.current?.getApi();
    if (calendarApi) {
      calendarApi.next();
      updateMonthYear();
    }
  };

  const handleDateClick = (arg: any) => {
    const isAvailableDate = allEvents.some(
      (event) =>
        arg.date.toDateString() ===
        new Date(event.start as unknown as string).toDateString()
    );

    if (isAvailableDate) {
      setSelectedDate(arg.date);
      setSelectedDateState(arg.date);
    }
  };

  useEffect(() => {
    updateMonthYear();
  }, []);

  return (
    <div className="calendar-container">
      <div className="w-full text-lg leading-[170%] font-extrabold font-webtypestyles-subtitle1 text-text-primary text-left">
        Available Dates
      </div>
      <div className="flex justify-between items-center mb-4">
        <Image
          src="/previous.svg"
          alt="Previous Month"
          width={30}
          height={30}
          onClick={handlePrevMonth}
          className="cursor-pointer"
        />
        <h1 className="text-lg leading-[170%] font-medium font-webtypestyles-body1 text-text-primary text-center">{currentMonthYear}</h1>
        <Image
          src="/next.svg"
          alt="Next Month"
          width={30}
          height={30}
          onClick={handleNextMonth}
          className="cursor-pointer"
        />
      </div>

      <style jsx global>{`
        .calendar-container {
          background-color: #fff;
          padding: 20px;
          border-radius: 15px;
          box-shadow: none;
        }
      
        .fc-theme-standard .fc-scrollgrid {
          border: none !important;
        }
      
        .fc-theme-standard td,
        .fc-theme-standard th {
          border: none !important;
          text-align: center;
        }
      
        .fc-col-header-cell {
          padding: 10px 0;
          font-weight: bold;
          color: #333;
        }
      
        /* Add padding below the weekdays row */
        .fc-col-header {
          padding-bottom: 10px; /* Adjust this value to your preference */
        }
      
        .fc-day-past .fc-daygrid-day-number,
        .fc-day-future .fc-daygrid-day-number {
          color: #ccc !important;
        }
      
        .fc-day-future.has-event .fc-daygrid-day-number {
          color: #000 !important;
        }
      
        .fc-day-today .fc-daygrid-day-number {
          color: #000 !important;
        }
      
        .selected-date .fc-daygrid-day-number {
          color: red !important; /* Set text color to red */
          background-color: #fdded7 !important; /* Background color */
          border-radius: 50%;
          padding: 10px; /* Add padding to make the background larger */
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: auto;
        }
      
        .fc-daygrid-day-number {
          padding: 5px;
          font-weight: bold;
          margin: auto;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      
        .fc-event {
          display: none;
        }
      
        /* Remove extra dates (not part of the current month) */
        .fc-day-other .fc-daygrid-day-number {
          display: none;
        }
      `}</style>
      
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={false}
        dateClick={handleDateClick}
        events={allEvents}
        dayCellClassNames={(arg) => {
          const classes = [];
          if (
            allEvents.some(
              (event) =>
                arg.date.toDateString() ===
                new Date(event.start as unknown as string).toDateString()
            )
          ) {
            classes.push("has-event");
          }
          if (
            selectedDateState &&
            arg.date.toDateString() === selectedDateState.toDateString()
          ) {
            classes.push("selected-date");
          }
          return classes;
        }}
      />

      <div className="self-stretch flex flex-col items-start justify-start gap-4 mt-4">
        <div className="self-stretch relative leading-[170%] font-extrabold">
          Have Questions?
        </div>
        <div className="relative leading-[170%]">
          <span className="font-medium">Call Us or Whatsapp on </span>
          <span className="font-extrabold text-incandescent-main">
            +916366969292
          </span>
        </div>
      </div>
    </div>
  );
};

export default FullCalendarComponent;



