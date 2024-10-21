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
  // const events = useAllBookings();
  const { events } = useAllBookings();

  const whatsappLink = `https://wa.me/${6366969292}`;

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
    const isAvailableDate = events.some(
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


  const [copied, setCopied] = useState(false);

  const phoneNumber = " +91 63669-69292";

  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumber)
      .then(() => {
        setCopied(true); // Show "Copied!" message

        // Reset the message after 2 seconds
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="calendar-container">
      <div className="w-full md:pl-[20px] text-lg leading-[170%] font-extrabold font-webtypestyles-subtitle1 text-text-primary text-left mb-6 pl-2">
        Available Dates
      </div>
      <div className="flex justify-between items-center mb-4 px-2 md:px-[20px]">
        <Image
          src="/previous.svg"
          alt="Previous Month"
          width={30}
          height={30}
          onClick={handlePrevMonth}
          className="cursor-pointer"
        />
        <h1 className="text-lg leading-[170%] font-medium font-webtypestyles-body1 text-text-primary text-center">
          {currentMonthYear}
        </h1>
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
          // padding: 20px 0;
          border-radius: 15px;
          margin: 0 auto;
          max-width: 100%;
          overflow: hidden;
        }

        .fc {
          width: 100% !important;
          height: auto !important;
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
        md:pl-[20px] .fc-col-header {
          padding-bottom: 20px !important;
        }

        .fc .fc-daygrid-body {
          width: 100% !important;
        }

        .fc .fc-daygrid-day-frame {
          padding: 0 !important;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          // border: 2px solid red;
        }

        .fc-day-past .fc-daygrid-day-number,
        .fc-day-future .fc-daygrid-day-number {
          color: #ccc !important;
        }

        .fc-day-future.has-event .fc-daygrid-day-number {
          color: #000 !important;
        }

        .fc-day-today {
          background-color: transparent !important;
        }

        .fc-day-today .fc-daygrid-day-number {
          background-color: #bdbdbd;
          border-radius: 50%;
          width: 36px !important;
          height: 36px !important;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: auto;
        }

        .fc .fc-daygrid-day.selected-date .fc-daygrid-day-number {
          color: #f55c38 !important;
          background-color: #fdded7 !important;
          border-radius: 50%;
          width: 36px !important;
          height: 36px !important;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: auto;
          padding: 8px !important;
        }

        .fc-daygrid-day-number {
          padding: 5px;
          font-weight: bold;
          width: 36px !important;
          height: 36px !important;
          display: flex;
          justify-content: center;
          align-items: center;
          position: static !important;
          margin: auto;
          cursor: pointer;
        }

        .fc-event {
          display: none;
        }

        .fc-day-other .fc-daygrid-day-number {
          display: none;
        }

        .fc .fc-toolbar {
          align-items: center;
          margin-bottom: 1em;
        }

        .fc .fc-toolbar-title {
          font-size: 1.2em;
        }

        .fc .fc-button {
          padding: 0.3em 0.5em;
        }

        .fc .fc-toolbar.fc-header-toolbar {
          margin-bottom: -10px;
        }

        .fc .fc-scroller {
          overflow: hidden !important;
        }

        .fc .fc-daygrid-body table {
          border-collapse: collapse;
        }

        .fc .fc-daygrid-body tr:not(:first-child) td {
          margin-top: 10 !important;
        }

        .fc .fc-daygrid-body tr:last-child:not(:nth-child(6)) {
          display: none !important;
        }

        .fc .fc-scrollgrid-sync-table {
          height: auto !important;
        }

        .fc .fc-col-header {
          margin-bottom: 8px; /* Specific gap between weekday names and first row of dates */
        }

        .fc .fc-daygrid-body table {
          border-collapse: collapse;
        }

        .fc .fc-daygrid-body tr:not(:first-child) td {
          padding-top: 2px; /* Small gap between date rows */
        }

        .fc .fc-daygrid-day-frame {
          min-height: 60px; /* Reduce the height of each day cell */
        }

        .fc .fc-daygrid-day-top {
          flex-direction: row;
          justify-content: center;
        }

        .fc .fc-daygrid-day-number {
          float: none;
          margin: 2px;
        }

        /* Adjust font sizes for a more compact look */
        .fc .fc-col-header-cell-cushion {
          font-size: 1em;
        }

        .fc .fc-daygrid-day-number {
          font-size: 1em;
        }

        /* Remove any extra padding */
        .fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events {
          min-height: 0;
          padding: 0;
        }

        /* Ensure the calendar doesn't exceed its container */
        .calendar-container {
          max-width: 100%;
          overflow: hidden;
        }

        @media (max-width: 640px) {
          .fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events {
            min-height: 2em;
          }

          .fc .fc-toolbar {
            flex-direction: column;
            gap: 1em;
          }

          .fc .fc-toolbar-title {
            font-size: 1em;
          }

          .fc-col-header-cell {
            font-size: 0.8em;
          }

          .fc-daygrid-day-number {
            font-size: 0.9em;
          }
          /* Remove any extra padding */
          .fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events {
            min-height: 0;
            padding: 0;
          }
          /* Adjust font sizes for a more compact look */
          .fc .fc-col-header-cell-cushion {
            font-size: 1em;
          }
        }
      `}</style>

      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={false}
        dateClick={handleDateClick}
        events={events}
        height="auto"
        dayCellClassNames={(arg) => {
          const classes = [];
          if (
            events.some(
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

      {/* <div className="self-stretch flex flex-col items-start justify-start gap-4 px-2 md:pl-[20px]">
        <div className="w-full text-lg leading-[170%] font-extrabold font-webtypestyles-subtitle1 text-text-primary text-left">
          Have Questions?
        </div>
        <div className="relative leading-[170%]">
          <span className="font-medium">Call Us or Whatsapp on </span>
          <span className="font-extrabold text-incandescent-main">
            +916366969292
          </span>
        </div>
      </div> */}
      <div className="flex flex-col w-full gap-4">
        <h1 className="leading-[150%] text-subHeading1 md:text-heading6 font-['Amazon Ember'] text-midnight-blue-main font-extrabold">
          Have Questions?
        </h1>
        <p className="w-full relative text-bodyM md:text-body1 leading-[170%] font-['Amazon Ember'] text-darkslategray">
          <span>{`Call Us or Whatsapp on `}</span> <br/>
          {/* <a href={whatsappLink} target="_blank" className="text-tomato font-extrabold">+9163669-69292</a> */}
          <strong className="inline-flex items-center">
            <a href={whatsappLink} target="_blank" className="text-tomato font-extrabold">
              +91 63669-69292
            </a>
            <button
              className="hidden md:inline-flex px-4 py-2 ml-4 rounded-full border border-[#F55C38] justify-center items-center leading-[170%] flex gap-2"
              onClick={handleCopy}
            >
              {copied ? (
                <>
                  <img
                    src="/userDashboard/checkmark_icon.png"
                    alt="Check Icon"
                    className="h-[16px] w-[16px]"
                  />
                  <span className="text-[#F55C38] text-base md:text-body2 font-body2-regular">
                    Copied!
                  </span>
                </>
              ) : (
                <>
                  <img
                    src="/userDashboard/content_copy.svg"
                    alt="Copy Icon"
                    className="h-[16px] w-[16px]"
                  />
                  <span className="text-[#F55C38] text-base md:text-body2 font-body2-regular">
                    Copy
                  </span>
                </>
              )}
            </button>
          </strong>
        </p>
      </div>
    </div>
  );
};
export default FullCalendarComponent;