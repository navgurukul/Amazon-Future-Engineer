import EditDatePopup from "./EditDatePopup";
import EditTimeSlotsPopup from "./EditTimeSlotsPopup";
import { useAllBookings } from "./allBookings";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";


interface EventSlot {
    id: number;
    start: string;
    end: string;
    program_id: number;
    venue_id: number;
    date: string;
    available_capacity: number;
    status: string;
    booking_id: number | undefined;
}

const TimeSlotCalendar: React.FC = () => {
    const calendarRef = useRef<any>(null);
    const [currentMonthYear, setCurrentMonthYear] = useState<string>("");
    const { events } = useAllBookings();
    const [showPopup, setShowPopup] = useState(false);
    const [showTimeSlotsPopup, setShowTimeSlotsPopup] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [popupPosition, setPopupPosition] = useState<{ top: number; left: number } | null>(null);
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
        setPopupPosition({ top: top - 50, left: left + (el.offsetWidth / 2) - 50 });

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
                // program_id: parseInt(programId.replace('Program ', '')),
                program_id: 1,
                // venue_id: parseInt(venueId),
                venue_id: 2,
                date: date.toISOString().split('T')[0],
                available_capacity: event.extendedProps.availableCapacity,
                status: event.extendedProps.status,
                booking_id: event.extendedProps.bookingId,
            };
        });

        setSelectedSlots(slotsForDate);

        setShowPopup(true);
    };

    const handleEditThisDate = () => {
        setShowPopup(false);
        setShowTimeSlotsPopup(true);
    };

    const handleEditAllDays = () => {
        setShowPopup(false);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        setShowTimeSlotsPopup(false);
    };

    const handleUpdateSlots = async (
      updatedSlots: EventSlot[]
    ): Promise<void> => {
      console.log("handleUpdateSlots called with:", updatedSlots);
      try {
        console.log("Starting to update slots:", updatedSlots);

        // Ensure all slots are processed in parallel
        await Promise.all(
          updatedSlots.map(async (slot) => {
            if (!slot.id) {
              console.warn("Slot ID is missing for a slot:", slot);
              return;
            }

            console.log("Updating slot:", slot);

            console.log(
              "Slot updated successfully, fetching data for slot:",
              slot.id
            );
          })
        );

        console.log("Successfully updated all slots.");

        const calendarApi = calendarRef.current?.getApi?.();
        if (calendarApi) {
          calendarApi.refetchEvents();
        } else {
          console.warn("calendarRef is not available or getApi is undefined");
        }
          setSelectedSlots(updatedSlots);

        setShowTimeSlotsPopup(false);
      } catch (error) {
        console.error("Error updating slots:", error);
      }
    };



    const isBeforeToday = (date: Date) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return date < today;
    };

    const handleDayCellClassNames = (arg: any) => {
      const date = arg.date;

      if (isBeforeToday(date) || date.getDay() === 0) {
        return ["disabled-date"];
      }

      return [];
    };

    const handleDayCellDidMount = (arg: any) => {
      const date = arg.date;

      if (isBeforeToday(date) || date.getDay() === 0) {
        arg.el.style.backgroundColor = "#f5f5f5";
      }
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
                    dayCellClassNames={handleDayCellClassNames}
                    dayCellDidMount={handleDayCellDidMount}
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
        {(showPopup || showTimeSlotsPopup) && (
            <>
                <div className="overlay" />
                {showPopup && popupPosition && (
                    <EditDatePopup
                        selectedDayName={selectedDayName}
                        onEditThisDate={handleEditThisDate}
                        onEditAllThursdays={handleEditAllDays}
                        onClose={handleClosePopup}
                        style={{
                            position: 'fixed',
                            top: `${popupPosition.top}px`,
                            left: `${popupPosition.left}px`,
                            zIndex: 1000
                        }}
                    />
                )}

                {showTimeSlotsPopup && (
                    <EditTimeSlotsPopup
                        selectedDate={selectedDate?.toDateString() || ""}
                        onClose={handleClosePopup}
                        slots={selectedSlots}
                        style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1000
        }}
                        onUpdateSlots={handleUpdateSlots}
                    />
                )}
            </>
        )}
            </div>
            <style jsx global>{`
                .calendar-container {
                    background-color: #fff;
                    border-radius: 12px;
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

                    .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5); /* semi-transparent black */
            z-index: 999; /* Ensure it's below the popup */
        }

         .disabled-date {
                    pointer-events: none;
                }
            `}</style>
        </div>
    );
};

export default TimeSlotCalendar;