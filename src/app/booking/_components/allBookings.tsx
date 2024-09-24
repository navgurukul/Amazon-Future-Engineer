"use client"

import { useEffect, useState } from "react";

// Define the Event interface
interface Event {
  id: string;
  title: string;
  start: Date;
  end: Date;
  allDay: boolean;
  extendedProps: {
    phoneNo: string;
    numStudents: number;
  };
}

// Custom hook to handle events data
export const useAllBookings = () => {
  const [events, setEvents] = useState<Event[]>([]);

  // Dummy data (initial events)
  const dummyEvents: Event[] = [
    {
      id: "1",
      title: "Team Meeting",
      start: new Date(), // Current date and time
      end: new Date(new Date().getTime() + 3600000), // 1 hour later
      allDay: false,
      extendedProps: {
        phoneNo: "7234567890",
        numStudents: 5,
      },
    },
    {
      id: "2",
      title: "Project Deadline",
      start: new Date(new Date().setDate(new Date().getDate() + 1)), // Next day
      end: new Date(new Date().setDate(new Date().getDate() + 1)), // Same day
      allDay: true,
      extendedProps: {
        phoneNo: "9987654321",
        numStudents: 10,
      },
    },
    {
        id: "3",
        title: "Project Final Deadline",
        start: new Date(new Date().setDate(new Date().getDate() + 1)), // Next day
        end: new Date(new Date().setDate(new Date().getDate() + 1)), // Same day
        allDay: true,
        extendedProps: {
          phoneNo: "9987654321",
          numStudents: 10,
        },
      },
  ];

  // Simulate fetching data from an API
  useEffect(() => {
    const fetchApiData = async () => {
      // Simulate API call with a timeout (replace with real API call)
      setTimeout(() => {
        const apiEvents: Event[] = [
          {
            id: "3",
            title: "Client Call",
            start: new Date(new Date().setDate(new Date().getDate() + 2)),
            end: new Date(new Date().setDate(new Date().getDate() + 2)),
            allDay: false,
            extendedProps: {
              phoneNo: "9678901234",
              numStudents: 8,
            },
          },
        ];
        setEvents([...dummyEvents, ...apiEvents]);
      }, 1000); // Simulate API delay
    };

    fetchApiData();
  }, []);

  // Return the events
  return events;
};
