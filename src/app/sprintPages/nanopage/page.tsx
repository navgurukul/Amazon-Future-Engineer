"use client";

import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import CallPopup from "./_component/CallPopup";
import MainContent from "./_component/MainContent";
import Popup from "./_component/Popup";
import SecondPopup from "./_component/SecondPopup";
import React, { useState, useEffect } from "react";

const Page = () => {
  const [offlinePopup, setOfflinePopup] = useState<boolean>(false);
  const [openSecondPopup, setOpenSecondPopup] = useState<boolean>(false);
  const [bookingPopup,setBookingPopup] = useState<boolean>(false)


  const handleBooking: () => void = () => {
    setBookingPopup(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.classList.add("overflow-hidden");
  };

  const handleOfflineBooking: () => void = () => {
    setOfflinePopup(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.classList.add("overflow-hidden");
  };

  const handleOfflineBookingClose = () => {
    setBookingPopup(false);
    setOpenSecondPopup(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.classList.add("overflow-hidden");
  };

  const handleClose = () => {
    setOfflinePopup(false);
    setBookingPopup(false);
    document.body.classList.remove("overflow-hidden");
  };
  // Close the second popup after 2 seconds
  useEffect(() => {
    if (openSecondPopup) {
      const timer = setTimeout(() => {
        setOpenSecondPopup(false);
        document.body.classList.remove("overflow-hidden");
      }, 5000);

      return () => clearTimeout(timer); // Clean up the timer on unmount or change
    }
  }, [openSecondPopup]);

  return (
    <div className="min-h-screen pb-32 lg:pb-0">
      <Header
        handleOfflineBooking={handleOfflineBooking}
        offlinePopup={offlinePopup}
        openSecondPopup={openSecondPopup}
        bookingPopup={bookingPopup}
      />
      <MainContent handleOfflineBooking={handleBooking} />
      <Footer handleOfflineBooking={handleOfflineBooking}/>
      <Popup
        offlinePopup={bookingPopup}
        handleOfflineBookingClose={handleOfflineBookingClose}
        // openSecondPopup={openSecondPopup}
        handleClose={handleClose}
      />
      {openSecondPopup && <SecondPopup />}
      <CallPopup
        offlinePopup={offlinePopup}
        handleClose={handleClose}
      />
    </div>
  );
};

export default Page;
