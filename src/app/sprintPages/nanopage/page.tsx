"use client";

import Footer from "./_component/Footer";
import Header from "./_component/Header";
import MainContent from "./_component/MainContent";
import React, { useState, useEffect } from "react";
import SecondPopup from "./_component/SecondPopup";

const Page = () => {
  const [offlinePopup, setOfflinePopup] = useState<boolean>(false);
  const [openSecondPopup, setOpenSecondPopup] = useState<boolean>(false);

  const handleOfflineBooking = () => {
    setOfflinePopup(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.classList.add("overflow-hidden");
  };

  const handleOfflineBookingClose = () => {
    setOfflinePopup(false);
    setOpenSecondPopup(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.classList.add("overflow-hidden");
  };

  const handleClose = ()=>{
    setOfflinePopup(false);
    document.body.classList.remove("overflow-hidden");

  }
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
    <div className="min-h-screen">
      <Header
        offlinePopup={offlinePopup}
        handleOfflineBookingClose={handleOfflineBookingClose}
        openSecondPopup={openSecondPopup}
        handleClose={handleClose}
      />
      <MainContent handleOfflineBooking={handleOfflineBooking} />
      <Footer />
      {openSecondPopup && <SecondPopup />}
    </div>
  );
};

export default Page;

