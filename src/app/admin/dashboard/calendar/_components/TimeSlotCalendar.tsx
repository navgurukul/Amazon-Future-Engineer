import React, { useRef, useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Image from "next/image";
import { useAllBookings } from "./allBookings";
import EditDatePopup from "./EditDatePopup";
import EditTimeSlotsPopup from "./EditTimeSlotsPopup";

interface EventSlot {
    id: number;
    start: string;
    end: string;
    program_id: number;
    venue_id: number;
    date: string;
    available_capacity: number;
    status: string;
    booking_id: number;
}

const TimeSlotCalendar: React.FC = () => {
    const calendarRef = useRef<any>(null);
    const [currentMonthYear, setCurrentMonthYear] = useState<string>("");
    const { events } = useAllBookings();
    const [showPopup, setShowPopup] = useState(false);
    const [showTimeSlotsPopup, setShowTimeSlotsPopup] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [popupPosition, setPopupPosition] = useState<{ top: number; left: number } | null>(null);
    const [timeSlotsPopupPosition, setTimeSlotsPopupPosition] = useState<{ top: number; left: number } | null>(null);
    const [selectedDayName, setSelectedDayName] = useState<string>("");
    const [selectedSlots, setSelectedSlots] = useState<EventSlot[]>([]);

    const getMonthYear = (date: Date) => {
        const monthNames = [
            "January", "February", "March", "April", "May", "June", 
            "July", "August", "September", "October", "November", "December"
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

    const handleCalendarClick = (info: any) => {
        let date: Date | null = null;

        if (info.date) {
            date = info.date;
        } else if (info.event) {
            date = info.event.start;
        }

        if (!(date instanceof Date)) {
            return;
        }

        const el = info.el || info.jsEvent?.target?.closest('.fc-daygrid-day, .fc-event');
        if (!el) {
            setPopupPosition(null);
            return;
        }

        const { top, left } = el.getBoundingClientRect();
        setPopupPosition({ top: top - 10, left: left + (el.offsetWidth / 2) - 50 });

        setSelectedDate(date);
        setSelectedDayName(date.toLocaleDateString('en-US', { weekday: 'long' }));

        const filteredEvents = events.filter((event) => {
            const eventStart = new Date(event.start);
            return eventStart.toDateString() === date.toDateString();
        });

        const slotsForDate: EventSlot[] = filteredEvents.map((event) => {
            const [programId, venueId] = event.title.split(' - Venue ');
            return {
                id: Number(event.id),
                start: new Date(event.start).toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit', hour12: false }),
                end: new Date(event.end).toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit', hour12: false }),
                program_id: parseInt(programId.replace('Program ', '')),
                venue_id: parseInt(venueId),
                date: date.toISOString().split('T')[0],
                available_capacity: event.extendedProps.availableCapacity,
                status: event.extendedProps.status,
                booking_id: event.extendedProps.bookingId,
            };
        });

        setSelectedSlots(slotsForDate);

        setTimeSlotsPopupPosition({ top: 50, left: 0 });
        setShowPopup(true);
    };

    const handleEditThisDate = () => {
        setShowPopup(false);
        setShowTimeSlotsPopup(true);
    };

    const handleEditAllDays = () => {
        setShowPopup(false);
        // Implement logic for editing all days of the same name
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        setShowTimeSlotsPopup(false);
    };

    const handleUpdateSlots = (updatedSlots: EventSlot[]) => {
        console.log("Updated slots:", updatedSlots);
        // Here you can update your events state or trigger a refetch of events
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
                        selectedDayName={selectedDayName}
                        onEditThisDate={handleEditThisDate}
                        onEditAllThursdays={handleEditAllDays}
                        onClose={handleClosePopup}
                        style={{
                            position: 'absolute',
                            top: `${popupPosition.top}px`,
                            left: `${popupPosition.left}px`,
                            zIndex: 1000
                        }}
                    />
                )}

                {showTimeSlotsPopup && timeSlotsPopupPosition && (
                    <EditTimeSlotsPopup
                        selectedDate={selectedDate?.toDateString() || ""}
                        onClose={handleClosePopup}
                        slots={selectedSlots}
                        style={{
                            position: 'absolute',
                            top: `${timeSlotsPopupPosition.top}px`,
                            left: `${timeSlotsPopupPosition.left}px`,
                            zIndex: 1000
                        }}
                        onUpdateSlots={handleUpdateSlots}
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
