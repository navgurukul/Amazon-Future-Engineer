import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { useAllBookings } from "./allBookings";
import EditDatePopup from "./EditDatePopup";

const TimeSlotCalendar: React.FC = () => {
    const calendarRef = useRef<any>(null);
    const [currentMonthYear, setCurrentMonthYear] = useState<string>("");
    const { events, error, closePopup } = useAllBookings();
    const [showPopup, setShowPopup] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [popupPosition, setPopupPosition] = useState<{ top: number; left: number } | null>(null);
    const [selectedDayName, setSelectedDayName] = useState<string>("");

    const getMonthYear = (date: Date) => {
        const monthNames = [
            "January", "February", "March", "April", "May",
            "June", "July", "August", "September",
            "October", "November", "December",
        ];
        return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
    };

    const updateMonthYear = () => {
        const calendarApi = calendarRef.current?.getApi();
        const currentDate = calendarApi?.getDate();
        if (currentDate) {
            setCurrentMonthYear(getMonthYear(currentDate));
        }
    };

    const handlePrevMonth = () => {
        calendarRef.current?.getApi()?.prev();
        updateMonthYear();
    };

    const handleNextMonth = () => {
        calendarRef.current?.getApi()?.next();
        updateMonthYear();
    };

    useEffect(() => {
        updateMonthYear();
    }, []);


    // Click handler for day and event
    const handleCalendarClick = (info: any) => {
        let date: Date | null = null;

        // Check if the clicked element is an event or a date
        if (info.date) {
            date = info.date; // This will work for date clicks
        } else if (info.event) {
            date = info.event.start; // Use event start date for event clicks
        }

        // Ensure date is a valid Date object
        if (!(date instanceof Date)) {
            console.error("Invalid date object:", date);
            return; // Exit if the date is invalid
        }

        const { el } = info; // Get the clicked element

        // Get the position of the clicked date element
        const { top, left } = el.getBoundingClientRect();

        // Set the popup position right above the clicked date tile
        setPopupPosition({
            top: top - 10, // Adjust Y position slightly above the tile
            left: left + (el.offsetWidth / 2) - 50, // Center the popup above the tile
        });

        setSelectedDate(date); // Set the date based on click
        setSelectedDayName(date.toLocaleDateString('en-US', { weekday: 'long' })); // Get the day name
        setShowPopup(true); // Show the popup
    };


    const handleEditThisDate = () => {
        console.log("Editing this date:", selectedDate);
        setShowPopup(false);
    };

    const handleEditAllDays = () => {
        console.log("Editing all " + selectedDayName); // Change from "Thursdays" to the selected day
        setShowPopup(false);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

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

            <div className="calendar-container" style={{ position: "relative" }}>
                <FullCalendar
                    ref={calendarRef}
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    headerToolbar={false}
                    height="auto"
                    events={events}
                    eventClick={handleCalendarClick}
                    dateClick={handleCalendarClick}
                    eventContent={(eventInfo) => {
                        const { start, end } = eventInfo.event;

                        if (start && end) {
                            const formatTime = (date: Date) =>
                                date.toLocaleTimeString("en-US", {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                    hour12: true,
                                });

                            return (
                                <div className="event-content">
                                    {`${formatTime(start)} - ${formatTime(end)}`}
                                </div>
                            );
                        }

                        return null;
                    }}
                />
                {showPopup && popupPosition && (
                    <EditDatePopup
                        selectedDayName={selectedDayName} // Pass the day name to the popup
                        onEditThisDate={handleEditThisDate}
                        onEditAllThursdays={handleEditAllDays}
                        onClose={handleClosePopup}
                        style={{
                            position: 'absolute',
                            top: `${popupPosition.top}px`,
                            left: `${popupPosition.left}px`,
                            zIndex: 1000 // Ensure it appears above other elements
                        }}
                    />
                )}
            </div>

            <style jsx global>{`
                .calendar-container {
                    background-color: #fff;
                    border-radius: 12px;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                    padding: 20px;
                    max-width: 100%;
                    position: relative;
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

                .event-content {
                    text-align: center;
                    font-size: 0.85rem;
                    line-height: 1.2;
                    color: #333;
                }
            `}</style>
        </div>
    );
};

export default TimeSlotCalendar;
