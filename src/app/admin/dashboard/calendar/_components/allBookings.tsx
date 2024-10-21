import ErrorBookingPopup from "./ErrorBookingPopup";
import { getSlots } from "@/utils/api";
import { useEffect, useState } from "react";


// Define the Event interface
interface Event {
  id: string;
  title: string;
  start: Date;
  end: Date;
  allDay: boolean;
  extendedProps: {
    bookingId: any;
    availableCapacity: number;
    status: string;
  };
}

// Custom hook to handle fetching slots
export const useAllBookings = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const slots = await getSlots(2); // API call with venue_id as 1 by default
        // Map the API response to the event structure
        const mappedSlots: Event[] = slots.data.map((slot: any) => {
          const slotDate = new Date(slot.date); // Convert slot date string to Date object
          // const [startHour, startMinute] = slot.start_time.split(":").map(Number);
          // const [endHour, endMinute] = slot.end_time.split(":").map(Number);

          const startDateTime = new Date(`${slot.date.split('T')[0]}T${slot.start_time}:00`);
          const endDateTime = new Date(`${slot.date.split('T')[0]}T${slot.end_time}:00`);

          const programType =
            slot.program_id === 1 ? "Nano" : slot.program_id === 2 ? "Mini" : "Mega";
          

          //   return {
          //     id: slot.id.toString(),
          //     title: `Slot at ${slot.start_time}`, // Adjust title as needed
          //     start: new Date(slotDate.setHours(startHour, startMinute)), // Create start time
          //     end: new Date(slotDate.setHours(endHour, endMinute)), // Create end time
          //     allDay: false,
          //     extendedProps: {
          //       availableCapacity: slot.available_capacity,
          //       status: slot.status,
          //     },
          //   };
          // });
          return {
            id: slot.id,
            // title: `Program ${slot.program_id} - Venue ${slot.venue_id} `,
              title: `${programType}: ${startDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - ${endDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`,

            // time: `Nano: ${startDateTime} - ${endDateTime}`,
            // start: startDateTime.toISOString(), // Ensure ISO format
            // end: endDateTime.toISOString(),
            start: startDateTime, // Ensure ISO format
            end: endDateTime,
            extendedProps: {
              availableCapacity: slot.available_capacity,
              status: slot.status,
            },
          };
        });

        setEvents(mappedSlots); // Set the mapped slots to state
      } catch (error) {
        setError("We are experiencing a very high demand right now. Please try again in a few minutes.");
        console.error("Error fetching slots:", error);
      }
    };

    fetchApiData();
  }, []);

  const closePopup = () => setError(null);

  return { events, error, closePopup };

  // return events;
};