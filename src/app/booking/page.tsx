
"use client";

import React from "react";
import Calendar from "@/components/ui/FullCalendar";
import { useAllBookings } from "./_components/allBookings";

const Home: React.FC = () => {
  const events = useAllBookings(); // Use the custom hook to get events

  return (
    <div className="min-h-screen">
      {/* Pass events data to the Calendar component */}
      <Calendar initialEvents={events} />
    </div>
  );
};

export default Home;


