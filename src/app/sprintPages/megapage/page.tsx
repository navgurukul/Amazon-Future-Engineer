"use client";

import CallPopup from "../nanopage/_component/CallPopup";
import Footer from "./_component/Footer";
import MainContent from "./_component/MainContent";
import Popup from "./_component/Popup";
import SecondPopup from "./_component/SecondPopup";
// import Header from "./_component/Header";
import Header from "@/components/Header";
import React, { useState, useEffect } from "react";


const Page = () => {
  const [offlinePopup, setOfflinePopup] = useState<boolean>(false);
  const [openSecondPopup, setOpenSecondPopup] = useState<boolean>(false);
  const [bookingPopup, setBookingPopup] = useState<boolean>(false);

  const handleBooking: () => void = () => {
    setBookingPopup(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.classList.add("overflow-hidden");
  };

  const handleOfflineBooking : ()=> void = () => {
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

  function handleBookSessionClick(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="min-h-screen pb-20 lg:pb-0">
      {/* <Header
        isLoggedIn={true}
        handleOfflineBooking={handleOfflineBooking}
        offlinePopup={offlinePopup}
        openSecondPopup={openSecondPopup}
      /> */}

      <Header
        handleOfflineBooking={handleOfflineBooking}
        offlinePopup={offlinePopup}
        openSecondPopup={openSecondPopup}
        bookingPopup={bookingPopup}
        bgColor = ""
        handleBookSessionClick={handleBookSessionClick}

      />
      {/* <MainContent handleOfflineBooking={handleOfflineBooking} /> */}
      <MainContent/>
      <Footer handleOfflineBooking={handleOfflineBooking}/>
      {/* <Popup offlinePopup={offlinePopup} */}
      <Popup offlinePopup={bookingPopup}
      handleOfflineBookingClose={handleOfflineBookingClose}
      // openSecondPopup={openSecondPopup}
      handleClose={handleClose}/>
      {openSecondPopup && <SecondPopup />}
      <CallPopup
        offlinePopup={offlinePopup}
        handleClose={handleClose} handleOfflineBookingClose={function (): void {
          throw new Error("Function not implemented.");
        } }      />
    </div>
  );
};

export default Page;