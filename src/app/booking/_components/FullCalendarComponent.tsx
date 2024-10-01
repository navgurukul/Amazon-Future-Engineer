import React, { useRef, useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Image from "next/image";
import { useAllBookings } from "./allBookings";
import styles from "./FullCalendar.module.css";

interface FullCalendarComponentProps {
  setSelectedDate: (date: Date) => void;
}

const FullCalendarComponent: React.FC<FullCalendarComponentProps> = ({ setSelectedDate }) => {
  const calendarRef = useRef<any>(null);
  const [currentMonthYear, setCurrentMonthYear] = useState<string>("");
  const allEvents = useAllBookings();

  const getMonthYear = (date: Date) => {
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
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
    setSelectedDate(arg.date);
  };

  useEffect(() => {
    updateMonthYear();
  }, [updateMonthYear]);

  return (
    <div className={styles.calendarContainer}>
      <div className={`${styles.calendarHeader} flex items-center justify-between mb-4`}>
        <Image
          src="/previous.svg"
          alt="Previous Month"
          width={30}
          height={30}
          className={styles.navButton}
          onClick={handlePrevMonth}
        />
        <h1 className={styles.monthYearTitle}>{currentMonthYear}</h1>
        <Image
          src="/next.svg"
          alt="Next Month"
          width={30}
          height={30}
          className={styles.navButton}
          onClick={handleNextMonth}
        />
      </div>

      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin]}
        headerToolbar={false}
        initialView="dayGridMonth"
        editable={false}
        selectable={true}
        dateClick={handleDateClick}
        dayMaxEvents={true}
        showNonCurrentDates={false}
        fixedWeekCount={false}
      />

      <div className="self-stretch flex flex-col items-start justify-start gap-4 mt-4">
        <div className="self-stretch relative leading-[170%] font-extrabold">Have Questions?</div>
        <div className="relative leading-[170%]">
          <span className="font-medium">Call Us or Whatsapp on </span>
          <span className="font-extrabold text-incandescent-main">+916366969292</span>
        </div>
      </div>
    </div>
  );
};

export default FullCalendarComponent;



