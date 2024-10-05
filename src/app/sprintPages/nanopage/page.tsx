// "use client";
// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
// import MainContent from "./_component/MainContent";
// import React, { useState, useEffect } from "react";
// import SecondPopup from "./_component/SecondPopup";
// import Popup from "./_component/Popup";

// const Page = () => {
//   const [offlinePopup, setOfflinePopup] = useState<boolean>(false);
//   const [openSecondPopup, setOpenSecondPopup] = useState<boolean>(false);

//   const handleOfflineBooking : ()=> void = () => {
//     setOfflinePopup(true);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     document.body.classList.add("overflow-hidden");
//   };

//   const handleOfflineBookingClose = () => {
//     setOfflinePopup(false);
//     setOpenSecondPopup(true);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     document.body.classList.add("overflow-hidden");
//   };

//   const handleClose = ()=>{
//     setOfflinePopup(false);
//     document.body.classList.remove("overflow-hidden");

//   }
//   // Close the second popup after 2 seconds
//   useEffect(() => {
//     if (openSecondPopup) {
//       const timer = setTimeout(() => {
//         setOpenSecondPopup(false);
//         document.body.classList.remove("overflow-hidden");
//       }, 5000);

//       return () => clearTimeout(timer); // Clean up the timer on unmount or change
//     }
//   }, [openSecondPopup]);

//   return (
//     <div className="min-h-screen">
//       <Header
//         isLoggedIn={true}
//         handleOfflineBooking={handleOfflineBooking}
//         offlinePopup={offlinePopup}
//         openSecondPopup={openSecondPopup}
//       />
//       <MainContent handleOfflineBooking={handleOfflineBooking} />
//       <Footer />
//       <Popup offlinePopup={offlinePopup}
//       handleOfflineBookingClose={handleOfflineBookingClose}
//       // openSecondPopup={openSecondPopup}
//       handleClose={handleClose}/>
//       {openSecondPopup && <SecondPopup />}
//     </div>
//   );
// };

// export default Page;



"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainContent from "./_component/MainContent";
import React, { useState, useEffect } from "react";
import SecondPopup from "./_component/SecondPopup";
import Popup from "./_component/Popup";

const Page = () => {
  const [offlinePopup, setOfflinePopup] = useState<boolean>(false);
  const [openSecondPopup, setOpenSecondPopup] = useState<boolean>(false);

  const handleOfflineBooking: () => void = () => {
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

  const handleClose = () => {
    setOfflinePopup(false);
    document.body.classList.remove("overflow-hidden");
  };

  // Remove the timer and directly trigger the "Go to Sprint" button action
  useEffect(() => {
    if (openSecondPopup) {
      document.body.classList.add("overflow-hidden");  
    }
  }, [openSecondPopup]);

  

  return (
    <div className="min-h-screen">
      <Header
        isLoggedIn={true}
        handleOfflineBooking={handleOfflineBooking}
        offlinePopup={offlinePopup}
        openSecondPopup={openSecondPopup}
      />
      <MainContent handleOfflineBooking={handleOfflineBooking} />
      <Footer />
      <Popup
        offlinePopup={offlinePopup}
        handleOfflineBookingClose={handleOfflineBookingClose}
        handleClose={handleClose}
      />
      {openSecondPopup && <SecondPopup />}
    </div>
  );
};

export default Page;

