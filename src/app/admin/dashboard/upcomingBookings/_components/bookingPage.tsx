import React, { useState } from 'react';
import BookingDetailsPage from  "./singleUserData"
import SprintDetailsPage from "./sprint-details"

// Assuming this is defined in a separate file and imported
// import { staticBookingDetails } from './bookingData';

export default function CombinedBookingPage() {
  const [sprintStarted, setSprintStarted] = useState(true);

  const handleStartSprint = () => {
    setSprintStarted(false);
  };

  return (
    <>
      {!sprintStarted ? (
        <BookingDetailsPage onStartSprint ={handleStartSprint} />
      ) : (
        <SprintDetailsPage />
      )}
    </>
  );
}