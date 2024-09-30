import { useEffect, useState } from "react";
import { getSlots } from "@/utils/api";

// Define the Event interface
interface Event {
  id: string;
  title: string;
  start: Date;
  end: Date;
  allDay: boolean;
  extendedProps: {
    availableCapacity: number;
    status: string;
  };
}

// Custom hook to handle fetching slots
export const useAllBookings = () => {
  const [events, setEvents] = useState<Event[]>([]);

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
            title: `Program ${slot.program_id} - Venue ${slot.venue_id}`,
            start: startDateTime.toISOString(), // Ensure ISO format
            end: endDateTime.toISOString(),
            extendedProps: {
              availableCapacity: slot.available_capacity,
              status: slot.status,
            },
          };
        });

        setEvents(mappedSlots); // Set the mapped slots to state
      } catch (error) {
        console.error("Error fetching slots:", error);
      }
    };

    fetchApiData();
  }, []);

  return events;
};
