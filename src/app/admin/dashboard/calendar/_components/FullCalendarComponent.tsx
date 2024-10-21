import { useAllBookings } from "./allBookings";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import EventPopup from "./Event";

interface FullCalendarComponentProps {
  setSelectedDate: (date: Date) => void;
}

const FullCalendarComponent: React.FC<FullCalendarComponentProps> = ({
  setSelectedDate,
}) => {
  const calendarRef = useRef<any>(null);
  const [currentMonthYear, setCurrentMonthYear] = useState<string>("");
  const [selectedDateState, setSelectedDateState] = useState<Date | null>(null);
  const { events } = useAllBookings();
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);

  const whatsappLink = `https://wa.me/${6366969292}`;

  const getMonthYear = (date: Date) => {
    const monthNames = [
      "January", "February", "March", "April", "May",
      "June", "July", "August", "September",
      "October", "November", "December"
    ];
    return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
  };

  const updateMonthYear = () => {
    const calendarApi = calendarRef.current?.getApi();
    const currentDate = calendarApi?.getDate();
    if (currentDate) setCurrentMonthYear(getMonthYear(currentDate));
  };

  const handlePrevMonth = () => {
    calendarRef.current?.getApi()?.prev();
    updateMonthYear();
  };

  const handleNextMonth = () => {
    calendarRef.current?.getApi()?.next();
    updateMonthYear();
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

  const handleEventClick = (arg: any) => {
    setSelectedEventId(Number(arg.event.id)); // Open popup with event ID
  };

  const closePopup = () => {
    setSelectedEventId(null); // Close the popup
  };
  useEffect(() => {
    updateMonthYear();
  }, []);

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <Image
          src="/previous.svg"
          alt="Previous"
          width={30}
          height={30}
          onClick={handlePrevMonth}
          className="nav-icon"
        />
        <h1 className="calendar-title">{currentMonthYear}</h1>
        <Image
          src="/next.svg"
          alt="Next"
          width={30}
          height={30}
          onClick={handleNextMonth}
          className="nav-icon"
        />
      </div>

      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={false}
        dateClick={handleDateClick}
        events={events}
        height="auto"
        eventClick={handleEventClick}
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

      <style jsx global>{`
        .calendar-container {
          background-color: #fff;
          border-radius: 12px;
          max-width: 100%;
        }

        .calendar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .calendar-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1a73e8;
        }

        .nav-icon {
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        .nav-icon:hover {
          transform: scale(1.1);
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
          display: flex;
          padding: 4px 8px;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;
          align-self: stretch;
          border-radius: 8px;
          background: var(--Incandescent-Main, #F55C38) !important;
          color: #fff !important; /* Text color */
          border: none !important; /* Remove borders if any */
          margin-bottom: 8px;
        }

        .fc-event-low-capacity {
          background: var(--Incandescent-Main, #00A36C) !important;
          }

        .fc-daygrid-event-dot, .fc-event-time {
          display: none;
          }

          .fc-event, .fc-event-start, .fc-event-end, .fc-event-today, .fc-daygrid-event, .fc-daygrid-dot-event {
          font-size: 14px;
          line-height: 1.7;
          color: #fff;
          font-family: 'Amazon Ember';
          }

          .fc-daygrid-dot-event .fc-event-title {
          font-weight: 500;
          }

          .fc-daygrid-day-frame, .fc-scrollgrid-sync-inner {
          padding: 9px;
          }

        @media (max-width: 640px) {
          .calendar-title {
            font-size: 1.2rem;
          }
        }
      `}</style>
      {selectedEventId && (
        <EventPopup eventId={selectedEventId} onClose={closePopup} />
      )}
    </div>
  );
};

export default FullCalendarComponent;
