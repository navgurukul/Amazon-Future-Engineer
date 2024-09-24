"use client";

import React, { useState, useEffect } from "react";
import {
  formatDate,
  DateSelectArg,
  EventClickArg,
  EventApi,
} from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"; // Adjust the path if needed

const formatTime = (date: Date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const period = hours >= 12 ? "PM" : "AM";
  const adjustedHours = hours % 12 || 12; // Convert hours to 12-hour format
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${adjustedHours}:${formattedMinutes} ${period}`;
};

interface CalendarProps {
  initialEvents?: any[]; // Accept initial events as a prop
}

const Calendar: React.FC<CalendarProps> = ({ initialEvents = [] }) => {
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>(initialEvents);
// const Calendar: React.FC = () => {
//   const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [phoneNo, setPhoneNo] = useState<string>("");
  const [numStudents, setNumStudents] = useState<number | "">("");
  const [timeSlot, setTimeSlot] = useState<string>(""); // State for time slot
  const [selectedDate, setSelectedDate] = useState<DateSelectArg | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({}); // State for error messages

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedEvents = localStorage.getItem("events");
      if (savedEvents) {
        setCurrentEvents(JSON.parse(savedEvents));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("events", JSON.stringify(currentEvents));
    }
  }, [currentEvents]);

  const validateInputs = () => {
    const newErrors: { [key: string]: string } = {};
    const time = parseInt(timeSlot, 10);
    const phoneRegex = /^[0-9]{10}$/; 
    const phoneDigitsOnly = /^[0-9]+$/;
    const phonePattern = /^[6-9]\d{9}$/;

    if (isNaN(time) || time < 1 || time > 24) {
      newErrors.timeSlot = "Please enter a time between 1 and 24.";
    }

    if (!phoneRegex.test(phoneNo) || !phoneDigitsOnly.test(phoneNo) || !phonePattern.test(phoneNo)) {
      newErrors.phoneNo = "Phone number is invalid.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleDateClick = (selected: DateSelectArg) => {
    setSelectedDate(selected);
    setIsDialogOpen(true);
  };

  const handleEventClick = (selected: EventClickArg) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event "${selected.event.title}"?`
      )
    ) {
      selected.event.remove();
    }
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setName("");
    setPhoneNo("");
    setNumStudents("");
    setTimeSlot(""); // Reset time slot
    setErrors({}); // Clear errors
  };

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateInputs() && name && phoneNo && numStudents && selectedDate) {
      const calendarApi = selectedDate.view.calendar;

      // Handle time slot logic
      const startHour = parseInt(timeSlot, 10) || 14; // Default to 2 PM if timeSlot is empty
      const endHour = startHour + 3; // +3 hours

      const startDate = new Date(selectedDate.start);
      startDate.setHours(startHour, 0, 0); // Set start time

      const endDate = new Date(startDate);
      endDate.setHours(endHour, 0, 0); // Set end time

      const newEvent = {
        id: `${selectedDate.start.toISOString()}-${name}`,
        title: `${name} (${formatTime(startDate)} - ${formatTime(endDate)})`,
        start: startDate.toISOString(),
        end: endDate.toISOString(),
        allDay: selectedDate.allDay,
        extendedProps: {
          phoneNo,
          numStudents,
        },
      };

      calendarApi.addEvent(newEvent);
      handleCloseDialog();
    }
  };

  return (
    <div>
      <div className="flex w-full px-10 justify-start items-start gap-8">
        <div className="w-3/12">
          <div className="py-10 text-2xl font-extrabold px-7">
            Calendar Events
          </div>
          <ul className="space-y-4">
            {currentEvents.length <= 0 && (
              <div className="italic text-center text-gray-400">
                No Events Present
              </div>
            )}

            {currentEvents.length > 0 &&
              currentEvents.map((event: EventApi) => (
                <li
                  className="border border-gray-200 shadow px-4 py-2 rounded-md text-blue-800"
                  key={event.id}
                >
                  {event.title}
                  <br />
                  <label className="text-slate-950">
                    {formatDate(event.start!, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}{" "}
                    {/* Format event start date */}
                    <br />
                    Phone No: {event.extendedProps.phoneNo}
                    <br />
                    No. of Students: {event.extendedProps.numStudents}
                  </label>
                </li>
              ))}
          </ul>
        </div>

        <div className="w-9/12 mt-8">
          <FullCalendar
            height={"85vh"}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={
              typeof window !== "undefined"
                ? JSON.parse(localStorage.getItem("events") || "[]")
                : []
            }
          />
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Event Details</DialogTitle>
          </DialogHeader>
          <form className="space-y-4 mb-4" onSubmit={handleAddEvent}>
            <div>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="border border-gray-200 p-3 rounded-md text-lg w-full"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Phone No"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                required
                maxLength={10}
                minLength={10}
                className={`border border-gray-200 p-3 rounded-md text-lg w-full ${errors.phoneNo ? 'border-red-500' : ''}`}
              />
              {errors.phoneNo && <p className="text-red-500 text-sm">{errors.phoneNo}</p>}
            </div>
            <div>
              <input
                type="number"
                placeholder="No. of students"
                value={numStudents}
                onChange={(e) => setNumStudents(e.target.value ? +e.target.value : "")}
                required
                className="border border-gray-200 p-3 rounded-md text-lg w-full"
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Start Hour (1-24)"
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
                min={1}
                max={24}
                className={`border border-gray-200 p-3 rounded-md text-lg w-full ${errors.timeSlot ? 'border-red-500' : ''}`}
              />
              {errors.timeSlot && <p className="text-red-500 text-sm">{errors.timeSlot}</p>}
            </div>
            <button
              className="bg-green-500 text-white p-3 mt-5 rounded-md w-full"
              type="submit"
            >
              Add
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Calendar;
