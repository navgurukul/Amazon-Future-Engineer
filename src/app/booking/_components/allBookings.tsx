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
        const slots = await getSlots(1); // API call with venue_id as 1 by default
        console.log('Fetched slots:', slots);

        // Map the API response to the event structure
        const mappedSlots: Event[] = slots.map((slot: any) => {
          const slotDate = new Date(slot.date); // Convert slot date string to Date object
          const [startHour, startMinute] = slot.start_time.split(":").map(Number);
          const [endHour, endMinute] = slot.end_time.split(":").map(Number);

          return {
            id: slot.id.toString(),
            title: `Slot at ${slot.start_time}`, // Adjust title as needed
            start: new Date(slotDate.setHours(startHour, startMinute)), // Create start time
            end: new Date(slotDate.setHours(endHour, endMinute)), // Create end time
            allDay: false,
            extendedProps: {
              availableCapacity: slot.available_capacity,
              status: slot.status,
            },
          };
        });

        console.log('Mapped events:', mappedSlots);
        setEvents(mappedSlots); // Set the mapped slots to state
      } catch (error) {
        console.error("Error fetching slots:", error);
      }
    };

    fetchApiData();
  }, []);

  return events;
};
